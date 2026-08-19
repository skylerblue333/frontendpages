#!/usr/bin/env bash
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MANIFEST="$ROOT/docs/visual-route-inventory.json"
OUT="$ROOT/docs/visual-review/screenshots"
MODE="${1:-desktop}"
LIMIT="${2:-0}"
BASE="${BASE_URL:-http://localhost:5173}"
mkdir -p "$OUT" "$ROOT/docs/visual-review"
if [[ "$MODE" == "mobile" ]]; then
  WIDTH=390; HEIGHT=844
else
  WIDTH=1440; HEIGHT=1000
fi
python3 - "$MANIFEST" "$OUT" "$MODE" "$LIMIT" "$BASE" "$WIDTH" "$HEIGHT" <<'PY'
import json, re, subprocess, sys, time
from pathlib import Path
manifest, out, mode, limit, base, width, height = sys.argv[1:]
routes = json.loads(Path(manifest).read_text())['routes']
limit = int(limit)
if limit > 0:
    routes = routes[:limit]
result_path = Path(out).parent / f"screenshot-results-{mode}.jsonl"
with result_path.open('w', encoding='utf-8') as log:
    for index, route in enumerate(routes, 1):
        path = route['path']
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', path.strip('/')).strip('-') or 'home'
        target = Path(out) / f"{index:04d}-{slug}.png"
        url = base.rstrip('/') + (path if path.startswith('/') else '/' + path)
        cmd = ['chromium', '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', f'--window-size={width},{height}', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=5000', f'--screenshot={target}', url]
        started = time.time()
        try:
            proc = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True, timeout=25)
            status = {'index': index, 'path': path, 'component': route['component'], 'mode': mode, 'screenshot': str(target), 'exit_code': proc.returncode, 'seconds': round(time.time()-started, 2), 'error': proc.stderr[-500:] if proc.returncode else ''}
        except subprocess.TimeoutExpired:
            status = {'index': index, 'path': path, 'component': route['component'], 'mode': mode, 'screenshot': str(target), 'exit_code': 124, 'seconds': round(time.time()-started, 2), 'error': 'timeout'}
        log.write(json.dumps(status) + '\n'); log.flush()
        print(json.dumps(status), flush=True)
PY
