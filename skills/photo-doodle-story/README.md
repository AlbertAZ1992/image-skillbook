# Photo Doodle Story

[← Explore every Image Skillbook style](../../README.md)

Keep the real photographic subject and add a restrained miniature story told by a
few thin, imperfect black-line characters.

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
        src="assets/photo-doodle-story-sunset.webp"
        alt="Photo paired with tiny line-drawn figures observing the sunset"
      >
    </td>
  </tr>
</table>

This example uses Production mode to preserve the source scene and add only the
small narrative intervention.

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill photo-doodle-story --global --agent codex --yes
```

## Use in Codex

```text
Use $photo-doodle-story on this photograph.
Keep the real scene intact and add one quiet story with tiny line figures.
```

## Visual contract

- Keep the essential subject photographic and recognizable.
- Build one source-specific action, reaction, or emotional possibility.
- Use only a few thin black-line figures and restrained source-derived accents.
- Avoid identity changes, cartoon replacement, stickers, clutter, and dense text.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/photo-doodle-story.md)

Status: **Draft** — working example, awaiting broader subject testing.
