from __future__ import annotations

import json
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
INVENTORY = json.loads((ROOT / "docs/visual-route-inventory.json").read_text())["routes"]
CHANGED = subprocess.check_output(
    ["git", "diff", "HEAD^", "HEAD", "--name-only", "--", "client/src/pages/*.tsx"],
    cwd=ROOT,
    text=True,
).splitlines()
changed_files = {Path(item).name for item in CHANGED}
routes = [route for route in INVENTORY if route.get("page_file") in changed_files]

base = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:5173").rstrip("/")
results_root = ROOT / "docs/visual-review/batch-002-recapture"
results_root.mkdir(parents=True, exist_ok=True)

for mode, width, height in (("desktop", 1440, 1000), ("mobile", 390, 844)):
    out = results_root / mode
    out.mkdir(parents=True, exist_ok=True)
    result_path = results_root / f"screenshot-results-{mode}.jsonl"
    with result_path.open("w", encoding="utf-8") as log:
        for index, route in enumerate(routes, 1):
            slug = re.sub(r"[^a-zA-Z0-9]+", "-", route["path"].strip("/")).strip("-") or "home"
            target = out / f"{index:03d}-{slug}.png"
            url = base + (route["path"] if route["path"].startswith("/") else "/" + route["path"])
            cmd = [
                "chromium", "--headless", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
                f"--window-size={width},{height}", "--run-all-compositor-stages-before-draw",
                "--virtual-time-budget=5000", f"--screenshot={target}", url,
            ]
            started = time.time()
            try:
                proc = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True, timeout=25)
                status = {"index": index, "path": route["path"], "component": route["component"], "mode": mode, "screenshot": str(target), "exit_code": proc.returncode, "seconds": round(time.time() - started, 2), "error": proc.stderr[-500:] if proc.returncode else ""}
            except subprocess.TimeoutExpired:
                status = {"index": index, "path": route["path"], "component": route["component"], "mode": mode, "screenshot": str(target), "exit_code": 124, "seconds": round(time.time() - started, 2), "error": "timeout"}
            log.write(json.dumps(status) + "\n")
            log.flush()
            print(json.dumps(status), flush=True)

print(json.dumps({"changed_files": len(changed_files), "routes": len(routes), "modes": ["desktop", "mobile"]}))
