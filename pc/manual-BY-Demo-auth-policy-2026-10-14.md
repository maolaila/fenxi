# 2026-10-14 演示站 PC/H5 登录注册配置与 CLI 发布

- 范围：BY-Demo-H5V2-PC 的 pc/、h5-v2/；本次认证配置提交只 cherry-pick 到 BY8368-JSYL。不修改废弃 h5/、其他商户、后台字典值或资源库 control.js。
- 主提交：演示站 30c90299d，对应 8368 894dad2a5；边界补丁演示站 fbf1c5d82，对应 8368 3ab796498。两分支已推送，git ls-remote 与本地 HEAD 一致。
- 数字验证码按 LOGIN_CAPTCHA_ENABLE / REGISTER_CAPTCHA_ENABLE 分开，阿里云优先；阿里云关闭且图形开启时显示图形，两者关闭不展示、不请求图片、不提交旧 checkCode。配置加载前继续等待行为配置，不伪造验证码成功。
- 阿里云必须 openStatus=1 且对应 loginOpen/registerOpen=1。JSON 角色字段优先，缺失时按 WEB/IOS/ANDROID 字典回退，旧配置仅总开关时兼容；注册、试玩和注册页短信使用注册角色，其他短信默认登录角色。配置刷新清理旧角色值。
- 注册/试玩密码使用 PASSWORD_STRENGTH_LEVEL 的 level、regex、tips。0 仅要求非空，1–4 对应新 6–22/8–22 规则；无新字段时兼容旧规则，错误配置阻止提交。登录、修改密码等非注册业务维持已有规则。8368 原固定 6–14 密码要求由用户确认改为后台规则，纯数字账号 8–14、确认密码、邀请码、协议、扩展字段以及隐藏聊天/彩票大厅定制保留。
- Node v14.21.3：认证组合/总开关/设备/级别/异常配置/输入不被改写测试、原验证码生命周期及密码回归通过；8368 账号边界和 H5 路由/必填字段回归通过。演示站最终 PC/H5 生产构建通过；8368 主提交两端构建通过，边界补丁定向回归和模板编译通过。
- 演示站新包通过本地 bt-demo.cmd 发布到 /usr/local/nginx/html/pc 和 /usr/local/nginx/html/wap；包排除 PC pc/ 与 H5 configstatic/，服务器运行时配置不覆盖。CLI 对每端覆盖前复制旧代码为可回滚目录，并在异步解压后核对 index.html 和 app 文件大小。
- CLI 路径 C:\Users\maola\.codex\local-tools\tgproject-demo\bt-demo.cmd；使用说明同目录 access.txt。面板 API 已按用户授权开启，白名单仅保留当前单一出口 IP；账号、密码及 API 密钥存本机 Windows CurrentUser DPAPI 加密资料，不提交仓库。出口变化需替换 API 白名单。
- 线上复验：PC 注册页显示“密码为6-22位字符”，注册页当前不显示数字码；PC 登录可见阿里云点击验证。H5 注册/登录可见行为验证入口且无数字码，注册密码提示同样为6–22；四种开关组合通过本地回归验证，没有修改后台配置来强行切换线上全部组合。
- 没有提交真实注册、试玩、登录或短信，没有完成阿里云挑战；未发布 8368/8367 生产环境。

## 聊天室默认彩种发布补充

- 演示站房间彩种接入 5d8f7b01a 已随最终代码推送并在 PC/H5 发布。PC queryLotteryList 使用业务 roomId，H5 queryChatPrizeList 同样使用业务 roomId，保持后台返回顺序及人工选择逻辑。
- PC 真实网络抓到 roomId=1、lotteryType=-2；H5 后台当前关闭开奖公告展示，未抓到该展示条的真实 queryChatPrizeList，因此不将 H5 请求/配置彩种运行结果描述为已实测。源码回归与发布入口核对通过。

## 最终发布证据

- 2026-10-14 最终发布 fbf1c5d82：PC app.4c8e2d45c7b4f5a5b008.js，H5 app.597865eb.js；桌面/手机 UA 获取入口 HTML 与各自本地 dist 逐字符一致，CLI 核对服务器入口及 app 文件大小通过。
- PC 回滚目录 /usr/local/nginx/html/pc/_rollback_before_fbf1c5d82_20261014-191446；H5 回滚目录 /usr/local/nginx/html/wap/_rollback_before_fbf1c5d82_20261014-191451。
- H5 实际免费试玩页显示“密码为6-22位字符”，没有点击开始试玩。最终截图及发布 JSON 证据保存在本地 output/demo-auth-policy-20261014，不提交项目仓库。
- PC 包 SHA256 D2BC9E5C9CDB75310D76EA945A35F1C56A34187B663DA7990899E2EDE34F0E21；H5 包 SHA256 5992B2312434D64CD9B5BADAECEEC09517C76B46F06C57235037805657D1314B。
