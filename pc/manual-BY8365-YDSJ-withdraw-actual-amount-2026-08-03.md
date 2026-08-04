# BY8365-YDSJ PC 数字货币提现实出金额

- 记录时间：2026-08-03
- 商户：8365-云顶世界
- 分支：`BY8365-YDSJ`
- 端：pc
- 页面：个人中心 / 数字货币提现申请
- 影响路径：`pc/src/views/personalCenter/child_modal/withdraw/currencyPay.vue`
- 对照基准：`origin/BY-Demo-H5V2-PC`
- H5 对照实现：`h5-v2/src/views/personal-center/child_modal/takefee_list/currencyPay.vue`
- 功能域：资金/充值/提现

## 已确认功能

PC 数字货币提现申请页在手续费实际生效时，于“手续费”下方新增“实出金额”一栏：

- 仅在后台开启手续费、计算出的手续费大于 `0`、提现金额大于 `0` 时展示。
- 计算口径与当前 H5 实现一致：`实出金额 = max(0, 提现金额 - abs(手续费))`。
- 金额按向下取整规则保留两位小数。
- 手续费为 `0`、未开启手续费或提现金额为空时不展示。
- 本次只调整 PC 数字货币提现页，不影响银行卡、支付宝、微信和支付卡提现页。

## 验证状态

- `pc` 执行 `npm run build` 成功。
- 构建产物 `pc/dist/static/js/1.f81003f8fed26d8b6489.js` 已包含 `showActualAmount` 条件和“实出金额”文案。
- 示例：提现 `200`、手续费 `12` 时，实出金额为 `188.00`；当手续费超过提现金额时最低显示 `0.00`。
- PC 代码提交：`7330d39d6 feat: 增加PC提现实出金额`。
