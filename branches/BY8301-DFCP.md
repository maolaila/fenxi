# 商户分支功能地图：BY8301-DFCP

- 生成时间：2026-06-16 14:06:46 +0900
- 来源：远端分支 `origin/BY8301-DFCP`
- 分支提交：`c0e618274` / 2026-06-11 15:50:55 +0900 / fix: localize aliyun captcha trigger text
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc、h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：54 个；涉及功能域：接口/状态/工具、登录/注册/验证码、首页/导航/版面、未归类路径、个人中心/账户、构建/配置、主题/颜色/静态资源、代理/报表/团队。
- 其他路径差异文件：1 个；通常是根配置、文档或非端目录，需要按完整清单核对。
- 扫描到新增/变更颜色值：#fff, #000, #ee0022, #eee, #ffffff, #faf3f3, #161212, #333, #111, #123, #124, #125, #a8015a, #d8d8d8, #f7f9fa, #666, #0ecf9b, #f1fcf8, #0ece9b, #fef0f0。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 登录/注册/验证码 | 登录、注册、忘记密码、验证码弹窗、阿里云滑块。 |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 构建/配置 | 构建命令、依赖、环境配置、输出路径。 |
| 主题/颜色/静态资源 | 主题色、logo、icon、背景图、静态 CSS 是否匹配商户。 |
| 代理/报表/团队 | 代理中心、团队报表、交易明细、佣金/下级入口。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 36 | 2289 | 311 | pc/index.html<br>pc/src/components/PhoneBindDialog/index.vue<br>pc/src/components/login_dlg.vue<br>pc/src/components/tryPlay.vue<br>pc/src/main.js<br>pc/src/mixins/register.js<br>pc/src/store/modules/sysDict.js<br>pc/src/utils/aliyunCaptcha.js<br>...另 28 个路径见完整清单 |
| h5-v2 | 18 | 2853 | 1871 | h5-v2/public/index.html<br>h5-v2/public/static/css/color.less<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/main.js<br>h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/router/index.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>...另 10 个路径见完整清单 |
| 其他 | 1 | 70 | 0 | docs/merchant-frontend-branches.md |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 接口/状态/工具 | 21 | h5-v2、pc | h5-v2/src/mixins/initGtCapthca.js<br>h5-v2/src/store/modules/sysDict.js<br>h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/utils/getSysConfig.js<br>h5-v2/src/utils/plugin/plugin.js<br>h5-v2/src/utils/request.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/register/registerMixin.js<br>...另 13 个路径见完整清单 |
| 登录/注册/验证码 | 20 | h5-v2、pc | h5-v2/src/utils/aliyunCaptcha.js<br>h5-v2/src/views/login/loginMixin.js<br>h5-v2/src/views/register/registerMixin.js<br>pc/src/components/login_dlg.vue<br>pc/src/mixins/register.js<br>pc/src/utils/aliyunCaptcha.js<br>pc/src/views-v10/login/index.vue<br>pc/src/views-v3/common/module_vue/header/loginRegister.vue<br>...另 12 个路径见完整清单 |
| 首页/导航/版面 | 15 | h5-v2、pc | h5-v2/public/index.html<br>h5-v2/src/components/YiDun/index.vue<br>h5-v2/src/router/index.js<br>h5-v2/src/views/free-play/index.vue<br>h5-v2/src/views/home/components/profit/index.vue<br>h5-v2/src/views2/home/newfastNav.vue<br>pc/index.html<br>pc/src/components/PhoneBindDialog/index.vue<br>...另 7 个路径见完整清单 |
| 未归类路径 | 8 | h5-v2、pc、其他 | docs/merchant-frontend-branches.md<br>h5-v2/src/main.js<br>pc/src/components/tryPlay.vue<br>pc/src/main.js<br>pc/src/views-v2/common/module_vue/try_play.vue<br>pc/src/views-v4/common/module_vue/try_play.vue<br>pc/src/views-v5/components/try_play.vue<br>pc/src/views/freeTrial/freeTrial.vue |
| 个人中心/账户 | 3 | h5-v2、pc | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue<br>h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue<br>pc/src/views/personalCenter/child_modal/userManage/userManage.vue |
| 构建/配置 | 2 | h5-v2、pc | h5-v2/src/utils/getSysConfig.js<br>pc/src/utils/getSysConfig.js |
| 主题/颜色/静态资源 | 1 | h5-v2 | h5-v2/public/static/css/color.less |
| 代理/报表/团队 | 1 | h5-v2 | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 32 |
| 工具/混入 | 8 |
| 其他 | 5 |
| 组件 | 4 |
| 状态 | 2 |
| 构建配置 | 2 |
| 主题样式 | 1 |
| 路由 | 1 |

## 主题色/展示资源线索

- 颜色值：#fff, #000, #ee0022, #eee, #ffffff, #faf3f3, #161212, #333, #111, #123, #124, #125, #a8015a, #d8d8d8, #f7f9fa, #666, #0ecf9b, #f1fcf8, #0ece9b, #fef0f0, #efeef4, #38f, #dc3b40, #e2e2e2, #bdbdbd, #989898, #f00, #ff0000, #ff000000, #112255

| 端 | 类型 | 功能域 | 状态 | 路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 主题样式 | 主题/颜色/静态资源 | M | h5-v2/public/static/css/color.less |

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 54 | 0 | 55 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/BY-Demo | 54 | 0 | 55 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 3799 | 3 | 3805 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| c0e618274 | 2026-06-11 | fix: localize aliyun captcha trigger text |
| acca80080 | 2026-06-06 | fix: reset pc aliyun captcha lifecycle |
| 0b14e7329 | 2026-06-05 | fix: handle aliyun captcha close in h5 requests |
| 48c7bad13 | 2026-06-05 | fix: release aliyun captcha state after h5 close |
| 03d31b71b | 2026-06-05 | fix: preserve aliyun captcha close lifecycle |
| 3f5b427a2 | 2026-06-05 | fix: allow h5 aliyun captcha reopen after close |
| 6ed45d465 | 2026-06-05 | fix: stabilize h5 aliyun captcha touch handling |
| e262deee4 | 2026-06-05 | fix: improve h5 aliyun captcha popup recovery |
| fa0f7097e | 2026-06-05 | fix: enforce aliyun captcha toggle fallback |
| 48f66820b | 2026-06-05 | fix: keep legacy sms flow when aliyun captcha is off |
| eab96355d | 2026-06-04 | fix: align free play captcha flow with aliyun |
| 2f4140591 | 2026-06-04 | fix: continue login after aliyun popup success |
| e24c2cbeb | 2026-06-04 | fix: guard all auth captcha requests |
| b81043a6b | 2026-06-04 | feat: replace yidun captcha with aliyun captcha |
| c84026efd | 2023-12-25 | 修复全部404 |
| bfdfcea42 | 2023-12-18 | 修改列表字段 |
| 93e78b2fb | 2023-12-18 | 修改大发盈利榜 |
| 4ac99ddda | 2023-12-13 | 统一跳转登录 |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | 其他 | 其他 | 未归类路径 | 70 | 0 |  | docs/merchant-frontend-branches.md |
| M | h5-v2 | 其他 | 首页/导航/版面 | 1 | 4 |  | h5-v2/public/index.html |
| M | h5-v2 | 主题样式 | 主题/颜色/静态资源 | 1778 | 1778 |  | h5-v2/public/static/css/color.less |
| M | h5-v2 | 组件 | 首页/导航/版面 | 5 | 1 |  | h5-v2/src/components/YiDun/index.vue |
| M | h5-v2 | 其他 | 未归类路径 | 4 | 1 |  | h5-v2/src/main.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 18 | 4 |  | h5-v2/src/mixins/initGtCapthca.js |
| M | h5-v2 | 路由 | 首页/导航/版面 | 9 | 0 |  | h5-v2/src/router/index.js |
| M | h5-v2 | 状态 | 接口/状态/工具 | 2 | 0 |  | h5-v2/src/store/modules/sysDict.js |
| A | h5-v2 | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 667 | 0 |  | h5-v2/src/utils/aliyunCaptcha.js |
| M | h5-v2 | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | h5-v2/src/utils/getSysConfig.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 2 | 0 |  | h5-v2/src/utils/plugin/plugin.js |
| M | h5-v2 | 工具/混入 | 接口/状态/工具 | 47 | 3 |  | h5-v2/src/utils/request.js |
| M | h5-v2 | 页面 | 首页/导航/版面 | 25 | 6 |  | h5-v2/src/views/free-play/index.vue |
| A | h5-v2 | 页面 | 首页/导航/版面 | 170 | 0 |  | h5-v2/src/views/home/components/profit/index.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 22 | 15 |  | h5-v2/src/views/login/loginMixin.js |
| M | h5-v2 | 页面 | 个人中心/账户、代理/报表/团队 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/agency_center/userAdd.vue |
| M | h5-v2 | 页面 | 个人中心/账户 | 1 | 1 |  | h5-v2/src/views/personal-center/child_modal/mysetting/myPhone/myPhone.vue |
| M | h5-v2 | 页面 | 登录/注册/验证码、接口/状态/工具 | 89 | 14 |  | h5-v2/src/views/register/registerMixin.js |
| M | h5-v2 | 页面 | 首页/导航/版面 | 10 | 42 |  | h5-v2/src/views2/home/newfastNav.vue |
| M | pc | 其他 | 首页/导航/版面 | 41 | 44 |  | pc/index.html |
| M | pc | 组件 | 首页/导航/版面 | 36 | 8 |  | pc/src/components/PhoneBindDialog/index.vue |
| M | pc | 组件 | 登录/注册/验证码 | 2 | 2 |  | pc/src/components/login_dlg.vue |
| M | pc | 组件 | 未归类路径 | 146 | 1 |  | pc/src/components/tryPlay.vue |
| M | pc | 其他 | 未归类路径 | 6 | 5 |  | pc/src/main.js |
| M | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 83 | 1 |  | pc/src/mixins/register.js |
| M | pc | 状态 | 接口/状态/工具 | 34 | 15 |  | pc/src/store/modules/sysDict.js |
| A | pc | 工具/混入 | 登录/注册/验证码、接口/状态/工具 | 610 | 0 |  | pc/src/utils/aliyunCaptcha.js |
| M | pc | 构建配置 | 构建/配置、接口/状态/工具 | 2 | 1 |  | pc/src/utils/getSysConfig.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 6 | 0 |  | pc/src/utils/plugin/plugin.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 33 | 1 |  | pc/src/utils/request.js |
| M | pc | 页面 | 首页/导航/版面 | 2 | 2 |  | pc/src/views-v10/layout/components/BaseHeader.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views-v10/login/index.vue |
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
| M | pc | 页面 | 未归类路径 | 23 | 2 |  | pc/src/views/freeTrial/freeTrial.vue |
| M | pc | 页面 | 登录/注册/验证码、首页/导航/版面 | 1 | 1 |  | pc/src/views/layout/child_modal/header/loginRegister.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 68 | 11 |  | pc/src/views/login/loginMixin.js |
| M | pc | 页面 | 个人中心/账户 | 1 | 1 |  | pc/src/views/personalCenter/child_modal/userManage/userManage.vue |
| M | pc | 页面 | 登录/注册/验证码、接口/状态/工具 | 277 | 75 |  | pc/src/views/register/registerMixin.js |

## 生成依据

- 分支：`origin/BY8301-DFCP`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8301-DFCP -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
