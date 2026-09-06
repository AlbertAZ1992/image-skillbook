#!/usr/bin/env bash
set -euo pipefail

script_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
repo_root=$(cd -- "$script_dir/.." && pwd)

exec npx --yes --prefer-offline skills@1.5.23 add "$repo_root" \
	--skill '*' \
	--global \
	--agent codex \
	--yes
