import { FormEvent, useState } from "react";
import {
  Calculator,
  CheckCircle2,
  CircleDollarSign,
  FileWarning,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const fields = [
  ["Supply", "Total supply source required"],
  ["Allocation", "Allocation schedule source required"],
  ["Emissions", "Emission rule source required"],
  ["Vesting", "Vesting contract source required"],
  ["Inflation", "Inflation policy source required"],
  ["Staking", "Reward contract source required"],
] as const;

export default function TokenomicsCalculator() {
  const [scenario, setScenario] = useState("");
  const [status, setStatus] = useState(
    "Tokenomics calculation service unavailable locally. No scenario was calculated."
  );
  const review = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      scenario.trim()
        ? "Scenario label saved locally. No tokenomics calculation, valuation, return, or financial conclusion was produced."
        : "Add a scenario label before local review. No calculation was run."
    );
  };
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Calculator}
        title="Tokenomics calculator"
        subtitle="Review a tokenomics scenario structure without fabricating supply, allocation, emissions, vesting, inflation, staking, valuation, or returns."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Tokenomics calculator unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Tokenomics calculation service unavailable.</strong> No
            chain, contract, token policy, source documents, market-data feed,
            or validated assumptions are connected. This screen is informational
            and not financial advice.
          </p>
          <Button
            onClick={() => {
              setScenario("");
              setStatus(
                "Tokenomics calculation service unavailable locally. No scenario was calculated."
              );
            }}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset scenario
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Scenario preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Define inputs before calculating
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This local form demonstrates scenario naming and a review
                  boundary. It does not accept unverified numbers as facts,
                  infer allocations, calculate supply or emissions, or produce
                  an investment conclusion.
                </p>
              </div>
              <Calculator
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <form onSubmit={review} className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-200">
                Scenario label
                <input
                  value={scenario}
                  onChange={event => setScenario(event.target.value)}
                  placeholder="e.g. internal review"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {fields.map(([label, requirement]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <p className="text-sm font-medium">{label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {requirement}
                    </p>
                    <p className="mt-2 text-xs text-amber-200">
                      Input withheld
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="submit"
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  Review locally
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setScenario("");
                    setStatus(
                      "Scenario reset locally. No calculation was run."
                    );
                  }}
                  variant="outline"
                >
                  Clear
                </Button>
              </div>
            </form>
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
                Calculation status
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Withheld pending evidence
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Scenario", scenario || "Unnamed local scenario"],
                  ["Inputs", "Required sources unavailable"],
                  ["Calculation", "Not run"],
                  ["Valuation", "Not calculated"],
                  ["Return", "Not calculated"],
                  ["Recommendation", "Not provided"],
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
                  A production tokenomics model requires authoritative token and
                  contract sources, dated assumptions, unit and currency
                  definitions, vesting and emissions logic, scenario controls,
                  reconciliation, sensitivity analysis, audit trail, and review
                  by qualified professionals. It must not imply profitability,
                  yield, liquidity, or investment suitability.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Scope visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Inputs and source gaps are named.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Calculation blocked
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No unverified model output.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileWarning
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source required</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No token policy is verified.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <CircleDollarSign
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">No value claim</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No price or return is shown.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No supply, allocation, emissions, vesting, inflation, staking,
            valuation, return, or financial recommendation is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
