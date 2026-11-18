# BY-Demo-H5V2-PC 功能地图

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
