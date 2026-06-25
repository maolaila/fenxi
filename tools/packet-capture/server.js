const http = require("http");
const fs = require("fs");
const path = require("path");
const { capturePacket, decryptPayload, buildTransactionPreview } = require("./capture");

const publicDir = path.join(__dirname, "public");
const defaultPort = 17890;

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      result[key] = true;
    } else {
      result[key] = next;
      index += 1;
    }
  }
  return result;
}

function sendJson(res, status, data) {
  const body = JSON.stringify(data, null, 2);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

function serveStatic(req, res) {
  const url = new URL(req.url, "http://127.0.0.1");
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(publicDir, pathname));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, body) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const type =
      ext === ".html"
        ? "text/html; charset=utf-8"
        : ext === ".css"
        ? "text/css; charset=utf-8"
        : ext === ".js"
        ? "application/javascript; charset=utf-8"
        : "application/octet-stream";
    res.writeHead(200, { "content-type": type });
    res.end(body);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const body = Buffer.concat(chunks).toString("utf8");
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

async function handleCapture(req, res) {
  try {
    const body = await readBody(req);
    if (!body.url) {
      sendJson(res, 400, { error: "url is required" });
      return;
    }
    const report = await capturePacket({
      url: body.url,
      endpoint: body.endpoint || "",
      terminal: body.terminal || "h5",
      merchant: body.merchant || "",
      username: body.username || "",
      password: body.password || "",
      waitMs: body.waitMs || 5000,
      loginWaitMs: body.loginWaitMs || 3000,
      headed: !!body.headed,
    });
    sendJson(res, 200, {
      ok: true,
      outputDir: report.outputDir,
      files: report.files,
      target: report.target,
      transactions: report.transactions.length,
      transactionsPreview: report.transactions.map(buildTransactionPreview),
      observedApiUrls: report.observedApiUrls,
      login: report.login,
      systemConfigSelected: report.systemConfigSelected,
      packageReleaseCandidates: report.packageInfo.releaseCandidates.slice(0, 8),
    });
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: error && error.message ? error.message : String(error),
      stack: error && error.stack ? error.stack : null,
    });
  }
}

async function handleDecrypt(req, res) {
  try {
    const body = await readBody(req);
    if (!body.url) {
      sendJson(res, 400, { ok: false, error: "url is required" });
      return;
    }
    if (!body.payload) {
      sendJson(res, 400, { ok: false, error: "encrypted payload is required" });
      return;
    }
    const result = await decryptPayload({
      url: body.url,
      terminal: body.terminal || "h5",
      payload: body.payload,
      key: body.key || "",
      headed: !!body.headed,
    });
    sendJson(res, 200, result);
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: error && error.message ? error.message : String(error),
      stack: error && error.stack ? error.stack : null,
    });
  }
}

function createServer() {
  return http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/api/capture") {
      handleCapture(req, res);
      return;
    }
    if (req.method === "POST" && req.url === "/api/decrypt") {
      handleDecrypt(req, res);
      return;
    }
    if (req.method === "GET") {
      serveStatic(req, res);
      return;
    }
    res.writeHead(405);
    res.end("Method not allowed");
  });
}

const args = parseArgs(process.argv.slice(2));
const port = Number(args.port || process.env.PORT || defaultPort);
const host = args.host || "127.0.0.1";

createServer().listen(port, host, () => {
  console.log(`Packet capture UI: http://${host}:${port}`);
});
