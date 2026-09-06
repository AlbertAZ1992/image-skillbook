---
name: image-skillbook
description: >-
  Discover, select, run, and evaluate a curated library of visual treatments for AI
  image generation and editing. Use when the user wants style recommendations, names
  a Skillbook recipe, wants several photos processed separately, or wants a sourced
  social prompt turned into a reusable workflow. Do not use for basic file conversion.
metadata:
  version: "0.1.0"
  author: AlbertAZ1992
---

# Image Skillbook

Route an image request to one focused visual Skill. This is a catalog and workflow,
not a universal mega-prompt.

## Choose a style

| Style Skill | Choose when |
| --- | --- |
| `editorial-painted-memory` | sparse acrylic shapes on warm paper |
| `enamel-travel-keepsake` | a place should become a physical souvenir object |
| `crayon-memory-postcard` | visible wax grain and naive travel-journal warmth |
| `rubber-stamp-travel-journal` | location contours should become carved ink layers |
| `painted-editorial-reconstruction` | the lower scene needs a broad painterly retelling |
| `photo-doodle-story` | real subjects should interact with tiny line figures |
| `impasto-miniature-world` | the scene should become sculptural thick-paint relief |

For discovery, recommend at most three styles and give one source-specific reason for
each. Do not generate until the user chooses unless they asked you to decide.

For a named style, follow that installed Skill's instructions. Do not blend styles
unless the user explicitly requests a hybrid. If the style Skill is unavailable,
apply the matching contract in the table faithfully and state the limitation.

## Shared workflow

1. Label each supplied image as edit target, reference, or compositing insert.
2. Keep one input per output unless the user explicitly asks for a combined result.
3. Preserve originals and write outputs non-destructively.
4. Use Direct mode for a proven creative treatment, Adaptive mode when the subject
   controls the design, and Production mode for exact geometry or source fidelity.
5. Compile only the selected style, image-specific facts, exact delivery constraints,
   and a short avoid list. Repetition can weaken image-model results.
6. Use the best available image generation or editing tool. If none is available,
   return a ready-to-paste prompt instead.
7. Inspect every result for subject identity, style specificity, text, extra objects,
   watermarks, dimensions, and separation between inputs.

When an unchanged photo region or exact split is required, generate expressive artwork
separately and assemble the final canvas deterministically. Do not repeatedly ask an
image model to fix measurable geometry.

## Contribute a style

Treat social-media prompt text as private intake unless its license permits republication.
Record the author, URL, model, example, and reuse terms when available. Extract the
visual technique, write an independent execution contract, and keep the raw prompt out
of the public Skill when rights are unclear.

In the source repository, scan every Markdown file under `prompt-inbox/`, excluding
`README.md` and `STATUS.md`. The user may create one file per prompt. Inventory before
deduplicating, preserve every raw entry, and never delete one until its specific Skill
has been reviewed and accepted.

New styles remain Draft until tested. Promote a style only after it works across at
least three meaningfully different inputs and wins a human comparison.
