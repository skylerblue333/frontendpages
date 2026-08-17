import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  Filter,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Cohort = {
  id: string;
  title: string;
  lifecycle: string;
  state: State;
  description: string;
  identity: string;
  membership: string;
  count: string;
  dates: string;
  retention: string;
};
const cohorts: Cohort[] = [
  {
    id: "onboarding",
    title: "Onboarding cohort",
    lifecycle: "Activation",
    state: "Review",
    description:
      "A local cohort concept pending consent-aware events and verified membership rules.",
    identity: "Identity unavailable",
    membership: "Membership unavailable",
    count: "Count unavailable",
    dates: "Dates unavailable",
    retention: "Retention unavailable",
  },
  {
    id: "learning",
    title: "Learning cohort",
    lifecycle: "Engagement",
    state: "Planned",
    description:
      "An education cohort concept requiring course context, privacy controls, and time-window semantics.",
    identity: "Identity unavailable",
    membership: "Membership unavailable",
    count: "Count unavailable",
    dates: "Dates unavailable",
    retention: "Retention unavailable",
  },
  {
    id: "returning",
    title: "Returning cohort",
    lifecycle: "Retention",
    state: "Unavailable",
    description:
      "A restricted cohort concept requiring verified events and aggregation safeguards.",
    identity: "Identity unavailable",
    membership: "Membership unavailable",
    count: "Count unavailable",
    dates: "Dates unavailable",
    retention: "Retention unavailable",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const lifecycles = [
  "All",
  ...Array.from(new Set(cohorts.map(cohort => cohort.lifecycle))),
];
export default function CohortAnalysis() {
  const [lifecycle, setLifecycle] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(cohorts[0].id);
  const [status, setStatus] = useState(
    "Cohort analysis unavailable. Showing local fixtures only."
  );
  const filtered = useMemo(
    () =>
      cohorts.filter(
        cohort =>
          (lifecycle === "All" || cohort.lifecycle === lifecycle) &&
          (state === "All" || cohort.state === state)
      ),
    [lifecycle, state]
  );
  const selected =
    cohorts.find(cohort => cohort.id === selectedId) ?? cohorts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No identity, membership, count, date, retention, conversion, revenue, or analytics request was started.`
    );
  const reset = () => {
    setLifecycle("All");
    setState("All");
    setSelectedId(cohorts[0].id);
    setStatus(
      "Cohort preview reset locally. No identity, membership, count, retention, or reporting state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-400/10 text-sky-200">
              <BarChart3 aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Cohort analysis
                </h1>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2 py-1 text-xs text-sky-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review cohort concepts without fabricated identities,
                memberships, counts, dates, retention, conversions, revenue, or
                analytics conclusions.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <strong className="text-amber-100">
            Cohort analysis unavailable.
          </strong>{" "}
          No verified identity events, membership rules, aggregation store,
          time-window service, or analytics source is connected. These are local
          fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Filter className="h-4 w-4" />
              Filter cohort fixtures
            </div>
            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label="Lifecycle filter"
            >
              {lifecycles.map(item => (
                <Button
                  aria-pressed={lifecycle === item}
                  key={item}
                  onClick={() => setLifecycle(item)}
                  size="sm"
                  variant={lifecycle === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Cohort state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant="outline"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(cohort => (
                <button
                  aria-pressed={selectedId === cohort.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === cohort.id ? "border-sky-400/35 bg-sky-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={cohort.id}
                  onClick={() => setSelectedId(cohort.id)}
                  type="button"
                >
                  <p className="font-medium">{cohort.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {cohort.lifecycle} · {cohort.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {cohort.description}
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected cohort
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-sky-200">
                {selected.lifecycle} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Identity", selected.identity],
                  ["Membership", selected.membership],
                  ["Count", selected.count],
                  ["Dates", selected.dates],
                  ["Retention", selected.retention],
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
                No cohort membership, count, date, retention, conversion,
                revenue, or report state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Calculate")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Calculate unavailable
                </Button>
                <Button onClick={() => blocked("Export")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Export unavailable
                </Button>
                <Button onClick={() => blocked("Create")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No identity, membership, count, retention, conversion,
                  revenue, or reporting operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production cohort analysis requires consent, privacy
                  minimization, verified events, aggregation controls, time
                  semantics, retention, and auditable reporting.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
