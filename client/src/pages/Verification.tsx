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

const checks = [
  ["Identity owner", "Authenticated identity unavailable"],
  ["Document requirements", "Policy unavailable"],
  ["Submission", "No document submitted"],
  ["Reviewer", "Authority unavailable"],
  ["Status", "Not determined"],
  ["Privacy", "Consent and scope unavailable"],
  ["Retention", "Policy unavailable"],
  ["Appeal", "Workflow unavailable"],
] as const;

export default function Verification() {
  const [status, setStatus] = useState(
    "Verification service unavailable locally. No identity or document verification was started."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No identity, document, reviewer, status, privacy, retention, or appeal mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={UserRoundCheck}
        title="Verification"
        subtitle="Review verification-readiness requirements without fabricating identity, documents, reviewer decisions, status, privacy, security, or verified-account outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Verification unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Verification service unavailable.</strong> No authenticated
            identity, document intake, verification provider, reviewer
            authority, privacy consent, retention policy, or appeal workflow is
            connected.
          </p>
          <Button
            onClick={() => blocked("Refresh verification")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Readiness review
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verification evidence gates
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This read-only workspace names the evidence a production
                  verification flow must establish. It does not request, store,
                  inspect, transmit, or approve identity documents.
                </p>
              </div>
              <FileCheck2
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {checks.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Start verification unavailable
              </Button>
              <Button disabled variant="outline">
                Upload unavailable
              </Button>
              <Button disabled variant="outline">
                Submit unavailable
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
                Verification boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No approval is implied
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    LockKeyhole,
                    "Document safety",
                    "No document upload, OCR, biometric processing, storage, or provider transmission is available.",
                  ],
                  [
                    UserRoundCheck,
                    "Reviewer authority",
                    "No reviewer, verification provider, decision policy, or signed result is connected.",
                  ],
                  [
                    FileSearch,
                    "Evidence and appeals",
                    "No case ID, audit trail, retention schedule, challenge, or appeal state exists locally.",
                  ],
                ].map(([Icon, label, description]) => (
                  <div
                    key={label as string}
                    className="flex gap-3 rounded-xl border border-slate-800 p-4"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium">{label as string}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldAlert
                  className="h-5 w-5 text-amber-300"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  Identity verification is a high-risk workflow. A production
                  implementation requires lawful purpose, data minimization,
                  encryption, access controls, retention/deletion policy,
                  provider contracts, fraud controls, human review, appeal
                  handling, and explicit consent. No verification badge or
                  compliance result is shown here.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Requirements named</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No approval asserted.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Submission blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No identity mutation.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="text-sm text-slate-500">
          <strong className="text-amber-100">
            No identity, document, reviewer decision, verification status,
            compliance result, or verified-account outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
