# 2026-10-10 演示站经典 PC 蓝色主题与 control.js 来源

- 用户确认硬规则：依赖 `control.js` 生效的改动必须在统一资源仓库 `C:\works\resource`、`dev` 分支的商户/端目录修改；其他商户独立分支的项目本地配置会被覆盖。演示站手动上传包，须同时维护资源库 `bydemo` 和项目演示站本地配置。完整规则见项目 `AGENTS.md` 和本资料仓库 `README.md`。
- 范围：演示站 `biyingbaowang.cc`，经典 PC 版 `temp`；资源路径 `bydemo/configstatic/pc/control/control.js`，项目配置 `pc/configstatic/pc/control/control.js`；同时补齐 `pc/src/styles/theme/theme.less` 的经典登录标题/忘记密码换肤规则，并更新 `pc/index.html`、`pc/src/utils/less.js` 的配置/主题样式缓存参数。H5、其他商户未改；其他 PC 版面色值未改。
- 现场：线上配置与资源库旧 `bydemo` 文件一致；经典版 `CONTROL_LESS.temp` 仅有白色背景和按钮背景项，缺少主色。经典登录页标题、忘记密码、登录按钮实际为 `rgb(228, 57, 60)`，即默认红色 `#e4393c`；页头使用另一主题路径，仍显示蓝色。
- 修复：补齐 `@primaryColor=#1F6EFE`、`@primary-color=#1F6EFE`、`@primary-color-hover=#0547ef`，保留其他项；项目本地已有相同蓝色值，增加同步维护说明。
- 首次只补齐配置时，按钮及客服恢复蓝色，但标题/忘记密码仍使用 Vue scoped 的红色编译样式；补齐高优先级的动态主题规则，颜色继续来自 `@primary-color`，未固定其他版面颜色。旧同版本配置也有缓存，入口每次构建更新配置参数，动态 Less 请求刷新版本。
- Node `v14.21.3`：两份配置语法校验、经典主色一致性及其他版面配置不变检查、入口模板编译、生成主题 Less 的蓝色规则检查、PC 生产构建均通过。初次构建因原 `theme.less` 文件被占用失败，改在输出目录隔离构建成功；原文件哈希与构建前备份相同，既有未提交修改保留。
- 2026-10-10 已通过已登录的宝塔面板发布：PC 包解压到 `/usr/local/nginx/html/pc`；实际共享配置文件是 `/usr/local/nginx/html/configstatic/pc/control/control.js`，只补齐三个颜色字段。默认版面、Logo、客服及其他配置保留，H5 未发布。
- 服务器回滚包：`/usr/local/nginx/html/pc/_rollback_before_classic_blue_20261010.tar.gz`（当前 index/static，41.83 MB）；原配置及原入口备份在本地 `output/demo-classic-blue-20261010/control.before.js`、`index.before.html`，宝塔编辑器也保留保存历史。
- 发布包 `output/demo-classic-blue-20261010/pc-blue-20261010.zip`（30,256,670 字节）只含 index/static，不整份覆盖 configstatic。线上入口与包内入口逐字核对一致；当前主包 `app.5fac92d8b7f7655dd248.js`。1280px 经典登录页标题、忘记密码和登录按钮均为 `rgb(31, 110, 254)`，顶部客服也为蓝色。截图 `output/demo-classic-blue-20261010/login-blue-published.png`；未执行登录/投注/资金交易。
- 提交与推送：资源库 `dev` 为 `d53779192392ff9855e3eecc4b2ad2e1cfef5311`（仅 bydemo PC 配置）；演示站为 `e669b4c264bef849ad28671ac3d1ce0eb543c1f5`（规则、配置同步说明、缓存参数及登录主题规则）。先发布，收到用户“推送代码”后于 2026-10-10 成功推送两仓库，`git ls-remote` 核对两个远端分支 SHA 均与本地 HEAD 一致。资料仓库规则及发布记录另行推送至 `origin/main`，既有其他商户未提交修改保留。
