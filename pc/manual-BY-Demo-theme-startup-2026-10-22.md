# 2026-10-22 演示站 PC 刷新先红后蓝修复

- 范围：`BY-Demo-H5V2-PC` 的 `pc/src/utils/less.js`、`pc/src/main.js`、`pc/src/App.vue`、`pc/index.html`；截图路由 `#/buyLottery/21`，PC 蓝白版。H5、其他商户、资源库和 control.js 配置未改。
- 根因：Vue 在异步 Less 完成前挂载，投注页先使用编译时红色，再应用已保存的蓝色主题；App 另有按旧缓存键重新插入 CSS 的路径。不是下注金额或投注结果引起的主题切换。
- 修复：初始化读取保存/默认主题，将相同变量交给 Less 首次编译与后续 modifyVars；等待主题应用成功后才挂载页面。Vue 根实例同步创建/导出，保留接口、趋势和聊天等模块对根实例的访问；移除挂载时旧缓存 CSS 重插。加载阶段显示中性提示，脚本失败/编译失败/15 秒超时则显示刷新重试提示，不展示错误颜色的投注界面或一直空白。没有新增固定两秒等待。
- 检查：Node v14.21.3、实际 Vue 2.5.21 验证延迟 CSS 下禁止提前挂载、根实例同步可访问、保存/默认红蓝主题、损坏缓存、关闭换肤、脚本/编译失败和超时；App 模板编译与本次路径 diff 检查通过。完整 PC 构建通过，发布包实际 Vue 为 2.5.21。
- 本地真实浏览器：用最终构建包、实际 Vue/Less 和只读接口预览，以 20ms 间隔采样头部颜色。首次进入为 loading → `rgb(31,110,254)`（约 2024ms 首次可见），再次刷新同样直接从 loading → 蓝色（约 5140ms）；没有采到红色。耗时包括接口和网络，不作为性能承诺。采样和临时代理仅保存在本地 output，未提交。
- 代码提交：`8207b9a0016e1a37ed35f293fb301c7099a5a86f`。此前多次因 `47.52.90.110:80` 连接失败待推送；2026-10-22 按用户再次「推送」指令重试成功，`git ls-remote origin refs/heads/BY-Demo-H5V2-PC` 与本地 HEAD 完整 SHA 一致，分支已同步。待推送状态解除，本轮仅补推与更新记录，未重复部署。
- 发布：已通过现有宝塔 CLI 备份并发布演示站 PC，共 555 文件；排除运行时 configstatic。回滚目录 `/usr/local/nginx/html/pc/_rollback_before_8207b9a00_20261022-145203`。发布 API 按既有规则仅轮换当前单一出口 IP，未开放任意 IP 或更换密钥。
- 公网复验：主包 `app.d2aeea58f6469ef3c54f.js`；入口、入口引用脚本、生成 theme.less 的 SHA256 与发布包一致。线上 `#/buyLottery/21` 重新进入及刷新时先显示「正在加载页面…」，之后头部为 `rgb(31,110,254)`。线上复验为游客态，没有提交真实投注或操作资金，未做其他版面完整业务验收。
- 证据目录：本地 `output/demo-pc-theme-startup-20261022/` 内 `browser-paint-proof.json`、`online-ui-proof.json`、`public-proof.json`、`online-after-refresh.png`。原 `pc/static/css/theme.less` 脏改动哈希仍为 `334B30A9A1309153BA2A9446B9B22719C796F983DBEA4A5179AC40FB8EECC47E`，未混入提交；临时预览/构建/测试文件未提交。
