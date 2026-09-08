# Image Skillbook Router — Choose the Right AI Image Skill

[← Explore every Image Skillbook style](../../README.md)

The Image Skillbook router compares the seven visual Skills in this repository and recommends
the best fit for a photograph, desired mood, and intended use. It is a selector: it does not
generate an image or approximate a visual treatment by itself.

## What it can recommend

| Desired result | Visual Skill |
| --- | --- |
| Tiny line-drawn characters interacting with a real photo | `photo-doodle-story` |
| A warm wax-crayon travel recollection | `crayon-memory-postcard` |
| A sparse acrylic-on-paper editorial memory | `editorial-painted-memory` |
| Broad gouache, acrylic, pastel, or palette-knife brushwork | `painted-editorial-reconstruction` |
| A source-derived enamel travel emblem | `enamel-travel-keepsake` |
| A hand-carved rubber-stamp field journal | `rubber-stamp-travel-journal` |
| A sculptural oil-paint miniature world | `impasto-miniature-world` |

## Install

```bash
npx skills add AlbertAZ1992/image-skillbook \
  --skill image-skillbook --global --agent codex --yes
```

Start a new Codex session after installation.

## Use in Codex

Attach a photograph and ask for a comparison:

```text
Use $image-skillbook to recommend up to three treatments for this photograph.
Explain the trade-offs and do not generate yet.
```

When you choose one, the router uses the installed visual Skill or returns its exact install
command. It never silently blends styles or replaces a missing Skill with a loose imitation.

The executable contract is in [`SKILL.md`](SKILL.md).
