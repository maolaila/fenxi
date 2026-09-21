# 演示站认证请求强制刷新阿里云验证配置

- 分支：`BY-Demo-H5V2-PC`。
- 有效端：`pc/`、`h5-v2/`；`h5/` 不变。
- 背景：后台动态开启阿里云验证码总开关及 WEB 开关后，旧页面可能继续使用 `querySystemConfig` 的 Vuex/localStorage 缓存，试玩注册不弹阿里云验证并被后端返回“验证码不能为空”。
- 修复：PC 与 H5-v2 的统一认证请求拦截器在登录、注册、短信验证码提交前，仅移除 `querySystemConfig` 对应缓存并重新获取配置；开启时先完成阿里云验证并提交 `aliCaptchaValidate`，关闭时沿用原流程。其他 API 缓存不清理。
- 影响路径：`pc/src/utils/request.js`、`h5-v2/src/utils/request.js`、`pc/test/regression/announcement-cache.regression.js`。
- 验证：Node `v14.21.3` 定向缓存回归通过；PC Webpack 生产构建通过；H5-v2 生产构建通过并保留既有 Sass/Browserslist/包体积警告。
- 线上状态：2026-09-16 已将提交 `286514bfcd3d48c6c976b3e6ddecfceeb4edc978` 的 PC 与 H5-v2 代码包发布到演示站；发布前备份分别保存在 `pc/_rollback_before_286514bfc_20260916/`、`wap/_rollback_before_286514bfc_20260916/`。
- 线上验证：后台开启阿里云总开关及 WEB 开关后，PC 与 H5-v2 试玩均已实际弹出阿里云滑块验证，说明前端重新拉取开关及调起验证已生效；未代替用户完成滑块，因此尚未验证“通过验证码后成功注册试玩账号”。
- 已知现象：关闭 PC 验证弹框后控制台出现 `timeoutDialog` 为空异常，并有阿里云 `language` 参数告警；H5-v2 首页仍有融云 SDK 的 `replace` 异常。上述现象不影响本轮“是否弹出验证框”的确认，但完整试玩成功链路仍需后续实测。

## 2026-09-21 登录/注册验证码二选一

- 演示站实测显示阿里云开启后仍保留数字验证码，原因是页面初始化读取的认证配置可能来自旧缓存。现同步 `BY8315-6688-h5` 的二选一规则：配置到达前隐藏数字验证码；阿里云开启时 PC/H5-v2 登录和注册仅展示行为验证并提交 `aliCaptchaValidate`；关闭时展示、加载并提交数字验证码。
- PC v6/v8/v10 登录与注册共用最新开关状态，切换到数字验证码模式立即加载图片；H5-v2 登录与注册每次进入强制读取开关。保留现有阿里云弹窗、数字码接口、主题、路由、表单规则及 `h5/` 废弃端。
- 影响路径：`pc/src/{api/sysDict.js,store/modules/sysDict.js,utils/getSysConfig.js,utils/request.js,components/YiDun/index.vue,components/login_dlg.vue,mixins/captcha.js,mixins/popupCaptcha.js,mixins/register.js,views/login/loginMixin.js,views-v6,views-v8,views-v10}`；`h5-v2/src/{api/sysDict.js,store/modules/sysDict.js,utils/request.js,mixins/initGtCapthca.js,views/login/loginMixin.js,views/register/registerMixin.js}`；定向检查 `h5-v2/tests/captchaVisibility.test.js`。
