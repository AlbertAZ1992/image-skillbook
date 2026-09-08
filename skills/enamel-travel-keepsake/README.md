# Enamel Travel Keepsake — Turn a Photo into an Enamel Pin

[← Explore every Image Skillbook style](../../README.md)

The Enamel Travel Keepsake Skill extracts recognizable details from a real photograph and turns
them into a small premium enamel emblem on a clean color field. Install it in Codex and run it
with GPT Image to create a source-aware travel keepsake.

## Evaluation gallery

<table>
  <tr>
    <th width="42%">Source photograph</th>
    <th width="58%">Enamel keepsake</th>
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
  <tr>
    <td>
      <img src="assets/source-coffee-terrace.webp" alt="People across several coffee terraces">
    </td>
    <td>
      <img
        src="assets/enamel-travel-keepsake-coffee.webp"
        alt="Layered terraces and umbrellas compressed into a small enamel keepsake"
      >
    </td>
  </tr>
  <tr>
    <td>
      <img src="assets/source-beach-sunset.webp" alt="Three people watching a beach sunset">
    </td>
    <td>
      <img
        src="assets/enamel-travel-keepsake-beach.webp"
        alt="Three seated figures beneath an umbrella as an enamel keepsake"
      >
    </td>
  </tr>
  <tr>
    <td>
      <img src="assets/source-tree-street.webp" alt="Arching tree above a tiled-roof street">
    </td>
    <td>
      <img
        src="assets/enamel-travel-keepsake-tree-street.webp"
        alt="Arching tree and rooftops compressed into a small enamel keepsake"
      >
    </td>
  </tr>
</table>

The four-source evaluation covers skyline, layered architecture, people, backlit silhouettes,
and an irregular natural landmark. Each result tests whether one decisive motif survives
compression into a small manufacturable object.

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

Status: **Candidate** — reviewed across four varied photographs; standalone objects, pets, and
close portraits remain untested.
