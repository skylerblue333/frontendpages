import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  FlaskConical,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ExperimentState = "Draft" | "Review" | "Unavailable";
type Experiment = {
  id: string;
  title: string;
  state: ExperimentState;
  hypothesis: string;
  variants: string[];
  boundary: string;
};
const experiments: Experiment[] = [
  {
    id: "onboarding",
    title: "Onboarding clarity",
    state: "Draft",
    hypothesis:
      "Compare two local copy concepts for a clearer first-run experience.",
    variants: ["Control copy", "Plain-language copy"],
    boundary:
      "No users, assignments, events, conversion data, confidence, or rollout decision is connected.",
  },
  {
    id: "dashboard",
    title: "Dashboard navigation",
    state: "Review",
    hypothesis:
      "Review a local information-architecture hypothesis before any product exposure.",
    variants: ["Current navigation", "Grouped navigation"],
    boundary:
      "No telemetry, cohort, consent, analyst review, guardrail, or deployment channel is available.",
  },
  {
    id: "recommendations",
    title: "Recommendation surface",
    state: "Unavailable",
    hypothesis:
      "A restricted concept pending metric definitions and privacy review.",
    variants: ["Baseline", "Alternative surface"],
    boundary:
      "No profile, model output, treatment assignment, metric, revenue, or production recommendation is available.",
  },
];
const states: Array<"All" | ExperimentState> = [
  "All",
  "Draft",
  "Review",
  "Unavailable",
];

export default function ExperimentFactory() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(experiments[0].id);
  const [status, setStatus] = useState(
    "Experiment service unavailable. Showing local planning fixtures only."
  );
  const filtered = useMemo(
    () =>
      experiments.filter(
        experiment =>
          (stateFilter === "All" || experiment.state === stateFilter) &&
          `${experiment.title} ${experiment.hypothesis}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected =
    experiments.find(experiment => experiment.id === selectedId) ??
    experiments[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(experiments[0].id);
    setStatus(
      "Experiment preview reset locally. No user, assignment, telemetry, metric, rollout, or production state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No assignment, event, analysis, rollout, or deployment request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <FlaskConical aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Experiment factory
                </h1>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review experiment hypotheses without assigning users, collecting
                telemetry, calculating results, or rolling out product changes.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset experiment factory preview"
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
                Experiment service unavailable.
              </strong>{" "}
              No assignment system, event telemetry, metric store, statistical
              analysis, rollout channel, production decision, or revenue data is
              connected. The records below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">
                  Search local experiment fixtures
                </span>
                <FlaskConical
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search experiment fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter experiment state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-emerald-500 text-white hover:bg-emerald-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(`${option} experiment state selected locally.`);
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <FlaskConical
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local experiments
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(experiment => (
                  <button
                    aria-pressed={experiment.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${experiment.id === selectedId ? "border-emerald-400/35 bg-emerald-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={experiment.id}
                    onClick={() => {
                      setSelectedId(experiment.id);
                      setStatus(
                        `${experiment.title} selected for local experiment review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-emerald-200">
                      <BarChart3 aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {experiment.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {experiment.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {experiment.hypothesis}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {experiment.variants.length} local variants · assignment
                        unavailable
                      </p>
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
                Selected experiment
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Hypothesis
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.hypothesis}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                  Local variants
                </p>
                <div className="mt-2 space-y-2">
                  {selected.variants.map(variant => (
                    <div
                      className="flex items-center gap-2 text-sm text-slate-300"
                      key={variant}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {variant}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Telemetry, lift, confidence, sample size, and recommendation
                  are unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Run experiment")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Run unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Assignment boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No user, cohort, event, cookie, device, profile, metric,
                    message, rollout, or deployment operation is available.
                    Future experimentation requires consent, privacy,
                    deterministic assignment, guardrails, review, rollback, and
                    auditability.
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
                    Measurement posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Success rate, confidence, sample size, conversion, revenue,
                    lift, recommendation, and rollout status are unavailable
                    rather than estimated.
                  </p>
                </div>
              </div>
              <Sparkles
                aria-hidden="true"
                className="mt-5 h-5 w-5 text-slate-600"
              />
              <Users
                aria-hidden="true"
                className="ml-2 inline h-5 w-5 text-slate-600"
              />
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
