# 线上抓包工具

用于打开线上 PC/H5 页面，抓取指定接口的原始请求/响应、前端 AES 加解密前后数据、页面静态包信息，并输出给 Codex 分析。

## 安装

```powershell
cd C:\works\tgproject\merchant-customizations\tools\packet-capture
npm install
npx playwright install chromium
```

## 页面方式

```powershell
cd C:\works\tgproject\merchant-customizations\tools\packet-capture
npm start
```

默认打开：

```text
http://127.0.0.1:17890
```

## 命令行方式

```powershell
node cli.js --url "https://dingsheng111.vip" --endpoint "/api/v2/sysDict/querySystemConfig" --terminal h5 --merchant "鼎盛"
```

H5 端可以只填裸域名，工具会自动打开 `/a/#/home/lottery`。报告里会同时记录原始输入 URL 和实际抓取 URL。

多个接口可以用逗号分隔；接口留空时抓取常见 API 路径。

如果接口需要登录，可以加可选账号密码：

```powershell
node cli.js --url "https://example.com/a/#/home" --endpoint "/api/v2/user/queryBalance" --terminal h5 --merchant "商户名" --username "test01" --password "******" --headed
```

提供账号密码时，工具会尝试打开登录入口、填入账号密码并点击登录。页面结构不匹配时会在报告的 `login.attempt` 中记录失败原因，并继续抓包。

## 输出

每次抓包都会写入：

```text
C:\works\tgproject\merchant-customizations\抓包文件夹\<商户>-<端>-<YYYYMMDD-HHmmss>\
```

目录内包含：

- `report.json`：完整结构化数据，适合直接丢给 Codex。
- `summary.md`：人工可读摘要。
- `screenshot.png`：页面截图。

页面结果中的 `transactionsPreview` 会直接展示命中接口的解密前请求/响应和解密后请求/响应。若指定接口没有命中，`observedApiUrls` 会列出页面加载期间实际请求过的 API，便于修正接口地址或判断接口是否需要点击、登录后才会触发。

## 手动解密

页面下方的“手动解密”用于把已有接口响应密文解开。它会打开你填写的线上 URL，直接调用线上包里的 `window.AESDec(key, body)`，并在结果的 `runtimeCall.expression` 输出可复制调用语句。

支持粘贴：

- 原始响应 JSON，例如 `{"code":200,"data":"{\"body\":\"...\"}"}`。
- `report.json` 里的单条 `transaction`。
- 完整 `report.json`。

只粘贴原始响应 JSON 时必须填写 AES key。这个 key 不在响应体里，是同一次请求前端生成的 `response.config.key`；抓包报告里可从 `transactions[].response.decrypted.key` 看到。粘贴完整 report/transaction 时工具会尽量自动提取。

## 注意

- 解密数据来自真实线上包运行时的 `AESEnc/AESDec/RSA` 调用，不复刻加密实现。
- 如果接口需要登录或点击后才触发，使用页面里的“显示浏览器供手动操作”，并把等待秒数调大。
- 抓包结果可能包含 token、用户信息、资金数据，不要提交到代码仓库。
