# 2026-10-30 演示站 PC 共用弹窗 Vue 2.5.21 兼容修复

- 范围：BY-Demo-H5V2-PC，pc/，蓝白版本。游戏提示、其他使用共用 modal 的内容按同一编译基线处理；H5 与独立商户无代码或部署变更。
- 根因：原产物运行 Vue 2.5.21，模板却由 2.7.14 编译，slot fallback 为函数，旧运行时不执行该函数；共用弹窗正文/按钮缺失。列表接口不是本次空弹窗根因。
- 改动：pc/package.json 与现有 lock 同步固定 vue/vue-template-compiler=2.5.21；vue-loader 配置发现版本不符即中止；webpack 的 vue$ 绑定 require.resolve 的绝对运行时路径，保证依赖共用同一 Vue；modal 的空页脚改为 v-else，避免重复 footer 插槽。
- 差异核对：动手前核对 8367、8315 与演示站的共用 modal/build 配置差异；仅提交演示站，不合并或同步商户差异。版面/主题色/功能开关/control.js 无变更。
- 检查：Node v14.21.3；实际 Vue/compiler 2.5.21、真实 iView 组件的 14 项渲染/事件/响应式检查通过；错误 2.7.14 依赖被构建门槛拒绝；完整 PC 生产构建通过；最终产物检查无 2.7.14/2.7.16 混入。
- 完整页面复验发现第一版隔离依赖解析仍混入两份 Vue，已恢复发布前入口，再用绝对 alias 解决。本地完整首页使用真实只读接口数据正常渲染后，重新构建并发布最终版。浏览器调试需跳过既有 diswatch debugger 暂停，不修改业务调试逻辑。
- 代码提交：ca09a5107828911bfc946245f7bb5649f2dd7c65、a2bb1b50e7caa12579185e28ab4615321edc41a5，均已本地提交。多次推送 origin/BY-Demo-H5V2-PC 均因 47.52.90.110:80 连接超时失败，仍待推送，无法完成远端 SHA 核对。Git bundle 已保存于本地 output/game-modal-fix-20261030/demo-modal-source.bundle。
- 发布连接：通过已登录面板将既有单条 API IP 白名单轮换为当前出口，未重置密钥或扩大白名单范围。
- 最终发布：PC 560 文件，/usr/local/nginx/html/pc；备份 /usr/local/nginx/html/pc/_rollback_before_a2bb1b50e_20261030-142232。运行时资源配置不在 ZIP 内，不删除历史资源。
- 最终公网：默认桌面入口、manifest.2059410faaafc164edbc.js、app.e735f19d9e6f6f7b8130.js 均 HTTP200 且 SHA256 与本地相同；app SHA256 ef9eb932f960c941a1ea239ca535654bd5c6d7bfbe933c90bdc671ec2067a90b。线上实测 Vue 2.5.21。
- 线上业务范围：BW 体育列表、体育页共用提示及电子游戏共用提示渲染检查通过；为避免触发钱包转换，以受控前端状态显示现网真实提示组件，并实际点击取消关闭。未调用 loginGame、未实际转换额度或投注；不将显示验证描述为第三方游戏登录验收。
- 证据：C:/works/tgproject/output/game-modal-fix-20261030，含构建日志、14 项检查、版本/公网哈希、两次发布记录及 online-ball-fixed.png/online-slot-fixed.png。临时文件/产物未提交业务仓库。
- 资料仓库提交与推送状态以最终交付远端核对结果为准，业务代码仍待推送。
