import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  CircleSlash2,
  Crosshair,
  FileWarning,
  LockKeyhole,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type SignalState = "Review" | "Planned" | "Unavailable";
type AnomalyFixture = {
  id: string;
  title: string;
  category: string;
  state: SignalState;
  description: string;
  source: string;
  score: string;
  confidence: string;
  identity: string;
};
const signals: AnomalyFixture[] = [
  {
    id: "behavior",
    title: "Behavioral deviation",
    category: "Product",
    state: "Review",
    description:
      "A local signal concept for reviewing unusual behavior after a verified baseline and event source are available.",
    source: "Event source unavailable",
    score: "Score undefined",
    confidence: "Confidence undefined",
    identity: "Identity not collected",
  },
  {
    id: "security",
    title: "Security anomaly",
    category: "Security",
    state: "Unavailable",
    description:
      "A restricted signal concept pending detection provenance, privacy controls, and human triage.",
    source: "Detector unavailable",
    score: "Score undefined",
    confidence: "Confidence undefined",
    identity: "Identity not collected",
  },
  {
    id: "finance",
    title: "Financial outlier",
    category: "Finance",
    state: "Planned",
    description:
      "A local concept requiring verified ledger events, baseline semantics, and reconciliation before review.",
    source: "Ledger unavailable",
    score: "Score undefined",
    confidence: "Confidence undefined",
    identity: "Identity not collected",
  },
];
const states: Array<"All" | SignalState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const categories = [
  "All",
  ...Array.from(new Set(signals.map(signal => signal.category))),
];

export default function AnomalyDetection() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(signals[0].id);
  const [status, setStatus] = useState(
    "Anomaly detection unavailable. Showing local signal fixtures only."
  );
  const filtered = useMemo(
    () =>
      signals.filter(
        signal =>
          (stateFilter === "All" || signal.state === stateFilter) &&
          (categoryFilter === "All" || signal.category === categoryFilter) &&
          `${signal.title} ${signal.category} ${signal.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [categoryFilter, query, stateFilter]
  );
  const selected =
    signals.find(signal => signal.id === selectedId) ?? signals[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setCategoryFilter("All");
    setSelectedId(signals[0].id);
    setStatus(
      "Anomaly preview reset locally. No signal, score, source, identity, incident, investigation, or remediation state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No signal, score, source, identity, incident, query, alert, or operational remediation request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-400/10 text-rose-200">
              <Crosshair aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Anomaly detection
                </h1>
                <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2.5 py-1 text-xs font-medium text-rose-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review anomaly-signal concepts without fabricated scores,
                confidence, identities, incidents, remediation, or operational
                claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset anomaly detection preview"
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
                Anomaly detection unavailable.
              </strong>{" "}
              No event source, baseline, detection model, score registry,
              identity context, incident system, or remediation control is
              connected. The signals below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
              <label className="relative block">
                <span className="sr-only">
                  Search local anomaly signal fixtures
                </span>
                <Search
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search signal fixtures"
                  value={query}
                />
              </label>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter anomaly category"
              >
                {categories.map(category => (
                  <Button
                    aria-pressed={categoryFilter === category}
                    className={
                      categoryFilter === category
                        ? "bg-rose-500 text-white hover:bg-rose-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={category}
                    onClick={() => {
                      setCategoryFilter(category);
                      setStatus(
                        `${category} anomaly category selected locally.`
                      );
                    }}
                    size="sm"
                    variant={
                      categoryFilter === category ? "default" : "outline"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter anomaly signal state"
              >
                {states.map(state => (
                  <Button
                    aria-pressed={stateFilter === state}
                    className={
                      stateFilter === state
                        ? "border-rose-400/50 bg-rose-400/10 text-rose-100"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={state}
                    onClick={() => {
                      setStateFilter(state);
                      setStatus(`${state} anomaly state selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {state}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <FileWarning
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching anomaly fixtures
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another category, state, or search term.
                  </p>
                </div>
              ) : (
                filtered.map(signal => (
                  <button
                    aria-pressed={selectedId === signal.id}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selectedId === signal.id ? "border-rose-400/35 bg-rose-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={signal.id}
                    onClick={() => {
                      setSelectedId(signal.id);
                      setStatus(
                        `${signal.title} selected for local anomaly review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-rose-200">
                        <Activity aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-medium text-slate-200">
                              {signal.title}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {signal.category}
                            </p>
                          </div>
                          <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                            {signal.state}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {signal.description}
                        </p>
                      </div>
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
                Selected signal
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-rose-200">
                {selected.category} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Source</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.source}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Score</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.score}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Confidence</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.confidence}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Identity</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.identity}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No anomaly result, severity, baseline, user, incident,
                investigation, or remediation outcome is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Investigate")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Investigate unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Remediate")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Remediate unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Create signal")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Create unavailable
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
                    Data boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No source, baseline, model, identity, incident, query,
                    alert, or operational remediation operation is available.
                    Filters and selection are local only.
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
                    Review posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Production anomaly review requires source provenance,
                    baseline windows, model semantics, false-positive handling,
                    privacy, human review, incident linkage, and auditable
                    remediation.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
