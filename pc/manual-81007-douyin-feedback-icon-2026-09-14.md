# 81007 抖音乐园 PC 意见反馈图标

- 商户与分支：功能地图未登记 `81007`／抖音乐园专属分支；按规则在 `BY-Demo-H5V2-PC` 演示站基线修复。
- 有效端与版面：`pc/`，线上控制文件选择 `temp2`（娱乐城版面），实际入口为 `pc/src/views-v3/layout/SlideQuick.vue`。
- 已确认根因：线上 `https://dw2024.com/configstatic/pc/images/feedback.png` 返回 404；该 v3 悬浮栏以 `<i>` 触发该硬编码背景图请求。
- 修复：入口改用现有 `pc/src/assets/images-v3/index/yjfk.png` 的 webpack 打包资源，并删除 v3 中对应的旧路径规则；点击反馈、登录拦截、路由、接口、主题、功能开关和 H5-v2 均未改动。
- 验证：使用 `C:\tools\node14\node.exe`（v14.21.3）执行 PC 生产构建；最新 v3 构建 chunk 包含 `yjfk` 资源且不包含旧反馈路径。线上尚未发布，待部署后复验。
- 线上资源证据：当前入口、控制文件与主 JS 的 `Last-Modified` 均为 2026-06-22 01:10:15～17 UTC；控制文件版本为 `2026.0622.090057`。线上包未嵌入 Git 分支或提交标识，无法精确归属；其 v3 入口与修复前演示站基线一致。
