# 6688 PC 私聊粘贴图片重复显示修复记录

- 记录时间：2026-09-03
- 商户：8315-6688彩票
- 分支：`BY8315-6688-h5`
- 端：PC
- 页面/路由：聊天室私聊，`#/chatRoom`
- 功能域：聊天室/私聊、接口/状态/工具
- 涉及 SDK：融云 5.7.7

## 线上核查

- 使用业主提供的账号登录 `https://6688cp0540.top/#/chatRoom`，确认当前页面为 PC 聊天室。
- 线上控制文件版本参数为 `2026.0903.085901`，聊天室代码位于资源 `static/js/3.c4d9a49ead4d873ba3a7.js`。
- 普通文件选择图片的 `sendImgMessage` 已在发送成功后执行 `UPATE_CHAT_CONTACT_MESSAGE`，对应代码提交 `cf5d8e66a`。
- 粘贴图片的 `sendPasteImgMsg` 在线上仍只补写 `messageUId` 和成功状态，没有执行同一合并动作。

## 根因与责任边界

PC 私聊发送图片时会先把没有 `messageUId` 的本地占位消息插入当前列表。融云发送完成会返回正式 `messageUId`，同时实时消息通道也可能回显一份带相同 `messageUId` 的消息。

当实时回显先到、发送成功回调后到时，列表会暂时存在两份对象；粘贴图片路径只给占位对象补 ID，没有重新按 ID 合并，因此同一图片可能显示两份。多次实时同步或列表更新时可能短暂放大为三份。刷新后从服务端历史重新加载只得到一条，所以问题属于 PC 前端内存列表去重缺失，不是后端重复保存。

## 本地修复

- 在 `sendPasteImgMsg` 开始时保存当前 `toUser`，上传和回调均使用该固定对象。
- 图片发送成功并取得 `messageUId` 后，调用既有 `UPATE_CHAT_CONTACT_MESSAGE`。
- 复用 `mergeChatMessagesByUId` 按正式消息 ID 合并本地占位与融云回显，不增加请求或消息发送次数。
- 新增回归断言，确保粘贴图片路径包含固定联系人、固定目标 ID 和确认后合并。

## 验证

- `node pc/test/regression/chat-list.regression.js`：通过，Node `v24.16.0`。
- `npm run build`（`pc/`）：通过，webpack 3 构建完成；仅有项目既有 Node 循环依赖提示、Browserslist 数据过期及资源体积提示。
- 代码提交：`82931c3b8`。
- 状态：尚未部署验证。
