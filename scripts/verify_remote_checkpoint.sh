#!/usr/bin/env bash
set -euo pipefail

branch=${1:-master}
remote=${2:-origin}

# Refresh remote refs before comparing; never expose credentials or tokens.
git fetch "$remote" "$branch" --quiet
local_sha=$(git rev-parse HEAD)
remote_sha=$(git rev-parse "$remote/$branch")

if [[ "$local_sha" != "$remote_sha" ]]; then
  printf 'ERROR: local HEAD %s does not match %s/%s %s\n' "${local_sha:0:12}" "$remote" "$branch" "${remote_sha:0:12}" >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo 'ERROR: working tree is not clean' >&2
  git status --short >&2
  exit 1
fi

printf 'verified_remote=%s\n' "${remote_sha:0:12}"
printf 'branch=%s\n' "$branch"
printf 'working_tree=clean\n'
