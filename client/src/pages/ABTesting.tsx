import { useMemo, useState } from "react";
import {
  BarChart3,
  CircleSlash2,
  FlaskConical,
  LockKeyhole,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TestState = "All" | "Draft" | "Review" | "Unavailable";
type TestArea = "All" | "Product" | "Community" | "Education";
type TestConcept = {
  id: string;
  title: string;
  area: Exclude<TestArea, "All">;
  state: Exclude<TestState, "All">;
  summary: string;
  audience: string;
  variants: string;
  metric: string;
  sample: string;
  confidence: string;
  rollout: string;
  privacy: string;
};
const concepts: TestConcept[] = [
  {
    id: "product-onboarding",
    title: "Product onboarding hypothesis",
    area: "Product",
    state: "Review",
    summary:
      "A local experiment-design concept pending a consent-aware audience definition, deterministic assignment, event instrumentation, and statistical review.",
    audience: "Audience unavailable",
    variants: "Variant definitions unavailable",
    metric: "Primary metric unavailable",
    sample: "Sample size unavailable",
    confidence: "Confidence result unavailable",
    rollout: "Rollout controls unavailable",
    privacy: "Privacy safeguards unavailable",
  },
  {
    id: "community-engagement",
    title: "Community engagement hypothesis",
    area: "Community",
    state: "Draft",
    summary:
      "A local community experiment concept pending privacy-aware telemetry, moderation guardrails, cohort eligibility, and rollback approval.",
    audience: "Audience unavailable",
    variants: "Variant definitions unavailable",
    metric: "Primary metric unavailable",
    sample: "Sample size unavailable",
    confidence: "Confidence result unavailable",
    rollout: "Rollout controls unavailable",
    privacy: "Privacy safeguards unavailable",
  },
  {
    id: "education-guidance",
    title: "Education guidance hypothesis",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local education experiment concept pending learner consent, institutional scope, assessment safeguards, and outcome methodology.",
    audience: "Audience unavailable",
    variants: "Variant definitions unavailable",
    metric: "Primary metric unavailable",
    sample: "Sample size unavailable",
    confidence: "Confidence result unavailable",
    rollout: "Rollout controls unavailable",
    privacy: "Privacy safeguards unavailable",
  },
];
const areas: TestArea[] = ["All", "Product", "Community", "Education"];
const states: TestState[] = ["All", "Draft", "Review", "Unavailable"];
export default function ABTesting() {
  const [area, setArea] = useState<TestArea>("All");
  const [state, setState] = useState<TestState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Experiment service unavailable. Showing local experiment concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No audience assignment, event telemetry, experiment result, confidence calculation, rollout, notification, or production decision was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Audience", selected.audience],
    ["Variants", selected.variants],
    ["Metric", selected.metric],
    ["Sample", selected.sample],
    ["Confidence", selected.confidence],
    ["Rollout", selected.rollout],
    ["Privacy", selected.privacy],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={FlaskConical}
        title="A/B testing"
        subtitle="Review local experiment concepts without fabricated audiences, variants, participants, conversions, lift, confidence, rollout, or production decisions."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Experiment service unavailable.</strong> No experiment
            registry, audience service, event telemetry, statistical engine,
            privacy control, or rollout service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Experiment service remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset experiments
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Experiment preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review experiment concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show experiment-design structure
                  only. They do not represent real participants, metrics,
                  results, confidence, rollout, or user segments.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Experiment area filter"
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
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
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
                Selected experiment
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
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
                No audience, variant, metric, sample, confidence, rollout, or
                privacy state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create experiment")}
                  variant="outline"
                >
                  <FlaskConical className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Launch experiment")}
                  variant="outline"
                >
                  <Play className="mr-2 h-4 w-4" /> Launch unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Experiment tooling requires pre-registration, consent,
                  deterministic assignment, metric definitions, privacy-aware
                  event collection, statistical review, guardrails, rollback
                  controls, least privilege, and auditable approvals.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Audience, variant, metric, result, rollout, and notification
                  transitions must be auditable and isolated from fabricated
                  experimentation outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No participant assignment, telemetry collection, result
                  calculation, rollout, notification, or experiment mutation is
                  available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
