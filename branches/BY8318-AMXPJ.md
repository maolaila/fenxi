# 商户分支功能地图：BY8318-AMXPJ

- 生成时间：2026-06-16 14:08:44 +0900
- 来源：远端分支 `origin/BY8318-AMXPJ`
- 分支提交：`435d7c0b6` / 2026-06-11 15:51:19 +0900 / fix: localize aliyun captcha trigger text
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：213 个；涉及功能域：首页/导航/版面、主题/颜色/静态资源、接口/状态/工具、登录/注册/验证码、未归类路径、个人中心/账户、构建/配置、彩票/投注/开奖。
- 其他路径差异文件：2 个；通常是根配置、文档或非端目录，需要按完整清单核对。
- 扫描到新增/变更颜色值：#fff, #ffffff, #0000, #000000, #e4393c, #000, #ddc17c, #ebf2fb, #131522, #aa8743, #333, #f5f9ff, #795d1b, #3be6e5, #1f94ff, #f5f3a9, #b79954, #eee, #f3f3f3, #f7df99。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 主题/颜色/静态资源 | 主题色、logo、icon、背景图、静态 CSS 是否匹配商户。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 登录/注册/验证码 | 登录、注册、忘记密码、验证码弹窗、阿里云滑块。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 构建/配置 | 构建命令、依赖、环境配置、输出路径。 |
| 彩票/投注/开奖 | 购彩页、投注面板、彩种列表、开奖展示、走势图。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 199 | 48842 | 15095 | pc/.gitignore<br>pc/config/index.js<br>pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/configstatic/pc/images/logo-icon.png<br>pc/configstatic/pc/images/logo.gif<br>pc/configstatic/pc/images/logo.png<br>...另 191 个路径见完整清单 |
| h5-v2 | 14 | 884 | 50 | h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/main.js<br>h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/src/utils/plugin/plugin.js<br>...另 6 个路径见完整清单 |
| 其他 | 2 | 72 | 0 | .gitignore<br>docs/merchant-frontend-branches.md |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 77 | h5-v2、pc | h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/views/free-play/index.vue<br>pc/config/index.js<br>pc/index.html<br>pc/src/assets/images-v10/home/certified_4.png<br>pc/src/assets/images/photo_2023-11-29_22-03-32.jpg<br>pc/src/assets/images/photo_2023-11-29_22-03-39.jpg<br>...另 69 个路径见完整清单 |
| 主题/颜色/静态资源 | 67 | pc | pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/configstatic/pc/images/logo-icon.png<br>pc/configstatic/pc/images/logo.gif<br>pc/configstatic/pc/images/logo.png<br>pc/configstatic/pc/images/logo/logo.png<br>pc/configstatic/pc/images/qrbg.png<br>...另 59 个路径见完整清单 |
| 接口/状态/工具 | 29 | h5-v2、pc | h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/src/utils/plugin/plugin.js<br>h5-v2/src/utils/request.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/register/registerMixin.js<br>...另 21 个路径见完整清单 |
| 登录/注册/验证码 | 29 | h5-v2、pc | h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/register/registerMixin.js<br>pc/src/assets/images-v11/loginBg.png<br>pc/src/components/login_dlg.vue<br>pc/src/mixins/register.js<br>pc/src/utils/aliyunCaptcha.js<br>pc/src/views-v10/login/index.vue<br>...另 21 个路径见完整清单 |
| 未归类路径 | 26 | h5-v2、pc、其他 | .gitignore<br>docs/merchant-frontend-branches.md<br>h5-v2/src/main.js<br>pc/.gitignore<br>pc/src/App.vue<br>pc/src/components/tryPlay.vue<br>pc/src/lang/zh_CN.js<br>pc/src/main.js<br>...另 18 个路径见完整清单 |
| 个人中心/账户 | 17 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue<br>pc/src/api/user.js<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/personalCenter/child_modal/account/account.vue<br>pc/src/views/personalCenter/child_modal/account/currencyAccount.vue<br>pc/src/views/personalCenter/child_modal/account/material.vue<br>pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue<br>...另 9 个路径见完整清单 |
| 构建/配置 | 13 | h5-v2、pc | h5-v2/src/utils/getSysConfig.js<br>pc/config/index.js<br>pc/configstatic/pc/control/control.js<br>pc/configstatic/pc/images/favicon.ico<br>pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/configstatic/pc/images/logo-icon.png<br>pc/configstatic/pc/images/logo.gif<br>pc/configstatic/pc/images/logo.png<br>...另 5 个路径见完整清单 |
| 彩票/投注/开奖 | 8 | pc | pc/src/views-v11/game/components/GameBall.vue<br>pc/src/views-v11/home/fast_betting.vue<br>pc/src/views-v11/layout/child_modal/left_lottery.vue<br>pc/src/views-v11/layout/child_modal/lottery_head.vue<br>pc/src/views/buyLottery/child_modal/shared/children_modal/TabMenu.vue<br>pc/src/views/buyLottery/css/test.css<br>pc/src/views/buyLottery/lottery_head.vue<br>pc/src/views/layout/child_modal/lottery_head.vue |
| 聊天室/私聊 | 7 | pc | pc/src/assets/images/chat/cptt.png<br>pc/src/views/chatRoom/chatLeft/index.vue<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/chatRoom/chatMain/chatFeature.vue<br>pc/src/views/chatRoom/chatMain/chatPrivate/index.vue<br>pc/src/views/chatRoom/chatMain/index.vue<br>pc/src/views/chatRoom/chatMain/topNotice.vue |
| 活动/红包/推广/下载 | 4 | pc | pc/configstatic/pc/images/ic_promotion_logo.png<br>pc/src/assets/images-v10/phone-buy/APPdownload_image.png<br>pc/src/views-v11/active/index.vue<br>pc/src/views/active/index.vue |
| 资金/充值/提现 | 3 | pc | pc/src/views/personalCenter/child_modal/recharge/recharge.vue<br>pc/src/views/personalCenter/child_modal/recharge/step2.vue<br>pc/src/views/personalCenter/child_modal/withdraw/currencyPay.vue |
| 代理/报表/团队 | 2 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue<br>pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 120 |
| 图片资源 | 39 |
| 主题样式 | 15 |
| 构建配置 | 12 |
| 其他 | 10 |
| 工具/混入 | 10 |
| 组件 | 4 |
| 状态 | 4 |
| 接口 | 1 |

## 主题色/展示资源线索

- 颜色值：#fff, #ffffff, #0000, #000000, #e4393c, #000, #ddc17c, #ebf2fb, #131522, #aa8743, #333, #f5f9ff, #795d1b, #3be6e5, #1f94ff, #f5f3a9, #b79954, #eee, #f3f3f3, #f7df99, #4c8bfe26, #e6de95, #666, #d1d4f6, #ccc, #313131, #1f6efe, #26252b, #33333a, #ff7614

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/control/control.js |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/favicon.ico |
| pc | 构建配置 | 活动/红包/推广/下载、主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/ic_promotion_logo.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | D | pc/configstatic/pc/images/logo-icon.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/logo.gif |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/logo.png |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/images/logo/logo.png |
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
| pc | 页面 | 主题/颜色/静态资源 | A | pc/src/views/css/test.css |
| pc | 主题样式 | 主题/颜色/静态资源 | A | pc/static/css/theme.css |
| pc | 主题样式 | 主题/颜色/静态资源 | M | pc/static/css/theme.less |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/static/images/appsj.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/static/images/img_bg.png |

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 213 | 0 | 215 | ac5ce626bae8 | 2024-01-25 14:52:34 +0800 |
| origin/BY-Demo | 348 | 0 | 350 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 3945 | 3 | 3951 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 435d7c0b6 | 2026-06-11 | fix: localize aliyun captcha trigger text |
| 6b6f91c32 | 2026-06-06 | fix: reset pc aliyun captcha lifecycle |
| 77bec6359 | 2026-06-05 | fix: handle aliyun captcha close in h5 requests |
| d50dd1067 | 2026-06-05 | fix: release aliyun captcha state after h5 close |
| 9f47ab283 | 2026-06-05 | fix: preserve aliyun captcha close lifecycle |
| 0720e482f | 2026-06-05 | fix: allow h5 aliyun captcha reopen after close |
| a48eb7a83 | 2026-06-05 | fix: stabilize h5 aliyun captcha touch handling |
| 4a86bb105 | 2026-06-05 | fix: improve h5 aliyun captcha popup recovery |
| 1ac6f213b | 2026-06-05 | fix: enforce aliyun captcha toggle fallback |
| 7d241e541 | 2026-06-05 | fix: keep legacy sms flow when aliyun captcha is off |
| a9bed9d94 | 2026-06-04 | fix: align free play captcha flow with aliyun |
| ad6b4628c | 2026-06-04 | fix: continue login after aliyun popup success |
| 4269e50f6 | 2026-06-04 | fix: guard all auth captcha requests |
| eabf9afa1 | 2026-06-04 | feat: replace yidun captcha with aliyun captcha |
| 691c068d1 | 2024-03-28 | 分享页背景更换 |
| 839e215da | 2024-03-16 | LOGO |
| 931561208 | 2024-03-15 | 首页LOGO替换 |
| 0f46fda16 | 2024-03-12 | LOGO更换 |
| 4e471683f | 2024-03-11 | 澳门新葡京 |
| 5b0d649af | 2024-03-11 | 彩客网 |
| 8da992d2a | 2024-03-11 | 注册页 |
| 90da40f9c | 2024-03-11 | 注册页修改 |
| 5e6a869b1 | 2024-03-09 | less优化，及额度转化取消点击后需要30秒才能再点击 |
| e1ab94d5c | 2024-03-08 | 数值货币验证手机号 |
| 33001b5db | 2024-03-08 | 颜色调整 |
| 8cfe8805f | 2024-03-08 | 颜色调整 |
| d2889f62b | 2024-03-08 | 取消无效文件跟踪 |
| afc83a9a9 | 2024-03-08 | UI资源依赖版本控制刷新 |
| a075e1bf9 | 2024-03-08 | pc异常 |
| 4e3d4389c | 2024-03-08 | pc异常 |

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
| M | pc | 其他 | 首页/导航/版面、构建/配置 | 6 | 2 |  | pc/config/index.js |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | 123 | 78 |  | pc/configstatic/pc/control/control.js |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/favicon.ico |
| M | pc | 构建配置 | 活动/红包/推广/下载、主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/ic_promotion_logo.png |
| D | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo-icon.png |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo.gif |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo.png |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/logo/logo.png |
| A | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | pc/configstatic/pc/images/qrbg.png |
| M | pc | 其他 | 首页/导航/版面 | 41 | 44 |  | pc/index.html |
| M | pc | 构建配置 | 构建/配置 | 1 | 1 |  | pc/package.json |
| M | pc | 其他 | 未归类路径 | 2 | 1 |  | pc/src/App.vue |
| M | pc | 接口 | 个人中心/账户、接口/状态/工具 | 20 | 9 |  | pc/src/api/user.js |
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
| M | pc | 组件 | 首页/导航/版面 | 36 | 8 |  | pc/src/components/PhoneBindDialog/index.vue |
| M | pc | 组件 | 登录/注册/验证码 | 2 | 2 |  | pc/src/components/login_dlg.vue |
| M | pc | 组件 | 未归类路径 | 146 | 1 |  | pc/src/components/tryPlay.vue |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 1 |  | pc/src/constant/theme.js |
| M | pc | 其他 | 未归类路径 | 6 | 1 |  | pc/src/lang/zh_CN.js |
| M | pc | 其他 | 未归类路径 | 33 | 29 |  | pc/src/main.js |
| M | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 83 | 1 |  | pc/src/mixins/register.js |
| M | pc | 状态 | 首页/导航/版面、接口/状态/工具 | 241 | 238 |  | pc/src/store/index.js |
| M | pc | 状态 | 接口/状态/工具 | 111 | 100 |  | pc/src/store/modules/sysDict.js |
| M | pc | 状态 | 主题/颜色/静态资源、接口/状态/工具 | 7 | 55 |  | pc/src/store/modules/theme.js |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 2 |  | pc/src/styles/backup/v10-app-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 1 | 1 |  | pc/src/styles/backup/v11-app-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 7 | 7 |  | pc/src/styles/backup/v11-iview-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 2 | 2 |  | pc/src/styles/backup/v3-iview-var.less |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/styles/css/iview-var.css |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/styles/css/v11-iview-var.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 5082 | 2152 |  | pc/src/styles/theme/components/base.less |
| M | pc | 主题样式 | 首页/导航/版面、主题/颜色/静态资源 | 135 | 105 |  | pc/src/styles/theme/components/v10-layout-theme-dark.less |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 6481 | 0 |  | pc/src/styles/theme/css/base.css |
| A | pc | 主题样式 | 首页/导航/版面、主题/颜色/静态资源 | 7038 | 0 |  | pc/src/styles/theme/css/v10-layout-theme-dark.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 7 | 7 |  | pc/src/styles/theme/iview-var.less |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 1 | 1 |  | pc/src/styles/theme/theme.less |
| A | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 610 | 0 |  | pc/src/utils/aliyunCaptcha.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 3 | 3 |  | pc/src/utils/diswatch.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | pc/src/utils/getSysConfig.js |
| A | pc | 工具/混入 | 主题/颜色/静态资源、接口/状态/工具 | 89 | 0 |  | pc/src/utils/less.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 6 | 0 |  | pc/src/utils/plugin/plugin.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 162 | 121 |  | pc/src/utils/request.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 70 | 60 |  | pc/src/utils/tplConfig.js |
| M | pc | 页面 | 首页/导航/版面 | 50 | 39 |  | pc/src/views-v10/home/components/HomeHotGames.vue |
| M | pc | 页面 | 首页/导航/版面 | 18 | 15 |  | pc/src/views-v10/home/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 100 | 148 |  | pc/src/views-v10/layout/SlideQuick.vue |
| A | pc | 页面 | 首页/导航/版面 | 378 | 0 |  | pc/src/views-v10/layout/SlideQuick12.vue |
| M | pc | 页面 | 首页/导航/版面 | 5 | 1 |  | pc/src/views-v10/layout/components/BaseFooter.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v10/layout/components/BaseHeader.vue |
| M | pc | 页面 | 首页/导航/版面 | 41 | 50 |  | pc/src/views-v10/layout/popupNotice.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v10/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 91 | 84 |  | pc/src/views-v10/register/index.vue |
| A | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 445 | 0 |  | pc/src/views-v11/active/index.vue |
| A | pc | 页面 | 未归类路径 | 55 | 0 |  | pc/src/views-v11/game/components/GameAmountConvertDialog.vue |
| A | pc | 页面 | 彩票/投注/开奖 | 71 | 0 |  | pc/src/views-v11/game/components/GameBall.vue |
| A | pc | 页面 | 未归类路径 | 71 | 0 |  | pc/src/views-v11/game/components/GameFish.vue |
| A | pc | 页面 | 未归类路径 | 221 | 0 |  | pc/src/views-v11/game/components/GameItem.vue |
| A | pc | 页面 | 未归类路径 | 268 | 0 |  | pc/src/views-v11/game/components/GameList.vue |
| A | pc | 页面 | 首页/导航/版面 | 186 | 0 |  | pc/src/views-v11/game/components/GameNavs.vue |
| A | pc | 页面 | 未归类路径 | 70 | 0 |  | pc/src/views-v11/game/components/GamePoker.vue |
| A | pc | 页面 | 未归类路径 | 37 | 0 |  | pc/src/views-v11/game/components/GameSearchInput.vue |
| A | pc | 页面 | 未归类路径 | 71 | 0 |  | pc/src/views-v11/game/components/GameSlot.vue |
| A | pc | 页面 | 未归类路径 | 71 | 0 |  | pc/src/views-v11/game/components/GameSports.vue |
| A | pc | 页面 | 未归类路径 | 279 | 0 |  | pc/src/views-v11/game/components/GameSportsTabs.vue |
| A | pc | 页面 | 未归类路径 | 216 | 0 |  | pc/src/views-v11/game/components/GameTabs.vue |
| A | pc | 页面 | 未归类路径 | 71 | 0 |  | pc/src/views-v11/game/components/GameVideo.vue |
| A | pc | 页面 | 未归类路径 | 99 | 0 |  | pc/src/views-v11/game/components/NumCard.vue |
| A | pc | 页面 | 未归类路径 | 103 | 0 |  | pc/src/views-v11/game/components/NumCardItem.vue |
| A | pc | 页面 | 接口/状态/工具 | 222 | 0 |  | pc/src/views-v11/game/components/gameMixin.js |
| A | pc | 页面 | 首页/导航/版面 | 61 | 0 |  | pc/src/views-v11/game/index.vue |
| A | pc | 页面 | 首页/导航/版面 | 157 | 0 |  | pc/src/views-v11/home/BannerLee.vue |
| A | pc | 页面 | 首页/导航/版面 | 649 | 0 |  | pc/src/views-v11/home/ListLee.vue |
| A | pc | 页面 | 首页/导航/版面 | 131 | 0 |  | pc/src/views-v11/home/banner.vue |
| A | pc | 页面 | 首页/导航/版面 | 727 | 0 |  | pc/src/views-v11/home/banner3d.vue |
| A | pc | 页面 | 首页/导航/版面 | 145 | 0 |  | pc/src/views-v11/home/down_time.vue |
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 406 | 0 |  | pc/src/views-v11/home/fast_betting.vue |
| A | pc | 页面 | 首页/导航/版面 | 91 | 0 |  | pc/src/views-v11/home/home.vue |
| A | pc | 页面 | 首页/导航/版面 | 88 | 0 |  | pc/src/views-v11/home/hotlist.vue |
| A | pc | 页面 | 首页/导航/版面 | 644 | 0 |  | pc/src/views-v11/home/infolist.vue |
| A | pc | 页面 | 首页/导航/版面 | 155 | 0 |  | pc/src/views-v11/home/popup_notice.vue |
| A | pc | 页面 | 首页/导航/版面 | 271 | 0 |  | pc/src/views-v11/home/qr_notice.vue |
| A | pc | 页面 | 首页/导航/版面 | 508 | 0 |  | pc/src/views-v11/layout/SlideQuick12.vue |
| A | pc | 页面 | 首页/导航/版面 | 36 | 0 |  | pc/src/views-v11/layout/child_modal/components/ConfirmFree.vue |
| A | pc | 页面 | 首页/导航/版面 | 183 | 0 |  | pc/src/views-v11/layout/child_modal/footer12.vue |
| A | pc | 页面 | 首页/导航/版面 | 267 | 0 |  | pc/src/views-v11/layout/child_modal/header.vue |
| A | pc | 页面 | 首页/导航/版面 | 32 | 0 |  | pc/src/views-v11/layout/child_modal/header/bulb.vue |
| A | pc | 页面 | 首页/导航/版面、主题/颜色/静态资源 | 36 | 0 |  | pc/src/views-v11/layout/child_modal/header/closeIcon.vue |
| A | pc | 页面 | 首页/导航/版面 | 53 | 0 |  | pc/src/views-v11/layout/child_modal/header/headMenu.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 344 | 0 |  | pc/src/views-v11/layout/child_modal/header/loginRegister.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 410 | 0 |  | pc/src/views-v11/layout/child_modal/header/logined.vue |
| A | pc | 页面 | 首页/导航/版面 | 484 | 0 |  | pc/src/views-v11/layout/child_modal/header/nav.vue |
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 490 | 0 |  | pc/src/views-v11/layout/child_modal/left_lottery.vue |
| A | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 370 | 0 |  | pc/src/views-v11/layout/child_modal/lottery_head.vue |
| A | pc | 页面 | 首页/导航/版面 | 194 | 0 |  | pc/src/views-v11/layout/child_modal/newheader.vue |
| A | pc | 页面 | 首页/导航/版面 | 168 | 0 |  | pc/src/views-v11/layout/layout.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 166 | 0 |  | pc/src/views-v11/login/index.vue |
| A | pc | 页面 | 首页/导航/版面 | 137 | 0 |  | pc/src/views-v11/phone-buy/HomeQrcode.vue |
| A | pc | 页面 | 未归类路径 | 441 | 0 |  | pc/src/views-v11/phone-buy/RedpactList.vue |
| A | pc | 页面 | 首页/导航/版面 | 231 | 0 |  | pc/src/views-v11/phone-buy/index.vue |
| A | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 368 | 0 |  | pc/src/views-v11/register/index.vue |
| A | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 596 | 0 |  | pc/src/views-v11/register/registerMixin.js |
| M | pc | 页面 | 接口/状态/工具 | 269 | 34 |  | pc/src/views-v2/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v2/common/module_vue/try_play.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v3/common/module_vue/header/loginRegister.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v3/content/login/login.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v3/content/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码 | 2 | 2 |  | pc/src/views-v3/content/register/register.vue |
| M | pc | 页面 | 接口/状态/工具 | 269 | 34 |  | pc/src/views-v4/common/module_vue/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v4/common/module_vue/try_play.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v5/components/headerLoginBox.vue |
| M | pc | 页面 | 接口/状态/工具 | 269 | 34 |  | pc/src/views-v5/components/headerMixin.js |
| M | pc | 页面 | 未归类路径 | 32 | 8 |  | pc/src/views-v5/components/try_play.vue |
| M | pc | 页面 | 登录/注册/验证码 | 1 | 1 |  | pc/src/views-v5/login/login.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 1 | 1 |  | pc/src/views-v5/login/loginMixin.js |
| M | pc | 页面 | 登录/注册/验证码 | 2 | 2 |  | pc/src/views-v5/register/register.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v6/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v6/login/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views-v8/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v8/login/index.vue |
| M | pc | 页面 | 首页/导航/版面、活动/红包/推广/下载 | 22 | 20 |  | pc/src/views/active/index.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 18 | 18 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/TabMenu.vue |
| A | pc | 页面 | 彩票/投注/开奖、主题/颜色/静态资源 | 0 | 0 |  | pc/src/views/buyLottery/css/test.css |
| M | pc | 页面 | 彩票/投注/开奖 | 47 | 51 |  | pc/src/views/buyLottery/lottery_head.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 38 | 68 |  | pc/src/views/chatRoom/chatLeft/index.vue |
| M | pc | 页面 | 个人中心/账户、聊天室/私聊 | 122 | 125 |  | pc/src/views/chatRoom/chatLeft/messageList.vue |
| M | pc | 页面 | 聊天室/私聊 | 468 | 438 |  | pc/src/views/chatRoom/chatMain/chatFeature.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 368 | 319 |  | pc/src/views/chatRoom/chatMain/chatPrivate/index.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 1070 | 937 |  | pc/src/views/chatRoom/chatMain/index.vue |
| M | pc | 页面 | 聊天室/私聊 | 149 | 140 |  | pc/src/views/chatRoom/chatMain/topNotice.vue |
| A | pc | 页面 | 主题/颜色/静态资源 | 0 | 0 |  | pc/src/views/css/test.css |
| M | pc | 页面 | 未归类路径 | 23 | 2 |  | pc/src/views/freeTrial/freeTrial.vue |
| M | pc | 页面 | 首页/导航/版面 | 44 | 28 |  | pc/src/views/home/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 69 | 71 |  | pc/src/views/layout/child_modal/header.vue |
| M | pc | 页面 | 首页/导航/版面 | 38 | 37 |  | pc/src/views/layout/child_modal/header/headMenu.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/header/loginRegister.vue |
| M | pc | 页面 | 首页/导航/版面、彩票/投注/开奖 | 4 | 7 |  | pc/src/views/layout/child_modal/lottery_head.vue |
| M | pc | 页面 | 首页/导航/版面 | 129 | 129 |  | pc/src/views/layout/child_modal/newheader.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/switchTemplate.vue |
| M | pc | 页面 | 首页/导航/版面 | 306 | 245 |  | pc/src/views/layout/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 0 | 1 |  | pc/src/views/layout/layout.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/login/index.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 68 | 11 |  | pc/src/views/login/loginMixin.js |
| M | pc | 页面 | 个人中心/账户 | 50 | 32 |  | pc/src/views/personalCenter/child_modal/account/account.vue |
| M | pc | 页面 | 个人中心/账户 | 759 | 651 |  | pc/src/views/personalCenter/child_modal/account/currencyAccount.vue |
| M | pc | 页面 | 个人中心/账户 | 947 | 959 |  | pc/src/views/personalCenter/child_modal/account/material.vue |
| M | pc | 页面 | 个人中心/账户、代理/报表/团队 | 6 | 5 |  | pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue |
| M | pc | 页面 | 个人中心/账户 | 302 | 200 |  | pc/src/views/personalCenter/child_modal/creditConver/amount.vue |
| M | pc | 页面 | 个人中心/账户 | 57 | 12 |  | pc/src/views/personalCenter/child_modal/expand/common/expand_me_info.vue |
| M | pc | 页面 | 个人中心/账户 | 118 | 102 |  | pc/src/views/personalCenter/child_modal/expand/expand_me.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 114 | 80 |  | pc/src/views/personalCenter/child_modal/recharge/recharge.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 448 | 360 |  | pc/src/views/personalCenter/child_modal/recharge/step2.vue |
| M | pc | 页面 | 个人中心/账户 | 79 | 84 |  | pc/src/views/personalCenter/child_modal/trade/trade.vue |
| M | pc | 页面 | 个人中心/账户 | 1 | 1 |  | pc/src/views/personalCenter/child_modal/userManage/userManage.vue |
| M | pc | 页面 | 资金/充值/提现、个人中心/账户 | 489 | 369 |  | pc/src/views/personalCenter/child_modal/withdraw/currencyPay.vue |
| M | pc | 页面 | 个人中心/账户 | 197 | 154 |  | pc/src/views/personalCenter/personalCenter.vue |
| M | pc | 页面 | 首页/导航/版面 | 1 | 1 |  | pc/src/views/phoneBuy/index.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/register/index.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 277 | 75 |  | pc/src/views/register/registerMixin.js |
| A | pc | 主题样式 | 主题/颜色/静态资源 | 0 | 0 |  | pc/static/css/theme.css |
| M | pc | 主题样式 | 主题/颜色/静态资源 | 8254 | 5846 |  | pc/static/css/theme.less |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/appsj.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/static/images/img_bg.png |

## 生成依据

- 分支：`origin/BY8318-AMXPJ`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8318-AMXPJ -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
