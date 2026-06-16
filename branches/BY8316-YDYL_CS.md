# 商户分支功能地图：BY8316-YDYL_CS

- 生成时间：2026-06-16 14:06:46 +0900
- 来源：远端分支 `origin/BY8316-YDYL_CS`
- 分支提交：`697a5a74a` / 2026-06-11 15:51:11 +0900 / fix: localize aliyun captcha trigger text
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：346 个；涉及功能域：首页/导航/版面、主题/颜色/静态资源、接口/状态/工具、未归类路径、彩票/投注/开奖、登录/注册/验证码、个人中心/账户、构建/配置。
- 其他路径差异文件：2 个；通常是根配置、文档或非端目录，需要按完整清单核对。
- 扫描到新增/变更颜色值：#fff, #ffffff, #0000, #e4393c, #000000, #000, #333, #eee, #313131, #ff7614, #1f6efe, #ddc17c, #f3f3f3, #999, #eeeeee, #ab47bc, #131522, #d2d0d0, #dddee1, #be1204。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 主题/颜色/静态资源 | 主题色、logo、icon、背景图、静态 CSS 是否匹配商户。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 彩票/投注/开奖 | 购彩页、投注面板、彩种列表、开奖展示、走势图。 |
| 登录/注册/验证码 | 登录、注册、忘记密码、验证码弹窗、阿里云滑块。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 构建/配置 | 构建命令、依赖、环境配置、输出路径。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 332 | 79251 | 42423 | pc/.gitignore<br>pc/README.md<br>pc/config/index.js<br>pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/Icon-60.png<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/configstatic/pc/images/logo-icon.png<br>...另 324 个路径见完整清单 |
| h5-v2 | 14 | 884 | 50 | h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/main.js<br>h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/src/utils/plugin/plugin.js<br>...另 6 个路径见完整清单 |
| 其他 | 2 | 72 | 0 | .gitignore<br>docs/merchant-frontend-branches.md |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 104 | h5-v2、pc | h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/views/free-play/index.vue<br>pc/config/index.js<br>pc/index.html<br>pc/src/assets/images-v10/home/certified_4.png<br>pc/src/assets/images/photo_2023-11-29_22-03-32.jpg<br>pc/src/assets/images/photo_2023-11-29_22-03-39.jpg<br>...另 96 个路径见完整清单 |
| 主题/颜色/静态资源 | 87 | pc | pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/Icon-60.png<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/configstatic/pc/images/logo-icon.png<br>pc/configstatic/pc/images/logo.gif<br>pc/configstatic/pc/images/logo.png<br>pc/configstatic/pc/images/logo/logo.png<br>...另 79 个路径见完整清单 |
| 接口/状态/工具 | 45 | h5-v2、pc | h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/src/utils/plugin/plugin.js<br>h5-v2/src/utils/request.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/register/registerMixin.js<br>...另 37 个路径见完整清单 |
| 未归类路径 | 44 | h5-v2、pc、其他 | .gitignore<br>docs/merchant-frontend-branches.md<br>h5-v2/src/main.js<br>pc/.gitignore<br>pc/README.md<br>pc/package-lock.json<br>pc/src/App.vue<br>pc/src/components/JettonBox.vue<br>...另 36 个路径见完整清单 |
| 彩票/投注/开奖 | 43 | pc | pc/src/api/betShare.js<br>pc/src/store/modules/betShare.js<br>pc/src/store/modules/lottery.js<br>pc/src/views-v10/game/components/GameBall.vue<br>pc/src/views-v11/home/fast_betting.vue<br>pc/src/views-v11/layout/child_modal/left_lottery.vue<br>pc/src/views-v11/layout/child_modal/lottery_head.vue<br>pc/src/views/buyLottery/buyLottery.vue<br>...另 35 个路径见完整清单 |
| 登录/注册/验证码 | 34 | h5-v2、pc | h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/register/registerMixin.js<br>pc/src/assets/images-v11/loginBg.png<br>pc/src/components/login_dlg.vue<br>pc/src/mixins/register.js<br>pc/src/utils/aliyunCaptcha.js<br>pc/src/views-v10/login/index.vue<br>...另 26 个路径见完整清单 |
| 个人中心/账户 | 34 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue<br>pc/src/api/user.js<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/personalCenter/child_modal/account/account.vue<br>pc/src/views/personalCenter/child_modal/account/aliPayAccount.vue<br>pc/src/views/personalCenter/child_modal/account/bankAccount.vue<br>pc/src/views/personalCenter/child_modal/account/currencyAccount.vue<br>...另 26 个路径见完整清单 |
| 构建/配置 | 23 | h5-v2、pc | h5-v2/src/utils/getSysConfig.js<br>pc/config/index.js<br>pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/Icon-60.png<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/configstatic/pc/images/logo-icon.png<br>pc/configstatic/pc/images/logo.gif<br>...另 15 个路径见完整清单 |
| 聊天室/私聊 | 20 | pc | pc/src/assets/images/chat/cptt.png<br>pc/src/store/modules/chat.js<br>pc/src/views/chatRoom/chatHeader.vue<br>pc/src/views/chatRoom/chatLeft/index.vue<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/chatRoom/chatLeft/peopleList.vue<br>pc/src/views/chatRoom/chatMain/chat.less<br>pc/src/views/chatRoom/chatMain/chatFeature.vue<br>...另 12 个路径见完整清单 |
| 资金/充值/提现 | 10 | pc | pc/src/views/personalCenter/child_modal/account/bankAccount.vue<br>pc/src/views/personalCenter/child_modal/recharge/components/DigitalCurrency.vue<br>pc/src/views/personalCenter/child_modal/recharge/recharge.vue<br>pc/src/views/personalCenter/child_modal/recharge/step2.vue<br>pc/src/views/personalCenter/child_modal/recharge/step3.vue<br>pc/src/views/personalCenter/child_modal/withdraw/aliPay.vue<br>pc/src/views/personalCenter/child_modal/withdraw/bankPay.vue<br>pc/src/views/personalCenter/child_modal/withdraw/cardPay.vue<br>...另 2 个路径见完整清单 |
| 活动/红包/推广/下载 | 8 | pc | pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/src/assets/images-v10/phone-buy/APPdownload_image.png<br>pc/src/views-v10/active/index.vue<br>pc/src/views-v11/active/index.vue<br>pc/src/views/active/active.vue<br>pc/src/views/active/index.vue<br>pc/src/views/feedbackActive/feedbackActive.vue<br>pc/src/views/redPacket/redPacket.vue |
| 代理/报表/团队 | 5 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue<br>pc/src/views/personalCenter/child_modal/agentBetting/agentBetting.vue<br>pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue<br>pc/src/views/personalCenter/child_modal/agentTrade/agentTrade.vue<br>pc/src/views/personalCenter/child_modal/subReport/index.vue |
| 客服/反馈/帮助 | 3 | pc | pc/src/components/Longqueue/long-helper/longHelperList.vue<br>pc/src/components/Longqueue/long-helper/longRecordList.vue<br>pc/src/views/feedbackActive/feedbackActive.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 211 |
| 图片资源 | 43 |
| 构建配置 | 22 |
| 其他 | 15 |
| 主题样式 | 15 |
| 工具/混入 | 14 |
| 组件 | 13 |
| 状态 | 9 |
| 接口 | 5 |
| 路由 | 1 |

## 主题色/展示资源线索

- 颜色值：#fff, #ffffff, #0000, #e4393c, #000000, #000, #333, #eee, #313131, #ff7614, #1f6efe, #ddc17c, #f3f3f3, #999, #eeeeee, #ab47bc, #131522, #d2d0d0, #dddee1, #be1204, #949494, #5169de, #666, #aa8743, #3be6e5, #1f94ff, #e2e2e2, #ebf2fb, #f5f3a9, #b79954

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/control/control.js |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/Icon-60.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/favicon.ico |
| pc | 构建配置 | 活动/红包/推广/下载、主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/ic_promotion_logo.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | D | pc/configstatic/pc/images/logo-icon.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/logo.gif |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/logo.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/logo/logo.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo/logo_A.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo/logo_B.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo/logo_C.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo_A.gif |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo_A.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo_B.gif |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo_B.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo_C.gif |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/logo_C.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | pc/configstatic/pc/images/qrbg.png |
| pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | M | pc/src/assets/images-v10/home/certified_4.png |
| pc | 图片资源 | 活动/红包/推广/下载、主题/颜色/静态资源 | M | pc/src/assets/images-v10/phone-buy/APPdownload_image.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/deposit_method.png |
| pc | 图片资源 | 登录/注册/验证码、主题/颜色/静态资源 | A | pc/src/assets/images-v11/loginBg.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/open_num.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/sf1.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/sf2.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/sf3.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/sf4.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/sf5.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/sf6.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images-v11/yard.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images/bg.png |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/bg_cp.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images/by318.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images/by347.png |
| pc | 图片资源 | 聊天室/私聊、主题/颜色/静态资源 | M | pc/src/assets/images/chat/cptt.png |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg1.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg2.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg3.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg4.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg5.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg6.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg7.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/en_tg_bg8.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images/logo.png |
| pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | D | pc/src/assets/images/photo_2023-11-29_22-03-32.jpg |
| pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | D | pc/src/assets/images/photo_2023-11-29_22-03-39.jpg |
| pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | D | pc/src/assets/images/photo_2023-11-29_22-03-43.jpg |
| pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | D | pc/src/assets/images/photo_2023-11-29_22-03-48.jpg |
| pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | D | pc/src/assets/images/photo_2023-11-29_22-03-52.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg1.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg2.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg3.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg4.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg5.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg6.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg7.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg8.jpg |
| pc | 组件 | 主题/颜色/静态资源 | M | pc/src/components/logo.vue |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/constant/theme.js |
| pc | 状态 | 主题/颜色/静态资源、接口/状态/工具 | M | pc/src/store/modules/theme.js |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/backup/v10-app-var.less |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/backup/v11-app-var.less |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/backup/v11-iview-var.less |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/backup/v3-iview-var.less |
| pc | 主题样式 | 主题/颜色/静态资源 | A | pc/src/styles/css/iview-var.css |
| pc | 主题样式 | 主题/颜色/静态资源 | A | pc/src/styles/css/v11-iview-var.css |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/theme/components/base.less |
| pc | 主题样式 | 首页/导航/版面、主题/颜色/静态资源 | M | pc/src/styles/theme/components/v10-layout-theme-dark.less |
| pc | 主题样式 | 主题/颜色/静态资源 | A | pc/src/styles/theme/css/base.css |
| pc | 主题样式 | 首页/导航/版面、主题/颜色/静态资源 | A | pc/src/styles/theme/css/v10-layout-theme-dark.css |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/theme/iview-var.less |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/src/styles/theme/theme.less |
| pc | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | A | pc/src/utils/less.js |
| pc | 页面 | 首页/导航/版面、主题/颜色/静态资源 | A | pc/src/views-v11/layout/child_modal/header/closeIcon.vue |
| pc | 页面 | 彩票/投注/开奖、主题/颜色/静态资源 | A | pc/src/views/buyLottery/css/test.css |
| pc | 页面 | 聊天室/私聊、主题/颜色/静态资源 | M | pc/src/views/chatRoom/chatMain/chat.less |
| pc | 页面 | 彩票/投注/开奖、聊天室/私聊、主题/颜色/静态资源 | A | pc/src/views/chatRoom/chatRight/drawAlottery/css/ball.css |
| pc | 页面 | 彩票/投注/开奖、聊天室/私聊、主题/颜色/静态资源 | M | pc/src/views/chatRoom/chatRight/drawAlottery/lotteryNumber/ball.less |
| pc | 页面 | 聊天室/私聊、主题/颜色/静态资源 | A | pc/src/views/chatRoom/css/chat.css |
| pc | 页面 | 主题/颜色/静态资源 | A | pc/src/views/css/test.css |
| pc | 主题样式 | 主题/颜色/静态资源 | A | pc/static/css/theme.css |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/static/css/theme.less |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/static/images/appsj.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/static/images/bg.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/static/images/by318.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/static/images/img_bg.png |
| pc | 其他 | 主题/颜色/静态资源 | M | pc/static/js/RongIMVoice-2.2.6.js |

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 346 | 0 | 348 | ac5ce626bae8 | 2024-01-25 14:52:34 +0800 |
| origin/BY-Demo | 480 | 0 | 482 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 3957 | 3 | 3963 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 697a5a74a | 2026-06-11 | fix: localize aliyun captcha trigger text |
| b088ea3f8 | 2026-06-06 | fix: reset pc aliyun captcha lifecycle |
| c84cadcf1 | 2026-06-05 | fix: handle aliyun captcha close in h5 requests |
| f15eb7bcf | 2026-06-05 | fix: release aliyun captcha state after h5 close |
| 09581e6c9 | 2026-06-05 | fix: preserve aliyun captcha close lifecycle |
| 42d3e39c9 | 2026-06-05 | fix: allow h5 aliyun captcha reopen after close |
| 4f7154038 | 2026-06-05 | fix: stabilize h5 aliyun captcha touch handling |
| e8a4c8103 | 2026-06-05 | fix: improve h5 aliyun captcha popup recovery |
| bf3116719 | 2026-06-05 | fix: enforce aliyun captcha toggle fallback |
| 7e7e72c00 | 2026-06-05 | fix: keep legacy sms flow when aliyun captcha is off |
| 61fc9b4e0 | 2026-06-04 | fix: align free play captcha flow with aliyun |
| d36b637d4 | 2026-06-04 | fix: continue login after aliyun popup success |
| 697876a49 | 2026-06-04 | fix: guard all auth captcha requests |
| 6ec6d0bae | 2026-06-04 | feat: replace yidun captcha with aliyun captcha |
| 94e7dcede | 2025-05-12 | feat: 8349 投注号码 改为 冠军 亚军排列方式 |
| 1aca36722 | 2025-05-05 | 部分修改 |
| aecb6243c | 2025-05-03 | feat: 8321-澳客网/ 8317-彩客网 投注页面  高级追号   每隔 期数 默认改成 |
| a93db8590 | 2025-04-28 | feat: 347人民币选项改为全站 |
| a6086f916 | 2025-04-23 | feat:8347提现时输入 人民币的数量 |
| c4d41b127 | 2025-04-22 | feat: 347调整提现显示rmb |
| 001f462f3 | 2025-04-12 | feat: 福彩3d两面玩法 |
| 4e6e44027 | 2025-04-12 | feat: 更新 fc3d.js 文件 |
| bebe26818 | 2025-04-06 | fix: 测试提交 |
| 528d604c6 | 2025-04-02 | fix: 历史开奖 pk10 调整 |
| 1494d8a2d | 2025-04-01 | fix: 修改展示类型 |
| 653fd99c0 | 2025-04-01 | feat: 开奖展示 大小，单双 |
| bdb44f310 | 2025-03-25 | feat: 更换个人二维码背景图 |
| 54dfe9a4c | 2025-03-25 | fix: 优惠活动 标题展示调整 |
| c035e0f71 | 2025-03-18 | fix:317 321修改提示语 |
| 33cb990e2 | 2025-03-17 | fix: 1 |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M | 其他 | 其他 | 未归类路径 | 2 | 0 |  | .gitignore |
| A | 其他 | 其他 | 未归类路径 | 70 | 0 |  | docs/merchant-frontend-branches.md |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 4 |  | h5-v2/public/index.html |
| M | h5-v2 | 组件 | 首页/导航/版面 | 5 | 1 |  | h5-v2/src/components/YiDun/index.vue |
| M | h5-v2 | 其他 | 未归类路径 | 2 | 0 |  | h5-v2/src/main.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 18 | 4 |  | h5-v2/src/mixins/initGtCapthca.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 2 | 0 |  | h5-v2/src/store/modules/sysDict.js |
| A | h5-v2 | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 667 | 0 |  | h5-v2/src/utils/aliyunCaptcha.js |
| M | h5-v2 | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | h5-v2/src/utils/getSysConfig.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 0 |  | h5-v2/src/utils/plugin/plugin.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 47 | 3 |  | h5-v2/src/utils/request.js |
| M | h5-v2 | 页面 | 首页/导航/版面 | 25 | 6 |  | h5-v2/src/views/free-play/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 22 | 15 |  | h5-v2/src/views/login/loginMixin.js |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 89 | 14 |  | h5-v2/src/views/register/registerMixin.js |
| M | pc | 其他 | 未归类路径 | 1 | 1 |  | pc/.gitignore |
| M | pc | 其他 | 未归类路径 | 245 | 205 |  | pc/README.md |
| M | pc | 其他 | 首页/导航/版面、构建/配置 | 29 | 2 |  | pc/config/index.js |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | 129 | 78 |  | pc/configstatic/pc/control/control.js |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/Icon-60.png |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/favicon.ico |
| M | pc | 构建配置 | 活动/红包/推广/下载、主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/ic_promotion_logo.png |
| D | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo-icon.png |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo.gif |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo.png |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo/logo.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo/logo_A.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo/logo_B.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo/logo_C.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo_A.gif |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo_A.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo_B.gif |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo_B.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo_C.gif |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo_C.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/qrbg.png |
| M | pc | 其他 | 首页/导航/版面 | 48 | 50 |  | pc/index.html |
| M | pc | 其他 | 未归类路径 | 1 | 1 |  | pc/package-lock.json |
| M | pc | 构建配置 | 构建/配置 | 1 | 1 |  | pc/package.json |
| M | pc | 其他 | 未归类路径 | 86 | 67 |  | pc/src/App.vue |
| M | pc | 接口 | 接口/状态/工具 | 58 | 8 |  | pc/src/api/app.js |
| M | pc | 接口 | 彩票/投注/开奖、接口/状态/工具 | 41 | 31 |  | pc/src/api/betShare.js |
| M | pc | 接口 | 接口/状态/工具 | 26 | 25 |  | pc/src/api/cms.js |
| M | pc | 接口 | 接口/状态/工具 | 26 | 16 |  | pc/src/api/game.js |
| M | pc | 接口 | 个人中心/账户、接口/状态/工具 | 85 | 9 |  | pc/src/api/user.js |
| M | pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v10/home/certified_4.png |
| M | pc | 图片资源 | 活动/红包/推广/下载、主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v10/phone-buy/APPdownload_image.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/deposit_method.png |
| A | pc | 图片资源 | 登录/注册/验证码、主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/loginBg.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/open_num.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/sf1.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/sf2.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/sf3.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/sf4.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/sf5.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/sf6.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images-v11/yard.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/bg.png |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/bg_cp.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/by318.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/by347.png |
| M | pc | 图片资源 | 聊天室/私聊、主题/颜色/静态资源 | - | - |  | pc/src/assets/images/chat/cptt.png |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg1.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg2.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg3.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg4.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg5.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg6.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg7.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/en_tg_bg8.jpg |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/logo.png |
| D | pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | pc/src/assets/images/photo_2023-11-29_22-03-32.jpg |
| D | pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | pc/src/assets/images/photo_2023-11-29_22-03-39.jpg |
| D | pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | pc/src/assets/images/photo_2023-11-29_22-03-43.jpg |
| D | pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | pc/src/assets/images/photo_2023-11-29_22-03-48.jpg |
| D | pc | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | pc/src/assets/images/photo_2023-11-29_22-03-52.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg1.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg2.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg3.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg4.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg5.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg6.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg7.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg8.jpg |
| M | pc | 组件 | 未归类路径 | 344 | 301 |  | pc/src/components/JettonBox.vue |
| M | pc | 组件 | 客服/反馈/帮助 | 629 | 551 |  | pc/src/components/Longqueue/long-helper/longHelperList.vue |
| M | pc | 组件 | 客服/反馈/帮助 | 91 | 102 |  | pc/src/components/Longqueue/long-helper/longRecordList.vue |
| M | pc | 组件 | 未归类路径 | 56 | 59 |  | pc/src/components/MobileBox.vue |
| M | pc | 组件 | 首页/导航/版面 | 454 | 413 |  | pc/src/components/PhoneBindDialog/index.vue |
| M | pc | 组件 | 首页/导航/版面 | 258 | 232 |  | pc/src/components/PhoneValidDialog/index.vue |
| M | pc | 组件 | 未归类路径 | 20 | 23 |  | pc/src/components/ZkInput/main.vue |
| M | pc | 组件 | 首页/导航/版面 | 19 | 3 |  | pc/src/components/headMenu.vue |
| M | pc | 组件 | 登录/注册/验证码 | 46 | 71 |  | pc/src/components/login_dlg.vue |
| M | pc | 组件 | 主题/颜色/静态资源 | 36 | 7 |  | pc/src/components/logo.vue |
| M | pc | 组件 | 未归类路径 | 16 | 23 |  | pc/src/components/modal.vue |
| M | pc | 组件 | 未归类路径 | 399 | 353 |  | pc/src/components/tryPlay.vue |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 1 |  | pc/src/constant/theme.js |
| M | pc | 其他 | 未归类路径 | 21 | 19 |  | pc/src/directive/drag/drag.js |
| M | pc | 其他 | 未归类路径 | 403 | 205 |  | pc/src/lang/en_US.js |
| M | pc | 其他 | 未归类路径 | 32 | 9 |  | pc/src/lang/zh_CN.js |
| M | pc | 其他 | 未归类路径 | 33 | 29 |  | pc/src/main.js |
| M | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 222 | 76 |  | pc/src/mixins/register.js |
| M | pc | 路由 | 首页/导航/版面 | 261 | 258 |  | pc/src/router/index.js |
| M | pc | 状态 | 首页/导航/版面、接口/状态/工具 | 241 | 238 |  | pc/src/store/index.js |
| M | pc | 状态 | 彩票/投注/开奖、接口/状态/工具 | 110 | 69 |  | pc/src/store/modules/betShare.js |
| M | pc | 状态 | 聊天室/私聊、接口/状态/工具 | 326 | 224 |  | pc/src/store/modules/chat.js |
| M | pc | 状态 | 接口/状态/工具 | 4 | 4 |  | pc/src/store/modules/cms.js |
| M | pc | 状态 | 彩票/投注/开奖、接口/状态/工具 | 110 | 98 |  | pc/src/store/modules/lottery.js |
| M | pc | 状态 | 接口/状态/工具 | 133 | 100 |  | pc/src/store/modules/sysDict.js |
| M | pc | 状态 | 主题/颜色/静态资源、接口/状态/工具 | 54 | 93 |  | pc/src/store/modules/theme.js |
| M | pc | 状态 | 接口/状态/工具 | 78 | 51 |  | pc/src/store/mutation_types.js |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 2 |  | pc/src/styles/backup/v10-app-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 1 | 1 |  | pc/src/styles/backup/v11-app-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 7 | 7 |  | pc/src/styles/backup/v11-iview-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 2 |  | pc/src/styles/backup/v3-iview-var.less |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/styles/css/iview-var.css |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/styles/css/v11-iview-var.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 5082 | 2152 |  | pc/src/styles/theme/components/base.less |
| M | pc | 主题样式 | 首页/导航/版面、主题/颜色/静态资源 | 135 | 105 |  | pc/src/styles/theme/components/v10-layout-theme-dark.less |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 6481 | 0 |  | pc/src/styles/theme/css/base.css |
| A | pc | 主题样式 | 首页/导航/版面、主题/颜色/静态资源 | 7138 | 0 |  | pc/src/styles/theme/css/v10-layout-theme-dark.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 7 | 7 |  | pc/src/styles/theme/iview-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 992 | 984 |  | pc/src/styles/theme/theme.less |
| A | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 610 | 0 |  | pc/src/utils/aliyunCaptcha.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 3 | 3 |  | pc/src/utils/diswatch.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | pc/src/utils/getSysConfig.js |
| A | pc | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | 89 | 0 |  | pc/src/utils/less.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 88 | 88 |  | pc/src/utils/plugin/ivewComponent.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 6 | 0 |  | pc/src/utils/plugin/plugin.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 567 | 515 |  | pc/src/utils/random/fc3d.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 234 | 234 |  | pc/src/utils/random/pk10.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 168 | 121 |  | pc/src/utils/request.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 843 | 749 |  | pc/src/utils/rongyun.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 71 | 61 |  | pc/src/utils/tplConfig.js |
| M | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 402 | 137 |  | pc/src/views-v10/active/index.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 10 | 6 |  | pc/src/views-v10/game/components/GameBall.vue |
| M | pc | 页面 | 未归类路径 | 10 | 6 |  | pc/src/views-v10/game/components/GameFish.vue |
| M | pc | 页面 | 未归类路径 | 56 | 49 |  | pc/src/views-v10/game/components/GameItem.vue |
| M | pc | 页面 | 未归类路径 | 10 | 6 |  | pc/src/views-v10/game/components/GamePoker.vue |
| M | pc | 页面 | 未归类路径 | 18 | 7 |  | pc/src/views-v10/game/components/GameSearchInput.vue |
| M | pc | 页面 | 未归类路径 | 10 | 6 |  | pc/src/views-v10/game/components/GameSlot.vue |
| M | pc | 页面 | 未归类路径 | 10 | 6 |  | pc/src/views-v10/game/components/GameSports.vue |
| M | pc | 页面 | 未归类路径 | 42 | 32 |  | pc/src/views-v10/game/components/GameTabs.vue |
| M | pc | 页面 | 未归类路径 | 10 | 6 |  | pc/src/views-v10/game/components/GameVideo.vue |
| M | pc | 页面 | 接口/状态/工具 | 112 | 89 |  | pc/src/views-v10/game/components/gameMixin.js |
| M | pc | 页面 | 首页/导航/版面 | 32 | 35 |  | pc/src/views-v10/home/components/Banner.vue |
| M | pc | 页面 | 首页/导航/版面 | 50 | 39 |  | pc/src/views-v10/home/components/HomeHotGames.vue |
| M | pc | 页面 | 首页/导航/版面 | 18 | 15 |  | pc/src/views-v10/home/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 103 | 148 |  | pc/src/views-v10/layout/SlideQuick.vue |
| A | pc | 页面 | 首页/导航/版面 | 378 | 0 |  | pc/src/views-v10/layout/SlideQuick12.vue |
| M | pc | 页面 | 首页/导航/版面 | 5 | 1 |  | pc/src/views-v10/layout/components/BaseFooter.vue |
| M | pc | 页面 | 首页/导航/版面 | 34 | 16 |  | pc/src/views-v10/layout/components/BaseHeader.vue |
| M | pc | 页面 | 首页/导航/版面 | 41 | 50 |  | pc/src/views-v10/layout/popupNotice.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 128 | 118 |  | pc/src/views-v10/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 94 | 85 |  | pc/src/views-v10/register/index.vue |
| A | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 655 | 0 |  | pc/src/views-v11/active/index.vue |
| A | pc | 页面 | 首页/导航/版面 | 157 | 0 |  | pc/src/views-v11/home/BannerLee.vue |
| A | pc | 页面 | 首页/导航/版面 | 649 | 0 |  | pc/src/views-v11/home/ListLee.vue |
| A | pc | 页面 | 首页/导航/版面 | 131 | 0 |  | pc/src/views-v11/home/banner.vue |
| A | pc | 页面 | 首页/导航/版面 | 739 | 0 |  | pc/src/views-v11/home/banner3d.vue |
| A | pc | 页面 | 首页/导航/版面 | 145 | 0 |  | pc/src/views-v11/home/down_time.vue |
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 470 | 0 |  | pc/src/views-v11/home/fast_betting.vue |
| A | pc | 页面 | 首页/导航/版面 | 91 | 0 |  | pc/src/views-v11/home/home.vue |
| A | pc | 页面 | 首页/导航/版面 | 89 | 0 |  | pc/src/views-v11/home/hotlist.vue |
| A | pc | 页面 | 首页/导航/版面 | 643 | 0 |  | pc/src/views-v11/home/infolist.vue |
| A | pc | 页面 | 首页/导航/版面 | 271 | 0 |  | pc/src/views-v11/home/qr_notice.vue |
| A | pc | 页面 | 首页/导航/版面 | 492 | 0 |  | pc/src/views-v11/layout/SlideQuick12.vue |
| A | pc | 页面 | 首页/导航/版面 | 36 | 0 |  | pc/src/views-v11/layout/child_modal/components/ConfirmFree.vue |
| A | pc | 页面 | 首页/导航/版面 | 183 | 0 |  | pc/src/views-v11/layout/child_modal/footer12.vue |
| A | pc | 页面 | 首页/导航/版面 | 267 | 0 |  | pc/src/views-v11/layout/child_modal/header.vue |
| A | pc | 页面 | 首页/导航/版面 | 32 | 0 |  | pc/src/views-v11/layout/child_modal/header/bulb.vue |
| A | pc | 页面 | 首页/导航/版面、主题/颜色/静态资源 | 36 | 0 |  | pc/src/views-v11/layout/child_modal/header/closeIcon.vue |
| A | pc | 页面 | 首页/导航/版面 | 53 | 0 |  | pc/src/views-v11/layout/child_modal/header/headMenu.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 344 | 0 |  | pc/src/views-v11/layout/child_modal/header/loginRegister.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 410 | 0 |  | pc/src/views-v11/layout/child_modal/header/logined.vue |
| A | pc | 页面 | 首页/导航/版面 | 517 | 0 |  | pc/src/views-v11/layout/child_modal/header/nav.vue |
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 490 | 0 |  | pc/src/views-v11/layout/child_modal/left_lottery.vue |
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 366 | 0 |  | pc/src/views-v11/layout/child_modal/lottery_head.vue |
| A | pc | 页面 | 首页/导航/版面 | 213 | 0 |  | pc/src/views-v11/layout/child_modal/newheader.vue |
| A | pc | 页面 | 首页/导航/版面 | 100 | 0 |  | pc/src/views-v11/layout/gameCategory.vue |
| A | pc | 页面 | 首页/导航/版面 | 171 | 0 |  | pc/src/views-v11/layout/layout.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 185 | 0 |  | pc/src/views-v11/login/index.vue |
| A | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 292 | 0 |  | pc/src/views-v11/login/loginMixin.js |
| A | pc | 页面 | 首页/导航/版面 | 137 | 0 |  | pc/src/views-v11/phone-buy/HomeQrcode.vue |
| A | pc | 页面 | 未归类路径 | 441 | 0 |  | pc/src/views-v11/phone-buy/RedpactList.vue |
| A | pc | 页面 | 首页/导航/版面 | 232 | 0 |  | pc/src/views-v11/phone-buy/index.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 386 | 0 |  | pc/src/views-v11/register/index.vue |
| A | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 618 | 0 |  | pc/src/views-v11/register/registerMixin.js |
| M | pc | 页面 | 未归类路径 | 130 | 129 |  | pc/src/views-v2/common/module_vue/header.vue |
| M | pc | 页面 | 接口/状态/工具 | 794 | 794 |  | pc/src/views-v2/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 90 | 52 |  | pc/src/views-v2/common/module_vue/suspend.vue |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v2/common/module_vue/try_play.vue |
| M | pc | 页面 | 未归类路径 | 39 | 42 |  | pc/src/views-v2/content/game/gameList.vue |
| M | pc | 页面 | 首页/导航/版面 | 28 | 41 |  | pc/src/views-v2/content/home/gameCard.vue |
| M | pc | 页面 | 首页/导航/版面 | 18 | 25 |  | pc/src/views-v2/content/home/gameSwiper.vue |
| M | pc | 页面 | 首页/导航/版面 | 53 | 10 |  | pc/src/views-v2/content/home/home.vue |
| M | pc | 页面 | 登录/注册/验证码 | 101 | 124 |  | pc/src/views-v2/content/register/register.vue |
| M | pc | 页面 | 未归类路径 | 76 | 111 |  | pc/src/views-v3/common/module_vue/footer.vue |
| M | pc | 页面 | 未归类路径 | 84 | 88 |  | pc/src/views-v3/common/module_vue/header.vue |
| M | pc | 页面 | 首页/导航/版面 | 514 | 472 |  | pc/src/views-v3/common/module_vue/header/headMenu.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v3/common/module_vue/header/loginRegister.vue |
| M | pc | 页面 | 未归类路径 | 69 | 49 |  | pc/src/views-v3/content/game/child_vue/gameList.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v3/content/login/login.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v3/content/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码 | 266 | 206 |  | pc/src/views-v3/content/register/register.vue |
| M | pc | 页面 | 首页/导航/版面 | 109 | 146 |  | pc/src/views-v3/layout/SlideQuick.vue |
| M | pc | 页面 | 接口/状态/工具 | 807 | 812 |  | pc/src/views-v4/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 63 | 72 |  | pc/src/views-v4/common/module_vue/top.vue |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v4/common/module_vue/try_play.vue |
| M | pc | 页面 | 未归类路径 | 87 | 84 |  | pc/src/views-v4/content/game/gameList.vue |
| M | pc | 页面 | 未归类路径 | 109 | 111 |  | pc/src/views-v5/components/header.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v5/components/headerLoginBox.vue |
| M | pc | 页面 | 接口/状态/工具 | 806 | 805 |  | pc/src/views-v5/components/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v5/components/try_play.vue |
| M | pc | 页面 | 未归类路径 | 67 | 48 |  | pc/src/views-v5/game/child_vue/gameList.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v5/login/login.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v5/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码 | 91 | 98 |  | pc/src/views-v5/register/register.vue |
| M | pc | 页面 | 接口/状态/工具 | 69 | 55 |  | pc/src/views-v6/game/components/gameMixin.js |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v6/layout/components/BaseHeader.vue |
| M | pc | 页面 | 首页/导航/版面 | 142 | 140 |  | pc/src/views-v6/layout/components/BaseNav.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v6/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 92 | 83 |  | pc/src/views-v6/register/index.vue |
| M | pc | 页面 | 未归类路径 | 60 | 56 |  | pc/src/views-v8/game/components/GameItem.vue |
| M | pc | 页面 | 接口/状态/工具 | 97 | 86 |  | pc/src/views-v8/game/components/gameMixin.js |
| M | pc | 页面 | 首页/导航/版面 | 111 | 149 |  | pc/src/views-v8/layout/SlideQuick.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v8/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v8/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 93 | 90 |  | pc/src/views-v8/register/index.vue |
| M | pc | 页面 | 活动/红包/推广/下载 | 365 | 131 |  | pc/src/views/active/active.vue |
| M | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 46 | 20 |  | pc/src/views/active/index.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 170 | 143 |  | pc/src/views/buyLottery/buyLottery.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 142 | 127 |  | pc/src/views/buyLottery/child_modal/common_vue/prize_list.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 88 | 84 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/common_modal/input_modal.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 33 | 33 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/index.js |
| M | pc | 页面 | 彩票/投注/开奖 | 136 | 122 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/liangmian.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 75 | 87 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/lianwei.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 161 | 164 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/lianxiao.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 68 | 62 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/sebo.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 51 | 61 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/shengxiao.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 112 | 127 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/teima_ab.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 39 | 38 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/weishu.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 89 | 108 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/zhengma.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 116 | 100 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/zhengma1_6.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 101 | 119 |  | pc/src/views/buyLottery/child_modal/liuhe/child_modal/zhengmatei.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 12 | 12 |  | pc/src/views/buyLottery/child_modal/liuhe/liuhe.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 147 | 138 |  | pc/src/views/buyLottery/child_modal/liuhe/result_page.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 283 | 260 |  | pc/src/views/buyLottery/child_modal/pc_egg/pc_egg.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 99 | 100 |  | pc/src/views/buyLottery/child_modal/qwc/index.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 18 | 18 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/TabMenu.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 142 | 114 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/add_note.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 68 | 75 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/balls_page.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 1 | 1 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/chase_num.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 693 | 586 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/common_modal/fc3d.js |
| M | pc | 页面 | 彩票/投注/开奖 | 233 | 194 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/result_page.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 19 | 22 |  | pc/src/views/buyLottery/child_modal/shared/shared.vue |
| A | pc | 页面 | 彩票/投注/开奖、主题/颜色/静态资源 | 0 | 0 |  | pc/src/views/buyLottery/css/test.css |
| M | pc | 页面 | 彩票/投注/开奖 | 49 | 52 |  | pc/src/views/buyLottery/lottery_head.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 343 | 277 |  | pc/src/views/buyLottery/lottery_info.vue |
| M | pc | 页面 | 聊天室/私聊 | 305 | 305 |  | pc/src/views/chatRoom/chatHeader.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 170 | 73 |  | pc/src/views/chatRoom/chatLeft/index.vue |
| M | pc | 页面 | 个人中心/账户、聊天室/私聊 | 124 | 125 |  | pc/src/views/chatRoom/chatLeft/messageList.vue |
| M | pc | 页面 | 聊天室/私聊 | 173 | 63 |  | pc/src/views/chatRoom/chatLeft/peopleList.vue |
| M | pc | 页面 | 聊天室/私聊、主题/颜色/静态资源 | 601 | 577 |  | pc/src/views/chatRoom/chatMain/chat.less |
| M | pc | 页面 | 聊天室/私聊 | 493 | 438 |  | pc/src/views/chatRoom/chatMain/chatFeature.vue |
| M | pc | 页面 | 聊天室/私聊 | 69 | 30 |  | pc/src/views/chatRoom/chatMain/chatPrivate/chatBottom.vue |
| M | pc | 页面 | 聊天室/私聊 | 49 | 66 |  | pc/src/views/chatRoom/chatMain/chatPrivate/chatBottomTool.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 371 | 321 |  | pc/src/views/chatRoom/chatMain/chatPrivate/index.vue |
| M | pc | 页面 | 聊天室/私聊 | 108 | 125 |  | pc/src/views/chatRoom/chatMain/components/aside.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 1128 | 941 |  | pc/src/views/chatRoom/chatMain/index.vue |
| M | pc | 页面 | 聊天室/私聊 | 149 | 140 |  | pc/src/views/chatRoom/chatMain/topNotice.vue |
| A | pc | 页面 | 彩票/投注/开奖、聊天室/私聊、主题/颜色/静态资源 | 133 | 0 |  | pc/src/views/chatRoom/chatRight/drawAlottery/css/ball.css |
| M | pc | 页面 | 彩票/投注/开奖、聊天室/私聊 | 163 | 147 |  | pc/src/views/chatRoom/chatRight/drawAlottery/lotteryHistory/history_ssc.vue |
| M | pc | 页面 | 彩票/投注/开奖、聊天室/私聊、主题/颜色/静态资源 | 1 | 1 |  | pc/src/views/chatRoom/chatRight/drawAlottery/lotteryNumber/ball.less |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 208 | 204 |  | pc/src/views/chatRoom/chatRight/index.vue |
| A | pc | 页面 | 聊天室/私聊、主题/颜色/静态资源 | 645 | 0 |  | pc/src/views/chatRoom/css/chat.css |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 440 | 419 |  | pc/src/views/chatRoom/index.vue |
| A | pc | 页面 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/views/css/test.css |
| M | pc | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 1263 | 1183 |  | pc/src/views/feedbackActive/feedbackActive.vue |
| M | pc | 页面 | 未归类路径 | 23 | 2 |  | pc/src/views/freeTrial/freeTrial.vue |
| M | pc | 页面 | 未归类路径 | 82 | 91 |  | pc/src/views/game/game.vue |
| A | pc | 页面 | 未归类路径 | 100 | 0 |  | pc/src/views/game/gameCategory.vue |
| M | pc | 页面 | 未归类路径 | 85 | 41 |  | pc/src/views/game/gameList.vue |
| M | pc | 页面 | 首页/导航/版面 | 36 | 20 |  | pc/src/views/game/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 643 | 628 |  | pc/src/views/home/banner3d.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 59 | 39 |  | pc/src/views/home/fast_betting.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/home/hotlist.vue |
| M | pc | 页面 | 首页/导航/版面 | 44 | 28 |  | pc/src/views/home/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 121 | 110 |  | pc/src/views/home/infolist.vue |
| M | pc | 页面 | 首页/导航/版面 | 109 | 131 |  | pc/src/views/layout/child_modal/FloatBanner.vue |
| M | pc | 页面 | 首页/导航/版面 | 69 | 71 |  | pc/src/views/layout/child_modal/header.vue |
| M | pc | 页面 | 首页/导航/版面 | 38 | 37 |  | pc/src/views/layout/child_modal/header/headMenu.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/header/loginRegister.vue |
| M | pc | 页面 | 首页/导航/版面 | 486 | 453 |  | pc/src/views/layout/child_modal/header/nav.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 5 | 8 |  | pc/src/views/layout/child_modal/lottery_head.vue |
| M | pc | 页面 | 首页/导航/版面 | 152 | 127 |  | pc/src/views/layout/child_modal/newheader.vue |
| M | pc | 页面 | 首页/导航/版面 | 86 | 87 |  | pc/src/views/layout/child_modal/popupNotice.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/switchTemplate.vue |
| M | pc | 页面 | 首页/导航/版面 | 324 | 249 |  | pc/src/views/layout/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 2 |  | pc/src/views/layout/layout.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 261 | 272 |  | pc/src/views/login/loginMixin.js |
| M | pc | 页面 | 彩票/投注/开奖 | 60 | 51 |  | pc/src/views/lottery/item.vue |
| M | pc | 页面 | 个人中心/账户 | 56 | 28 |  | pc/src/views/personalCenter/child_modal/account/account.vue |
| M | pc | 页面 | 个人中心/账户 | 594 | 546 |  | pc/src/views/personalCenter/child_modal/account/aliPayAccount.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 759 | 716 |  | pc/src/views/personalCenter/child_modal/account/bankAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 792 | 651 |  | pc/src/views/personalCenter/child_modal/account/currencyAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 955 | 959 |  | pc/src/views/personalCenter/child_modal/account/material.vue |
| M | pc | 页面 | 个人中心/账户 | 774 | 715 |  | pc/src/views/personalCenter/child_modal/account/payAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 539 | 499 |  | pc/src/views/personalCenter/child_modal/account/weChatAccount.vue |
| M | pc | 页面 | 彩票/投注/开奖、个人中心/账户、代理/报表/团队 | 254 | 116 |  | pc/src/views/personalCenter/child_modal/agentBetting/agentBetting.vue |
| M | pc | 页面 | 个人中心/账户、代理/报表/团队 | 140 | 11 |  | pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue |
| M | pc | 页面 | 个人中心/账户、代理/报表/团队 | 132 | 54 |  | pc/src/views/personalCenter/child_modal/agentTrade/agentTrade.vue |
| M | pc | 页面 | 个人中心/账户 | 302 | 200 |  | pc/src/views/personalCenter/child_modal/creditConver/amount.vue |
| M | pc | 页面 | 个人中心/账户 | 72 | 38 |  | pc/src/views/personalCenter/child_modal/description/description.vue |
| M | pc | 页面 | 个人中心/账户 | 59 | 13 |  | pc/src/views/personalCenter/child_modal/expand/common/expand_me_info.vue |
| M | pc | 页面 | 个人中心/账户 | 157 | 139 |  | pc/src/views/personalCenter/child_modal/expand/expand_list.vue |
| M | pc | 页面 | 个人中心/账户 | 129 | 99 |  | pc/src/views/personalCenter/child_modal/expand/expand_me.vue |
| M | pc | 页面 | 首页/导航/版面、个人中心/账户 | 395 | 314 |  | pc/src/views/personalCenter/child_modal/freeCharge/index.vue |
| M | pc | 页面 | 首页/导航/版面、个人中心/账户 | 40 | 40 |  | pc/src/views/personalCenter/child_modal/index.js |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 745 | 624 |  | pc/src/views/personalCenter/child_modal/recharge/components/DigitalCurrency.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 109 | 82 |  | pc/src/views/personalCenter/child_modal/recharge/recharge.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 537 | 363 |  | pc/src/views/personalCenter/child_modal/recharge/step2.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 0 |  | pc/src/views/personalCenter/child_modal/recharge/step3.vue |
| M | pc | 页面 | 首页/导航/版面、个人中心/账户、代理/报表/团队 | 455 | 382 |  | pc/src/views/personalCenter/child_modal/subReport/index.vue |
| M | pc | 页面 | 个人中心/账户 | 79 | 84 |  | pc/src/views/personalCenter/child_modal/trade/trade.vue |
| M | pc | 页面 | 个人中心/账户 | 797 | 695 |  | pc/src/views/personalCenter/child_modal/userManage/userManage.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 364 | 285 |  | pc/src/views/personalCenter/child_modal/withdraw/aliPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 352 | 288 |  | pc/src/views/personalCenter/child_modal/withdraw/bankPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 424 | 296 |  | pc/src/views/personalCenter/child_modal/withdraw/cardPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 591 | 382 |  | pc/src/views/personalCenter/child_modal/withdraw/currencyPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 386 | 285 |  | pc/src/views/personalCenter/child_modal/withdraw/weChatPay.vue |
| M | pc | 页面 | 个人中心/账户 | 227 | 156 |  | pc/src/views/personalCenter/personalCenter.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/phoneBuy/index.vue |
| M | pc | 页面 | 活动/红包/推广/下载 | 403 | 331 |  | pc/src/views/redPacket/redPacket.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/register/index.vue |
| M | pc | 页面 | 登录/注册/验证码 | 105 | 145 |  | pc/src/views/register/register.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 601 | 491 |  | pc/src/views/register/registerMixin.js |
| M | pc | 页面 | 未归类路径 | 83 | 68 |  | pc/src/views/role/roleDetail.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 577 | 285 |  | pc/src/views/trend/child_vue/commonComponent/prizeRecord.vue |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/static/css/theme.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 8307 | 5890 |  | pc/static/css/theme.less |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/appsj.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/bg.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/by318.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/img_bg.png |
| M | pc | 其他 | 主题/颜色/静态资源 | 190 | 160 |  | pc/static/js/RongIMVoice-2.2.6.js |

## 生成依据

- 分支：`origin/BY8316-YDYL_CS`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8316-YDYL_CS -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
