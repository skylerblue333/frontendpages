from __future__ import annotations

import json
import math
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
INVENTORY = ROOT / "docs/visual-route-inventory.json"
OUT = ROOT / "docs/visual-review/contact-sheets"
OUT.mkdir(parents=True, exist_ok=True)

inventory = json.loads(INVENTORY.read_text())
routes = inventory["routes"]

def slug(path: str) -> str:
    return re.sub(r"[^a-zA-Z0-9]+", "-", path.strip("/")).strip("-") or "home"

def choose(predicate, limit=48):
    selected = [r for r in routes if predicate(r)]
    if len(selected) <= limit:
        return selected
    stride = len(selected) / limit
    return [selected[min(len(selected) - 1, math.floor(i * stride))] for i in range(limit)]

def make_sheet(name, selected, viewport):
    folder = ROOT / "docs/visual-review/screenshots" / viewport
    thumbs = []
    for index, route in enumerate(routes, 1):
        if route not in selected:
            continue
        path = folder / f"{index:04d}-{slug(route['path'])}.png"
        if path.exists():
            thumbs.append((route, path))
    cell_w, cell_h = 360, 250
    cols = 4
    rows = math.ceil(len(thumbs) / cols) if thumbs else 1
    sheet = Image.new("RGB", (cols * cell_w, rows * cell_h), "#101827")
    draw = ImageDraw.Draw(sheet)
    for pos, (route, path) in enumerate(thumbs):
        image = Image.open(path).convert("RGB")
        image.thumbnail((cell_w - 16, cell_h - 54))
        x = (pos % cols) * cell_w + (cell_w - image.width) // 2
        y = (pos // cols) * cell_h + 8
        sheet.paste(image, (x, y))
        label = f"{route['path']} | {route['component']}"
        draw.text(((pos % cols) * cell_w + 8, (pos // cols) * cell_h + cell_h - 40), label[:50], fill="#f4f7fb")
    sheet.save(OUT / f"{name}-{viewport}.jpg", quality=90)

sets = {
    "placeholder-marked": lambda r: r.get("placeholder_markers", False),
    "boundary-signals": lambda r: r.get("boundary_signals", False),
    "auth-external": lambda r: r.get("auth_signals", False) or r.get("external_signals", False),
    "source-missing": lambda r: not r.get("source_exists", True),
}
for name, predicate in sets.items():
    chosen = choose(predicate)
    for viewport in ("desktop", "mobile"):
        make_sheet(name, chosen, viewport)

summary = {
    "route_count": len(routes),
    "sets": {name: sum(1 for r in routes if predicate(r)) for name, predicate in sets.items()},
    "contact_sheets": sorted(str(p.relative_to(ROOT)) for p in OUT.glob("*.jpg")),
}
(ROOT / "docs/visual-review/contact-sheets/summary.json").write_text(json.dumps(summary, indent=2) + "\n")
print(json.dumps(summary, indent=2))
