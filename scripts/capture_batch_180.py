from __future__ import annotations
import json
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ROUTES = [
    "/", "/a-b-testing", "/a-b-testing-advanced", "/a-p-i-documentation",
    "/a-p-i-integration", "/a-p-i-keys", "/a-p-i-monitoring", "/a-p-i-status",
    "/a-p-i-testing", "/a-p-i-usage", "/a-p-i-versioning", "/about",
    "/achievement-badges", "/achievements", "/activity-feed", "/activity-tracking",
    "/address-lookup", "/advanced-analytics", "/advanced-search", "/age-verification",
]
BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:5173").rstrip("/")
OUT = ROOT / "docs/visual-review/batch-180"
for mode, width, height in (("desktop", 1440, 1000), ("mobile", 390, 844)):
    folder = OUT / mode
    folder.mkdir(parents=True, exist_ok=True)
    log_path = OUT / f"screenshot-results-{mode}.jsonl"
    with log_path.open("w", encoding="utf-8") as log:
        for index, route in enumerate(ROUTES, 1):
            slug = re.sub(r"[^a-zA-Z0-9]+", "-", route.strip("/")).strip("-") or "home"
            target = folder / f"{index:03d}-{slug}.png"
            cmd = ["chromium", "--headless", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", f"--window-size={width},{height}", "--run-all-compositor-stages-before-draw", "--virtual-time-budget=5000", f"--screenshot={target}", BASE + route]
            started = time.time()
            try:
                proc = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True, timeout=30)
                status = {"index": index, "path": route, "mode": mode, "screenshot": str(target), "exit_code": proc.returncode, "seconds": round(time.time() - started, 2), "error": proc.stderr[-500:] if proc.returncode else ""}
            except subprocess.TimeoutExpired:
                status = {"index": index, "path": route, "mode": mode, "screenshot": str(target), "exit_code": 124, "seconds": round(time.time() - started, 2), "error": "timeout"}
            log.write(json.dumps(status) + "\n")
            log.flush()
            print(json.dumps(status), flush=True)
print(json.dumps({"batch": 180, "routes": len(ROUTES), "modes": ["desktop", "mobile"]}))
