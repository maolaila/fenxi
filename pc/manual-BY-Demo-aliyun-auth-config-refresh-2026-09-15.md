# 演示站认证请求强制刷新阿里云验证配置

- 分支：`BY-Demo-H5V2-PC`。
- 有效端：`pc/`、`h5-v2/`；`h5/` 不变。
- 背景：后台动态开启阿里云验证码总开关及 WEB 开关后，旧页面可能继续使用 `querySystemConfig` 的 Vuex/localStorage 缓存，试玩注册不弹阿里云验证并被后端返回“验证码不能为空”。
- 修复：PC 与 H5-v2 的统一认证请求拦截器在登录、注册、短信验证码提交前，仅移除 `querySystemConfig` 对应缓存并重新获取配置；开启时先完成阿里云验证并提交 `aliCaptchaValidate`，关闭时沿用原流程。其他 API 缓存不清理。
- 影响路径：`pc/src/utils/request.js`、`h5-v2/src/utils/request.js`、`pc/test/regression/announcement-cache.regression.js`。
- 验证：Node `v14.21.3` 定向缓存回归通过；PC Webpack 生产构建通过；H5-v2 生产构建通过并保留既有 Sass/Browserslist/包体积警告。
- 线上状态：尚未发布；需发布后由后台重新开启阿里云总开关和 WEB 开关，分别验证 PC、H5-v2 试玩可弹出阿里云验证并成功注册。
