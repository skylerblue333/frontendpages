import { useMemo, useState } from "react";
import {
  Beaker,
  CircleSlash2,
  Download,
  FlaskConical,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ExperimentObjective = "All" | "Activation" | "Retention" | "Education";
type ExperimentState = "All" | "Draft" | "Review" | "Unavailable";

type OptimizationExperiment = {
  id: string;
  title: string;
  objective: Exclude<ExperimentObjective, "All">;
  state: Exclude<ExperimentState, "All">;
  summary: string;
  hypothesis: string;
  variants: string;
  audience: string;
  sample: string;
  lift: string;
  revenue: string;
  recommendation: string;
};

const experiments: OptimizationExperiment[] = [
  {
    id: "activation-test",
    title: "Activation journey test",
    objective: "Activation",
    state: "Review",
    summary:
      "A local experiment concept for onboarding activation pending assignment integrity, guardrails, and sample-size review.",
    hypothesis: "Hypothesis unavailable",
    variants: "Variant definitions unavailable",
    audience: "Audience assignment unavailable",
    sample: "Sample size unavailable",
    lift: "Conversion lift unavailable",
    revenue: "Revenue impact unavailable",
    recommendation: "Recommendation unavailable",
  },
  {
    id: "retention-test",
    title: "Retention journey test",
    objective: "Retention",
    state: "Draft",
    summary:
      "A draft experiment concept for retention messaging pending consent, cohort definitions, and statistical methodology.",
    hypothesis: "Hypothesis unavailable",
    variants: "Variant definitions unavailable",
    audience: "Audience assignment unavailable",
    sample: "Sample size unavailable",
    lift: "Conversion lift unavailable",
    revenue: "Revenue impact unavailable",
    recommendation: "Recommendation unavailable",
  },
  {
    id: "education-test",
    title: "Education completion test",
    objective: "Education",
    state: "Unavailable",
    summary:
      "A local experiment concept for learning completion pending curriculum ownership, safeguards, and validated outcome events.",
    hypothesis: "Hypothesis unavailable",
    variants: "Variant definitions unavailable",
    audience: "Audience assignment unavailable",
    sample: "Sample size unavailable",
    lift: "Conversion lift unavailable",
    revenue: "Revenue impact unavailable",
    recommendation: "Recommendation unavailable",
  },
];

const objectives: ExperimentObjective[] = [
  "All",
  "Activation",
  "Retention",
  "Education",
];
const states: ExperimentState[] = ["All", "Review", "Draft", "Unavailable"];

export default function ConversionOptimization() {
  const [objective, setObjective] = useState<ExperimentObjective>("All");
  const [state, setState] = useState<ExperimentState>("All");
  const [selectedId, setSelectedId] = useState(experiments[0].id);
  const [status, setStatus] = useState(
    "Experiment service unavailable. Showing local optimization concepts only."
  );

  const filtered = useMemo(
    () =>
      experiments.filter(
        experiment =>
          (objective === "All" || experiment.objective === objective) &&
          (state === "All" || experiment.state === state)
      ),
    [objective, state]
  );
  const selected =
    filtered.find(experiment => experiment.id === selectedId) ??
    filtered[0] ??
    experiments[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No experiment assignment, audience, event, conversion, revenue, export, or optimization request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Beaker}
        title="Conversion optimization"
        subtitle="Review local experiment concepts without fabricated variants, audiences, lift, revenue, attribution, recommendations, or live performance data."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Experiment service unavailable.</strong> No assignment
            service, consent registry, event pipeline, cohort store, statistical
            engine, revenue source, or reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Experiment service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset experiments
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Experiment preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review optimization concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show experiment structure only.
                  They do not represent real variants, assignments, audiences,
                  outcomes, lift, revenue, or recommendations.
                </p>
              </div>
              <FlaskConical className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Experiment objective filter"
            >
              {objectives.map(item => (
                <Button
                  aria-pressed={objective === item}
                  key={item}
                  onClick={() => setObjective(item)}
                  size="sm"
                  variant={objective === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Experiment state filter"
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
              {filtered.map(experiment => (
                <button
                  aria-pressed={selected.id === experiment.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === experiment.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={experiment.id}
                  onClick={() => setSelectedId(experiment.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{experiment.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {experiment.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {experiment.objective}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {experiment.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local experiment fixtures match these filters.
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
                Selected experiment
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.objective} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Hypothesis", selected.hypothesis],
                  ["Variants", selected.variants],
                  ["Audience", selected.audience],
                  ["Sample", selected.sample],
                  ["Lift", selected.lift],
                  ["Revenue", selected.revenue],
                  ["Recommendation", selected.recommendation],
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
                No hypothesis, variant, audience, sample, lift, revenue,
                attribution, guardrail, or recommendation state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh experiment")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Launch experiment")}
                  variant="outline"
                >
                  <Target className="mr-2 h-4 w-4" /> Launch unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export experiment")}
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Optimization requires hypothesis definition, consent-aware
                  assignment, randomization integrity, sample-size discipline,
                  guardrails, statistical methodology, privacy, rollback, and
                  provenance.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Assignment, conversion, revenue, rollback, and recommendation
                  transitions must be auditable and isolated from fabricated
                  experiment results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <SlidersHorizontal className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No audience assignment, event ingestion, cohort calculation,
                  revenue import, rollback, or recommendation operation is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Experiment state remains explicitly unavailable until
                  authoritative optimization services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
