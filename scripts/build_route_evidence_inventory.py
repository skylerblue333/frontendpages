from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "client/src/App.tsx"
PAGES = ROOT / "client/src/pages"
DOCS = ROOT / "docs"

PLACEHOLDER_TERMS = re.compile(
    r"coming soon|feature unavailable|not active|no data available|"
    r"sign in to access|generic placeholder|placeholder|no verified",
    re.IGNORECASE,
)


def slug_for_route(route: str) -> str:
    value = route.strip("/").replace("/", "-") or "home"
    return re.sub(r"[^a-z0-9-]+", "-", value.lower()).strip("-")


def source_for_component(component: str) -> Path | None:
    candidate = PAGES / f"{component}.tsx"
    return candidate if candidate.exists() else None


def main() -> None:
    app_text = APP.read_text()
    routes = re.findall(r'<Route\s+path="([^"]+)"\s+component=\{([^}]+)\}', app_text)
    checkpoint_names = {path.stem.removesuffix("-visual-checkpoint") for path in DOCS.glob("*-visual-checkpoint.md")}
    review_names = {path.stem.removesuffix("-review") for path in DOCS.glob("*-review.md")}
    entries = []
    for route, component in routes:
        slug = slug_for_route(route)
        source = source_for_component(component)
        text = source.read_text(errors="ignore") if source else ""
        entries.append(
            {
                "route": route,
                "component": component,
                "source": str(source.relative_to(ROOT)) if source else None,
                "source_exists": source is not None,
                "review_documented": slug in review_names,
                "visual_checkpoint_documented": slug in checkpoint_names,
                "placeholder_signal": bool(PLACEHOLDER_TERMS.search(text)),
            }
        )

    source_components = {path.stem for path in PAGES.glob("*.tsx")}
    routed_components = {component for _, component in routes}
    component_counts: dict[str, int] = {}
    for _, component in routes:
        component_counts[component] = component_counts.get(component, 0) + 1
    duplicate_route_components = {component: count for component, count in component_counts.items() if count > 1}
    non_identifier_route_expressions = [component for component in routed_components if not re.fullmatch(r"[A-Za-z_$][A-Za-z0-9_$]*", component)]
    report = {
        "generated_at_commit": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip(),
        "registered_route_count": len(routes),
        "source_page_count": len(source_components),
        "routed_component_count": len(routed_components),
        "duplicate_route_components": duplicate_route_components,
        "non_identifier_route_expressions": sorted(non_identifier_route_expressions),
        "unrouted_source_pages": sorted(source_components - routed_components),
        "routes_missing_source": [entry for entry in entries if not entry["source_exists"]],
        "routes_with_review": sum(entry["review_documented"] for entry in entries),
        "routes_with_visual_checkpoint": sum(entry["visual_checkpoint_documented"] for entry in entries),
        "routes_with_placeholder_signal": sum(entry["placeholder_signal"] for entry in entries),
        "routes": entries,
    }
    output = ROOT / "docs/route-evidence-inventory.json"
    output.write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps({key: report[key] for key in report if key != "routes"}, indent=2))


if __name__ == "__main__":
    main()
