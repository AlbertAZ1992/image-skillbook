# Painted Editorial Reconstruction

[← Explore every Image Skillbook style](../../README.md)

Retell a photograph through broad gouache, acrylic, pastel, or palette-knife
gestures while keeping its central relationship and directional rhythm.

## Example

<table>
  <tr>
    <th width="42%">Source</th>
    <th width="58%">Skill output</th>
  </tr>
  <tr>
    <td>
      <img
        src="assets/source-sunset.webp"
        alt="Source photograph of a city skyline under a coral sunset"
      >
    </td>
    <td>
      <img
        src="assets/painted-editorial-reconstruction-sunset.webp"
        alt="Photo paired with a broad painterly reconstruction"
      >
    </td>
  </tr>
</table>

This example uses Production mode for an exact 3:4 canvas and 50:50 split.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill painted-editorial-reconstruction --global --agent codex --yes
```

## Use in Codex

```text
Use $painted-editorial-reconstruction on this photograph.
Preserve the source and rebuild its strongest gesture with broad matte paint.
```

## Visual contract

- Preserve the photographic upper half.
- Rebuild the lower half around one source-specific gesture or relationship.
- Group detail into broad shapes with visible matte pigment and layered depth.
- Avoid literal tracing, vectors, plastic 3D, muddy filters, and decorative noise.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/painted-editorial-reconstruction.md)

Status: **Draft** — working example, awaiting broader subject testing.
