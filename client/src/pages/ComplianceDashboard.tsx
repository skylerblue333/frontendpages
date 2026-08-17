import { useMemo, useState } from "react";
import {
  BarChart3,
  FileOutput,
  LockKeyhole,
  RefreshCw,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ProgramDomain =
  "All" | "Governance" | "Privacy" | "Security" | "Operations";
type ProgramState = "All" | "Planned" | "Review" | "Unavailable";

type ComplianceProgram = {
  id: string;
  name: string;
  domain: Exclude<ProgramDomain, "All">;
  state: Exclude<ProgramState, "All">;
  summary: string;
  scope: string;
  coverage: string;
  evidence: string;
  owner: string;
  lastReview: string;
};

const programs: ComplianceProgram[] = [
  {
    id: "governance-program",
    name: "Governance program",
    domain: "Governance",
    state: "Review",
    summary:
      "Proposed summary area for policies, accountability, approvals, and control ownership.",
    scope: "Scope unavailable",
    coverage: "Coverage unavailable",
    evidence: "Evidence freshness unavailable",
    owner: "Program owner unavailable",
    lastReview: "Last review unavailable",
  },
  {
    id: "privacy-program",
    name: "Privacy program",
    domain: "Privacy",
    state: "Planned",
    summary:
      "Planned summary area for data inventory, retention, consent, and privacy-request operations.",
    scope: "Scope unavailable",
    coverage: "Coverage unavailable",
    evidence: "Evidence freshness unavailable",
    owner: "Program owner unavailable",
    lastReview: "Last review unavailable",
  },
  {
    id: "security-program",
    name: "Security program",
    domain: "Security",
    state: "Unavailable",
    summary:
      "Local concept for security controls, incident response, and monitoring ownership.",
    scope: "Scope unavailable",
    coverage: "Coverage unavailable",
    evidence: "Evidence freshness unavailable",
    owner: "Program owner unavailable",
    lastReview: "Last review unavailable",
  },
];

const domains: ProgramDomain[] = [
  "All",
  "Governance",
  "Privacy",
  "Security",
  "Operations",
];
const states: ProgramState[] = ["All", "Review", "Planned", "Unavailable"];

export default function ComplianceDashboard() {
  const [domain, setDomain] = useState<ProgramDomain>("All");
  const [state, setState] = useState<ProgramState>("All");
  const [selectedId, setSelectedId] = useState(programs[0].id);
  const [status, setStatus] = useState(
    "Compliance data unavailable. Showing local program concepts only."
  );

  const filtered = useMemo(
    () =>
      programs.filter(
        program =>
          (domain === "All" || program.domain === domain) &&
          (state === "All" || program.state === state)
      ),
    [domain, state]
  );
  const selected =
    filtered.find(program => program.id === selectedId) ??
    filtered[0] ??
    programs[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No compliance calculation, audit, evidence, certification, notification, or export request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="Compliance dashboard"
        subtitle="Review local compliance program concepts without fabricated scores, coverage, or audit outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Compliance data unavailable.</strong> No framework scope,
            evidence registry, reviewer identity, calculation service, or
            reporting source is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Compliance data remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset dashboard
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Program summary preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Compliance programs
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show dashboard structure only. No
                  score, percentage, risk level, certification, or regulatory
                  status is calculated.
                </p>
              </div>
              <BarChart3 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Compliance program domain filter"
            >
              {domains.map(item => (
                <Button
                  aria-pressed={domain === item}
                  key={item}
                  onClick={() => setDomain(item)}
                  size="sm"
                  variant={domain === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Compliance program state filter"
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
              {filtered.map(program => (
                <button
                  aria-pressed={selected.id === program.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === program.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={program.id}
                  onClick={() => setSelectedId(program.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{program.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {program.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{program.domain}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {program.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local program fixtures match these filters.
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
                Selected program
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.domain} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Scope", selected.scope],
                  ["Coverage", selected.coverage],
                  ["Evidence", selected.evidence],
                  ["Owner", selected.owner],
                  ["Last review", selected.lastReview],
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
                No score, percentage, risk level, audit outcome, certification,
                evidence freshness, or regulatory status is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh dashboard")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export report")}
                  variant="outline"
                >
                  <FileOutput className="mr-2 h-4 w-4" /> Report unavailable
                </Button>
                <Button
                  onClick={() => blocked("Configure dashboard")}
                  variant="outline"
                >
                  <Settings2 className="mr-2 h-4 w-4" /> Configure unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Dashboard metrics require a defined framework, scope,
                  calculation rules, evidence provenance, reviewer
                  authorization, and data freshness.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  This preview does not certify compliance, replace counsel, or
                  produce an audit result.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
