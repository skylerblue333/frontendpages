import { useState } from "react";
import {
  Activity,
  CircleSlash2,
  LockKeyhole,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AnomalyState = "All" | "Review" | "Unavailable" | "Planned";
type AnomalyConcept = {
  title: string;
  state: Exclude<AnomalyState, "All">;
  summary: string;
  source: string;
  score: string;
  confidence: string;
  identity: string;
  incident: string;
  remediation: string;
};
const concepts: AnomalyConcept[] = [
  {
    title: "Core activity signal",
    state: "Review",
    summary:
      "Local anomaly-review concept pending verified source provenance, model semantics, baseline windows, false-positive handling, and human review.",
    source: "Signal source unavailable",
    score: "Anomaly score unavailable",
    confidence: "Confidence unavailable",
    identity: "Identity boundary unavailable",
    incident: "Incident linkage unavailable",
    remediation: "Remediation state unavailable",
  },
  {
    title: "Financial risk signal",
    state: "Unavailable",
    summary:
      "Local financial anomaly concept pending sensitive-event authorization, deterministic baselines, privacy controls, and auditable remediation.",
    source: "Signal source unavailable",
    score: "Anomaly score unavailable",
    confidence: "Confidence unavailable",
    identity: "Identity boundary unavailable",
    incident: "Incident linkage unavailable",
    remediation: "Remediation state unavailable",
  },
  {
    title: "Education access signal",
    state: "Planned",
    summary:
      "Local education anomaly concept pending learner-safe detection, identity minimization, incident review, and false-positive safeguards.",
    source: "Signal source unavailable",
    score: "Anomaly score unavailable",
    confidence: "Confidence unavailable",
    identity: "Identity boundary unavailable",
    incident: "Incident linkage unavailable",
    remediation: "Remediation state unavailable",
  },
];
export default function AnomalyDetection() {
  const [state, setState] = useState<AnomalyState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Anomaly service unavailable. Showing local signal concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No signal, score, confidence, identity, incident, alert, remediation, query, report, or operational change was started.`
    );
  return (
    <div data-ui-polish="batch-181" className="min-h-screen bg-background">
      <PageHeader
        icon={Activity}
        title="Anomaly detection"
        subtitle="Review local anomaly-signal concepts without fabricated scores, confidence, identities, incidents, alerts, remediation, or detection results."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Anomaly service unavailable.</strong> No signal source,
          detection model, baseline, score semantics, identity boundary,
          incident workflow, or remediation contract is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Anomaly preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review anomaly signals
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show signal structure only; they do not
              represent real events, scores, probabilities, baselines,
              incidents, or remediation outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Unavailable", "Planned"] as AnomalyState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
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
                Selected signal
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Source", selected.source],
                    ["Score", selected.score],
                    ["Confidence", selected.confidence],
                    ["Identity", selected.identity],
                    ["Incident", selected.incident],
                    ["Remediation", selected.remediation],
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
                  onClick={() => blocked("Investigate anomaly")}
                  variant="outline"
                >
                  <Search className="mr-2 h-4 w-4" /> Investigate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Remediate anomaly")}
                  variant="outline"
                >
                  <Wrench className="mr-2 h-4 w-4" /> Remediate unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Anomaly detection requires verified source provenance, model
                  semantics, baseline windows, false-positive handling, privacy
                  controls, access policy, human review, incident linkage, and
                  auditable remediation.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No anomaly signal, score, confidence, identity, incident,
                  alert, remediation, query, or operational change is available
                  from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No anomaly count, severity, probability, baseline, detection
                  result, incident, or remediation outcome is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
