# BY8321-AOK PC 直接撤单

- 记录时间：2026-08-05
- 商户：8321-澳客网
- 分支：`BY8321-AOK`
- 端：pc
- 页面：个人中心 / 投注记录
- 影响路径：`pc/src/views/personalCenter/child_modal/record/record.vue`
- 回归测试：`pc/test/regression/direct-cancel-bet.regression.js`
- 对照基准：`origin/BY-Demo-H5V2-PC`
- H5-v2 对照实现：`h5-v2/src/views/bettingList/bettingList.vue`
- 功能域：彩票/投注/开奖、个人中心/账户

## 已确认功能

PC 投注记录的可撤注单点击撤单图标后直接请求撤单，不再展示“取消订单 / 确定要取消订单吗？”确认弹窗：

- 仍使用 `/api/v2/betting/cancleBettingRecord` 接口，与 H5-v2 直接撤单流程一致。
- 保留后台 `FORBIT_USER_CANCEL_BET` 禁止撤单配置。
- 保留抢庄房跟单及投注 `orderFollow` 为 `3`、`4` 时不可撤单的限制。
- 保留防连续点击保护；成功后提示“操作成功”并刷新当前记录页。
- 本次仅调整 8321 商户 PC 端，不修改 H5-v2，也不改演示站公共逻辑。

## 验证状态

- `node test/regression/direct-cancel-bet.regression.js` 通过：首次点击立即请求撤单、不触发确认弹窗、连续点击被拦截、成功后刷新当前页。
- `node test/regression/announcement-cache.regression.js` 通过。
- `node test/regression/information-system-loading.regression.js` 通过。
- `npm run build` 通过（webpack 3.12.0，构建耗时约 59 秒）；仅有旧依赖和 Browserslist 数据过期警告。
