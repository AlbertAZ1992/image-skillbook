# Contributing Image Recipes

## Intake

In the source repository, raw material belongs in ignored Markdown files under
`prompt-inbox/`. The user may paste everything into `INBOX.md` or create one file per
prompt. Inventory every Markdown file except `README.md` and `STATUS.md` before
deduplicating. Preserve each raw entry until its resulting recipe has been reviewed.

For every proposed recipe, record:

- the original link or author when one exists;
- whether the exact prompt may be redistributed;
- the image model and interface used;
- the input type and example subject;
- the strongest result and a representative failure; and
- whether the prompt works unchanged or needs adaptation.

## Source and permission policy

A public post is not automatically an open license.

- Publish exact third-party prompt text only with clear permission or a compatible
  license.
- If reuse terms are unclear, keep the raw prompt in the ignored local inbox and
  outside the public catalog.
- Author a new recipe from the general visual technique and test it independently.
- Credit the original discovery link when it materially informed the recipe, even
  when the final wording is original.
- Never remove an author's attribution or paywall a prompt that requires attribution.

## Curation workflow

1. Save the source and rights status.
2. Identify the creative kernel that changes the image.
3. Remove repeated instructions and generic adjectives.
4. Decide whether Direct, Adaptive, or Production mode fits.
5. Write the recipe using `recipe-format.md`.
6. Test on three inputs that differ in subject, density, and orientation.
7. Compare against the raw prompt and a no-recipe baseline.
8. Promote only when a human reviewer prefers the recipe consistently.

## Pull request checklist

- [ ] Catalog entry and recipe ID match.
- [ ] Source URL and license status are recorded.
- [ ] No private images, names, or location metadata are committed.
- [ ] The creative kernel is concise.
- [ ] Fidelity and output contracts are explicit.
- [ ] At least one failure mode is documented.
- [ ] Example images are licensed for repository use.
