# 2026-11-20 8315-6688 Jackpot 中奖条占比调整、弱网验证码闪拖条

- 商户：8315-6688彩票；分支 `BY8315-6688-h5`；有效端 H5 `views6`（Jackpot）、H5 全部版面登录/注册、PC `views-v10`/`v6`/`v8` 登录、头部登录框与注册。
- 需求（2026-11-20）：
  1. Jackpot 下方中奖条"彩票 + 开元棋牌 + PG电子占 8 成，其余三方分 2 成"。用户确认：8 成由三者平均分；"其余三方"指电子、棋牌分类下的其他平台。
  2. 后台未开启拖条（行为）验证时，前台弱网下先显示拖条、再变成数字验证码。

## 1. 中奖条占比（前端写死规则，非后台配置）

- 规则在 `h5-v2/src/views6/home/jackpot/jackpotData.js` 的 `RULES`（`featuredRatio: 0.8`、`featuredTypes: ["lottery", "ky", "pg"]`），调整需改代码发版。取代 [Jackpot 记录](manual-8315-home-jackpot-2026-11-04.md) 中"三方 65%（13:7）"和"只取彩票和电子"。
- 每 20 条：彩票、开元棋牌、PG电子合计 16 条（80%）。16 不能三等分，当天由其中一家多 1 条（6/5/5），按日轮换；其余平台 4 条（20%）。按 20 条一个周期打乱，任意连续 20 条比例一致；打乱只消耗与原先相同的随机数，奖池金额、中奖时间与原先完全一致（与旧版逐日比对相同）。
- 分池按接口分类平台代码：`queryGameSearch` 平台层 `code`（游戏 `typeCode` 相同）`PG_SLOT` → PG电子、`KY_POKER` → 开元棋牌；其他电子/棋牌平台（6688 线上为 MW、JDB、开元电子 `KY_SLOT`、PA、乐游电子、乐游棋牌）归"其他"。游戏上的 `platformCode`（`PG_GAME`、`KY_GAME`）不能用：开元电子与开元棋牌同为 `KY_GAME`。
- 请求：后台 `lotCcGameTypeConfig` 已开启的 `LOTTERY`、`SLOT`、`POKER` 三类（新增棋牌），6688 线上共 3 个请求，同一会话缓存。某类没有游戏时按"三家互补，再由其他平台补；其他为空由三家补"补位。

## 2. 弱网先闪拖条（前端问题）

- 判定：6688 后台阿里云 `openStatus=0`、易盾旧配置 `captchaFlag=false`，后台关闭；前端在配置返回前默认按"开启"显示拖条（H5 `isCaptchaFlag = !captchaConfigReady || …`；PC `YiDun` 默认 `captchaFlag: true`），弱网下配置晚到就先显示拖条再切数字码。
- 修复：配置返回前两种验证码都不显示，返回后按后台开关二选一；配置未返回时点登录/注册提示"验证码加载中，请稍候"，不提交。
  - H5：`views/login/loginMixin.js`、`views/register/registerMixin.js` 新增 `isYzm`，8 个版面登录页数字码改 `v-if="isYzm"`（注册页原已如此）。
  - PC：`components/YiDun` 新增 `configReady`、`isOpenBehavior` 需配置就绪；`mixins/register.js` 与 views-v10/v6/v8 的登录页、头部登录框 `isYzm` 需 `configReady`，并加提交拦截。
- 配置请求彻底失败时一直提示"验证码加载中"（旧版为显示未初始化的拖条，同样无法通过）。

## 验证

- Node v14.21.3 + 实际 Vue/编译器 2.5.21（预加载）：H5 全部 15 项测试通过。`homeJackpot.test.js` 覆盖各类条数、任意时刻比例、日轮换、补位、金额与旧版逐日一致、按 `code`/`typeCode` 分池（含开元电子不算开元棋牌）、只请求三类且会话缓存；`captchaVisibility.test.js` 覆盖 H5/PC 配置前后状态矩阵、提交拦截、8 个版面模板、7 个 PC 页面。
- 本地连 6688 线上（`https://6688cp1661.top`，临时副本 `output/6688-xss-verify-20261120/`）：
  - 弱网（页面内把 `querySystemConfig` 延迟 6 秒）：H5 登录、注册，PC 登录、注册、头部登录框，延迟期间拖条与数字码都不显示、H5 登录不发登录请求；配置返回后只显示数字码，全程无拖条。
  - Jackpot 真实游戏池：彩票 30、开元棋牌 36、PG电子 175、其他 244；当前 20 条为彩票 5、开元棋牌 5、PG电子 6、其他 4；请求 3 个；页面渲染正常。
- 临时副本 PC/H5 生产构建通过，H5 产物仅 Vue 2.5.21。

## 交付状态

- 代码 `0aaa735b9`（基于 `f7f727ba9`）已在 `BY8315-6688-h5` 本地提交，待用户确认后推送；生产由运维发布。演示站及其他商户分支未同步。
