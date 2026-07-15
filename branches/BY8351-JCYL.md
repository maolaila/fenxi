# 商户分支功能地图：BY8351-JCYL

- 生成时间：2026-07-15 09:30:23 +0900
- 来源：远端分支 `origin/BY8351-JCYL`
- 分支提交：`8a4001205` / 2026-06-19 16:35:40 +0900 / fix: keep active tabs gradient fixed
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：119 个；涉及功能域：登录/注册/验证码、接口/状态/工具、首页/导航/版面、个人中心/账户、未归类路径、彩票/投注/开奖、聊天室/私聊、资金/充值/提现。
- 其他路径差异文件：1 个；通常是根配置、文档或非端目录，需要按完整清单核对。
- 扫描到新增/变更颜色值：#fff, #2b323d, #e4393c, #ffd9db, #dfbf67, #eb3434, #ff464c, #d2b79c, #ee0022, #f5dc8b, #1f6efe, #dcc9b7, #d3b69a, #2161fe, #39e2e6, #ff464b, #ddc17c, #f5e6bf, #dde8ff, #3be6e5。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 登录/注册/验证码 | 登录、注册、忘记密码、验证码弹窗、阿里云滑块。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 彩票/投注/开奖 | 购彩页、投注面板、彩种列表、开奖展示、走势图。 |
| 聊天室/私聊 | 聊天室入口、开奖互动、私聊、撤回、消息展示。 |
| 资金/充值/提现 | 充值、提现、银行卡/USDT 绑定、余额宝/借贷、金额转换记录。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 43 | 1319 | 78 | pc/index.html<br>pc/src/components/PhoneBindDialog/index.vue<br>pc/src/components/login_dlg.vue<br>pc/src/components/tryPlay.vue<br>pc/src/main.js<br>pc/src/mixins/register.js<br>pc/src/store/modules/sysDict.js<br>pc/src/utils/aliyunCaptcha.js<br>...另 35 个路径见完整清单 |
| h5-v2 | 76 | 1767 | 330 | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/components/checkin/index.vue<br>h5-v2/src/components/dappandroid/index.vue<br>h5-v2/src/main.js<br>h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>...另 68 个路径见完整清单 |
| 其他 | 1 | 70 | 0 | docs/merchant-frontend-branches.md |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 登录/注册/验证码 | 34 | h5-v2、pc | h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/loginPasswordRule.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/password/indexNew.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/reset_login_pwd/reset_login_pwd.vue<br>h5-v2/src/views/register/registerMixin.js<br>h5-v2/src/views7/login/login.vue<br>h5-v2/src/views7/register/register.vue<br>...另 26 个路径见完整清单 |
| 接口/状态/工具 | 29 | h5-v2、pc | h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/store/modules/theme.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/customerService.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/src/utils/less.js<br>h5-v2/src/utils/loginPasswordRule.js<br>...另 21 个路径见完整清单 |
| 首页/导航/版面 | 26 | h5-v2、pc | h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/components/checkin/index.vue<br>h5-v2/src/components/dappandroid/index.vue<br>h5-v2/src/views/free-play/index.vue<br>h5-v2/src/views/grab-village/gaming-room/roomScrollIndicator.vue<br>h5-v2/src/views/home/go_app.vue<br>h5-v2/src/views/password/indexNew.vue<br>...另 18 个路径见完整清单 |
| 个人中心/账户 | 18 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/tgMgr.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingAliPay.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingDigiccy.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingWechat.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingbank.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue<br>...另 10 个路径见完整清单 |
| 未归类路径 | 13 | h5-v2、pc、其他 | docs/merchant-frontend-branches.md<br>h5-v2/src/main.js<br>h5-v2/src/views8/game/components/searchPage.vue<br>h5-v2/src/views8/game/game.vue<br>h5-v2/src/views9/game/components/searchPage.vue<br>h5-v2/src/views9/game/game.vue<br>pc/src/components/tryPlay.vue<br>pc/src/main.js<br>...另 5 个路径见完整清单 |
| 彩票/投注/开奖 | 11 | h5-v2 | h5-v2/src/views7/lotteryHall/notice.vue<br>h5-v2/src/views8/lottery/components/games/games.vue<br>h5-v2/src/views8/lottery/components/games/gamesForm.vue<br>h5-v2/src/views8/lottery/lottery.vue<br>h5-v2/src/views8/lottery/lotteryType.vue<br>h5-v2/src/views8/lotteryHall/notice.vue<br>h5-v2/src/views9/lottery/components/games/games.vue<br>h5-v2/src/views9/lottery/components/games/gamesForm.vue<br>...另 3 个路径见完整清单 |
| 聊天室/私聊 | 7 | h5-v2 | h5-v2/src/views/chat/chat/chatHeader.vue<br>h5-v2/src/views/chat/chat/child_modal/scrollIndictor.vue<br>h5-v2/src/views/chat/withdrawChat/withdrawChat.vue<br>h5-v2/src/views8/chat/chatMain/components/chatGroup.vue<br>h5-v2/src/views8/chat/chatMain/index.vue<br>h5-v2/src/views9/chat/chatMain/components/chatGroup.vue<br>h5-v2/src/views9/chat/chatMain/index.vue |
| 资金/充值/提现 | 6 | h5-v2 | h5-v2/src/views/chat/withdrawChat/withdrawChat.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingAliPay.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingDigiccy.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingWechat.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingbank.vue<br>h5-v2/src/views/personal-center/child_modal/takefee_list/bankPay.vue |
| 主题/颜色/静态资源 | 4 | h5-v2 | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/src/store/modules/theme.js<br>h5-v2/src/utils/less.js<br>h5-v2/theme/v9-var.less |
| 构建/配置 | 3 | h5-v2、pc | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/src/utils/getSysConfig.js<br>pc/src/utils/getSysConfig.js |
| 代理/报表/团队 | 3 | h5-v2 | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/tgMgr.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue |
| 活动/红包/推广/下载 | 3 | h5-v2 | h5-v2/src/views3/active/active.vue<br>h5-v2/src/views5/active/active.vue<br>h5-v2/src/views7/active/active.vue |
| 客服/反馈/帮助 | 2 | h5-v2、pc | h5-v2/src/utils/customerService.js<br>pc/src/utils/customerService.js |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 89 |
| 工具/混入 | 13 |
| 组件 | 6 |
| 其他 | 5 |
| 构建配置 | 3 |
| 状态 | 3 |
| 主题样式 | 1 |

## 主题色/展示资源线索

- 颜色值：#fff, #2b323d, #e4393c, #ffd9db, #dfbf67, #eb3434, #ff464c, #d2b79c, #ee0022, #f5dc8b, #1f6efe, #dcc9b7, #d3b69a, #2161fe, #39e2e6, #ff464b, #ddc17c, #f5e6bf, #dde8ff, #3be6e5, #1f94ff, #ff8d91, #eadbcb, #d8d8d8, #f7f9fa, #666, #0ecf9b, #f1fcf8, #0ece9b, #fef0f0

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | h5-v2/public/configstatic/h5/control/control.js |
| h5-v2 | 状态 | 主题/颜色/静态资源、接口/状态/工具 | M | h5-v2/src/store/modules/theme.js |
| h5-v2 | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | M | h5-v2/src/utils/less.js |
| h5-v2 | 主题样式 | 主题/颜色/静态资源 | M | h5-v2/theme/v9-var.less |

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 119 | 0 | 120 | ec81b30eba04 | 2026-05-25 09:47:34 +0900 |
| origin/BY-Demo | 949 | 0 | 951 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 4194 | 3 | 4200 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 8a4001205 | 2026-06-19 | fix: keep active tabs gradient fixed |
| fa106a250 | 2026-06-08 | fix: align h5 agency center with template theme |
| 0cc033d8d | 2026-06-08 | fix: default BY8351 h5 to gold template |
| 94bb4070e | 2026-06-08 | fix: cover BY8351 h5 theme colors |
| c3eba6efd | 2026-06-01 | fix: sync BY8351 h5 theme backgrounds |
| 8313e83aa | 2026-06-14 | fix: sync h5 theme variables |
| d68cbadb0 | 2026-06-12 | fix: limit customer service picker to service links |
| d436b7b6b | 2026-05-29 | fix: use multUrl for customer service picker |
| ff37a8e59 | 2026-05-29 | feat: support multiple customer service urls |
| f6ca63505 | 2026-06-11 | fix: localize aliyun captcha trigger text |
| 85555e367 | 2026-06-06 | fix: reset pc aliyun captcha lifecycle |
| 4d18aba45 | 2026-06-05 | fix: handle aliyun captcha close in h5 requests |
| 02052b7a4 | 2026-06-05 | fix: release aliyun captcha state after h5 close |
| a69bb79e9 | 2026-06-05 | fix: preserve aliyun captcha close lifecycle |
| 016f0b421 | 2026-06-05 | fix: allow h5 aliyun captcha reopen after close |
| a5f53c391 | 2026-06-05 | fix: stabilize h5 aliyun captcha touch handling |
| 54ab79dc8 | 2026-06-05 | fix: improve h5 aliyun captcha popup recovery |
| 55b7f2306 | 2026-06-05 | fix: enforce aliyun captcha toggle fallback |
| 3bfb36606 | 2026-06-05 | fix: keep legacy sms flow when aliyun captcha is off |
| 8b214a7b2 | 2026-06-04 | fix: align free play captcha flow with aliyun |
| 809710694 | 2026-06-04 | fix: continue login after aliyun popup success |
| 7fc24fcba | 2026-06-04 | fix: guard all auth captcha requests |
| a5597f915 | 2026-06-04 | feat: replace yidun captcha with aliyun captcha |
| 08bdaa7e5 | 2026-06-04 | feat: enforce strong login password rules |
| 80f4739b1 | 2026-05-25 | fix(h5): guard missing theme color on withdraw pages |
| 3d0267f85 | 2026-05-25 | fix(h5): normalize bare download domains |
| 11e7fef86 | 2026-05-25 | fix(h5): open raw cms download target |
| 9911d306f | 2026-05-25 | fix(h5): open cms download target in new tab |
| f85aa376f | 2026-05-25 | fix(h5): use cms download target first |
| 8c66ac5f6 | 2026-05-25 | fix(h5): remove temp9 auth button backgrounds |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | 其他 | 其他 | 未归类路径 | 70 | 0 |  | docs/merchant-frontend-branches.md |
| M | h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | 9 | 8 |  | h5-v2/public/configstatic/h5/control/control.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 3 |  | h5-v2/public/index.html |
| M | h5-v2 | 组件 | 首页/导航/版面 | 5 | 1 |  | h5-v2/src/components/YiDun/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/components/checkin/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 32 | 5 |  | h5-v2/src/components/dappandroid/index.vue |
| M | h5-v2 | 其他 | 未归类路径 | 11 | 0 |  | h5-v2/src/main.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 18 | 4 |  | h5-v2/src/mixins/initGtCapthca.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 2 | 0 |  | h5-v2/src/store/modules/sysDict.js |
| M | h5-v2 | 状态 | 主题/颜色/静态资源、接口/状态/工具 | 22 | 37 |  | h5-v2/src/store/modules/theme.js |
| A | h5-v2 | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 667 | 0 |  | h5-v2/src/utils/aliyunCaptcha.js |
| A | h5-v2 | 工具/混入 | 客服/反馈/帮助、接口/状态/工具 | 227 | 0 |  | h5-v2/src/utils/customerService.js |
| M | h5-v2 | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | h5-v2/src/utils/getSysConfig.js |
| M | h5-v2 | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | 126 | 32 |  | h5-v2/src/utils/less.js |
| A | h5-v2 | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 104 | 0 |  | h5-v2/src/utils/loginPasswordRule.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 0 |  | h5-v2/src/utils/plugin/plugin.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 47 | 3 |  | h5-v2/src/utils/request.js |
| M | h5-v2 | 页面 | 聊天室/私聊 | 1 | 1 |  | h5-v2/src/views/chat/chat/chatHeader.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 1 | 1 |  | h5-v2/src/views/chat/chat/child_modal/scrollIndictor.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、聊天室/私聊 | 2 | 2 |  | h5-v2/src/views/chat/withdrawChat/withdrawChat.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 29 | 6 |  | h5-v2/src/views/free-play/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/views/grab-village/gaming-room/roomScrollIndicator.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 41 | 12 |  | h5-v2/src/views/home/go_app.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 22 | 15 |  | h5-v2/src/views/login/loginMixin.js |
| M | h5-v2 | 页面 | 登录/注册/验证码、首页/导航/版面 | 8 | 0 |  | h5-v2/src/views/password/indexNew.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 108 | 19 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/agency_center/tgMgr.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 7 | 1 |  | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingAliPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingDigiccy.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingWechat.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingbank.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、个人中心/账户 | 6 | 0 |  | h5-v2/src/views/personal-center/child_modal/mysetting/reset_login_pwd/reset_login_pwd.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/aliPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/bankPay.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/currencyPay.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/weChatPay.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 54 | 9 |  | h5-v2/src/views/register/registerMixin.js |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 8 | 0 |  | h5-v2/src/views3/active/active.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 8 | 0 |  | h5-v2/src/views5/active/active.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 8 | 8 |  | h5-v2/src/views7/active/active.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 3 | 3 |  | h5-v2/src/views7/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views7/home/gamels/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 11 | 11 |  | h5-v2/src/views7/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 3 | 3 |  | h5-v2/src/views7/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 5 | 5 |  | h5-v2/src/views7/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 7 | 7 |  | h5-v2/src/views7/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views7/register/register.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 1 | 1 |  | h5-v2/src/views8/chat/chatMain/components/chatGroup.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 3 | 3 |  | h5-v2/src/views8/chat/chatMain/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 1 | 1 |  | h5-v2/src/views8/game/components/searchPage.vue |
| M | h5-v2 | 页面 | 未归类路径 | 2 | 2 |  | h5-v2/src/views8/game/game.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/views8/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 2 | 2 |  | h5-v2/src/views8/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 9 | 4 |  | h5-v2/src/views8/lottery/components/games/games.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 9 | 4 |  | h5-v2/src/views8/lottery/components/games/gamesForm.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 2 | 1 |  | h5-v2/src/views8/lottery/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 3 | 2 |  | h5-v2/src/views8/lottery/lotteryType.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 5 | 5 |  | h5-v2/src/views8/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 8 | 8 |  | h5-v2/src/views8/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 13 | 11 |  | h5-v2/src/views8/register/register.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 1 | 1 |  | h5-v2/src/views9/chat/chatMain/components/chatGroup.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 3 | 3 |  | h5-v2/src/views9/chat/chatMain/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 1 | 1 |  | h5-v2/src/views9/game/components/searchPage.vue |
| M | h5-v2 | 页面 | 未归类路径 | 2 | 2 |  | h5-v2/src/views9/game/game.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 4 |  | h5-v2/src/views9/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/views9/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 2 | 2 |  | h5-v2/src/views9/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 7 | 3 |  | h5-v2/src/views9/lottery/components/games/games.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 7 | 3 |  | h5-v2/src/views9/lottery/components/games/gamesForm.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 2 | 1 |  | h5-v2/src/views9/lottery/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views9/lottery/lotteryType.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 5 | 5 |  | h5-v2/src/views9/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 8 | 8 |  | h5-v2/src/views9/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 13 | 11 |  | h5-v2/src/views9/register/register.vue |
| M | h5-v2 | 主题样式 | 主题/颜色/静态资源 | 3 | 3 |  | h5-v2/theme/v9-var.less |
| M | pc | 其他 | 首页/导航/版面 | 0 | 7 |  | pc/index.html |
| M | pc | 组件 | 首页/导航/版面 | 1 | 1 |  | pc/src/components/PhoneBindDialog/index.vue |
| M | pc | 组件 | 登录/注册/验证码 | 1 | 1 |  | pc/src/components/login_dlg.vue |
| M | pc | 组件 | 未归类路径 | 32 | 5 |  | pc/src/components/tryPlay.vue |
| M | pc | 其他 | 未归类路径 | 2 | 0 |  | pc/src/main.js |
| M | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 34 | 3 |  | pc/src/mixins/register.js |
| M | pc | 状态 | 接口/状态/工具 | 2 | 0 |  | pc/src/store/modules/sysDict.js |
| A | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 610 | 0 |  | pc/src/utils/aliyunCaptcha.js |
| A | pc | 工具/混入 | 客服/反馈/帮助、接口/状态/工具 | 227 | 0 |  | pc/src/utils/customerService.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | pc/src/utils/getSysConfig.js |
| A | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 104 | 0 |  | pc/src/utils/loginPasswordRule.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 11 | 0 |  | pc/src/utils/plugin/plugin.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 33 | 1 |  | pc/src/utils/request.js |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v10/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v10/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v11/layout/child_modal/header/loginRegister.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v11/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 33 | 3 |  | pc/src/views-v11/register/registerMixin.js |
| M | pc | 页面 | 接口/状态/工具 | 2 | 2 |  | pc/src/views-v2/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v2/common/module_vue/try_play.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v3/common/module_vue/header/loginRegister.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v3/content/login/login.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v3/content/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码 | 8 | 1 |  | pc/src/views-v3/content/register/register.vue |
| M | pc | 页面 | 接口/状态/工具 | 2 | 2 |  | pc/src/views-v4/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v4/common/module_vue/try_play.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v5/components/headerLoginBox.vue |
| M | pc | 页面 | 接口/状态/工具 | 2 | 2 |  | pc/src/views-v5/components/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v5/components/try_play.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v5/login/login.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v5/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码 | 8 | 1 |  | pc/src/views-v5/register/register.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v6/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v6/login/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v8/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v8/login/index.vue |
| M | pc | 页面 | 未归类路径 | 26 | 4 |  | pc/src/views/freeTrial/freeTrial.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/header/loginRegister.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码、个人中心/账户 | 6 | 0 |  | pc/src/views/personalCenter/child_modal/account/modify_password.vue |
| M | pc | 页面 | 个人中心/账户 | 8 | 1 |  | pc/src/views/personalCenter/child_modal/userManage/userManage.vue |
| M | pc | 页面 | 未归类路径 | 10 | 0 |  | pc/src/views/phoneValid/phoneValid.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 43 | 3 |  | pc/src/views/register/registerMixin.js |

## 生成依据

- 分支：`origin/BY8351-JCYL`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8351-JCYL -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
