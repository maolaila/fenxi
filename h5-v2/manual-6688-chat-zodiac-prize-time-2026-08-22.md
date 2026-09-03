# 6688 H5 聊天室六合彩生肖时间字段修复记录

- 记录时间：2026-08-22
- 商户：8315-6688彩票
- 分支：`BY8315-6688-h5`
- 端：h5-v2
- 页面/路由：聊天室顶部开奖轮播，`#/chatRoom`
- 彩种：分分六合彩，`lotteryId=46`、`code=6hc`
- 功能域：聊天室/私聊、彩票/投注/开奖、接口/状态/工具
- 主题色/版面：不涉及
- 功能开关：不涉及
- 接口：`POST /api/v2/lottery/queryChatPrizeList`

## 问题与根因

问题截图中，分分六合彩 `20260822985` 期的号码 `13` 应显示生肖“马”，聊天室顶部却显示“鸡”，同组其他号码的生肖也发生一致年份偏移。

已确认初始开奖列表接口返回的 `lastPrizeTime` 是正确的 2026-08-22 毫秒时间戳，本地 `getZodiac(lastPrizeTime)` 计算结果为 `13=马`，因此初始接口数据和生肖算法本身无误。

前端融云开奖推送使用 `time` 字段，聊天室顶部更新路径此前直接把推送对象传给只读取 `lastPrizeTime` 的 `Business.setBallStyle`，没有像开奖记录页面一样归一开奖时间字段，导致实时推送更新后可能按错误时间计算生肖。

## 本地修复

- 新增 `h5-v2/src/utils/lotteryPrizeTime.js`，按 `time`、`prizeTime`、`endTime`、`lastPrizeTime`、上一期开奖时间的顺序解析当前开奖时间。
- 修改 `h5-v2/src/views/chat/chat/child_modal/scrollNotice.vue`，实时推送替换顶部开奖结果前先归一 `lastPrizeTime`。
- 新增 `h5-v2/tests/lotteryPrizeTime.test.js`，覆盖推送时间优先、初始接口兼容、上一期开奖时间回退，并验证错误时间会得到 `13=鸡`、归一后的 2026-08-22 时间得到 `13=马`。

## 验证状态

- 实时接口只读核验：分分六合彩返回 `lastPrizeTime=1787404021000`，对应 2026-08-22。
- `node tests/lotteryPrizeTime.test.js`：通过。
- `node tests/loginPasswordRule.test.js`：通过。
- 新增工具和测试文件 ESLint：通过。
- `npm run build`：通过；仅有项目既有 Sass/PostCSS 弃用和资源体积警告。
- 代码状态：已提交并推送至 `origin/BY8315-6688-h5`，提交 `14b67984f`；尚未验证部署环境。
