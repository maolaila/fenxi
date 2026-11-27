# 演示站 PC/H5 阿里云验证码脚本预加载与加载失败重试（2026-11-26）

- 分支：`BY-Demo-H5V2-PC`；有效端 `pc/`、`h5-v2/`（改动两端相同）。
- 提交：`1ad22ed834ec61934260aa07d9e9a9862d4329ff`，已推送 `origin/BY-Demo-H5V2-PC` 并核对远端一致。
- 发布：**未发布**（用户要求今天只开发、不发布）。6688 同步与本地连 6688 线上自测待用户安排，未做。

## 背景

- 必赢技术支持转述业主：推广流量集中在 QQ 浏览器，注册环节卡顿/受阻用户直接流失，攻击期间真实注册直线下降；希望从技术侧优化 QQ 浏览器访问和注册流程。
- 改前：两端都是用户点"验证"后才下载 `https://o.alicdn.com/captcha-frontend/aliyunCaptcha/AliyunCaptcha.js`（约 79KB gzip）；加载无超时，网络卡住时按钮无任何反应；加载失败的 Promise 被缓存，不刷新页面永远不会重试。

## 归属判断

- 前端问题：脚本加载时机、超时与重试完全由前端 `src/utils/aliyunCaptcha.js` 写死控制，后台无对应配置。
- 后台配置：仍由后台 `ALIYUN_CAPTCHA_CONFIG`（`openStatus` / `loginOpen` / `registerOpen` / `region` / `prefix`）决定是否启用与地域；本次只在开关开启时预加载，不改配置、不改 control.js、不改资源仓库。
- 不在本次范围：QQ 浏览器是否拦截新加坡节点（`sgp`，`*.captcha-open-southeast.aliyuncs.com`、`cloudauth-device-dualstack.ap-southeast-1.aliyuncs.com`）未真机确认；批量注册属后端风控范畴。

## 改动

- `aliyunCaptcha.js`
  - `scheduleAliyunCaptchaIdlePreload()`：`window load` 后 1.5s 再等浏览器空闲（`requestIdleCallback`，无则 1s 定时），仅未登录（`localStorage.user` 为空）时预加载；登录或注册任一开关开启才加载。
  - `preloadAliyunCaptchaForRoute(route)`：进 `login` / `register` 路由兜底，按该页对应开关；页面未 load 时等 load 后再开始（避免 SDK 慢时拖住 load、浏览器进度条一直转）。
  - `preloadAliyunCaptcha(purpose)`：后台配置未到时挂起，`saveCurrentAliyunConfig` 收到配置后执行。
  - `loadScript`：15s 超时；超时/出错/onload 后 SDK 未注册均移除脚本、清缓存、reject；失败后重试改用 `?t=时间戳` 新地址（同地址旧请求仍挂在浏览器里时，新请求会被合并或被 Chrome 缓存锁卡 20s）。预加载失败 3s 后自动重试一次；之后由用户点击或再次进入登录/注册页重新加载。
  - `createTrigger`（PC 非弹窗"点击验证"按钮）：吞掉点击返回 Promise 的拒绝，按钮仍显示"验证失败"，不再报未处理错误。
- `main.js`：`installAliyunCaptchaCompat()` 后调用 `scheduleAliyunCaptchaIdlePreload()`。
- `router/index.js`：`afterEach` 调 `preloadAliyunCaptchaForRoute(to)`（H5 加在现有 afterEach，PC 新增 afterEach）。
- 测试：新增 `h5-v2/tests/aliyunCaptchaPreload.test.js`，对 H5、PC 两份文件各跑 13 项。

## 验证

- Node v14.21.3；`aliyunCaptchaPreload` 26 项通过；H5 全部 16 个测试文件在 Vue 2.5.21（preload）下通过。
- `output/demo-captcha-preload-20261126/` 临时副本（工作区快照 `git stash create`）PC/H5 生产构建通过，产物 Vue 运行时仅 2.5.21（另有 core-js 2.6.12 版本号字符串）。
- 本地弱网实测：`serve-test.js` 提供产物、接口转发演示站 `biyingbaowang.cc`（只读浏览，未登录、未提交注册），把 SDK 地址改写到本地代理以注入延迟/失败/挂起。演示站后台阿里云 `openStatus=1`、`loginOpen=1`、`registerOpen=1`、`region=sgp`。

| 场景 | 结果 |
|---|---|
| H5 首页正常网络 | 首屏 chunk 0.69s 完成，SDK 2.3s 开始；之后进登录页点击，弹窗立即出现、无新请求；滑块验证通过（未提交登录） |
| H5 首页，JS/CSS 每个延迟 1.5s、SDK 延迟 4s | load 6.26s（首屏资源 6.21s 内完成），SDK 7.8s 才开始，不抢首屏带宽；进登录页不重复请求 |
| H5 直接落注册页，SDK 延迟 10s，1.55s 时点击 | 只发 1 次请求，SDK 10.15s 到达，弹窗 10.7s 出现 |
| H5 首页，SDK 一直挂起 | 2.3s 请求→15s 超时→3s 后用新地址重试（20.3s，第二次真实请求）→再超时后不再自动重试；无未处理错误；首页 load 0.79s 不受影响。改前重试同地址被浏览器合并，服务端只收到 1 次请求（已修复） |
| 接上，网络恢复后进登录页 | 兜底用新地址加载成功，点击弹窗正常 |
| H5 首页，SDK 首次 502 | 3s 后自动重试成功 |
| H5 登录页 SDK 挂起时点击 | 15s 后按钮变"验证失败"（改前一直无反应）；网络恢复后再点，重新加载并弹窗 |
| PC 首页，JS/CSS 延迟 1s、SDK 延迟 3s | load 6.4s，SDK 7.9s 开始；注册页点击 0.54s 弹窗、无新请求 |
| PC 直接落注册页，SDK 挂起 | load 0.2s 完成（改为等 load 后才预加载，修复前 load 被拖住）；点击 15s 后"验证失败"，无未处理错误 |
| PC SDK 很慢（20s 到达） | 15s 超时后晚到的脚本仍执行，22.6s 可用；自动重试多下载一次（40s 到达），无新增报错，之后点击 0.55s 弹窗 |
| 多标签页：另一标签页有同地址挂起请求 | 本页首个请求被 Chrome 缓存锁卡 20s，15s 超时后新地址重试 19s 内成功，点击 0.47s 弹窗 |

- 控制台：干净加载时 H5 无报错；PC 有 `ciphertext` 未处理错误和阿里云"language 参数不合法"，线上演示站 PC 注册页同样存在，非本次引入。
- 只在单元测试覆盖：后台开关关闭不加载；已登录用户首页不预加载（浏览器里伪造 `user` 会被应用清掉，未用真实账号测）。
- 未验证：QQ 浏览器 / X5 内核真机；真实国内网络到 `sgp` 节点的表现；登录态。
- 本机安卓模拟器尝试（同日）：`C:\tools\android-sdk`，AVD `cnphone`（Android 14 x86_64，支持 arm64 转译）。已装 QQ 浏览器 `com.tencent.mtt` 20.8.2.2043（`_apk/qqbrowser.apk`，签名证书 O=Tencent OU=WSD，仅 arm64-v8a）启动即提示"当前版本与你的手机CPU类型不匹配，请去应用市场下载 QQ浏览器X86版本"并退出；360 浏览器 `com.qihoo.browser` v10.1.7（仅 arm64-v8a）内核 `libqwv` 在 ARM 转译下 SIGSEGV 闪退。两者都无法在本机模拟器测试，需 ARM 真机或带 ARM 转译的国产模拟器。测试服务 `serve-test.js` 已加 `rewrite=0`（直连 o.alicdn.com）和页面状态上报（`/__beacon`），可供真机同局域网访问时采集。

## 已知与后续

- SDK 加载后会立即请求设备指纹 `g.alicdn.com/.../feilin*.js` 和新加坡 `cloudauth-device-dualstack.ap-southeast-1.aliyuncs.com`，预加载把这部分也提前了；QQ 浏览器若拦截该节点，预加载只能更早发现，不能解决。
- 原有：H5 登录/注册页在系统配置返回、验证码初始化完成前点击 `#j-popup` 无反应，也没有"加载中"状态（`h5-v2/src/mixins/initGtCapthca.js` 初始化后才绑定点击）。本地排查资料 `output/captcha-probe-20261124/`（未入地图）记载 6688 做过"验证加载中…"、弹窗等待 25s 等优化，其提交与发布状态待确认；演示站没有。
- 原有：PC `getCurrentLang` 传 `zh`，阿里云要求 `cn`，控制台报 language 不合法。
- 6688（`BY8315-6688-h5`）同步：用户要求演示站没问题后合入 6688 并本地连线上自测，暂缓（"不着急"）。6688 的 `aliyunCaptcha.js` 与演示站有差异，需要单独合并检查。

## 2026-11-27 补充：PC 语言参数、H5 初始化前点击"加载中"、发布演示站、合入 6688

- 需求：用户要求把上文"已知与后续"里的两个原有问题（PC language 不合法、H5 初始化前点击无反应）一起修好，发演示站自测，没问题后合入 6688 并推送，由用户请运维发布 6688。
- 归属/配置：纯前端写死逻辑（`getCurrentLang` 取值转换、mixin 点击绑定时机），无后台配置、control.js 或资源仓库改动。

### 演示站 `BY-Demo-H5V2-PC`

- 提交 `a9549b035265da30d4f8d7658956e3ae11c36360`，已推送 `origin/BY-Demo-H5V2-PC`，远端与本地一致。
- PC `src/utils/aliyunCaptcha.js` `getCurrentLang`：改为同 H5，`zh_CN`→`cn`、`zh_TW`→`tw`、`en*`→`en`、其他→`cn`（原截成 `zh`，阿里云报 language 不合法）。
- H5 `src/mixins/initGtCapthca.js`：`mounted` 在组件根节点监听点击，验证未初始化（系统配置未返回）时点 `.ui-captchaBtn` 即显示"验证加载中…"并记下待弹出，初始化成功后自动弹出一次；初始化失败或 20s 仍未初始化则清除加载中。后台关闭阿里云（`isCaptchaFlag` 为 false）时不处理。
- H5 `src/utils/aliyunCaptcha.js`：`openAliyunCaptcha` 支持 `onLoading`（点击到弹窗出现前为 true，弹窗出现/失败/关闭为 false）；`createLegacyNECaptcha` 加载中重复点击复用进行中的那次验证。`src/assets/css/css.less` 加 `.ui-captchaBtn.loading`（文案"验证加载中…"，同 6688）。
- 测试：`aliyunCaptchaPreload.test.js` 加语言、加载中状态用例，jsdom 关闭外部资源加载（原来会真的下载 SDK，导致计时用例偶发失败）；新增 `captchaEarlyClick.test.js`（真实 Vue 2.5.21 挂载 mixin）。Node v14.21.3 + Vue 2.5.21 全部 17 个 H5 测试文件通过，新测试在旧代码上失败。
- 构建：`output/demo-captcha-lang-loading-a9549b035/`，PC/H5 生产构建通过，产物 Vue 运行时仅 2.5.21。
- 本地自测（接口转发演示站，只读）：只延迟系统配置接口 8s，6.8s 点验证→立即"验证加载中…"，配置 8.8s 到达后 9.7s 自动弹出，加载中再点不重复弹；注册页 SDK 慢 6s，点击后加载中直到弹窗；SDK 挂起，加载中 15s 后变"验证失败"；系统配置一直不回，加载中 20s 后恢复、配置晚到也不突然弹窗；PC 注册页 `language=cn`、中文弹窗、无 language 报错。
- 发布：本次上线包含 `1ad22ed83`（预加载）与 `a9549b035`。PC 556、H5 761 个文件，备份 `pc/_rollback_before_a9549b035_20261127-095449`、`wap/_rollback_before_a9549b035_20261127-095604`。两端脚本末步校验均报失败（H5 同前误报；PC 本次也报），实际核对：公网 PC `app.3d663948eb0613a3081c.js`、H5 `app.6d919b33.js`，两端 index 与入口引用文件一致；PC js/css 121/121 一致，H5 241/245 一致。
- H5 不一致的 4 个为旧第三方脚本 `static/js/gt.js`、`qiniu-upload.js`、`RongIMVoice-2.2.6.js`、`RongEmoji-2.2.7.min.js`：带参数绕缓存取回为新文件（大小一致），前置代理缓存（`Nginx-Cache: HIT`）仍返回旧格式版本，内容仅缩进不同。如需一致请负责前置代理的同事清这 4 个地址。
- 线上复验（游客，未登录、未提交）：H5 登录页 SDK 1.8s 已预加载，点击 0.59s 弹窗；PC 注册页 `language=cn`，弹窗正常，控制台无 language 报错（`ciphertext` 未处理错误仍在，非本次）。

### 6688 `BY8315-6688-h5`

- 提交 `592d1abbca65ec6638cd48e35c64ce78e7513b1f`，已推送 `origin/BY8315-6688-h5`，远端与本地一致。**未发布**，由用户请运维发布。
- 按本分支现有验证码代码移植（未整份覆盖、未 cherry-pick 冲突文件）：两端首屏空闲预加载 + 登录/注册路由兜底、失败换 `?t=` 新地址重试（预加载自动重试一次；错误码沿用本分支 `ALIYUN_CAPTCHA_LOAD_FAIL`）、PC `language` 修正、PC/H5 点击验证按钮吞掉 Promise 拒绝；`main.js`、`router/index.js` 接入；移植 `aliyunCaptchaPreload.test.js`。
- 未移植"初始化前点击"：6688 登录/注册页 `isCaptchaFlag = captchaConfigReady && aliyunCaptchaEnabled`，配置返回前不显示验证按钮，配置到达后同一 tick 初始化，不存在点了没反应的空档；"加载中"、加载中重复点击合并 6688 已有（`86af9377f`）。
- 测试：Node v14.21.3 + Vue 2.5.21，21/22 个 H5 测试文件通过；`captchaFlowState.test.js` 在未改动的 6688（`5cc712b1b`）上同样失败（测试文件正则缺反斜杠，SyntaxError），非本次引入。
- 构建：`output/6688-captcha-preload-592d1abbc/`，H5/PC 生产构建通过。临时副本注意：6688 PC `webpack.base.conf.js` 的 `vue$` 别名为字符串 `'vue/dist/vue.esm.js'`，临时副本用 junction 链接主目录依赖时 iview 等会解析到主目录 Vue 2.7.14，包内出现两份 Vue、页面白屏（未改动的 `5cc712b1b` 同样白屏）；仅在临时副本改为 `require.resolve` 后产物只含 2.5.21、页面正常。正式构建由运维按 6688 自身依赖完成，本次未改 6688 构建配置；6688 `package.json` 中 `vue` / `vue-template-compiler` 为 `^2.5.2`，实际安装版本待运维确认。
- 本地自测：本机 IP 访问 6688 线上被前端提示"您所在的地区限制访问"，未绕过，改为接口转发演示站测试 6688 包：H5 首页 load 0.76s、SDK 2.27s 预加载，登录页点击 0.45s 弹窗、无新请求；SDK 挂起时页面 load 0.65s 不受影响，15s 超时、18.7s 换新地址重试（服务端收到第二次请求），网络恢复后点击 2.3s 弹窗；PC 首页 2.27s 预加载，注册页 `language=cn`、点击 0.56s 弹窗、无报错；SDK 失败时按钮显示"验证加载失败，点击重试"、无未处理错误。**未用 6688 线上接口与配置实测。**

### 已知（两分支相同，未改）

- 脚本卡住时，后台自动重试的那次请求若仍挂着，网络恢复后用户点击会与它共用，最多再等 15s 才失败，再点一次即可正常加载。
- 直接打开登录/注册页且脚本持续失败时，路由兜底与首屏空闲预加载各发起一次，加上自动重试，共自动请求约 3 次。
