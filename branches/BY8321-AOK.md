# 商户分支功能地图：BY8321-AOK

- 生成时间：2026-08-03 16:32:48 +0900
- 来源：远端分支 `origin/BY8321-AOK`
- 分支提交：`22e5e5d71` / 2026-07-20 10:33:11 +0900 / 修复系统公告翻页加载卡住问题
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：pc
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：9 个；涉及功能域：聊天室/私聊、个人中心/账户、接口/状态/工具、首页/导航/版面、未归类路径。
- 扫描到新增/变更颜色值：#ddd, #ec0022。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 聊天室/私聊 | 聊天室入口、开奖互动、私聊、撤回、消息展示。 |
| 个人中心/账户 | 个人中心、账户资料、设置、消息、会员相关入口。 |
| 接口/状态/工具 | 接口参数、Vuex 状态、公共请求/工具函数影响范围。 |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| pc | 9 | 521 | 28 | pc/src/utils/privateMessageMute.js<br>pc/src/utils/request.js<br>pc/src/views/chatRoom/chatLeft/itemList.vue<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/chatRoom/chatMain/index.vue<br>pc/src/views/layout/index.vue<br>pc/src/views/personalCenter/child_modal/information/information_system.vue<br>pc/test/regression/announcement-cache.regression.js<br>...另 1 个路径见完整清单 |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 聊天室/私聊 | 4 | pc | pc/src/utils/privateMessageMute.js<br>pc/src/views/chatRoom/chatLeft/itemList.vue<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/chatRoom/chatMain/index.vue |
| 个人中心/账户 | 3 | pc | pc/src/utils/privateMessageMute.js<br>pc/src/views/chatRoom/chatLeft/messageList.vue<br>pc/src/views/personalCenter/child_modal/information/information_system.vue |
| 接口/状态/工具 | 2 | pc | pc/src/utils/privateMessageMute.js<br>pc/src/utils/request.js |
| 首页/导航/版面 | 2 | pc | pc/src/views/chatRoom/chatMain/index.vue<br>pc/src/views/layout/index.vue |
| 未归类路径 | 2 | pc | pc/test/regression/announcement-cache.regression.js<br>pc/test/regression/information-system-loading.regression.js |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 5 |
| 工具/混入 | 2 |
| 其他 | 2 |

## 主题色/展示资源线索

- 颜色值：#ddd, #ec0022

无。

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 9 | 0 | 9 | eba25950c857 | 2026-06-22 09:59:39 +0900 |
| origin/BY-Demo | 954 | 0 | 958 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 4197 | 3 | 4205 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 22e5e5d71 | 2026-07-20 | 修复系统公告翻页加载卡住问题 |
| ec71bbef0 | 2026-07-20 | 修复：取消 PC 公告接口成功响应缓存 |
| d801e32ce | 2026-07-16 | feat(pc): add per-user private message mute for BY8321 |
| 38acb54a7 | 2026-07-16 | feat(pc): make BY8321 red packet draggable |
| 3f9ba2b11 | 2026-06-29 | fix: play private chat notice for BY8321 |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | pc | 工具/混入 | 个人中心/账户、聊天室/私聊、接口/状态/工具 | 57 | 0 |  | pc/src/utils/privateMessageMute.js |
| M | pc | 工具/混入 | 接口/状态/工具 | 0 | 6 |  | pc/src/utils/request.js |
| M | pc | 页面 | 聊天室/私聊 | 33 | 1 |  | pc/src/views/chatRoom/chatLeft/itemList.vue |
| M | pc | 页面 | 个人中心/账户、聊天室/私聊 | 32 | 1 |  | pc/src/views/chatRoom/chatLeft/messageList.vue |
| M | pc | 页面 | 首页/导航/版面、聊天室/私聊 | 21 | 0 |  | pc/src/views/chatRoom/chatMain/index.vue |
| M | pc | 页面 | 首页/导航/版面 | 139 | 1 |  | pc/src/views/layout/index.vue |
| M | pc | 页面 | 个人中心/账户 | 19 | 19 |  | pc/src/views/personalCenter/child_modal/information/information_system.vue |
| A | pc | 其他 | 未归类路径 | 95 | 0 |  | pc/test/regression/announcement-cache.regression.js |
| A | pc | 其他 | 未归类路径 | 125 | 0 |  | pc/test/regression/information-system-loading.regression.js |

## 生成依据

- 分支：`origin/BY8321-AOK`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8321-AOK -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
