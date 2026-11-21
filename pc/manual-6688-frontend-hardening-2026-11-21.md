# 2026-11-21 8315-6688 前端安全加固（CSP、全站 v-html 过滤、强制更新）

- 商户：8315-6688彩票；分支 `BY8315-6688-h5`；PC、H5 两端。起因：聊天室注入事件（见 [聊天室 XSS 记录](manual-6688-chat-xss-2026-11-20.md)）后，用户要求"前端能做的都做"，且不能影响功能。
- 提交：`0e916504e`（CSP 与两处内联事件）、`57fd826e8`（全站 v-html 过滤、强制更新、测试）。

## 1. CSP：禁止 HTML 属性里的内联脚本

- 两端 `index.html` 最前加 `<meta http-equiv="Content-Security-Policy" content="script-src-attr 'none'; base-uri 'self'">`。`<img onerror>`、`<svg onload>` 等即使漏过过滤也不执行；不限制脚本文件和 `<script>` 标签，不支持该指令的旧浏览器忽略；`base-uri` 防注入 `<base>`。未限制 object/embed（PC 聊天室直播仍是已失效的 Flash `<embed>`，保持原样）。
- 会被拦的自有代码已改：PC `components/page.vue` 分页"跳至"框原 `oninput` 只留数字 → `@input` 同行为；H5 `views3/fund/components/CurrencyRate.vue` 的 `onkeyup="myFunction()"`（函数已不存在，每次按键报错）删除。测试中全量扫描两端模板，禁止再出现原生 `on*=` 属性。
- `javascript:void(0)` 类空链接不受影响（被拦也只是无动作，点击事件照常）。

## 2. 全站 v-html 统一过滤

- 编译模块（PC `build/safe-html-compiler-module.js` 经 `build/vue-loader.conf.js` 的 `compilerModules`；H5 `config/safeHtmlCompilerModule.js` 经 `vue.config.js` 的 `compilerOptions.modules`）把所有 `v-html="表达式"` 改写为 `v-html="$safeHtml(表达式)"`，新增 v-html 自动生效。H5 同时给 vue-loader / cache-loader 的 `cacheIdentifier` 加 `-safehtml-1`，避免运维构建沿用旧模板缓存；PC 无模板缓存。
- `$safeHtml`（`src/utils/safeHtml.js`，在 `main.js` 紧随 `import Vue` 由 `safeHtmlInstall.js` 注册）在惰性文档中解析，只删除能执行脚本的内容（script/noscript/object/embed/applet/base/meta/link/frame/frameset/math/SVG 动画、`on*`、`srcdoc`、`javascript:`/`vbscript:`/非图片 `data:` 链接、非 http(s)/站内的 iframe src、CSS `expression(`/`javascript:`），反复解析至稳定防 mXSS；排版、样式、表格、图片、视频、站内 iframe、`tel:`/`mqqwpa:`/`weixin:` 链接、融云表情 span 原样保留。纯文本直接返回，结果有缓存。
- 真实数据对比（6688 线上 105 段富文本：活动 38 个及详情、公告 01/02/03、帮助中心、资讯、彩种规则、代理说明）：87 段完全一致，18 段差异全部只是整页粘贴的活动内容中的 `<meta charset="UTF-8">`（正文中本不生效）。线上内容无事件属性、`javascript:`、script/iframe。
- 未覆盖（编译改写管不到的库内渲染）：H5 vant（搜索高亮、优惠券、Dialog HTML 模式）、mint-ui（滑动按钮、MessageBox），PC iView 确认框、彩票组件手写 render、第三方复制组件。传入的均为自有后端提示（如红包接口 `response.data.msg`）等非用户可控内容；现代浏览器由 CSP 兜底。

## 3. 强制更新（`src/utils/versionCheck.js`，`main.js` 中 `installVersionCheck(router)`）

- 页面加载 1 分钟后、此后每 5 分钟、以及页面在后台 ≥1 分钟后切回时，以 `?__v=时间戳` 请求首页，比对 `app.<hash>.js` 与当前运行的是否一致（只认同长度 hash，PC 20 位、H5 8 位，避免按设备返回不同首页时误判；请求失败/地区 403 忽略）。
- 发现新版只在安全时机刷新：路由切换后、页面在后台时、切回前台时、连续 10 分钟无操作；且当前路由不依赖 URL 以外的参数、无正在输入/已改动的输入框、无大尺寸 iframe（游戏、支付）、无播放中的音视频。
- 每个新版本每个标签页最多自动刷新一次（sessionStorage `__version_reloaded__`），CDN 未刷新时不循环；sessionStorage 不可用时不自动刷新。开发环境（入口无 hash）不启用。

## 验证

- Node v14.21.3 + 实际 Vue/编译器 2.5.21：新增 `h5-v2/tests/frontendHardening.test.js`（PC/H5 两份实现同测且逐行一致；25 种攻击载荷含本次 H2 真实载荷、mXSS 变体全部清除且重解析后仍无可执行内容；11 类正常富文本与原文语义一致；编译改写与组件真实渲染；强制更新各安全/不安全时机、同版本不刷新、跨端 hash、403、sessionStorage 不可用；CSP 存在且先于所有脚本；模板无原生内联事件；分页框只留数字）。H5 全部 16 项通过。
- 本地连 6688 线上（`output/6688-xss-verify-20261120/`，H5 用 Vue 2.5.21 运行时）：
  - 开发环境：CSP 拦截注入的 `onerror`；`$safeHtml` 已注册并被弹窗、公告、头条等组件使用；H5 活动列表/详情、帮助中心、彩种规则、协议、关于、开奖公告、红包规则等 10+ 页面正常且零违规；PC 首页、活动、公告、帮助、资讯、意见反馈活动、购彩大厅、登录/注册（易盾 + 阿里云"点击验证"弹窗）零违规；PC 分页框输入 `1a2b` 得 `12`。
  - 阿里云验证码在 CSP 下：H5 以线上场景参数自建测试实例弹出滑块无违规（测试中完成过一次滑动，回调为空、未提交登录）；PC 登录页"点击验证"弹窗正常、无违规（未再拖动）。6688 后台当前已开启登录阿里云验证（`loginOpen=1`），注册未开。
  - 生产构建（H5 产物仅 Vue 2.5.21）：本地静态服务（`serve-dist.js`，接口转发 6688）+ 首页注入早期违规记录：H5 14 个页面、PC 10 个页面从加载起零违规。强制更新端到端：H5 模拟发版，首次检查后不打扰，切换页面即刷新到新入口且停在目标页；模拟 CDN 过期（回源新、普通旧），只刷新一次后不再刷新；PC 模拟发版同样切换页面后刷新到新入口。
- 未实测：已登录状态下的聊天室/私聊页面渲染（需用户登录测试账号）；APP 内嵌 WebView；滑块实际拖动的 PC 端。

## 第二轮自测（2026-11-21 下午，推送前）

- 新旧生产包逐页对比（基线 `bb7e9c030` 与加固版各打生产包，本地同时提供服务，逐页采集 #app 内全部元素的标签/类名/链接/样式/文字后比对；工具在 `output/6688-xss-verify-20261120/` 的 `swap-baseline.js`、`collect-*.js`、`diff-sigs.js`）：
  - H5 36 页（活动列表 + 24 个活动详情、帮助中心、彩种规则、协议、关于、资讯、红包规则、余额宝/借呗协议、登录、注册、活动规则）：27 页完全一致，9 页仅少 1 个 `<meta>`（活动内容里粘贴的 `<meta charset>`），无其他差异。
  - PC 13 页（活动列表及 4 个展开详情、公告、帮助中心 1/2/3、资讯、意见反馈活动、登录、注册）：全部一致（意见反馈页首次采集因未登录跳转时机不同出现差异，两边各重采两次均一致）。
- 登录态（测试账号由用户在本地页面自行登录；除进房提示外未向生产发送任何消息，攻击样本仅本地注入）：
  - H5 公聊：文字/图片/@/红包/表情正常，文字逐条与原文一致，零 CSP 违规；注入下午的新载荷（`onerror="eval(decodeURIComponent(…))"`）——他人/本账号同步的伪造弹窗、无用户消息被屏蔽并留痕，正文/昵称/头像中的载荷按文字显示，系统账号弹窗中的载荷只显示为文字；私聊页、会话列表预览同样无执行，冒充客服被屏蔽。
  - PC 聊天室：21 条消息正常、零违规；伪造弹窗/头条/无用户载荷被屏蔽，带载荷的文字与昵称按文字显示，系统弹窗夹带载荷只保留正常排版；左侧会话预览无注入元素。全程脚本执行 0 次、页面无任何 `on*` 属性。
- 强制更新（H5 生产包、真实浏览器）：检测到新版后，登录页输入框有未提交内容时切换页面不刷新、内容保留；清空后再切换即刷新到新入口并停留在原页面。
- H5 全部 16 项测试在已提交代码上重跑通过。

## 交付状态

- `0e916504e`、`57fd826e8` 已推送到 `BY8315-6688-h5`（远端 `57fd826e8d321032f3bba2d5761186abaf25aca6`，`git ls-remote` 一致），生产由运维发布，本记录不代表线上已生效。演示站及其他商户分支未同步。
- 本次发布后各端仍需手动刷新一次（强制更新从本版起才存在），此后发版自动切换。
