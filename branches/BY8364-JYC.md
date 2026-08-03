# 商户分支功能地图：BY8364-JYC

- 生成时间：2026-08-03 16:32:48 +0900
- 来源：远端分支 `origin/BY8364-JYC`
- 分支提交：`b2099742c` / 2026-08-01 11:52:41 +0900 / pc 去掉聊天室
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：34 个；涉及功能域：首页/导航/版面、个人中心/账户、主题/颜色/静态资源、代理/报表/团队、客服/反馈/帮助、接口/状态/工具、彩票/投注/开奖、构建/配置。
- 扫描到新增/变更颜色值：#cccccc, #ffffff, #333333。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 主题/颜色/静态资源 | 主题色、logo、icon、背景图、静态 CSS 是否匹配商户。 |
| 代理/报表/团队 | 代理中心、团队报表、交易明细、佣金/下级入口。 |
| 客服/反馈/帮助 | 客服入口、帮助中心、反馈入口、多客服链接选择。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 彩票/投注/开奖 | 购彩页、投注面板、彩种列表、开奖展示、走势图。 |
| 构建/配置 | 构建命令、依赖、环境配置、输出路径。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 11 | 72 | 17 | pc/index.html<br>pc/src/assets/images/bg.png<br>pc/src/assets/images/bg20260721.png<br>pc/src/utils/customerService.js<br>pc/src/utils/rongyun.js<br>pc/src/views-v11/home/infolist.vue<br>pc/src/views-v11/layout/SlideQuick12.vue<br>pc/src/views/chatRoom/chatMain/index.vue<br>...另 3 个路径见完整清单 |
| h5-v2 | 23 | 109 | 84 | h5-v2/config/service-urls.js<br>h5-v2/src/assets/images/agency/9/bg2.png<br>h5-v2/src/assets/images/recharge-v3/MTZC.png<br>h5-v2/src/assets/images/takeFee/zfb-4-2.png<br>h5-v2/src/assets/images/takeFee/zfb_2026-07-20_14-33-01.jpg<br>h5-v2/src/styles/components/expen.less<br>h5-v2/src/utils/customerService.js<br>h5-v2/src/views/bettingList/bettingList.vue<br>...另 15 个路径见完整清单 |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 11 | h5-v2、pc | h5-v2/src/views/home/components/hotlist/index.vue<br>h5-v2/src/views/home/go_app.vue<br>h5-v2/src/views2/home/go_app.vue<br>h5-v2/src/views2/home/newfastNav.vue<br>h5-v2/src/views2/layout/layout.vue<br>h5-v2/src/views6/home/go_app.vue<br>h5-v2/src/views7/home/go_app.vue<br>pc/index.html<br>...另 3 个路径见完整清单 |
| 个人中心/账户 | 9 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/promotion/typeone.vue<br>h5-v2/src/views/personal-center/child_modal/help_center/help_center.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/personal_hobby/personal_hobby.vue<br>h5-v2/src/views/personal-center/child_modal/takefee_list/takefee.vue<br>h5-v2/src/views2/personal-center/personal-center.vue<br>pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue<br>...另 1 个路径见完整清单 |
| 主题/颜色/静态资源 | 8 | h5-v2、pc | h5-v2/src/assets/images/agency/9/bg2.png<br>h5-v2/src/assets/images/recharge-v3/MTZC.png<br>h5-v2/src/assets/images/takeFee/zfb-4-2.png<br>h5-v2/src/assets/images/takeFee/zfb_2026-07-20_14-33-01.jpg<br>h5-v2/src/styles/components/expen.less<br>pc/src/assets/images/bg.png<br>pc/src/assets/images/bg20260721.png<br>pc/static/js/RongIMLib-5.42.0.prod.js |
| 代理/报表/团队 | 5 | h5-v2、pc | h5-v2/src/assets/images/agency/9/bg2.png<br>h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue<br>h5-v2/src/views/personal-center/child_modal/agency_center/promotion/typeone.vue<br>pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue |
| 客服/反馈/帮助 | 4 | h5-v2、pc | h5-v2/config/service-urls.js<br>h5-v2/src/utils/customerService.js<br>h5-v2/src/views/personal-center/child_modal/help_center/help_center.vue<br>pc/src/utils/customerService.js |
| 接口/状态/工具 | 3 | h5-v2、pc | h5-v2/src/utils/customerService.js<br>pc/src/utils/customerService.js<br>pc/src/utils/rongyun.js |
| 彩票/投注/开奖 | 2 | h5-v2 | h5-v2/src/views/bettingList/bettingList.vue<br>h5-v2/src/views/buy-lottery/child_modal/bottomSImple/bottom.vue |
| 构建/配置 | 1 | h5-v2 | h5-v2/config/service-urls.js |
| 资金/充值/提现 | 1 | h5-v2 | h5-v2/src/assets/images/recharge-v3/MTZC.png |
| 活动/红包/推广/下载 | 1 | h5-v2 | h5-v2/src/views/personal-center/child_modal/agency_center/promotion/typeone.vue |
| 聊天室/私聊 | 1 | pc | pc/src/views/chatRoom/chatMain/index.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 21 |
| 图片资源 | 6 |
| 其他 | 3 |
| 工具/混入 | 3 |
| 主题样式 | 1 |

## 主题色/展示资源线索

- 颜色值：#cccccc, #ffffff, #333333

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 图片资源 | 代理/报表/团队、主题/颜色/静态资源 | A | h5-v2/src/assets/images/agency/9/bg2.png |
| h5-v2 | 图片资源 | 资金/充值/提现、主题/颜色/静态资源 | M | h5-v2/src/assets/images/recharge-v3/MTZC.png |
| h5-v2 | 图片资源 | 主题/颜色/静态资源 | A | h5-v2/src/assets/images/takeFee/zfb-4-2.png |
| h5-v2 | 图片资源 | 主题/颜色/静态资源 | A | h5-v2/src/assets/images/takeFee/zfb_2026-07-20_14-33-01.jpg |
| h5-v2 | 主题样式 | 主题/颜色/静态资源 | M | h5-v2/src/styles/components/expen.less |
| pc | 图片资源 | 主题/颜色/静态资源 | M | pc/src/assets/images/bg.png |
| pc | 图片资源 | 主题/颜色/静态资源 | A | pc/src/assets/images/bg20260721.png |
| pc | 其他 | 主题/颜色/静态资源 | A | pc/static/js/RongIMLib-5.42.0.prod.js |

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 34 | 0 | 34 | 3cfbdca10bb3 | 2026-07-16 13:19:03 +0900 |
| origin/BY-Demo | 973 | 0 | 978 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 4209 | 3 | 4218 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| b2099742c | 2026-08-01 | pc 去掉聊天室 |
| 1e071a7db | 2026-07-29 | 撤单按钮根据后台配置 |
| 00dc8e4f8 | 2026-07-24 | 升级rongyun |
| c1d35b243 | 2026-07-23 | 升级rongyun 5.42.0.js |
| 375a1cec3 | 2026-07-21 | 官方彩种 |
| 897e8e9ac | 2026-07-21 | 推广海报 |
| be9de2b37 | 2026-07-21 | btc图标 |
| e5853b2b4 | 2026-07-20 | 支付宝图标 |
| a6929eb51 | 2026-07-20 | 提现列表改成没有英文 |
| dd8ae6e9a | 2026-07-20 | 中奖通知默认关闭 |
| f0c74a269 | 2026-07-20 | down |
| da1877b87 | 2026-07-20 | h5 down |
| 323930721 | 2026-07-20 | 中奖通知默认关闭 |
| 7046d5ac4 | 2026-07-20 | 客户 |
| 1405524bd | 2026-07-18 | 中奖框 |
| b8b489ff8 | 2026-07-18 | 364需求 |
| 097b07af4 | 2026-07-18 | 364修改需求 |
| a98a49113 | 2026-07-16 | feat: hide BY8364 gift center banner |
| 3386ee624 | 2026-07-16 | feat: update BY8364 hands-free recharge icon |
| 8e59e9e74 | 2026-07-16 | feat: customize BY8364 mobile home navigation |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M | h5-v2 | 其他 | 客服/反馈/帮助、构建/配置 | 3 | 3 |  | h5-v2/config/service-urls.js |
| A | h5-v2 | 图片资源 | 代理/报表/团队、主题/颜色/静态资源 | - | - |  | h5-v2/src/assets/images/agency/9/bg2.png |
| M | h5-v2 | 图片资源 | 资金/充值/提现、主题/颜色/静态资源 | - | - |  | h5-v2/src/assets/images/recharge-v3/MTZC.png |
| A | h5-v2 | 图片资源 | 主题/颜色/静态资源 | - | - |  | h5-v2/src/assets/images/takeFee/zfb-4-2.png |
| A | h5-v2 | 图片资源 | 主题/颜色/静态资源 | - | - |  | h5-v2/src/assets/images/takeFee/zfb_2026-07-20_14-33-01.jpg |
| M | h5-v2 | 主题样式 | 主题/颜色/静态资源 | 1 | 1 |  | h5-v2/src/styles/components/expen.less |
| M | h5-v2 | 工具/混入 | 客服/反馈/帮助、接口/状态/工具 | 7 | 1 |  | h5-v2/src/utils/customerService.js |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 5 | 1 |  | h5-v2/src/views/bettingList/bettingList.vue |
| M | h5-v2 | 页面 | 彩票/投注/开奖 | 3 | 3 |  | h5-v2/src/views/buy-lottery/child_modal/bottomSImple/bottom.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/views/home/components/hotlist/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views/home/go_app.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 4 | 4 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agency_center.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 8 | 4 |  | h5-v2/src/views/personal-center/child_modal/agency_center/agentReport.vue |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队、活动/红包/推广/下载 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/agency_center/promotion/typeone.vue |
| M | h5-v2 | 页面 | 个人中心/账户、客服/反馈/帮助 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/help_center/help_center.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 2 | 2 |  | h5-v2/src/views/personal-center/child_modal/mysetting/personal_hobby/personal_hobby.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 64 | 1 |  | h5-v2/src/views/personal-center/child_modal/takefee_list/takefee.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views2/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 1 | 21 |  | h5-v2/src/views2/home/newfastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 0 | 23 |  | h5-v2/src/views2/layout/layout.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 0 | 9 |  | h5-v2/src/views2/personal-center/personal-center.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views6/home/go_app.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views7/home/go_app.vue |
| M | pc | 其他 | 首页/导航/版面 | 2 | 1 |  | pc/index.html |
| M | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/bg.png |
| A | pc | 图片资源 | 主题/颜色/静态资源 | - | - |  | pc/src/assets/images/bg20260721.png |
| M | pc | 工具/混入 | 客服/反馈/帮助、接口/状态/工具 | 7 | 1 |  | pc/src/utils/customerService.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 8 | 0 |  | pc/src/utils/rongyun.js |
| M | pc | 页面 | 首页/导航/版面 | 3 | 3 |  | pc/src/views-v11/home/infolist.vue |
| M | pc | 页面 | 首页/导航/版面 | 2 | 2 |  | pc/src/views-v11/layout/SlideQuick12.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 26 | 4 |  | pc/src/views/chatRoom/chatMain/index.vue |
| M | pc | 页面 | 个人中心/账户、代理/报表/团队 | 4 | 2 |  | pc/src/views/personalCenter/child_modal/agentReport/agentreport.vue |
| M | pc | 页面 | 个人中心/账户 | 4 | 4 |  | pc/src/views/personalCenter/personalCenter.vue |
| A | pc | 其他 | 主题/颜色/静态资源 | 16 | 0 |  | pc/static/js/RongIMLib-5.42.0.prod.js |

## 生成依据

- 分支：`origin/BY8364-JYC`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8364-JYC -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
