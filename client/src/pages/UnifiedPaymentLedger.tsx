import {
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const ledgerFacts = [
  ["Currency", "Currency and unit unavailable"],
  ["Balance", "Not loaded"],
  ["Payment source", "Provider unavailable"],
  ["Settlement", "Not verified"],
  ["Fees", "Fee schedule unavailable"],
  ["Refunds", "Refund ledger unavailable"],
  ["Reconciliation", "Not performed"],
  ["Payouts", "Payout authorization unavailable"],
] as const;

export default function UnifiedPaymentLedger() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CircleDollarSign}
        title="Unified payment ledger"
        subtitle="Review payment-ledger readiness without fabricating balances, charges, subscriptions, token earnings, payouts, fees, refunds, or withdrawal outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Payment ledger unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Payment ledger unavailable.</strong> No authenticated
            account, payment provider, chain source, currency registry, ledger
            persistence, reconciliation service, payout authorization, or audit
            store is connected.
          </p>
          <Button onClick={() => undefined} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Read-only ledger preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify financial-record sources
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fields identify the evidence a production ledger
                  must verify. They do not represent a payment, charge,
                  subscription, token transfer, revenue record, payout, balance,
                  or settled transaction.
                </p>
              </div>
              <FileCheck2
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ledgerFacts.map(([label, value]) => (
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
                Withdraw unavailable
              </Button>
              <Button disabled variant="outline">
                Export unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              No ledger entries, balances, settlement, refund, payout, or
              withdrawal state is loaded.
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Ledger readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Financial actions withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    WalletCards,
                    "Account and custody",
                    "No authenticated account, payout destination, signer, or custody scope.",
                  ],
                  [
                    CircleDollarSign,
                    "Provider and settlement",
                    "No provider event, chain transaction, currency unit, fee, or settlement evidence.",
                  ],
                  [
                    FileCheck2,
                    "Reconciliation and audit",
                    "No immutable ledger ID, source timestamp, refund state, or reconciliation record.",
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
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production ledger requires server-side provider webhooks,
                  idempotency, currency and unit validation, double-entry
                  integrity, authorization, refunds, disputes, payout controls,
                  reconciliation, audit trails, access restrictions, and safe
                  error recovery. It must never expose secrets or imply funds
                  are available.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Evidence named</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Sources remain explicit.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Withdrawal blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No funds mutation.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No balance, charge, subscription, token earning, payout, refund,
            settlement, withdrawal, or financial outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
