# 商户分支功能地图：BY8364-JYC

- 商户：8364-金运彩
- 生成时间：2026-07-16 13:51:07 +0900
- 来源：远端分支 `origin/BY8364-JYC`
- 分支提交：`8e59e9e74` / 2026-07-16 13:50:27 +0900 / feat: customize BY8364 mobile home navigation
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：2 个；涉及功能域：首页/导航/版面、聊天室/私聊。
- 手机端使用 `temp1/views2` dafa 首页，隐藏首页“盈利榜”“聊天室”以及底部“聊天”按钮。
- 无 PC 端、废弃 `h5/` 或其他路径差异。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏快捷入口、底部导航、入口隐藏后的自动等宽补位。 |
| 聊天室/私聊 | 首页聊天室入口和底部聊天按钮保持隐藏，不受 `CHAT_SWITCH`、`CHAT_TAB` 开关重新开启。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 2 | 1 | 44 | h5-v2/src/views2/home/newfastNav.vue<br>h5-v2/src/views2/layout/layout.vue |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 2 | h5-v2 | h5-v2/src/views2/home/newfastNav.vue<br>h5-v2/src/views2/layout/layout.vue |
| 聊天室/私聊 | 2 | h5-v2 | h5-v2/src/views2/home/newfastNav.vue<br>h5-v2/src/views2/layout/layout.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 2 |

## 主题色/展示资源线索

无主题色或静态资源差异。

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 2 | 0 | 2 | 3cfbdca10bb3 | 2026-07-16 13:19:03 +0900 |
| origin/BY-Demo | 964 | 0 | 969 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 4204 | 3 | 4213 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 8e59e9e74 | 2026-07-16 | feat: customize BY8364 mobile home navigation |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 1 | 21 |  | h5-v2/src/views2/home/newfastNav.vue |
| M | h5-v2 | 页面 | 首页/导航/版面、聊天室/私聊 | 0 | 23 |  | h5-v2/src/views2/layout/layout.vue |

## 手工补充记录

| 日期 | 端 | 功能域 | 路径 | 已确认差异 | 验证状态 |
| --- | --- | --- | --- | --- | --- |
| 2026-07-16 | h5-v2 | 首页/导航/版面、聊天室/私聊 | h5-v2/src/views2/home/newfastNav.vue<br>h5-v2/src/views2/layout/layout.vue | `temp1/views2` 首页不渲染“聊天室”和“盈利榜”，不挂载盈利榜弹层；两套底部导航列表均移除“聊天”，不会被 `CHAT_TAB` 再次开启。 | 生产构建产物成功生成；Playwright 以 375×812、金运彩名称并强制 `CHAT_SWITCH=1`、`CHAT_TAB=1` 验证三个入口均不可见，剩余入口等宽补位。 |

## 生成依据

- 分支：`origin/BY8364-JYC`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/BY8364-JYC -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
