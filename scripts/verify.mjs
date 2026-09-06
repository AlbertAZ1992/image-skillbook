import { access, readFile, stat } from "node:fs/promises";
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

async function readJson(relativePath) {
  const contents = await readFile(path.join(root, relativePath), "utf8");
  return JSON.parse(contents);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function verifyMarkdownImages(markdown, baseDirectory) {
  for (const match of markdown.matchAll(/<img\s+[\s\S]*?src="([^"]+)"[\s\S]*?>/g)) {
    const imagePath = match[1];
    if (!imagePath.startsWith("http")) {
      await access(path.resolve(root, baseDirectory, imagePath));
    }
  }
}

async function verifyRecipe(recipe) {
  assert(recipe.id, "Recipe is missing id");
  assert(recipe.name, `${recipe.id} is missing name`);
  assert(allowedStatuses.has(recipe.status), `${recipe.id} has invalid status`);
  assert(allowedModes.has(recipe.default_mode), `${recipe.id} has invalid mode`);
  assert(
    allowedProvenanceKinds.has(recipe.provenance?.kind),
    `${recipe.id} has invalid provenance kind`,
  );
  assert(recipe.provenance?.license, `${recipe.id} is missing provenance license`);

  if (recipe.provenance.kind === "inspired") {
    assert(recipe.provenance.source_status, `${recipe.id} is missing source status`);
  }

  const recipePath = path.join(root, recipe.file);
  await access(recipePath);
  const contents = await readFile(recipePath, "utf8");

  assert(recipe.skill, `${recipe.id} is missing standalone skill path`);
  const standalonePath = path.join(root, recipe.skill);
  await access(standalonePath);
  const standalone = await readFile(standalonePath, "utf8");
  assert(
    standalone.includes(`name: ${recipe.id}`),
    `${recipe.id} standalone skill name is invalid`,
  );
  assert(standalone.endsWith("\n"), `${recipe.skill} must end with a newline`);

  const openaiPath = path.join(path.dirname(recipe.skill), "agents/openai.yaml");
  const openai = await readFile(path.join(root, openaiPath), "utf8");
  assert(
    openai.includes(`$${recipe.id}`),
    `${openaiPath} default prompt must mention $${recipe.id}`,
  );
  assert(openai.endsWith("\n"), `${openaiPath} must end with a newline`);

  const skillDirectory = path.dirname(recipe.skill);
  const publicReadmePath = path.join(skillDirectory, "README.md");
  const publicReadme = await readFile(path.join(root, publicReadmePath), "utf8");
  assert(
    publicReadme.includes(`--skill ${recipe.id}`),
    `${publicReadmePath} is missing its install command`,
  );
  assert(
    publicReadme.includes(`$${recipe.id}`),
    `${publicReadmePath} is missing its Codex trigger`,
  );
  assert(
    publicReadme.includes("[Read the agent instructions](SKILL.md)"),
    `${publicReadmePath} must link to SKILL.md`,
  );
  assert(publicReadme.endsWith("\n"), `${publicReadmePath} must end with a newline`);
  await verifyMarkdownImages(publicReadme, skillDirectory);

  for (const section of recipeSections) {
    assert(contents.includes(`## ${section}`), `${recipe.id} is missing ${section}`);
  }

  for (const example of recipe.examples ?? []) {
    assert(allowedModes.has(example.mode), `${recipe.id} example has invalid mode`);
    await access(path.join(root, example.source));
    await access(path.join(root, example.output));
    assert(
      publicReadme.includes(path.basename(example.output)),
      `${publicReadmePath} is missing ${example.output}`,
    );
  }

  assert(contents.endsWith("\n"), `${recipe.file} must end with a newline`);
}

async function main() {
  const catalog = await readJson("catalog.json");
  const evals = await readJson("evals/evals.json");
  const skill = await readFile(
    path.join(root, "skills/image-skillbook/SKILL.md"),
    "utf8",
  );
  const readme = await readFile(path.join(root, "README.md"), "utf8");
  const readmeZh = await readFile(path.join(root, "README.zh-CN.md"), "utf8");
  const routerOpenai = await readFile(
    path.join(root, "skills/image-skillbook/agents/openai.yaml"),
    "utf8",
  );
  const ids = catalog.recipes.map((recipe) => recipe.id);

  assert(catalog.schema_version === 1, "Unsupported catalog schema");
  assert(new Set(ids).size === ids.length, "Recipe ids must be unique");
  assert(skill.includes("name: image-skillbook"), "Router skill name is invalid");
  assert(skill.endsWith("\n"), "Router SKILL.md must end with a newline");
  assert(
    routerOpenai.includes("$image-skillbook"),
    "Router OpenAI default prompt must mention $image-skillbook",
  );
  assert(evals.skill_name === "image-skillbook", "Eval skill name is invalid");
  assert(evals.evals.length >= 3, "At least three evals are required");

  await Promise.all(catalog.recipes.map((recipe) => verifyRecipe(recipe)));

  for (const recipe of catalog.recipes) {
    const publicReadmePath = path.join(path.dirname(recipe.skill), "README.md");
    assert(readme.includes(publicReadmePath), `${publicReadmePath} is not linked`);
    assert(readmeZh.includes(publicReadmePath), `${publicReadmePath} is not linked in zh`);
    for (const example of recipe.examples ?? []) {
      assert(readme.includes(example.output), `${example.output} is missing from README`);
      assert(
        readmeZh.includes(example.output),
        `${example.output} is missing from README.zh-CN.md`,
      );
    }
  }

  await verifyMarkdownImages(readme, ".");
  await verifyMarkdownImages(readmeZh, ".");

  const installer = await stat(path.join(root, "scripts/install-local.sh"));
  assert((installer.mode & 0o111) !== 0, "scripts/install-local.sh must be executable");

  const installableSkills = catalog.recipes.length + 1;
  console.log(
    `Verified ${catalog.recipes.length} recipes, ${installableSkills} installable skills, ` +
      `${evals.evals.length} evals.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
