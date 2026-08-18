import { useMemo, useState } from "react";
import {
  Archive,
  CircleSlash2,
  FileClock,
  LockKeyhole,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type RetentionArea = "All" | "Account" | "Financial" | "Education";
type RetentionState = "All" | "Review" | "Unavailable" | "Controlled";
type RetentionConcept = {
  id: string;
  title: string;
  area: Exclude<RetentionArea, "All">;
  state: Exclude<RetentionState, "All">;
  summary: string;
  scope: string;
  period: string;
  legalBasis: string;
  dependency: string;
  execution: string;
  exception: string;
  audit: string;
};

const concepts: RetentionConcept[] = [
  {
    id: "account-retention",
    title: "Account record retention",
    area: "Account",
    state: "Review",
    summary:
      "A local account-retention concept pending inventory mapping, policy ownership, deletion dependencies, and verifiable execution.",
    scope: "Data scope unavailable",
    period: "Retention period unavailable",
    legalBasis: "Legal requirement unavailable",
    dependency: "Deletion dependencies unavailable",
    execution: "Execution status unavailable",
    exception: "Exception and legal hold unavailable",
    audit: "Retention audit unavailable",
  },
  {
    id: "financial-retention",
    title: "Financial record retention",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial-retention concept pending authoritative records, jurisdiction-aware requirements, legal holds, and recovery safeguards.",
    scope: "Financial scope unavailable",
    period: "Retention period unavailable",
    legalBasis: "Legal requirement unavailable",
    dependency: "Deletion dependencies unavailable",
    execution: "Execution status unavailable",
    exception: "Exception and legal hold unavailable",
    audit: "Retention audit unavailable",
  },
  {
    id: "education-retention",
    title: "Education record retention",
    area: "Education",
    state: "Controlled",
    summary:
      "A local education-retention concept pending institutional ownership, learner scope, deletion dependencies, and evidence of policy execution.",
    scope: "Learner scope unavailable",
    period: "Retention period unavailable",
    legalBasis: "Institutional requirement unavailable",
    dependency: "Deletion dependencies unavailable",
    execution: "Execution status unavailable",
    exception: "Exception and legal hold unavailable",
    audit: "Retention audit unavailable",
  },
];
const areas: RetentionArea[] = ["All", "Account", "Financial", "Education"];
const states: RetentionState[] = ["All", "Review", "Unavailable", "Controlled"];

export default function DataRetention() {
  const [area, setArea] = useState<RetentionArea>("All");
  const [state, setState] = useState<RetentionState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Retention service unavailable. Showing local retention concepts only."
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
      `${action} is unavailable locally. No retention policy, deletion schedule, legal hold, record deletion, exception, or personal-data operation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Data scope", selected.scope],
    ["Period", selected.period],
    ["Legal basis", selected.legalBasis],
    ["Dependencies", selected.dependency],
    ["Execution", selected.execution],
    ["Exception", selected.exception],
    ["Audit", selected.audit],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Archive}
        title="Data retention"
        subtitle="Review local retention-policy concepts without fabricated periods, records, deletion jobs, legal requirements, exceptions, or compliance outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Retention service unavailable.</strong> No data inventory,
            retention-policy registry, legal or jurisdiction source, deletion
            scheduler, dependency checker, or audit service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Retention service remains unavailable. Local policies were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset policies
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Retention preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review retention policies
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show policy structure only. They do
                  not represent real inventories, periods, legal requirements,
                  deletion results, exceptions, or audit state.
                </p>
              </div>
              <FileClock className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Retention area filter"
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
              aria-label="Retention state filter"
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
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local retention policies match these filters.
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
                Selected policy
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
                No data scope, period, legal requirement, dependency, execution,
                exception, or audit state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create retention policy")}
                  variant="outline"
                >
                  <FileClock className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button
                  onClick={() => blocked("Apply retention policy")}
                  variant="outline"
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Apply unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Retention governance requires purpose limitation, data
                  minimization, documented ownership, jurisdiction-aware
                  requirements, dependency and legal-hold checks, verified
                  deletion execution, recovery safeguards, auditability, and
                  clear unavailable-state disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Policy, deletion, legal-hold, exception, and audit transitions
                  must be auditable and isolated from fabricated personal-data
                  or compliance outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No inventory lookup, period calculation, deletion schedule,
                  legal conclusion, record deletion, exception update, or
                  retention operation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
