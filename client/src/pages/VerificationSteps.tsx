import { useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRoundCheck,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Step = { number: string; name: string; evidence: string };
const steps: readonly Step[] = [
  {
    number: "01",
    name: "Confirm identity scope",
    evidence:
      "Authenticated owner, purpose, consent, and jurisdiction are unavailable.",
  },
  {
    number: "02",
    name: "Review requirements",
    evidence:
      "Document policy, data minimization, and accepted evidence are unavailable.",
  },
  {
    number: "03",
    name: "Submit for review",
    evidence:
      "Secure intake, provider handoff, case ID, and submission state are unavailable.",
  },
  {
    number: "04",
    name: "Receive decision",
    evidence:
      "Reviewer authority, status, audit record, retention, and appeal state are unavailable.",
  },
];

export default function VerificationSteps() {
  const [selectedNumber, setSelectedNumber] = useState(steps[0].number);
  const [status, setStatus] = useState(
    "Verification-process service unavailable locally. No step was started or persisted."
  );
  const selected =
    steps.find(step => step.number === selectedNumber) ?? steps[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No verification, identity, document, reviewer, persistence, or appeal mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={FileCheck2}
        title="Verification steps"
        subtitle="Review a verification-process sequence without fabricating identity, documents, consent, reviewer handoff, progress, status, persistence, or approval outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Verification process unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Verification-process service unavailable.</strong> No
            authenticated identity, policy source, secure document intake,
            provider handoff, reviewer authority, case store, or appeal workflow
            is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh steps")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Process preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local verification steps
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local steps describe process requirements only. They do
                  not represent a person’s progress, submitted documents,
                  reviewer queue, verified status, or saved case.
                </p>
              </div>
              <FileCheck2
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <ol
              className="mt-6 space-y-3"
              aria-label="Verification process concepts"
            >
              {steps.map(step => (
                <li key={step.number}>
                  <button
                    type="button"
                    aria-current={
                      selected.number === step.number ? "step" : undefined
                    }
                    onClick={() => setSelectedNumber(step.number)}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.number === step.number ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  >
                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 text-xs text-cyan-200">
                        {step.number}
                      </span>
                      <div>
                        <p className="font-medium">{step.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {step.evidence}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled>Continue unavailable</Button>
              <Button disabled variant="outline">
                Save progress unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected step
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                Step {selected.number}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Progress", "Not started"],
                  ["Identity", "Unavailable"],
                  ["Consent", "Not recorded"],
                  ["Documents", "Not submitted"],
                  ["Provider", "Unavailable"],
                  ["Reviewer", "Not assigned"],
                  ["Case", "ID unavailable"],
                  ["Persistence", "Store unavailable"],
                  ["Decision", "Not determined"],
                  ["Appeal", "Workflow unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production sequence requires authenticated scope, lawful
                  purpose, explicit consent, secure document handling, provider
                  contracts, encrypted persistence, reviewer assignment,
                  progress recovery, auditability, retention/deletion, and
                  appeal safeguards. Step labels must never imply completion or
                  approval.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Order visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No process started.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Progress blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No case persistence.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UserRoundCheck
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Reviewer absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No authority connected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Evidence absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No document state.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No verification progress, identity, document, consent, reviewer,
            case, decision, appeal, or verified-account outcome is claimed as
            real.
          </strong>
        </p>
      </main>
    </div>
  );
}
