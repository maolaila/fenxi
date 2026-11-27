# BY-Demo-H5V2-PC 功能地图

## 2026-11-27 夜 PC 私聊列表撤回后无名字无头像（已推送、PC 已发布）

- 问题：会话最后一条是服务端撤回指令时，PC 私聊列表只拿到对方 id，名字空、默认头像、预览"暂无消息~"，之后新消息也沿用空信息（6688 业主反馈，演示站同代码）。
- 改动 `a08bd17331a2db7616852dee05257c42046c6230`：新增 `pc/src/utils/chatContactUser.js`，会话列表从私聊历史补齐对方名字头像与预览，收发新消息、打开会话时也补；新增 `PATCH_CHAT_CONTACT` 与 `chatContactUser.test.js`。
- 验证/发布：18/18 测试通过（Vue 2.5.21），PC 已发布并核对公网 121/121 文件一致（`app.73397e2e…`）；管理员私聊界面未实测。H5 未改。见[记录](../pc/manual-6688-chat-xss-2026-11-20.md)。
- 其他分支：6688 已移植推送 `a67f22c69`（未发布）。

## 2026-11-27 下午 阿里云验证码：点击不再跟着卡住的预加载等 15s、后台自动加载整页最多 2 次（已推送、已发布）

- 需求：修 11-27 上午记录的两项已知问题，自测后移植 6688（6688 只推送，用户请运维发布）。
- 归属/配置：纯前端；无后台配置、control.js、资源仓库改动。
- 改动 `3895537ac`、`65eb03cc4905a86e8fc8dcfb27b0c0b14a7c293d`：两端 `aliyunCaptcha.js` 用户点击遇到未完成的后台加载时，最多等到其开始后 3s，再另起 `?t=` 新加载并行，谁先成功用谁；后台自动加载合计最多 2 次且保持 3s 间隔。
- 验证/发布：Vue 2.5.21 全部 H5 测试通过；本地模拟挂起/持续失败两端通过；已发布，备份 `pc|wap/_rollback_before_65eb03cc4…_20261127-1415xx/1416xx`；公网 PC `app.c64e69c9…`、H5 `app.cd948a45` 与构建一致，线上游客复验弹窗正常。见[记录](../pc/manual-BY-Demo-captcha-preload-2026-11-26.md)。
- 其他分支：6688 已移植并推送 `24fbf7ce4`（未发布）；其余商户未同步。

## 2026-11-27 PC 阿里云 language 修正、H5 验证初始化前点击显示加载中；与 11-26 预加载一起发布（已推送、已发布）

- 需求：修 11-26 记录的两个原有问题，发演示站自测后合入 6688（6688 只推送，用户请运维发布）。
- 归属/配置：纯前端写死逻辑；无后台配置、control.js、资源仓库改动。
- 改动 `a9549b035265da30d4f8d7658956e3ae11c36360`：PC `getCurrentLang` 改传 `cn`/`tw`/`en`；H5 `initGtCapthca.js` 初始化前点击显示"验证加载中…"、初始化后自动弹出（失败或 20s 未初始化清除）；H5 `aliyunCaptcha.js` 加 `onLoading`、加载中重复点击复用；`css.less` 加 loading 样式；新增 `captchaEarlyClick.test.js`。
- 验证/发布：Vue 2.5.21 全部 H5 测试通过，构建产物仅 2.5.21，本地弱网自测通过；发布 `1ad22ed83`+`a9549b035`，备份 `pc|wap/_rollback_before_a9549b035_20261127-0954xx`；公网 PC `app.3d663948…`、H5 `app.6d919b33` 与构建一致，线上游客复验 H5 预加载与弹窗、PC `language=cn` 正常。前置代理缓存仍返回 4 个旧第三方脚本（仅缩进不同）。见[记录](../pc/manual-BY-Demo-captcha-preload-2026-11-26.md)。
- 其他分支：6688 已移植并推送 `592d1abbc`（未发布）；其余商户未同步。

## 2026-11-26 PC/H5 阿里云验证码脚本预加载与加载失败重试（已推送；11-27 随 a9549b035 发布）

- 需求：必赢业主反馈推广流量集中在 QQ 浏览器、注册受阻即流失；用户定方案为首屏渲染后预加载、进登录/注册页兜底，并模拟弱网测试；今天只开发不发布。
- 归属/配置：脚本加载时机、超时与重试为前端写死；后台 `ALIYUN_CAPTCHA_CONFIG` 只决定是否启用（开关开启才预加载）。无 control.js、资源仓库改动。
- 改动 `1ad22ed834ec61934260aa07d9e9a9862d4329ff`：两端 `src/utils/aliyunCaptcha.js` 加首屏空闲预加载（仅未登录）、登录/注册路由兜底（页面 load 后）、15s 超时、失败清缓存并换新地址重试（预加载自动重试一次）、PC 点击验证按钮不再报未处理错误；`main.js`、`router/index.js` 接入；新增 `h5-v2/tests/aliyunCaptchaPreload.test.js`。
- 验证：Node v14.21.3 + Vue 2.5.21 测试全过，`output/demo-captcha-preload-20261126/` 临时副本 PC/H5 生产构建通过（产物仅 Vue 2.5.21）；本地连演示站接口弱网实测 11 个场景通过，见[记录](../pc/manual-BY-Demo-captcha-preload-2026-11-26.md)。未真机 QQ 浏览器、未测登录态。
- 其他分支：6688 同步及本地连线上自测待用户安排；其余商户未同步。

## 2026-11-19 演示站发布演示站分支 aa80fe3a1，运行时配置恢复为切 6688 前（已发布，现状）

- 需求：演示站用演示站分支（含 Jackpot 与阿里云开关修复），配置与之前一样。线上此前为 6688 `e6ba90a0a` 包 + by315 配置。
- 构建：主工作区 `output/demo-release-aa80fe3a1/` 临时副本（沿用 11-10 脚本），Node v14.21.3，PC/H5 均为 Vue 2.5.21；包 PC 556、H5 761 个文件（不含 H5 `configstatic`、PC `pc/`）。临时目录已删。
- 发布：备份 `pc|wap/_rollback_before_aa80fe3a1_20261119-173959/`（共享 configstatic 中的 6688 配置移至 `pc/_rollback_before_aa80fe3a1_20261119-173959/_shared_configstatic_6688`）；共享 `/usr/local/nginx/html/configstatic` 复制自 `pc/_demo_live_before_6688_20261119-082500/_shared_configstatic`（今日切换前线上原样；与资源库 `bydemo` 文件哈希不同，未改资源库）。`wap/configstatic` 未动。H5 入口为 dist 原样（`?v=0.1.9`）。
- 验证：服务器逐文件核对一致；公网 H5 `app.92afda39.js`、`home5.e134cdb7.js`、PC `app.082859a962e1704c56c0.js` 与构建 SHA256 一致；公网 PC/H5 control.js 与备份一致（MISS）。375px H5 首页为必赢包网、蓝白版本 temp7 默认、可切换版面（列表：经典彩票/大发彩票/蓝白版本/金色娱乐城，无 temp6 综合版，故切换不到 Jackpot 版面；按用户要求配置不动）。注册页无行为验证。
- 遗留：前置代理缓存（Nginx-Cache HIT）仍返回 6688 图片：`configstatic/h5/images/ic_reg_logo.png`、`configstatic/pc/images/logo.gif`、`logo.png`；服务器文件为演示站原图。需负责前置代理/CDN 的同事清这 3 个地址，或等缓存过期。其余 44 张图一致。

## 2026-11-19 H5 综合版（views6）首页 Jackpot 合入公共演示站分支（已推送，未发布）

- 需求：Jackpot 做成公共功能，只针对综合版（views6），其他版面不动；显示与否同 6688，由后台接口开关决定。
- 归属/配置：后台系统参数 `H5_SWIPER_TYPE`（querySystemConfig）控制，`1` 显示 Jackpot，`0`/未配置/5 秒无响应显示原轮播图；非前端写死。演示站后台当前为 `1`（11-09 实测）。
- 改动 `aa80fe3a134834bee54cc0b793808beb410e1f44`：从 `BY8315-6688-h5`（`c305ad4d1`）取 `h5-v2/src/views6/home/jackpot/`（index/reel/winnerStrip/jackpotData、jackpot-bg.jpg/webp，通用素材无商户 Logo）、`views6/home/homeTopMode.js`、`views6/home/home.vue` 顶部二选一；注释改为公共说明，`seedKey` 沿用 `BY8315-6688`（6688 合入后数字不变）。依赖 store `queryLotteryList`/`queryGameSearch`/`loginGame` 与后台 `lotCcGameTypeConfig`，演示站均已有。未带 8315 `banner.vue` 5 秒停留修复，`homeBannerPriority.test.js` 对应断言保留演示站原样。PC、其他 H5 版面、废弃 h5、主题色、control.js 未改。
- 影响面：仅 H5 `views6`；构建产物中 `H5_SWIPER_TYPE` 只在综合版首页分包 `home5`。资源库 H5 选 `temp6` 的商户：by315、by339、by356、by359、by362；本次未推送任何商户分支，商户合入公共代码后仍需后台设 `H5_SWIPER_TYPE=1` 才显示。
- 用户约定（2026-11-19）：Jackpot 只给以后新开户的商户（从本分支开出）；已有商户一律不动，包括同为综合版的 by339、by356、by359、by362。已有商户同步公共修复时只按提交 cherry-pick，不得带入 `aa80fe3a1`，也不整体合并本分支。后台 `H5_SWIPER_TYPE` 默认轮播只作兜底，各已有商户后台该参数现值未核实。
- 验证：Node v14.21.3 + 实际 Vue/compiler 2.5.21（preload）`homeJackpot`、`homeBannerPriority` 通过；`output/` 临时副本 H5 生产构建通过，产物仅 Vue 2.5.21（临时目录已删）。代码已推送，远端一致。演示站线上为 6688 `e6ba90a0a` 包（已含 Jackpot），本次不发布。

## 2026-11-19 阿里云验证按登录/注册开关分别生效（分支已推送；线上发布 6688 修复包，现状）

- 后台 `registerOpen=0` 时注册页仍显示阿里云行为验证，前端只看 `openStatus` 所致。演示站分支 `a5e643cf4` 恢复 `b1e3601ed` 的分场景判断（含设备字典）并加注册短信 type 8 用途，已推送、未发布。线上发布的是 6688 `e6ba90a0a` 构建（H5 `app.88074e88.js`、PC `app.1aeefd57…`），备份 `pc|wap/_rollback_before_e6ba90a0a_20261119-165922/`。注册页改为图形验证码、登录页保留行为验证；滑块弹出待人工测试。详见[记录](../h5-v2/manual-6688-aliyun-login-register-switch-2026-11-19.md)。

## 2026-11-19 演示站再次切换为 6688（8315）版本（已发布，现状）

- 需求：用户要求“把演示站换 6688 的那版”。范围同 11-09 展示：PC/H5 代码与共享运行时配置均换为 6688。
- 版本：H5 `BY8315-6688-h5` `c305ad4d1`（当前远端 tip，含 Jackpot、阿里云后台场景修复）；PC `1e13fbb14`（8315 此后无 PC 提交）。直接使用服务器上 11-09 构建的 `wap/h5-6688-c305ad4d1.zip`、`pc/pc-6688-1e13fbb14.zip`（与本地 `output/8315-demo-release-20261109/` 同名包一致），未重新构建。演示站 `b1e3601ed`（资金密码锁定弹窗）、`1e7706ef8` 的 PC 阿里云改动不在 6688 包内，线上随之不再生效。
- 备份（复制，未删除）：`pc/_demo_live_before_6688_20261119-082500/`（index.html、static、pc、`_shared_configstatic`；原共享目录整体移至其中 `_shared_configstatic_live_moved`）、`wap/_demo_live_before_6688_20261119-082500/`（index.html、static、configstatic、service-worker、robots、favicon、全部 precache-manifest）。回退即从这两处复制回。
- 操作：面板解压两包覆盖到 `pc/`、`wap/`；共享 `/usr/local/nginx/html/configstatic` 换为 `pc/_6688_live_20261116-154534/_shared_configstatic`（PC/H5 control.js 与资源仓库 `dev` `by315` 当前文件 SHA256 一致）；H5 入口写入 `?v=0.1.9-6688-20261109` 版本号页（`h5-index-6688-c305ad4d1-cachebust.html`）。
- 验证：服务器逐文件核对 H5 760、PC 543 个文件均存在且大小一致；公网手机 UA 入口与版本号页逐字节一致（`app.fb0dca1f.js`），桌面 UA 为 PC `app.bed6d2b31fe2f283db4d.js`；公网 PC/H5 control.js 为 by315（`Nginx-Cache: MISS`）。375px 清除 `themeColor`/`themeColorList` 后首页显示 6688 Jackpot。曾访问过演示站的浏览器需清这两项 localStorage 或用无痕窗口。未做登录/注册提交、未看 PC 页面截图。

## 2026-11-16 演示站恢复为无 Jackpot 的演示站版本 1e7706ef8 + 演示站原运行时配置（已被 11-19 切换替代）

- 需求更正：用户实际要的是“没有 jackpot 的演示站版本，阿里云修复要保留”，下方整站回退过度（连 b1e3601ed、1e7706ef8 一起撤掉）。
- 操作：PC `index.html`/`static`/`pc`、H5 `index.html`/`static`/`service-worker.js`/`robots.txt`/`favicon.ico`/`precache-manifest.*` 从 `_6688_live_20261116-154534`（即 11-10 `1e7706ef8` 发布的文件）复制回；被替换的 10-30 文件留档于 `pc|wap/_pre6688_live_20261116-160931`。共享 `/usr/local/nginx/html/configstatic` 与 `wap/configstatic` 保持下方回退后的演示站原配置（非 by315）。
- 验证：公网 PC `app.9d48863b…` SHA256 `90095c3e…`、H5 `app.92cdef05` SHA256 `db4dcfad…`，与 11-10 `1e7706ef8` 构建一致；公网 control.js 无 by315。H5 源码 jackpot 仅为“我的彩金”多语言翻译，无 Jackpot 首页组件。线上 375px H5 登录点“请点击按钮进行行为验证”弹出阿里云滑块；未完成真实登录/注册、未测 PC 注册。线上与 origin/BY-Demo-H5V2-PC `1e7706ef8` 一致。

## 2026-11-16 演示站整站回退到 11-09 切 6688 之前（已被上一条更正替代）

- 需求：用户要求“把演示站还原回原本的”，确认范围为整站回 11-09 14:59:50 切 6688 前的完整备份（PC、H5 文件及共享 configstatic）。
- 操作：运行 `output/demo-backup-before-6688-20261109-145950/rollback-demo-to-before-6688.ps1`（先 DryRun）。PC `index.html`/`static`/`pc`、H5 `index.html`/`static`/`configstatic`/`service-worker.js`/`robots.txt`/`favicon.ico`/`precache-manifest.*` 及共享 `/usr/local/nginx/html/configstatic` 从 `_full_backup_before_6688_20261109-145950` 复制回；回退前在线文件留档于 `pc/_6688_live_20261116-154534`（含 `_shared_configstatic`）、`wap/_6688_live_20261116-154534`，未删除。
- 验证：服务器 PC/H5 index 与备份一致；公网 biyingbaowang.cc 桌面 UA → PC `app.e735f19d9e6f6f7b8130.js`，移动 UA → H5 `app.9bf4de79.js`；公网 `/configstatic/pc|h5/control/control.js` 与服务器一致、无 by315，Nginx-Cache=MISS，无需清前置缓存。未做登录/注册等功能点验。
- 当时线上曾为 10-30 演示站版本（不含 `b1e3601ed`、`1e7706ef8`）；同日已按更正恢复为 `1e7706ef8` 代码，见上一条。

## 2026-11-10 PC/H5 阿里云验证以 6688 为准（已发布）

- 需求：演示站阿里云验证与 8315（`BY8315-6688-h5` `ea0bbbf7b`）一致，以 6688 为准；手机号短信验证码本次按用户要求不改。
- 归属/配置：后台 querySystemConfig 实际值 `ALIYUN_CAPTCHA_CONFIG` openStatus=1、loginOpen=1、registerOpen=0，`ALIYUN_CAPTCHA_WEB_REGISTER_ENABLE`=0，`YI_DUN_VAILD_CONFIG` 各模块 captchaId=8rm4e28pr。原演示站逻辑按 loginOpen/registerOpen 及设备字典分别关闭，故注册不弹阿里云；按用户“以 6688 为准”改前端，开关来源仍是后台 openStatus，非前端写死。
- 改动（`1e7706ef8`）：PC/H5 `src/utils/aliyunCaptcha.js` 阿里云开关只看 `openStatus`，登录/注册同一开关（purpose 参数保留，不再单独关闭）；H5 `src/vendor/VueProtoExt.js` `$systemConfig` 归一化系统配置并支持 fresh；旧易盾兼容层优先使用后台阿里云 sceneId/region/prefix。图形验证码开关、注册密码规则（authPolicy）、触摸锁定等演示站原有逻辑保留。测试：新增 `h5-v2/tests/aliyunSceneFromConfig.test.js`，更新 `authPolicy.test.js` 期望。
- 验证：Node v14.21.3 + Vue 2.5.21：aliyunSceneFromConfig、authPolicy、captchaVisibility 等 H5 测试通过；`chatPrivateHistory.test.js` 因本地解析到 Vue 2.7.16 失败，改动前同样失败，与本次无关。PC/H5 隔离副本生产构建通过，产物仅 Vue 2.5.21、无旧分开关代码。
- 代码：`1e7706ef8` 已推送 origin/BY-Demo-H5V2-PC，远端与本地一致；8315 无新增改动，`c305ad4d1` 远端一致。
- 发布：PC 556 文件，备份 `pc/_rollback_before_1e7706ef8_20261110-161912`；H5 759 文件，备份 `wap/_rollback_before_1e7706ef8_20261110-161921`（脚本末步校验同前误报）。公网核对 PC app.9d48863b…、H5 app.92cdef05 的 index/app SHA256 与构建一致。线上实测：H5 375px 登录、注册及 PC 注册点击“请点击按钮进行行为验证”均弹出阿里云滑块；未完成真实登录/注册提交。
- 现状提醒：共享 configstatic 仍是 11-09 覆盖的 6688（by315）运行时配置，本次未改；入口无 6688 缓存版本号。证据：本地 output/demo-aliyun6688-1e7706ef8（不入库）。

## 2026-11-10 PC/H5 修改资金密码旧密码连续错误改弹窗（全盘通用优化，已发布）

- 需求：8321 澳客网反馈修改资金密码旧密码多次输错跳维护页、提示错误；用户确认为通用优化项，同步演示站并发布。
- 归属：接口 `/api/v2/user/setPayPwd` 该场景返回 `207`，PC/H5 公共拦截器写死按系统维护跳 `/503`；无后台/control.js 配置控制，属前端处理。后端 207 语义未改。
- 改动（`b1e3601ed`，由 8321 `dcd584f71`、`aef6485d5` 移植合并）：PC `pc/src/utils/request.js`、`pc/src/views/personalCenter/child_modal/account/modify_password.vue`；H5 `h5-v2/src/utils/request.js`、`h5-v2/src/api/user.js`、`h5-v2/src/views/personal-center/child_modal/mysetting/reset_pay_pwd/reset_pay_pwd.vue`。仅修改资金密码请求跳过 207 维护跳转，弹窗提示“旧密码连续输入错误，请联系客服”（PC `$Modal.warning`、H5 `Dialog.alert`）；其他接口 207 维护处理不变。H5 同时修正原先注释掉成功码判断导致任意错误码都提示“修改成功”的问题，原 207 toast“旧资金密码不正确，请重输”被替换。登录密码、首次设置资金密码、提现输资金密码未改。版面/主题色/开关/control.js 无变更。
- 验证：Node v14.21.3、隔离副本 Vue/compiler 2.5.21 完整 PC/H5-v2 生产构建通过；产物含新逻辑，仅 Vue 2.5.21、无 2.7 混入。未用真实账号触发 207 锁定验证。
- 代码：`b1e3601ed96899050cd229a7050d4432ac038ed5` 已推送 origin/BY-Demo-H5V2-PC，远端与本地一致。
- 发布：PC 556 文件 → /usr/local/nginx/html/pc，备份 `_rollback_before_b1e3601ed_20261110-125756`；H5 759 文件 → /usr/local/nginx/html/wap，备份 `_rollback_before_b1e3601ed_20261110-125805`。H5 发布脚本末步校验同 10-29 误报（static/js 超 2000 文件列表分页），已经公网核对：biyingbaowang.cc PC/H5 index、app（PC app.7b1a7ada…，H5 app.b38712c6）及变更 chunk（PC 1.97bc9e6e…、H5 resetPayPwd.fd168669）均 HTTP 200 且 SHA256 与构建一致。运行时配置未覆盖。证据：本地 output/paypwd-lockout-20261110（不入库）。
- 其他商户：除 8321 外的商户分支未同步，需逐商户确认后再推送。

## 2026-10-30 PC 游戏空弹窗修复与发布

- 共用弹窗编译/运行时固定为 Vue 2.5.21，加构建版本门槛及绝对运行时 alias，修正重复 footer；14 项真实运行时检查、完整构建及线上体育/电子游戏提示显示与取消验证通过。
- 最终 PC 已备份发布，线上 app.e735f19d9e6f6f7b8130.js 与默认入口哈希一致；H5/独立商户无变更。业务代码 ca09a5107、a2bb1b50e 已于本轮重试成功推送；origin/BY-Demo-H5V2-PC 与本地 HEAD 完整 SHA 均为 a2bb1b50e7caa12579185e28ab4615321edc41a5，之前待推送状态解除。本轮未重复部署。
- 提示显示采用受控前端状态，不调用游戏登录/钱包转换或投注。详见[修复发布记录](../pc/manual-BY-Demo-game-modal-2026-10-30.md)。



## 2026-10-30 演示站 PC 游戏空弹窗只读排查

- 蓝白版 /#/game/BALL：POST /party/v2/game/queryPlatformGames 参数 code=BWSPORT_BALL，HTTP200、外层code200／内层code0，正常返回足球列表。
- 线上 Vue 2.5.21；共用 modal 包装组件有 content 插槽，内部 iView Modal 的 $slots 为空，DOM 仅有“棋牌游戏”标题/关闭图标。渲染函数将插槽 fallback 编译成 function，而实际 2.5.21 的 _t helper 不调用该函数，确认存在编译产物与运行时兼容问题。
- 其他游戏同样异常为用户反馈，共用组件路径支持共同根因；未逐一点击游戏。未调用游戏登录接口、未触发钱包转换或真实投注。业务代码、资源配置无修改，无构建/部署；仍待修复与复验。
- 本地证据：C:/works/tgproject/output/game-modal-capture-20261030/REPORT.md；含脱敏请求摘要、列表原始响应及线上插槽/渲染函数证据。线上脚本 app.0fb9c542a75c1262a10f.js。


## 2026-10-29 PC/H5 聊天室进入限制文案

- 范围：演示站 BY-Demo-H5V2-PC 的有效 pc/、h5-v2/；未同步至任何独立商户分支。已先核对功能地图及 8315 相关入口差异，未合并商户差异。
- 接口：POST /api/v2/chat/queryChatRooms，读取目标房间对象 enterStatusDesc；后端约定 systemChatRooms 数组元素带此字段。非空时直接 toast 后端原文并终止本次进入，空字符串或字段缺失延续原等级/密码校验。限制文案不经过翻译替换。
- PC：覆盖各现有版面导航/首页卡片进入、聊天室直达/刷新/身份变化，以及房间选择。BaseNav 被拦截时复原加载标志；直达受限时隐藏聊天内容并返回首页，不能被 isOtherToChatRoom 绕过。
- H5：覆盖 views/views2/views8/views9 群聊/列表、当前房间快捷跳转、公共权限 mixin、切房间以及刷新缓存恢复；刷新受限时不写入待加入房间，返回当前模板列表。
- 版面、主题色、开关和资源 control.js 无变化；未使用废弃 h5/，不改后端规则。queryChatRoomComboBox 为独立接口，本次不扩展其后端字段合同。
- 代码：5667e291f8c30bada78684d175930967d26049e7，已本地提交；Git 服务器 47.52.90.110:80 连接失败，推送及远端 SHA 核对未成功，仍待推送。
- 验证：Node v14.21.3、实际 Vue 2.5.21 定向回归共 57 项通过，包含 19 个修改文件的脚本/模板解析及非空/空串/缺字段/优先级/旧跳转标志/刷新/切房间拦截；定向 diff 检查通过。PC/H5 生产构建均通过，发布产物内已验证 enterStatusDesc 拦截与 Vue 2.5.21，未夹带较新 Vue 运行时。测试脚本、构建快照/产物仅保存在本地 output/chat-entry-restriction-20261029，不进入业务提交。
- 发布：发布前只读 GetDir 被宝塔 API 出口 IP 白名单拒绝，未备份、上传或修改服务器文件；未线上联调或验收，不宣称演示站已生效。
- 地图：独立仓库提交推送状态以交付时远端核验为准。

## 2026-10-29 演示站发布完成及推送补充

- 代码已推送；本地 HEAD 与 origin/BY-Demo-H5V2-PC 完整 SHA 均为 5667e291f8c30bada78684d175930967d26049e7，此前待推送解除。
- 通过既有宝塔面板登录，将既有单条 API 白名单轮换为当前客户端出口；未改密钥或扩大白名单。随后发布 PC 555 个文件与 H5 759 个文件，保留运行时配置。
- 回滚备份：PC /usr/local/nginx/html/pc/_rollback_before_5667e291f_20261029-212608；H5 /usr/local/nginx/html/wap/_rollback_before_5667e291f_20261029-212643。
- H5 原发布脚本最终校验因 static/js 累积文件超过 2000，第一页未列到新 app，误报校验失败；已按完整路径读取服务器 H5 index/app 并比对，index 相同，app SHA256 为 92f6b53325d68c1142743d90e49c88355503dbb4efc9c03b811aa265901ac4a3，与发布包一致。未再次覆盖发布或删除旧资源。
- 公网桌面/手机 UA 的入口及入口引用脚本 SHA256 全部与本地产物一致：PC app.0fb9c542a75c1262a10f.js，H5 app.9bf4de79.js。浏览器 PC/H5 首页正常打开，截图和校验依据在本地 output/chat-entry-restriction-20261029。
- H5 游客聊天页仍报 RongYun connection stopped，并见 discovery~helpCenter~home chunk 的 undefined is not iterable；受限账号非空 enterStatusDesc 的实际线上 toast 未验收，不能将发布/首页成功写成聊天室业务联调通过。未改变用户权限或发送消息。
