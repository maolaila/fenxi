const path = require("path");
const { capturePacket, buildTransactionPreview } = require("./capture");

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

function printHelp() {
  console.log(`
Usage:
  node cli.js --url <online-url> --endpoint <api-path> --terminal <pc|h5> [--merchant name]

Options:
  --url                 Online page URL. H5 bare domains auto-open /a/#/home/lottery.
  --endpoint            API path or comma/newline separated API paths. Empty captures common API paths.
  --terminal            pc or h5. Default: h5.
  --merchant            Output folder merchant label. Default: page title/platform/domain.
  --username            Optional username for best-effort auto-login.
  --password            Optional password for best-effort auto-login.
  --wait-ms             Extra wait after network idle. Default: 5000.
  --login-wait-ms       Extra wait after login click. Default: 3000.
  --headed              Show Chromium for manual login/click flows.
  --capture-root        Output root. Default: <project>/抓包文件夹.

Example:
  node cli.js --url "https://dingsheng111.vip" --endpoint "/api/v2/sysDict/querySystemConfig" --terminal h5 --merchant "鼎盛"
`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.url) {
    printHelp();
    process.exit(args.help ? 0 : 1);
  }
  const report = await capturePacket({
    url: args.url,
    endpoint: args.endpoint || "",
    terminal: args.terminal || "h5",
    merchant: args.merchant || "",
    username: args.username || "",
    password: args.password || "",
    waitMs: args["wait-ms"] || args.waitMs || 5000,
    loginWaitMs: args["login-wait-ms"] || args.loginWaitMs || 3000,
    headed: !!args.headed,
    captureRoot: args["capture-root"] ? path.resolve(args["capture-root"]) : undefined,
  });
  console.log(
    JSON.stringify(
      {
        merchant: report.merchant,
        terminal: report.terminal,
        outputDir: report.outputDir,
        report: report.files.report,
        summary: report.files.summary,
        screenshot: report.files.screenshot,
        target: report.target,
        transactions: report.transactions.length,
        transactionsPreview: report.transactions.map(buildTransactionPreview),
        observedApiUrls: report.observedApiUrls,
        systemConfigSelected: report.systemConfigSelected,
        packageReleaseCandidates: report.packageInfo.releaseCandidates.slice(0, 5),
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
