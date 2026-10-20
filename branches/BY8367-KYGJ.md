# 商户分支功能地图：8367-开云国际

## 2026-10-20 两项定制代码推送完成

- 按用户本轮「两项一起推送，只推代码、不发布」指令，已将 PC 计划机器人跟投金额留空 `52c036b3d81188982e9002bbaf02fd6ad83eb57f` 与 H5 聊天室投注彩种列表补传 roomId `3533218bfdc5c4e391b9f50e6772e84470b0c22c` 一起推送至 origin/BY8367-KYGJ。git ls-remote 确认远端完整 SHA 与本地 HEAD 均为 `3533218bfdc5c4e391b9f50e6772e84470b0c22c`；以下两项较早的待推送记录已解除。仅推送既有提交，无新增业务修改／构建／生产发布／线上验收；既有 H5 构建依赖缺失说明保留。

## 2026-10-20 H5 聊天室投注彩种列表补传 roomId

- 用户要求核查聊天室房间展示彩种，后台约定需要按房间取数时传业务 `roomId`，不需要时传空。核对商户源码和 kaiyungjc.cloud 当前公开包：PC `app.38ff50fca70349a18ce0.js` 的开奖区 `queryLotteryList` 已带 `lotteryType:"-2"` 与业务 `roomId`；H5 `chatRoom.15678bbe.js` 顶部开奖条 `queryChatPrizeList` 也已带 `currChatRoomInfo.roomId`。这两处既有接入没有漏传，本次未重复修改。
- 确认遗漏在 H5 聊天室底部「投注」彩种选择弹层：源码及同一线上 H5 包仍请求 `POST /api/v2/lottery/queryLotteryList`，参数仅 `lotteryType:null`，未带 `roomId`；列表只在组件创建时查询，切换聊天室也没有重新取数。该遗漏可使投注选择列表沿用全量／旧房间彩种；不据此断言客服所指一定是底部弹层或后端配置已正确生效。
- 仅 `BY8367-KYGJ` 的 `h5-v2/src/views/chat/chat/game/index.vue` 与 `game.vue` 修改：父组件将 `chatRoomInfo.roomId || ''` 传给列表，并用该 ID 作 key，房间确认／切换后重建并重新查询；请求保留 `lotteryType:null`，增加同一业务 `roomId`。无聊天室 ID 的调用默认传空；不借用融云 `ryChatRoomId` 或其他房间缓存。不扩展为后端字段／全站功能开关。
- 结果保持后端顺序和每页八项分页；空房间彩种不初始化 Swiper，切换后忽略旧组件／旧房间延迟响应并销毁旧 Swiper。PC、H5 顶部开奖条、其他商户／演示站、主题色、资源、control.js 和后端均未改。
- 验证：Node v14.21.3；新增 `h5-v2/tests/chatRoomGameLottery.test.js` 覆盖业务 roomId、空 ID 回退、顺序／分页、空列表、旧房间／销毁响应及轮播清理，修改前回放明确检出 roomId 缺失，修改后通过；既有 `chatRoomLottery.test.js` 通过。实际 Vue 2.5.21 编译两个完整模板并挂载父子组件，初始房间确认／连续切换／乱序响应／列表顺序／空房间／重新进入／空 ID 回退及 Swiper 清理均通过；HTTP 为测试响应，未真实投注。
- H5 Node14 整站构建仍被既有依赖 `picocolors` 缺失阻塞；未更改依赖或全局运行时，未生成本轮可交付整站包。代码提交 `3533218bfdc5c4e391b9f50e6772e84470b0c22c` 本地完成；商户远端查询／推送连接 47.52.90.110:80 超时，仍待推送（同时保留此前待推的 `52c036b3d`）。未商户生产部署或获授权登录现场抓包，后台具体房间配置、实际接口返回及线上效果仍待发布后确认。资料仓库仅提交本轮核查／修复记录，其他任务未提交内容保留。

## 2026-10-20 PC 计划机器人跟投单注金额默认留空

- 用户截图对应 PC 聊天室「一键跟投」弹窗；仅在 `BY8367-KYGJ` 商户分支、`C:\works\tgproject-BY8367-KYGJ` 修改 `pc/src/views/chatRoom/chatMain/components/chaseBetting.vue`。计划机器人消息 `TG:BetplanBotMsg` 每次打开清空单注金额，不再带入机器人原单金额；空框失焦保持为空，总金额按 0 计算。普通跟单 `TG:BettingMsg` 和手动晒单 `TG:ShareBetMsg` 仍保留原单默认金额。
- 保留既有金额编辑权限、手动输入格式、金额上限、空额拦截、跟单参数及封盘限制；清空金额时解除之前的金额超限禁用状态。未填写金额点击「跟单」提示「请输入投注金额」，不发送投注请求。
- 端与版面：PC 共用聊天室跟单弹窗；H5-v2、演示站、其他商户、主题色、功能开关、资源及 control.js 均未改，无资源库提交或商户生产部署。
- 验证：Node v14.21.3；新增 `pc/test/regression/by8367-plan-follow-blank-amount.regression.js`，使用实际 Vue 2.5.21 通过打开／重复打开／空框失焦／空额拦截／手动金额及提交参数／清空超限／普通跟单回归，原始代码在机器人金额留空断言失败。临时实际 Vue 2.5.21 DOM 挂载检查首次、重新挂载、重复打开、输入／失焦及合计通过；HTTP 均为测试响应，未真实投注。既有 PC 金额留空回归及模板编译、diff 检查通过。
- PC Node14 生产构建成功；本地包检出 Vue 2.7.14，因此兼容性结论来自上述独立的实际 Vue 2.5.21 回归／DOM 检查，不以本地构建通过代替线上版本验证。未修改 Vue／编译器／依赖或发布此本地包；构建生成的 theme.less 已还原，产物与临时检查不提交。
- 代码提交 `52c036b3d81188982e9002bbaf02fd6ad83eb57f` 已在本地完成；fetch／push 均因 47.52.90.110:80 连接超时失败，仍待推送，不能视为远端已交付。未生产发布、未登录现场或线上复验；由商户发布负责人后续发布。地图／PC 总览／总索引在独立资料仓库仅提交本次记录，其他任务改动保留。

## 2026-10-19 PC 活动全部居中及个人中心问号再次核验

- 用户再次要求 PC 活动顶部仅保留居中「全部」，附经典 PC 活动页及 H5 个人中心截图。核对当前 BY8367-KYGJ / d934b2b94 已包含 PC 修复 e2324bb5479179af0139d899d90d6d492ab0beea 和 H5 问号移除 8cbe2ae0c515258d808bbb6926c6237a741aaa05；本轮无需重复业务代码修改。
- PC /active 路由经 views/active/index.vue 分流，截图经典版使用 views/active/active.vue；activeTab 固定单项全部，code 空值保留原查询语义，active-tab 使用 justify-content:center。Node v14.21.3 下模板与 LESS 编译、四种后台分类数据均通过；当前源码编译样式的 1280px 本地浏览器预览为单项，按钮和内容中心均 640px。
- 线上只读复核 https://kaiyungjc.cloud/#/active：实际仅显示全部，但按钮中心 224px、内容中心 640px，justify-content 为 normal，仍未体现商户现有居中样式。HTML 配置版本 2026.1014.113712，app.38ff50fca70349a18ce0.js；发布负责人需重新构建发布包含 e2324bb54 的 PC 包后复验。未代部署生产、未操作会员数据。
- H5 经典个人中心源码已移除经验值旁 handleSignHelp / icon-bangzhu 入口，网页和使用该 H5 页的 APP WebView 共用此模板；未做 APP 真机／登录态页面复验，不据此声明原生 APP 已更新。
- 代码无新增提交／推送，沿用此前已确认推送的商户提交；本次 git ls-remote 因 47.52.90.110:80 连接超时，未重新确认当前远端。PC/H5 业务逻辑、主题／资源／control.js 和其他商户／演示站未改，未整站重建。资料仓库只提交本次新增核验段落，其他任务未提交内容保留。

## 2026-10-17 H5 快捷投注请求异常后恢复提交

- 用户授权先修复已在本地复现的提交锁缺陷。有效端为 h5-v2，共用 bottomSImple/bottom.vue，影响引用该组件的快捷投注入口（bettingOption/option、balls/share、liuheSimple）；本次不改预设投注、PC、其他商户或演示站。已核对演示站同路径及商户金额留空差异，保留 8367 原定制。
- 请求超时／网络失败导致 lotteryBetting Promise 拒绝时，原逻辑不会恢复 loading/isSubmit，后续点击静默返回；本次增加 catch 恢复两个状态，并提示「投注结果未确认，请先查看投注记录」。不自动重试、不将超时判断为未受理；请求处理中继续拦截重复点击，原成功清空、业务错误提示及投注参数保持原行为。
- 配置／主题色／功能开关／资源库 control.js、后端接口均未改。修改仅源码 4 行，并新增 lotterySubmitRecovery.test.js；未提交临时排查文件或构建产物。
- 验证：显式 Node v14.21.3；新增回归覆盖等待中重复点击拦截、异常解锁、异常不自动重投、后续手动点击、成功及业务拒绝，全部通过；原始代码负向回放在异常后解锁断言失败，确认测试覆盖缺陷。既有 lotteryBlankAmount.test.js、Vue 模板编译及 git diff --check 通过。本次不新增 Vue API／响应式状态／模板语法。
- H5 整站构建尝试因现有依赖 picocolors 缺失失败；未修改依赖或系统运行时。截图域名在本次排查环境返回 403，尚无获授权登录方式，因此未验证该会员现场根因、真实投注／扣款或线上效果。超时实际是否受理需查单确认。
- 代码提交 `d934b2b949de108fa7d7e32ac6dbc680f0d93b0a` 已推送 origin/BY8367-KYGJ，git ls-remote 核对与本地 HEAD 一致。未部署商户生产；演示站未修改／发布。商户地图和 H5／总索引在独立资料仓库仅提交本次新增段落，其他任务未提交内容保留。

- 2026-10-14 个人中心签到说明问号移除提交 8cbe2ae0c 已推送 origin/BY8367-KYGJ，并核对远端一致；此前推送失败状态已解除。只移除 H5 指定入口，未发布商户生产环境。


- 2026-10-14 最新推送成功：8367 PC 活动全部居中提交 e2324bb5479179af0139d899d90d6d492ab0beea 已推送 origin/BY8367-KYGJ，git ls-remote 确认远端 SHA 与本地 HEAD 完全一致；此前超时已恢复。未部署此补改，需发布新提交后复验。


- 2026-10-14 8367 PC 活动全部居中：用户补充 PC 截图（前一轮仅 H5 复核不适用）。桌面 UA 在 kaiyungjc.cloud/#/active 确认经典页 active-tab 仍追加后台分类，渲染全部及一个空白分类；仅 BY8367-KYGJ 的 pc/src/views/active/active.vue 固定单项全部并加 justify-content:center，活动请求／全部 code空值／分页／详情保持原样。Vue／LESS、不同后台分类数据回归及1280px本地预览通过，导航与全部中心均640px。提交 e2324bb5479179af0139d899d90d6d492ab0beea，连续三次 push 因47.52.90.110:80连接超时失败，仍待推送；未整站构建、未部署，其他版面和 H5 未改。


- 2026-10-14 8367 活动全部居中再次核查：本地 views7/active/active.vue 已由 0cf54d0a8 限定单项全部并占满导航居中；通过手机 UA 与390px浏览器只读复核 https://kaiyungjc.cloud/#/active，实际仅一个全部，标签中心187.496px与导航中心187.5px一致，活动列表及详情入口正常显示。没有重复修改／提交／发布；用户截图域名未提供，若来自其他商户域名需分别复验；未点击详情或操作会员数据。


- 2026-10-14 提交推送补充：本轮源码／回归提交 `5336bf06078e184a4a0327f3b8df883bbf440706` 已推送到 `origin/BY8367-KYGJ`；git ls-remote 验证远端 SHA 与本地 HEAD 完全一致，同时带上此前待推送的 `e483293e9`。本轮定向回归和 diff 检查重新通过；临时 .tmp 未暂存／提交，未部署。以下较早「未提交／推送」是当时状态，以此补充为准。


## 2026-10-14 后台已完成：按 roomId 获取房间彩种

- 用户补充确认后台已完成，要求彩种请求传业务聊天室 `roomId`；此前「需后台新增字段，暂不处理」的待办被本次接入取代，不新增或猜测房间响应字段。仅 `BY8367-KYGJ` / `C:\works\tgproject-BY8367-KYGJ` 修改。
- PC 开奖区 `queryLotterySelectList` 请求 `/api/v2/lottery/queryLotteryList`，保留 `lotteryType: "-2"`，增加当前 `rootState.chatRoomId` 为 `roomId`；按返回 `lotteryTypeList[0].lotteryList` 顺序展示并默认选第一项。房间不配置时展示范围和排序、配置后返回彩种由后台决定，前端不硬编码。
- H5 开奖条请求 `/api/v2/lottery/queryChatPrizeList`，增加 `currChatRoomInfo.roomId`；不使用融云 `ryChatRoomId`，保持后端 `lotteryList` 顺序。
- PC 右侧面板、H5 开奖条按房间 ID 重建，进入／切换房间后重新请求，PC 原手动彩种选择仍保留；旧房间延迟列表响应不覆盖新房间。PC 彩种开奖详情提交前校验当前房间与选中彩种，避免旧详情覆盖；空列表清空选中项，H5 空列表不初始化 Swiper。销毁时清理 H5 Swiper／计时器，PC 销毁后不继续重试或处理旧倒计时回调。
- 影响路径：PC `src/store/modules/lottery.js`、`src/views/chatRoom/chatRight/index.vue`、`src/views/chatRoom/chatRight/drawAlottery/index.vue`；H5 `src/views/chat/chat/chatRoom.vue`、`src/views/chat/chat/child_modal/scrollNotice.vue`。保留上一轮聊天室排行榜入口删除；8368 验证码待办不涉及，演示站／其他商户／control.js／资源库／后台均未改。
- 验证：Node v14.21.3，`h5-v2/tests/chatRoomLottery.test.js` 覆盖业务 roomId、PC 原 lotteryType、后端顺序／单彩种／空列表、旧房间延迟响应、失败响应及旧开奖详情隔离，通过；4 个改动 Vue 模板编译及房间 key 检查通过，git diff --check 通过。构建状态见下方补充；没有真实会员登录、生产接口取数或线上发布验证。尚未提交／推送／部署。
- 构建补充：最终 PC Node14 生产构建成功，并检查生成 JS 已包含本次房间隔离及销毁拦截；生成的 theme.less 已还原。H5 构建被现有 pnpm 依赖缺失阻塞（picocolors，进程级 NODE_PATH 回退后仍缺 @babel/code-frame），未改依赖清单／全局 PATH，不宣称 H5 整站构建通过。临时日志及模板检查在 .tmp，不提交。


## 2026-10-14 聊天室去除排行榜及默认彩种责任边界

- 用户确认保留聊天室，只移除聊天室内排行榜入口；仅 `BY8367-KYGJ` 的 PC 共用聊天室侧栏 `pc/src/views/chatRoom/chatMain/components/aside.vue` 和 H5 共用侧栏 `h5-v2/src/views/chat/chat/child_modal/asideList.vue` 删除入口。聊天室、长龙、红包、礼包及首页榜单保留；排行榜接口和弹层不扩展删除。
- 当前工作区 `C:\works\tgproject-BY8367-KYGJ`，原 managed worktree 在本轮排查期间被外部移除，重新 checkout 既有商户分支；既有提交 `e483293e9` 保留。经典版、主题色、功能开关、control.js 和资源库均未改。
- 房间默认彩种：用户明确仅处理现有业务可独立完成的前端项，需后台的先告知、不修改。本轮未改默认彩种逻辑或后台。后台房间编辑需要新增可空的彩种配置，候选按彩票游戏管理排序保存；房间接口需返回已约定的彩种 ID。当前 PC `queryLotterySelectList` 使用 `queryLotteryList({lotteryType: "-2"})` 首个彩种，H5 开奖展示直接使用 `queryChatPrizeList` 返回的 `lotteryList`；没有凭空新增或猜测房间字段。空值回退及选中后展示范围待后台对接明确。
- 验证：Node v14.21.3，两个改动 Vue 模板编译通过；入口删除和红包保留静态检查、git diff --check 通过。未做真实登录聊天室、整站构建、推送或线上发布；代码改动留在该商户工作区。


## 2026-10-12 PC 投注金额留空与未登录赔率核查

- 用户补充要求 PC 彩票投注默认金额也留空；赔率截图当时未登录，用户确认保持现有逻辑，只需确认登录后显示。
- PC 共用投注页 `pc/src/views/buyLottery/child_modal/shared/children_modal/add_note.vue`：首次进入、未启用主动预设时切换玩法／刷新／清空金额不再填玩法默认 2 或最低额；缓存的预设金额只恢复编辑框设置，不自动勾选或填入实际投注金额。保留用户主动预设、手动输入、筹码选择、单位、赔率／返利及原上下限。空值不绑定最低额，筹码取消选择回到空值。
- PC 注单／随机投注组件 `.../shared/children_modal/result_page.vue`：初始化及完成提交后金额留空，不再从预设缓存或最低额填充；接收共用金额状态时保留空值，计算金额以 0 处理，避免空值调用 numeral.divide 报错；未填额的随机添加注单提示「请输入投注金额」，不生成空额注单。投注 API、赔率、追号计算和服务端金额判定未改。
- 赔率取值链：`POST /api/v2/sysDict/querySystemConfig` 的 `data` 数组 → `h5-v2/src/utils/plugin/plugin.js` 中 `systemConfigData[item.key] = item.value` → `shareSimple.vue` 的 `this.SHOW_ODDS_WHEN_NOT_LOGIN = data.SHOW_ODDS_WHEN_NOT_LOGIN || 0`；渲染条件为 `SHOW_ODDS_WHEN_NOT_LOGIN == 1 || userExist`，其中 `userExist` 取 `user.userCode`。值 0 隐藏未登录赔率，值 1 显示未登录赔率，登录态均显示；不是读取资源库 control.js。
- 2026-10-12 实际只读请求核对：首次 `https://kaiyungjc.cloud/api/v2/sysDict/querySystemConfig` 返回 HTTP 200、业务 code 0，`PLATFORM_FLAG=by367`、`SHOW_ODDS_WHEN_NOT_LOGIN="0"`；交付前重新请求时，8367 该值已变为 "1"，当前应显示未登录赔率。演示站 `https://biyingbaowang.cc` 同接口为 `PLATFORM_FLAG=tgdemo`、该值仍为 "0"。本轮没有修改后端、商户配置或 H5 赔率业务代码。仅保存三个选定字段及请求路径，不保存会员身份或登录凭据；以最新接口响应为准。
- 验证：Node 14.21.3 PC 生产构建成功；`by8367-lottery-blank-amount.regression.js` 覆盖缓存不自动填额、两种限额权限、手动金额、清空／刷新、状态同步及空额随机注单拦截。`h5-v2/tests/loginOddsDisplay.test.js` 使用真实 Vue 模板和实际 userExist getter，在开关 0/1、未登录／登录四种组合中确认登录态渲染全部 20 个快三赔率。PC 本地实际输入组件确认初始为空，存在缓存预设 20 时实际金额仍为空，手动输入／清空及失焦后保持空值；合成数据不代表生产投注／扣款验证。
- 本地提交 `e483293e98bbf8e1d83511ed18b94b0e0993330c`；连续三次推送均因 Git 服务器连接超时失败，仍待推送，未部署。工作区干净、相对缓存远端领先 1 提交。构建生成的 theme.less 已还原；临时接口核查、预览、日志和截图均在工作区 `.tmp/8367-20261012/`，不提交。资料仓库本地记录尚未提交／推送，其他商户及演示站代码不变。

## 2026-10-12 前端定制补齐与提现方式排序

- 2026-10-12 最新需求再次确认：取消充值提示改为「请联系管理」的方案，以去除充值内页下方整段「如有问题，请联系在线客服」为准，不新增跳转。已核对 `rechargeType3.vue`、`rechargeType4.vue` 的整段提示及客服链接均在已推送的 `e27a01b9e` 中删除，其他有效 H5 充值类型没有该固定提示；本次无需新增业务代码修改。其他充值结果／到账时间说明不扩展删除，线上仍待发布后复验。

- 分支及工作区：`BY8367-KYGJ` / `C:\Users\maola\.codex\worktrees\by8367-kygj\tgproject`。本轮只改商户分支；演示站和其他商户分支、废弃 `h5/` 不变。代码提交 `e27a01b9e` 已于 2026-10-12 推送至 `origin/BY8367-KYGJ`，未部署。
- 推送后 `git ls-remote` 确认远端与本地 HEAD 均为 `e27a01b9e91a50d0631182dc1853c5878330657e`，商户工作区干净。本次推送同时包含此前未推送的页脚说明 `4d8ec5451` 和签到月份修复 `d5f8889db`；演示站分支和资源库未推送。地图记录已本地更新，资料仓库尚未提交／推送。
- 最新首页确认优先于 2026-10-09 三入口记录：经典 H5 首页上方为「充值存款／聊天室／天天礼包／代理中心」，下方仍为「首页／游戏大厅／优惠活动／个人中心」。代理图标使用业主 Figma `6DmMdeki7fgoTnXsYrpMPJ` 的 `55:4` 节点原始 PNG 导出（75×75）；入口复用既有登录、试玩、代理身份限制，未登录进入 `/login`，正式代理进入 `/agencyCenter`。影响 `h5-v2/src/views/home/fastNav.vue`、`h5-v2/src/assets/images/home/agency-center.png`。
- 签到：移除 H5 `views`、`views2`、`views3`、`views6`、`views7`、`views8`、`views9` 个人中心及 `views/home/redPacketPop.vue` 的签到入口；PC `personalCenter/child_modal/account/material.vue` 移除签到标题和日历按钮。经验值显示保留，签到后端机制未改；优惠活动中的签到活动图片和内容不属于按钮隐藏范围。
- H5 快捷投注：`buy-lottery/child_modal/bottomSImple/bottom.vue` 每注金额初始为空，选号不再填入默认 2，不恢复旧会话金额，清空后仍为空；保留原输入金额上下限及空值投注拦截。复用已核对的 8366 同类实现，未合并整个商户分支；预设投注、PC 金额输入与投注接口不改。
- PC 在线客服：共用顶部菜单此前已隐藏；本轮移除经典左横幅、聊天室左栏、回馈活动、红包活动顶部与浮动客服入口，以及可切换版面的常规客服导航／悬浮按钮。彩票投注页头保留列表下标和现有取数，仅隐藏客服项，避免其他菜单路由改变。主路径为 `views/layout/child_modal/FloatBanner.vue`、`views/chatRoom/chatLeft/index.vue`、`views/buyLottery/lottery_head.vue`、`views/feedbackActive/feedbackActive.vue`、`views/redPacket/redPacket.vue`；其他版面涉及 `views-v2/v3/v4/v5/v6/v8/v10/v11` 的顶部导航和悬浮组件。帮助正文、账户解绑提示、维护／访问受限页应急链接和 QQ/BBM 等独立入口未扩展处理。
- H5 红包活动：移除 `views/redPacket/redPacket.vue` 下方在线客服，保留人品榜单和我的红包，既有 flex 布局自动等宽。充值内页 `rechargeType3.vue`、`rechargeType4.vue` 移除「如有问题，请联系在线客服」提示，其他充值状态说明和流程保留。
- 提现排序：按用户提供的《提现方式排序 — 前端对接说明.pdf》接入 `POST /api/v2/user/queryLotUserBankInfo` 的 `data.takeTypeList`。PC 提现页、H5 卡片页及 H5 综合提现组件按后端字符串类型码顺序展示，存在数组时不再次过滤旧开关；缺字段回退各页面原顺序，未知码跳过、重复码仅显示第一次，空数组显示「暂无可用提现方式」。PC 切换币种后不保留已不可用的标签。H5 传统卡片页的 `04` 支付卡入口复用既有 `/withdrawal?takeType=04` 综合提现／绑定流程。影响两端 `src/utils/takeTypeList.js`、PC `personalCenter/child_modal/withdraw/withdraw.vue`、H5 `personal-center/child_modal/takefee_list/takefee.vue` 和 `views3/fund/components/withdrawal.vue`。实际数字货币优先顺序取决于后端下发，前端没有硬编码商户排序或修改后台配置。
- 登录锁定提示：确认 PC `src/utils/request.js` 的 `getResponseDataMsg()` 及 H5 请求拦截器直接显示后端 `response.data.msg`。用户明确仅改前端写死文案、后端返回则告知，因此本轮不改提示映射、错误逻辑、登录 API 或锁定次数。目标文案「密码错误次数过多，请联系管理！」应由后端返回。
- 配置和资源：本轮没有 `control.js` 字段改动，无需修改资源库 `by367`；既有 PC/H5 经典版、主题色、Logo、`CHAT_SWITCH`、`WEB_ACTIVITY` 等配置保留。代理 PNG 是 Webpack 打包资产，加入商户源码；未覆盖统一资源库配置。
- 验证：Node `v14.21.3` / npm `6.14.18`；PC、H5 生产构建均通过。H5 初次构建遇到现有 pnpm 依赖缺少 `picocolors`，最终使用本机完整依赖目录及仅对该进程生效的 `NODE_PATH` 完成构建；依赖清单、系统 Node 和全局 PATH 未改。新增 `merchantWithdrawalOrder.test.js` 覆盖顺序、旧接口、空态、未知／重复码、旧标签失效、支付卡入口、代理权限；`lotteryBlankAmount.test.js` 覆盖初始／选号／清空留空、旧会话隔离、空额拦截和手动输入。既有快三 216 种组合与首页分类回归通过，`git diff --check` 通过；PC 构建生成的 theme.less 已还原。
- 375px 本地源组件预览已确认四个首页入口、代理原图及跳转、数字货币／银行卡／支付宝／微信／支付卡顺序、数字货币进入原 `/currencyPay`、空列表空态。预览使用本地合成接口数据，未做真实会员提现、投注或线上发布。脚本、构建日志和截图在工作区 `.tmp/8367-20261012/`，不提交。生产配置、真实登录状态及线上效果待发版复验。

## 2026-10-10 PC 页脚说明补齐与 H5 签到月份

- PC经典页脚仅商户新增每栏四条静态主题说明，CMS无文章时展示纯文字，有文章时仍显示真实标题链接；不补后台正文，不改变其他版面。提交 `4d8ec5451`，PC构建和回归通过。
- H5签到月份格式错误由演示站 `0f77f7a62` 修复，8367 cherry-pick 为 `d5f8889db`。仅改月份拼接；签到奖励、提交和余额逻辑不改。全年12个月与跨年检查通过。
- 当前推送因Git服务器连接超时尚未成功，未发布；详细范围和验证边界见[记录](../pc/manual-BY8367-footer-and-checkin-2026-10-10.md)。

- 商户：8367-开云国际；需求来源为业主提供的 H5 首页截图和文字。
- 代码分支：`BY8367-KYGJ`，独立工作区 `C:\Users\maola\.codex\worktrees\by8367-kygj\tgproject`。
- 基准：演示站 `BY-Demo-H5V2-PC` 的 `68f42caa3995a72cc62cc3ec7e304ace22d99e3b`，创建时本地演示站与缓存 `origin/BY-Demo-H5V2-PC` 一致。2026-10-09 初次获取远端失败；随后连接恢复，已成功新建并推送远端 `BY8367-KYGJ`。未合入创建之后的演示站变更。
- 有效端：`h5-v2/`、`pc/`；定制 H5 首页、活动分类及 PC 顶部客服入口。废弃 `h5/` 未改。
- 版面：H5 首页截图对应经典彩票（`temp`、`views/home`、`views/layout`），优惠活动实际使用 `views7/active/active.vue`（`ACTIVITY_VIEW=0`）；PC 截图为经典版，顶部菜单使用共用 `components/headMenu.vue`。
- 主题色与 Logo：沿用演示站，未改资源库或商户品牌配置。8367 生产资源引用待发布前确认。

## 2026-10-09 首页默认分类与入口布局

| 功能 | 商户行为 | 影响路径 |
| --- | --- | --- |
| 首页彩票默认分类 | 初始化及刷新优先选中代码 `ksan`（快三），同步分类下标及彩种列表；接口不含快三时回退首类，空列表清空选择。保留手动切换其他分类。 | `h5-v2/src/views/home/components/lottery/index.vue` |
| 首页上方快捷入口 | 顺序为“充值存款／聊天室／天天礼包”；移除该区域“优惠活动”“在线客服”，可见入口等宽。聊天室复用 `/chatMain` 路由和已有蓝色 `wechat.png` 图标。 | `h5-v2/src/views/home/fastNav.vue` |
| 底部功能栏 | 固定“首页／游戏大厅／优惠活动／个人中心”四项；活动进入 `/active`，使用现有 Vant 礼物图标并随当前主题高亮。移除红包弹层触发、大图与第三项专用样式，以及聊天项；演示站基准已经移除“发现”。 | `h5-v2/src/views/layout/layout.vue` |
| 回归检查 | 覆盖快三位于首位／非首位、无快三、空列表、手动分类切换及刷新。 | `h5-v2/tests/homeLotteryDefault.test.js` |

## 配置、接口与责任边界

- 三项均为前端展示与默认选择定制，不需要修改后台接口或数据排序。
- 首页聊天室仍受 `CHAT_SWITCH === '1'` 控制，天天礼包仍受原 `WEB_ACTIVITY` 开关及登录校验控制；本次不改变后台开关，也不关闭聊天、红包或客服服务本身。
- 经典首页新增的聊天室入口不受演示站静态 `hideHomeChatRoom` 隐藏项影响；其余版面仍沿用演示站配置。
- 底栏不再受 `CHAT_TAB` 改变项数；游戏大厅保留 `LOBY_TYPE` 分流，`1` 进入 `/lottery/lottery`，其他值进入 `/lottery/games`。
- 彩票请求仍为 `POST /api/v2/lottery/queryLotteryList`，参数 `lotteryType: null`；只在前端选择默认分类，投注与资金接口不变。
- 需求只要求隐藏指定首页区域的入口；其他页面及浮动入口未扩展处理。

## 验证与交付状态

- 已确认 Node `v14.21.3`。默认分类回归、三个 Vue 模板编译、导航 Less 编译及 `LOBY_TYPE`／`CHAT_TAB` 组合检查通过。
- 最终 H5 生产构建通过，本地 375×812 页面确认默认快三、顶部三入口各宽 125px、底部四入口各宽 93.75px，活动项能进入 `/active`。聊天室使用蓝色聊天图标，活动图标正确使用 Vant 字体并通过原底栏主题容器高亮（当前主题计算值 `rgb(236, 0, 0)`）。构建使用本机已有完整依赖，不改依赖清单；Sass、PostCSS、Browserslist 及包体积警告未扩展处理。
- 预览使用本地 API 测试数据和演示站素材，不能作为 8367 生产配置、真实彩种或登录态验收；最终截图为工作区 `.tmp/by8367-qa/home-375.png`。
- 首页定制提交 `376a91ac7fde7be9ce89192deef8cc0e57ebfb06` 已推送到 `origin/BY8367-KYGJ`，当时已核对远端 SHA 与本地相同。提交只含三个 H5 业务文件和一个分类回归测试。最新活动及 PC 定制的推送状态见下节。按用户要求只推代码，未部署；生产站仅做公开页面只读核对。
- 本地验证用的 API 数据、服务脚本、日志及截图保存在工作区 `.tmp/by8367-qa/`，不进入代码提交。

## 2026-10-09 首页下载条问题复核

- 线上 H5 `https://kaiyungjc.cloud/` 使用 `app.f1784dfe.js`、`home.792f5027.js`，下载条渲染模板只有关闭图标及左侧 Logo／文案，没有“立即下载”按钮节点，蓝色背景区域仍在。
- 当前 `BY8367-KYGJ` 的 `h5-v2/src/views/home/go_app.vue` 与演示站相同，已有 `downloadButton`、“立即下载”文字和下载图标。现有生产构建的 `home.8d38e4a0.js` 也包含该按钮；375px 浏览器预览显示完整，首屏仍默认快三。
- 本轮没有新增业务源码修改，下载地址解析、跳转、登录／注册和接口逻辑均保持当前分支实现。线上空白区域需要发布当前前端包后复验，不能把本地验证或 Git 推送表述为线上修复完成。
- 登录及注册的“必赢娱乐”白底头图来自后台 `REGIST_LOGIN_HEAD_IMG`，未改后台配置或静态品牌资源。首页快捷入口在滚动时经过固定头栏下方被遮住，回到顶部后显示完整，本轮未修改该布局。
- 用户明确要求只推代码、不发布。本轮未执行上传、部署、安装或生产下载跳转测试。

## 2026-10-09 H5 活动「全部」居中及 PC 顶部客服隐藏

| 端与范围 | 定制内容 | 影响路径 |
| --- | --- | --- |
| H5 优惠活动，`ACTIVITY_VIEW=0` | 分类固定为「全部」一项，不追加后台平台分类；标签宽度为导航栏 100%，文字和下划线居中。 | `h5-v2/src/views7/active/active.vue` |
| PC 顶部快捷菜单 | 移除截图指定的「在线客服」按钮；会员中心、试玩、收藏、帮助、玩法、主题和热线继续沿用已有显示条件。 | `pc/src/components/headMenu.vue` |

- H5 保留原活动列表请求、分页和详情／外链跳转，参数仍为 `frontType=h5`、`platType=""`；未改 `ACTIVITY_VIEW` 或后台分类配置，也未扩展到活动任务版及 PC 活动分类。
- PC 只隐藏共用顶部快捷菜单中的入口，使用该组件的 8367 版面均不再显示该菜单项；客服接口、方法及其他页面／浮动客服入口未修改。
- 仅修改 `BY8367-KYGJ` 商户分支；演示站 `BY-Demo-H5V2-PC` 和其他商户分支不变。主题、静态商户资源和业务接口不变。
- Node 14.21.3／npm 6.14.18 下 PC、H5 生产构建通过；Vue 模板、Less、活动「全部」参数、两页分页及详情跳转定向检查通过。构建生成的 PC theme.less 已还原，不进入提交。
- 本地 H5 375px 预览：仅一个「全部」，导航栏、文字和下划线中心均为 187.5px；PC 1280px 经典版预览：顶部客服按钮数为 0，其他菜单存在。预览 API 使用本地测试数据；线上和真机效果待发布后复验。
- 代码提交：`0cf54d0a80b6a308790fccbab5938e71823bc38e`，只含上述两个业务文件；初次推送连续三次连接超时，现已于 2026-10-09 随后续快三走势提交 `2f7ae446c` 一起成功推送。未部署。

## 2026-10-09 快三走势去除鱼虾蟹与留白

- 按用户最新指令，仅 cherry-pick 演示站提交 `43a7d2f55432bb3a4c594b646ff3179ebd664936`，商户提交为 `2f7ae446c365ef828ab007cf89adb587a7875240`。未合并整个演示站分支，原有首页、活动和 PC 客服定制保留。
- H5 快三走势去除鱼虾蟹，时间、完整期号、骰子号码、和值／大小单双分为四列并增加留白；PC 走势及聊天室开奖历史同步去除鱼虾蟹展示并调整间距。其他彩种、接口、投注和计算逻辑不改。
- 216 种骰子组合回归、PC/H5 生产构建和本地表格预览通过。375px 四列对齐，320px 表格内横向查看完整字段；真实手机及线上待发布后复验。
- 最新推送状态、具体路径和验证边界见[演示站修复记录](../h5-v2/manual-BY-Demo-ksan-trend-2026-10-09.md)。仍按用户要求只推代码，不发布。
- 2026-10-09 Git 连接恢复，演示站与商户提交均已成功推送；`git ls-remote` 确认 `origin/BY8367-KYGJ` 与本地 HEAD 均为 `2f7ae446c365ef828ab007cf89adb587a7875240`，包含此前活动／PC 客服定制。未发布。

## 2026-10-09 PC 页脚前三栏文字与取数

- 前三栏显示 CMS 帮助文章标题链接，最多四条；右侧「平台优势」是固定文案。8367 注册、充值、提现文章接口均成功返回空数组，需要后台核对并补齐／发布对应商户文章，前端不编造静态业务描述。
- 前端另有「充值购彩」误查账号安全的问题，演示站已修为查询充值文章并链接充值帮助页。8367 仅 cherry-pick 演示站提交 `1afdd1a60b45e3c9b2c012a911df461789c35c8e`，商户提交 `6894f6c39e5652f8d90fbd8c9eb22e946f5bf856`。
- 只改 `pc/src/views/layout/child_modal/footer.vue` 一行，PC 构建及查询／链接／空数据行为检查通过；已推送并核对远端 SHA。未部署，后台数据未修改。具体现场数据见[核查记录](../pc/manual-BY-Demo-footer-recharge-2026-10-09.md)。
