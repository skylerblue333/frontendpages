#!/usr/bin/env bash
set -euo pipefail
route="${1:?route required}"
out="${2:?output required}"
mkdir -p "$(dirname "$out")"
chromium --headless --no-sandbox --disable-gpu --hide-scrollbars --virtual-time-budget=5000 --window-size=390,844 --screenshot="$out" "http://localhost:5175${route}" >/tmp/mobile-capture.log 2>&1
printf 'captured=%s route=%s viewport=390x844\n' "$out" "$route"
