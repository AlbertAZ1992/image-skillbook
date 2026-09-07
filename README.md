<div align="center">

# Image Skillbook

### Seven repeatable image treatments, packaged as installable Skills.

Built first for Codex + GPT Image. One router helps you choose; every visual style
can also be installed and invoked on its own.

[![Installable Skills](https://img.shields.io/badge/installable_skills-8-6B5B95)](#the-pack)
[![Visual Styles](https://img.shields.io/badge/visual_styles-7-EF8354)](#all-seven-styles)
[![License](https://img.shields.io/badge/license-MIT-2A9D8F)](LICENSE)

[简体中文](README.zh-CN.md)

</div>

## Quick start

Install the complete pack:

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill '*' --global --agent codex --yes
```

Attach a photograph in a new Codex session, then either name a style:

```text
Use $editorial-painted-memory on this photograph.
```

Or ask the router to compare styles before generating:

```text
Use $image-skillbook to recommend up to three styles for this photo.
Explain the trade-offs and do not generate yet.
```

## All seven styles

The gallery uses one source photograph so the treatment—not the subject—changes.
These are generated and reviewed examples, not prompt screenshots or mockups.

<p align="center">
  <img
    src="assets/examples/source-sunset.webp"
    alt="Source photograph of a city skyline under a coral sunset"
    width="760"
  >
</p>

<table>
  <tr>
    <th width="50%"><a href="skills/editorial-painted-memory/README.md">Editorial Painted Memory</a></th>
    <th width="50%"><a href="skills/enamel-travel-keepsake/README.md">Enamel Travel Keepsake</a></th>
  </tr>
  <tr>
    <td><img src="assets/examples/editorial-painted-memory-sunset.webp" alt="Photo above a sparse painted memory"></td>
    <td><img src="assets/examples/enamel-travel-keepsake-sunset.webp" alt="Small enamel keepsake above the source photo"></td>
  </tr>
  <tr>
    <td>Quiet acrylic shapes, restrained color, and generous paper.</td>
    <td>A small source-derived enamel emblem paired with the authentic photo.</td>
  </tr>
  <tr>
    <th><a href="skills/crayon-memory-postcard/README.md">Crayon Memory Postcard</a></th>
    <th><a href="skills/rubber-stamp-travel-journal/README.md">Rubber Stamp Travel Journal</a></th>
  </tr>
  <tr>
    <td><img src="assets/examples/crayon-memory-postcard-sunset.webp" alt="Photo above a warm wax-crayon memory"></td>
    <td><img src="assets/examples/rubber-stamp-travel-journal-sunset.webp" alt="Photo beside an aged-paper carved stamp"></td>
  </tr>
  <tr>
    <td>A soft wax-grain recollection reduced to a few memorable elements.</td>
    <td>A strict side-by-side field-journal spread with tactile broken ink.</td>
  </tr>
  <tr>
    <th><a href="skills/painted-editorial-reconstruction/README.md">Painted Editorial Reconstruction</a></th>
    <th><a href="skills/photo-doodle-story/README.md">Photo Doodle Story</a></th>
  </tr>
  <tr>
    <td><img src="assets/examples/painted-editorial-reconstruction-sunset.webp" alt="Photo above a broad painterly reconstruction"></td>
    <td><img src="assets/examples/photo-doodle-story-sunset.webp" alt="Photo above a miniature doodle story"></td>
  </tr>
  <tr>
    <td>A calm, airy retelling with broad visible brushwork.</td>
    <td>Source-locked photographic cues become a tiny line-drawn narrative.</td>
  </tr>
  <tr>
    <th colspan="2"><a href="skills/impasto-miniature-world/README.md">Impasto Miniature World</a></th>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="assets/examples/impasto-miniature-world-sunset.webp" alt="Photo above a sculptural impasto miniature world" width="50%">
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">A vivid, dreamlike environment sculpted from thick directional oil paint.</td>
  </tr>
</table>

Open any style name to see its self-contained example, one-Skill install command,
Codex trigger, and visual contract.

## The pack

Image Skillbook is a **multi-Skill repository**, not one giant prompt. It contains
eight installable Skills:

| Layer | Count | Purpose |
| --- | ---: | --- |
| Router Skill | 1 | Discover, compare, and select a visual treatment |
| Style Skills | 7 | Execute one focused, independently installable treatment each |
| Public Recipes | 7 | Document the design contract, adaptation rules, and review checks |

The initial local import contains **eight raw Prompt files but seven distinct visual
concepts**. Two files are portrait and landscape variants of Rubber Stamp Travel
Journal, so they belong to one Skill rather than creating a duplicate eighth style.

A Recipe is public documentation, not an install target. The router and seven style
Skills are the eight installable units.

## The eight installable Skills

| Skill | Best for | Default mode |
| --- | --- | --- |
| [`$image-skillbook`](skills/image-skillbook/SKILL.md) | Style discovery and routing | Router |
| [`$editorial-painted-memory`](skills/editorial-painted-memory/README.md) | Sparse acrylic paper memory | Direct |
| [`$enamel-travel-keepsake`](skills/enamel-travel-keepsake/README.md) | Photo-and-enamel keepsake poster | Production |
| [`$crayon-memory-postcard`](skills/crayon-memory-postcard/README.md) | Warm wax-grain recollection | Production |
| [`$rubber-stamp-travel-journal`](skills/rubber-stamp-travel-journal/README.md) | Side-by-side carved-ink journal | Production |
| [`$painted-editorial-reconstruction`](skills/painted-editorial-reconstruction/README.md) | Broad painted retelling | Production |
| [`$photo-doodle-story`](skills/photo-doodle-story/README.md) | Real photo cues + tiny line characters | Production |
| [`$impasto-miniature-world`](skills/impasto-miniature-world/README.md) | Sculptural oil-paint world | Production |

All seven styles are currently Drafts. A working example proves execution, not broad
reliability; Featured status requires successful tests across meaningfully different
subjects and a human comparison.

## Install one style

You do not need the router when you already know the treatment you want:

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill photo-doodle-story --global --agent codex --yes
```

For contributors working from a local checkout, install all eight Skills at once:

```bash
npm run install:local
# or: bash scripts/install-local.sh
```

Start a new agent session after installation so the Skill list refreshes.

## Use a Skill

Skill names are natural-language triggers, not terminal commands. Attach one or more
images and mention the exact `$skill-name`.

```text
Use $rubber-stamp-travel-journal on this place photograph.
Keep the photograph at left and the aged-paper stamp at right.
```

```text
Use $impasto-miniature-world on every attached photograph.
Create a separate result for each input.
```

```text
Use $editorial-painted-memory in Prompt-only mode.
Return the compiled production prompt without generating an image.
```

## How execution works

```text
Image + intent
    ↓
Select one style Skill
    ↓
Compile the visual contract for this image
    ↓
Generate the expressive region
    ↓
Assemble exact geometry when required
    ↓
Review fidelity, style, text, and dimensions
```

| Mode | Use it when | Behavior |
| --- | --- | --- |
| Direct | A proven treatment should stay almost unchanged | Preserves the creative kernel |
| Adaptive | Subject or composition needs interpretation | Adjusts selection and simplification |
| Production | Geometry or source fidelity is measurable | Generates style panels, then assembles them exactly |
| Prompt-only | Another image runtime will generate | Returns a ready-to-paste compiled prompt |

## Add a visual treatment

Public social posts are not automatically open-licensed. Raw discoveries stay in the
ignored `prompt-inbox/` until their provenance is understood. The public repository
contains independently written visual contracts, not an unreviewed prompt dump.

1. Save the source URL, author, model, and reuse terms locally.
2. Separate duplicate variants from genuinely different visual concepts.
3. Extract the smallest distinctive visual decisions and write an independent Recipe.
4. Create one focused style Skill with its own example and install command.
5. Test multiple subjects before promoting it beyond Draft.

See [the contribution workflow](references/contributing-recipes.md) and
[Recipe format](references/recipe-format.md).

## Repository structure

```text
image-skillbook/
├── skills/
│   ├── image-skillbook/       # router
│   └── <style-name>/          # one installable visual Skill
│       ├── README.md          # public example and usage
│       ├── SKILL.md           # agent execution contract
│       ├── agents/openai.yaml # Codex metadata and starter
│       └── assets/            # self-contained preview
├── references/recipes/        # public visual contracts
├── assets/examples/           # combined gallery assets
├── prompt-inbox/              # local raw intake; ignored by Git
├── catalog.json
├── evals/evals.json
└── scripts/
    ├── install-local.sh
    └── verify.mjs
```

## Verify

```bash
npm run verify
npx --yes skills@latest add . --list
```

## License

MIT for repository-authored material. Adapted material must record compatible source
rights before publication. Example provenance is documented in
[`assets/examples/README.md`](assets/examples/README.md).
