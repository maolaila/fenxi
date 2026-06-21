# PC 群聊玩家消息右键菜单修复记录

- 记录时间：2026-06-21
- 端：pc
- 页面/路由：聊天室，`#/chatRoom`
- 影响路径：`pc/src/views/chatRoom/chatMain/index.vue`、`pc/src/views/chatRoom/chatMain/components/userInfo.vue`
- 演示站基准：`origin/BY-Demo-H5V2-PC`
- 功能域：聊天室/私聊、个人中心/账户

## 已确认功能

PC 群聊玩家消息右键菜单是原有功能，不是本次新增功能。本次修复使管理员在群聊玩家消息上右键时稳定显示原有操作菜单：

- 撤回
- 禁言
- 置顶
- 查看用户资料

修复范围：

- 在群聊消息行上补充右键触发，避免只点到消息气泡局部时才可能触发。
- `isAdmin`、`privateChat` 权限字段兼容字符串 `1`、数字 `1` 和布尔 `true`。
- 右键菜单层级提高到 `z-index: 3000`，避免被聊天室右侧或悬浮内容遮挡。
- 右键菜单定位改为基于鼠标点击坐标和菜单实际渲染尺寸计算，仅在靠近视口边缘时防溢出，避免旧 `domEx.getClientHeight()` 在内部滚动页面下把菜单顶到页面上沿。

## 本次同步状态

- 演示站分支 `BY-Demo-H5V2-PC` 已同步并推送。
- 相关代码提交：
  - `c7b387fe8 fix: enable group chat admin context menu`
  - `d6288e3e5 fix: position chat context menu at cursor`
- 浏览器视觉验证：本地 PC 演示站 `http://localhost:8866/#/chatRoom` 返回 HTTP 200；通过临时本地测试消息验证，右键菜单显示 `撤回`、`禁言`、`置顶`、`查看用户资料`，菜单左上角与鼠标点击坐标一致。
- 临时测试注入代码已清理，未进入代码提交。
- 客户分支同步状态：本记录未标记客户分支已完成同步；后续如逐分支合并或核对，需要补充到对应客户分支功能地图。
