import { useMemo, useState } from "react";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Window = "7 days" | "30 days" | "90 days";
type Metric = { id: string; name: string; definition: string };
const metrics: readonly Metric[] = [
  {
    id: "one",
    name: "Activity metric concept",
    definition:
      "Event source, identity scope, timestamps, and aggregation rules are unavailable.",
  },
  {
    id: "two",
    name: "Engagement metric concept",
    definition:
      "Views, interactions, deduplication, privacy, and bot controls are unavailable.",
  },
  {
    id: "three",
    name: "Growth metric concept",
    definition:
      "Baseline, cohort, time window, comparison method, and source provenance are unavailable.",
  },
];

export default function UserStats() {
  const [window, setWindow] = useState<Window>("7 days");
  const [selectedId, setSelectedId] = useState(metrics[0].id);
  const [status, setStatus] = useState(
    "User-statistics service unavailable locally. No metrics are loaded."
  );
  const selected = useMemo(
    () => metrics.find(metric => metric.id === selectedId) ?? metrics[0],
    [selectedId]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No statistics query, aggregation, ranking, export, privacy, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="User stats"
        subtitle="Review statistics-readiness structure without fabricating counts, engagement, activity, growth, rankings, balances, or personal analytics outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="User statistics unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>User-statistics service unavailable.</strong> No
            authenticated account, event source, metric definitions, aggregation
            store, privacy policy, comparison baseline, or timestamp authority
            is connected.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => blocked("Refresh stats")}
              size="sm"
              variant="outline"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
            </Button>
            <Button
              onClick={() => blocked("Export stats")}
              size="sm"
              variant="outline"
            >
              Export unavailable
            </Button>
          </div>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Metrics preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local metric concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate metric definitions and
                  time-window intent only. They do not represent personal
                  counts, engagement, growth, rankings, balances, performance,
                  or activity history.
                </p>
              </div>
              <BarChart3
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Statistics time window"
            >
              {(["7 days", "30 days", "90 days"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={window === item}
                  onClick={() => {
                    setWindow(item);
                    setStatus(
                      `Time-window intent changed locally to ${item}. No statistics query or aggregation was run.`
                    );
                  }}
                  size="sm"
                  variant={window === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {metrics.map(metric => (
                <button
                  key={metric.id}
                  type="button"
                  aria-pressed={selected.id === metric.id}
                  onClick={() => setSelectedId(metric.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === metric.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <p className="font-medium">{metric.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {metric.definition}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected metric concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{window}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Value", "Unavailable"],
                  ["Definition", "Not finalized"],
                  ["Source", "Event source unavailable"],
                  ["Freshness", "Timestamp unavailable"],
                  ["Baseline", "Not available"],
                  ["Comparison", "Not calculated"],
                  ["Privacy", "Scope unavailable"],
                  ["Ranking", "Not provided"],
                  ["Export", "Unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No count, event, engagement, growth, comparison, ranking, or
                personal-analytics value is available.
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production statistics system requires metric contracts,
                  event provenance, trusted timestamps, deduplication, bot
                  controls, cohort definitions, privacy-safe aggregation,
                  retention, access controls, reproducible calculations, export
                  authorization, and clear distinction between descriptive
                  analytics and financial or suitability conclusions.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Window local</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No aggregation run.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Metric blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No value or ranking.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Clock3
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Freshness absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No timestamp source.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UsersRound
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Scope absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No audience inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No count, activity, engagement, growth, ranking, balance,
            performance, or personal-analytics outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
