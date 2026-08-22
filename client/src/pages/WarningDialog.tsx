import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  Focus,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const warnings = [
  {
    severity: "High",
    title: "Destructive action review",
    detail:
      "The action, affected records, authorization, and recovery plan are unavailable.",
  },
  {
    severity: "Medium",
    title: "Data-source warning",
    detail: "Source freshness, provenance, scope, and impact are unavailable.",
  },
  {
    severity: "Notice",
    title: "Permission reminder",
    detail:
      "Identity, consent, access scope, and audit requirements are unavailable.",
  },
] as const;

export default function WarningDialog() {
  const [selected, setSelected] = useState(0);
  const [status, setStatus] = useState(
    "Warning-dialog service unavailable locally. No warning was issued and no action was confirmed."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No dialog, confirmation, dismissal, audit, or destructive mutation was started.`
    );
  const warning = warnings[selected];
  return (
    <div data-ui-polish="batch-205" className="min-h-screen bg-background">
      <PageHeader
        icon={AlertTriangle}
        title="Warning dialog"
        subtitle="Review accessible warning semantics without fabricating severity, message provenance, affected scope, confirmations, dismissals, audits, or destructive outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Warning dialog unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Warning-dialog service unavailable.</strong> No event
            source, affected scope, policy decision, user consent, focus
            manager, audit record, or action handler is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh warning state")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Dialog preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review warning concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These local concepts demonstrate severity and accessible
                  dialog content only. They do not represent a live alert, an
                  identified affected record, a confirmed user decision, or an
                  executable action.
                </p>
              </div>
              <AlertTriangle
                className="hidden h-7 w-7 text-amber-300 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 space-y-3"
              role="list"
              aria-label="Warning concepts"
            >
              {warnings.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-xl border p-4 text-left transition-colors ${selected === index ? "border-amber-400/35 bg-amber-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">{item.title}</span>
                    <span className="rounded-full border border-amber-400/20 px-2 py-1 text-xs text-amber-200">
                      {item.severity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.detail}
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled>Confirm action unavailable</Button>
              <Button disabled variant="outline">
                Dismiss unavailable
              </Button>
              <Button disabled variant="outline">
                View details unavailable
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
                Selected warning
              </p>
              <h2 className="mt-2 text-xl font-semibold">{warning.title}</h2>
              <p className="mt-1 text-sm text-amber-200">
                {warning.severity} severity concept
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Message", "Local concept only"],
                  ["Source", "Unavailable"],
                  ["Affected scope", "Not identified"],
                  ["Authorization", "Not established"],
                  ["Consent", "Not recorded"],
                  ["Focus", "Manager unavailable"],
                  ["Dismissal", "Not applied"],
                  ["Confirmation", "Not recorded"],
                  ["Audit", "Not created"],
                  ["Outcome", "Not determined"],
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
                  A production warning dialog requires trusted event provenance,
                  severity rules, affected-scope calculation, clear copy, focus
                  trapping and restoration, keyboard dismissal, explicit
                  confirmation for irreversible actions, authorization checks,
                  consent where needed, audit-safe logging, and deterministic
                  failure recovery.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <Focus
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Focus named</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No dialog opened.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Action blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No confirmation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Scope absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No affected records.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audit absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No outcome recorded.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No warning event, severity, affected scope, confirmation, dismissal,
            audit, or destructive outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
