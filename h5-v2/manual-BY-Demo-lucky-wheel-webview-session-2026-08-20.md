# 演示站 H5 转盘 WebView 登录态接入记录

- 分支：`BY-Demo-H5V2-PC`
- 端：`h5-v2`
- 功能域：活动/红包/推广/下载、登录/注册/验证码、接口/状态/工具
- 影响路径：`h5-v2/src/views/lucky-wheel/index.vue`

## 已确认实现

- 原生 Android/iOS 可复用红包雨 WebView 协议，通过所属商户 H5 域名打开 `/#/lucky-wheel`。
- 支持路由参数 `userId`、`token`、`type`；`type` 使用 `android` 或 `ios`，未传时按 `wap` 处理。
- 转盘在 `created()` 的 `bootstrap()` 前同步原生登录态，避免首批 `/detail`、`/tasks` 等请求按游客身份发出。
- 登录态通过 `SET_USER_INFO` 同步到 Vuex 和 `localStorage.user`，沿用 H5 请求层现有的 `token`、`userId` 和签名请求头。
- 同账号进入时保留已缓存的用户字段；切换账号时只落地新账号的 `userId`、`token`，避免沿用上一账号资料。
- 会话写入后从当前路由移除 `userId`、`token`，保留 `type` 及其他活动参数，减少敏感参数留在 WebView 历史记录中的时间。
- 转盘活动、任务、抽奖次数、记录和奖品仍由现有 `/api/v2/turntable/*` 接口提供，原生端不传业务数据。

## 原生接入地址

```text
https://所属商户域名/#/lucky-wheel?userId={userId}&token={urlEncode(token)}&type={android|ios}
```

## 验证边界

- 本次仅完成 H5 接入改造；仓库不包含 Android Kotlin 或 iOS Swift 工程，原生入口、WebView 配置和双端构建需在对应原生项目中完成。
