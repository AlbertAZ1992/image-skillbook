import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const [slug, displayName] = process.argv.slice(2);

function fail(error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}

function assertInput() {
  if (!slug || !displayName) {
    throw new Error('Usage: npm run new:skill -- <kebab-case-name> "Display Name"');
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Skill name must use lowercase kebab-case.");
  }
  if (displayName.trim() !== displayName || displayName.length < 3) {
    throw new Error("Display name must be a readable title without outer whitespace.");
  }
}

async function assertAvailable(relativePaths) {
  for (const relativePath of relativePaths) {
    const exists = await access(path.join(root, relativePath)).then(
      () => true,
      () => false,
    );
    if (exists) {
      throw new Error(`Refusing to overwrite ${relativePath}`);
    }
  }
}

async function assertCatalogAvailable() {
  const catalog = JSON.parse(await readFile(path.join(root, "catalog.json"), "utf8"));
  if (catalog.recipes.some((recipe) => recipe.id === slug)) {
    throw new Error(`${slug} already exists in catalog.json`);
  }
}

function skillMarkdown() {
  return `---
name: ${slug}
description: >-
  TODO: Describe the visible result and the exact situations that should trigger this Skill.
license: MIT
metadata:
  version: "0.1.0"
  author: AlbertAZ1992
---

# ${displayName}

TODO: Write the source fidelity rule, creative decisions, adaptation rules, avoid list, and
review checks for this treatment.
`;
}

function publicReadme() {
  return `# ${displayName}

[← Explore every Image Skillbook style](../../README.md)

TODO: Describe the visible result in one sentence.

## Example

| Source | Skill output |
| --- | --- |
| ![Source photograph](assets/source.webp) | ![Generated result](assets/result.webp) |

## Install

\`\`\`bash
npx skills add AlbertAZ1992/image-skillbook \\
  --skill ${slug} --global --agent codex --yes
\`\`\`

## Use in Codex

\`\`\`text
Use $${slug} on this photograph.
\`\`\`

## Visual contract

- TODO: State what the Skill preserves.
- TODO: State the distinctive transformation.
- TODO: State the most common failure to avoid.

[Read the agent instructions](SKILL.md) ·
[Inspect the Recipe](../../references/recipes/${slug}.md)

Status: **Draft** — awaiting varied input testing.
`;
}

function recipeMarkdown() {
  return `# ${displayName}

## Contract

- Status: Draft
- Default mode: Production
- Input: photograph
- Output: TODO
- Best use: TODO
- Fidelity: TODO

## Creative kernel

TODO

## Adaptation rules

TODO

## Avoid

TODO

## Review questions

- TODO
`;
}

function openaiYaml() {
  return `interface:
  display_name: "${displayName}"
  short_description: "TODO: Describe the image treatment"
  default_prompt: >-
    Use $${slug} on this photograph.

policy:
  allow_implicit_invocation: true
`;
}

async function updateCatalog() {
  const catalogPath = path.join(root, "catalog.json");
  const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
  catalog.recipes.push({
    id: slug,
    name: displayName,
    status: "draft",
    default_mode: "production",
    file: `references/recipes/${slug}.md`,
    skill: `skills/${slug}/SKILL.md`,
    inputs: ["photo"],
    output: "TODO: Describe the deliverable",
    provenance: { kind: "original", source_url: null, license: "MIT" },
    tested_with: [],
    examples: [
      {
        source: `skills/${slug}/assets/source.webp`,
        output: `skills/${slug}/assets/result.webp`,
        mode: "production",
      },
    ],
  });
  await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
}

async function main() {
  assertInput();
  const skillDirectory = `skills/${slug}`;
  const recipePath = `references/recipes/${slug}.md`;
  await assertAvailable([skillDirectory, recipePath]);
  await assertCatalogAvailable();

  await mkdir(path.join(root, skillDirectory, "agents"), { recursive: true });
  await mkdir(path.join(root, skillDirectory, "assets"), { recursive: true });
  await Promise.all([
    writeFile(path.join(root, skillDirectory, "SKILL.md"), skillMarkdown()),
    writeFile(path.join(root, skillDirectory, "README.md"), publicReadme()),
    writeFile(path.join(root, skillDirectory, "agents/openai.yaml"), openaiYaml()),
    writeFile(path.join(root, recipePath), recipeMarkdown()),
  ]);
  await updateCatalog();

  console.log(`Created Draft scaffold for ${slug}.`);
  console.log("Replace every TODO, add source.webp and result.webp, then run npm run check.");
}

main().catch(fail);
