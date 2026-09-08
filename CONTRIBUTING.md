# Contributing to Image Skillbook

Image Skillbook grows one focused visual treatment at a time. A contribution should leave
users with an independently installable Skill, a real before-and-after example, and enough
instructions for an agent to reproduce the treatment on a different image.

## Start with private intake

Keep copied or incomplete source material in `prompt-inbox/`. Git ignores everything in that
directory except its guide, so it is the right place for prompts collected from social posts,
personal notes, and early experiments.

For each source, record what you know:

- source URL and author;
- image model and interface;
- reuse or redistribution terms;
- example input and result;
- strongest visual decision; and
- a representative failure.

Do not paste a third-party prompt into a public issue or commit unless its license or author
allows redistribution. If the rights are unclear, retain it locally and write the public Skill
independently from the general technique.

## Decide whether it is a new Skill

Create a new Skill when the treatment has a distinct visual outcome, execution method, and
review standard. Treat aspect ratios, portrait and landscape layouts, or minor wording changes
as variants of the same Skill when they preserve the same creative idea.

A style Skill owns these public files:

```text
skills/<skill-name>/
├── README.md
├── SKILL.md
├── agents/openai.yaml
└── assets/
```

It also has one catalog entry in `catalog.json` and one maintainers' contract in
`references/recipes/<skill-name>.md`. Recipes support curation and review; users install the
Skill itself.

Create the package skeleton and catalog entry with:

```bash
npm run new:skill -- <kebab-case-name> "Human-readable name"
```

The command refuses invalid or duplicate names. Its placeholders deliberately fail repository
validation until the contract and real example assets are complete.

## Build the Skill

1. Choose a concise kebab-case name based on the visible result and run the scaffold command.
2. Extract the smallest set of decisions responsible for that result.
3. State what must remain faithful to the source and what may change.
4. Write adaptation rules for different subjects, density, and orientation.
5. Include only common failure modes in the avoid list.
6. Define review questions that distinguish success from a generic imitation.
7. Complete the self-contained README with a source image, generated result, install command,
   and exact `$skill-name` invocation.
8. Complete its catalog entry, then add it to the router, the Recipe index, and both root README
   catalogs.

Follow [the Recipe format](references/recipe-format.md) and the detailed
[curation workflow](references/contributing-recipes.md). Use the existing style directories as
working examples.

## Test the treatment

Run the Skill on meaningfully different inputs. Cover at least three of these dimensions before
calling it broadly reliable:

- person, pet, object, place, or landscape;
- sparse and visually dense scenes;
- portrait and landscape orientation;
- bright, dark, warm, and cool palettes; and
- a source with text or small identity details that should remain faithful.

Keep one representative failure and record what caused it. Compare the Skill result with the
original workflow and with a plain-language baseline. Promotion status is defined in
[`references/recipe-format.md`](references/recipe-format.md).

Only commit examples that you have permission to publish. Remove private names, embedded
location data, and other personal metadata before adding assets.

## Validate the repository

Use Node.js 22 or later, then run:

```bash
npm run check
```

The check validates the catalog, every Skill package, local documentation links and images,
examples, frontmatter, and discovery by the `skills` installer.

Before opening a pull request, confirm:

- the Skill can be installed on its own;
- the README command and `$skill-name` trigger are correct;
- the public example was generated and reviewed;
- source and license information are recorded;
- the root English and Chinese Skill lists link to the new Skill; and
- `npm run check` finishes without errors.
