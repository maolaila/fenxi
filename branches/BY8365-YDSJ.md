# 商户分支功能地图：BY8365-YDSJ

- 生成时间：2026-08-03 16:32:48 +0900
- 来源：远端分支 `origin/BY8365-YDSJ`
- 分支提交：`1276afdfd` / 2026-08-03 16:32:19 +0900 / fix: 修复8365反馈图标和聊天入口
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：37 个；涉及功能域：首页/导航/版面、主题/颜色/静态资源、构建/配置、接口/状态/工具、个人中心/账户、彩票/投注/开奖、资金/充值/提现、未归类路径。
- 未在变更行中扫描到明确的十六进制颜色值。

## 手工补充记录

- 2026-08-10：H5“立即下载”补齐下载地址竞态兜底：已有 CMS 地址时优先使用；CMS 尚未回填但 APP 接口地址已缓存时立即使用缓存；两者都未就绪时依次补拉 CMS 与 APP 接口。下载改为当前页跳转，避免 iOS Safari 拦截异步新窗口；无可用地址时显示提示。代码提交：`5d971dc10`。影响路径：`h5-v2/src/views/home/go_app.vue`、`h5-v2/src/components/dappandroid/index.vue`。
- 2026-08-10：H5 公司入款的数字货币充值下拉将汇率文案从“1+通道名”调整为“通道名+1”，例如“当前汇率：云顶世界财务1 = 6.74元”。仅调整展示顺序，不修改汇率、金额换算、通道选择或充值提交。代码提交：`5d971dc10`。影响路径：`h5-v2/src/views/personal-center/child_modal/recharge_list/components/digital-currency-tab.vue`。
- 2026-08-07：H5 偏好设置隐藏“红包”“聊天室弹幕”“私信通知”“彩票头条”四个开关，保留“高级投注模式”“中奖通知”“购彩助手”。仅隐藏设置入口，不修改已有 localStorage/Vuex 偏好状态及底层通知功能；该路由组件由各 H5 版面共用。代码提交：`895076192`。影响路径：`h5-v2/src/views/personal-center/child_modal/mysetting/personal_hobby/personal_hobby.vue`。
- 2026-08-04：PC 数字货币提现申请页新增“实出金额”，仅在手续费实际生效时展示，计算口径与 H5 一致。代码提交：`7330d39d6`。影响路径：`pc/src/views/personalCenter/child_modal/withdraw/currencyPay.vue`。详见 [`../pc/manual-BY8365-YDSJ-withdraw-actual-amount-2026-08-03.md`](../pc/manual-BY8365-YDSJ-withdraw-actual-amount-2026-08-03.md)。
- 2026-08-04：H5 views9 底部导航按 `CHAT_TAB` 切换理财图标：值为 `1` 时保留五项导航和原中间大图 `home/licai.png`；值为 `0` 时隐藏聊天、使用四项导航，理财固定使用托手圆形人民币样式的小图 `home/icon_licai_inactive.png`，跳转前后不切换激活图。小图布局占位与其他导航图标一致为 `36×36`，仅图像视觉放大 `15%`，不挤占文案和间隔；大图模式不受影响。代码提交：`5ec577e7a`、`f2eae066f`、`9c5bf74d3`、`f03d318df`。影响路径：`h5-v2/src/views9/layout/layout.vue`、`h5-v2/src/assets/images/home/icon_licai_inactive.png`。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 主题/颜色/静态资源 | 主题色、logo、icon、背景图、静态 CSS 是否匹配商户。 |
| 构建/配置 | 构建命令、依赖、环境配置、输出路径。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 彩票/投注/开奖 | 购彩页、投注面板、彩种列表、开奖展示、走势图。 |
| 资金/充值/提现 | 充值、提现、银行卡/USDT 绑定、余额宝/借贷、金额转换记录。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 6 | 12 | 10 | pc/configstatic/pc/control/control.js<br>pc/src/components/Longqueue/long-helper/longHelperList.vue<br>pc/src/components/headMenu.vue<br>pc/src/store/modules/theme.js<br>pc/src/views-v3/layout/SlideQuick.vue<br>pc/src/views/buyLottery/child_modal/shared/children_modal/result_page.vue |
| h5-v2 | 31 | 254 | 84 | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/public/configstatic/h5/images/logo.png<br>h5-v2/public/configstatic/h5/images/mb-logo-white.png<br>h5-v2/public/configstatic/h5/images/mb-logo.png<br>h5-v2/src/assets/images/home/licai.png<br>h5-v2/src/components/dragon/dragon-body/dragonList.vue<br>h5-v2/src/store/modules/theme.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>...另 23 个路径见完整清单 |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 13 | h5-v2、pc | h5-v2/src/assets/images/home/licai.png<br>h5-v2/src/views/chat/chat/game/balls/index.js<br>h5-v2/src/views/home/go_app.vue<br>h5-v2/src/views2/home/go_app.vue<br>h5-v2/src/views2/home/header.vue<br>h5-v2/src/views5/home/header.vue<br>h5-v2/src/views6/home/go_app.vue<br>h5-v2/src/views7/home/go_app.vue<br>...另 5 个路径见完整清单 |
| 主题/颜色/静态资源 | 8 | h5-v2、pc | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/public/configstatic/h5/images/logo.png<br>h5-v2/public/configstatic/h5/images/mb-logo-white.png<br>h5-v2/public/configstatic/h5/images/mb-logo.png<br>h5-v2/src/assets/images/home/licai.png<br>h5-v2/src/store/modules/theme.js<br>pc/configstatic/pc/control/control.js<br>pc/src/store/modules/theme.js |
| 构建/配置 | 5 | h5-v2、pc | h5-v2/public/configstatic/h5/control/control.js<br>h5-v2/public/configstatic/h5/images/logo.png<br>h5-v2/public/configstatic/h5/images/mb-logo-white.png<br>h5-v2/public/configstatic/h5/images/mb-logo.png<br>pc/configstatic/pc/control/control.js |
| 接口/状态/工具 | 5 | h5-v2、pc | h5-v2/src/store/modules/theme.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/const.js<br>h5-v2/src/views/login/loginMixin.js<br>pc/src/store/modules/theme.js |
| 个人中心/账户 | 5 | h5-v2 | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/mysetting.vue<br>h5-v2/src/views/personal-center/child_modal/takefee_list/currencyPay.vue<br>h5-v2/src/views9/personal-center/personal-center.vue |
| 彩票/投注/开奖 | 4 | h5-v2、pc | h5-v2/src/views/buy-lottery/child_modal/balls/share/share.vue<br>h5-v2/src/views/buy-lottery/child_modal/setSImple/setBottom.vue<br>h5-v2/src/views/chat/chat/game/balls/index.js<br>pc/src/views/buyLottery/child_modal/shared/children_modal/result_page.vue |
| 资金/充值/提现 | 3 | h5-v2 | h5-v2/src/views/chat/withdrawChat/withdrawChat.vue<br>h5-v2/src/views3/fund/components/withdrawal.vue<br>h5-v2/src/views4/fund/components/withdrawal.vue |
| 未归类路径 | 2 | h5-v2 | h5-v2/src/components/dragon/dragon-body/dragonList.vue<br>h5-v2/src/views/giftCenter/components/topData.vue |
| 登录/注册/验证码 | 2 | h5-v2 | h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/views/login/loginMixin.js |
| 聊天室/私聊 | 2 | h5-v2 | h5-v2/src/views/chat/chat/game/balls/index.js<br>h5-v2/src/views/chat/withdrawChat/withdrawChat.vue |
| 代理/报表/团队 | 2 | h5-v2 | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue |
| 客服/反馈/帮助 | 1 | pc | pc/src/components/Longqueue/long-helper/longHelperList.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 24 |
| 构建配置 | 5 |
| 组件 | 3 |
| 状态 | 2 |
| 工具/混入 | 2 |
| 图片资源 | 1 |

## 主题色/展示资源线索

- 颜色值：无明确十六进制颜色值。

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | h5-v2/public/configstatic/h5/control/control.js |
| h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | h5-v2/public/configstatic/h5/images/logo.png |
| h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | A | h5-v2/public/configstatic/h5/images/mb-logo-white.png |
| h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | h5-v2/public/configstatic/h5/images/mb-logo.png |
| h5-v2 | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | A | h5-v2/src/assets/images/home/licai.png |
| h5-v2 | 状态 | 主题/颜色/静态资源、接口/状态/工具 | M | h5-v2/src/store/modules/theme.js |
| pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | M | pc/configstatic/pc/control/control.js |
| pc | 状态 | 主题/颜色/静态资源、接口/状态/工具 | M | pc/src/store/modules/theme.js |

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 37 | 0 | 37 | 7ed4116590bb | 2026-07-27 11:01:55 +0900 |
| origin/BY-Demo | 977 | 0 | 982 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 4210 | 3 | 4219 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 1276afdfd | 2026-08-03 | fix: 修复8365反馈图标和聊天入口 |
| e44c09ee4 | 2026-08-03 | 实出金额 |
| 635059659 | 2026-08-01 | 图标 |
| 325cb3ccc | 2026-07-29 | 投注金额默认改为1 |
| 71e5f5bd4 | 2026-07-29 | 隐藏代理说明 H5端  🔥分享二维码 赚返佣拿抽成   改成  🔥分享链接 赚返佣拿抽成 H5端   提现申请页面 额外增加一栏 在有设置手续费的情况下  展示提现金额《实出金额》 H5端    个人中心，【签到】 和 【礼包中心】 |
| 33fe9f847 | 2026-07-29 | 去掉更换主题颜色 读取模板配置文件刷新不受影响 |
| e4ee46961 | 2026-07-28 | 娱乐城风格 |
| dce7463ba | 2026-07-28 | 苹果手机不能下拉 |
| f8a59818d | 2026-07-28 | 顶部logo |
| 839aa7f96 | 2026-07-28 | 365 bug |
| 7f2a675bd | 2026-07-28 | 365bug |
| ced9859ba | 2026-07-27 | 预设投注 默认1元每注 |
| e7e7fa58c | 2026-07-27 | 8365云顶世界 需求 |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M | h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | 3 | 3 |  | h5-v2/public/configstatic/h5/control/control.js |
| M | h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | h5-v2/public/configstatic/h5/images/logo.png |
| A | h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | h5-v2/public/configstatic/h5/images/mb-logo-white.png |
| M | h5-v2 | 构建配置 | 主题/颜色/静态资源、构建/配置 | - | - |  | h5-v2/public/configstatic/h5/images/mb-logo.png |
| A | h5-v2 | 图片资源 | 首页/导航/版面、主题/颜色/静态资源 | - | - |  | h5-v2/src/assets/images/home/licai.png |
| M | h5-v2 | 组件 | 未归类路径 | 1 | 1 |  | h5-v2/src/components/dragon/dragon-body/dragonList.vue |
| M | h5-v2 | 状态 | 主题/颜色/静态资源、接口/状态/工具 | 1 | 1 |  | h5-v2/src/store/modules/theme.js |
| M | h5-v2 | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 4 | 2 |  | h5-v2/src/utils/aliyunCaptcha.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 9 | 14 |  | h5-v2/src/utils/const.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 1 | 1 |  | h5-v2/src/views/buy-lottery/child_modal/balls/share/share.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 21 | 7 |  | h5-v2/src/views/buy-lottery/child_modal/setSImple/setBottom.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、彩票/投注/开奖、聊天室/私聊 | 1 | 1 |  | h5-v2/src/views/chat/chat/game/balls/index.js |
| M | h5-v2 | 页面 | 资金/充值/提现、聊天室/私聊 | 37 | 0 |  | h5-v2/src/views/chat/withdrawChat/withdrawChat.vue |
| M | h5-v2 | 页面 | 未归类路径 | 2 | 2 |  | h5-v2/src/views/giftCenter/components/topData.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views/home/go_app.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 16 | 1 |  | h5-v2/src/views/login/loginMixin.js |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 7 | 7 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 15 | 4 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 3 | 3 |  | h5-v2/src/views/personal-center/child_modal/mysetting/mysetting.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 22 | 0 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/currencyPay.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/views2/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views2/home/header.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 25 | 0 |  | h5-v2/src/views3/fund/components/withdrawal.vue |
| M | h5-v2 | 页面 | 资金/充值/提现 | 37 | 0 |  | h5-v2/src/views4/fund/components/withdrawal.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views5/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views6/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 5 | 5 |  | h5-v2/src/views7/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views8/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views9/home/header.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 21 | 9 |  | h5-v2/src/views9/layout/layout.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 4 | 4 |  | h5-v2/src/views9/personal-center/personal-center.vue |
| M | pc | 构建配置 | 主题/颜色/静态资源、构建/配置 | 2 | 2 |  | pc/configstatic/pc/control/control.js |
| M | pc | 组件 | 客服/反馈/帮助 | 1 | 1 |  | pc/src/components/Longqueue/long-helper/longHelperList.vue |
| M | pc | 组件 | 首页/导航/版面 | 2 | 2 |  | pc/src/components/headMenu.vue |
| M | pc | 状态 | 主题/颜色/静态资源、接口/状态/工具 | 1 | 1 |  | pc/src/store/modules/theme.js |
| M | pc | 页面 | 首页/导航/版面 | 3 | 1 |  | pc/src/views-v3/layout/SlideQuick.vue |
| M | pc | 页面 | 彩票/投注/开奖 | 3 | 3 |  | pc/src/views/buyLottery/child_modal/shared/children_modal/result_page.vue |

## 生成依据

- 分支：`origin/BY8365-YDSJ`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8365-YDSJ -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
