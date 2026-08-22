import { useState } from "react";
import {
  Calculator,
  CircleHelp,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type PlanningInput = { label: string; value: string; note: string };
const planningInputs: readonly PlanningInput[] = [
  {
    label: "Starting assets",
    value: "Not connected",
    note: "No account, wallet, portfolio, or asset data is read.",
  },
  {
    label: "Contribution plan",
    value: "Not configured",
    note: "No recurring contribution or cash-flow assumptions are stored.",
  },
  {
    label: "Time horizon",
    value: "Not selected",
    note: "A horizon cannot be used without an approved model contract.",
  },
  {
    label: "Risk profile",
    value: "Not assessed",
    note: "No questionnaire, suitability review, or recommendation is performed.",
  },
];

export default function WealthSimulator() {
  const [status, setStatus] = useState(
    "Simulation service unavailable locally. No projection, return, balance, or recommendation was calculated."
  );
  const notify = (action: string) =>
    setStatus(
      `${action} unavailable locally. No financial input was saved and no projection, return, balance, allocation, or recommendation was generated.`
    );
  return (
    <div data-ui-polish="batch-206" className="min-h-screen bg-background">
      <PageHeader
        icon={Calculator}
        title="Wealth simulator"
        subtitle="Review the evidence and controls required for a responsible planning model without fabricating projected wealth, returns, balances, or investment recommendations."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Wealth simulator unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Planning model unavailable.</strong> No verified data
            source, calculation model, assumptions registry, suitability
            workflow, or persisted scenario contract is connected.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => notify("Refresh planning model")}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Planning preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Scenario readiness
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  A legitimate simulator needs dated inputs, transparent
                  assumptions, deterministic formulas, fee and tax treatment,
                  uncertainty ranges, scenario versioning, and clear
                  limitations. This route intentionally provides the control
                  surface without pretending a result exists.
                </p>
              </div>
              <TrendingUp
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {planningInputs.map(input => (
                <div
                  key={input.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {input.label}
                  </p>
                  <p className="mt-2 font-medium">{input.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {input.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <div className="flex gap-3">
                <SlidersHorizontal
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-medium">No scenario output</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Projected value, gain/loss, annualized return, drawdown,
                    probability, purchasing power, and target date are
                    unavailable until an authoritative model and validated
                    inputs are connected.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Run simulation unavailable
              </Button>
              <Button disabled variant="outline">
                Save scenario unavailable
              </Button>
              <Button disabled variant="outline">
                Export report unavailable
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
                Model boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No decision is implied
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  ["Data", "Not connected"],
                  ["Assumptions", "Not versioned"],
                  ["Formula", "Not approved"],
                  ["Fees / tax", "Not modeled"],
                  ["Uncertainty", "Not quantified"],
                  ["Suitability", "Not assessed"],
                  ["Recommendation", "Not generated"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 p-3"
                  >
                    <span className="text-sm text-slate-500">{label}</span>
                    <span className="text-right text-sm">{value}</span>
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
                  This preview does not read accounts, wallets, market prices,
                  tax records, liabilities, or personal finances. It does not
                  provide individualized financial advice or forecast an
                  outcome. Any future model must disclose source dates,
                  currency, fee and tax assumptions, uncertainty, and
                  professional-review limits.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CircleHelp
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Inputs absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No personal data read.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Output blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No result implied.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No projected wealth, return, balance, allocation, probability, tax
            result, or investment recommendation is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
