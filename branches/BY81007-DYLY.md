# 商户分支功能地图：81007-DY乐园

- 分支：`BY81007-DYLY`（远端 `origin/BY81007-DYLY`）；有效端 `pc/`、`h5-v2/`。
- 资源库目录：`C:\works\resource\tg1007`（`configstatic/pc|h5/control/control.js` 的 `main: 'DY乐园'`）；`docs/merchant-frontend-branches.md` 中商户代码为 `DBMaster.tg1007`。
- 已确认线上域名：`dy555666.com`、`dw2024.com`，两者 `control.js` 站名均为 DY乐园。

## 2026-11-05 从演示站建立专属分支

- 用途：承接 DY乐园 转盘功能及后续商户定制。此前该商户无专属分支，按 `docs/merchant-frontend-branches.md` 从演示站发布；本次已在该文档中移到专属分支表（演示站提交 `a13bb8795` 已推送），后续演示站公共改动需按清单 cherry-pick 到本分支。
- 基线：从 `origin/BY-Demo-H5V2-PC` 的 `ba434b1baabd2fca2ed51c3cc1554fbcf503914d` 拉出，未加商户提交，与演示站当时完全一致；已推送并以 `git ls-remote` 核对远端一致。曾误推 `BY810076-DYLY`（同一提交），已删除远端该名称。
- 线上现状：2026-11-05 核对 `dy555666.com` 首页和 `control.js` 的 Last-Modified 仍为 2026-06-22；2026-10-27 检查的线上主包不含 `lucky-wheel`/`turntable`/`floatEntry`/`floatOn`。演示站转盘首提交 `4abd2ddf7`（2026-07-15），浮窗吸附修复 `3411730ac`。
- 风险：演示站自 2026-06-22 起有 53 个提交随本分支一起带入，包括图形验证码、阿里云验证码登录/注册分流、密码等级等依赖后端的改动；DY 后端是否支持待确认，上线前需发布负责人确认或在 DY 环境复验。
- 转盘生效条件：浮窗由 `/api/v2/turntable/list` 活动列表、`floatEntry === "1"` 及活动 `floatOn === "1"` 决定，不是 `control.js` 开关；活动、奖品、权限需 DY 后台配置，待确认。
- 状态：仅建分支和推送，无代码改动、未构建、未部署；转盘定制需求内容待确认。
