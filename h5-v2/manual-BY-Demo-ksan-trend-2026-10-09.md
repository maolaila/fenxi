# 2026-10-09 快三走势去除鱼虾蟹与排版

- 范围按用户最新指令：先改演示站 `BY-Demo-H5V2-PC`，再只把本次提交 cherry-pick 到 `BY8367-KYGJ`。其他商户分支不修改；有效端为 PC 和 H5-v2，废弃 H5 不涉及。
- 责任归属：鱼虾蟹是前端按骰子点数生成的附加展示。本次只移除显示列及调整布局，开奖请求、投注、赔率、和值与大小单双计算不改；不需要改后台接口。
- 演示站独立提交：`43a7d2f55432bb3a4c594b646ff3179ebd664936`。
- 8367 cherry-pick 提交：`2f7ae446c365ef828ab007cf89adb587a7875240`，使用 `cherry-pick -x`，保留原首页、优惠活动和 PC 顶部客服定制。

## 修改内容

| 端／入口 | 展示变化 | 路径 |
| --- | --- | --- |
| H5 快三走势 → 开奖号码 | 移除鱼虾蟹标题和三项映射展示；拆为独立的时间、完整期数、骰子号码、和值／大小单双四列，列宽为 15%／32%／25%／28%，增加单元格留白。 | `h5-v2/src/utils/trend/const.js`、`h5-v2/src/views/trend/child_modal/share/prizeNum/prizeNum.vue` |
| PC 快三走势 → 开奖历史 | 移除鱼虾蟹标题及三项数据列，保留期数、开奖号码及和值／大小单双，增加快三记录的单元格和骰子间距。 | `pc/src/views/trend/child_vue/const.js`、`pc/src/views/trend/child_vue/commonComponent/prizeRecord.vue` |
| PC 聊天室 → 快三开奖历史 | 移除鱼虾蟹列；总和列加宽到 90px，和值、大小、单双之间保留间距。 | `pc/src/views/chatRoom/chatRight/drawAlottery/lotteryHistory/history_ksan.vue` |
| 回归测试 | 检查四列、完整期号、216 种骰子组合的号码／和值／大小／单双及其他彩种原有合并列。 | `h5-v2/tests/ksanTrendDisplay.test.js` |

- 仅快三使用新布局；其他彩种走势、趣味彩、显示开关、分页和日期筛选不改。语言字典及已有计算辅助函数保留，本次只移除用户可见的鱼虾蟹展示。
- H5 表格最小宽度 360px：375px 下四列完整对齐，320px 下保留 13px 文字和完整期号，通过表格内横向查看，不截断数据或缩小字号。

## 验证与交付

- Node 14.21.3；演示站及 8367 的 `ksanTrendDisplay.test.js` 通过，覆盖 216 种骰子组合，确认和值／大小／单双未改变。两分支本次六个文件内容一致。
- 8367 PC/H5 生产构建通过。演示站源码组件的本地 375px／320px H5 及 1280px PC 预览通过；测试页面直接使用修改后的模板和样式及本地合成开奖数据。
- 演示站既有 `AGENTS.md`、PC theme.less 和未跟踪文件保留；8367 构建生成的 PC theme.less 已还原，验证代理、预览脚本和截图未进提交。
- 推送状态：2026-10-09 Git 服务连接恢复，演示站及 8367 已成功推送。`git ls-remote` 核对 `origin/BY-Demo-H5V2-PC=43a7d2f55432bb3a4c594b646ff3179ebd664936`、`origin/BY8367-KYGJ=2f7ae446c365ef828ab007cf89adb587a7875240`，均与对应本地分支相同。8367 同时包含此前活动／PC 客服定制提交 `0cf54d0a8`。未部署，真实手机和线上开奖数据待发布后复验。
