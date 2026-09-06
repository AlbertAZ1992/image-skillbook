# Tool Adapters

The recipe owns the visual intent. The environment owns the tool syntax.

## Image-capable environments

- Attach every edit target directly when supported.
- Label multiple images by role and index.
- Use one generation call per distinct requested asset.
- Preserve exact user text verbatim and verify it visually.
- Save accepted outputs outside temporary storage.

## Prompt-only environments

Return one compiled prompt containing:

1. intended output;
2. input image roles;
3. recipe creative kernel;
4. source-specific adaptation;
5. exact delivery constraints; and
6. the concise avoid list.

Do not pretend an image was generated. State that the output is ready to paste into
an image-capable model.

## Direct versus Production

Use Direct mode for taste and visual quality. Use Production mode when exact file
properties matter.

Typical deterministic finishing tasks include:

- exact canvas dimensions and aspect ratio;
- precise panel splits and margins;
- source-photo replacement after an expressive generation pass;
- alpha-channel validation; and
- export format and compression.

Deterministic finishing must not alter the expressive content beyond the requested
measurable correction.
