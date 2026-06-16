# 商户分支功能地图：jinshayule

- 生成时间：2026-06-16 14:06:46 +0900
- 来源：远端分支 `origin/jinshayule`
- 分支提交：`76d39fe97` / 2024-02-03 17:32:21 +0800 / 1
- 对照基准：`origin/BY-Demo-H5V2-PC`（三点 diff，记录共同祖先到商户分支 tip 的变化）
- 有效端覆盖：h5-v2
- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。

## 结论摘要

- 有效端差异文件：4 个；涉及功能域：首页/导航/版面。
- 未在变更行中扫描到明确的十六进制颜色值。

## 客服/测试核对清单

| 功能域 | 建议核对点 |
| --- | --- |
| 首页/导航/版面 | 首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。 |

## 端差异总览

| 端/范围 | 文件数 | 新增行 | 删除行 | 代表路径 |
| --- | --- | --- | --- | --- |
| h5-v2 | 4 | 14 | 11 | h5-v2/src/components/Header/index.vue<br>h5-v2/src/views6/home/gamels/index.vue<br>h5-v2/src/views6/home/gamels/otherlist.vue<br>h5-v2/src/views6/home/header.vue |

## 功能域地图

| 功能域 | 文件数 | 涉及端 | 代表路径 |
| --- | --- | --- | --- |
| 首页/导航/版面 | 4 | h5-v2 | h5-v2/src/components/Header/index.vue<br>h5-v2/src/views6/home/gamels/index.vue<br>h5-v2/src/views6/home/gamels/otherlist.vue<br>h5-v2/src/views6/home/header.vue |

## 文件类型分布

| 类型 | 文件数 |
| --- | --- |
| 页面 | 3 |
| 组件 | 1 |

## 主题色/展示资源线索

- 颜色值：无明确十六进制颜色值。

无。

## 基准选择记录

| 候选基准 | 有效端文件数 | 废弃 h5 文件数 | 总文件数 | 共同祖先 | 共同祖先时间 |
| --- | --- | --- | --- | --- | --- |
| origin/BY-Demo-H5V2-PC | 4 | 0 | 4 | 5c3f963b6157 | 2024-02-02 16:06:49 +0800 |
| origin/BY-Demo | 176 | 0 | 176 | e7bcc7ad0a61 | 2023-12-12 17:15:34 +0800 |
| origin/master | 3897 | 3 | 3902 | b7335bc10372 | 2020-08-03 10:12:19 +0800 |

## 最近商户分支提交

| 提交 | 日期 | 说明 |
| --- | --- | --- |
| 76d39fe97 | 2024-02-03 | 1 |
| 7c71d03d5 | 2024-02-03 | 1 |

## 完整文件级差异清单

| 状态 | 端 | 类型 | 功能域 | 新增行 | 删除行 | 原路径 | 路径 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M | h5-v2 | 组件 | 首页/导航/版面 | 1 | 1 |  | h5-v2/src/components/Header/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 9 | 5 |  | h5-v2/src/views6/home/gamels/index.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 2 |  | h5-v2/src/views6/home/gamels/otherlist.vue |
| M | h5-v2 | 页面 | 首页/导航/版面 | 2 | 3 |  | h5-v2/src/views6/home/header.vue |

## 生成依据

- 分支：`origin/jinshayule`
- 基准：`origin/BY-Demo-H5V2-PC`
- 完整命令：`git diff --name-status --find-renames origin/BY-Demo-H5V2-PC...origin/jinshayule -- .`
- 有效端：`pc/`、`h5-v2/`
- 废弃端：`h5/`
