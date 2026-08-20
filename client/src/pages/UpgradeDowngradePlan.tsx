import { useState } from "react";
import {
  CheckCircle2,
  CreditCard,
  FileCheck2,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Plan = { id: string; name: string; description: string };
const plans: readonly Plan[] = [
  {
    id: "current",
    name: "Current plan concept",
    description:
      "Existing tier, billing interval, entitlements, and account scope are unavailable.",
  },
  {
    id: "higher",
    name: "Higher plan concept",
    description:
      "Price, feature entitlements, taxes, proration, and payment authorization are unavailable.",
  },
  {
    id: "lower",
    name: "Lower plan concept",
    description:
      "Downgrade timing, access changes, credits, and cancellation policy are unavailable.",
  },
];

export default function UpgradeDowngradePlan() {
  const [selected, setSelected] = useState(plans[0].id);
  const [status, setStatus] = useState(
    "Subscription service unavailable locally. No plan, price, entitlement, or billing state is loaded."
  );
  const selectedPlan = plans.find(plan => plan.id === selected) ?? plans[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No subscription, billing, payment, entitlement, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CreditCard}
        title="Upgrade or downgrade plan"
        subtitle="Review plan-change readiness without fabricating tiers, pricing, entitlements, billing, proration, payment, or subscription outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Plan change unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Plan-change service unavailable.</strong> No authenticated
            subscription, catalog, price, tax, entitlement, payment provider,
            proration engine, or billing ledger is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh plans")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Plan preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local plan concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local concepts demonstrate selection and evidence gaps
                  only. They do not represent a subscription catalog, price,
                  feature access, billing period, trial, tax, or completed plan
                  change.
                </p>
              </div>
              <CreditCard
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-3">
              {plans.map(plan => (
                <button
                  key={plan.id}
                  type="button"
                  aria-pressed={selected === plan.id}
                  onClick={() => {
                    setSelected(plan.id);
                    setStatus(
                      `Plan selection changed locally to ${plan.name}. No plan-change request was submitted.`
                    );
                  }}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected === plan.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{plan.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      Unavailable
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Upgrade unavailable
              </Button>
              <Button disabled variant="outline">
                Downgrade unavailable
              </Button>
              <Button disabled variant="outline">
                Cancel unavailable
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
                Selected plan concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                {selectedPlan.name}
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Price", "Unavailable"],
                  ["Currency", "Unit unavailable"],
                  ["Billing interval", "Unavailable"],
                  ["Entitlements", "Not evaluated"],
                  ["Proration", "Not calculated"],
                  ["Tax", "Jurisdiction unavailable"],
                  ["Payment", "Authorization unavailable"],
                  ["Effective date", "Not determined"],
                  ["Cancellation", "Policy unavailable"],
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
                  A production plan flow requires authenticated account scope,
                  versioned catalog, currency and tax rules, entitlement
                  enforcement, proration, payment authorization, idempotency,
                  webhook reconciliation, cancellation and downgrade timing,
                  audit events, and clear user confirmation before any charge or
                  access change.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Selection local</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No plan request sent.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Billing blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No payment or access change.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileCheck2
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Catalog absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No source-of-truth plans.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <CreditCard
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Payment absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No provider authorization.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No plan, price, entitlement, payment, charge, proration,
            cancellation, downgrade, or subscription outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
