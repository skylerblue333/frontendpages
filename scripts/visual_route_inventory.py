from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "client/src/App.tsx"
PAGES = ROOT / "client/src/pages"

text = APP.read_text(encoding="utf-8")
imports = {name: path for name, path in re.findall(r"const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['\"]\.\/pages\/([^'\"]+)['\"]\)\)", text)}
routes = []
for match in re.finditer(r"<Route\s+path=\"([^\"]+)\"\s+component=\{(\w+)\}", text):
    path, component = match.groups()
    page_file = imports.get(component, "")
    if page_file and not page_file.endswith(".tsx"):
        page_file += ".tsx"
    source = (PAGES / page_file).read_text(encoding="utf-8", errors="ignore") if page_file and (PAGES / page_file).exists() else ""
    routes.append({
        "path": path,
        "component": component,
        "page_file": page_file,
        "source_exists": bool(source),
        "placeholder_markers": bool(re.search(r"coming soon|under construction|not implemented|work in progress", source, re.I)),
        "boundary_signals": bool(re.search(r"FeatureUnavailable|evidence boundary|No .* claim|No .* evidence|Unavailable|Blocked", source, re.I)),
        "auth_signals": bool(re.search(r"useAuth|ProtectedRoute|authenticated|login|session", source, re.I)),
        "external_signals": bool(re.search(r"fetch\(|trpc|axios|WebSocket|oauth|wallet|stripe|AWS|DATABASE_URL", source, re.I)),
    })

out = ROOT / "docs/visual-route-inventory.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps({"route_count": len(routes), "routes": routes}, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "route_count": len(routes),
    "source_missing": sum(not r["source_exists"] for r in routes),
    "placeholder_marked": sum(r["placeholder_markers"] for r in routes),
    "boundary_signaled": sum(r["boundary_signals"] for r in routes),
    "auth_signaled": sum(r["auth_signals"] for r in routes),
    "external_signaled": sum(r["external_signals"] for r in routes),
    "output": str(out),
}, indent=2))
