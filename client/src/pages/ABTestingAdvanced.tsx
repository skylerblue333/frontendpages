import { useMemo, useState } from "react";
import {
  CircleSlash2,
  FlaskConical,
  LockKeyhole,
  Network,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type DesignArea = "All" | "Journey" | "Guardrails" | "Personalization";
type DesignState = "All" | "Design" | "Review" | "Unavailable";
type DesignConcept = {
  id: string;
  title: string;
  area: Exclude<DesignArea, "All">;
  state: Exclude<DesignState, "All">;
  summary: string;
  segmentation: string;
  assignment: string;
  metric: string;
  guardrail: string;
  rollout: string;
  privacy: string;
};
const concepts: DesignConcept[] = [
  {
    id: "journey-design",
    title: "Journey segmentation design",
    area: "Journey",
    state: "Design",
    summary:
      "A local advanced-test concept pending consent-aware segmentation, deterministic assignment, event instrumentation, and review approval.",
    segmentation: "Segmentation unavailable",
    assignment: "Assignment method unavailable",
    metric: "Metric definition unavailable",
    guardrail: "Guardrail unavailable",
    rollout: "Rollout controls unavailable",
    privacy: "Privacy safeguards unavailable",
  },
  {
    id: "guardrail-design",
    title: "Guardrail metric design",
    area: "Guardrails",
    state: "Review",
    summary:
      "A local guardrail concept pending statistical methodology, safety thresholds, rollback authority, and privacy-aware telemetry.",
    segmentation: "Segmentation unavailable",
    assignment: "Assignment method unavailable",
    metric: "Metric definition unavailable",
    guardrail: "Guardrail unavailable",
    rollout: "Rollout controls unavailable",
    privacy: "Privacy safeguards unavailable",
  },
  {
    id: "personalization-design",
    title: "Personalization design",
    area: "Personalization",
    state: "Unavailable",
    summary:
      "A local personalization concept pending lawful profiling controls, identity boundaries, consent, and accountable deployment review.",
    segmentation: "Segmentation unavailable",
    assignment: "Assignment method unavailable",
    metric: "Metric definition unavailable",
    guardrail: "Guardrail unavailable",
    rollout: "Rollout controls unavailable",
    privacy: "Privacy safeguards unavailable",
  },
];
const areas: DesignArea[] = ["All", "Journey", "Guardrails", "Personalization"];
const states: DesignState[] = ["All", "Design", "Review", "Unavailable"];
export default function ABTestingAdvanced() {
  const [area, setArea] = useState<DesignArea>("All");
  const [state, setState] = useState<DesignState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Advanced experiment service unavailable. Showing local design concepts only."
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
      `${action} is unavailable locally. No segment, assignment, event telemetry, analysis, guardrail evaluation, rollout, notification, or deployment request was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Segmentation", selected.segmentation],
    ["Assignment", selected.assignment],
    ["Metric", selected.metric],
    ["Guardrail", selected.guardrail],
    ["Rollout", selected.rollout],
    ["Privacy", selected.privacy],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={FlaskConical}
        title="Advanced A/B testing"
        subtitle="Review local advanced experiment concepts without fabricated segments, assignments, telemetry, metrics, guardrails, rollouts, profiles, or deployment decisions."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Advanced experiment service unavailable.</strong> No
            segmentation service, assignment engine, event telemetry,
            statistical analysis, guardrail system, privacy control, or rollout
            service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Advanced experiment service remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset designs
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Advanced preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review advanced designs
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show advanced experiment structure
                  only. They do not represent real profiles, segments,
                  participants, metrics, guardrails, rollouts, or deployment
                  state.
                </p>
              </div>
              <Network className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Advanced experiment area filter"
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
              aria-label="Advanced experiment state filter"
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
                Selected design
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
                No segmentation, assignment, metric, guardrail, rollout, or
                privacy state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create advanced experiment")}
                  variant="outline"
                >
                  <FlaskConical className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Run advanced experiment")}
                  variant="outline"
                >
                  <Play className="mr-2 h-4 w-4" /> Run unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Advanced experimentation requires consent and privacy
                  controls, lawful segmentation, deterministic assignment,
                  metric definitions, guardrails, statistical review, rollback,
                  least privilege, and auditable approvals.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Segment, assignment, metric, guardrail, rollout, and
                  deployment transitions must be auditable and isolated from
                  fabricated advanced-testing outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No profiling, participant assignment, telemetry, analysis,
                  guardrail evaluation, rollout, notification, or deployment
                  operation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
