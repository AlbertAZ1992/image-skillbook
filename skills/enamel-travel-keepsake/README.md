# Enamel Travel Keepsake

[← Explore every Image Skillbook style](../../README.md)

Compress a place photograph into a believable die-cut enamel souvenir built from
its decisive silhouette, identity cues, and source colors.

## Example

<table>
  <tr>
    <th width="50%">Source</th>
    <th width="50%">Skill output</th>
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
        src="assets/enamel-travel-keepsake-sunset.webp"
        alt="Sunset skyline transformed into a collectible enamel keepsake"
      >
    </td>
  </tr>
</table>

This example uses Adaptive mode to turn the skyline and cloud into a
manufacturable object rather than mapping the photograph onto a badge.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill enamel-travel-keepsake --global --agent codex --yes
```

## Use in Codex

```text
Use $enamel-travel-keepsake on this place photograph.
Create one refined collectible object without inventing a location name.
```

## Visual contract

- Derive the outer contour from a recognizable source silhouette.
- Use narrow metal boundaries and three to six source-derived enamel colors.
- Present believable thickness, directional light, and a small contact shadow.
- Avoid generic shields, toy plastic, chrome, glitter, packaging, and fake text.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/enamel-travel-keepsake.md)

Status: **Draft** — working example, awaiting broader subject testing.
