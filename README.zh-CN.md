<div align="center">

# Image Skillbook

### 7 种可重复使用的图片处理方法，打包成可以独立安装的 Skills。

优先面向 Codex + GPT Image。1 个总控负责选择风格，7 个视觉 Skill 都能单独安装。

[![可安装 Skills](https://img.shields.io/badge/可安装_Skills-8-6B5B95)](#这个包到底是什么)
[![视觉风格](https://img.shields.io/badge/视觉风格-7-EF8354)](#7-种风格的真实效果)
[![License](https://img.shields.io/badge/license-MIT-2A9D8F)](LICENSE)

[English](README.md)

</div>

## 快速开始

一次安装全部 8 个 Skill：

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill '*' --global --agent codex --yes
```

新开一个 Codex 会话，上传照片后直接点名风格：

```text
用 $editorial-painted-memory 处理这张照片。
```

或者先让总控比较：

```text
用 $image-skillbook 为这张照片推荐最多三个风格，解释差异，先不要生成。
```

## 7 种风格的真实效果

下面全部使用同一张原照片，让差异只来自 Skill，而不是题材。示例都经过实际
生成和验收，不是提示词截图或效果占位图。

<p align="center">
  <img src="assets/examples/source-sunset.webp" alt="城市天际线与珊瑚色晚霞原图" width="760">
</p>

<table>
  <tr>
    <th width="50%"><a href="skills/editorial-painted-memory/README.md">Editorial Painted Memory</a></th>
    <th width="50%"><a href="skills/enamel-travel-keepsake/README.md">Enamel Travel Keepsake</a></th>
  </tr>
  <tr>
    <td><img src="assets/examples/editorial-painted-memory-sunset.webp" alt="稀疏丙烯纸张记忆"></td>
    <td><img src="assets/examples/enamel-travel-keepsake-sunset.webp" alt="珐琅纪念物与真实原照片海报"></td>
  </tr>
  <tr>
    <td>克制色彩、稀疏丙烯形状和大量纸张留白。</td>
    <td>上半小型珐琅纪念物，下半保留真实照片。</td>
  </tr>
  <tr>
    <th><a href="skills/crayon-memory-postcard/README.md">Crayon Memory Postcard</a></th>
    <th><a href="skills/rubber-stamp-travel-journal/README.md">Rubber Stamp Travel Journal</a></th>
  </tr>
  <tr>
    <td><img src="assets/examples/crayon-memory-postcard-sunset.webp" alt="蜡笔旅行记忆"></td>
    <td><img src="assets/examples/rubber-stamp-travel-journal-sunset.webp" alt="左右分栏的橡皮章旅行手账"></td>
  </tr>
  <tr>
    <td>把记忆压缩成几个带蜡质颗粒的元素。</td>
    <td>严格左右分栏，保留真实照片与手工缺墨质感。</td>
  </tr>
  <tr>
    <th><a href="skills/painted-editorial-reconstruction/README.md">Painted Editorial Reconstruction</a></th>
    <th><a href="skills/photo-doodle-story/README.md">Photo Doodle Story</a></th>
  </tr>
  <tr>
    <td><img src="assets/examples/painted-editorial-reconstruction-sunset.webp" alt="大笔触绘画式重构"></td>
    <td><img src="assets/examples/photo-doodle-story-sunset.webp" alt="照片线索与微型黑线故事"></td>
  </tr>
  <tr>
    <td>安静、透气、带明显大笔触的绘画重述。</td>
    <td>真实摄影线索进入一个克制的微型涂鸦故事。</td>
  </tr>
  <tr>
    <th colspan="2"><a href="skills/impasto-miniature-world/README.md">Impasto Miniature World</a></th>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="assets/examples/impasto-miniature-world-sunset.webp" alt="雕塑感厚涂微缩世界" width="50%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">用高饱和厚重油彩，把原图线索转译成梦境式微缩环境。</td>
  </tr>
</table>

点进任意风格名称，都能看到它自己的效果图、单独安装命令、Codex 触发方式和视觉合同。

## 这个包到底是什么？

Image Skillbook 是一个 **多 Skill 仓库**，不是把所有提示词塞进一个巨型 Skill。

| 层级 | 数量 | 作用 |
| --- | ---: | --- |
| 总控 Skill | 1 | 发现、比较和选择风格 |
| 视觉 Skill | 7 | 每个独立安装，只负责一种处理方法 |
| 公共 Recipe | 7 | 记录视觉合同、适配规则与验收标准 |

本地最初确实有 **8 个原始 Prompt 文件**，但只有 **7 个不同视觉概念**。
其中两个文件是 Rubber Stamp Travel Journal 的横版与竖版变体，因此应该合并
成同一个 Skill，而不是人为制造第 8 个重复风格。

所以最终可安装的是 **8 个 Skill：1 个总控 + 7 个视觉 Skill**。Recipe 是给
人和 Agent 审查的公开设计合同，不是第九种安装对象。

## 8 个可安装 Skill

| Skill | 最适合 | 默认模式 |
| --- | --- | --- |
| [`$image-skillbook`](skills/image-skillbook/SKILL.md) | 风格发现与路由 | Router |
| [`$editorial-painted-memory`](skills/editorial-painted-memory/README.md) | 稀疏丙烯纸张记忆 | Direct |
| [`$enamel-travel-keepsake`](skills/enamel-travel-keepsake/README.md) | 原照片与珐琅纪念物海报 | Production |
| [`$crayon-memory-postcard`](skills/crayon-memory-postcard/README.md) | 温暖蜡笔记忆 | Production |
| [`$rubber-stamp-travel-journal`](skills/rubber-stamp-travel-journal/README.md) | 左右分栏橡皮章手账 | Production |
| [`$painted-editorial-reconstruction`](skills/painted-editorial-reconstruction/README.md) | 大笔触绘画重述 | Production |
| [`$photo-doodle-story`](skills/photo-doodle-story/README.md) | 真实摄影线索与黑线小人 | Production |
| [`$impasto-miniature-world`](skills/impasto-miniature-world/README.md) | 雕塑感厚涂微缩世界 | Production |

7 种风格目前都是 Draft。示例只证明它可以执行；至少在三类明显不同的图片
上稳定工作并通过人工比较后，才会升级为 Featured。

## 单独安装一种风格

已经知道想用什么时，不需要安装总控：

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill photo-doodle-story --global --agent codex --yes
```

仓库贡献者可以从本地一次安装全部 8 个 Skill：

```bash
npm run install:local
# 或：bash scripts/install-local.sh
```

安装后重新开启 Codex 会话，让 Skill 列表刷新。

## 怎么触发？

Skill 名称是自然语言触发器，不是终端命令。上传图片后提到准确的 `$skill-name`：

```text
用 $rubber-stamp-travel-journal 处理这张地点照片。
照片放左边，做旧纸张与橡皮章放右边。
```

```text
用 $impasto-miniature-world 分别处理每一张上传的照片，不要合并输入。
```

```text
用 $editorial-painted-memory 的 Prompt-only 模式，只返回最终生成提示词。
```

## 执行流程

```text
图片 + 目标
    ↓
选择一个视觉 Skill
    ↓
根据这张图片编译视觉合同
    ↓
生成需要创作的区域
    ↓
需要时做确定性尺寸拼版
    ↓
验收保真、风格、文字和尺寸
```

| 模式 | 什么时候用 | 行为 |
| --- | --- | --- |
| Direct | 已验证的方法应尽量保持不变 | 保留创意核心 |
| Adaptive | 主体或构图需要适配 | 调整选择和简化策略 |
| Production | 尺寸与原图保真可测量 | 先生成风格区域，再准确拼版 |
| Prompt-only | 交给另一个图片工具生成 | 返回可直接使用的最终提示词 |

## 添加新风格

公开社交帖子不等于开放许可。新发现先保存在被 Git 忽略的 `prompt-inbox/`，
公共仓库只发布经过重写、测试和记录的视觉合同，不做未经审查的 Prompt Dump。

1. 在本地保存来源 URL、作者、模型和复用条款。
2. 先区分版式变体、重复文件和真正不同的视觉概念。
3. 提炼最小但有辨识度的视觉决策，独立编写 Recipe。
4. 创建一个职责单一的视觉 Skill，并补齐效果与安装方法。
5. 测试不同题材后再从 Draft 升级。

详见 [收录流程](references/contributing-recipes.md) 和
[Recipe 格式](references/recipe-format.md)。

## 仓库结构

```text
image-skillbook/
├── skills/
│   ├── image-skillbook/       # 总控
│   └── <style-name>/          # 一个可独立安装的视觉 Skill
│       ├── README.md          # 效果与用法
│       ├── SKILL.md           # Agent 执行合同
│       ├── agents/openai.yaml # Codex 展示与默认触发
│       └── assets/            # 自包含示例
├── references/recipes/        # 公共视觉合同
├── assets/examples/           # 根画廊素材
├── prompt-inbox/              # 本地原始收集箱；Git 忽略
├── catalog.json
├── evals/evals.json
└── scripts/
    ├── install-local.sh
    └── verify.mjs
```

## 本地验证

```bash
npm run verify
npx --yes skills@latest add . --list
```

## License

仓库原创内容使用 MIT。任何改编内容在发布前都必须记录兼容的来源与许可。
示例来源见 [`assets/examples/README.md`](assets/examples/README.md)。
