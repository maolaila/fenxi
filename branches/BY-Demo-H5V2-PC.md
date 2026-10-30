# BY-Demo-H5V2-PC 功能地图

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
