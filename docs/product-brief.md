# Image Skillbook — Product Brief

## Product promise

**One image. Many ways to see it.**

Give the skill an image and either a named recipe or an intent. It selects a tested
visual recipe, preserves the part of the prompt that creates the look, runs it with
the best available image tool, and verifies the deliverable.

The product is not “thousands of prompts.” It is a small number of recipes people can
trust, plus a clear path for the library to grow.

## Who it is for

- photographers exploring AI reinterpretations of their own work;
- designers collecting reusable visual techniques;
- developers who want image workflows available inside coding agents;
- creators who find good prompts on social media but cannot reproduce the result; and
- prompt authors who want their work credited, tested, and distributed responsibly.

## The homepage must prove four things

1. The same source image can become meaningfully different outputs.
2. Every recipe has a name, a recognizable result, and a clear trade-off.
3. Installation and first use take one short command and one sentence.
4. The library records where recipes came from and whether they may be redistributed.

## Recommended page sequence

### 1. Hero

- Product name: **Image Skillbook**
- Headline: **One image. Many ways to see it.**
- Supporting copy: “A growing open-source library of tested visual recipes for AI
  image generation and editing.”
- Primary action: **Install the skill**
- Secondary action: **Explore recipes**

Avoid broad claims such as “the ultimate image prompt library.” The live examples
should carry the promise.

### 2. Same image, different recipes

Use one repository-owned photograph as the constant input. Let visitors switch
between three to five recipe outputs while the source remains visible.

Each tab shows:

- the recipe name;
- the finished image;
- Direct, Adaptive, or Production mode;
- one sentence describing the visual decision; and
- a link to the recipe file.

This section is the main proof. Do not use unrelated source images for each style.

### 3. From social discovery to tested recipe

Show the curation pipeline:

```text
discover → source check → isolate the creative kernel
         → test on varied inputs → human review → feature
```

The point is not that the library has many prompts. The point is that every featured
recipe survived comparison.

### 4. Execution modes

Explain Direct, Adaptive, and Production using one concrete example each. Keep the
section visual and avoid implementation jargon.

### 5. Recipe anatomy

Show one recipe as a compact card:

- use when;
- visual decision;
- preserve;
- discard;
- verified models;
- source and license; and
- example outputs.

### 6. Install

Show one standard Skills CLI command, then three natural-language examples. Keep
agent-specific alternatives in a disclosure instead of competing in the hero.

### 7. Contribute

Invite people to submit a source link, example result, model, and permission status.
Do not accept a raw unattributed prompt as a publishable recipe.

## MVP boundary

The first website is a static proof and installation surface. It does not need:

- user accounts;
- server-side image generation;
- a prompt marketplace;
- voting or leaderboards;
- creator payouts; or
- a database.

Launch with three to five featured recipes, one shared source-image comparison, a
clear contribution guide, and a verified install path.

## Visual direction

Use a quiet gallery system that lets varied artwork lead:

- warm neutral background;
- one strong display face plus a restrained UI sans;
- thin rules rather than card shadows;
- small status labels for recipe maturity and execution mode;
- generous spacing around image comparisons; and
- one accent sampled from the current featured artwork.

The site should not borrow Taste Lab's mushroom identity, exact typography, layout,
or demo pages. Its useful lesson is product clarity, not visual imitation.

## Launch proof

Before public launch, verify separately:

- the repository installs through the documented command;
- at least three recipes have human-reviewed outputs on varied inputs;
- every public recipe has clear source rights;
- README and website show actual outputs rather than mockups; and
- the production URL serves the same commit advertised in the release.
