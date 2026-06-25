const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const os = require("os");
const Module = require("module");

function requirePlaywright() {
  try {
    return require("playwright");
  } catch (error) {
    const homeDirs = Array.from(
      new Set([process.env.USERPROFILE, process.env.HOME, os.homedir()].filter(Boolean))
    );
    const fallbackDirs = [
      process.env.PLAYWRIGHT_NODE_PATH,
      ...homeDirs.map((homeDir) =>
        path.join(homeDir, ".cache", "codex-runtimes", "codex-primary-runtime", "dependencies", "node", "node_modules")
      ),
      ...homeDirs.map((homeDir) =>
        path.join(
          homeDir,
          ".cache",
          "codex-runtimes",
          "codex-primary-runtime",
          "dependencies",
          "node",
          "node_modules",
          ".pnpm",
          "node_modules"
        )
      ),
    ].filter(Boolean);
    const existingNodePath = process.env.NODE_PATH
      ? process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
      : [];
    process.env.NODE_PATH = Array.from(new Set([...existingNodePath, ...fallbackDirs])).join(path.delimiter);
    Module._initPaths();
    try {
      return require("playwright");
    } catch (_) {}
    for (const dir of fallbackDirs) {
      try {
        const candidate = path.join(dir, "playwright");
        if (fs.existsSync(candidate)) {
          return require(candidate);
        }
      } catch (_) {}
    }
    const message = [
      "Cannot load playwright.",
      "Run these commands first:",
      "  cd tools/packet-capture",
      "  npm install",
      "  npx playwright install chromium",
      "",
      "Original error:",
      error && error.message ? error.message : String(error),
      "",
      "Fallback dirs checked:",
      ...fallbackDirs.map((dir) => `  ${dir}`),
    ].join("\n");
    const wrapped = new Error(message);
    wrapped.cause = error;
    throw wrapped;
  }
}

const API_PATH_PREFIXES = ["/api/", "/party/", "/lottery-opencode/"];

function sha256(value) {
  return crypto.createHash("sha256").update(String(value || ""), "utf8").digest("hex");
}

function nowStamp(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    "-",
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
  ].join("");
}

function safeName(value, fallback) {
  const text = String(value || fallback || "unknown")
    .trim()
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "-")
    .replace(/\s+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return text || fallback || "unknown";
}

function tryParseJson(value) {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed);
  } catch (_) {
    return null;
  }
}

function parseNestedResponseBody(body) {
  const parsed = tryParseJson(body);
  let dataParsed = null;
  let encryptedBody = null;
  if (parsed && typeof parsed === "object") {
    if (typeof parsed.data === "string") {
      dataParsed = tryParseJson(parsed.data);
    } else if (parsed.data && typeof parsed.data === "object") {
      dataParsed = parsed.data;
    }
    encryptedBody =
      (dataParsed && dataParsed.body) ||
      parsed.body ||
      (parsed.data && parsed.data.body) ||
      null;
  }
  return { parsed, dataParsed, encryptedBody };
}

function stringifyForParse(value) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch (_) {
    return String(value || "");
  }
}

function firstStringCandidate(candidates) {
  for (const candidate of candidates) {
    if (typeof candidate === "string" && candidate.trim()) {
      return candidate.trim();
    }
  }
  return "";
}

function normalizeEndpointList(endpoint) {
  if (!endpoint) return [];
  if (Array.isArray(endpoint)) {
    return endpoint.map((item) => String(item).trim()).filter(Boolean);
  }
  return String(endpoint)
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeTargetUrl(input, terminal) {
  const inputUrl = String(input || "").trim();
  if (!inputUrl) {
    throw new Error("url is required");
  }

  const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(inputUrl);
  const reasons = [];
  let parsed;
  try {
    parsed = new URL(hasProtocol ? inputUrl : `https://${inputUrl}`);
  } catch (error) {
    throw new Error(`Invalid URL: ${inputUrl}`);
  }

  if (!hasProtocol) {
    reasons.push("added https protocol");
  }

  const isBareRoot = (!parsed.pathname || parsed.pathname === "/") && !parsed.hash;
  if (terminal === "h5" && isBareRoot) {
    parsed.pathname = "/a/";
    parsed.hash = "/home/lottery";
    reasons.push("h5 bare domain -> /a/#/home/lottery");
  }

  return {
    inputUrl,
    url: parsed.toString(),
    normalized: reasons.length > 0,
    normalizationReasons: reasons,
  };
}

function pathnameOf(value) {
  try {
    return new URL(value).pathname;
  } catch (_) {
    return String(value || "");
  }
}

function shouldCaptureUrl(url, endpoints) {
  const pathname = pathnameOf(url);
  if (!endpoints.length) {
    return API_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  }
  return endpoints.some((endpoint) => {
    if (endpoint === "*") return true;
    const endpointPath = pathnameOf(endpoint);
    return (
      url.includes(endpoint) ||
      pathname === endpointPath ||
      pathname.includes(endpointPath) ||
      pathname.includes(endpoint)
    );
  });
}

function isApiUrl(url) {
  const pathname = pathnameOf(url);
  return API_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function observeApi(observedApiRequests, request, patch) {
  const url = request.url();
  if (!isApiUrl(url)) return;
  const method = request.method();
  const key = `${method} ${url}`;
  const now = new Date().toISOString();
  const current =
    observedApiRequests.get(key) ||
    {
      method,
      url,
      resourceType: request.resourceType(),
      count: 0,
      statuses: [],
      firstSeenAt: now,
      lastSeenAt: now,
      failureText: null,
    };
  if (patch.phase === "request") {
    current.count += 1;
  }
  if (patch.status !== undefined && patch.status !== null && !current.statuses.includes(patch.status)) {
    current.statuses.push(patch.status);
  }
  if (patch.failureText) {
    current.failureText = patch.failureText;
  }
  current.lastSeenAt = now;
  observedApiRequests.set(key, current);
}

function isPackageResource(url, resourceType) {
  const lower = url.toLowerCase();
  return (
    resourceType === "document" ||
    lower.includes("/configstatic/") ||
    lower.includes("/static/js/") ||
    lower.includes("/static/css/") ||
    lower.endsWith(".js") ||
    lower.endsWith(".css")
  );
}

function parseControlVersion(value) {
  if (!value) return null;
  const match = String(value).match(/(?:^|[?&])v=(\d{4})\.(\d{4})\.(\d{6})/);
  if (!match) return null;
  const year = match[1];
  const month = match[2].slice(0, 2);
  const day = match[2].slice(2, 4);
  const hh = match[3].slice(0, 2);
  const mm = match[3].slice(2, 4);
  const ss = match[3].slice(4, 6);
  return {
    raw: match[0].replace(/^[?&]v=/, ""),
    localText: `${year}-${month}-${day} ${hh}:${mm}:${ss}`,
    note: "Parsed from control.js v query. Timezone follows publisher convention.",
  };
}

function buildCryptoInitScript() {
  return `
(() => {
  const state = window.__packetCaptureCrypto = window.__packetCaptureCrypto || {
    calls: [],
    logs: []
  };

  function cloneForJson(value) {
    if (value === undefined) return undefined;
    if (value === null) return null;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      return value;
    }
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (error) {
      return String(value);
    }
  }

  function parseJson(value) {
    if (typeof value !== "string") return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function record(entry) {
    try {
      state.calls.push(Object.assign({
        at: Date.now(),
        href: location.href
      }, entry));
    } catch (error) {
      state.logs.push({ at: Date.now(), message: String(error) });
    }
  }

  function wrapFunction(name, type) {
    const original = window[name];
    if (typeof original !== "function" || original.__packetCaptureWrapped) {
      return;
    }
    const wrapped = function() {
      const args = Array.prototype.slice.call(arguments);
      let result;
      let thrown;
      try {
        result = original.apply(this, args);
        return result;
      } catch (error) {
        thrown = error;
        throw error;
      } finally {
        if (type === "encrypt") {
          record({
            type: "AESEnc",
            key: cloneForJson(args[0]),
            plaintext: cloneForJson(args[1]),
            plaintextJson: parseJson(args[1]),
            ciphertext: cloneForJson(result),
            error: thrown ? String(thrown && thrown.message ? thrown.message : thrown) : null
          });
        } else if (type === "decrypt") {
          record({
            type: "AESDec",
            key: cloneForJson(args[0]),
            ciphertext: cloneForJson(args[1]),
            plaintext: cloneForJson(result),
            plaintextJson: parseJson(result),
            error: thrown ? String(thrown && thrown.message ? thrown.message : thrown) : null
          });
        } else if (type === "rsa") {
          record({
            type: "RSA",
            plaintext: cloneForJson(args[0]),
            ciphertext: cloneForJson(result),
            error: thrown ? String(thrown && thrown.message ? thrown.message : thrown) : null
          });
        }
      }
    };
    try {
      Object.defineProperty(wrapped, "__packetCaptureWrapped", { value: true });
      Object.defineProperty(wrapped, "__packetCaptureOriginal", { value: original });
    } catch (error) {}
    window[name] = wrapped;
    state.logs.push({ at: Date.now(), message: "wrapped " + name });
  }

  function wrapAll() {
    wrapFunction("AESEnc", "encrypt");
    wrapFunction("AESDec", "decrypt");
    wrapFunction("RSA", "rsa");
  }

  wrapAll();
  const timer = setInterval(wrapAll, 5);
  setTimeout(() => clearInterval(timer), 30000);
})();
`;
}

function extractManualDecryptInput(payload, suppliedKey) {
  const inputText = stringifyForParse(payload).trim();
  if (!inputText) {
    throw new Error("encrypted payload is required");
  }

  const parsed = tryParseJson(inputText);
  const root = parsed && typeof parsed === "object" ? parsed : null;
  const nested = parseNestedResponseBody(inputText);
  let encryptedBody = nested.encryptedBody || "";
  let bodySource = encryptedBody ? "response body wrapper" : "";

  if (root) {
    const firstTransaction = Array.isArray(root.transactions) ? root.transactions[0] : null;
    const bodyCandidates = [
      root.encrypted && root.encrypted.body,
      root.response && root.response.encrypted && root.response.encrypted.body,
      root.response && root.response.rawBody,
      root.response && root.response.body,
      root.rawBody,
      root.body,
      firstTransaction &&
        firstTransaction.response &&
        firstTransaction.response.encrypted &&
        firstTransaction.response.encrypted.body,
      firstTransaction && firstTransaction.response && firstTransaction.response.body,
    ];
    const directBody = firstStringCandidate(bodyCandidates);
    if (!encryptedBody && directBody) {
      const nestedDirect = parseNestedResponseBody(directBody);
      encryptedBody = nestedDirect.encryptedBody || directBody;
      bodySource = nestedDirect.encryptedBody ? "nested response body" : "direct body";
    }
  }

  if (!encryptedBody && typeof parsed === "string") {
    encryptedBody = parsed.trim();
    bodySource = "json string";
  }
  if (!encryptedBody && !root) {
    encryptedBody = inputText;
    bodySource = "raw text";
  }

  let key = String(suppliedKey || "").trim();
  let keySource = key ? "manual key input" : "";
  if (!key && root) {
    const firstTransaction = Array.isArray(root.transactions) ? root.transactions[0] : null;
    const keyCandidates = [
      root.key,
      root.decrypted && root.decrypted.key,
      root.response && root.response.decrypted && root.response.decrypted.key,
      root.request && root.request.decrypted && root.request.decrypted.key,
      firstTransaction &&
        firstTransaction.response &&
        firstTransaction.response.decrypted &&
        firstTransaction.response.decrypted.key,
      firstTransaction &&
        firstTransaction.request &&
        firstTransaction.request.decrypted &&
        firstTransaction.request.decrypted.key,
    ];
    key = firstStringCandidate(keyCandidates);
    if (key) {
      keySource = "pasted report/transaction";
    }
    if (!key && Array.isArray(root.cryptoCalls)) {
      const matchedCall =
        root.cryptoCalls.find((call) => call.type === "AESDec" && call.ciphertext === encryptedBody) ||
        root.cryptoCalls.find((call) => call.type === "AESDec");
      if (matchedCall && typeof matchedCall.key === "string") {
        key = matchedCall.key;
        keySource = "pasted cryptoCalls";
      }
    }
  }

  if (!encryptedBody) {
    throw new Error("没有找到响应密文 body，请粘贴原始响应 JSON、完整 transaction/report，或直接粘贴密文 body。");
  }
  if (!key) {
    throw new Error(
      "没有找到 AES key。单独的接口响应体不能直接解密；请填写抓包报告里的 response.decrypted.key，或粘贴完整 report/transaction 让工具自动提取。"
    );
  }

  return {
    encryptedBody,
    bodySource,
    key,
    keySource,
  };
}

async function waitForCryptoFunction(page, functionName) {
  await page.waitForFunction(
    (name) => typeof window[name] === "function",
    functionName,
    { timeout: 30000 }
  );
}

function buildRuntimeCall(functionName, key, body) {
  return {
    functionName,
    key,
    body,
    expression: `${functionName}(${JSON.stringify(key)}, ${JSON.stringify(body)})`,
  };
}

async function attemptAutoLogin(page, credentials) {
  const result = {
    requested: !!(credentials && credentials.username && credentials.password),
    attempted: false,
    openedLoginEntry: false,
    filled: false,
    clickedSubmit: false,
    error: null,
  };
  if (!result.requested) return result;

  result.attempted = true;
  try {
    let hasPasswordInput = await page.locator('input[type="password"]').count();
    if (!hasPasswordInput) {
      const loginEntry = page.locator('text=/^(登录|登 录|立即登录|会员登录)$/').first();
      if ((await loginEntry.count()) > 0) {
        await loginEntry.click({ timeout: 5000 }).catch(() => {});
        result.openedLoginEntry = true;
        await page.waitForTimeout(800);
      }
      hasPasswordInput = await page.locator('input[type="password"]').count();
    }

    if (!hasPasswordInput) {
      result.error = "No visible password input found after opening login entry.";
      return result;
    }

    const fillResult = await page.evaluate(({ username, password }) => {
      function isVisible(el) {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return (
          style &&
          style.visibility !== "hidden" &&
          style.display !== "none" &&
          rect.width > 0 &&
          rect.height > 0 &&
          !el.disabled &&
          !el.readOnly
        );
      }
      function setValue(el, value) {
        const descriptor = Object.getOwnPropertyDescriptor(el.__proto__, "value");
        if (descriptor && descriptor.set) {
          descriptor.set.call(el, value);
        } else {
          el.value = value;
        }
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }

      const inputs = Array.from(document.querySelectorAll("input")).filter(isVisible);
      const passwordInput = inputs.find((input) => String(input.type || "").toLowerCase() === "password");
      if (!passwordInput) {
        return { ok: false, reason: "password input not visible" };
      }
      const passwordIndex = inputs.indexOf(passwordInput);
      const usernameCandidates = inputs.filter((input) => {
        const type = String(input.type || "text").toLowerCase();
        return type !== "password" && ["text", "tel", "number", "search", "email", ""].includes(type);
      });
      const beforePassword = usernameCandidates
        .filter((input) => inputs.indexOf(input) >= 0 && inputs.indexOf(input) < passwordIndex)
        .pop();
      const usernameInput = beforePassword || usernameCandidates[0];
      if (!usernameInput) {
        return { ok: false, reason: "username input not visible" };
      }
      setValue(usernameInput, username);
      setValue(passwordInput, password);
      return {
        ok: true,
        usernameName: usernameInput.name || usernameInput.placeholder || usernameInput.id || "",
        passwordName: passwordInput.name || passwordInput.placeholder || passwordInput.id || "",
      };
    }, credentials);

    if (!fillResult || !fillResult.ok) {
      result.error = fillResult && fillResult.reason ? fillResult.reason : "Failed to fill login inputs.";
      return result;
    }
    result.filled = true;
    result.fields = fillResult;

    const submitSelectors = [
      'button:has-text("登录")',
      'button:has-text("登 录")',
      '.van-button:has-text("登录")',
      '.ivu-btn:has-text("登录")',
      'text=/^(登录|登 录|立即登录)$/',
    ];
    for (const selector of submitSelectors) {
      const submit = page.locator(selector).first();
      if ((await submit.count()) > 0) {
        await submit.click({ timeout: 5000 });
        result.clickedSubmit = true;
        break;
      }
    }
    if (!result.clickedSubmit) {
      await page.keyboard.press("Enter").catch(() => {});
      result.clickedSubmit = true;
      result.submitFallback = "Enter";
    }
    await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(Number(credentials.loginWaitMs || 3000));
    return result;
  } catch (error) {
    result.error = error && error.message ? error.message : String(error);
    return result;
  }
}

function findMatchingCrypto(calls, type, encryptedValue) {
  if (!encryptedValue) return null;
  for (let index = calls.length - 1; index >= 0; index -= 1) {
    const call = calls[index];
    if (call.type !== type) continue;
    if (type === "AESEnc" && call.ciphertext === encryptedValue) return call;
    if (type === "AESDec" && call.ciphertext === encryptedValue) return call;
  }
  return null;
}

function enrichRecords(records, cryptoCalls) {
  const requestById = new Map();
  records.forEach((record) => {
    if (record.phase === "request") {
      const rawJson = tryParseJson(record.postData);
      const encryptedBody = rawJson && rawJson.body ? rawJson.body : null;
      const cryptoCall = findMatchingCrypto(cryptoCalls, "AESEnc", encryptedBody);
      record.encrypted = {
        body: encryptedBody,
        bodySha256: encryptedBody ? sha256(encryptedBody) : null,
      };
      record.decrypted = cryptoCall
        ? {
            source: "runtime AESEnc plaintext",
            key: cryptoCall.key,
            data: cryptoCall.plaintextJson !== null ? cryptoCall.plaintextJson : cryptoCall.plaintext,
            rawText: cryptoCall.plaintext,
          }
        : {
            source: encryptedBody ? "not decrypted" : "raw request body",
            data: encryptedBody ? null : rawJson,
            rawText: encryptedBody ? null : record.postData,
          };
      requestById.set(record.requestId, record);
    }
  });

  records.forEach((record) => {
    if (record.phase !== "response") return;
    const parsedBody = parseNestedResponseBody(record.body);
    const encryptedBody = parsedBody.encryptedBody;
    const cryptoCall = findMatchingCrypto(cryptoCalls, "AESDec", encryptedBody);
    record.parsed = parsedBody.parsed;
    record.encrypted = {
      body: encryptedBody,
      bodySha256: encryptedBody ? sha256(encryptedBody) : null,
    };
    record.decrypted = cryptoCall
      ? {
          source: "runtime AESDec plaintext",
          key: cryptoCall.key,
          data: cryptoCall.plaintextJson !== null ? cryptoCall.plaintextJson : cryptoCall.plaintext,
          rawText: cryptoCall.plaintext,
        }
      : {
          source: encryptedBody ? "not decrypted" : "raw response body",
          data: encryptedBody ? null : parsedBody.parsed,
          rawText: encryptedBody ? null : record.body,
        };
    const request = requestById.get(record.requestId);
    if (request) {
      record.request = {
        method: request.method,
        url: request.url,
        headers: request.headers,
        encrypted: request.encrypted,
        decrypted: request.decrypted,
      };
    }
  });

  return records;
}

async function extractPageSnapshot(page) {
  return page.evaluate(async () => {
    const scripts = Array.from(document.scripts).map((script) => script.src).filter(Boolean);
    const styles = Array.from(document.querySelectorAll('link[rel~="stylesheet"]'))
      .map((link) => link.href)
      .filter(Boolean);
    let systemConfig = null;
    let systemConfigError = null;
    try {
      if (window.$systemConfigPromise) {
        systemConfig = await window.$systemConfigPromise;
      }
    } catch (error) {
      systemConfigError = error && error.message ? error.message : String(error);
    }
    return {
      href: location.href,
      title: document.title,
      userAgent: navigator.userAgent,
      viewport: {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
      },
      bodyClass: document.body ? document.body.className : "",
      visibleTextSample: document.body ? document.body.innerText.slice(0, 2000) : "",
      scripts,
      styles,
      configText: window.$configText || null,
      systemConfig,
      systemConfigError,
      cryptoState: window.__packetCaptureCrypto || null,
    };
  });
}

function summarizeSystemConfig(config) {
  if (!config || typeof config !== "object") return null;
  const keys = [
    "PLATFORM_FLAG",
    "YEB_STATUS",
    "STRATEGY_STATUS",
    "JIEBEI_STATUS",
    "WEB_ACTIVITY",
    "CHAT_SWITCH",
    "LOTTERY_ROOM_STATUS",
    "YUEBAO_ISADDCODEQUANTITY",
    "YUEBAO_WIDTHDRAW",
  ];
  const output = {};
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(config, key)) {
      output[key] = config[key];
    }
  });
  return output;
}

function buildPackageInfo(pageSnapshot, resources) {
  const scriptUrls = pageSnapshot.scripts || [];
  const styleUrls = pageSnapshot.styles || [];
  const controlScript = scriptUrls.find((url) => url.includes("/configstatic/") && url.includes("/control.js"));
  const appScript = scriptUrls.find((url) => /\/static\/js\/app\.[^/]+\.js/i.test(url));
  const vendorScript = scriptUrls.find((url) => /\/static\/js\/chunk-vendors\.[^/]+\.js/i.test(url));
  const controlVersion = parseControlVersion(controlScript);
  const packageResources = resources.filter((resource) => isPackageResource(resource.url, resource.resourceType));
  const releaseCandidates = [];
  if (controlVersion) {
    releaseCandidates.push({
      source: "configstatic control.js query v",
      value: controlVersion.raw,
      parsedLocalTime: controlVersion.localText,
      url: controlScript,
      note: controlVersion.note,
    });
  }
  packageResources.forEach((resource) => {
    const lastModified = resource.headers && resource.headers["last-modified"];
    const date = resource.headers && resource.headers.date;
    if (lastModified || date) {
      releaseCandidates.push({
        source: lastModified ? "last-modified header" : "date header",
        value: lastModified || date,
        url: resource.url,
        status: resource.status,
      });
    }
  });
  return {
    controlScript,
    controlVersion,
    appScript,
    vendorScript,
    scripts: scriptUrls,
    styles: styleUrls,
    packageResources,
    releaseCandidates,
  };
}

function createSummary(report) {
  const lines = [];
  lines.push(`# 线上抓包摘要`);
  lines.push("");
  lines.push(`- 商户：${report.merchant}`);
  lines.push(`- 端：${report.terminal}`);
  lines.push(`- URL：${report.target.url}`);
  if (report.target.normalized) {
    lines.push(`- 输入 URL：${report.target.inputUrl}`);
    lines.push(`- URL 归一化：${report.target.normalizationReasons.join("; ")}`);
  }
  lines.push(`- 接口：${report.target.endpoints.length ? report.target.endpoints.join(", ") : "all api paths"}`);
  lines.push(`- 抓取时间：${report.capturedAtLocal}`);
  lines.push(`- 页面标题：${report.page.title || ""}`);
  lines.push(`- 输出目录：${report.outputDir}`);
  lines.push(`- 自动登录：${report.login.passwordProvided ? "已提供账号密码" : "未提供账号密码"}`);
  lines.push("");
  if (report.login.passwordProvided) {
    lines.push(`## 登录尝试`);
    lines.push("");
    lines.push("```json");
    lines.push(JSON.stringify(report.login.attempt || {}, null, 2));
    lines.push("```");
    lines.push("");
  }
  lines.push(`## 包信息`);
  lines.push("");
  if (report.packageInfo.controlVersion) {
    lines.push(`- control.js v：${report.packageInfo.controlVersion.raw} (${report.packageInfo.controlVersion.localText})`);
  }
  if (report.packageInfo.appScript) lines.push(`- app.js：${report.packageInfo.appScript}`);
  if (report.packageInfo.vendorScript) lines.push(`- chunk-vendors：${report.packageInfo.vendorScript}`);
  lines.push("");
  lines.push(`## 系统配置关键值`);
  lines.push("");
  lines.push("```json");
  lines.push(JSON.stringify(report.systemConfigSelected || {}, null, 2));
  lines.push("```");
  lines.push("");
  lines.push(`## 接口抓包`);
  lines.push("");
  report.transactions.forEach((transaction, index) => {
    lines.push(`### ${index + 1}. ${transaction.method} ${transaction.url}`);
    lines.push("");
    lines.push(`- 状态：${transaction.response ? transaction.response.status : "no response"}`);
    lines.push(`- 请求解密来源：${transaction.request.decrypted.source}`);
    lines.push(`- 响应解密来源：${transaction.response ? transaction.response.decrypted.source : "no response"}`);
    lines.push("");
    lines.push(`请求解密后：`);
    lines.push("```json");
    lines.push(JSON.stringify(transaction.request.decrypted.data, null, 2));
    lines.push("```");
    lines.push("");
    lines.push(`响应解密后：`);
    lines.push("```json");
    lines.push(JSON.stringify(transaction.response ? transaction.response.decrypted.data : null, null, 2));
    lines.push("```");
    lines.push("");
  });
  if (!report.transactions.length && report.observedApiUrls && report.observedApiUrls.length) {
    lines.push(`未命中指定接口。页面加载期间实际请求过这些 API：`);
    lines.push("");
    report.observedApiUrls.forEach((api) => {
      lines.push(`- ${api.method} ${api.url} (${api.statuses.length ? api.statuses.join("/") : "pending"})`);
    });
    lines.push("");
  }
  lines.push(`## 说明`);
  lines.push("");
  lines.push("- `report.json` 包含完整解密前请求头、请求体、响应头、响应体、运行时 AES/RSA 调用记录。");
  lines.push("- 如 `source` 为 `not decrypted`，说明页面运行时没有调用到对应 AESDec/AESEnc，通常是接口未加密、接口未命中、缓存或页面未触发。");
  return lines.join("\n");
}

function buildTransactions(records) {
  const requests = records.filter((record) => record.phase === "request");
  const responses = records.filter((record) => record.phase === "response");
  return requests.map((request) => {
    const response = responses.find((item) => item.requestId === request.requestId) || null;
    return {
      requestId: request.requestId,
      method: request.method,
      url: request.url,
      request,
      response,
    };
  });
}

function buildTransactionPreview(transaction) {
  return {
    requestId: transaction.requestId,
    method: transaction.method,
    url: transaction.url,
    status: transaction.response ? transaction.response.status : null,
    request: {
      headers: transaction.request.headers,
      rawBody: transaction.request.postData,
      encrypted: transaction.request.encrypted,
      decrypted: transaction.request.decrypted,
    },
    response: transaction.response
      ? {
          headers: transaction.response.headers,
          rawBody: transaction.response.body,
          bodyError: transaction.response.bodyError,
          encrypted: transaction.response.encrypted,
          decrypted: transaction.response.decrypted,
        }
      : null,
  };
}

async function decryptPayload(options) {
  const { chromium, devices } = requirePlaywright();
  const terminal = options.terminal === "pc" ? "pc" : "h5";
  const targetUrl = normalizeTargetUrl(options.url, terminal);
  const extracted = extractManualDecryptInput(options.payload || options.encryptedPayload, options.key);
  const headless = options.headed ? false : options.headless !== false;
  const browser = await chromium.launch({ headless });
  let context;
  try {
    if (terminal === "h5") {
      context = await browser.newContext({
        ...devices["iPhone 13"],
        ignoreHTTPSErrors: true,
        locale: "zh-CN",
        timezoneId: "Asia/Shanghai",
      });
    } else {
      context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
        ignoreHTTPSErrors: true,
        locale: "zh-CN",
        timezoneId: "Asia/Shanghai",
      });
    }
    const page = await context.newPage();
    await page.goto(targetUrl.url, { waitUntil: "domcontentloaded", timeout: Number(options.gotoTimeoutMs || 60000) });
    await waitForCryptoFunction(page, "AESDec");
    const decrypted = await page.evaluate(({ key, body }) => {
      const rawText = window.AESDec(key, body);
      let data = null;
      try {
        data = JSON.parse(rawText);
      } catch (_) {
        data = rawText;
      }
      return {
        source: "runtime AESDec",
        rawText,
        data,
      };
    }, { key: extracted.key, body: extracted.encryptedBody });
    return {
      ok: true,
      target: targetUrl,
      input: {
        bodySource: extracted.bodySource,
        keySource: extracted.keySource,
        encryptedBody: extracted.encryptedBody,
        encryptedBodySha256: sha256(extracted.encryptedBody),
      },
      runtimeCall: buildRuntimeCall("window.AESDec", extracted.key, extracted.encryptedBody),
      decrypted,
    };
  } finally {
    if (!options.keepBrowserOpen) {
      await browser.close().catch(() => {});
    }
  }
}

async function capturePacket(options) {
  const { chromium, devices } = requirePlaywright();
  const startedAt = new Date();
  const terminal = options.terminal === "pc" ? "pc" : "h5";
  const targetUrl = normalizeTargetUrl(options.url, terminal);
  const endpoints = normalizeEndpointList(options.endpoint || options.endpoints);
  const waitMs = Number(options.waitMs || 5000);
  const projectRoot = options.projectRoot || path.resolve(__dirname, "..", "..");
  const captureRoot = options.captureRoot || path.join(projectRoot, "抓包文件夹");
  const resources = [];
  const records = [];
  const observedApiRequests = new Map();
  const consoleLogs = [];
  const errors = [];
  const headless = options.headed ? false : options.headless !== false;
  const browser = await chromium.launch({ headless });
  let context;
  try {
    if (terminal === "h5") {
      context = await browser.newContext({
        ...devices["iPhone 13"],
        ignoreHTTPSErrors: true,
        locale: "zh-CN",
        timezoneId: "Asia/Shanghai",
      });
    } else {
      context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
        ignoreHTTPSErrors: true,
        locale: "zh-CN",
        timezoneId: "Asia/Shanghai",
      });
    }
    await context.addInitScript(buildCryptoInitScript());
    const page = await context.newPage();

    page.on("console", (message) => {
      consoleLogs.push({
        at: new Date().toISOString(),
        type: message.type(),
        text: message.text(),
      });
    });
    page.on("pageerror", (error) => {
      errors.push({
        at: new Date().toISOString(),
        message: error && error.message ? error.message : String(error),
        stack: error && error.stack ? error.stack : null,
      });
    });
    page.on("request", (request) => {
      observeApi(observedApiRequests, request, { phase: "request" });
      if (!shouldCaptureUrl(request.url(), endpoints)) return;
      records.push({
        phase: "request",
        requestId: `${request.method()} ${request.url()} ${Date.now()} ${records.length}`,
        url: request.url(),
        method: request.method(),
        resourceType: request.resourceType(),
        headers: request.headers(),
        postData: request.postData(),
        timestamp: new Date().toISOString(),
      });
    });
    page.on("requestfailed", (request) => {
      const failure = request.failure();
      observeApi(observedApiRequests, request, {
        phase: "failed",
        failureText: failure && failure.errorText ? failure.errorText : "request failed",
      });
    });
    page.on("response", async (response) => {
      const request = response.request();
      observeApi(observedApiRequests, request, { phase: "response", status: response.status() });
      const resource = {
        url: response.url(),
        status: response.status(),
        resourceType: request.resourceType(),
        headers: response.headers(),
      };
      if (isPackageResource(resource.url, resource.resourceType)) {
        resources.push(resource);
      }
      if (!shouldCaptureUrl(response.url(), endpoints)) return;
      const reversed = records
        .slice()
        .reverse()
        .find(
          (item) =>
            item.phase === "request" &&
            item.url === request.url() &&
            item.method === request.method() &&
            !item.hasResponse
        );
      let body = null;
      let bodyError = null;
      try {
        body = await response.text();
      } catch (error) {
        bodyError = error && error.message ? error.message : String(error);
      }
      if (reversed) reversed.hasResponse = true;
      records.push({
        phase: "response",
        requestId: reversed ? reversed.requestId : `${request.method()} ${request.url()} ${Date.now()} ${records.length}`,
        url: response.url(),
        status: response.status(),
        resourceType: request.resourceType(),
        headers: response.headers(),
        body,
        bodyError,
        timestamp: new Date().toISOString(),
      });
    });

    await page.goto(targetUrl.url, { waitUntil: "domcontentloaded", timeout: Number(options.gotoTimeoutMs || 60000) });
    await page.waitForLoadState("networkidle", { timeout: Number(options.networkIdleTimeoutMs || 30000) }).catch(() => {});
    const loginAttempt = await attemptAutoLogin(page, {
      username: options.username || "",
      password: options.password || "",
      loginWaitMs: options.loginWaitMs || 3000,
    });
    if (waitMs > 0) {
      await page.waitForTimeout(waitMs);
    }

    const pageSnapshot = await extractPageSnapshot(page);
    const cryptoCalls = (pageSnapshot.cryptoState && pageSnapshot.cryptoState.calls) || [];
    const enrichedRecords = enrichRecords(records, cryptoCalls);
    const systemConfigSelected = summarizeSystemConfig(pageSnapshot.systemConfig);
    const merchant =
      safeName(
        options.merchant ||
          (systemConfigSelected && systemConfigSelected.PLATFORM_FLAG) ||
          pageSnapshot.title ||
          new URL(targetUrl.url).hostname,
        "merchant"
      );
    const folderName = `${merchant}-${terminal}-${nowStamp(startedAt)}`;
    const outputDir = path.join(captureRoot, folderName);
    fs.mkdirSync(outputDir, { recursive: true });
    const screenshotPath = path.join(outputDir, "screenshot.png");
    await page.screenshot({ path: screenshotPath, fullPage: true }).catch((error) => {
      errors.push({
        at: new Date().toISOString(),
        message: `screenshot failed: ${error && error.message ? error.message : String(error)}`,
      });
    });

    const transactions = buildTransactions(enrichedRecords);
    const observedApiUrls = Array.from(observedApiRequests.values()).sort((left, right) =>
      left.url.localeCompare(right.url)
    );
    const packageInfo = buildPackageInfo(pageSnapshot, resources);
    const capturedAtLocal = startedAt.toLocaleString("zh-CN", { hour12: false });
    const report = {
      schemaVersion: 1,
      note: "Generated by tools/packet-capture. Raw encrypted packet data and runtime AES decrypted data are included.",
      capturedAt: startedAt.toISOString(),
      capturedAtLocal,
      merchant,
      terminal,
      outputDir,
      files: {
        report: path.join(outputDir, "report.json"),
        summary: path.join(outputDir, "summary.md"),
        screenshot: screenshotPath,
      },
      target: {
        inputUrl: targetUrl.inputUrl,
        url: targetUrl.url,
        normalized: targetUrl.normalized,
        normalizationReasons: targetUrl.normalizationReasons,
        endpoints,
        waitMs,
        headed: !!options.headed,
      },
      login: {
        username: options.username || "",
        passwordProvided: !!options.password,
        attempt: loginAttempt,
      },
      page: {
        href: pageSnapshot.href,
        title: pageSnapshot.title,
        userAgent: pageSnapshot.userAgent,
        viewport: pageSnapshot.viewport,
        bodyClass: pageSnapshot.bodyClass,
        visibleTextSample: pageSnapshot.visibleTextSample,
        configText: pageSnapshot.configText,
        systemConfigError: pageSnapshot.systemConfigError,
      },
      systemConfigSelected,
      systemConfig: pageSnapshot.systemConfig,
      packageInfo,
      transactions,
      observedApiUrls,
      rawRecords: enrichedRecords,
      cryptoCalls,
      consoleLogs,
      errors,
    };
    const summary = createSummary(report);
    fs.writeFileSync(report.files.report, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(report.files.summary, summary, "utf8");
    return report;
  } finally {
    if (!options.keepBrowserOpen) {
      await browser.close().catch(() => {});
    }
  }
}

module.exports = {
  capturePacket,
  decryptPayload,
  buildTransactionPreview,
  normalizeTargetUrl,
  normalizeEndpointList,
  shouldCaptureUrl,
};
