# Rubber Stamp Travel Journal

[← Explore every Image Skillbook style](../../README.md)

Pair a place photograph with a small multi-color rubber-stamp impression that
feels hand-carved and printed into an aged field journal.

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
        src="assets/rubber-stamp-travel-journal-sunset.webp"
        alt="Photo paired with a carved multi-color skyline stamp"
      >
    </td>
  </tr>
</table>

This example uses Production mode for an exact 3:4 canvas and source-locked split.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill rubber-stamp-travel-journal --global --agent codex --yes
```

## Use in Codex

```text
Use $rubber-stamp-travel-journal on this place photograph.
Keep the photo unchanged and print a small carved-ink interpretation below it.
```

## Visual contract

- Preserve the photographic region.
- Reduce the place to a few location-specific contours.
- Use two to four ink layers, dry gaps, broken edges, and registration drift.
- Avoid circular seals, postage motifs, smooth vectors, and invented geography.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/rubber-stamp-travel-journal.md)

Status: **Draft** — working example, awaiting broader subject testing.
