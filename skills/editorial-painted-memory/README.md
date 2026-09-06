# Editorial Painted Memory

[← Explore every Image Skillbook style](../../README.md)

Turn a photograph into a quiet 3:4 editorial diptych: the recognizable source
above, and a sparse acrylic-on-paper recollection below.

## Example

The same source photograph is used across the Image Skillbook gallery so the
differences between styles remain visible.

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
        src="assets/editorial-painted-memory-sunset.webp"
        alt="Photo paired with a sparse acrylic-on-paper recollection"
      >
    </td>
  </tr>
</table>

This example uses Production mode for an exact 3:4 canvas and 50:50 split.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill editorial-painted-memory --global --agent codex --yes
```

## Use in Codex

```text
Use $editorial-painted-memory on this photograph.
Keep the source recognizable and create one separate 3:4 result.
```

## Visual contract

- Preserve the photographic upper half.
- Reduce the lower scene to a few decisive silhouettes and acrylic shapes.
- Keep warm paper, restrained color, imperfect lines, and generous negative space.
- Avoid crayon, watercolor, heavy oil paint, vectors, 3D, and generic cartoons.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/editorial-painted-memory.md)

Status: **Draft** — working example, awaiting broader subject testing.
