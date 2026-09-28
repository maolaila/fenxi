# 2026-09-28 演示站 PC/H5 融云断开循环请求修复

- 分支：`BY-Demo-H5V2-PC`；有效端 `pc/`、`h5-v2/`。主题、版面、聊天开关和接口地址不变。
- 原因：H5 全局 Socket 和 PC 聊天室收到 `DISCONNECTED` 后，只要业务用户非空，就重新调用 `connectRongYun`，再次获取 token；重复断开没有停止条件。
- 最终修复：页面断开监听不再执行整套取 token 流程；两端现有融云封装复用内存 token，在 5/10/20 秒后最多重试三次，并合并并发连接。SDK 恢复成功后清除当前重试计数；`SUSPEND` 仍由 SDK 自动恢复，不叠加业务重试。
- 仅 SDK 明确返回 `RC_CONN_TOKEN_INCORRECT(31004)` 或 `RC_CONN_TOKEN_EXPIRED(31020)` 时，当前凭证会话最多补取一次 token；返回相同无效 token 或取 token 失败均不循环请求。主动断开、被踢、用户/应用封禁及包名无效停止自动恢复。
- 身份切换先断开；若断开失败，不冒险连接新身份。退出取消定时恢复，异步 token 响应检查当前身份，避免旧身份重连。修复首次失败后再次连接成功却未更新前端状态的判断；恢复 H5 群组下拉刷新缺失的重连导入，并处理房间列表手动重试的 Promise 拒绝。
- 影响路径：两端 `src/utils/rongyun.js`、`src/store/modules/rongyun.js`；`h5-v2/src/components/Socket/index.vue`、`h5-v2/src/mixins/refreshAndInfiniteScroll.js`、`h5-v2/src/views/chat/chat/chatRoomList/index.vue`；`pc/src/views/layout/child_modal/socket.vue`、`pc/src/views/chatRoom/chatMain/index.vue`。未改投注/首页业务接口或其加载逻辑。
- 验证：专用 Node `v14.21.3` 执行 `h5-v2/tests/rongyunReconnect.test.js`（严格未处理拒绝模式）通过；覆盖重复断开不触发页面全流程、并发合并、旧 token 三次退避且业务接口计数不增加、首次失败后状态恢复、无效/过期 token 单次刷新、刷新失败和相同无效 token 停止、手动/自动恢复并发、退出及旧身份响应取消、断开失败处理。八个修改脚本经既有 Babel 编译通过，共用刷新 mixin 的 Node 14 语法检查通过；范围内 `git diff --check` 通过。
- 边界：隔离模拟及脚本编译通过；未做生产打包、真实融云/用户网络复验或发布。公共演示分支提交 `402a97bc12e5d449ee0f05798433d55648d1466a` 已推送到 `origin/BY-Demo-H5V2-PC`，已用 `git ls-remote` 核对远端与本地 HEAD 一致；商户 cherry-pick 尚未执行。接口是否占满服务端仍需请求耗时与服务端容量证据。
