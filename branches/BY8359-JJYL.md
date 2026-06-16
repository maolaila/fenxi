# 商户分支功能地图：BY8359-JJYL

- 生成时间：2026-06-16 14:08:44 +0900
- 来源：本地分支 `BY8359-JJYL`
- 分支提交：`868659929` / 2026-05-05 16:17:27 +0900 / fix: 完成修改余额宝展示和后台配置不一致的问题
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：1071 个；涉及功能域：首页/导航/版面、彩票/投注/开奖、个人中心/账户、接口/状态/工具、聊天室/私聊、未归类路径、主题/颜色/静态资源、资金/充值/提现。
- 其他路径差异文件：1 个；通常是根配置、文档或非端目录，需要按完整清单核对。
- 扫描到新增/变更颜色值：#fff, #ffffff, #0000, #000000, #e4393c, #000, #f3f3f3, #333, #eee, #313131, #1f6efe, #999, #ddc17c, #eeeeee, #be1204, #ab47bc, #131522, #dddee1, #ec0022, #ff464b。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 彩票/投注/开奖 | 购彩页、投注面板、彩种列表、开奖展示、走势图。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 聊天室/私聊 | 聊天室入口、开奖互动、私聊、撤回、消息展示。 |
| 主题/颜色/静态资源 | 主题色、logo、icon、背景图、静态 CSS 是否匹配商户。 |
| 资金/充值/提现 | 充值、提现、银行卡/USDT 绑定、余额宝/借贷、金额转换记录。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 330 | 100658 | 58843 | pc/.gitignore<br>pc/README.md<br>pc/build/webpack.dev.conf.js<br>pc/config/index.js<br>pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/Icon-60.png<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>...另 322 个路径见完整清单 |
| h5-v2 | 741 | 39681 | 33028 | h5-v2/package.json<br>h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/public/index.html<br>h5-v2/src/App.vue<br>h5-v2/src/api/agent.js<br>h5-v2/src/api/app.js<br>h5-v2/src/api/betting.js<br>h5-v2/src/api/chat.js<br>...另 733 个路径见完整清单 |
| 其他 | 1 | 2 | 1 | .gitignore |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 320 | h5-v2、pc | h5-v2/public/index.html<br>h5-v2/src/api/home.js<br>h5-v2/src/assets/images/home/licai.png<br>h5-v2/src/components/CollectGrid/index.vue<br>h5-v2/src/components/CountDown/index.vue<br>h5-v2/src/components/EmptyData/index.vue<br>h5-v2/src/components/FollowOrder/index.vue<br>h5-v2/src/components/FundPassPopup/index.vue<br>...另 312 个路径见完整清单 |
| 彩票/投注/开奖 | 197 | h5-v2、pc | h5-v2/src/api/betting.js<br>h5-v2/src/api/lottery.js<br>h5-v2/src/components/Skeleton/LotteryHot/LotteryHot.vue<br>h5-v2/src/components/Skeleton/LotteryHot/LotteryHotBase.vue<br>h5-v2/src/components/Skeleton/Prize.vue<br>h5-v2/src/components/Skeleton/Trend.vue<br>h5-v2/src/components/dragon/dragon-body/bettingList.vue<br>h5-v2/src/components/winBarrage/prizeBarrage.vue<br>...另 189 个路径见完整清单 |
| 个人中心/账户 | 159 | h5-v2、pc | h5-v2/src/api/user.js<br>h5-v2/src/store/modules/user.js<br>h5-v2/src/views/chat/chat/child_modal/messageItem.vue<br>h5-v2/src/views/chat/chat/child_modal/userInfoBar.vue<br>h5-v2/src/views/chat/chat/game/setting.vue<br>h5-v2/src/views/grab-village/gaming-room/message/message-type/bettingType.vue<br>h5-v2/src/views/grab-village/gaming-room/message/message-type/emojiType.vue<br>h5-v2/src/views/grab-village/gaming-room/message/message-type/redPacketMessage.vue<br>...另 151 个路径见完整清单 |
| 接口/状态/工具 | 135 | h5-v2、pc | h5-v2/src/api/agent.js<br>h5-v2/src/api/app.js<br>h5-v2/src/api/betting.js<br>h5-v2/src/api/chat.js<br>h5-v2/src/api/cms.js<br>h5-v2/src/api/game.js<br>h5-v2/src/api/home.js<br>h5-v2/src/api/lottery.js<br>...另 127 个路径见完整清单 |
| 聊天室/私聊 | 117 | h5-v2、pc | h5-v2/src/api/chat.js<br>h5-v2/src/components/ChatRoomPermission/jumpRoomMixin.js<br>h5-v2/src/components/ChatRoomPermission/pwdDialog.vue<br>h5-v2/src/components/fastChat/index.vue<br>h5-v2/src/store/modules/chat.js<br>h5-v2/src/views/chat/chat/chatHeader.vue<br>h5-v2/src/views/chat/chat/chatRoom.vue<br>h5-v2/src/views/chat/chat/chatRoomList/index.vue<br>...另 109 个路径见完整清单 |
| 未归类路径 | 116 | h5-v2、pc、其他 | .gitignore<br>h5-v2/src/App.vue<br>h5-v2/src/components/Animal.vue<br>h5-v2/src/components/KeyboardInput/keyboard.vue<br>h5-v2/src/components/LanguageSwitch.vue<br>h5-v2/src/components/PwdInput/src/main.vue<br>h5-v2/src/components/Skeleton/Announce.vue<br>h5-v2/src/components/Skeleton/Card.vue<br>...另 108 个路径见完整清单 |
| 主题/颜色/静态资源 | 104 | h5-v2、pc | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/src/assets/images/home/licai.png<br>h5-v2/src/components/SvgIcon/index.vue<br>h5-v2/src/components/ZkImg/src/load.js<br>h5-v2/src/components/ZkImg/src/main.vue<br>h5-v2/src/constant/theme.js<br>h5-v2/src/store/modules/theme.js<br>h5-v2/src/utils/img.js<br>...另 96 个路径见完整清单 |
| 资金/充值/提现 | 95 | h5-v2、pc | h5-v2/src/components/FundPassPopup/index.vue<br>h5-v2/src/components/Recharge/recharge-head.vue<br>h5-v2/src/components/Recharge/recharge-tips.vue<br>h5-v2/src/components/Recharge/recharge-types.vue<br>h5-v2/src/mixins/rechargeType.js<br>h5-v2/src/views/amount-conversion/amount-conversion.vue<br>h5-v2/src/views/amount-conversion/conversion-amount-in-out.vue<br>h5-v2/src/views/amount-conversion/conversion-amount-submit.vue<br>...另 87 个路径见完整清单 |
| 活动/红包/推广/下载 | 64 | h5-v2、pc | h5-v2/src/api/redPacketGame.js<br>h5-v2/src/components/RedPacket/OpenPacket/index.vue<br>h5-v2/src/components/RedPacket/OpenPacket/redPacketDetail.vue<br>h5-v2/src/components/RedPacket/OpenPacket/unpackPacket.vue<br>h5-v2/src/components/RedPacket/SendPacket/index.vue<br>h5-v2/src/components/RedPacket/SendPacket/pay.vue<br>h5-v2/src/components/RedPacket/SendPacket/sendRedPacket.vue<br>h5-v2/src/store/modules/redPacketBattle.js<br>...另 56 个路径见完整清单 |
| 登录/注册/验证码 | 51 | h5-v2、pc | h5-v2/src/components/LoginNav/index.vue<br>h5-v2/src/utils/authority-utils.js<br>h5-v2/src/views/login/diffPlaceLogin.vue<br>h5-v2/src/views/login/index.vue<br>h5-v2/src/views/login/login.vue<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/password/index.vue<br>h5-v2/src/views/password/indexNew.vue<br>...另 43 个路径见完整清单 |
| 代理/报表/团队 | 31 | h5-v2、pc | h5-v2/src/api/agent.js<br>h5-v2/src/router/modules/agencyCenter.js<br>h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/agencylist.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/groundlist.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/index.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/nextlist.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agentDealList.vue<br>...另 23 个路径见完整清单 |
| 构建/配置 | 28 | h5-v2、pc | h5-v2/package.json<br>h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/src/components/datetime-picker/cookie.config.js<br>h5-v2/src/config/index.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/vue.config.js<br>pc/build/webpack.dev.conf.js<br>pc/config/index.js<br>...另 20 个路径见完整清单 |
| 客服/反馈/帮助 | 18 | h5-v2、pc | h5-v2/src/views/buy-lottery/lottery_help.vue<br>h5-v2/src/views/buy-lottery/lottery_helptwo.vue<br>h5-v2/src/views/chat/redPacketBattle/components/customerAdmin.vue<br>h5-v2/src/views/feedback_active/address.vue<br>h5-v2/src/views/feedback_active/feedback.vue<br>h5-v2/src/views/feedback_active/feedback_active.vue<br>h5-v2/src/views/feedback_active/myPrize.vue<br>h5-v2/src/views/feedback_active/order.vue<br>...另 10 个路径见完整清单 |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 723 |
| 组件 | 98 |
| 工具/混入 | 72 |
| 其他 | 48 |
| 图片资源 | 48 |
| 构建配置 | 25 |
| 状态 | 22 |
| 接口 | 16 |
| 主题样式 | 16 |
| 路由 | 4 |

## 主题色/展示资源线索

- 颜色值：#fff, #ffffff, #0000, #000000, #e4393c, #000, #f3f3f3, #333, #eee, #313131, #1f6efe, #999, #ddc17c, #eeeeee, #be1204, #ab47bc, #131522, #dddee1, #ec0022, #ff464b, #f2f2f2, #5169de, #d2b79c, #222, #ff7614, #aa8743, #3be6e5, #1f94ff, #949494, #f80400

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | h5-v2/public/configstatic/h5/control/control.js |
| h5-v2 | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | A | h5-v2/src/assets/images/home/licai.png |
| h5-v2 | 组件 | 首页/导航/版面、主题/颜色/静态资源 | M | h5-v2/src/components/SvgIcon/index.vue |
| h5-v2 | 组件 | 主题/颜色/静态资源 | M | h5-v2/src/components/ZkImg/src/load.js |
| h5-v2 | 组件 | 主题/颜色/静态资源 | M | h5-v2/src/components/ZkImg/src/main.vue |
| h5-v2 | 主题样式 | 主题/颜色/静态资源 | M | h5-v2/src/constant/theme.js |
| h5-v2 | 状态 | 主题/颜色/静态资源、接口/状态/工具 | M | h5-v2/src/store/modules/theme.js |
| h5-v2 | 图片资源 | 主题/颜色/静态资源、接口/状态/工具 | M | h5-v2/src/utils/img.js |
| h5-v2 | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | M | h5-v2/src/utils/less.js |
| h5-v2 | 页面 | 资金/充值/提现、个人中心/账户、主题/颜色/静态资源 | M | h5-v2/src/views/personal-center/child_modal/mysetting/bank/payStyleInfo.vue |
| h5-v2 | 页面 | 资金/充值/提现、个人中心/账户、主题/颜色/静态资源 | M | h5-v2/src/views/personal-center/child_modal/mysetting/bank/wePayStyleInfo.vue |
| h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助、主题/颜色/静态资源 | M | h5-v2/src/views/personal-center/child_modal/mysetting/feedback/components/upLoadImg.vue |
| h5-v2 | 页面 | 首页/导航/版面、个人中心/账户、主题/颜色/静态资源 | M | h5-v2/src/views/personal-center/child_modal/mysetting/theme/index.vue |
| h5-v2 | 页面 | 个人中心/账户、主题/颜色/静态资源 | M | h5-v2/src/views/personal-center/child_modal/mysetting/theme/theme-more.vue |
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
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images/signin.png |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg1.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg2.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg3.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg4.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg5.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg6.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg7.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | D | pc/src/assets/images/tg_bg8.jpg |
| pc | 图片资源 | 主题/颜色/静态资源 | M | pc/src/assets/voices/sms-received.mp3 |
| pc | 图片资源 | 主题/颜色/静态资源 | M | pc/src/assets/voices/sms-received.ogg |
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
| origin/BY-Demo-H5V2-PC | 1071 | 0 | 1072 | e01faf3edf3d | 2026-04-07 14:20:04 +0900 |
| origin/BY-Demo | 1299 | 0 | 1300 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 4226 | 3 | 4231 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 868659929 | 2026-05-05 | fix: 完成修改余额宝展示和后台配置不一致的问题 |
| 3acf8e2d0 | 2026-05-05 | feat: 完成定期理财改版 |
| 793ee755d | 2026-05-01 | 更新 vue.config.js |
| fede2ee41 | 2026-05-01 | feat(h5-v2): lazy-load EasyPlayer on buy-lottery live video |
| a95f95084 | 2026-04-30 | feat(h5): 首页快捷入口新增理财按钮 |
| 24380e2e9 | 2026-04-28 | fix(chat): 进入聊天室时收敛 queryLotteryRecordList 并发（H5 仅当前轮播项倒计时 + Vuex 合并同彩种请求） |
| 3c0b9f9f3 | 2026-04-25 | feat: 完成pc版修改 |
| d5d6bcc6c | 2026-04-25 | feat: 完成修改 |
| 441436d71 | 2026-04-22 | feat: 完成修改和平需求 |
| 5f6d3c869 | 2026-04-21 | feat: 配置8358和平端内功能裁剪 |
| b61936694 | 2026-04-21 | feat: 临时提交 |
| ed8f49e17 | 2026-04-20 | feat: 完成pc端修改 |
| 9af32425c | 2026-04-16 | feat: 修改速度 |
| b9305f296 | 2026-04-16 | feat: 调整跑马灯速度 |
| 93afcbd51 | 2026-04-16 | feat: 调整首页跑马灯速度 |
| 43fda7f98 | 2026-04-11 | 1 |
| f9fef9ff5 | 2026-04-11 | feat: 恢复支付宝上传收款码功能 |
| 85d162128 | 2026-04-11 | feat: 完成pc支付宝/微信多个账号绑定 |
| d9c8240e9 | 2026-04-08 | feat: 增加微信支付宝绑定最大条数 |
| a2e4c1e2b | 2026-04-07 | 修改package.json |
| 41134b34f | 2026-03-30 | feat: by355绑定支付宝取消收款码 |
| f4e941081 | 2026-03-19 | fix: by355校验规则隔离 |
| 432f9dce8 | 2026-03-19 | fix: 关闭弹窗清空校验 |
| a4de1fae6 | 2026-03-19 | feat: 设置提款密码 添加校验 |
| f0b94ca07 | 2026-03-19 | feat: 注册密码添加校验规则 |
| 75edddf9e | 2026-03-19 | fix: 聊天室 消息图片加载错误 |
| 0b4230f6d | 2025-10-10 | fix: 邀请人账号脱敏 |
| e3c7b79bd | 2025-10-10 | feat: 推广码添加返佣提示 |
| 121881ef3 | 2025-09-11 | fix: 临时存储红包图状态 |
| c87c4313b | 2025-09-09 | fix: 首页红包缩放或隐藏 提现最大额修复 |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M | 其他 | 其他 | 未归类路径 | 2 | 1 |  | .gitignore |
| M | h5-v2 | 构建配置 | 构建/配置 | 8 | 1 |  | h5-v2/package.json |
| M | h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | 8 | 7 |  | h5-v2/public/configstatic/h5/control/control.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 1 |  | h5-v2/public/index.html |
| M | h5-v2 | 其他 | 未归类路径 | 14 | 14 |  | h5-v2/src/App.vue |
| M | h5-v2 | 接口 | 代理/报表/团队、接口/状态/工具 | 1 | 1 |  | h5-v2/src/api/agent.js |
| M | h5-v2 | 接口 | 接口/状态/工具 | 0 | 1 |  | h5-v2/src/api/app.js |
| M | h5-v2 | 接口 | 彩票/投注/开奖、接口/状态/工具 | 34 | 34 |  | h5-v2/src/api/betting.js |
| M | h5-v2 | 接口 | 聊天室/私聊、接口/状态/工具 | 28 | 29 |  | h5-v2/src/api/chat.js |
| M | h5-v2 | 接口 | 接口/状态/工具 | 4 | 4 |  | h5-v2/src/api/cms.js |
| M | h5-v2 | 接口 | 接口/状态/工具 | 1 | 1 |  | h5-v2/src/api/game.js |
| M | h5-v2 | 接口 | 首页/导航/版面、接口/状态/工具 | 1 | 1 |  | h5-v2/src/api/home.js |
| M | h5-v2 | 接口 | 彩票/投注/开奖、接口/状态/工具 | 3 | 3 |  | h5-v2/src/api/lottery.js |
| M | h5-v2 | 接口 | 活动/红包/推广/下载、接口/状态/工具 | 31 | 31 |  | h5-v2/src/api/redPacketGame.js |
| M | h5-v2 | 接口 | 接口/状态/工具 | 6 | 6 |  | h5-v2/src/api/sysDict.js |
| M | h5-v2 | 接口 | 个人中心/账户、接口/状态/工具 | 32 | 33 |  | h5-v2/src/api/user.js |
| A | h5-v2 | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | h5-v2/src/assets/images/home/licai.png |
| M | h5-v2 | 组件 | 未归类路径 | 22 | 22 |  | h5-v2/src/components/Animal.vue |
| M | h5-v2 | 组件 | 聊天室/私聊、接口/状态/工具 | 42 | 29 |  | h5-v2/src/components/ChatRoomPermission/jumpRoomMixin.js |
| M | h5-v2 | 组件 | 聊天室/私聊 | 7 | 6 |  | h5-v2/src/components/ChatRoomPermission/pwdDialog.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/components/CollectGrid/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 21 | 19 |  | h5-v2/src/components/CountDown/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/components/EmptyData/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 26 | 21 |  | h5-v2/src/components/FollowOrder/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、资金/充值/提现 | 7 | 7 |  | h5-v2/src/components/FundPassPopup/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 12 | 13 |  | h5-v2/src/components/Header/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 28 | 24 |  | h5-v2/src/components/HistorySelect/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/components/IpLimit/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 26 | 19 |  | h5-v2/src/components/KeyboardInput/index.vue |
| M | h5-v2 | 组件 | 未归类路径 | 25 | 42 |  | h5-v2/src/components/KeyboardInput/keyboard.vue |
| M | h5-v2 | 组件 | 未归类路径 | 7 | 7 |  | h5-v2/src/components/LanguageSwitch.vue |
| M | h5-v2 | 组件 | 登录/注册/验证码、首页/导航/版面 | 9 | 10 |  | h5-v2/src/components/LoginNav/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 54 | 47 |  | h5-v2/src/components/Marquee/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/components/MarqueeItem/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 22 | 14 |  | h5-v2/src/components/MyDialog/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 9 | 3 |  | h5-v2/src/components/PhoneValidDialog/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 83 | 66 |  | h5-v2/src/components/PopRightFilter/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 17 | 17 |  | h5-v2/src/components/PwdDialog/index.vue |
| M | h5-v2 | 组件 | 未归类路径 | 15 | 15 |  | h5-v2/src/components/PwdInput/src/main.vue |
| M | h5-v2 | 组件 | 资金/充值/提现 | 8 | 8 |  | h5-v2/src/components/Recharge/recharge-head.vue |
| M | h5-v2 | 组件 | 资金/充值/提现 | 2 | 3 |  | h5-v2/src/components/Recharge/recharge-tips.vue |
| M | h5-v2 | 组件 | 资金/充值/提现 | 130 | 62 |  | h5-v2/src/components/Recharge/recharge-types.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、活动/红包/推广/下载 | 71 | 66 |  | h5-v2/src/components/RedPacket/OpenPacket/index.vue |
| M | h5-v2 | 组件 | 活动/红包/推广/下载 | 9 | 9 |  | h5-v2/src/components/RedPacket/OpenPacket/redPacketDetail.vue |
| M | h5-v2 | 组件 | 活动/红包/推广/下载 | 4 | 4 |  | h5-v2/src/components/RedPacket/OpenPacket/unpackPacket.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、活动/红包/推广/下载 | 4 | 4 |  | h5-v2/src/components/RedPacket/SendPacket/index.vue |
| M | h5-v2 | 组件 | 活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/components/RedPacket/SendPacket/pay.vue |
| M | h5-v2 | 组件 | 活动/红包/推广/下载 | 124 | 87 |  | h5-v2/src/components/RedPacket/SendPacket/sendRedPacket.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 163 | 150 |  | h5-v2/src/components/RegPromptBox/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 8 | 10 |  | h5-v2/src/components/Scroll/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 8 | 16 |  | h5-v2/src/components/SearchInput/index.vue |
| M | h5-v2 | 组件 | 未归类路径 | 2 | 2 |  | h5-v2/src/components/Skeleton/Announce.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/components/Skeleton/Banner.vue |
| M | h5-v2 | 组件 | 未归类路径 | 13 | 11 |  | h5-v2/src/components/Skeleton/Card.vue |
| M | h5-v2 | 组件 | 未归类路径 | 5 | 9 |  | h5-v2/src/components/Skeleton/Game.vue |
| M | h5-v2 | 组件 | 未归类路径 | 2 | 2 |  | h5-v2/src/components/Skeleton/Header.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、彩票/投注/开奖 | 1 | 2 |  | h5-v2/src/components/Skeleton/LotteryHot/LotteryHot.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、彩票/投注/开奖 | 2 | 3 |  | h5-v2/src/components/Skeleton/LotteryHot/LotteryHotBase.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/components/Skeleton/Menu.vue |
| M | h5-v2 | 组件 | 彩票/投注/开奖 | 1 | 4 |  | h5-v2/src/components/Skeleton/Prize.vue |
| M | h5-v2 | 组件 | 未归类路径 | 1 | 2 |  | h5-v2/src/components/Skeleton/Rank/Rank.vue |
| M | h5-v2 | 组件 | 未归类路径 | 1 | 1 |  | h5-v2/src/components/Skeleton/Rank/RankBase.vue |
| M | h5-v2 | 组件 | 彩票/投注/开奖 | 1 | 2 |  | h5-v2/src/components/Skeleton/Trend.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 8 | 24 |  | h5-v2/src/components/Slider/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 36 | 29 |  | h5-v2/src/components/Socket/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/components/Sticky/index.js |
| M | h5-v2 | 组件 | 未归类路径 | 1 | 1 |  | h5-v2/src/components/Sticky/src/main.js |
| M | h5-v2 | 组件 | 未归类路径 | 9 | 14 |  | h5-v2/src/components/Sticky/src/main.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、主题/颜色/静态资源 | 7 | 7 |  | h5-v2/src/components/SvgIcon/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 3 | 3 |  | h5-v2/src/components/Swiper/index.js |
| M | h5-v2 | 组件 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/components/Swiper/src/main.js |
| M | h5-v2 | 组件 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/components/Swiper/src/main.vue |
| M | h5-v2 | 组件 | 未归类路径 | 1 | 2 |  | h5-v2/src/components/VisitLoading.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/components/Xcircle/index.js |
| M | h5-v2 | 组件 | 未归类路径 | 1 | 1 |  | h5-v2/src/components/Xcircle/src/main.js |
| M | h5-v2 | 组件 | 未归类路径 | 52 | 31 |  | h5-v2/src/components/Xcircle/src/main.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 11 | 11 |  | h5-v2/src/components/YiDun/index.vue |
| M | h5-v2 | 组件 | 主题/颜色/静态资源 | 1 | 1 |  | h5-v2/src/components/ZkImg/src/load.js |
| M | h5-v2 | 组件 | 主题/颜色/静态资源 | 19 | 19 |  | h5-v2/src/components/ZkImg/src/main.vue |
| M | h5-v2 | 组件 | 未归类路径 | 161 | 157 |  | h5-v2/src/components/ZkInput02/src/main.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 4 | 8 |  | h5-v2/src/components/agreement/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 217 | 204 |  | h5-v2/src/components/checkin/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 6 | 6 |  | h5-v2/src/components/dappandroid/index.vue |
| M | h5-v2 | 组件 | 构建/配置 | 8 | 8 |  | h5-v2/src/components/datetime-picker/cookie.config.js |
| M | h5-v2 | 组件 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/components/datetime-picker/index.js |
| M | h5-v2 | 组件 | 未归类路径 | 38 | 38 |  | h5-v2/src/components/datetime-picker/src/datetime-picker.vue |
| M | h5-v2 | 组件 | 未归类路径 | 10 | 10 |  | h5-v2/src/components/dragon/components/CountDown.vue |
| M | h5-v2 | 组件 | 未归类路径 | 9 | 6 |  | h5-v2/src/components/dragon/components/DragonHeader.vue |
| M | h5-v2 | 组件 | 未归类路径 | 30 | 18 |  | h5-v2/src/components/dragon/components/MobileModal.vue |
| M | h5-v2 | 组件 | 彩票/投注/开奖 | 5 | 5 |  | h5-v2/src/components/dragon/dragon-body/bettingList.vue |
| M | h5-v2 | 组件 | 未归类路径 | 29 | 29 |  | h5-v2/src/components/dragon/dragon-body/dragonList.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/components/dragon/dragon-body/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/components/dragon/dragon-explain/index.vue |
| M | h5-v2 | 组件 | 未归类路径 | 12 | 12 |  | h5-v2/src/components/dragon/dragon.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 29 | 27 |  | h5-v2/src/components/dragon/index.vue |
| M | h5-v2 | 组件 | 首页/导航/版面、聊天室/私聊 | 117 | 108 |  | h5-v2/src/components/fastChat/index.vue |
| M | h5-v2 | 组件 | 未归类路径 | 9 | 11 |  | h5-v2/src/components/loading/loading.js |
| M | h5-v2 | 组件 | 未归类路径 | 8 | 9 |  | h5-v2/src/components/signalGrid/signalGrid.vue |
| M | h5-v2 | 组件 | 未归类路径 | 29 | 22 |  | h5-v2/src/components/sticky2/sticky.vue |
| M | h5-v2 | 组件 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/components/winBarrage/index.vue |
| M | h5-v2 | 组件 | 彩票/投注/开奖 | 12 | 12 |  | h5-v2/src/components/winBarrage/prizeBarrage.vue |
| M | h5-v2 | 其他 | 首页/导航/版面、构建/配置 | 6 | 6 |  | h5-v2/src/config/index.js |
| M | h5-v2 | 其他 | 未归类路径 | 7 | 7 |  | h5-v2/src/constant/pay.js |
| M | h5-v2 | 其他 | 未归类路径 | 3 | 2 |  | h5-v2/src/constant/rongyun.js |
| M | h5-v2 | 主题样式 | 主题/颜色/静态资源 | 3 | 3 |  | h5-v2/src/constant/theme.js |
| M | h5-v2 | 其他 | 未归类路径 | 6 | 5 |  | h5-v2/src/directive/clickoutslide/clickoutslide.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/directive/clickoutslide/index.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/directive/clipboard/index.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/directive/index.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/directive/leftMoveDelete/index.js |
| M | h5-v2 | 其他 | 未归类路径 | 1 | 1 |  | h5-v2/src/directive/leftMoveDelete/leftMoveDelete.js |
| M | h5-v2 | 其他 | 未归类路径 | 59 | 54 |  | h5-v2/src/directive/leftMoveDelete/util.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 3 | 3 |  | h5-v2/src/directive/marquee/index.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/directive/refresh/index.js |
| M | h5-v2 | 其他 | 未归类路径 | 14 | 7 |  | h5-v2/src/directive/refresh/refresh.js |
| M | h5-v2 | 其他 | 未归类路径 | 15 | 15 |  | h5-v2/src/directive/stricky/throttle.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/directive/touch/index.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 43 | 33 |  | h5-v2/src/filters/index.js |
| M | h5-v2 | 其他 | 未归类路径 | 534 | 272 |  | h5-v2/src/lang/en_US.js |
| M | h5-v2 | 其他 | 未归类路径 | 28 | 17 |  | h5-v2/src/lang/hi_IN.js |
| M | h5-v2 | 其他 | 未归类路径 | 18 | 11 |  | h5-v2/src/lang/in_ID.js |
| M | h5-v2 | 其他 | 首页/导航/版面 | 51 | 51 |  | h5-v2/src/lang/index.js |
| M | h5-v2 | 其他 | 未归类路径 | 2080 | 1727 |  | h5-v2/src/lang/it_IT.js |
| M | h5-v2 | 其他 | 未归类路径 | 8 | 8 |  | h5-v2/src/lang/mint/it_IT.js |
| M | h5-v2 | 其他 | 未归类路径 | 8 | 8 |  | h5-v2/src/lang/mint/pt_BR.js |
| M | h5-v2 | 其他 | 未归类路径 | 2072 | 1727 |  | h5-v2/src/lang/pt_BR.js |
| M | h5-v2 | 其他 | 未归类路径 | 474 | 242 |  | h5-v2/src/lang/th_TH.js |
| M | h5-v2 | 其他 | 未归类路径 | 90 | 90 |  | h5-v2/src/lang/vant/it_IT.js |
| M | h5-v2 | 其他 | 未归类路径 | 541 | 274 |  | h5-v2/src/lang/vi_VN.js |
| M | h5-v2 | 其他 | 未归类路径 | 7 | 4 |  | h5-v2/src/lang/zh_CN.js |
| M | h5-v2 | 其他 | 未归类路径 | 31 | 8 |  | h5-v2/src/main.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 2 |  | h5-v2/src/mixins/initGtCapthca.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 31 | 26 |  | h5-v2/src/mixins/periodHistory.js |
| M | h5-v2 | 工具/混入 | 资金/充值/提现、接口/状态/工具 | 166 | 163 |  | h5-v2/src/mixins/rechargeType.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 67 | 70 |  | h5-v2/src/mixins/refreshAndInfiniteScroll.js |
| M | h5-v2 | 路由 | 首页/导航/版面 | 350 | 343 |  | h5-v2/src/router/index.js |
| M | h5-v2 | 路由 | 代理/报表/团队 | 31 | 31 |  | h5-v2/src/router/modules/agencyCenter.js |
| M | h5-v2 | 其他 | 未归类路径 | 11 | 11 |  | h5-v2/src/skeleton/Skeleton.1.vue |
| M | h5-v2 | 其他 | 未归类路径 | 2 | 2 |  | h5-v2/src/skeleton/Skeleton.vue |
| M | h5-v2 | 其他 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/skeleton/index.js |
| M | h5-v2 | 状态 | 首页/导航/版面、接口/状态/工具 | 8 | 8 |  | h5-v2/src/store/index.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 21 | 13 |  | h5-v2/src/store/modules/app.js |
| M | h5-v2 | 状态 | 聊天室/私聊、接口/状态/工具 | 73 | 73 |  | h5-v2/src/store/modules/chat.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 13 | 13 |  | h5-v2/src/store/modules/cms.js |
| M | h5-v2 | 状态 | 首页/导航/版面、接口/状态/工具 | 2 | 2 |  | h5-v2/src/store/modules/grabVillage.js |
| M | h5-v2 | 状态 | 首页/导航/版面、接口/状态/工具 | 5 | 5 |  | h5-v2/src/store/modules/home.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 38 | 17 |  | h5-v2/src/store/modules/lottey.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 1 | 1 |  | h5-v2/src/store/modules/rechare.js |
| M | h5-v2 | 状态 | 活动/红包/推广/下载、接口/状态/工具 | 4 | 5 |  | h5-v2/src/store/modules/redPacketBattle.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 28 | 28 |  | h5-v2/src/store/modules/rongyun.js |
| M | h5-v2 | 路由 | 接口/状态/工具 | 17 | 20 |  | h5-v2/src/store/modules/routeHistory.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 28 | 18 |  | h5-v2/src/store/modules/sysDict.js |
| M | h5-v2 | 状态 | 主题/颜色/静态资源、接口/状态/工具 | 27 | 32 |  | h5-v2/src/store/modules/theme.js |
| M | h5-v2 | 状态 | 个人中心/账户、接口/状态/工具 | 14 | 8 |  | h5-v2/src/store/modules/user.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 8 | 6 |  | h5-v2/src/store/mutation_types.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 2 |  | h5-v2/src/utils/H5GameSDK.js |
| M | h5-v2 | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 26 | 28 |  | h5-v2/src/utils/authority-utils.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 12 | 10 |  | h5-v2/src/utils/betting/11x5.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 703 | 703 |  | h5-v2/src/utils/betting/6hc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 363 | 299 |  | h5-v2/src/utils/betting/dpc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 72 | 28 |  | h5-v2/src/utils/betting/fc3d.js |
| M | h5-v2 | 工具/混入 | 首页/导航/版面、彩票/投注/开奖、接口/状态/工具 | 23 | 13 |  | h5-v2/src/utils/betting/index.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 1766 | 1668 |  | h5-v2/src/utils/betting/jwc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 135 | 112 |  | h5-v2/src/utils/betting/klsf.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 18 | 9 |  | h5-v2/src/utils/betting/ksan.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 24 | 24 |  | h5-v2/src/utils/betting/pcdd.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 21 | 19 |  | h5-v2/src/utils/betting/pk10.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 101 | 48 |  | h5-v2/src/utils/betting/qtcp.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 9 | 9 |  | h5-v2/src/utils/betting/qwc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 1766 | 1668 |  | h5-v2/src/utils/betting/ssc.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 216 | 162 |  | h5-v2/src/utils/business.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 29 | 28 |  | h5-v2/src/utils/clickoutside.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 31 | 31 |  | h5-v2/src/utils/const.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 13 | 13 |  | h5-v2/src/utils/countdown.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 90 | 84 |  | h5-v2/src/utils/eventBus.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 243 | 179 |  | h5-v2/src/utils/firework.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 4 | 4 |  | h5-v2/src/utils/format_date.js |
| M | h5-v2 | 构建配置 | 构建/配置、接口/状态/工具 | 8 | 9 |  | h5-v2/src/utils/getSysConfig.js |
| M | h5-v2 | 图片资源 | 主题/颜色/静态资源、接口/状态/工具 | 59 | 41 |  | h5-v2/src/utils/img.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 40 | 41 |  | h5-v2/src/utils/jsBridge.js |
| M | h5-v2 | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | 91 | 79 |  | h5-v2/src/utils/less.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 59 | 49 |  | h5-v2/src/utils/logger.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 288 | 280 |  | h5-v2/src/utils/md5.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 1 | 1 |  | h5-v2/src/utils/merge.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 1039 | 895 |  | h5-v2/src/utils/numeral.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 4 | 4 |  | h5-v2/src/utils/openWindow.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 6 |  | h5-v2/src/utils/pic.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 88 | 88 |  | h5-v2/src/utils/plugin/ivewComponent.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 102 | 60 |  | h5-v2/src/utils/plugin/plugin.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 1468 | 1488 |  | h5-v2/src/utils/qrcode.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 628 | 647 |  | h5-v2/src/utils/random/6hc.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 18 | 16 |  | h5-v2/src/utils/random/dpc.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 25 | 22 |  | h5-v2/src/utils/random/fc3d.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 3 | 3 |  | h5-v2/src/utils/random/ksan.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 32 | 30 |  | h5-v2/src/utils/random/qtcp.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 10 | 11 |  | h5-v2/src/utils/random/qwc.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 1405 | 1342 |  | h5-v2/src/utils/random/ssc.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 2 |  | h5-v2/src/utils/regularRule.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 32 | 32 |  | h5-v2/src/utils/request.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 67 | 67 |  | h5-v2/src/utils/rongyun.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 191 | 177 |  | h5-v2/src/utils/sw.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 420 | 229 |  | h5-v2/src/utils/trend/const.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 174 | 138 |  | h5-v2/src/utils/trend/rule/11x5.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 117 | 91 |  | h5-v2/src/utils/trend/rule/6hc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 43 | 39 |  | h5-v2/src/utils/trend/rule/fc3d.js |
| M | h5-v2 | 工具/混入 | 首页/导航/版面、彩票/投注/开奖、接口/状态/工具 | 22 | 22 |  | h5-v2/src/utils/trend/rule/index.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 103 | 99 |  | h5-v2/src/utils/trend/rule/jwc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 363 | 333 |  | h5-v2/src/utils/trend/rule/klsf.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 125 | 125 |  | h5-v2/src/utils/trend/rule/ksan.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 147 | 144 |  | h5-v2/src/utils/trend/rule/pcdd.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 310 | 280 |  | h5-v2/src/utils/trend/rule/pk10.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 100 | 106 |  | h5-v2/src/utils/trend/rule/qtcp.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 103 | 98 |  | h5-v2/src/utils/trend/rule/qwc.js |
| M | h5-v2 | 工具/混入 | 彩票/投注/开奖、接口/状态/工具 | 408 | 372 |  | h5-v2/src/utils/trend/rule/ssc.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 76 | 57 |  | h5-v2/src/utils/util.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 19 | 8 |  | h5-v2/src/utils/validate.js |
| M | h5-v2 | 其他 | 未归类路径 | 49 | 49 |  | h5-v2/src/vendor/MintComponents.js |
| M | h5-v2 | 其他 | 未归类路径 | 8 | 2 |  | h5-v2/src/vendor/VueProtoExt.js |
| M | h5-v2 | 页面 | 未归类路径 | 2 | 2 |  | h5-v2/src/views/404.vue |
| M | h5-v2 | 页面 | 未归类路径 | 3 | 3 |  | h5-v2/src/views/503.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 3 | 5 |  | h5-v2/src/views/IpLimit/index.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 13 | 13 |  | h5-v2/src/views/active/active.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 56 | 29 |  | h5-v2/src/views/active/detail.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 4 | 4 |  | h5-v2/src/views/active/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 101 | 34 |  | h5-v2/src/views/agreement/agreement.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 10 | 12 |  | h5-v2/src/views/amount-conversion/amount-conversion.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 33 | 25 |  | h5-v2/src/views/amount-conversion/conversion-amount-in-out.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 15 | 15 |  | h5-v2/src/views/amount-conversion/conversion-amount-submit.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 16 | 12 |  | h5-v2/src/views/amount-conversion/conversion-amount.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 9 | 9 |  | h5-v2/src/views/amount-conversion/conversion-record.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、资金/充值/提现 | 6 | 6 |  | h5-v2/src/views/amount-conversion/lottery-record.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 19 | 17 |  | h5-v2/src/views/amount-conversion/sure-conversion-dialog.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、资金/充值/提现 | 7 | 9 |  | h5-v2/src/views/bank-valid/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 105 | 47 |  | h5-v2/src/views/bettingList/bDetail.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 133 | 56 |  | h5-v2/src/views/bettingList/bettingList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 114 | 109 |  | h5-v2/src/views/bettingList/components/shareRewardDialog.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 5 | 3 |  | h5-v2/src/views/bettingList/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 7 | 7 |  | h5-v2/src/views/bettingList/thirdPartyRecord.vue |
| M | h5-v2 | 页面 | 未归类路径 | 25 | 25 |  | h5-v2/src/views/brand-games/brand-list.vue |
| M | h5-v2 | 页面 | 未归类路径 | 12 | 27 |  | h5-v2/src/views/brand-games/brand-tabs.vue |
| M | h5-v2 | 页面 | 未归类路径 | 11 | 12 |  | h5-v2/src/views/brand-games/free-play-dialog.vue |
| M | h5-v2 | 页面 | 未归类路径 | 5 | 6 |  | h5-v2/src/views/brand-games/jump-alert-dialog.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 328 | 122 |  | h5-v2/src/views/buy-lottery/buy_lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 34 | 34 |  | h5-v2/src/views/buy-lottery/child_modal/balls/liuhe/liuhe.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、接口/状态/工具 | 683 | 669 |  | h5-v2/src/views/buy-lottery/child_modal/balls/liuhe/liuheMixin.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 107 | 98 |  | h5-v2/src/views/buy-lottery/child_modal/balls/liuheSimple/liuheSimple.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 27 | 28 |  | h5-v2/src/views/buy-lottery/child_modal/balls/pcdd/pcdd.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 8 | 9 |  | h5-v2/src/views/buy-lottery/child_modal/balls/qwc/components/order.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖、接口/状态/工具 | 502 | 503 |  | h5-v2/src/views/buy-lottery/child_modal/balls/qwc/components/orderMixins.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 50 | 47 |  | h5-v2/src/views/buy-lottery/child_modal/balls/qwc/components/qwcSimple.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 27 | 27 |  | h5-v2/src/views/buy-lottery/child_modal/balls/qwc/components/seBo.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 27 | 27 |  | h5-v2/src/views/buy-lottery/child_modal/balls/qwc/components/zhengMa.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 38 | 28 |  | h5-v2/src/views/buy-lottery/child_modal/balls/qwc/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 82 | 36 |  | h5-v2/src/views/buy-lottery/child_modal/balls/share/balls_modal.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 162 | 76 |  | h5-v2/src/views/buy-lottery/child_modal/balls/share/share.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 49 | 46 |  | h5-v2/src/views/buy-lottery/child_modal/balls/shareSimple/shareSimple.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 31 | 21 |  | h5-v2/src/views/buy-lottery/child_modal/bettingOption/option.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 279 | 145 |  | h5-v2/src/views/buy-lottery/child_modal/bottomSImple/bottom.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 95 | 33 |  | h5-v2/src/views/buy-lottery/child_modal/result/chase_modal.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 41 | 35 |  | h5-v2/src/views/buy-lottery/child_modal/result/liuheBack.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 121 | 67 |  | h5-v2/src/views/buy-lottery/child_modal/result/result.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 23 | 23 |  | h5-v2/src/views/buy-lottery/child_modal/setSImple/chips.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 81 | 73 |  | h5-v2/src/views/buy-lottery/child_modal/setSImple/setBottom.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 7 | 7 |  | h5-v2/src/views/buy-lottery/child_modal/tab_menu/tab_menu.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 55 | 50 |  | h5-v2/src/views/buy-lottery/components/QwcBall.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、客服/反馈/帮助 | 19 | 14 |  | h5-v2/src/views/buy-lottery/lottery_help.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、客服/反馈/帮助 | 28 | 16 |  | h5-v2/src/views/buy-lottery/lottery_helptwo.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 7 | 9 |  | h5-v2/src/views/buy-lottery/lottery_sound.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 278 | 116 |  | h5-v2/src/views/buy-lottery/period_info.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 7 | 7 |  | h5-v2/src/views/chat/chat/chatHeader.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 35 | 33 |  | h5-v2/src/views/chat/chat/chatRoom.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 8 | 8 |  | h5-v2/src/views/chat/chat/chatRoomList/index.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 56 | 54 |  | h5-v2/src/views/chat/chat/chatSys.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 29 | 24 |  | h5-v2/src/views/chat/chat/child_modal/CountDown/index.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 4 | 4 |  | h5-v2/src/views/chat/chat/child_modal/EmojiGroup.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 2 | 2 |  | h5-v2/src/views/chat/chat/child_modal/aite.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 2 | 2 |  | h5-v2/src/views/chat/chat/child_modal/announce.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 27 | 27 |  | h5-v2/src/views/chat/chat/child_modal/asideList.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 1 | 3 |  | h5-v2/src/views/chat/chat/child_modal/avater.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 7 | 7 |  | h5-v2/src/views/chat/chat/child_modal/bettedOrder.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 16 | 16 |  | h5-v2/src/views/chat/chat/child_modal/chatMsgActionMenu.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 3 | 3 |  | h5-v2/src/views/chat/chat/child_modal/chatTopPin.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 5 | 5 |  | h5-v2/src/views/chat/chat/child_modal/customEmoji.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 7 | 7 |  | h5-v2/src/views/chat/chat/child_modal/followShowBet.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 5 | 5 |  | h5-v2/src/views/chat/chat/child_modal/gif.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 2 | 2 |  | h5-v2/src/views/chat/chat/child_modal/headNotice.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 6 | 6 |  | h5-v2/src/views/chat/chat/child_modal/image.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 4 | 4 |  | h5-v2/src/views/chat/chat/child_modal/joinRoomNotice.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊、接口/状态/工具 | 1 | 2 |  | h5-v2/src/views/chat/chat/child_modal/lotteryListMixin.js |
| M | h5-v2 | 页面 | 个人中心/账户、聊天室/私聊 | 9 | 8 |  | h5-v2/src/views/chat/chat/child_modal/messageItem.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 26 | 28 |  | h5-v2/src/views/chat/chat/child_modal/moreFun.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 16 | 11 |  | h5-v2/src/views/chat/chat/child_modal/notice.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 7 | 7 |  | h5-v2/src/views/chat/chat/child_modal/plusMsgBar.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views/chat/chat/child_modal/redPacket.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 5 | 5 |  | h5-v2/src/views/chat/chat/child_modal/scrollIndictor.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 115 | 45 |  | h5-v2/src/views/chat/chat/child_modal/scrollNotice.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 41 | 41 |  | h5-v2/src/views/chat/chat/child_modal/scrollNoticeHistory.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 6 | 6 |  | h5-v2/src/views/chat/chat/child_modal/sendMsgBar.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 6 | 6 |  | h5-v2/src/views/chat/chat/child_modal/showBetReward.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 5 | 5 |  | h5-v2/src/views/chat/chat/child_modal/signInSuccess.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 7 | 7 |  | h5-v2/src/views/chat/chat/child_modal/tutorPlan.vue |
| M | h5-v2 | 页面 | 个人中心/账户、聊天室/私聊 | 6 | 6 |  | h5-v2/src/views/chat/chat/child_modal/userInfoBar.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 12 | 12 |  | h5-v2/src/views/chat/chat/dialog/asideRank.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 21 | 21 |  | h5-v2/src/views/chat/chat/dialog/asideRedPacket.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 12 | 12 |  | h5-v2/src/views/chat/chat/dialog/detailMsg.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 14 | 14 |  | h5-v2/src/views/chat/chat/dialog/zhudanDialog.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖、聊天室/私聊 | 1 | 1 |  | h5-v2/src/views/chat/chat/game/balls/index.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 28 | 26 |  | h5-v2/src/views/chat/chat/game/balls/liuhe.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 24 | 22 |  | h5-v2/src/views/chat/chat/game/balls/pcdd.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 30 | 30 |  | h5-v2/src/views/chat/chat/game/balls/result.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 44 | 37 |  | h5-v2/src/views/chat/chat/game/balls/share.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 38 | 34 |  | h5-v2/src/views/chat/chat/game/chaseNumber.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 9 | 9 |  | h5-v2/src/views/chat/chat/game/game.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 46 | 46 |  | h5-v2/src/views/chat/chat/game/gameDetail.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 15 | 15 |  | h5-v2/src/views/chat/chat/game/index.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 2 | 2 |  | h5-v2/src/views/chat/chat/game/indicator.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 9 | 9 |  | h5-v2/src/views/chat/chat/game/numberInput.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 5 | 3 |  | h5-v2/src/views/chat/chat/game/periodHistory/ball.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 14 | 14 |  | h5-v2/src/views/chat/chat/game/periodHistory/periodHistory.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 4 | 4 |  | h5-v2/src/views/chat/chat/game/select.vue |
| M | h5-v2 | 页面 | 个人中心/账户、聊天室/私聊 | 14 | 12 |  | h5-v2/src/views/chat/chat/game/setting.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 3 | 3 |  | h5-v2/src/views/chat/chat/game/wrongToast.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 30 | 30 |  | h5-v2/src/views/chat/chat/privateMsgList.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 5 | 5 |  | h5-v2/src/views/chat/chat/privateRoom/privateChat.js |
| M | h5-v2 | 页面 | 聊天室/私聊 | 45 | 45 |  | h5-v2/src/views/chat/chat/privateRoom/privateRoom.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 9 | 9 |  | h5-v2/src/views/chat/discount/discount.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 9 | 9 |  | h5-v2/src/views/chat/groupChat/components/roomList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 17 | 17 |  | h5-v2/src/views/chat/groupChat/index.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、接口/状态/工具 | 3 | 3 |  | h5-v2/src/views/chat/mixins/handleSpeakStatus.js |
| M | h5-v2 | 页面 | 聊天室/私聊 | 23 | 23 |  | h5-v2/src/views/chat/plan/plan2Version.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 15 | 15 |  | h5-v2/src/views/chat/redPacketBattle/components/aside.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 32 | 32 |  | h5-v2/src/views/chat/redPacketBattle/components/battleChat.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 11 | 5 |  | h5-v2/src/views/chat/redPacketBattle/components/battleHbDetail.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 14 | 13 |  | h5-v2/src/views/chat/redPacketBattle/components/battleHbMsg.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 6 | 4 |  | h5-v2/src/views/chat/redPacketBattle/components/battleResult.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、客服/反馈/帮助、活动/红包/推广/下载 | 2 | 2 |  | h5-v2/src/views/chat/redPacketBattle/components/customerAdmin.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 3 | 2 |  | h5-v2/src/views/chat/redPacketBattle/components/nnHbCountMsg.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 9 | 9 |  | h5-v2/src/views/chat/redPacketBattle/components/openRedPacketDialog.vue |
| M | h5-v2 | 页面 | 聊天室/私聊、活动/红包/推广/下载 | 13 | 13 |  | h5-v2/src/views/chat/redPacketBattle/components/sendHbComponent/sendHb.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、聊天室/私聊 | 59 | 41 |  | h5-v2/src/views/chat/withdrawChat/withdrawChat.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/views/discovery/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 10 | 10 |  | h5-v2/src/views/discovery/news-center/detail.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 19 | 21 |  | h5-v2/src/views/discovery/news-center/index.vue |
| M | h5-v2 | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 18 | 25 |  | h5-v2/src/views/feedback_active/address.vue |
| M | h5-v2 | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 18 | 15 |  | h5-v2/src/views/feedback_active/feedback.vue |
| M | h5-v2 | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 15 | 15 |  | h5-v2/src/views/feedback_active/feedback_active.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、客服/反馈/帮助、活动/红包/推广/下载 | 30 | 47 |  | h5-v2/src/views/feedback_active/myPrize.vue |
| M | h5-v2 | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 9 | 22 |  | h5-v2/src/views/feedback_active/order.vue |
| M | h5-v2 | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 10 | 23 |  | h5-v2/src/views/feedback_active/rule.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 11 | 11 |  | h5-v2/src/views/free-play/index.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 8 | 8 |  | h5-v2/src/views/giftCenter/components/activityList.vue |
| M | h5-v2 | 页面 | 未归类路径 | 38 | 39 |  | h5-v2/src/views/giftCenter/components/dialog.vue |
| M | h5-v2 | 页面 | 未归类路径 | 57 | 56 |  | h5-v2/src/views/giftCenter/components/receiveSuccess.vue |
| M | h5-v2 | 页面 | 未归类路径 | 51 | 18 |  | h5-v2/src/views/giftCenter/components/subActList.vue |
| M | h5-v2 | 页面 | 未归类路径 | 52 | 53 |  | h5-v2/src/views/giftCenter/components/topData.vue |
| M | h5-v2 | 页面 | 未归类路径 | 203 | 167 |  | h5-v2/src/views/giftCenter/components/verifyPhone.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 35 | 23 |  | h5-v2/src/views/giftCenter/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 5 |  | h5-v2/src/views/grab-village/components/createRoom.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖、个人中心/账户 | 7 | 7 |  | h5-v2/src/views/grab-village/gaming-room/message/message-type/bettingType.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户 | 4 | 4 |  | h5-v2/src/views/grab-village/gaming-room/message/message-type/emojiType.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户、活动/红包/推广/下载 | 4 | 4 |  | h5-v2/src/views/grab-village/gaming-room/message/message-type/redPacketMessage.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户 | 6 | 6 |  | h5-v2/src/views/grab-village/gaming-room/message/othersMessage.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 5 |  | h5-v2/src/views/grab-village/gaming-room/periodHistory.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 1 | 3 |  | h5-v2/src/views/grab-village/gaming-room/roomActionMenu.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 3 | 2 |  | h5-v2/src/views/grab-village/gaming-room/roomCard.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 17 | 17 |  | h5-v2/src/views/grab-village/gaming-room/roomChat.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 2 |  | h5-v2/src/views/grab-village/gaming-room/roomChatMsgBar.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 3 | 1 |  | h5-v2/src/views/grab-village/gaming-room/roomHeader.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views/grab-village/gaming-room/roomSocket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、资金/充值/提现 | 2 | 2 |  | h5-v2/src/views/grab-village/village-income/bankerList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 2 |  | h5-v2/src/views/grab-village/village-income/playerList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/views/grab-village/village-income/search-box.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 6 |  | h5-v2/src/views/grab-village/villageAreaList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 10 | 10 |  | h5-v2/src/views/grab-village/villageRank.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views/grab-village/villageType.vue |
| M | h5-v2 | 页面 | 接口/状态/工具 | 39 | 39 |  | h5-v2/src/views/hbBattlePlay/mixins.js |
| M | h5-v2 | 页面 | 首页/导航/版面 | 649 | 577 |  | h5-v2/src/views/hbBattlePlay/nnHbPlay/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 597 | 525 |  | h5-v2/src/views/hbBattlePlay/thunderHbPlay/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 25 | 25 |  | h5-v2/src/views/home/components/games/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 9 |  | h5-v2/src/views/home/components/hotlist/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 26 | 14 |  | h5-v2/src/views/home/components/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 4 | 4 |  | h5-v2/src/views/home/components/lottery/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 47 | 37 |  | h5-v2/src/views/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/views/home/game.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/views/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 26 | 47 |  | h5-v2/src/views/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 28 | 16 |  | h5-v2/src/views/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 3 | 3 |  | h5-v2/src/views/home/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/views/home/rank2.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 13 | 12 |  | h5-v2/src/views/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 64 | 37 |  | h5-v2/src/views/home/redPacketPop.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 22 | 12 |  | h5-v2/src/views/home/switchtemplate.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 26 | 14 |  | h5-v2/src/views/home/sys_notice.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户 | 18 | 18 |  | h5-v2/src/views/home/user_guide.vue |
| M | h5-v2 | 页面 | 未归类路径 | 3 | 3 |  | h5-v2/src/views/jumpPage.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 24 | 20 |  | h5-v2/src/views/layout/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 56 | 46 |  | h5-v2/src/views/layout/layout.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、接口/状态/工具 | 33 | 31 |  | h5-v2/src/views/lend-center/capital-repay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 11 | 11 |  | h5-v2/src/views/lend-center/components/PayDialog.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 30 | 40 |  | h5-v2/src/views/lend-center/go-lend.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 22 | 20 |  | h5-v2/src/views/lend-center/go-repay.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、资金/充值/提现 | 11 | 11 |  | h5-v2/src/views/lend-center/index.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 117 | 50 |  | h5-v2/src/views/lend-center/lend-agreement.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 26 | 21 |  | h5-v2/src/views/lend-center/lend-detail.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 91 | 69 |  | h5-v2/src/views/lend-center/lend-progress.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 13 | 13 |  | h5-v2/src/views/lend-center/lend-record.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 9 | 15 |  | h5-v2/src/views/lend-center/lend.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 20 | 14 |  | h5-v2/src/views/lend-center/lendQuota.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 7 | 7 |  | h5-v2/src/views/lend-center/lendResult.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 6 | 14 |  | h5-v2/src/views/lend-center/lend_pwdDialog.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 4 | 4 |  | h5-v2/src/views/lend-center/mine.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 38 | 57 |  | h5-v2/src/views/lend-center/my_cs.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 13 | 13 |  | h5-v2/src/views/lend-center/repay-record.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 20 | 20 |  | h5-v2/src/views/lend-center/retPrincipal.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 191 | 153 |  | h5-v2/src/views/login/diffPlaceLogin.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、首页/导航/版面 | 13 | 3 |  | h5-v2/src/views/login/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views/login/login.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 25 | 25 |  | h5-v2/src/views/login/loginMixin.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 9 | 11 |  | h5-v2/src/views/lottery/components/games/game-tabs.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 125 | 55 |  | h5-v2/src/views/lottery/components/games/games.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 10 | 17 |  | h5-v2/src/views/lottery/components/games/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views/lottery/components/lotterys/all-type.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 11 | 18 |  | h5-v2/src/views/lottery/components/lotterys/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 15 | 26 |  | h5-v2/src/views/lottery/components/lotterys/lotteryList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 1 |  | h5-v2/src/views/lottery/components/lotterys/lotterys.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views/lottery/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 8 | 8 |  | h5-v2/src/views/lottery/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 8 | 8 |  | h5-v2/src/views/lotteryChatRoom/components/roomList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 11 | 11 |  | h5-v2/src/views/lotteryChatRoom/components/shareToChatRoom.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖、聊天室/私聊 | 55 | 45 |  | h5-v2/src/views/lotteryChatRoom/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 9 | 9 |  | h5-v2/src/views/onLive/onLive.vue |
| M | h5-v2 | 页面 | 未归类路径 | 10 | 10 |  | h5-v2/src/views/onLive/onLiveDetail.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、首页/导航/版面 | 2 | 2 |  | h5-v2/src/views/password/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、首页/导航/版面 | 38 | 38 |  | h5-v2/src/views/password/indexNew.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 31 | 38 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 30 | 30 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/agencylist.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 9 | 9 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/groundlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户、代理/报表/团队 | 13 | 12 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 7 | 7 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center_df/nextlist.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 7 | 9 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agentDealList.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 18 | 18 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 6 | 8 |  | h5-v2/src/views/personal-center/child_modal/agency_center/commission.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 15 | 15 |  | h5-v2/src/views/personal-center/child_modal/agency_center/common/sharePop.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 13 | 6 |  | h5-v2/src/views/personal-center/child_modal/agency_center/common/tgList.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 2 | 2 |  | h5-v2/src/views/personal-center/child_modal/agency_center/explain.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户、代理/报表/团队 | 4 | 4 |  | h5-v2/src/views/personal-center/child_modal/agency_center/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 9 | 11 |  | h5-v2/src/views/personal-center/child_modal/agency_center/mycommission.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队、活动/红包/推广/下载 | 19 | 19 |  | h5-v2/src/views/personal-center/child_modal/agency_center/promotion/b312.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户、代理/报表/团队、活动/红包/推广/下载 | 6 | 8 |  | h5-v2/src/views/personal-center/child_modal/agency_center/promotion/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队、活动/红包/推广/下载 | 103 | 50 |  | h5-v2/src/views/personal-center/child_modal/agency_center/promotion/typeone.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 28 | 12 |  | h5-v2/src/views/personal-center/child_modal/agency_center/subReport.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 44 | 26 |  | h5-v2/src/views/personal-center/child_modal/agency_center/teamReport.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 42 | 34 |  | h5-v2/src/views/personal-center/child_modal/agency_center/tgAdd.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 43 | 65 |  | h5-v2/src/views/personal-center/child_modal/agency_center/tgMgr.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 14 | 14 |  | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 14 | 14 |  | h5-v2/src/views/personal-center/child_modal/agency_center/userMgr.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 12 | 10 |  | h5-v2/src/views/personal-center/child_modal/balance_detail/balance_detail.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助 | 10 | 10 |  | h5-v2/src/views/personal-center/child_modal/help_center/help_center.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助 | 1 | 6 |  | h5-v2/src/views/personal-center/child_modal/help_center/help_detail.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助 | 4 | 11 |  | h5-v2/src/views/personal-center/child_modal/help_center/help_list.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 7 | 18 |  | h5-v2/src/views/personal-center/child_modal/information/information.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 8 | 8 |  | h5-v2/src/views/personal-center/child_modal/information/information_system.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 11 | 18 |  | h5-v2/src/views/personal-center/child_modal/information/information_user.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、个人中心/账户 | 13 | 29 |  | h5-v2/src/views/personal-center/child_modal/lottery_play/lottery_play.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、个人中心/账户 | 7 | 7 |  | h5-v2/src/views/personal-center/child_modal/lottery_type_rule/lottery_type_rule.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 30 | 22 |  | h5-v2/src/views/personal-center/child_modal/mysetting/Language/moreLanguage.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 54 | 18 |  | h5-v2/src/views/personal-center/child_modal/mysetting/aboutme/aboutme.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 59 | 34 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingAliPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 57 | 30 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingDigiccy.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 14 | 14 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 48 | 21 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingWechat.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 11 | 11 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bandingbank.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 6 | 6 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/bank_list.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户、主题/颜色/静态资源 | 4 | 4 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/payStyleInfo.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户、主题/颜色/静态资源 | 4 | 4 |  | h5-v2/src/views/personal-center/child_modal/mysetting/bank/wePayStyleInfo.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助、主题/颜色/静态资源 | 7 | 7 |  | h5-v2/src/views/personal-center/child_modal/mysetting/feedback/components/upLoadImg.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助 | 9 | 9 |  | h5-v2/src/views/personal-center/child_modal/mysetting/feedback/feedback.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助 | 7 | 7 |  | h5-v2/src/views/personal-center/child_modal/mysetting/feedback/feedbackAdd.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、首页/导航/版面、个人中心/账户 | 91 | 94 |  | h5-v2/src/views/personal-center/child_modal/mysetting/loginHistory/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 46 | 39 |  | h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 9 | 9 |  | h5-v2/src/views/personal-center/child_modal/mysetting/mysetting.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 35 | 14 |  | h5-v2/src/views/personal-center/child_modal/mysetting/personal_hobby/personal_hobby.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 16 | 22 |  | h5-v2/src/views/personal-center/child_modal/mysetting/personal_hobby/switchTemplate.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 16 | 4 |  | h5-v2/src/views/personal-center/child_modal/mysetting/real_name/set_real_name.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、个人中心/账户 | 27 | 11 |  | h5-v2/src/views/personal-center/child_modal/mysetting/reset_login_pwd/reset_login_pwd.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 11 | 8 |  | h5-v2/src/views/personal-center/child_modal/mysetting/reset_pay_pwd/reset_pay_pwd.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 23 | 9 |  | h5-v2/src/views/personal-center/child_modal/mysetting/reset_pay_pwd/set_pay_pwd.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户、主题/颜色/静态资源 | 9 | 8 |  | h5-v2/src/views/personal-center/child_modal/mysetting/theme/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户、主题/颜色/静态资源 | 11 | 17 |  | h5-v2/src/views/personal-center/child_modal/mysetting/theme/theme-more.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 126 | 49 |  | h5-v2/src/views/personal-center/child_modal/personal_info/bindAccountList/baseInfoList.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 197 | 159 |  | h5-v2/src/views/personal-center/child_modal/personal_info/bindAccountList/releaseBindPop.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 22 | 19 |  | h5-v2/src/views/personal-center/child_modal/personal_info/personal_base_info.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 6 | 6 |  | h5-v2/src/views/personal-center/child_modal/personal_info/personal_info.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 6 | 6 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/OffNoOrder.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 20 | 8 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/OffOrder.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 21 | 9 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/OnlineEwm.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 12 | 12 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/RechargeBank.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 23 | 19 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/RechargeFinish.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 11 | 11 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/RechargeUsdtFinish.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 11 | 11 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/components/digital-currency-tab.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 29 | 21 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/digital-currency.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 64 | 29 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/handsFeeRecharge.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 2 | 2 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/recharge.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 5 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/recharge2LinkPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 2 | 6 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/rechargeIframePay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 16 | 17 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/rechargeIframePayInner.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 25 | 25 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/rechargeType.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 11 | 11 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/rechargeType2.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 175 | 55 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/rechargeType3.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 15 | 12 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/rechargeType4.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 9 | 9 |  | h5-v2/src/views/personal-center/child_modal/recharge_list/recharge_list.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 9 | 9 |  | h5-v2/src/views/personal-center/child_modal/set_sculpture/set_sculpture.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 104 | 44 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/aliPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 103 | 42 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/bankPay.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 126 | 58 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/currencyPay.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 3 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/takeFeeList.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 27 | 17 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/takefee.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 30 | 44 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/takefee_list.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 104 | 43 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/weChatPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 16 | 17 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/withdraw.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 37 | 14 |  | h5-v2/src/views/personal-center/child_modal/userReport/userReport.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 13 | 24 |  | h5-v2/src/views/personal-center/child_modal/userReport/userReport2.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 169 | 66 |  | h5-v2/src/views/personal-center/child_modal/yeb/buystrategy.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 33 | 40 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/out_aliPay.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 53 | 43 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/out_balace.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 18 | 18 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/out_bank.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 19 | 19 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/out_digiccy.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户、接口/状态/工具 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/out_mixin.js |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 33 | 40 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/out_weChat.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 9 | 15 |  | h5-v2/src/views/personal-center/child_modal/yeb/components/yeb_result.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 117 | 29 |  | h5-v2/src/views/personal-center/child_modal/yeb/moneylist.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 39 | 53 |  | h5-v2/src/views/personal-center/child_modal/yeb/my_cs.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 270 | 101 |  | h5-v2/src/views/personal-center/child_modal/yeb/regularstrategy.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 64 | 44 |  | h5-v2/src/views/personal-center/child_modal/yeb/yeb copy.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 84 | 57 |  | h5-v2/src/views/personal-center/child_modal/yeb/yeb.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 47 | 29 |  | h5-v2/src/views/personal-center/child_modal/yeb/yeb_agreement.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 21 | 16 |  | h5-v2/src/views/personal-center/child_modal/yeb/yeb_in.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 17 | 17 |  | h5-v2/src/views/personal-center/child_modal/yeb/yeb_out.vue |
| M | h5-v2 | 页面 | 资金/充值/提现、个人中心/账户 | 8 | 8 |  | h5-v2/src/views/personal-center/child_modal/yeb/yeb_record.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户 | 12 | 26 |  | h5-v2/src/views/personal-center/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 29 | 52 |  | h5-v2/src/views/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 16 | 16 |  | h5-v2/src/views/phone-valid/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 10 |  | h5-v2/src/views/phone-valid/indexNew.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 19 | 19 |  | h5-v2/src/views/prize-notice/historyList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 12 | 12 |  | h5-v2/src/views/prize-notice/prizeNotice.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 35 | 75 |  | h5-v2/src/views/redPacket/myRedPacket.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 13 | 26 |  | h5-v2/src/views/redPacket/order.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 13 | 13 |  | h5-v2/src/views/redPacket/redPacket.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 28 | 40 |  | h5-v2/src/views/redPacket/rule.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 5 | 5 |  | h5-v2/src/views/redPacketGame/components/roomItem.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 1 | 1 |  | h5-v2/src/views/redPacketGame/components/sweepMin.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载、接口/状态/工具 | 3 | 3 |  | h5-v2/src/views/redPacketGame/mixins.js |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 7 | 7 |  | h5-v2/src/views/register/gift-popup/popup.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、首页/导航/版面 | 3 | 3 |  | h5-v2/src/views/register/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 4 | 4 |  | h5-v2/src/views/register/reg-gift/reg-gift.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 3 | 3 |  | h5-v2/src/views/register/register.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 56 | 56 |  | h5-v2/src/views/register/registerMixin.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 58 | 32 |  | h5-v2/src/views/trend/child_modal/share/ballDistr/ballDistr.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 108 | 105 |  | h5-v2/src/views/trend/child_modal/share/baseTrend/baseTrend.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 55 | 62 |  | h5-v2/src/views/trend/child_modal/share/baseTrend/baseTrend.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 13 | 36 |  | h5-v2/src/views/trend/child_modal/share/baseTrend/lineTable.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 6 | 6 |  | h5-v2/src/views/trend/child_modal/share/index.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 6 | 5 |  | h5-v2/src/views/trend/child_modal/share/loogDragon/loogDragon.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 56 | 59 |  | h5-v2/src/views/trend/child_modal/share/page.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 180 | 56 |  | h5-v2/src/views/trend/child_modal/share/prizeNum/prizeNum.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 45 | 51 |  | h5-v2/src/views/trend/child_modal/share/share.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 11 | 19 |  | h5-v2/src/views/trend/child_modal/share/twoSide/twoSide.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 59 | 19 |  | h5-v2/src/views/trend/trend.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、个人中心/账户 | 6 | 3 |  | h5-v2/src/views/vipInfo/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views2/addpop/index.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 12 | 12 |  | h5-v2/src/views2/chat/chatMain/components/chatGroup.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 23 | 21 |  | h5-v2/src/views2/chat/chatMain/components/privateMsgList.vue |
| M | h5-v2 | 页面 | 代理/报表/团队、聊天室/私聊 | 5 | 5 |  | h5-v2/src/views2/chat/chatMain/components/team.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 33 | 27 |  | h5-v2/src/views2/chat/chatMain/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 11 | 17 |  | h5-v2/src/views2/game/components/searchPage.vue |
| M | h5-v2 | 页面 | 未归类路径 | 15 | 15 |  | h5-v2/src/views2/game/game.vue |
| M | h5-v2 | 页面 | 未归类路径 | 6 | 8 |  | h5-v2/src/views2/game/gameAllType.vue |
| M | h5-v2 | 页面 | 未归类路径 | 6 | 12 |  | h5-v2/src/views2/game/gameList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 12 | 12 |  | h5-v2/src/views2/home/asideRank.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 3 | 3 |  | h5-v2/src/views2/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views2/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/views2/home/gamesPlatForms.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 18 | 18 |  | h5-v2/src/views2/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 6 |  | h5-v2/src/views2/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/views2/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 16 | 14 |  | h5-v2/src/views2/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/views2/home/hotlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 53 | 27 |  | h5-v2/src/views2/home/newfastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views2/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 24 | 24 |  | h5-v2/src/views2/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 16 | 16 |  | h5-v2/src/views2/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 19 | 19 |  | h5-v2/src/views2/lottery/components/games/games.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 19 | 19 |  | h5-v2/src/views2/lottery/components/games/gamesForm.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 2 |  | h5-v2/src/views2/lottery/components/lotterys/lotterys.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 1 |  | h5-v2/src/views2/lottery/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 12 | 12 |  | h5-v2/src/views2/lottery/lotteryType.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 5 | 5 |  | h5-v2/src/views2/lotteryHall/chatRoomEntry.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views2/lotteryHall/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 8 | 8 |  | h5-v2/src/views2/lotteryHall/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 34 | 12 |  | h5-v2/src/views2/lotteryHall/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 16 | 27 |  | h5-v2/src/views2/lotteryHall/lotteryList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 22 | 19 |  | h5-v2/src/views2/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 134 | 56 |  | h5-v2/src/views2/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 2 | 2 |  | h5-v2/src/views2/register/register.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 13 | 13 |  | h5-v2/src/views3/active/active.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 30 | 29 |  | h5-v2/src/views3/fund/components/CurrencyRate.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 427 | 294 |  | h5-v2/src/views3/fund/components/withdrawal.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、资金/充值/提现 | 37 | 13 |  | h5-v2/src/views3/fund/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 18 | 18 |  | h5-v2/src/views3/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 6 |  | h5-v2/src/views3/home/v4-home-header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 35 | 35 |  | h5-v2/src/views3/layout/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views3/login/login.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views3/my-favorite/index.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 26 | 20 |  | h5-v2/src/views3/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views3/recently-played/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 8 | 8 |  | h5-v2/src/views3/register/register.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 27 | 11 |  | h5-v2/src/views4/fund/amountConversionInternational.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 369 | 250 |  | h5-v2/src/views4/fund/components/withdrawal.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 9 | 9 |  | h5-v2/src/views4/fund/conversion-record.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 36 | 36 |  | h5-v2/src/views4/layout/index.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 13 | 13 |  | h5-v2/src/views5/active/active.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views5/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views5/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 29 | 29 |  | h5-v2/src/views5/home/gamesPlatForms.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 6 |  | h5-v2/src/views5/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/views5/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 13 | 11 |  | h5-v2/src/views5/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views5/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 16 | 16 |  | h5-v2/src/views5/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views5/login/login.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 8 | 8 |  | h5-v2/src/views5/register/register.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 14 | 14 |  | h5-v2/src/views6/active/active.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views6/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 71 | 31 |  | h5-v2/src/views6/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 20 | 16 |  | h5-v2/src/views6/home/gamels/cplist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 17 | 10 |  | h5-v2/src/views6/home/gamels/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 42 | 33 |  | h5-v2/src/views6/home/gamels/otherlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 33 | 25 |  | h5-v2/src/views6/home/gamels/rmlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/views6/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 6 | 6 |  | h5-v2/src/views6/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/views6/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 15 | 13 |  | h5-v2/src/views6/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views6/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 16 | 13 |  | h5-v2/src/views6/hotGameList/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 59 | 44 |  | h5-v2/src/views6/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views6/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 5 | 5 |  | h5-v2/src/views6/lotteryHall/chatRoomEntry.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views6/lotteryHall/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 6 | 6 |  | h5-v2/src/views6/lotteryHall/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 39 | 32 |  | h5-v2/src/views6/lotteryHall/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 14 | 25 |  | h5-v2/src/views6/lotteryHall/lotteryList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 22 | 20 |  | h5-v2/src/views6/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 32 | 29 |  | h5-v2/src/views6/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 9 | 11 |  | h5-v2/src/views6/register/register.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 14 | 14 |  | h5-v2/src/views7/active/active.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 8 | 9 |  | h5-v2/src/views7/active/bcyl.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 7 | 8 |  | h5-v2/src/views7/active/index.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 36 | 18 |  | h5-v2/src/views7/active/mission.vue |
| M | h5-v2 | 页面 | 活动/红包/推广/下载 | 14 | 14 |  | h5-v2/src/views7/active/organization.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views7/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 24 | 17 |  | h5-v2/src/views7/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 20 | 16 |  | h5-v2/src/views7/home/gamels/cplist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/views7/home/gamels/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 42 | 33 |  | h5-v2/src/views7/home/gamels/otherlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 7 | 8 |  | h5-v2/src/views7/home/gamels/rmlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 9 |  | h5-v2/src/views7/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 12 | 7 |  | h5-v2/src/views7/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/views7/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 15 | 13 |  | h5-v2/src/views7/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views7/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 10 | 10 |  | h5-v2/src/views7/hotGameList/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 18 | 18 |  | h5-v2/src/views7/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 5 | 2 |  | h5-v2/src/views7/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 5 | 5 |  | h5-v2/src/views7/lotteryHall/chatRoomEntry.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views7/lotteryHall/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 6 | 6 |  | h5-v2/src/views7/lotteryHall/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 39 | 32 |  | h5-v2/src/views7/lotteryHall/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 14 | 25 |  | h5-v2/src/views7/lotteryHall/lotteryList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 22 | 20 |  | h5-v2/src/views7/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 161 | 68 |  | h5-v2/src/views7/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 13 | 12 |  | h5-v2/src/views7/register/register.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 10 | 10 |  | h5-v2/src/views8/chat/chatMain/components/chatGroup.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 16 | 16 |  | h5-v2/src/views8/chat/chatMain/components/privateMsgList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 10 | 10 |  | h5-v2/src/views8/chat/chatMain/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 11 | 17 |  | h5-v2/src/views8/game/components/searchPage.vue |
| M | h5-v2 | 页面 | 未归类路径 | 13 | 13 |  | h5-v2/src/views8/game/game.vue |
| M | h5-v2 | 页面 | 未归类路径 | 6 | 8 |  | h5-v2/src/views8/game/gameAllType.vue |
| M | h5-v2 | 页面 | 未归类路径 | 6 | 12 |  | h5-v2/src/views8/game/gameList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views8/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views8/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 7 |  | h5-v2/src/views8/home/gamesPlatForms.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views8/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 7 | 7 |  | h5-v2/src/views8/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 13 | 11 |  | h5-v2/src/views8/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views8/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 36 | 16 |  | h5-v2/src/views8/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views8/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 19 | 19 |  | h5-v2/src/views8/lottery/components/games/games.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 17 | 17 |  | h5-v2/src/views8/lottery/components/games/gamesForm.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 2 |  | h5-v2/src/views8/lottery/components/lotterys/lotterys.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 1 |  | h5-v2/src/views8/lottery/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 12 | 12 |  | h5-v2/src/views8/lottery/lotteryType.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 5 | 5 |  | h5-v2/src/views8/lotteryHall/chatRoomEntry.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views8/lotteryHall/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 6 | 6 |  | h5-v2/src/views8/lotteryHall/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 41 | 34 |  | h5-v2/src/views8/lotteryHall/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 16 | 27 |  | h5-v2/src/views8/lotteryHall/lotteryList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 22 | 20 |  | h5-v2/src/views8/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 131 | 59 |  | h5-v2/src/views8/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 2 | 2 |  | h5-v2/src/views8/register/register.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 10 | 10 |  | h5-v2/src/views9/chat/chatMain/components/chatGroup.vue |
| M | h5-v2 | 页面 | 聊天室/私聊 | 16 | 16 |  | h5-v2/src/views9/chat/chatMain/components/privateMsgList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 10 | 10 |  | h5-v2/src/views9/chat/chatMain/index.vue |
| M | h5-v2 | 页面 | 未归类路径 | 11 | 17 |  | h5-v2/src/views9/game/components/searchPage.vue |
| M | h5-v2 | 页面 | 未归类路径 | 13 | 13 |  | h5-v2/src/views9/game/game.vue |
| M | h5-v2 | 页面 | 未归类路径 | 6 | 8 |  | h5-v2/src/views9/game/gameAllType.vue |
| M | h5-v2 | 页面 | 未归类路径 | 6 | 12 |  | h5-v2/src/views9/game/gameList.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views9/home/banner.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 8 | 8 |  | h5-v2/src/views9/home/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 73 | 29 |  | h5-v2/src/views9/home/gamesPlatForms.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 4 | 4 |  | h5-v2/src/views9/home/headLine.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 33 | 15 |  | h5-v2/src/views9/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 13 | 11 |  | h5-v2/src/views9/home/home.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 10 | 10 |  | h5-v2/src/views9/home/redPacket.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 22 | 14 |  | h5-v2/src/views9/layout/layout.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 1 | 1 |  | h5-v2/src/views9/login/login.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 19 | 19 |  | h5-v2/src/views9/lottery/components/games/games.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 17 | 17 |  | h5-v2/src/views9/lottery/components/games/gamesForm.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 2 |  | h5-v2/src/views9/lottery/components/lotterys/lotterys.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 1 |  | h5-v2/src/views9/lottery/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 12 | 12 |  | h5-v2/src/views9/lottery/lotteryType.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖、聊天室/私聊 | 5 | 5 |  | h5-v2/src/views9/lotteryHall/chatRoomEntry.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 2 | 2 |  | h5-v2/src/views9/lotteryHall/fastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖 | 6 | 6 |  | h5-v2/src/views9/lotteryHall/index.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 39 | 32 |  | h5-v2/src/views9/lotteryHall/lottery.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 16 | 27 |  | h5-v2/src/views9/lotteryHall/lotteryList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 22 | 20 |  | h5-v2/src/views9/lotteryHall/notice.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 133 | 61 |  | h5-v2/src/views9/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码 | 2 | 2 |  | h5-v2/src/views9/register/register.vue |
| M | h5-v2 | 构建配置 | 构建/配置 | 44 | 39 |  | h5-v2/vue.config.js |
| M | pc | 其他 | 未归类路径 | 1 | 1 |  | pc/.gitignore |
| M | pc | 其他 | 未归类路径 | 245 | 205 |  | pc/README.md |
| M | pc | 构建配置 | 构建/配置 | 6 | 3 |  | pc/build/webpack.dev.conf.js |
| M | pc | 其他 | 首页/导航/版面、构建/配置 | 6 | 22 |  | pc/config/index.js |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | 132 | 78 |  | pc/configstatic/pc/control/control.js |
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
| M | pc | 其他 | 首页/导航/版面 | 57 | 50 |  | pc/index.html |
| M | pc | 其他 | 未归类路径 | 20046 | 15533 |  | pc/package-lock.json |
| M | pc | 构建配置 | 构建/配置 | 2 | 2 |  | pc/package.json |
| M | pc | 其他 | 未归类路径 | 102 | 68 |  | pc/src/App.vue |
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
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/signin.png |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg1.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg2.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg3.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg4.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg5.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg6.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg7.jpg |
| D | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/tg_bg8.jpg |
| M | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/voices/sms-received.mp3 |
| M | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/voices/sms-received.ogg |
| A | pc | 组件 | 首页/导航/版面、资金/充值/提现 | 200 | 0 |  | pc/src/components/Calendar/index.vue |
| M | pc | 组件 | 未归类路径 | 344 | 301 |  | pc/src/components/JettonBox.vue |
| M | pc | 组件 | 客服/反馈/帮助 | 629 | 551 |  | pc/src/components/Longqueue/long-helper/longHelperList.vue |
| M | pc | 组件 | 客服/反馈/帮助 | 91 | 102 |  | pc/src/components/Longqueue/long-helper/longRecordList.vue |
| M | pc | 组件 | 未归类路径 | 56 | 59 |  | pc/src/components/MobileBox.vue |
| M | pc | 组件 | 首页/导航/版面 | 468 | 413 |  | pc/src/components/PhoneBindDialog/index.vue |
| M | pc | 组件 | 首页/导航/版面 | 258 | 232 |  | pc/src/components/PhoneValidDialog/index.vue |
| M | pc | 组件 | 未归类路径 | 21 | 23 |  | pc/src/components/ZkInput/main.vue |
| M | pc | 组件 | 首页/导航/版面 | 16 | 3 |  | pc/src/components/headMenu.vue |
| M | pc | 组件 | 登录/注册/验证码 | 45 | 70 |  | pc/src/components/login_dlg.vue |
| M | pc | 组件 | 主题/颜色/静态资源 | 36 | 7 |  | pc/src/components/logo.vue |
| M | pc | 组件 | 未归类路径 | 16 | 23 |  | pc/src/components/modal.vue |
| M | pc | 组件 | 资金/充值/提现 | 19 | 0 |  | pc/src/components/modifyFundPwd.vue |
| M | pc | 组件 | 未归类路径 | 377 | 353 |  | pc/src/components/tryPlay.vue |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 1 |  | pc/src/constant/theme.js |
| M | pc | 其他 | 未归类路径 | 21 | 19 |  | pc/src/directive/drag/drag.js |
| M | pc | 其他 | 未归类路径 | 403 | 205 |  | pc/src/lang/en_US.js |
| M | pc | 其他 | 未归类路径 | 32 | 9 |  | pc/src/lang/zh_CN.js |
| M | pc | 其他 | 未归类路径 | 31 | 29 |  | pc/src/main.js |
| M | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 214 | 85 |  | pc/src/mixins/register.js |
| M | pc | 路由 | 首页/导航/版面 | 261 | 258 |  | pc/src/router/index.js |
| M | pc | 状态 | 首页/导航/版面、接口/状态/工具 | 241 | 238 |  | pc/src/store/index.js |
| M | pc | 状态 | 彩票/投注/开奖、接口/状态/工具 | 110 | 69 |  | pc/src/store/modules/betShare.js |
| M | pc | 状态 | 聊天室/私聊、接口/状态/工具 | 329 | 224 |  | pc/src/store/modules/chat.js |
| M | pc | 状态 | 接口/状态/工具 | 4 | 4 |  | pc/src/store/modules/cms.js |
| M | pc | 状态 | 彩票/投注/开奖、接口/状态/工具 | 125 | 97 |  | pc/src/store/modules/lottery.js |
| M | pc | 状态 | 接口/状态/工具 | 131 | 100 |  | pc/src/store/modules/sysDict.js |
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
| M | pc | 工具/混入 | 接口/状态/工具 | 3 | 3 |  | pc/src/utils/diswatch.js |
| A | pc | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | 89 | 0 |  | pc/src/utils/less.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 88 | 88 |  | pc/src/utils/plugin/ivewComponent.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 567 | 515 |  | pc/src/utils/random/fc3d.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 234 | 234 |  | pc/src/utils/random/pk10.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 136 | 121 |  | pc/src/utils/request.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 843 | 749 |  | pc/src/utils/rongyun.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 71 | 61 |  | pc/src/utils/tplConfig.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 28 | 5 |  | pc/src/utils/utils.js |
| M | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 411 | 137 |  | pc/src/views-v10/active/index.vue |
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
| M | pc | 页面 | 首页/导航/版面 | 100 | 148 |  | pc/src/views-v10/layout/SlideQuick.vue |
| A | pc | 页面 | 首页/导航/版面 | 378 | 0 |  | pc/src/views-v10/layout/SlideQuick12.vue |
| M | pc | 页面 | 首页/导航/版面 | 5 | 1 |  | pc/src/views-v10/layout/components/BaseFooter.vue |
| M | pc | 页面 | 首页/导航/版面 | 33 | 15 |  | pc/src/views-v10/layout/components/BaseHeader.vue |
| M | pc | 页面 | 首页/导航/版面 | 41 | 50 |  | pc/src/views-v10/layout/popupNotice.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 128 | 118 |  | pc/src/views-v10/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 110 | 87 |  | pc/src/views-v10/register/index.vue |
| A | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 662 | 0 |  | pc/src/views-v11/active/index.vue |
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
| A | pc | 页面 | 首页/导航/版面 | 483 | 0 |  | pc/src/views-v11/layout/SlideQuick12.vue |
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
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 357 | 0 |  | pc/src/views-v11/layout/child_modal/lottery_head.vue |
| A | pc | 页面 | 首页/导航/版面 | 213 | 0 |  | pc/src/views-v11/layout/child_modal/newheader.vue |
| A | pc | 页面 | 首页/导航/版面 | 100 | 0 |  | pc/src/views-v11/layout/gameCategory.vue |
| A | pc | 页面 | 首页/导航/版面 | 171 | 0 |  | pc/src/views-v11/layout/layout.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 185 | 0 |  | pc/src/views-v11/login/index.vue |
| A | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 292 | 0 |  | pc/src/views-v11/login/loginMixin.js |
| A | pc | 页面 | 首页/导航/版面 | 137 | 0 |  | pc/src/views-v11/phone-buy/HomeQrcode.vue |
| A | pc | 页面 | 未归类路径 | 441 | 0 |  | pc/src/views-v11/phone-buy/RedpactList.vue |
| A | pc | 页面 | 首页/导航/版面 | 232 | 0 |  | pc/src/views-v11/phone-buy/index.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 386 | 0 |  | pc/src/views-v11/register/index.vue |
| A | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 617 | 0 |  | pc/src/views-v11/register/registerMixin.js |
| M | pc | 页面 | 未归类路径 | 130 | 129 |  | pc/src/views-v2/common/module_vue/header.vue |
| M | pc | 页面 | 接口/状态/工具 | 791 | 794 |  | pc/src/views-v2/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 88 | 51 |  | pc/src/views-v2/common/module_vue/suspend.vue |
| M | pc | 页面 | 未归类路径 | 39 | 42 |  | pc/src/views-v2/content/game/gameList.vue |
| M | pc | 页面 | 首页/导航/版面 | 28 | 41 |  | pc/src/views-v2/content/home/gameCard.vue |
| M | pc | 页面 | 首页/导航/版面 | 18 | 25 |  | pc/src/views-v2/content/home/gameSwiper.vue |
| M | pc | 页面 | 首页/导航/版面 | 53 | 10 |  | pc/src/views-v2/content/home/home.vue |
| M | pc | 页面 | 登录/注册/验证码 | 101 | 124 |  | pc/src/views-v2/content/register/register.vue |
| M | pc | 页面 | 未归类路径 | 73 | 111 |  | pc/src/views-v3/common/module_vue/footer.vue |
| M | pc | 页面 | 未归类路径 | 84 | 88 |  | pc/src/views-v3/common/module_vue/header.vue |
| M | pc | 页面 | 首页/导航/版面 | 514 | 472 |  | pc/src/views-v3/common/module_vue/header/headMenu.vue |
| M | pc | 页面 | 未归类路径 | 69 | 49 |  | pc/src/views-v3/content/game/child_vue/gameList.vue |
| M | pc | 页面 | 登录/注册/验证码 | 265 | 205 |  | pc/src/views-v3/content/register/register.vue |
| M | pc | 页面 | 首页/导航/版面 | 106 | 146 |  | pc/src/views-v3/layout/SlideQuick.vue |
| M | pc | 页面 | 接口/状态/工具 | 807 | 812 |  | pc/src/views-v4/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 60 | 72 |  | pc/src/views-v4/common/module_vue/top.vue |
| M | pc | 页面 | 未归类路径 | 87 | 84 |  | pc/src/views-v4/content/game/gameList.vue |
| M | pc | 页面 | 未归类路径 | 109 | 111 |  | pc/src/views-v5/components/header.vue |
| M | pc | 页面 | 接口/状态/工具 | 806 | 805 |  | pc/src/views-v5/components/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 67 | 48 |  | pc/src/views-v5/game/child_vue/gameList.vue |
| M | pc | 页面 | 首页/导航/版面 | 5 | 1 |  | pc/src/views-v5/home/cardEntry.vue |
| M | pc | 页面 | 登录/注册/验证码 | 90 | 97 |  | pc/src/views-v5/register/register.vue |
| M | pc | 页面 | 接口/状态/工具 | 69 | 55 |  | pc/src/views-v6/game/components/gameMixin.js |
| M | pc | 页面 | 首页/导航/版面 | 140 | 141 |  | pc/src/views-v6/layout/components/BaseNav.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 92 | 83 |  | pc/src/views-v6/register/index.vue |
| M | pc | 页面 | 未归类路径 | 60 | 56 |  | pc/src/views-v8/game/components/GameItem.vue |
| M | pc | 页面 | 接口/状态/工具 | 97 | 86 |  | pc/src/views-v8/game/components/gameMixin.js |
| M | pc | 页面 | 首页/导航/版面 | 108 | 149 |  | pc/src/views-v8/layout/SlideQuick.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 93 | 90 |  | pc/src/views-v8/register/index.vue |
| M | pc | 页面 | 活动/红包/推广/下载 | 374 | 131 |  | pc/src/views/active/active.vue |
| M | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 46 | 20 |  | pc/src/views/active/index.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 170 | 143 |  | pc/src/views/buyLottery/buyLottery.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 101 | 42 |  | pc/src/views/buyLottery/child_modal/common_vue/betting_example.vue |
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
| M | pc | 页面 | 彩票/投注/开奖 | 131 | 109 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/chase_num.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 693 | 586 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/common_modal/fc3d.js |
| M | pc | 页面 | 彩票/投注/开奖 | 233 | 194 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/result_page.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 19 | 22 |  | pc/src/views/buyLottery/child_modal/shared/shared.vue |
| A | pc | 页面 | 彩票/投注/开奖、主题/颜色/静态资源 | 0 | 0 |  | pc/src/views/buyLottery/css/test.css |
| M | pc | 页面 | 彩票/投注/开奖 | 48 | 52 |  | pc/src/views/buyLottery/lottery_head.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 343 | 277 |  | pc/src/views/buyLottery/lottery_info.vue |
| M | pc | 页面 | 聊天室/私聊 | 305 | 305 |  | pc/src/views/chatRoom/chatHeader.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 161 | 73 |  | pc/src/views/chatRoom/chatLeft/index.vue |
| M | pc | 页面 | 个人中心/账户、聊天室/私聊 | 125 | 126 |  | pc/src/views/chatRoom/chatLeft/messageList.vue |
| M | pc | 页面 | 聊天室/私聊 | 173 | 63 |  | pc/src/views/chatRoom/chatLeft/peopleList.vue |
| M | pc | 页面 | 聊天室/私聊、主题/颜色/静态资源 | 601 | 577 |  | pc/src/views/chatRoom/chatMain/chat.less |
| M | pc | 页面 | 聊天室/私聊 | 493 | 438 |  | pc/src/views/chatRoom/chatMain/chatFeature.vue |
| M | pc | 页面 | 聊天室/私聊 | 69 | 30 |  | pc/src/views/chatRoom/chatMain/chatPrivate/chatBottom.vue |
| M | pc | 页面 | 聊天室/私聊 | 49 | 66 |  | pc/src/views/chatRoom/chatMain/chatPrivate/chatBottomTool.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 371 | 321 |  | pc/src/views/chatRoom/chatMain/chatPrivate/index.vue |
| M | pc | 页面 | 聊天室/私聊 | 58 | 58 |  | pc/src/views/chatRoom/chatMain/components/RedpactList.vue |
| M | pc | 页面 | 聊天室/私聊 | 108 | 125 |  | pc/src/views/chatRoom/chatMain/components/aside.vue |
| M | pc | 页面 | 彩票/投注/开奖、聊天室/私聊 | 66 | 60 |  | pc/src/views/chatRoom/chatMain/components/chaseBetting.vue |
| M | pc | 页面 | 个人中心/账户、聊天室/私聊 | 35 | 6 |  | pc/src/views/chatRoom/chatMain/components/message-type/imageType.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 1129 | 941 |  | pc/src/views/chatRoom/chatMain/index.vue |
| M | pc | 页面 | 聊天室/私聊 | 149 | 140 |  | pc/src/views/chatRoom/chatMain/topNotice.vue |
| A | pc | 页面 | 彩票/投注/开奖、聊天室/私聊、主题/颜色/静态资源 | 133 | 0 |  | pc/src/views/chatRoom/chatRight/drawAlottery/css/ball.css |
| M | pc | 页面 | 彩票/投注/开奖、聊天室/私聊 | 163 | 147 |  | pc/src/views/chatRoom/chatRight/drawAlottery/lotteryHistory/history_ssc.vue |
| M | pc | 页面 | 彩票/投注/开奖、聊天室/私聊、主题/颜色/静态资源 | 1 | 1 |  | pc/src/views/chatRoom/chatRight/drawAlottery/lotteryNumber/ball.less |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 208 | 204 |  | pc/src/views/chatRoom/chatRight/index.vue |
| A | pc | 页面 | 聊天室/私聊、主题/颜色/静态资源 | 645 | 0 |  | pc/src/views/chatRoom/css/chat.css |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 440 | 419 |  | pc/src/views/chatRoom/index.vue |
| A | pc | 页面 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/views/css/test.css |
| M | pc | 页面 | 客服/反馈/帮助、活动/红包/推广/下载 | 1262 | 1183 |  | pc/src/views/feedbackActive/feedbackActive.vue |
| M | pc | 页面 | 未归类路径 | 82 | 91 |  | pc/src/views/game/game.vue |
| A | pc | 页面 | 未归类路径 | 100 | 0 |  | pc/src/views/game/gameCategory.vue |
| M | pc | 页面 | 未归类路径 | 85 | 41 |  | pc/src/views/game/gameList.vue |
| M | pc | 页面 | 首页/导航/版面 | 36 | 20 |  | pc/src/views/game/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 643 | 628 |  | pc/src/views/home/banner3d.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 59 | 39 |  | pc/src/views/home/fast_betting.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/home/hotlist.vue |
| M | pc | 页面 | 首页/导航/版面 | 44 | 28 |  | pc/src/views/home/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 121 | 110 |  | pc/src/views/home/infolist.vue |
| M | pc | 页面 | 首页/导航/版面 | 106 | 131 |  | pc/src/views/layout/child_modal/FloatBanner.vue |
| M | pc | 页面 | 首页/导航/版面 | 69 | 71 |  | pc/src/views/layout/child_modal/header.vue |
| M | pc | 页面 | 首页/导航/版面 | 38 | 37 |  | pc/src/views/layout/child_modal/header/headMenu.vue |
| M | pc | 页面 | 首页/导航/版面 | 486 | 453 |  | pc/src/views/layout/child_modal/header/nav.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 5 | 8 |  | pc/src/views/layout/child_modal/lottery_head.vue |
| M | pc | 页面 | 首页/导航/版面 | 152 | 127 |  | pc/src/views/layout/child_modal/newheader.vue |
| M | pc | 页面 | 首页/导航/版面 | 86 | 87 |  | pc/src/views/layout/child_modal/popupNotice.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/switchTemplate.vue |
| M | pc | 页面 | 首页/导航/版面 | 374 | 249 |  | pc/src/views/layout/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 2 |  | pc/src/views/layout/layout.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 261 | 272 |  | pc/src/views/login/loginMixin.js |
| M | pc | 页面 | 彩票/投注/开奖 | 60 | 51 |  | pc/src/views/lottery/item.vue |
| M | pc | 页面 | 登录/注册/验证码 | 30 | 33 |  | pc/src/views/password/password.vue |
| M | pc | 页面 | 个人中心/账户 | 58 | 28 |  | pc/src/views/personalCenter/child_modal/account/account.vue |
| M | pc | 页面 | 个人中心/账户 | 875 | 542 |  | pc/src/views/personalCenter/child_modal/account/aliPayAccount.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 766 | 716 |  | pc/src/views/personalCenter/child_modal/account/bankAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 795 | 651 |  | pc/src/views/personalCenter/child_modal/account/currencyAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 963 | 942 |  | pc/src/views/personalCenter/child_modal/account/material.vue |
| M | pc | 页面 | 个人中心/账户 | 774 | 715 |  | pc/src/views/personalCenter/child_modal/account/payAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 815 | 487 |  | pc/src/views/personalCenter/child_modal/account/weChatAccount.vue |
| M | pc | 页面 | 彩票/投注/开奖、个人中心/账户、代理/报表/团队 | 254 | 116 |  | pc/src/views/personalCenter/child_modal/agentBetting/agentBetting.vue |
| M | pc | 页面 | 个人中心/账户、代理/报表/团队 | 140 | 11 |  | pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue |
| M | pc | 页面 | 个人中心/账户、代理/报表/团队 | 132 | 54 |  | pc/src/views/personalCenter/child_modal/agentTrade/agentTrade.vue |
| M | pc | 页面 | 个人中心/账户 | 312 | 200 |  | pc/src/views/personalCenter/child_modal/creditConver/amount.vue |
| M | pc | 页面 | 个人中心/账户 | 72 | 38 |  | pc/src/views/personalCenter/child_modal/description/description.vue |
| M | pc | 页面 | 个人中心/账户 | 67 | 14 |  | pc/src/views/personalCenter/child_modal/expand/common/expand_me_info.vue |
| M | pc | 页面 | 个人中心/账户 | 157 | 139 |  | pc/src/views/personalCenter/child_modal/expand/expand_list.vue |
| M | pc | 页面 | 个人中心/账户 | 181 | 241 |  | pc/src/views/personalCenter/child_modal/expand/expand_me.vue |
| M | pc | 页面 | 首页/导航/版面、个人中心/账户 | 395 | 314 |  | pc/src/views/personalCenter/child_modal/freeCharge/index.vue |
| M | pc | 页面 | 首页/导航/版面、个人中心/账户 | 42 | 40 |  | pc/src/views/personalCenter/child_modal/index.js |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 745 | 624 |  | pc/src/views/personalCenter/child_modal/recharge/components/DigitalCurrency.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 109 | 82 |  | pc/src/views/personalCenter/child_modal/recharge/recharge.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 563 | 363 |  | pc/src/views/personalCenter/child_modal/recharge/step2.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 1 | 0 |  | pc/src/views/personalCenter/child_modal/recharge/step3.vue |
| M | pc | 页面 | 个人中心/账户 | 102 | 164 |  | pc/src/views/personalCenter/child_modal/record/record.vue |
| M | pc | 页面 | 首页/导航/版面、个人中心/账户、代理/报表/团队 | 455 | 382 |  | pc/src/views/personalCenter/child_modal/subReport/index.vue |
| A | pc | 页面 | 个人中心/账户 | 321 | 0 |  | pc/src/views/personalCenter/child_modal/takeFeeList/takeFeeList.vue |
| M | pc | 页面 | 个人中心/账户 | 79 | 84 |  | pc/src/views/personalCenter/child_modal/trade/trade.vue |
| M | pc | 页面 | 个人中心/账户 | 796 | 694 |  | pc/src/views/personalCenter/child_modal/userManage/userManage.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 364 | 285 |  | pc/src/views/personalCenter/child_modal/withdraw/aliPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 352 | 288 |  | pc/src/views/personalCenter/child_modal/withdraw/bankPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 424 | 296 |  | pc/src/views/personalCenter/child_modal/withdraw/cardPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 590 | 382 |  | pc/src/views/personalCenter/child_modal/withdraw/currencyPay.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 386 | 285 |  | pc/src/views/personalCenter/child_modal/withdraw/weChatPay.vue |
| M | pc | 页面 | 个人中心/账户 | 232 | 156 |  | pc/src/views/personalCenter/personalCenter.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/phoneBuy/index.vue |
| M | pc | 页面 | 未归类路径 | 159 | 110 |  | pc/src/views/phoneValid/phoneValid.vue |
| M | pc | 页面 | 活动/红包/推广/下载 | 405 | 329 |  | pc/src/views/redPacket/redPacket.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/register/index.vue |
| M | pc | 页面 | 登录/注册/验证码 | 105 | 145 |  | pc/src/views/register/register.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 568 | 492 |  | pc/src/views/register/registerMixin.js |
| M | pc | 页面 | 未归类路径 | 83 | 68 |  | pc/src/views/role/roleDetail.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 577 | 285 |  | pc/src/views/trend/child_vue/commonComponent/prizeRecord.vue |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/static/css/theme.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 8506 | 6089 |  | pc/static/css/theme.less |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/appsj.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/bg.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/by318.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/img_bg.png |
| M | pc | 其他 | 主题/颜色/静态资源 | 190 | 160 |  | pc/static/js/RongIMVoice-2.2.6.js |

## 生成依据

- 分支：`BY8359-JJYL`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...BY8359-JJYL -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
