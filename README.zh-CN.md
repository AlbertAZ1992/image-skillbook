<div align="center">

# Image Skillbook

### 一个面向 Codex + GPT Image 的多 Skill 图像风格包。

1 个风格路由 Skill，7 个可独立调用的视觉 Skill，7 套真实示例。

[English](README.md)

</div>

> **GitHub 公开发布后快速开始：**一次安装全部 8 个 Skill，上传图片，然后
> 直接点名风格，或让 Image Skillbook 帮你选择。

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill '*' --global --agent codex --yes
```

```text
用 $image-skillbook 为这张照片推荐三个最合适的风格，先不要生成。
```

## 先看全部效果

下面 7 个结果来自同一张原始照片，分别由 7 个独立 Skill 完成。它们是
真实输出，不是提示词截图或效果占位图。

```text
$image-skillbook → 选择 Skill → 针对图片编译 → 生成 → 验收 → 保存资产
```

生成时没有把 Prompt Inbox 中恢复的第三方原始 Prompt 直接发送给图片模型，
也没有调用外部的 `photo-abstract-editorial` Skill。

<p align="center">
  <img
    src="assets/examples/source-sunset.webp"
    alt="城市天际线与珊瑚色晚霞的原始照片"
    width="760"
  >
</p>

<table>
  <tr>
    <th width="50%">
      <a href="skills/editorial-painted-memory/README.md">
        Editorial Painted Memory
      </a>
    </th>
    <th width="50%">
      <a href="skills/enamel-travel-keepsake/README.md">
        Enamel Travel Keepsake
      </a>
    </th>
  </tr>
  <tr>
    <td>
      <img
        src="assets/examples/editorial-painted-memory-sunset.webp"
        alt="原照片与纸张丙烯记忆组成的编辑海报"
      >
    </td>
    <td>
      <img
        src="assets/examples/enamel-travel-keepsake-sunset.webp"
        alt="从晚霞与天际线提炼出的珐琅纪念物"
      >
    </td>
  </tr>
  <tr>
    <th>
      <a href="skills/crayon-memory-postcard/README.md">
        Crayon Memory Postcard
      </a>
    </th>
    <th>
      <a href="skills/rubber-stamp-travel-journal/README.md">
        Rubber Stamp Travel Journal
      </a>
    </th>
  </tr>
  <tr>
    <td>
      <img
        src="assets/examples/crayon-memory-postcard-sunset.webp"
        alt="原照片与温暖蜡笔记忆组成的旅行明信片"
      >
    </td>
    <td>
      <img
        src="assets/examples/rubber-stamp-travel-journal-sunset.webp"
        alt="原照片与多色手工橡皮章组成的旅行手账"
      >
    </td>
  </tr>
  <tr>
    <th>
      <a href="skills/painted-editorial-reconstruction/README.md">
        Painted Editorial Reconstruction
      </a>
    </th>
    <th>
      <a href="skills/photo-doodle-story/README.md">
        Photo Doodle Story
      </a>
    </th>
  </tr>
  <tr>
    <td>
      <img
        src="assets/examples/painted-editorial-reconstruction-sunset.webp"
        alt="原照片与大笔触绘画重构组成的编辑画面"
      >
    </td>
    <td>
      <img
        src="assets/examples/photo-doodle-story-sunset.webp"
        alt="原照片与观察晚霞的黑线小人故事"
      >
    </td>
  </tr>
  <tr>
    <th colspan="2">
      <a href="skills/impasto-miniature-world/README.md">
        Impasto Miniature World
      </a>
    </th>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img
        src="assets/examples/impasto-miniature-world-sunset.webp"
        alt="原照片与雕塑感厚涂微缩世界"
        width="50%"
      >
    </td>
  </tr>
</table>

这 7 张作品证明每个 Skill 都可以执行，但目前仍是 Draft。只有在至少三种
明显不同的图片上稳定工作，并通过人工对比后，才会升级为 Featured。

## 它到底是一个 Skill，还是多个 Skills？

**Image Skillbook 是产品名、GitHub 仓库名，也是一个 Skill Pack。**
它不是一个塞满所有提示词的巨型 Skill。

| 层级 | 含义 | 是否可安装 |
| --- | --- | --- |
| Image Skillbook | 产品、仓库与分发包 | 作为安装来源 |
| `$image-skillbook` | 负责发现、比较和路由的总控 Skill | 是 |
| 7 个风格 Skill | 每个只负责一种视觉处理 | 是 |
| Recipe | 风格背后的设计约束、来源与验收记录 | 否 |

因此这个仓库一共有 **8 个可安装 Skill：1 个总控 + 7 个风格**。当前每个
Recipe 都一对一对应一个风格 Skill。

标准目录是 `skills/<name>/SKILL.md`。根 README 是 7 个风格的总展厅；每个
风格目录也有自己的 README，展示原图与效果、单独安装命令、触发方式和视觉
合同。示例图片会随单个 Skill 一起安装，所以离开总仓库也不会失效。
`SKILL.md` 只负责给 Agent 执行，README 负责给人浏览和分享。

## 为什么不做成一个万能 Skill？

社交媒体上的好提示词往往只在一张示例图、一个模型上有效。把十几个风格
塞进同一份提示词，还会让视觉约束互相污染。

Image Skillbook 的做法是：

- 一个 Skill 只负责一种可辨认的视觉结果；
- 用户可以只安装和调用喜欢的风格；
- 总控 Skill 负责推荐，选定后只执行一个风格；
- Recipe 保留创意核心、适配规则、来源状态和验收问题；
- 新发现先进入本地 Prompt Inbox，清理版权与重复项后再公开。

## Codex + GPT Image 优先

- 安装命令明确使用 `--agent codex`。
- 8 个 Skill 都包含 Codex 可读的 `agents/openai.yaml` 展示与默认触发信息。
- Codex 可以在一次工作流中查看原图、调用内置图片生成或编辑、检查结果并
  保存文件。
- 目录仍遵循通用 Agent Skills 格式；其他兼容客户端可以执行相同约束，
  没有图片工具时也可以使用 Prompt-only 模式。

## 8 个可安装 Skill

| Skill | 最适合 | 默认模式 |
| --- | --- | --- |
| [`$image-skillbook`](skills/image-skillbook/SKILL.md) | 发现、比较与路由 | Router |
| [`$editorial-painted-memory`](skills/editorial-painted-memory/README.md) | 稀疏丙烯纸张记忆 | Direct |
| [`$enamel-travel-keepsake`](skills/enamel-travel-keepsake/README.md) | 地点珐琅纪念物 | Adaptive |
| [`$crayon-memory-postcard`](skills/crayon-memory-postcard/README.md) | 蜡笔旅行记忆 | Production |
| [`$rubber-stamp-travel-journal`][stamp-skill] | 多色橡皮章手账 | Production |
| [`$painted-editorial-reconstruction`][reconstruction-skill] | 大幅绘画式重构 | Production |
| [`$photo-doodle-story`](skills/photo-doodle-story/README.md) | 真实主体与黑线小人 | Production |
| [`$impasto-miniature-world`](skills/impasto-miniature-world/README.md) | 厚涂微缩世界 | Production |

[stamp-skill]: skills/rubber-stamp-travel-journal/README.md
[reconstruction-skill]: skills/painted-editorial-reconstruction/README.md

## 安装

GitHub 公开发布后，安装整个 Skill Pack：

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill '*' --global --agent codex --yes
```

只安装一种风格：

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill photo-doodle-story --global --agent codex --yes
```

在仓库本地开发时，一键安装全部 8 个 Skill：

```bash
npm run install:local
# 或：bash scripts/install-local.sh
```

安装后重新开启一个 Codex 会话，让 Skill 列表刷新。

## 怎么触发？

Skill 名称是自然语言中的显式触发器，不是终端命令。上传图片后直接说：

```text
用 $image-skillbook 为这张照片推荐三个风格，解释差异，先不要生成。
```

```text
用 $photo-doodle-story 处理这张照片。保留原始照片，生成一个独立结果。
```

```text
用 $editorial-painted-memory 的 Prompt-only 模式，只输出最终提示词。
```

多张图片默认分别处理，不会擅自拼成一张。

## 四种执行方式

- **Direct**：尽量原样保留已经验证过的创意核心。
- **Adaptive**：根据主体和构图调整简化方式与视觉结构。
- **Production**：图片模型负责美感，确定性工具负责尺寸、比例与原图保真。
- **Prompt-only**：不生成图片，只返回可以交给其他图片模型的最终提示词。

## 收录新风格

公开帖子不等于开放许可。第三方原始提示词只有在许可明确时才能原文收录；
许可不清楚时，应保留来源记录，提炼通用视觉方法，并重新编写、独立测试
我们的执行约束。

把新 Prompt 放到 `prompt-inbox/INBOX.md`，或在 `prompt-inbox/` 下每个
Prompt 单独建一个 Markdown 文件。这个目录默认被 Git 忽略，不会发布到
公开仓库。

详见 [收录规则](references/contributing-recipes.md) 和
[配方格式](references/recipe-format.md)。

## 本地验证

```bash
npm run verify
npx --yes skills@latest add . --list
```

第一条检查 Skill、Recipe、示例和来源字段，第二条确认标准 Skills 客户端
能够发现全部 8 个 Skill。

## License

仓库原创内容使用 MIT。任何改编配方在公开前都必须记录兼容的来源与许可。
