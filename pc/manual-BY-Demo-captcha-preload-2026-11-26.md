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

## 已知与后续

- SDK 加载后会立即请求设备指纹 `g.alicdn.com/.../feilin*.js` 和新加坡 `cloudauth-device-dualstack.ap-southeast-1.aliyuncs.com`，预加载把这部分也提前了；QQ 浏览器若拦截该节点，预加载只能更早发现，不能解决。
- 原有：H5 登录/注册页在系统配置返回、验证码初始化完成前点击 `#j-popup` 无反应，也没有"加载中"状态（`h5-v2/src/mixins/initGtCapthca.js` 初始化后才绑定点击）。本地排查资料 `output/captcha-probe-20261124/`（未入地图）记载 6688 做过"验证加载中…"、弹窗等待 25s 等优化，其提交与发布状态待确认；演示站没有。
- 原有：PC `getCurrentLang` 传 `zh`，阿里云要求 `cn`，控制台报 language 不合法。
- 6688（`BY8315-6688-h5`）同步：用户要求演示站没问题后合入 6688 并本地连线上自测，暂缓（"不着急"）。6688 的 `aliyunCaptcha.js` 与演示站有差异，需要单独合并检查。
