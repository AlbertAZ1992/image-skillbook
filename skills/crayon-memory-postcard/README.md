# Crayon Memory Postcard — Turn a Photo into Crayon Art

[← Explore every Image Skillbook style](../../README.md)

The Crayon Memory Postcard Skill turns a real photograph into a warm, quirky wax-crayon
recollection that feels like a personally observed travel memory. Install it in Codex and run
it with GPT Image while keeping the source scene recognizable.

## Evaluation gallery

<table>
  <tr>
    <th width="42%">Source photograph</th>
    <th width="58%">Crayon memory</th>
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
        src="assets/crayon-memory-postcard-sunset.webp"
        alt="Photo paired with a warm wax-crayon skyline recollection"
      >
    </td>
  </tr>
  <tr>
    <td>
      <img src="assets/source-coffee-terrace.webp" alt="People across several coffee terraces">
    </td>
    <td>
      <img
        src="assets/crayon-memory-postcard-coffee.webp"
        alt="Layered coffee terraces redrawn with visible wax grain"
      >
    </td>
  </tr>
  <tr>
    <td>
      <img src="assets/source-beach-sunset.webp" alt="Three people watching a beach sunset">
    </td>
    <td>
      <img
        src="assets/crayon-memory-postcard-beach.webp"
        alt="Three seated figures and an umbrella redrawn with visible wax grain"
      >
    </td>
  </tr>
  <tr>
    <td>
      <img src="assets/source-tree-street.webp" alt="Arching tree above a tiled-roof street">
    </td>
    <td>
      <img
        src="assets/crayon-memory-postcard-tree-street.webp"
        alt="Arching tree and descending street simplified with wax crayon"
      >
    </td>
  </tr>
</table>

The four-source evaluation covers skyline, dense architecture and people, strong backlight,
and a vertical foliage-and-rooftop scene. Every result uses Production mode for an exact 3:4
canvas and 50:50 split.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill crayon-memory-postcard --global --agent codex --yes
```

## Use in Codex

```text
Use $crayon-memory-postcard on this photograph.
Keep the photo intact and create a warm wax-grain memory below it.
```

## Visual contract

- Preserve the photographic upper half.
- Redraw only two to five memorable elements on warm fibrous paper.
- Keep uneven outlines, wax grain, loose hatching, and imperfect fill.
- Avoid polished cartoons, watercolor, oil paint, vectors, 3D, and generic slogans.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/crayon-memory-postcard.md)

Status: **Candidate** — reviewed across four varied photographs; object, pet, and close-portrait
inputs remain untested.
