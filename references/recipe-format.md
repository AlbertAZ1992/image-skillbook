# Recipe Format

Each public recipe is one Markdown file in `references/recipes/` and one entry in
`catalog.json`.

## Required catalog fields

```json
{
  "id": "kebab-case-id",
  "name": "Human-readable name",
  "status": "draft | candidate | featured | retired",
  "default_mode": "direct | adaptive | production",
  "file": "references/recipes/kebab-case-id.md",
  "inputs": ["photo"],
  "output": "Short deliverable description",
  "provenance": {
    "kind": "original | adapted-with-permission | inspired | public-domain",
    "source_url": null,
    "license": "MIT"
  },
  "tested_with": []
}
```

Use `inspired` when a visual technique was learned from material whose exact reuse
terms are unresolved. In that case, keep the raw material outside the public
catalog, write the recipe independently, retain a source link when known, and state
that the recipe license applies only to the repository-authored wording.

## Required recipe sections

1. **Contract** — status, mode, input, output, best use, and fidelity.
2. **Creative kernel** — the smallest prompt language responsible for the look.
3. **Adaptation rules** — how the recipe reacts to different subjects.
4. **Avoid** — only common failure modes, not a universal negative prompt.
5. **Review questions** — a short human quality gate.

Add **Production finishing** only when the result needs measurable geometry,
transparency, exact text, or source-locked compositing.

## Quality rule

A recipe is not a style name followed by adjectives. It must state:

- what visual decision creates the look;
- what the model should preserve;
- what it should discard;
- what trade-off the recipe accepts; and
- how a reviewer can tell success from a generic imitation.

## Promotion rule

- **Draft:** structurally complete but not compared across inputs.
- **Candidate:** at least one strong human-reviewed result.
- **Featured:** preferred over a baseline across three varied inputs.
- **Retired:** kept for history but excluded from recommendations.
