import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const allowedStatuses = new Set(["draft", "candidate", "featured", "retired"]);
const allowedModes = new Set(["direct", "adaptive", "production"]);
const allowedProvenanceKinds = new Set([
  "original",
  "adapted-with-permission",
  "inspired",
  "public-domain",
]);
const recipeSections = ["Contract", "Creative kernel", "Adaptation rules", "Avoid"];
const ignoredMarkdownDirectories = new Set([
  ".git",
  ".local-recipes",
  ".local_scripts",
  "local-scripts",
  "node_modules",
  "outputs",
]);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertComplete(contents, relativePath) {
  assert(!/\bTODO\b/.test(contents), `${relativePath} contains unfinished TODO markers`);
}

async function readText(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function readJson(relativePath) {
  return JSON.parse(await readText(relativePath));
}

function unquote(value) {
  const isQuoted =
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"));
  return isQuoted ? value.slice(1, -1) : value;
}

function parseFrontmatter(markdown, relativePath) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  assert(match, `${relativePath} is missing YAML frontmatter`);

  const raw = match[1];
  const fields = new Map();
  const lines = raw.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const fieldMatch = lines[index].match(/^([a-z][a-z0-9_-]*):\s*(.*)$/);
    if (!fieldMatch) {
      continue;
    }

    const [, key, rawValue] = fieldMatch;
    if (![">", ">-", "|", "|-"].includes(rawValue)) {
      fields.set(key, unquote(rawValue.trim()));
      continue;
    }

    const valueLines = [];
    while (index + 1 < lines.length && /^\s+/.test(lines[index + 1])) {
      index += 1;
      valueLines.push(lines[index].trim());
    }
    fields.set(key, valueLines.join(" ").trim());
  }

  return { fields, raw };
}

function verifySkillFrontmatter(markdown, relativePath, expectedName) {
  const { fields, raw } = parseFrontmatter(markdown, relativePath);
  const description = fields.get("description") ?? "";

  assert(fields.get("name") === expectedName, `${relativePath} has an invalid name`);
  assert(description.length > 0, `${relativePath} is missing a description`);
  assert(description.length <= 1024, `${relativePath} description exceeds 1024 characters`);
  assert(fields.get("license") === "MIT", `${relativePath} must declare the MIT license`);
  assert(/^metadata:\s*$/m.test(raw), `${relativePath} is missing metadata`);
  assert(/^\s{2}version:\s*"?[0-9.]+"?\s*$/m.test(raw), `${relativePath} has no version`);
  assert(/^\s{2}author:\s*\S.+$/m.test(raw), `${relativePath} has no author`);
}

function localTargets(markdown) {
  const withoutCodeBlocks = markdown.replace(/```[\s\S]*?```/g, "");
  const targets = [];
  const patterns = [
    /!?\[[^\]]*\]\(([^)]+)\)/g,
    /<(?:a|img)\s+[\s\S]*?(?:href|src)="([^"]+)"[\s\S]*?>/g,
  ];

  for (const pattern of patterns) {
    for (const match of withoutCodeBlocks.matchAll(pattern)) {
      const target = match[1].trim().split(/\s+"/)[0];
      if (!target || target.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(target)) {
        continue;
      }
      targets.push(decodeURIComponent(target.split("#")[0].split("?")[0]));
    }
  }

  return targets;
}

async function verifyMarkdownFile(relativePath) {
  const markdown = await readText(relativePath);
  assert(markdown.endsWith("\n"), `${relativePath} must end with a newline`);
  assertComplete(markdown, relativePath);

  for (const target of localTargets(markdown)) {
    const resolved = path.resolve(root, path.dirname(relativePath), target);
    const isInsideRepository = resolved === root || resolved.startsWith(`${root}${path.sep}`);
    assert(isInsideRepository, `${relativePath} links outside the repository: ${target}`);
    await access(resolved).catch(() => {
      throw new Error(`${relativePath} has a broken local link: ${target}`);
    });
  }
}

async function listMarkdownFiles(directory = ".") {
  const entries = await readdir(path.join(root, directory), { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredMarkdownDirectories.has(entry.name)) {
        files.push(...(await listMarkdownFiles(relativePath)));
      }
      continue;
    }
    if (entry.name.endsWith(".md")) {
      files.push(relativePath.replace(/^\.\//, ""));
    }
  }

  return files.filter(
    (file) =>
      file !== "PROJECT_SOURCE.md" &&
      (!file.startsWith(`prompt-inbox${path.sep}`) || file === "prompt-inbox/README.md"),
  );
}

function markdownImageTargets(markdown) {
  return localTargets(markdown).filter((target) => /\.(?:avif|gif|jpe?g|png|webp)$/i.test(target));
}

async function verifyStylePackage(recipe) {
  const skillPath = recipe.skill;
  const skillDirectory = path.dirname(skillPath);
  const publicReadmePath = path.join(skillDirectory, "README.md");
  const openaiPath = path.join(skillDirectory, "agents/openai.yaml");
  const [skill, publicReadme, openai] = await Promise.all([
    readText(skillPath),
    readText(publicReadmePath),
    readText(openaiPath),
  ]);

  verifySkillFrontmatter(skill, skillPath, recipe.id);
  assertComplete(skill, skillPath);
  assertComplete(publicReadme, publicReadmePath);
  assertComplete(openai, openaiPath);
  assert(skill.endsWith("\n"), `${skillPath} must end with a newline`);
  assert(openai.includes(`$${recipe.id}`), `${openaiPath} must mention $${recipe.id}`);
  assert(openai.endsWith("\n"), `${openaiPath} must end with a newline`);
  assert(
    publicReadme.includes(`--skill ${recipe.id}`),
    `${publicReadmePath} is missing its install command`,
  );
  assert(publicReadme.includes(`$${recipe.id}`), `${publicReadmePath} is missing its invocation`);
  assert(
    publicReadme.includes("[Read the agent instructions](SKILL.md)"),
    `${publicReadmePath} must link to SKILL.md`,
  );
  assert(
    new Set(markdownImageTargets(publicReadme)).size >= 2,
    `${publicReadmePath} must show a source and generated result`,
  );
}

async function verifyRecipe(recipe) {
  assert(recipe.id, "Recipe is missing id");
  assert(recipe.name, `${recipe.id} is missing name`);
  assert(allowedStatuses.has(recipe.status), `${recipe.id} has invalid status`);
  assert(allowedModes.has(recipe.default_mode), `${recipe.id} has invalid mode`);
  assert(recipe.file === `references/recipes/${recipe.id}.md`, `${recipe.id} has an invalid file`);
  assert(recipe.skill === `skills/${recipe.id}/SKILL.md`, `${recipe.id} has an invalid skill path`);
  assertComplete(JSON.stringify(recipe), `catalog.json entry ${recipe.id}`);
  assert(
    allowedProvenanceKinds.has(recipe.provenance?.kind),
    `${recipe.id} has invalid provenance kind`,
  );
  assert(recipe.provenance?.license, `${recipe.id} is missing provenance license`);
  assert(Array.isArray(recipe.examples), `${recipe.id} is missing examples`);

  if (recipe.status === "candidate" || recipe.status === "featured") {
    assert(recipe.examples.length >= 4, `${recipe.id} needs four examples at ${recipe.status}`);
  }

  const sources = recipe.examples.map((example) => example.source);
  const outputs = recipe.examples.map((example) => example.output);
  assert(new Set(sources).size === sources.length, `${recipe.id} has duplicate example sources`);
  assert(new Set(outputs).size === outputs.length, `${recipe.id} has duplicate example outputs`);

  if (recipe.provenance.kind === "inspired") {
    assert(recipe.provenance.source_status, `${recipe.id} is missing source status`);
  }

  const recipeMarkdown = await readText(recipe.file);
  assertComplete(recipeMarkdown, recipe.file);
  for (const section of recipeSections) {
    assert(recipeMarkdown.includes(`## ${section}`), `${recipe.id} is missing ${section}`);
  }

  await verifyStylePackage(recipe);
  const publicReadme = await readText(`skills/${recipe.id}/README.md`);
  for (const example of recipe.examples ?? []) {
    assert(allowedModes.has(example.mode), `${recipe.id} example has invalid mode`);
    await Promise.all([
      access(path.join(root, example.source)),
      access(path.join(root, example.output)),
    ]);
    assert(
      publicReadme.includes(path.basename(example.output)),
      `skills/${recipe.id}/README.md is missing ${example.output}`,
    );
    assert(
      publicReadme.includes(path.basename(example.source)),
      `skills/${recipe.id}/README.md is missing ${example.source}`,
    );
  }
}

async function verifyCatalogPages(catalog, readme, readmeZh, recipeIndex) {
  for (const recipe of catalog.recipes) {
    const publicReadmePath = `skills/${recipe.id}/README.md`;
    assert(readme.includes(publicReadmePath), `${publicReadmePath} is not linked in README.md`);
    assert(
      readmeZh.includes(publicReadmePath),
      `${publicReadmePath} is not linked in README.zh-CN.md`,
    );
    assert(
      recipeIndex.includes(`${recipe.id}.md`),
      `${recipe.file} is not linked in references/recipes/index.md`,
    );
    for (const example of recipe.examples) {
      assert(readme.includes(example.output), `${example.output} is not shown in README.md`);
      assert(
        readmeZh.includes(example.output),
        `${example.output} is not shown in README.zh-CN.md`,
      );
    }
  }
}

async function main() {
  const [catalog, evals, router, routerOpenai, readme, readmeZh, recipeIndex] = await Promise.all([
    readJson("catalog.json"),
    readJson("evals/evals.json"),
    readText("skills/image-skillbook/SKILL.md"),
    readText("skills/image-skillbook/agents/openai.yaml"),
    readText("README.md"),
    readText("README.zh-CN.md"),
    readText("references/recipes/index.md"),
  ]);
  const ids = catalog.recipes.map((recipe) => recipe.id);

  assert(catalog.schema_version === 1, "Unsupported catalog schema");
  assert(new Set(ids).size === ids.length, "Recipe ids must be unique");
  verifySkillFrontmatter(router, "skills/image-skillbook/SKILL.md", "image-skillbook");
  assert(router.endsWith("\n"), "Router SKILL.md must end with a newline");
  assert(routerOpenai.includes("$image-skillbook"), "Router prompt must mention $image-skillbook");
  assert(evals.skill_name === "image-skillbook", "Eval skill name is invalid");
  assert(evals.evals.length >= 3, "At least three router evals are required");

  await Promise.all(catalog.recipes.map((recipe) => verifyRecipe(recipe)));
  await verifyCatalogPages(catalog, readme, readmeZh, recipeIndex);

  const markdownFiles = await listMarkdownFiles();
  await Promise.all(markdownFiles.map((file) => verifyMarkdownFile(file)));

  const installer = await stat(path.join(root, "scripts/install-local.sh"));
  assert((installer.mode & 0o111) !== 0, "scripts/install-local.sh must be executable");

  console.log(
    `Verified ${catalog.recipes.length} visual Skills, the optional router, ` +
      `${markdownFiles.length} Markdown files, and ${evals.evals.length} router evals.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
