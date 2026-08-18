import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  FileChartColumn,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ChartArea = "All" | "Portfolio" | "Community" | "Education";
type ChartState = "All" | "Review" | "Unavailable" | "Ready";
type ChartConcept = {
  id: string;
  title: string;
  area: Exclude<ChartArea, "All">;
  state: Exclude<ChartState, "All">;
  summary: string;
  dataset: string;
  metric: string;
  window: string;
  provenance: string;
  refresh: string;
  permission: string;
};

const concepts: ChartConcept[] = [
  {
    id: "portfolio-trend",
    title: "Portfolio trend",
    area: "Portfolio",
    state: "Review",
    summary:
      "A local portfolio chart concept pending authoritative holdings, market sources, currency semantics, and privacy-aware aggregation.",
    dataset: "Dataset unavailable",
    metric: "Metric definition unavailable",
    window: "Time window unavailable",
    provenance: "Source provenance unavailable",
    refresh: "Refresh status unavailable",
    permission: "Access scope unavailable",
  },
  {
    id: "community-activity",
    title: "Community activity",
    area: "Community",
    state: "Ready",
    summary:
      "A local community chart concept pending member, activity, engagement, moderation, and privacy-aware reporting services.",
    dataset: "Dataset unavailable",
    metric: "Metric definition unavailable",
    window: "Time window unavailable",
    provenance: "Source provenance unavailable",
    refresh: "Refresh status unavailable",
    permission: "Access scope unavailable",
  },
  {
    id: "education-progress",
    title: "Education progress",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local education chart concept pending course, learner, completion, assessment, certification, and privacy-aware reporting services.",
    dataset: "Dataset unavailable",
    metric: "Metric definition unavailable",
    window: "Time window unavailable",
    provenance: "Source provenance unavailable",
    refresh: "Refresh status unavailable",
    permission: "Access scope unavailable",
  },
];
const areas: ChartArea[] = ["All", "Portfolio", "Community", "Education"];
const states: ChartState[] = ["All", "Review", "Unavailable", "Ready"];

export default function DataVisualization() {
  const [area, setArea] = useState<ChartArea>("All");
  const [state, setState] = useState<ChartState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Visualization service unavailable. Showing local chart concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No dataset lookup, metric aggregation, chart rendering, refresh, export, permission check, or reporting request was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Dataset", selected.dataset],
    ["Metric", selected.metric],
    ["Window", selected.window],
    ["Provenance", selected.provenance],
    ["Refresh", selected.refresh],
    ["Permissions", selected.permission],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="Data visualization"
        subtitle="Review local chart concepts without fabricated datasets, metrics, trends, balances, activity, performance, permissions, or live reporting."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Visualization service unavailable.</strong> No dataset
            registry, metric catalog, chart renderer, refresh worker, permission
            scope, or reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Visualization service remains unavailable. Local chart concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset charts
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Visualization preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review chart concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show visualization structure only.
                  They do not represent real datasets, metrics, balances,
                  activity, trends, permissions, or performance.
                </p>
              </div>
              <FileChartColumn className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Chart area filter"
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
              aria-label="Chart state filter"
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
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local chart concepts match these filters.
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
                Selected chart
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
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
                No dataset, metric, window, source, refresh, permission, trend,
                or report state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create chart")}
                  variant="outline"
                >
                  <FileChartColumn className="mr-2 h-4 w-4" /> Create
                  unavailable
                </Button>
                <Button
                  onClick={() => blocked("Refresh chart")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Visualization tooling requires authoritative provenance,
                  semantic metric definitions, time-window and timezone
                  handling, privacy-aware aggregation, access control,
                  refresh/error states, auditable exports, and clear
                  unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Dataset, metric, permission, refresh, export, and report
                  transitions must be auditable and isolated from fabricated
                  reporting outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No dataset lookup, metric aggregation, chart rendering,
                  refresh, export, or dashboard mutation is available from this
                  preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
