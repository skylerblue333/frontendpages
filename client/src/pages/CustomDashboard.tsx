import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  Pencil,
  RefreshCw,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type DashboardArea = "All" | "Platform" | "Finance" | "Community";
type DashboardState = "All" | "Draft" | "Review" | "Unavailable";

type DashboardConcept = {
  id: string;
  title: string;
  area: Exclude<DashboardArea, "All">;
  state: Exclude<DashboardState, "All">;
  summary: string;
  owner: string;
  widgets: string;
  sources: string;
  permissions: string;
  refresh: string;
  metrics: string;
};

const dashboards: DashboardConcept[] = [
  {
    id: "platform-dashboard",
    title: "Platform overview dashboard",
    area: "Platform",
    state: "Review",
    summary:
      "A local dashboard concept for platform operations pending source provenance, role review, and metric definitions.",
    owner: "Dashboard owner unavailable",
    widgets: "Widget configuration unavailable",
    sources: "Data sources unavailable",
    permissions: "Viewer permissions unavailable",
    refresh: "Refresh and freshness unavailable",
    metrics: "Metrics unavailable",
  },
  {
    id: "finance-dashboard",
    title: "Finance workspace dashboard",
    area: "Finance",
    state: "Draft",
    summary:
      "A draft dashboard concept for finance workflows pending privacy review, tenant boundaries, and authoritative data sources.",
    owner: "Dashboard owner unavailable",
    widgets: "Widget configuration unavailable",
    sources: "Data sources unavailable",
    permissions: "Viewer permissions unavailable",
    refresh: "Refresh and freshness unavailable",
    metrics: "Metrics unavailable",
  },
  {
    id: "community-dashboard",
    title: "Community health dashboard",
    area: "Community",
    state: "Unavailable",
    summary:
      "A local dashboard concept for community operations pending consent-aware activity sources, aggregation rules, and access controls.",
    owner: "Dashboard owner unavailable",
    widgets: "Widget configuration unavailable",
    sources: "Data sources unavailable",
    permissions: "Viewer permissions unavailable",
    refresh: "Refresh and freshness unavailable",
    metrics: "Metrics unavailable",
  },
];

const areas: DashboardArea[] = ["All", "Platform", "Finance", "Community"];
const states: DashboardState[] = ["All", "Draft", "Review", "Unavailable"];

export default function CustomDashboard() {
  const [area, setArea] = useState<DashboardArea>("All");
  const [state, setState] = useState<DashboardState>("All");
  const [selectedId, setSelectedId] = useState(dashboards[0].id);
  const [status, setStatus] = useState(
    "Dashboard service unavailable. Showing local dashboard concepts only."
  );

  const filtered = useMemo(
    () =>
      dashboards.filter(
        dashboard =>
          (area === "All" || dashboard.area === area) &&
          (state === "All" || dashboard.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(dashboard => dashboard.id === selectedId) ??
    filtered[0] ??
    dashboards[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No widget, data source, metric, permission, refresh, notification, or dashboard mutation request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={LayoutDashboard}
        title="Custom dashboard"
        subtitle="Review local dashboard-configuration concepts without fabricated widgets, metrics, data sources, permissions, refresh states, or live reporting."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Dashboard service unavailable.</strong> No widget registry,
            source catalog, metric definitions, permission store, freshness
            monitor, or reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Dashboard service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset dashboards
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Dashboard preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review dashboard concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show dashboard structure only. They
                  do not represent real widgets, metrics, data sources, owners,
                  permissions, timestamps, or reporting results.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Dashboard area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Dashboard state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(dashboard => (
                <button
                  aria-pressed={selected.id === dashboard.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === dashboard.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={dashboard.id}
                  onClick={() => setSelectedId(dashboard.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{dashboard.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {dashboard.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{dashboard.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {dashboard.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local dashboard fixtures match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected dashboard
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Owner", selected.owner],
                  ["Widgets", selected.widgets],
                  ["Data sources", selected.sources],
                  ["Permissions", selected.permissions],
                  ["Refresh", selected.refresh],
                  ["Metrics", selected.metrics],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No dashboard owner, widget, data source, permission, freshness,
                metric, or reporting state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Edit dashboard")}
                  variant="outline"
                >
                  <Pencil className="mr-2 h-4 w-4" /> Edit unavailable
                </Button>
                <Button
                  onClick={() => blocked("Refresh dashboard")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Share dashboard")}
                  variant="outline"
                >
                  <Share2 className="mr-2 h-4 w-4" /> Share unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Dashboard tooling requires source provenance, role-based
                  access, tenant isolation, freshness and cache semantics, query
                  safety, privacy controls, audit history, accessibility, and
                  performance budgets.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Widget, source, metric, permission, refresh, and sharing
                  transitions must be auditable and isolated from fabricated
                  reporting results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Link2 className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No widget query, source connection, permission change, report
                  export, notification, or dashboard-sharing operation is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Dashboard state remains explicitly unavailable until
                  authoritative reporting services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
