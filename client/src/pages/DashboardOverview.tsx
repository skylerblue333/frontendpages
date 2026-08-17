import { useMemo, useState } from "react";
import {
  Activity,
  CircleSlash2,
  FileDown,
  LayoutDashboard,
  LockKeyhole,
  RefreshCw,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type DashboardArea = "All" | "Portfolio" | "Community" | "Education";
type DashboardState = "All" | "Ready" | "Review" | "Unavailable";

type DashboardConcept = {
  id: string;
  title: string;
  area: Exclude<DashboardArea, "All">;
  state: Exclude<DashboardState, "All">;
  summary: string;
  owner: string;
  source: string;
  metric: string;
  window: string;
  refresh: string;
  permission: string;
  trend: string;
};

const dashboards: DashboardConcept[] = [
  {
    id: "portfolio-overview",
    title: "Portfolio overview",
    area: "Portfolio",
    state: "Review",
    summary:
      "A local portfolio dashboard concept pending authoritative holdings, market sources, currency semantics, and permission controls.",
    owner: "Dashboard owner unavailable",
    source: "Data source unavailable",
    metric: "Metric definitions unavailable",
    window: "Reporting window unavailable",
    refresh: "Refresh status unavailable",
    permission: "Access scope unavailable",
    trend: "Trend and comparison unavailable",
  },
  {
    id: "community-overview",
    title: "Community overview",
    area: "Community",
    state: "Ready",
    summary:
      "A local community dashboard concept pending member, activity, engagement, moderation, and privacy-aware reporting services.",
    owner: "Dashboard owner unavailable",
    source: "Data source unavailable",
    metric: "Metric definitions unavailable",
    window: "Reporting window unavailable",
    refresh: "Refresh status unavailable",
    permission: "Access scope unavailable",
    trend: "Trend and comparison unavailable",
  },
  {
    id: "education-overview",
    title: "Education overview",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local education dashboard concept pending course, learner, completion, assessment, certification, and privacy-aware reporting services.",
    owner: "Dashboard owner unavailable",
    source: "Data source unavailable",
    metric: "Metric definitions unavailable",
    window: "Reporting window unavailable",
    refresh: "Refresh status unavailable",
    permission: "Access scope unavailable",
    trend: "Trend and comparison unavailable",
  },
];

const areas: DashboardArea[] = ["All", "Portfolio", "Community", "Education"];
const states: DashboardState[] = ["All", "Ready", "Review", "Unavailable"];

export default function DashboardOverview() {
  const [area, setArea] = useState<DashboardArea>("All");
  const [state, setState] = useState<DashboardState>("All");
  const [selectedId, setSelectedId] = useState(dashboards[0].id);
  const [status, setStatus] = useState(
    "Dashboard data service unavailable. Showing local dashboard concepts only."
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
      `${action} is unavailable locally. No metric, balance, activity, notification, refresh, permission, export, or reporting request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={LayoutDashboard}
        title="Dashboard overview"
        subtitle="Review local dashboard concepts without fabricated metrics, balances, activity, notifications, performance, integrations, trends, or live reporting."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Dashboard data service unavailable.</strong> No metric
            registry, portfolio source, activity feed, notification service,
            permission scope, refresh worker, or reporting endpoint is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Dashboard data service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset dashboards
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
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
                  do not represent real users, metrics, balances, activity,
                  trends, notifications, or performance.
                </p>
              </div>
              <Activity className="hidden h-7 w-7 text-cyan-200 sm:block" />
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
                  ["Source", selected.source],
                  ["Metrics", selected.metric],
                  ["Window", selected.window],
                  ["Refresh", selected.refresh],
                  ["Permissions", selected.permission],
                  ["Trend", selected.trend],
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
                No owner, source, metric, window, refresh, permission, trend,
                notification, or report state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh dashboard")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Configure dashboard")}
                  variant="outline"
                >
                  <Settings2 className="mr-2 h-4 w-4" /> Configure unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export dashboard")}
                  variant="outline"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Dashboard tooling requires authoritative source provenance,
                  scope and time-window semantics, access controls, privacy
                  safeguards, refresh and error states, auditability, data
                  quality checks, and clear unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Metric, balance, activity, trend, notification, permission,
                  refresh, and export transitions must be auditable and isolated
                  from fabricated reporting outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Activity className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No data-source lookup, metric aggregation, balance import,
                  activity ingestion, notification, refresh, report generation,
                  or dashboard mutation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Dashboard state remains explicitly unavailable until
                  authoritative data and reporting services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
