# Enamel Travel Keepsake

[← Explore every Image Skillbook style](../../README.md)

Pair an authentic photograph with a small premium enamel emblem on a clean color field.

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

This example uses Production mode: the generated keepsake panel sits above an unchanged
normalized source crop on an exact 3:4 canvas.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill enamel-travel-keepsake --global --agent codex --yes
```

## Use in Codex

```text
Use $enamel-travel-keepsake on this place photograph.
Keep the photograph in the lower half and omit any uncertain location name.
```

## Visual contract

- Use an exact 3:4 poster with equal upper and lower regions.
- Keep the lower photograph source-faithful.
- Center one small magnet on a clean source-derived color field above it.
- Derive the magnet contour from one recognizable person, landmark, or landscape motif.
- Use narrow metal boundaries and three to six source-derived enamel colors.
- Avoid standalone product scenes, generic shields, toy plastic, and fake text.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/enamel-travel-keepsake.md)

Status: **Draft** — working example, awaiting broader subject testing.
