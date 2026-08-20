import {
  Activity,
  CandlestickChart,
  CheckCircle2,
  CircleDollarSign,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const marketFacts = [
  ["Asset", "Asset identity unavailable"],
  ["Network", "Network unavailable"],
  ["Last price", "Verified price unavailable"],
  ["24h change", "Not calculated"],
  ["Volume", "Unavailable"],
  ["Order book", "Unavailable"],
  ["Wallet balance", "Authenticated wallet unavailable"],
  ["Fees", "Fee schedule unavailable"],
] as const;

export default function TradingTerminal() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CandlestickChart}
        title="Trading terminal"
        subtitle="Review terminal readiness without fabricating prices, charts, balances, market depth, orders, fills, fees, or trading outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Trading terminal unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Trading terminal unavailable.</strong> No market-data
            provider, asset/network registry, account session, custody boundary,
            order venue, risk engine, or reconciliation service is connected.
            This terminal cannot trade.
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
                  Read-only terminal preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify market and order sources
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This workspace shows the evidence categories a production
                  terminal must verify. It does not connect a venue, query
                  prices, display a chart, read a wallet, calculate value, or
                  submit an order.
                </p>
              </div>
              <CandlestickChart
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {marketFacts.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-5">
              <p className="font-medium">No verified market snapshot loaded</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                A real terminal requires timestamped market data, asset and
                network identity, stale-data handling, unit definitions, account
                authorization, and reconciliation. None is available here.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Buy unavailable
              </Button>
              <Button disabled variant="outline">
                Sell unavailable
              </Button>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Order readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Execution stays withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    Activity,
                    "Market freshness",
                    "No timestamp, quote source, order-book snapshot, or chart series.",
                  ],
                  [
                    WalletCards,
                    "Account and custody",
                    "No authenticated account, wallet balance, signer, or custody scope.",
                  ],
                  [
                    CircleDollarSign,
                    "Risk and fees",
                    "No fee schedule, limits, slippage, suitability, or reconciliation policy.",
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
                  A production terminal requires server-side provider
                  validation, asset and network checks, authenticated account
                  scope, secure key handling, order validation, idempotency,
                  balances, fees, slippage, risk controls, rate limits,
                  transaction state, reconciliation, and failure recovery. It
                  must not imply profitability or suitability.
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
                    No venue or wallet mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Order blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No price or balance proof.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No price, chart, balance, quote, order, fill, fee, or trading
            outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
