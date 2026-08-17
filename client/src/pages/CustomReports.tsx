import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  FileBarChart2,
  FileDown,
  LockKeyhole,
  Pencil,
  Send,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ReportArea = "All" | "Platform" | "Finance" | "Education";
type ReportState = "All" | "Draft" | "Review" | "Unavailable";

type ReportConcept = {
  id: string;
  title: string;
  area: Exclude<ReportArea, "All">;
  state: Exclude<ReportState, "All">;
  summary: string;
  owner: string;
  metrics: string;
  sources: string;
  recipients: string;
  schedule: string;
  export: string;
  results: string;
};

const reports: ReportConcept[] = [
  {
    id: "platform-report",
    title: "Platform operations report",
    area: "Platform",
    state: "Review",
    summary:
      "A local report-template concept for platform operations pending source provenance, query review, and recipient permissions.",
    owner: "Report owner unavailable",
    metrics: "Metric definitions unavailable",
    sources: "Data sources unavailable",
    recipients: "Recipients and permissions unavailable",
    schedule: "Schedule and timezone unavailable",
    export: "Export format and policy unavailable",
    results: "Report results unavailable",
  },
  {
    id: "finance-report",
    title: "Finance activity report",
    area: "Finance",
    state: "Draft",
    summary:
      "A draft report concept for finance workflows pending tenant isolation, privacy review, and authoritative data sources.",
    owner: "Report owner unavailable",
    metrics: "Metric definitions unavailable",
    sources: "Data sources unavailable",
    recipients: "Recipients and permissions unavailable",
    schedule: "Schedule and timezone unavailable",
    export: "Export format and policy unavailable",
    results: "Report results unavailable",
  },
  {
    id: "education-report",
    title: "Learning progress report",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local report concept for learning progress pending consent-aware learner data, aggregation rules, and access controls.",
    owner: "Report owner unavailable",
    metrics: "Metric definitions unavailable",
    sources: "Data sources unavailable",
    recipients: "Recipients and permissions unavailable",
    schedule: "Schedule and timezone unavailable",
    export: "Export format and policy unavailable",
    results: "Report results unavailable",
  },
];

const areas: ReportArea[] = ["All", "Platform", "Finance", "Education"];
const states: ReportState[] = ["All", "Draft", "Review", "Unavailable"];

export default function CustomReports() {
  const [area, setArea] = useState<ReportArea>("All");
  const [state, setState] = useState<ReportState>("All");
  const [selectedId, setSelectedId] = useState(reports[0].id);
  const [status, setStatus] = useState(
    "Reporting service unavailable. Showing local report concepts only."
  );

  const filtered = useMemo(
    () =>
      reports.filter(
        report =>
          (area === "All" || report.area === area) &&
          (state === "All" || report.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(report => report.id === selectedId) ??
    filtered[0] ??
    reports[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No report query, data source, metric, recipient, schedule, export, notification, or reporting result request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={FileBarChart2}
        title="Custom reports"
        subtitle="Review local report-template concepts without fabricated data sources, metrics, recipients, permissions, schedules, exports, or reporting results."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Reporting service unavailable.</strong> No report registry,
            source catalog, metric definition store, permission service,
            scheduler, export worker, or reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Reporting service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset reports
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Report preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review report concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show report structure only. They do
                  not represent real sources, metrics, recipients, permissions,
                  schedules, exports, notifications, or results.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Report area filter"
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
              aria-label="Report state filter"
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
              {filtered.map(report => (
                <button
                  aria-pressed={selected.id === report.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === report.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={report.id}
                  onClick={() => setSelectedId(report.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{report.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {report.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{report.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {report.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local report fixtures match these filters.
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
                Selected report
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Owner", selected.owner],
                  ["Metrics", selected.metrics],
                  ["Sources", selected.sources],
                  ["Recipients", selected.recipients],
                  ["Schedule", selected.schedule],
                  ["Export", selected.export],
                  ["Results", selected.results],
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
                No report owner, metric, data source, recipient, permission,
                schedule, export, or result state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Edit report")}
                  variant="outline"
                >
                  <Pencil className="mr-2 h-4 w-4" /> Edit unavailable
                </Button>
                <Button
                  onClick={() => blocked("Generate report")}
                  variant="outline"
                >
                  <FileBarChart2 className="mr-2 h-4 w-4" /> Generate
                  unavailable
                </Button>
                <Button
                  onClick={() => blocked("Share report")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Share unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Reporting requires source provenance, query safety, tenant
                  isolation, role-based access, privacy controls, freshness
                  semantics, export governance, scheduled-delivery safeguards,
                  accessibility, audit history, and clear unavailable states.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Source, metric, permission, schedule, export, recipient, and
                  result transitions must be auditable and isolated from
                  fabricated reporting results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <SlidersHorizontal className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No report query, source connection, permission change,
                  scheduled delivery, export, notification, or sharing operation
                  is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Report state remains explicitly unavailable until
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
