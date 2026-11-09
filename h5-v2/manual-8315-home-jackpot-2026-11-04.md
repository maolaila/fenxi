# 2026-11-04 8315 首页 Jackpot 奖池替换轮播

- 商户：8315-6688彩票；有效分支 `BY8315-6688-h5`；有效端 `h5-v2/`，仅 `views6` 综合版首页（6688 资源库 `by315/configstatic/h5/control/control.js` 的 `pageTemplate.temp6` selected）。PC 经客服确认不需要；其他版面、主题色、资源库 `control.js` 和演示站 `BY-Demo-H5V2-PC` 均未修改，属于 8315 定制，不扩散到其他商户。
- 需求（客服群 2026-11-04）：上方做 Jackpot 奖池效果；下方横向自动滚动、可拖动，展示彩种和三方游戏图标、会员和盈利金额；由技术随机选彩种/三方游戏和金额范围，三方占比 65%，上下金额关联；替换原轮播图，首页不再显示 banner。
- 前后端归属/配置结论：后端无对应奖池接口，金额均为前端伪随机展示数据，属于前端实现。"彩种+三方游戏开启展示/关闭不展示"复用后台已有 `lotCcGameTypeConfig` 分类开关（status=1），前端只读取已开启分类的游戏，不新增后台配置或 `control.js` 字段。金额范围由前端 `jackpotData.js` 的 `RULES` 写死，调整需要改代码并发版。
- 来源组件：越南版 `bwin-game-platfrom-vietnam/src/components/jackpotReel`（Vue 3）。已确认的问题：数字格坐标与背景不符（未居中）；`min-height` 配合 `background-size: cover` 在窄屏时裁剪背景，导致数字错位；轨道下标先取模再加 10，可越过 60 格出现空白或倒滚；依赖 `ResizeObserver`；无 keep-alive/后台暂停。
- 实现：
  - 新增 `h5-v2/src/views6/home/jackpot/`（`index.vue`、`reel.vue`、`winnerStrip.vue`、`jackpotData.js`，以及重新压缩到 116KB 的 `jackpot-bg.jpg`），`home.vue` 用 `<jackpot>` 替换 `<banner>` 并移除轮播请求和重试逻辑，公告照常独立加载。`banner.vue` 保留未引用。
  - 滚轮：按 Vue 2.5 写法重写；8 个数字格按背景图实测像素换算为百分比定位，不需要 JS 测量；只向前滚动，滚完回落到等价格子，后台标签页连续更新也不越界；遵循 `prefers-reduced-motion`。
  - 底部：使用原生横向滚动实现拖动和惯性，空闲时逐帧推进、内容复制一份无缝循环，松手 2 秒后恢复；桌面端支持鼠标拖动；页面隐藏或 keep-alive 停用时停止。
- 伪随机规则（`jackpotData.js`）：
  - 种子 `BY8315-6688` + 北京时间周序号/日序号。
  - 奖池在每周一 00:00 取基数 1800 万–2600 万，一周内线性上涨 260 万–380 万，单调不降，每 5 秒刷新；同一时刻所有用户看到相同数值。
  - 底部每天换一套，20 条，三方 13 条（65%），某类不足时由另一类补齐。
  - 单条盈利 = 本周奖池基数 × 万分之 2 至千分之 3，彩种再乘 0.6；会员名格式为 `xx***00`；金额带千分位，单位"元"。
- 数据来源：彩种取自 `queryLotteryList`（`lotteryTypeList[].lotteryList`）；三方游戏按已开启分类取自 `queryGameSearch({code})`（`list[].platformsRsps`），名称中的 HTML 实体（如 `&amp;`）会还原；同一会话内缓存。底部条目只展示，不跳转。
- 代码提交：`BY8315-6688-h5` `f971e89614dbcca7cbceefd6176ba88cdf334d39`，已推送，`git ls-remote` 与本地一致。影响路径：`h5-v2/src/views6/home/home.vue`、`h5-v2/src/views6/home/jackpot/*`、`h5-v2/tests/homeJackpot.test.js`、`h5-v2/tests/homeBannerPriority.test.js`（移除已不适用的 home.vue 轮播断言，banner.vue 断言保留）。
- 验证：
  - Node `v14.21.3`，实际 Vue/编译器 `2.5.21`：`homeJackpot.test.js` 与 `homeBannerPriority.test.js` 通过，覆盖周/日种子、单调性、65% 占比、金额关联、滚轮不越界、拖动/隐藏/keep-alive 生命周期、只请求已开启分类、实体解码和公告加载。
  - 在 `output/8315-jackpot-20261104/` 隔离目录完成生产构建，Vue 别名指向 2.5.21。
  - 浏览器：本地 dev（8315 源码 + 6688 `by315` configstatic + 演示站后端 `biyingbaowang.cc`）实际渲染 temp6 首页，确认 Jackpot 替换 banner、真实游戏图标、20 条中 13 条三方；375/320 宽度下数字对齐。
- 交付边界：8315 只完成代码提交和推送，商户生产部署由商户发布负责人处理；未发布演示站。业主/客户的实机验收以及最终金额范围待确认。

## 2026-11-05 补充：中奖条点击进游戏

- 彩种：跳 `/buyLottery/{lotteryId}`，与首页彩票列表 `gamels/cplist.vue` 一致。
- 三方游戏：按 `gameId` 调 `loginGame`，确认后 PT_GAME/SG_GAME 用新窗口，其他用全屏 iframe（url 或 html），左上角返回按钮可拖动，与首页 `gamels/otherlist.vue` 一致。
- 拖动与点击：`hold()` 记录按下时 `scrollLeft`，点击时位移超过 8px 视为拖动不触发；`buildWinners` 条目新增 `id`。
- 宽屏下卡片变大是 vw 等比缩放（卡片固定 260/750 屏宽），与数据无关，与整页一致，按用户确认不处理。
- 代码 `877463ba2` 已推送且远端一致。验证：Node v14.21.3 + Vue 2.5.21 `homeJackpot.test.js`（轻点选中、拖动不触发、彩种路由、三方 loginGame→iframe、空结果不打开）与 `homeBannerPriority.test.js` 通过；本地 dev 页面实测彩种跳 `#/buyLottery/48`、拖动后不跳转、未登录点三方弹"你还没有登录"。已登录进三方游戏待实机验收；未生产部署。

## 2026-11-05 补充：数字变动金星迸发与背景弹动

- `reel.vue` 在每次数值变动、数字落定时（滚动总时长约 80%）调用 `celebrate()`：根节点加 `pulse` 类 0.6s（以 50% 70% 为原点 scale 1→1.045→0.99→1 并 brightness 1.18）；同时生成 22 个 `.spark`（星形 clip-path 与圆形光点约 2:1），用 CSS 变量 `--dx/--dy/--spin` 决定各自方向，1.1s 动画后 1.3s 移除。
- 页面隐藏或系统开启减少动态效果时不触发；`beforeDestroy` 清理定时器。Vue 2.5.21 支持样式绑定 CSS 变量（`cssVarRE`），已用实际运行时验证。
- 自测发现金星 key 与滚轮列 key 冲突（同为数字），已改为 `'spark' + id`。
- 代码 `ae57b46e2` 已推送且远端一致；Node v14.21.3 + Vue 2.5.21 测试及本地页面通过，未实机、未生产部署。

## 2026-11-05 补充：金星动效优化（转动结束触发）

- 触发：`roll()` 记录本轮变动列 `rolling`，`settle(i)`（transitionend）逐列移除，全部停稳时 `landed(round)`；兜底定时器 `landing*1000+250ms`，同一轮 `celebrated` 去重。本地实测滚动开始后约 2.19s 触发，与最后一列 1.2+0.42+0.56=2.18s 一致。
- 金星：`.spark` 外层 `jackpot-drift` 水平位移 `--dx`，内层 `jackpot-toss` 上抛 `--rise`（减速曲线）后下落 `--fall`（加速曲线）并旋转 `--spin`、两次闪烁；24 个，1.0–1.6s、0–260ms 错峰，结束后按最长时长清理。
- 背景：`jackpot-pulse` 0.9s 弹性回弹并提亮；`.flash` 数字框金色径向光晕 0.7s。
- 代码 `6bb0e4c44` 已推送且远端一致；未实机、未生产部署。

## 2026-11-05 补充：当天中奖累加、蓝色主题、图标放大（取代上方周基数规则）

- 奖池 = 当天已出现中奖合计：北京时间 00:00 预置 20 条，之后每 60～240 秒一条，单条 22888～168888，按日种子每天重新生成；全天合计约 5.4～6.0 千万（抽样 60 天），不超过 8 位。上文"每周一换基数、一周线性上涨""单条 = 基数 × 比例"已废弃。
- 榜单：最新 20 条、新的在前；三方/彩种按 13:7 周期，任意连续 20 条三方 65%；新中奖出现才更换榜单并带动奖池滚动、金星。
- 蓝色主题：背景图色相分段替换为 6688 temp6 蓝色系（白色高光保留），数字深蓝 `#0b3a9e`；固定蓝色，不跟随前台主题切换。
- 图标放大：卡片 320、图标 120、字号 28/22/30（750 设计稿）。
- 代码 `f709456c8` 已推送且远端一致；Vue 2.5.21 测试与本地页面通过，未实机、未生产部署。

## 2026-11-09 补充：新背景、奖池小幅上涨、小涨小星星

- 背景：换为客服提供的蓝色 JACKPOT 皇冠图（1184×584，白底合成 JPG 140,689 字节）；`reel.vue` 坐标改为 `BASE_W/H=1184/584`、`CENTERS=[295,378,462,546,629,712,796,881]`、`SLOT_W=78`、`SLOT_TOP=368`、`SLOT_H=106`，`.flash` 改为 left 12%/top 52%/76%×40%，滚轮上下渐隐改为深蓝。前端打包资源，不涉及 `control.js`/资源仓库。
- 小幅上涨（取代"只在新中奖时变动"）：`RULES.creepStep=6000`、`creepShare=0.05`；`creepAmount` 在上一条与下一条中奖之间按 6 秒步进（带日种子抖动）预支下一条金额最多 5%，下一条出现时奖池 = 已出现中奖合计。抽样 30 分钟约 300 次变动，单次中位 153、最大 1140；365 天抽样日总额无重复、无下降。
- 星星：`reel` 新增 `mark` 属性（`winnerCount`），序号变化才 `celebrate()`（24 颗大金星 + pulse + flash）；序号不变的小涨走 `twinkle()`，3～4 颗 `SMALL_BURST` 小星星，无 pulse/flash；两者共用 `spray()`，页面隐藏不触发，结束清理。
- `index.vue`：TICK 5000→2000。
- 代码 `04ffcacad` 已推送且远端一致；Node v14.21.3 + Vue 2.5.21 测试通过，本地页面实测小涨/新中奖两档效果；未实机、未生产部署、未发布演示站。

## 2026-11-09 补充：首页顶部轮播/Jackpot 后端开关

- `homeTopMode.js`：`requestHomeTopMode` mock（默认 `jackpot`，`localStorage.mockHomeTopMode` 可本地切换），`fetchHomeTopMode` 归一化为 `jackpot`/`banner`，失败回退 `banner`；后端接口到位只替换该函数。
- `home.vue`：`topMode` 为 `jackpot` 显示奖池，否则显示原轮播（含加载占位）；只在轮播模式请求轮播，恢复原重试/keep-alive。
- 代码 `707f59ebb` 已推送且远端一致；Vue 2.5.21 测试与本地两种模式页面实测通过；后端接口待提供，未实机、未生产部署。

## 2026-11-09 补充：开关接入后台 H5_SWIPER_TYPE

- 取代上条 mock：`querySystemConfig` 的 `H5_SWIPER_TYPE`，`1` = Jackpot，`0`/未配置/其他 = 轮播图；首页以 `$systemConfig(true)` 读取，失败或 5 秒无结果回退轮播。
- 代码 `1e13fbb14` 已推送且远端一致；Vue 2.5.21 测试与本地页面两种取值实测通过；6688 后台设为 `1` 才显示 Jackpot。未实机、未生产部署。

## 2026-11-09 补充：小涨改为四到五位数（取代 6 秒一涨、预支 5%）

- `creepShare=0.7`、`creepRiseBase=2500`、`creepSpacing=8s`，`creepRises` 生成每段的上涨时间与金额；单次 1,355～28,021、约每 10 秒一次，中奖时补齐剩余 30%，中奖时刻仍等于榜单合计。代码 `246ded86f` 已推送；Vue 2.5.21 测试通过；已发布演示站 H5，未实机、未生产部署。
