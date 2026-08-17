import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarClock,
  CircleSlash2,
  FileText,
  Info,
  LockKeyhole,
  Plus,
  RotateCcw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ReportState = "Review" | "Planned" | "Unavailable";
type ReportFixture = {
  id: string;
  title: string;
  description: string;
  state: ReportState;
  source: string;
  freshness: string;
  recipients: string;
  schedule: string;
};
const reports: ReportFixture[] = [
  {
    id: "content",
    title: "Content performance",
    description:
      "A local report concept for reviewing content metrics after a verified source is connected.",
    state: "Review",
    source: "Source unavailable",
    freshness: "Unknown",
    recipients: "No recipients",
    schedule: "Not scheduled",
  },
  {
    id: "growth",
    title: "Ecosystem growth",
    description:
      "A local report concept for comparing growth signals without user or conversion claims.",
    state: "Planned",
    source: "Event schema pending",
    freshness: "Unknown",
    recipients: "No recipients",
    schedule: "Not scheduled",
  },
  {
    id: "finance",
    title: "Financial activity",
    description:
      "A restricted report concept requiring verified ledger, access, privacy, and reconciliation controls.",
    state: "Unavailable",
    source: "Ledger unavailable",
    freshness: "Unknown",
    recipients: "No recipients",
    schedule: "Not scheduled",
  },
];
const states: Array<"All" | ReportState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];

export default function AnalyticsReports() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(reports[0].id);
  const [status, setStatus] = useState(
    "Reports unavailable. Showing local report fixtures only."
  );
  const filtered = useMemo(
    () =>
      reports.filter(
        report =>
          (stateFilter === "All" || report.state === stateFilter) &&
          `${report.title} ${report.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected =
    reports.find(report => report.id === selectedId) ?? reports[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(reports[0].id);
    setStatus(
      "Reports preview reset locally. No source, report, query, export, recipient, schedule, or delivery state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No source, report, identity, query, export, recipient, schedule, notification, or delivery request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/10 text-blue-200">
              <BarChart3 aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Analytics reports
                </h1>
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review report concepts without fabricated metrics, sources,
                recipients, schedules, exports, identities, or business
                conclusions.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset analytics reports preview"
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
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Reporting unavailable.
              </strong>{" "}
              No verified metric source, event schema, user identity context,
              report store, recipient directory, scheduler, export service, or
              delivery channel is connected. The reports below are local
              fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_330px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="relative block flex-1">
                  <span className="sr-only">Search local report fixtures</span>
                  <Search
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  />
                  <Input
                    className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search report fixtures"
                    value={query}
                  />
                </label>
                <Button
                  className="border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => blocked("New report")}
                  variant="outline"
                >
                  <Plus aria-hidden="true" className="mr-2 h-4 w-4" />
                  New unavailable
                </Button>
              </div>
              <div
                aria-label="Filter report state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(state => (
                  <Button
                    aria-pressed={stateFilter === state}
                    className={
                      stateFilter === state
                        ? "bg-blue-500 text-white hover:bg-blue-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={state}
                    onClick={() => {
                      setStateFilter(state);
                      setStatus(`${state} report fixtures selected locally.`);
                    }}
                    size="sm"
                    variant={stateFilter === state ? "default" : "outline"}
                  >
                    {state}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <FileText
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching report fixtures
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(report => (
                  <button
                    aria-pressed={report.id === selectedId}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${report.id === selectedId ? "border-blue-400/35 bg-blue-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={report.id}
                    onClick={() => {
                      setSelectedId(report.id);
                      setStatus(
                        `${report.title} selected for local report review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-blue-200">
                          <FileText aria-hidden="true" className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-200">
                            {report.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {report.description}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                        {report.state}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected report
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-blue-200">{selected.state}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Source</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.source}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Freshness</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.freshness}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Recipients</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.recipients}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Schedule</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.schedule}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No report values, user counts, conversions, revenue, audience,
                delivery, or business conclusion is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Export")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Export unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Schedule")}
                  size="sm"
                  variant="outline"
                >
                  <CalendarClock aria-hidden="true" className="mr-2 h-4 w-4" />
                  Schedule unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Recipient delivery")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Send unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Report boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No report store, source, identity, recipient, scheduler,
                    file export, notification, or delivery operation is
                    available. Local filter and selection state is the only
                    mutable state.
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
                    Trust posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    A production report requires verified provenance, metric
                    definitions, access policy, privacy controls, retention,
                    freshness, recipients, consent, and auditable delivery.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
