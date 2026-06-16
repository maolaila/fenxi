#!/usr/bin/env python3
"""Generate merchant customization maps from tgproject git branches."""

from __future__ import annotations

import csv
import json
import re
import subprocess
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


DOCS_REPO = Path(__file__).resolve().parents[1]
CODE_REPO = DOCS_REPO.parent
ACTIVE_ENDPOINTS = ("pc", "h5-v2")
DEPRECATED_ENDPOINTS = ("h5",)
BASE_BRANCHES = ("origin/BY-Demo-H5V2-PC", "origin/BY-Demo", "origin/master")

MERCHANT_RE = re.compile(
    r"^(8314-[A-Za-z0-9_-]+|B\d+[A-Za-z0-9_-]*|BY\d+[A-Za-z0-9_-]*|by\d+|jinshayule)$"
)

EXCLUDED_PREFIXES = (
    "codex/",
    "origin/codex/",
    "cr-",
    "origin/cr-",
    "develop",
    "origin/develop",
    "master",
    "origin/master",
    "chat",
    "origin/chat",
    "api",
    "origin/api",
    "release",
    "origin/release",
)

FEATURE_RULES = [
    ("登录/注册/验证码", ("login", "register", "password", "captcha", "aliyun", "auth", "forget")),
    ("首页/导航/版面", ("home", "index", "layout", "nav", "menu", "banner", "swiper", "hot", "village")),
    ("彩票/投注/开奖", ("lottery", "buyLottery", "buy-lottery", "bet", "trend", "drawAlottery", "prize", "ball")),
    ("资金/充值/提现", ("fund", "recharge", "withdraw", "bank", "usdt", "amountConversion", "conversion", "yeb", "lend")),
    ("个人中心/账户", ("personal", "account", "member", "user", "mysetting", "setting", "message", "vip")),
    ("代理/报表/团队", ("agent", "agency", "team", "report", "commission")),
    ("聊天室/私聊", ("chat", "chatRoom", "private")),
    ("客服/反馈/帮助", ("service", "kefu", "customer", "feedback", "help", "support")),
    ("活动/红包/推广/下载", ("active", "activity", "promotion", "poster", "packet", "redPacket", "download")),
    ("主题/颜色/静态资源", ("theme", "color", "style", "css", "less", "scss", "assets", "images", "img", "static", "icon", "logo")),
    ("构建/配置", ("package.json", "webpack", "vue.config", "babel", "config", ".env")),
    ("接口/状态/工具", ("api", "store", "vuex", "request", "utils", "mixin", "mixins")),
]

TYPE_RULES = [
    ("路由", ("router", "route")),
    ("接口", ("/api/", "\\api\\", "src/api")),
    ("状态", ("src/store", "/store/", "\\store\\")),
    ("页面", ("src/views", "views-v", "components/content")),
    ("组件", ("src/components", "common/module", "module_vue")),
    ("构建配置", ("package.json", "webpack", "vue.config", "babel.config", "config.js", "configstatic")),
    ("主题样式", ("theme", "color.less", "var.less", ".less", ".scss", ".css")),
    ("图片资源", ("assets", "images", "img", "resource")),
    ("工具/混入", ("utils", "mixins", "mixin", "request")),
]

CHECKLIST = {
    "登录/注册/验证码": "登录、注册、忘记密码、验证码弹窗、阿里云滑块。",
    "首页/导航/版面": "首页首屏、导航菜单、banner、热门入口、底部/侧边栏版面。",
    "彩票/投注/开奖": "购彩页、投注面板、彩种列表、开奖展示、走势图。",
    "资金/充值/提现": "充值、提现、银行卡/USDT 绑定、余额宝/借贷、金额转换记录。",
    "个人中心/账户": "个人中心、账户资料、设置、消息、会员相关入口。",
    "代理/报表/团队": "代理中心、团队报表、交易明细、佣金/下级入口。",
    "聊天室/私聊": "聊天室入口、开奖互动、私聊、撤回、消息展示。",
    "客服/反馈/帮助": "客服入口、帮助中心、反馈入口、多客服链接选择。",
    "活动/红包/推广/下载": "活动页、红包、推广海报、下载页。",
    "主题/颜色/静态资源": "主题色、logo、icon、背景图、静态 CSS 是否匹配商户。",
    "构建/配置": "构建命令、依赖、环境配置、输出路径。",
    "接口/状态/工具": "接口参数、Vuex 状态、公共请求/工具函数影响范围。",
}


def run_git(args: list[str], check: bool = True) -> str:
    result = subprocess.run(
        ["git", "-C", str(CODE_REPO), *args],
        check=False,
        text=True,
        encoding="utf-8",
        errors="replace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    if check and result.returncode != 0:
        raise RuntimeError(f"git {' '.join(args)} failed:\n{result.stderr}")
    return result.stdout


def run_git_docs(args: list[str], check: bool = True) -> str:
    result = subprocess.run(
        ["git", "-C", str(DOCS_REPO), *args],
        check=False,
        text=True,
        encoding="utf-8",
        errors="replace",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    if check and result.returncode != 0:
        raise RuntimeError(f"docs git {' '.join(args)} failed:\n{result.stderr}")
    return result.stdout


def md_escape(value: object) -> str:
    text = "" if value is None else str(value)
    return text.replace("\\", "\\\\").replace("|", "\\|").replace("\n", "<br>")


def safe_name(ref: str) -> str:
    name = ref.removeprefix("origin/")
    return re.sub(r"[^A-Za-z0-9._-]+", "_", name)


def endpoint_of(path: str) -> str:
    first = path.replace("\\", "/").split("/", 1)[0]
    if first in ACTIVE_ENDPOINTS:
        return first
    if first in DEPRECATED_ENDPOINTS:
        return "h5-废弃"
    return "其他"


def classify_type(path: str) -> str:
    p = path.replace("\\", "/")
    low = p.lower()
    for label, needles in TYPE_RULES:
        for needle in needles:
            if needle.lower() in low:
                return label
    return "其他"


def classify_features(path: str) -> list[str]:
    p = path.replace("\\", "/")
    low = p.lower()
    tokens = [token for token in re.split(r"[^a-z0-9]+", low) if token]
    labels: list[str] = []
    for label, needles in FEATURE_RULES:
        for needle in needles:
            if feature_matches(low, tokens, needle):
                labels.append(label)
                break
    return labels or ["未归类路径"]


def feature_matches(low_path: str, tokens: list[str], needle: str) -> bool:
    needle_low = needle.lower()
    if needle_low == "chat":
        return (
            "chatroom" in low_path
            or "fastchat" in low_path
            or "/chat/" in low_path
            or any(token in {"chat", "chatroom"} for token in tokens)
        )
    if needle_low == "private":
        return any(token.startswith("private") for token in tokens)
    return needle_low in low_path


def list_refs() -> list[str]:
    refs = run_git(["for-each-ref", "--format=%(refname:short)", "refs/heads", "refs/remotes/origin"]).splitlines()
    return sorted({r.strip() for r in refs if r.strip() and not r.endswith("/HEAD") and r != "origin"})


def classify_ref(ref: str, remote_names: set[str]) -> tuple[str, str]:
    name = ref.removeprefix("origin/")
    if name in {"BY-Demo", "BY-Demo-H5V2-PC"}:
        return "基准分支", "作为商户差异对照基准，不生成商户地图。"
    if ref.startswith(EXCLUDED_PREFIXES) or name in {"axiang", "justLotteryHalls", "only-chat-master-v2"}:
        return "排除", "工程/开发/历史功能分支，不按商户分支生成地图。"
    if "/" in name and not name.startswith("feat/"):
        return "排除", "不是商户命名分支。"
    if ref.startswith("origin/") and MERCHANT_RE.match(name):
        return "商户分支", "远端商户分支，纳入功能地图。"
    if not ref.startswith("origin/") and MERCHANT_RE.match(name):
        if name in remote_names:
            return "本地重复", "远端存在同名分支，以 origin 版本为准。"
        return "商户分支", "本地仅有商户分支，纳入功能地图并标注本地来源。"
    if name in {"feat/pony"}:
        return "排除", "功能修复分支，且已被基准分支包含，不按商户地图输出。"
    return "排除", "未匹配商户分支命名。"


def git_exists(ref: str) -> bool:
    return bool(run_git(["rev-parse", "--verify", "--quiet", ref], check=False).strip())


def diff_name_count(base: str, branch: str, paths: tuple[str, ...] | None = None) -> int:
    args = ["diff", "--name-only", f"{base}...{branch}"]
    if paths:
        args.append("--")
        args.extend(paths)
    output = run_git(args, check=False)
    return len([line for line in output.splitlines() if line.strip()])


def choose_base(branch: str) -> tuple[str, list[dict[str, object]]]:
    candidates: list[dict[str, object]] = []
    for base in BASE_BRANCHES:
        if not git_exists(base):
            continue
        active_count = diff_name_count(base, branch, ACTIVE_ENDPOINTS)
        total_count = diff_name_count(base, branch, None)
        deprecated_count = diff_name_count(base, branch, DEPRECATED_ENDPOINTS)
        merge_base = run_git(["merge-base", base, branch]).strip()
        merge_base_date = run_git(["show", "-s", "--format=%ci", merge_base]).strip()
        candidates.append(
            {
                "base": base,
                "active_files": active_count,
                "deprecated_h5_files": deprecated_count,
                "total_files": total_count,
                "merge_base": merge_base,
                "merge_base_date": merge_base_date,
            }
        )
    if not candidates:
        raise RuntimeError(f"No usable base branch for {branch}")
    chosen = sorted(candidates, key=lambda item: (int(item["active_files"]), int(item["total_files"])))[0]
    return str(chosen["base"]), candidates


def parse_name_status(base: str, branch: str) -> list[dict[str, str]]:
    output = run_git(["diff", "--name-status", "--find-renames", f"{base}...{branch}", "--", "."])
    entries: list[dict[str, str]] = []
    for line in output.splitlines():
        if not line.strip():
            continue
        parts = line.split("\t")
        status = parts[0]
        if status.startswith("R") or status.startswith("C"):
            old_path = parts[1] if len(parts) > 1 else ""
            path = parts[2] if len(parts) > 2 else old_path
        else:
            old_path = ""
            path = parts[1] if len(parts) > 1 else ""
        if not path:
            continue
        entries.append({"status": status, "path": path, "old_path": old_path})
    return entries


def parse_numstat(base: str, branch: str) -> dict[str, dict[str, str]]:
    output = run_git(["diff", "--numstat", f"{base}...{branch}", "--", "."])
    stats: dict[str, dict[str, str]] = {}
    for line in output.splitlines():
        parts = line.split("\t")
        if len(parts) < 3:
            continue
        additions, deletions, path = parts[0], parts[1], "\t".join(parts[2:])
        normalized = normalize_numstat_path(path)
        stats[normalized] = {"additions": additions, "deletions": deletions}
    return stats


def normalize_numstat_path(path: str) -> str:
    if " => " not in path:
        return path
    match = re.search(r"\{(.+?) => (.+?)\}", path)
    if not match:
        return path.split(" => ")[-1].strip()
    before, after = match.group(1), match.group(2)
    return path.replace("{" + before + " => " + after + "}", after)


def extract_colors(base: str, branch: str) -> list[str]:
    output = run_git(["diff", "-U0", f"{base}...{branch}", "--", "pc", "h5-v2", "h5"], check=False)
    colors: Counter[str] = Counter()
    for line in output.splitlines():
        if not line.startswith("+") or line.startswith("+++"):
            continue
        for color in re.findall(r"#[0-9A-Fa-f]{3,8}\b", line):
            colors[color.lower()] += 1
    return [color for color, _ in colors.most_common(30)]


def branch_meta(branch: str) -> dict[str, str]:
    return {
        "commit": run_git(["rev-parse", branch]).strip(),
        "short_commit": run_git(["rev-parse", "--short", branch]).strip(),
        "date": run_git(["show", "-s", "--format=%ci", branch]).strip(),
        "subject": run_git(["show", "-s", "--format=%s", branch]).strip(),
    }


def branch_commits(base: str, branch: str) -> list[dict[str, str]]:
    merge_base = run_git(["merge-base", base, branch]).strip()
    output = run_git(
        ["log", "--no-merges", "--date=short", "--format=%h|%ad|%s", f"{merge_base}..{branch}", "--max-count=30"],
        check=False,
    )
    commits = []
    for line in output.splitlines():
        parts = line.split("|", 2)
        if len(parts) == 3:
            commits.append({"hash": parts[0], "date": parts[1], "subject": parts[2]})
    return commits


def collect_branch(branch: str) -> dict[str, object]:
    base, base_candidates = choose_base(branch)
    meta = branch_meta(branch)
    name_entries = parse_name_status(base, branch)
    numstats = parse_numstat(base, branch)
    files = []
    for entry in name_entries:
        path = entry["path"]
        stat = numstats.get(path, {"additions": "", "deletions": ""})
        endpoint = endpoint_of(path)
        file_type = classify_type(path)
        features = classify_features(path)
        files.append(
            {
                **entry,
                "endpoint": endpoint,
                "type": file_type,
                "features": features,
                "additions": stat["additions"],
                "deletions": stat["deletions"],
            }
        )
    endpoint_counts = Counter(item["endpoint"] for item in files)
    type_counts = Counter(item["type"] for item in files)
    feature_counts = Counter(feature for item in files for feature in item["features"])
    active_files = [item for item in files if item["endpoint"] in ACTIVE_ENDPOINTS]
    deprecated_files = [item for item in files if item["endpoint"] == "h5-废弃"]
    other_files = [item for item in files if item["endpoint"] == "其他"]
    colors = extract_colors(base, branch)
    commits = branch_commits(base, branch)
    source = "远端" if branch.startswith("origin/") else "本地"
    display_name = branch.removeprefix("origin/")
    return {
        "branch": branch,
        "display_name": display_name,
        "source": source,
        "base": base,
        "base_candidates": base_candidates,
        "meta": meta,
        "files": files,
        "active_files": active_files,
        "deprecated_files": deprecated_files,
        "other_files": other_files,
        "endpoint_counts": dict(endpoint_counts),
        "type_counts": dict(type_counts),
        "feature_counts": dict(feature_counts),
        "colors": colors,
        "commits": commits,
    }


def table(headers: list[str], rows: list[list[object]]) -> str:
    if not rows:
        return "无。\n"
    output = ["| " + " | ".join(headers) + " |", "| " + " | ".join("---" for _ in headers) + " |"]
    for row in rows:
        output.append("| " + " | ".join(md_escape(value) for value in row) + " |")
    return "\n".join(output) + "\n"


def write_markdown(path: Path, lines: list[str]) -> None:
    path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8", newline="\n")


def summarize_paths(files: list[dict[str, object]], limit: int = 10) -> str:
    paths = [str(item["path"]) for item in files[:limit]]
    if len(files) > limit:
        paths.append(f"...另 {len(files) - limit} 个路径见完整清单")
    return "<br>".join(paths) if paths else ""


def write_branch_doc(data: dict[str, object], out_dir: Path) -> None:
    branch = str(data["branch"])
    name = str(data["display_name"])
    meta = data["meta"]
    files = data["files"]
    active_files = data["active_files"]
    deprecated_files = data["deprecated_files"]
    other_files = data["other_files"]
    feature_counts = Counter(data["feature_counts"])
    endpoint_counts = Counter(data["endpoint_counts"])
    type_counts = Counter(data["type_counts"])
    colors = data["colors"]
    commits = data["commits"]

    active_endpoints = [endpoint for endpoint in ACTIVE_ENDPOINTS if endpoint_counts.get(endpoint, 0)]
    active_text = "、".join(active_endpoints) if active_endpoints else "有效端无差异"
    top_features = [name for name, _ in feature_counts.most_common(8)]
    checklist_rows = [[feature, CHECKLIST.get(feature, "按完整文件清单逐项核对。")] for feature in top_features if feature != "未归类路径"]

    endpoint_rows = []
    for endpoint in ["pc", "h5-v2", "h5-废弃", "其他"]:
        subset = [item for item in files if item["endpoint"] == endpoint]
        if not subset:
            continue
        endpoint_rows.append(
            [
                endpoint,
                len(subset),
                sum_int(item["additions"] for item in subset),
                sum_int(item["deletions"] for item in subset),
                summarize_paths(subset, 8),
            ]
        )

    feature_rows = []
    for feature, count in feature_counts.most_common():
        subset = [item for item in files if feature in item["features"]]
        endpoints = "、".join(sorted({str(item["endpoint"]) for item in subset}))
        feature_rows.append([feature, count, endpoints, summarize_paths(subset, 8)])

    type_rows = [[label, count] for label, count in type_counts.most_common()]
    base_rows = [
        [
            item["base"],
            item["active_files"],
            item["deprecated_h5_files"],
            item["total_files"],
            str(item["merge_base"])[:12],
            item["merge_base_date"],
        ]
        for item in data["base_candidates"]
    ]
    commit_rows = [[item["hash"], item["date"], item["subject"]] for item in commits]
    file_rows = [
        [
            item["status"],
            item["endpoint"],
            item["type"],
            "、".join(item["features"]),
            item["additions"],
            item["deletions"],
            item["old_path"] or "",
            item["path"],
        ]
        for item in files
    ]

    content = [
        f"# 商户分支功能地图：{name}",
        "",
        f"- 生成时间：{GENERATED_AT}",
        f"- 来源：{data['source']}分支 `{branch}`",
        f"- 分支提交：`{meta['short_commit']}` / {meta['date']} / {meta['subject']}",
        f"- 对照基准：`{data['base']}`（三点 diff，记录共同祖先到商户分支 tip 的变化）",
        f"- 有效端覆盖：{active_text}",
        f"- 废弃端说明：`h5/` 已废弃，只记录历史差异，不作为后续开发依据。",
        "",
        "## 结论摘要",
        "",
    ]
    if active_files:
        content.append(f"- 有效端差异文件：{len(active_files)} 个；涉及功能域：{'、'.join(top_features) if top_features else '未归类路径'}。")
    else:
        content.append("- 有效端 `pc/`、`h5-v2/` 没有检测到差异。")
    if deprecated_files:
        content.append(f"- 废弃 `h5/` 历史差异文件：{len(deprecated_files)} 个；后续不要按这些文件改新 H5。")
    if other_files:
        content.append(f"- 其他路径差异文件：{len(other_files)} 个；通常是根配置、文档或非端目录，需要按完整清单核对。")
    if colors:
        content.append(f"- 扫描到新增/变更颜色值：{', '.join(colors[:20])}。")
    else:
        content.append("- 未在变更行中扫描到明确的十六进制颜色值。")

    content.extend(
        [
            "",
            "## 客服/测试核对清单",
            "",
            table(["功能域", "建议核对点"], checklist_rows),
            "## 端差异总览",
            "",
            table(["端/范围", "文件数", "新增行", "删除行", "代表路径"], endpoint_rows),
            "## 功能域地图",
            "",
            table(["功能域", "文件数", "涉及端", "代表路径"], feature_rows),
            "## 文件类型分布",
            "",
            table(["类型", "文件数"], type_rows),
            "## 主题色/展示资源线索",
            "",
        ]
    )
    display_files = [
        item
        for item in files
        if item["type"] in {"主题样式", "图片资源"} or "主题/颜色/静态资源" in item["features"]
    ]
    display_rows = [
        [item["endpoint"], item["type"], "、".join(item["features"]), item["status"], item["path"]]
        for item in display_files
    ]
    content.extend(
        [
            f"- 颜色值：{', '.join(colors) if colors else '无明确十六进制颜色值。'}",
            "",
            table(["端", "类型", "功能域", "状态", "路径"], display_rows),
            "## 基准选择记录",
            "",
            table(["候选基准", "有效端文件数", "废弃 h5 文件数", "总文件数", "共同祖先", "共同祖先时间"], base_rows),
            "## 最近商户分支提交",
            "",
            table(["提交", "日期", "说明"], commit_rows),
            "## 完整文件级差异清单",
            "",
            table(["状态", "端", "类型", "功能域", "新增行", "删除行", "原路径", "路径"], file_rows),
            "## 生成依据",
            "",
            f"- 分支：`{branch}`",
            f"- 基准：`{data['base']}`",
            f"- 完整命令：`git diff --name-status --find-renames {data['base']}...{branch} -- .`",
            f"- 有效端：`pc/`、`h5-v2/`",
            f"- 废弃端：`h5/`",
            "",
        ]
    )
    write_markdown(out_dir / f"{safe_name(branch)}.md", content)


def sum_int(values) -> int:
    total = 0
    for value in values:
        try:
            total += int(value)
        except (TypeError, ValueError):
            pass
    return total


def write_summary(datasets: list[dict[str, object]], inventory: list[dict[str, str]]) -> None:
    branch_rows = []
    for data in datasets:
        endpoint_counts = Counter(data["endpoint_counts"])
        feature_counts = Counter(data["feature_counts"])
        branch_rows.append(
            [
                data["display_name"],
                data["source"],
                data["base"],
                data["meta"]["short_commit"],
                endpoint_counts.get("pc", 0),
                endpoint_counts.get("h5-v2", 0),
                endpoint_counts.get("h5-废弃", 0),
                endpoint_counts.get("其他", 0),
                "、".join(name for name, _ in feature_counts.most_common(5)),
                f"branches/{safe_name(str(data['branch']))}.md",
            ]
        )

    active_warning = (
        "`h5/` 已废弃；H5 相关后续修改只能参考 `h5-v2/`。"
        "每个分支文档仍会列出废弃 `h5/` 历史差异，便于判断旧代码来源。"
    )
    readme = [
        "# 商户定制差异功能地图",
        "",
        "本仓库记录 `C:\\works\\tgproject` 各商户分支在功能和展示上的个性化差异。",
        "",
        "## 强制使用规则",
        "",
        "- Codex 在 `C:\\works\\tgproject` 开始任何代码修改、排查、评审、合并、打包前，必须先读取本仓库总览和相关商户分支地图。",
        "- 没有核对功能地图，不允许直接修改公共逻辑或商户相关入口。",
        "- 地图以 git 分支差异自动生成；完整文件级差异清单是防遗漏依据。",
        f"- {active_warning}",
        "",
        "## 目录",
        "",
        "- `功能地图总览.md`：所有商户分支总览。",
        "- `branches/`：每个商户分支的中文功能地图。",
        "- `pc/功能地图总览.md`：PC 端涉及分支总览。",
        "- `h5-v2/功能地图总览.md`：有效 H5 端涉及分支总览。",
        "- `deprecated-h5/历史差异总览.md`：废弃 `h5/` 历史差异索引。",
        "- `data/`：机器可读 CSV/JSON，包含完整文件级差异。",
        "- `scripts/scan_merchant_maps.py`：可重复运行的扫描脚本。",
        "",
        "## 当前扫描",
        "",
        f"- 生成时间：{GENERATED_AT}",
        f"- 项目仓库：`{CODE_REPO}`",
        f"- 商户分支数：{len(datasets)}",
        "",
    ]
    write_markdown(DOCS_REPO / "README.md", readme)

    overview = [
        "# 功能地图总览",
        "",
        f"- 生成时间：{GENERATED_AT}",
        f"- 项目仓库：`{CODE_REPO}`",
        f"- 有效端：`pc/`、`h5-v2/`",
        f"- 废弃端：`h5/`，不作为后续开发依据。",
        "",
        "## 商户分支地图索引",
        "",
        table(["分支", "来源", "基准", "提交", "PC文件", "H5-v2文件", "废弃H5文件", "其他文件", "主要功能域", "地图"], branch_rows),
        "## 分支盘点",
        "",
        table(["分支", "分类", "说明"], [[item["ref"], item["classification"], item["note"]] for item in inventory]),
        "",
    ]
    write_markdown(DOCS_REPO / "功能地图总览.md", overview)

    for endpoint in ACTIVE_ENDPOINTS:
        rows = []
        for data in datasets:
            subset = [item for item in data["files"] if item["endpoint"] == endpoint]
            if not subset:
                continue
            feature_counts = Counter(feature for item in subset for feature in item["features"])
            rows.append(
                [
                    data["display_name"],
                    len(subset),
                    "、".join(name for name, _ in feature_counts.most_common(5)),
                    summarize_paths(subset, 8),
                    f"../branches/{safe_name(str(data['branch']))}.md",
                ]
            )
        endpoint_doc = [
            f"# {endpoint} 端功能地图总览",
            "",
            f"- 生成时间：{GENERATED_AT}",
            "- 仅统计有效端差异。",
            "",
            table(["分支", "文件数", "主要功能域", "代表路径", "分支地图"], rows),
            "",
        ]
        write_markdown(DOCS_REPO / endpoint / "功能地图总览.md", endpoint_doc)

    deprecated_rows = []
    for data in datasets:
        subset = [item for item in data["files"] if item["endpoint"] == "h5-废弃"]
        if subset:
            deprecated_rows.append(
                [
                    data["display_name"],
                    len(subset),
                    summarize_paths(subset, 10),
                    f"../branches/{safe_name(str(data['branch']))}.md",
                ]
            )
    dep_doc = [
        "# 废弃 h5 历史差异总览",
        "",
        "`h5/` 已废弃，不作为后续开发依据。本文件只用于追溯旧分支差异来源。",
        "",
        table(["分支", "废弃 h5 文件数", "代表路径", "分支地图"], deprecated_rows),
        "",
    ]
    write_markdown(DOCS_REPO / "deprecated-h5" / "历史差异总览.md", dep_doc)


def write_data(datasets: list[dict[str, object]], inventory: list[dict[str, str]]) -> None:
    data_dir = DOCS_REPO / "data"
    file_csv = data_dir / "diff-files.csv"
    with file_csv.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.writer(fh)
        writer.writerow(
            [
                "branch",
                "source",
                "base",
                "commit",
                "status",
                "endpoint",
                "type",
                "features",
                "additions",
                "deletions",
                "old_path",
                "path",
            ]
        )
        for data in datasets:
            for item in data["files"]:
                writer.writerow(
                    [
                        data["branch"],
                        data["source"],
                        data["base"],
                        data["meta"]["short_commit"],
                        item["status"],
                        item["endpoint"],
                        item["type"],
                        "、".join(item["features"]),
                        item["additions"],
                        item["deletions"],
                        item["old_path"],
                        item["path"],
                    ]
                )

    inv_csv = data_dir / "branch-inventory.csv"
    with inv_csv.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=["ref", "classification", "note"])
        writer.writeheader()
        writer.writerows(inventory)

    summary = []
    for data in datasets:
        summary.append(
            {
                "branch": data["branch"],
                "display_name": data["display_name"],
                "source": data["source"],
                "base": data["base"],
                "meta": data["meta"],
                "endpoint_counts": data["endpoint_counts"],
                "type_counts": data["type_counts"],
                "feature_counts": data["feature_counts"],
                "colors": data["colors"],
                "map": f"branches/{safe_name(str(data['branch']))}.md",
            }
        )
    (data_dir / "merchant-branch-summary.json").write_text(
        json.dumps({"generated_at": GENERATED_AT, "branches": summary}, ensure_ascii=False, indent=2),
        encoding="utf-8",
        newline="\n",
    )


def ensure_dirs() -> None:
    for path in [
        DOCS_REPO / "branches",
        DOCS_REPO / "pc",
        DOCS_REPO / "h5-v2",
        DOCS_REPO / "deprecated-h5",
        DOCS_REPO / "data",
        DOCS_REPO / "scripts",
    ]:
        path.mkdir(parents=True, exist_ok=True)


def main() -> None:
    ensure_dirs()
    refs = list_refs()
    remote_names = {ref.removeprefix("origin/") for ref in refs if ref.startswith("origin/")}
    inventory = []
    merchant_refs = []
    for ref in refs:
        classification, note = classify_ref(ref, remote_names)
        inventory.append({"ref": ref, "classification": classification, "note": note})
        if classification == "商户分支":
            merchant_refs.append(ref)
    merchant_refs = sorted(merchant_refs, key=lambda ref: ref.removeprefix("origin/").lower())

    datasets = []
    out_dir = DOCS_REPO / "branches"
    for old in out_dir.glob("*.md"):
        old.unlink()
    for branch in merchant_refs:
        data = collect_branch(branch)
        datasets.append(data)
        write_branch_doc(data, out_dir)

    write_summary(datasets, inventory)
    write_data(datasets, inventory)
    print(f"generated {len(datasets)} merchant branch maps")
    for data in datasets:
        print(f"- {data['display_name']}: {len(data['files'])} files, base={data['base']}")


GENERATED_AT = datetime.now(timezone.utc).astimezone().strftime("%Y-%m-%d %H:%M:%S %z")


if __name__ == "__main__":
    main()
