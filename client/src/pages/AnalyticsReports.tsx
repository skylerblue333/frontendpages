import { useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  FileOutput,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ReportState = "All" | "Draft" | "Review" | "Unavailable";
type ReportConcept = {
  title: string;
  state: Exclude<ReportState, "All">;
  summary: string;
  source: string;
  metric: string;
  freshness: string;
  recipient: string;
  schedule: string;
  exportState: string;
};
const concepts: ReportConcept[] = [
  {
    title: "Content performance report",
    state: "Review",
    summary:
      "Local report concept pending verified source provenance, metric definitions, access policy, privacy controls, retention, and auditable delivery.",
    source: "Data source unavailable",
    metric: "Metric definition unavailable",
    freshness: "Freshness unavailable",
    recipient: "Recipient policy unavailable",
    schedule: "Schedule consent unavailable",
    exportState: "Export state unavailable",
  },
  {
    title: "Community engagement report",
    state: "Draft",
    summary:
      "Local community report concept pending privacy-aware aggregation, audience authorization, recipient controls, and retention evidence.",
    source: "Data source unavailable",
    metric: "Metric definition unavailable",
    freshness: "Freshness unavailable",
    recipient: "Recipient policy unavailable",
    schedule: "Schedule consent unavailable",
    exportState: "Export state unavailable",
  },
  {
    title: "Financial performance report",
    state: "Unavailable",
    summary:
      "Local financial report concept pending sensitive-data authorization, reconciliation, audit review, and secure export controls.",
    source: "Data source unavailable",
    metric: "Metric definition unavailable",
    freshness: "Freshness unavailable",
    recipient: "Recipient policy unavailable",
    schedule: "Schedule consent unavailable",
    exportState: "Export state unavailable",
  },
];
export default function AnalyticsReports() {
  const [state, setState] = useState<ReportState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Reporting service unavailable. Showing local report concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No report, metric, identity, source, recipient, schedule, export, query, notification, or file operation was started.`
    );
  return (
    <div data-ui-polish="batch-181" className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="Analytics reports"
        subtitle="Review local report concepts without fabricated metrics, identities, sources, freshness, recipients, schedules, exports, or business conclusions."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Reporting service unavailable.</strong> No verified data
          source, metric catalog, recipient policy, schedule consent, export
          contract, or delivery service is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Report preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review report concepts
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show report structure only; they do not
              represent real values, users, conversions, revenue, performance,
              audiences, freshness, or delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(["All", "Draft", "Review", "Unavailable"] as ReportState[]).map(
                item => (
                  <Button
                    key={item}
                    aria-pressed={state === item}
                    onClick={() => setState(item)}
                    size="sm"
                    variant={state === item ? "default" : "outline"}
                  >
                    {item}
                  </Button>
                )
              )}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.title === item.title ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected report
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Source", selected.source],
                    ["Metric", selected.metric],
                    ["Freshness", selected.freshness],
                    ["Recipient", selected.recipient],
                    ["Schedule", selected.schedule],
                    ["Export", selected.exportState],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create report")}
                  variant="outline"
                >
                  <BarChart3 className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export report")}
                  variant="outline"
                >
                  <FileOutput className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Reports require verified source provenance, metric
                  definitions, access policy, privacy controls, retention,
                  recipient consent, schedule controls, export safeguards, and
                  auditable delivery.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No report, metric, identity, source, recipient, schedule,
                  export, query, notification, or file is available from this
                  preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No report value, user count, conversion, revenue, performance
                  result, audience, recipient, or freshness timestamp is
                  fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
