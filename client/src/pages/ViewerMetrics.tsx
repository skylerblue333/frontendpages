import { useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  Download,
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
type Metric = { label: string; value: string; detail: string };
const metrics: readonly Metric[] = [
  {
    label: "Unique viewers",
    value: "Unavailable",
    detail:
      "No authenticated viewer identity, deduplication method, or source event stream is connected.",
  },
  {
    label: "Watch time",
    value: "Unavailable",
    detail:
      "No playback events, duration authority, timezone, or aggregation pipeline is available.",
  },
  {
    label: "Engagement",
    value: "Unavailable",
    detail:
      "No reactions, comments, shares, consent, moderation, or attribution events are available.",
  },
  {
    label: "Retention",
    value: "Unavailable",
    detail:
      "No cohort definition, session boundaries, privacy controls, or retention computation exists locally.",
  },
  {
    label: "Geography",
    value: "Unavailable",
    detail:
      "No location source, lawful purpose, aggregation threshold, or privacy policy is connected.",
  },
  {
    label: "Freshness",
    value: "Unknown",
    detail:
      "No event watermark, ingestion timestamp, source status, or data-quality report exists.",
  },
];

export default function ViewerMetrics() {
  const [window, setWindow] = useState<Window>("7 days");
  const [status, setStatus] = useState(
    "Viewer-metrics service unavailable locally. No audience events or analytics data are loaded."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No analytics query, viewer identification, tracking, export, or audience mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="Viewer metrics"
        subtitle="Review audience-analytics readiness without fabricating viewers, watch time, engagement, retention, geography, freshness, consent, or performance outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Viewer metrics unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Viewer-metrics service unavailable.</strong> No event
            source, viewer identity boundary, playback telemetry, consent
            record, aggregation pipeline, privacy policy, or analytics export is
            connected.
          </p>
          <Button
            onClick={() => blocked("Refresh metrics")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Analytics preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Audience metric readiness
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local metric concepts demonstrate definitions and
                  missing evidence only. They do not represent real viewers,
                  events, counts, watch time, engagement, retention, geographic
                  data, or performance.
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
              aria-label="Metric time window"
            >
              {(["7 days", "30 days", "90 days"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={window === item}
                  onClick={() => {
                    setWindow(item);
                    setStatus(
                      `Metric window changed locally to ${item}. No analytics query was run.`
                    );
                  }}
                  size="sm"
                  variant={window === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {metrics.map(metric => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{metric.label}</p>
                  <p className="mt-2 font-medium">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Load metrics unavailable
              </Button>
              <Button disabled variant="outline">
                <Download className="mr-2 h-4 w-4" /> Export unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Metric boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No audience state implied
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Window", window],
                  ["Source", "Event stream unavailable"],
                  ["Viewers", "Not identified"],
                  ["Watch time", "Not computed"],
                  ["Engagement", "Not measured"],
                  ["Retention", "Not calculated"],
                  ["Geography", "Not collected"],
                  ["Consent", "Not recorded"],
                  ["Freshness", "Unknown"],
                  ["Export", "Policy unavailable"],
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
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production analytics service requires consent-aware event
                  collection, documented metric definitions, lawful identity
                  scope, aggregation and threshold rules, data minimization,
                  retention limits, source freshness, quality checks, access
                  controls, privacy-safe geography, reproducible attribution,
                  and governed exports.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Definitions visible
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No values asserted.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Tracking blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No event collection.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No freshness proof.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UsersRound
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Viewer privacy</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No identity inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No viewer count, watch time, engagement, retention, geography,
            freshness, consent, analytics, export, or audience outcome is
            claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
