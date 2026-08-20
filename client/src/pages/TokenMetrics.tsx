import {
  Activity,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Droplets,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const metrics = [
  ["Price", "Verified price unavailable", "No market-data source"],
  ["Market cap", "Unavailable", "Supply and price unverified"],
  ["Volume", "Unavailable", "No activity index"],
  ["Holders", "Unavailable", "No holder registry"],
  ["Liquidity", "Unavailable", "No pool or venue source"],
  ["Staking", "Unavailable", "No contract or reward source"],
  ["Supply", "Unavailable", "No contract metadata"],
  ["Performance", "Not calculated", "No dated price series"],
] as const;

export default function TokenMetrics() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={BarChart3}
        title="Token metrics"
        subtitle="Review metric provenance without fabricating price, supply, holders, liquidity, staking, market cap, volume, or performance."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Token metrics unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Verified token metrics unavailable.</strong> No chain
            provider, contract identity, holder index, liquidity venue, staking
            contract, or market-data feed is connected. Metrics remain
            unavailable rather than estimated.
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
                  Read-only metrics preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify sources before calculating
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This workspace shows the metric categories a production token
                  dashboard must source and timestamp. It does not query a
                  chain, infer market value, calculate returns, or recommend a
                  financial action.
                </p>
              </div>
              <BarChart3
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {metrics.map(([label, value, source]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium">{label}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-500">
                      Unavailable
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-semibold">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{source}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-5">
              <p className="font-medium">No verified metric series loaded</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Each displayed metric needs a source, network/contract identity,
                timestamp, unit, freshness policy, and reconciliation path. None
                is available here.
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Metric evidence gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Calculation stays withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    Clock3,
                    "Freshness",
                    "No timestamp or update policy is available.",
                  ],
                  [
                    Activity,
                    "Activity provenance",
                    "No transaction or volume index is connected.",
                  ],
                  [
                    Droplets,
                    "Liquidity context",
                    "No venue, pool, depth, or liquidity source is verified.",
                  ],
                  [
                    UsersRound,
                    "Holder context",
                    "No authenticated holder registry is connected.",
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
                  A production metrics view requires authoritative sources,
                  contract and network validation, point-in-time timestamps,
                  unit definitions, stale-data handling, reconciliation, rate
                  limits, error recovery, and privacy-safe aggregation. It must
                  not imply liquidity, yield, profitability, or investment
                  suitability.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Read-only intent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No wallet or transaction mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Financial data blocked
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No price, return, APY, or valuation.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No price, supply, holder, liquidity, staking, market-cap, volume,
            return, or financial outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
