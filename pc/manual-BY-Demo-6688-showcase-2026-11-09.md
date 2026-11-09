# 2026-11-09 演示站临时切换为 6688（8315）展示

- 目的：给 6688 客户在演示站 `https://biyingbaowang.cc` 看 PC/H5 效果，看完回退到原演示站。
- 代码：`BY8315-6688-h5` `1e13fbb144e06f103d54bc29c3fff9d84ea53a92`，在主工作区 `output/8315-demo-release-20261109/` 临时构建（Node v14.21.3）。H5 产物 Vue 2.5.21（与 8315 锁文件一致）；PC 产物 Vue 2.7.14（8315 PC 锁文件即 2.7.14，未合入演示站 `ca09a5107`/`a2bb1b50e` 的 2.5.21 锁定）。
- 发布：CLI `bt-demo.cmd publish` 发 PC `app.bed6d2b31fe2f283db4d.js`、H5 `app.ad1bd2b8.js`（H5 CLI 因异步解压超时报校验失败，事后逐文件核对 759 个文件均存在且大小一致）。CLI 自带增量回退：`pc/_rollback_before_1e13fbb14_20261109-151418`、`wap/_rollback_before_1e13fbb14_20261109-151503`。
- 运行时配置：nginx `location /configstatic/` alias `/usr/local/nginx/html/configstatic/`，PC 与 H5 页面都从这里读 `control.js` 与图片（不是 `pc/pc/`、`wap/configstatic/`）。已将资源仓库 `dev` `43a1dbb` 的 `by315/configstatic` 覆盖到该共享目录；另外覆盖到 `pc/pc/`、`wap/configstatic/` 的两份不被页面使用。
- 完整备份（发布前）：服务器 `pc/_full_backup_before_6688_20261109-145950/`（index.html、static、pc、`_shared_configstatic`）与 `wap/_full_backup_before_6688_20261109-145950/`（index.html、static、configstatic、service-worker、robots、favicon、全部 precache-manifest），逐目录核对文件数/字节一致；本地 `output/demo-backup-before-6688-20261109-145950/` 有三个 tar.gz（pc 69,893,242 B、wap 69,288,403 B、共享 configstatic 3,081,954 B）及回退脚本 `rollback-demo-to-before-6688.ps1`（`-DryRun` 已演练）。
- 线上复验：桌面/手机 UA 入口 HTML 与 dist 逐字节一致；PC `configstatic/pc/control/control.js` 与图片已是 by315。H5 `configstatic/h5/control/control.js?v=0.1.9` 及图片被源站前置代理缓存（响应头 `Nginx-Cache: HIT`，缓存键含参数，Last-Modified 2026-10-22），仍返回原演示站配置（temp7 蓝白版本），H5 未呈现 6688 temp6，需清前置缓存；该缓存不在面板管理范围。演示站后台 `H5_SWIPER_TYPE` 当前为 `0`（轮播，且演示站 `bannerList` 为空），需设为 `1` 才显示 Jackpot。浏览器面板隐藏，未完成页面截图复验。
- 回退注意：回退后 `/configstatic/` 同样可能命中前置缓存，需同步清理。

## 补充：H5 入口版本号绕过前置缓存（用户选择）

- 将线上 `wap/index.html` 中 10 处 `?v=0.1.9` 改为 `?v=0.1.9-6688-20261109`（其余字节与 dist 一致），文件留存 `output/8315-demo-release-20261109/h5-index-6688-cachebust.html`。HTTPS 复验：手机 UA 入口与该文件一致；新地址 `control.js` 为 by315（`Nginx-Cache: MISS`），带版本号的图标/启动图为 by315；PC 入口未变。
- 仍为旧缓存：页面不带版本号引用的 `configstatic/h5/images/logo.png`、`mb-logo.png`、`ic_reg_logo.png`、`appIcon-58/80/144.png`，待前置缓存过期或清理。回退脚本会还原发布前的 `index.html`。

## 补充：H5 更新为 246ded86f（小涨四到五位数）

- 仅 H5：同一临时目录换入 `246ded86f` 源码（与提交逐文件一致）重新构建，`h5-6688-246ded86f.zip` 759 个文件，CLI 同样因异步解压超时报校验失败，事后逐文件核对全部存在且大小一致；CLI 增量回退 `wap/_rollback_before_246ded86f_20261109-153656`。随后重新写入版本号 `?v=0.1.9-6688-20261109` 的入口页（`output/8315-demo-release-20261109/h5-index-6688-246ded86f-cachebust.html`）。
- HTTPS 复验：手机 UA 入口为该文件（`app.9c6dee2c.js`），首页分包 `home5.013e73ae.js` 与构建一致，H5 配置仍为 by315；PC 入口未变。完整备份与回退脚本不变，仍回到 6688 发布前状态。

## 补充：曾访问过演示站的浏览器看不到 Jackpot

- 现象：用户桌面 Chrome 手机模式打开 `https://biyingbaowang.cc/#/home/lottery` 仍为原演示站 temp7 首页（轮播、无 Jackpot）。
- 原因（前端既有逻辑，已复现）：H5 `store/modules/theme.js` `getCurrentTemplate()` 与 `utils/less.js` 优先使用 localStorage `themeColor`/`themeColorList` 中保存的模板，其次才用 control.js `selected`。曾访问演示站的浏览器存有 temp7，即使已加载 `app.9c6dee2c.js` 与 by315 配置也走 temp7 首页；清除这两项后为 temp6 `home05` 且开关 `jackpot`、Jackpot 正常显示。线上后台 `H5_SWIPER_TYPE` 实测已为 1。
- 处理：用户决定不修改商户分支代码。查看方式：无痕窗口，或在 DevTools Application → Local Storage 删除上述两项后刷新；新访客不受影响。

## 补充：H5 更新至 8175b49f2（阿里云场景修复、Jackpot 缩小）

- 依次发布 H5 `ea0bbbf7b`（中奖条被裁的过渡版）与 `8175b49f2`；中间的 `0882a0fbe`、`e3ad09354` 未发布。CLI 每次均因异步解压超时报校验失败，事后逐文件核对 759 个文件一致；CLI 增量回退 `wap/_rollback_before_ea0bbbf7b_20261109-163115`、`wap/_rollback_before_8175b49f2_20261109-164601`。每次发布后重新写入 `?v=0.1.9-6688-20261109` 入口页。
- 线上复验：手机 UA 入口、app、首页分包与构建一致（`app.d415a0b2.js`）；登录、注册点验证条弹出阿里云滑块；首页 Jackpot 整块 217px。完整备份与回退脚本不变。
