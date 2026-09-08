<div align="center">

# Image Skillbook — Curated AI Image Skills & GPT Image Recipes

Turn real photos into doodle stories, crayon art, editorial paintings, and tactile keepsakes.

Image Skillbook is a curated collection of installable AI image Skills and tested GPT Image
prompt recipes. Use Codex to transform a photograph into a tiny doodle story, crayon postcard,
enamel keepsake, rubber-stamp journal, editorial painting, or impasto miniature world.

This is not a raw prompt dump. Every independently installable Skill includes source-aware
adaptation rules, real before-and-after examples, one-command installation, and review checks.

<a href="https://github.com/AlbertAZ1992/image-skillbook/actions/workflows/verify.yml">
  <img
    src="https://github.com/AlbertAZ1992/image-skillbook/actions/workflows/verify.yml/badge.svg"
    alt="Repository verification status"
  >
</a>
[![License](https://img.shields.io/badge/license-MIT-2A9D8F)](LICENSE)

[简体中文](README.zh-CN.md)

</div>

## Install a Codex Image Skill

Install one treatment:

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill photo-doodle-story --global --agent codex --yes
```

Start a new Codex session, attach a photograph, and mention the Skill by name:

```text
Use $photo-doodle-story on this photograph.
```

Open a style below before installing it to see the source image, generated result, intended
use, and invocation examples.

## Find an AI Photo Style by Outcome

| What you want to make | Installable Skill |
| --- | --- |
| Add tiny doodle characters to a real photo | [`$photo-doodle-story`](skills/photo-doodle-story/README.md) |
| Turn a photo into warm crayon art | [`$crayon-memory-postcard`](skills/crayon-memory-postcard/README.md) |
| Make an enamel travel keepsake from a photo | [`$enamel-travel-keepsake`](skills/enamel-travel-keepsake/README.md) |
| Turn architecture or a landscape into rubber-stamp art | [`$rubber-stamp-travel-journal`](skills/rubber-stamp-travel-journal/README.md) |
| Repaint a photo as a sparse editorial memory | [`$editorial-painted-memory`](skills/editorial-painted-memory/README.md) |
| Reconstruct a photo with broad gouache or acrylic brushwork | [`$painted-editorial-reconstruction`](skills/painted-editorial-reconstruction/README.md) |
| Turn a photo into a sculptural impasto miniature | [`$impasto-miniature-world`](skills/impasto-miniature-world/README.md) |

## See the Results

This comparison uses one source photograph so you can judge the treatments directly. Every
result shown here was generated and reviewed.

<p align="center">
  <img
    src="assets/examples/source-sunset.webp"
    alt="Source photograph of a city skyline under a coral sunset"
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
        alt="City sunset reinterpreted as a sparse painted memory"
      >
    </td>
    <td>
      <img
        src="assets/examples/enamel-travel-keepsake-sunset.webp"
        alt="City sunset paired with a small enamel keepsake"
      >
    </td>
  </tr>
  <tr>
    <td>Quiet acrylic shapes, restrained color, and generous paper.</td>
    <td>A source-derived enamel emblem paired with the authentic photo.</td>
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
        alt="City sunset simplified into a warm wax crayon memory"
      >
    </td>
    <td>
      <img
        src="assets/examples/rubber-stamp-travel-journal-sunset.webp"
        alt="City sunset beside an aged paper carved stamp"
      >
    </td>
  </tr>
  <tr>
    <td>A soft wax-grain recollection reduced to a few memorable elements.</td>
    <td>A field-journal spread with tactile broken ink.</td>
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
        alt="City sunset reconstructed with broad painterly brushwork"
      >
    </td>
    <td>
      <img
        src="assets/examples/photo-doodle-story-sunset.webp"
        alt="City sunset turned into a miniature line-drawn story"
      >
    </td>
  </tr>
  <tr>
    <td>A calm, airy retelling with broad visible brushwork.</td>
    <td>Source-locked photographic cues become a tiny line-drawn narrative.</td>
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
        alt="City sunset sculpted into an impasto miniature world"
        width="50%"
      >
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      A vivid, dreamlike environment sculpted from thick directional oil paint.
    </td>
  </tr>
</table>

## Full Evaluation Matrix

Every current visual Skill was run against the same four photographs: a skyline, a dense social
space with signage, a strongly backlit beach, and a vertical tree-lined street. The accepted
results below passed human review and moved the Skills to Candidate. Open any Skill page to see
each source beside its result at a larger size.

### Evaluation inputs

<table>
  <tr>
    <th width="25%">City sunset</th>
    <th width="25%">Coffee terrace</th>
    <th width="25%">Beach sunset</th>
    <th width="25%">Tree street</th>
  </tr>
  <tr>
    <td><img src="assets/examples/source-sunset.webp" alt="City skyline at sunset"></td>
    <td><img src="assets/examples/source-coffee-terrace.webp" alt="Busy coffee terrace"></td>
    <td><img src="assets/examples/source-beach-sunset.webp" alt="People at a beach sunset"></td>
    <td><img src="assets/examples/source-tree-street.webp" alt="Tree-lined historic street"></td>
  </tr>
</table>

### Results

<table>
  <tr>
    <th>Treatment</th>
    <th>City</th>
    <th>Coffee</th>
    <th>Beach</th>
    <th>Street</th>
  </tr>
  <tr>
    <th><a href="skills/editorial-painted-memory/README.md">Editorial Painted Memory</a></th>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-sunset.webp" alt="Editorial painted city sunset"></td>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-coffee.webp" alt="Editorial painted coffee terrace"></td>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-beach.webp" alt="Editorial painted beach sunset"></td>
    <td><img src="skills/editorial-painted-memory/assets/editorial-painted-memory-tree-street.webp" alt="Editorial painted tree street"></td>
  </tr>
  <tr>
    <th><a href="skills/enamel-travel-keepsake/README.md">Enamel Travel Keepsake</a></th>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-sunset.webp" alt="City sunset enamel keepsake"></td>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-coffee.webp" alt="Coffee terrace enamel keepsake"></td>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-beach.webp" alt="Beach sunset enamel keepsake"></td>
    <td><img src="skills/enamel-travel-keepsake/assets/enamel-travel-keepsake-tree-street.webp" alt="Tree street enamel keepsake"></td>
  </tr>
  <tr>
    <th><a href="skills/crayon-memory-postcard/README.md">Crayon Memory Postcard</a></th>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-sunset.webp" alt="City sunset crayon memory"></td>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-coffee.webp" alt="Coffee terrace crayon memory"></td>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-beach.webp" alt="Beach sunset crayon memory"></td>
    <td><img src="skills/crayon-memory-postcard/assets/crayon-memory-postcard-tree-street.webp" alt="Tree street crayon memory"></td>
  </tr>
  <tr>
    <th><a href="skills/rubber-stamp-travel-journal/README.md">Rubber Stamp Travel Journal</a></th>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-sunset.webp" alt="City sunset rubber stamp"></td>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-coffee.webp" alt="Coffee terrace rubber stamp"></td>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-beach.webp" alt="Beach sunset rubber stamp"></td>
    <td><img src="skills/rubber-stamp-travel-journal/assets/rubber-stamp-travel-journal-tree-street.webp" alt="Tree street rubber stamp"></td>
  </tr>
  <tr>
    <th><a href="skills/painted-editorial-reconstruction/README.md">Painted Editorial Reconstruction</a></th>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-sunset.webp" alt="Painted city sunset reconstruction"></td>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-coffee.webp" alt="Painted coffee terrace reconstruction"></td>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-beach.webp" alt="Painted beach sunset reconstruction"></td>
    <td><img src="skills/painted-editorial-reconstruction/assets/painted-editorial-reconstruction-tree-street.webp" alt="Painted tree street reconstruction"></td>
  </tr>
  <tr>
    <th><a href="skills/photo-doodle-story/README.md">Photo Doodle Story</a></th>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-sunset.webp" alt="City sunset photo doodle story"></td>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-coffee.webp" alt="Coffee terrace photo doodle story"></td>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-beach.webp" alt="Beach sunset photo doodle story"></td>
    <td><img src="skills/photo-doodle-story/assets/photo-doodle-story-tree-street.webp" alt="Tree street photo doodle story"></td>
  </tr>
  <tr>
    <th><a href="skills/impasto-miniature-world/README.md">Impasto Miniature World</a></th>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-sunset.webp" alt="City sunset impasto world"></td>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-coffee.webp" alt="Coffee terrace impasto world"></td>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-beach.webp" alt="Beach sunset impasto world"></td>
    <td><img src="skills/impasto-miniature-world/assets/impasto-miniature-world-tree-street.webp" alt="Tree street impasto world"></td>
  </tr>
</table>

## Install Every AI Image Skill

Each style is independently installable. Install only the treatment you want, or install the
whole collection:

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill '*' --global --agent codex --yes
```

## Need Help Choosing?

The optional [`$image-skillbook`](skills/image-skillbook/SKILL.md) router compares the
available treatments and gives you the install command for its recommendation.

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill image-skillbook --global --agent codex --yes
```

```text
Use $image-skillbook to recommend up to three treatments for this photo.
Explain the trade-offs and do not generate yet.
```

## Requirements

These Skills require a Skill-compatible agent and an image generation or image editing tool.
They are designed first for Codex with GPT Image, while their Markdown contracts remain
portable to other compatible agents. Generated results vary by model, input, and instruction.

## Add a Visual Treatment

Found a useful image prompt or developed a reliable workflow? Keep the raw source in the
Git-ignored `prompt-inbox/`, record its provenance, and turn the reusable decisions into an
independent Skill.

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the intake, authoring, testing, and publication
workflow. Public contributions should contain independently written visual contracts and
publishable examples rather than unreviewed third-party prompt dumps.

## Verify a Checkout

```bash
npm run check
```

This validates the catalog, Skill packages, documentation links, examples, and compatibility
with the `skills` installer.

## License

Repository-authored material is available under the [MIT License](LICENSE). Adapted material
must record compatible source rights before publication. Example provenance is documented in
[`assets/examples/README.md`](assets/examples/README.md).
