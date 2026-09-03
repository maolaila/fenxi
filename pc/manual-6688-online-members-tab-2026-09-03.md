# 6688 PC 聊天室在线会员入口恢复

## 问题与结论

- 商户：8315-6688彩票。
- 现象：PC 聊天室左侧只有“消息列表”和“活跃人数”，管理员/客服原有的“在线会员”入口不再展示。
- 结论：属于 PC 前端功能回退。当前商户分支的左侧栏模板只渲染两个页签并固定各占 `50%`；后端在线会员接口 `/api/v2/user/activeUsers` 及前端请求代码仍存在，无需修改后端。

## 修复内容

- 管理员或客服账号恢复“在线会员”第三个页签；普通会员仍只展示两个原有页签。
- 三个页签采用 flex 自适应等宽布局。
- “活跃人数”继续使用 `/api/v2/chat/queryChatPersons` 返回的当前聊天室人员列表。
- “在线会员”调用现有 `/api/v2/user/activeUsers`，排除当前账号，并复用已有的账号/昵称/姓名模糊搜索、`300ms` 防抖及旧响应丢弃逻辑。
- 切换页签时取消未完成的防抖搜索并使旧请求失效，防止两个列表互相覆盖。
- 打开私聊仍沿用现有管理员/客服、私聊开关和聊天室禁私聊权限判断。

## 影响范围

- 修改：`pc/src/views/chatRoom/chatLeft/index.vue`
- 修改：`pc/src/views/chatRoom/chatLeft/peopleList.vue`
- 修改：`pc/src/lang/zh_CN.js`
- 回归：`pc/test/regression/chat-list.regression.js`
- 不修改：后端接口、H5-v2、普通会员左侧栏、聊天室消息列表及融云消息逻辑。

## 验证结果

- 代码提交：`957991084`。
- `node pc/test/regression/chat-list.regression.js`：通过。
- `npm run build`（`pc/`）：通过。
- 构建仅出现项目原有的 Node 循环依赖、Browserslist 数据陈旧和资源体积提示，无新增编译错误。
- 部署后需使用管理员或客服账号进入 PC 聊天室，复验第三页签、在线会员加载、搜索及发起私聊。
