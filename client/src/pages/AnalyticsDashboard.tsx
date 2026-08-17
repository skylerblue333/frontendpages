import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Database,
  Gauge,
  LineChart,
  LockKeyhole,
  RotateCcw,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type MetricState = "Unavailable" | "Review" | "Planned";
type MetricFixture = {
  id: string;
  label: string;
  state: MetricState;
  description: string;
};
type Window = "1h" | "24h" | "7d" | "30d";
const metrics: MetricFixture[] = [
  {
    id: "api",
    label: "API performance",
    state: "Unavailable",
    description:
      "No request telemetry, latency sample, error-rate source, or throughput stream is connected.",
  },
  {
    id: "database",
    label: "Database performance",
    state: "Unavailable",
    description:
      "No database probe, query sample, connection metric, or freshness guarantee is available.",
  },
  {
    id: "cache",
    label: "Cache performance",
    state: "Review",
    description:
      "Cache hit, miss, eviction, and freshness metrics require a documented observability contract.",
  },
  {
    id: "engines",
    label: "Ecosystem engine health",
    state: "Planned",
    description:
      "No verified engine registry, health check, incident state, or service owner is connected.",
  },
];
const windows: Window[] = ["1h", "24h", "7d", "30d"];
const icons = {
  api: Activity,
  database: Database,
  cache: Gauge,
  engines: Server,
} as const;

export default function AnalyticsDashboard() {
  const [window, setWindow] = useState<Window>("24h");
  const [selectedId, setSelectedId] = useState("api");
  const [status, setStatus] = useState(
    "Analytics unavailable. Showing local observability fixtures only."
  );
  const selected =
    metrics.find(metric => metric.id === selectedId) ?? metrics[0];
  const reset = () => {
    setWindow("24h");
    setSelectedId("api");
    setStatus(
      "Analytics preview reset locally. No telemetry, event, identity, query, probe, alert, or report state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No telemetry, event, identity, query, probe, export, alert, or report request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-violet-200">
              <BarChart3 aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Analytics dashboard
                </h1>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review observability concepts without live telemetry, user
                tracking, event collection, performance claims, or reporting
                side effects.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset analytics dashboard preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <AlertTriangle
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Analytics unavailable.
              </strong>{" "}
              No telemetry source, event schema, identity context, database
              probe, API monitor, metric registry, or reporting pipeline is
              connected. The dashboard below is a local interface preview.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_330px]">
          <div className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    Metric windows
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Time-window controls only update local preview context.
                  </p>
                </div>
                <div
                  aria-label="Select local analytics time window"
                  className="flex flex-wrap gap-2"
                  role="group"
                >
                  {windows.map(item => (
                    <Button
                      aria-pressed={window === item}
                      className={
                        window === item
                          ? "bg-violet-500 text-white hover:bg-violet-400"
                          : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                      }
                      key={item}
                      onClick={() => {
                        setWindow(item);
                        setStatus(
                          `${item} analytics window selected locally. No time-range query was made.`
                        );
                      }}
                      size="sm"
                      variant={window === item ? "default" : "outline"}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {metrics.map(metric => {
                  const Icon =
                    icons[metric.id as keyof typeof icons] ?? Activity;
                  return (
                    <button
                      aria-pressed={selectedId === metric.id}
                      className={`rounded-xl border p-5 text-left transition-colors ${selectedId === metric.id ? "border-violet-400/35 bg-violet-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                      key={metric.id}
                      onClick={() => {
                        setSelectedId(metric.id);
                        setStatus(
                          `${metric.label} selected for local metric review.`
                        );
                      }}
                      type="button"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-violet-200">
                          <Icon aria-hidden="true" className="h-4 w-4" />
                        </div>
                        <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                          {metric.state}
                        </span>
                      </div>
                      <p className="mt-5 font-medium text-slate-200">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {metric.description}
                      </p>
                      <p className="mt-4 text-xs text-slate-600">
                        {window} window · value unavailable
                      </p>
                    </button>
                  );
                })}
              </div>
              <p
                aria-live="polite"
                className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
              >
                {status}
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {selected.label}
                  </h2>
                  <p className="mt-1 text-sm text-violet-200">
                    Selected local observability fixture
                  </p>
                </div>
                <LineChart
                  aria-hidden="true"
                  className="h-6 w-6 text-violet-200"
                />
              </div>
              <div className="mt-6 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-8 text-center">
                <LineChart
                  aria-hidden="true"
                  className="mx-auto h-9 w-9 text-slate-600"
                />
                <p className="mt-3 font-medium text-slate-300">
                  No verified data to chart
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A chart would require a source, metric definition, aggregation
                  window, freshness indicator, and access policy. None is
                  connected for this preview.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    Value
                  </p>
                  <p className="mt-2 text-sm text-slate-300">Unavailable</p>
                </div>
                <div className="rounded-lg border border-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    Freshness
                  </p>
                  <p className="mt-2 text-sm text-slate-300">Unknown</p>
                </div>
                <div className="rounded-lg border border-slate-800 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                    Window
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{window}</p>
                </div>
              </div>
            </Card>
          </div>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Data boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No user identity, event, session, conversion, revenue, API,
                    database, cache, or engine telemetry is available. No value
                    is estimated.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Reporting posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Export, alerts, targets, dashboards, and reports remain
                    unavailable until provenance, consent, retention, access,
                    and freshness contracts are defined.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  onClick={() => blocked("Export")}
                  size="sm"
                  variant="outline"
                >
                  Export unavailable
                </Button>
                <Button
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  onClick={() => blocked("Alerting")}
                  size="sm"
                  variant="outline"
                >
                  Alerts unavailable
                </Button>
                <Button
                  className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  onClick={() => blocked("Reporting")}
                  size="sm"
                  variant="outline"
                >
                  Reports unavailable
                </Button>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
