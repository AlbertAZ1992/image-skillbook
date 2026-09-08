<div align="center">

# Image Skillbook — Codex 与 GPT Image 图像技能集

一套用于 AI 图像生成和照片编辑的开源 Agent Skills。

Image Skillbook 收录 7 种经过测试的视觉处理效果和 1 个选型总控。项目优先适配 Codex
与 GPT Image；每个 Skill 都包含基于原图的适配规则、真实前后对比、一键安装命令和
验收标准。

<a href="https://github.com/AlbertAZ1992/image-skillbook/actions/workflows/verify.yml">
  <img
    src="https://github.com/AlbertAZ1992/image-skillbook/actions/workflows/verify.yml/badge.svg"
    alt="仓库验证状态"
  >
</a>
[![License](https://img.shields.io/badge/license-MIT-2A9D8F)](LICENSE)

[English](README.md)

</div>

## 安装一个 Codex 图像 Skill

先安装一种图片处理效果：

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill photo-doodle-story --global --agent codex --yes
```

新开一个 Codex 会话，上传照片，然后直接说出 Skill 名称：

```text
用 $photo-doodle-story 处理这张照片。
```

安装前可以先打开下面的风格页面，查看原图、生成效果、适用场景和调用示例。

## 查看处理效果

下面使用同一张原照片，便于直接比较处理效果。所有展示结果都经过实际生成和检查。

<p align="center">
  <img
    src="assets/examples/source-sunset.webp"
    alt="城市天际线与珊瑚色晚霞原图"
    width="760"
  >
</p>

<table>
  <tr>
    <th width="50%">
      <a href="skills/editorial-painted-memory/README.md">Editorial Painted Memory</a>
    </th>
    <th width="50%">
      <a href="skills/enamel-travel-keepsake/README.md">Enamel Travel Keepsake</a>
    </th>
  </tr>
  <tr>
    <td>
      <img
        src="assets/examples/editorial-painted-memory-sunset.webp"
        alt="稀疏丙烯纸张记忆效果"
      >
    </td>
    <td>
      <img
        src="assets/examples/enamel-travel-keepsake-sunset.webp"
        alt="珐琅纪念物与真实原照片组合"
      >
    </td>
  </tr>
  <tr>
    <td>克制色彩、稀疏丙烯形状和大量纸张留白。</td>
    <td>把来源于原图的珐琅纪念物与真实照片组合展示。</td>
  </tr>
  <tr>
    <th>
      <a href="skills/crayon-memory-postcard/README.md">Crayon Memory Postcard</a>
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
        alt="温暖蜡笔旅行记忆效果"
      >
    </td>
    <td>
      <img
        src="assets/examples/rubber-stamp-travel-journal-sunset.webp"
        alt="照片与做旧橡皮章旅行手账"
      >
    </td>
  </tr>
  <tr>
    <td>把场景压缩成几个带蜡质颗粒的记忆元素。</td>
    <td>把真实照片和手工缺墨质感放进旅行手账。</td>
  </tr>
  <tr>
    <th>
      <a href="skills/painted-editorial-reconstruction/README.md">
        Painted Editorial Reconstruction
      </a>
    </th>
    <th>
      <a href="skills/photo-doodle-story/README.md">Photo Doodle Story</a>
    </th>
  </tr>
  <tr>
    <td>
      <img
        src="assets/examples/painted-editorial-reconstruction-sunset.webp"
        alt="大笔触绘画式重构效果"
      >
    </td>
    <td>
      <img
        src="assets/examples/photo-doodle-story-sunset.webp"
        alt="照片线索与微型黑线故事"
      >
    </td>
  </tr>
  <tr>
    <td>安静、透气、带明显大笔触的绘画重述。</td>
    <td>把真实摄影线索变成克制的微型涂鸦故事。</td>
  </tr>
  <tr>
    <th colspan="2">
      <a href="skills/impasto-miniature-world/README.md">Impasto Miniature World</a>
    </th>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img
        src="assets/examples/impasto-miniature-world-sunset.webp"
        alt="雕塑感厚涂微缩世界"
        width="50%"
      >
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      用高饱和厚重油彩，把原图线索转译成梦境式微缩环境。
    </td>
  </tr>
</table>

## 完整评测矩阵

当前每个视觉 Skill 都使用同一组四张照片完成了测试：城市晚霞、带真实招牌和人物的拥挤
空间、强逆光海滩，以及竖构图的树木街巷。下面结果均经过人工检查，因此相应 Skill 已从
Draft 升为 Candidate。进入任一 Skill 页面，可以并排查看更大的原图和结果。

### 评测原图

<table>
  <tr>
    <th width="25%">城市晚霞</th>
    <th width="25%">咖啡店露台</th>
    <th width="25%">海边落日</th>
    <th width="25%">树木街巷</th>
  </tr>
  <tr>
    <td><img src="assets/examples/source-sunset.webp" alt="城市晚霞原图"></td>
    <td><img src="assets/examples/source-coffee-terrace.webp" alt="咖啡店露台原图"></td>
    <td><img src="assets/examples/source-beach-sunset.webp" alt="海边落日原图"></td>
    <td><img src="assets/examples/source-tree-street.webp" alt="树木街巷原图"></td>
  </tr>
</table>

### 评测结果

<table>
  <tr>
    <th>处理方式</th>
    <th>城市</th>
    <th>咖啡店</th>
    <th>海边</th>
    <th>街巷</th>
  </tr>
  <tr>
    <th><a href="skills/editorial-painted-memory/README.md">Editorial Painted Memory</a></th>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-sunset.webp" alt="城市丙烯记忆"></td>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-coffee.webp" alt="咖啡店丙烯记忆"></td>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-beach.webp" alt="海边丙烯记忆"></td>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-tree-street.webp" alt="街巷丙烯记忆"></td>
  </tr>
  <tr>
    <th><a href="skills/enamel-travel-keepsake/README.md">Enamel Travel Keepsake</a></th>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-sunset.webp" alt="城市珐琅纪念物"></td>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-coffee.webp" alt="咖啡店珐琅纪念物"></td>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-beach.webp" alt="海边珐琅纪念物"></td>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-tree-street.webp" alt="街巷珐琅纪念物"></td>
  </tr>
  <tr>
    <th><a href="skills/crayon-memory-postcard/README.md">Crayon Memory Postcard</a></th>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-sunset.webp" alt="城市蜡笔记忆"></td>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-coffee.webp" alt="咖啡店蜡笔记忆"></td>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-beach.webp" alt="海边蜡笔记忆"></td>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-tree-street.webp" alt="街巷蜡笔记忆"></td>
  </tr>
  <tr>
    <th><a href="skills/rubber-stamp-travel-journal/README.md">Rubber Stamp Travel Journal</a></th>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-sunset.webp" alt="城市橡皮章手账"></td>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-coffee.webp" alt="咖啡店橡皮章手账"></td>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-beach.webp" alt="海边橡皮章手账"></td>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-tree-street.webp" alt="街巷橡皮章手账"></td>
  </tr>
  <tr>
    <th><a href="skills/painted-editorial-reconstruction/README.md">Painted Editorial Reconstruction</a></th>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-sunset.webp" alt="城市绘画重构"></td>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-coffee.webp" alt="咖啡店绘画重构"></td>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-beach.webp" alt="海边绘画重构"></td>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-tree-street.webp" alt="街巷绘画重构"></td>
  </tr>
  <tr>
    <th><a href="skills/photo-doodle-story/README.md">Photo Doodle Story</a></th>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-sunset.webp" alt="城市照片涂鸦故事"></td>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-coffee.webp" alt="咖啡店照片涂鸦故事"></td>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-beach.webp" alt="海边照片涂鸦故事"></td>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-tree-street.webp" alt="街巷照片涂鸦故事"></td>
  </tr>
  <tr>
    <th><a href="skills/impasto-miniature-world/README.md">Impasto Miniature World</a></th>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-sunset.webp" alt="城市厚涂世界"></td>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-coffee.webp" alt="咖啡店厚涂世界"></td>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-beach.webp" alt="海边厚涂世界"></td>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-tree-street.webp" alt="街巷厚涂世界"></td>
  </tr>
</table>

## 当前可以安装的 Skills

- [`$editorial-painted-memory`](skills/editorial-painted-memory/README.md)：稀疏丙烯纸张记忆。
- [`$enamel-travel-keepsake`](skills/enamel-travel-keepsake/README.md)：原照片与珐琅
  纪念物组合。
- [`$crayon-memory-postcard`](skills/crayon-memory-postcard/README.md)：温暖的蜡质颗粒回忆。
- [`$rubber-stamp-travel-journal`](skills/rubber-stamp-travel-journal/README.md)：照片与
  雕刻缺墨手账。
- [`$painted-editorial-reconstruction`](skills/painted-editorial-reconstruction/README.md)：
  大笔触绘画式重构。
- [`$photo-doodle-story`](skills/photo-doodle-story/README.md)：真实摄影线索与黑线小故事。
- [`$impasto-miniature-world`](skills/impasto-miniature-world/README.md)：雕塑感厚涂
  微缩世界。

每种风格都可以独立安装。你也可以一次安装整个集合：

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill '*' --global --agent codex --yes
```

## 不知道选哪个？

可选的 [`$image-skillbook`](skills/image-skillbook/SKILL.md) 总控会比较现有风格，
并给出推荐结果和准确的安装命令。

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill image-skillbook --global --agent codex --yes
```

```text
用 $image-skillbook 为这张照片推荐最多三个处理效果。
解释差异，先不要生成。
```

## 使用要求

这些 Skills 需要支持 Skill 的 Agent，以及图片生成或图片编辑工具。项目优先适配
Codex + GPT Image；Markdown 格式的执行合同也可以被其他兼容 Agent 读取。
实际效果会随模型、输入图片和补充要求变化。

## 添加一种图片处理方法

看到好用的图片 Prompt，或者自己形成了稳定工作流，可以先把原始材料放进 Git 忽略的
`prompt-inbox/`，记录来源，再把可复用的视觉决策整理为独立 Skill。

具体的收集、创作、测试和发布流程见 [CONTRIBUTING.md](CONTRIBUTING.md)。公共贡献应该
包含独立编写的视觉合同与可以发布的示例，不能直接堆放未经审查的第三方 Prompt。

## 验证本地仓库

```bash
npm run check
```

这个命令会检查目录、目录清单、Skill 包、文档链接、示例资源和安装器兼容性。

## License

仓库原创内容使用 [MIT License](LICENSE)。任何改编内容在发布前都必须记录兼容的来源
与许可。示例来源见 [`assets/examples/README.md`](assets/examples/README.md)。
