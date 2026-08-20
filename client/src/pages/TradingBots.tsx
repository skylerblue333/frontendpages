import {
  Activity,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const controls = [
  [
    "Strategy",
    "Strategy definition unavailable",
    "No approved logic or version",
  ],
  ["Exchange", "Exchange connection unavailable", "No venue or API scope"],
  ["Wallet", "Wallet authorization unavailable", "No custody or signer"],
  [
    "Risk limits",
    "Risk policy unavailable",
    "No loss, exposure, or stop policy",
  ],
  ["Orders", "Order feed unavailable", "No live or simulated order source"],
  ["Performance", "Performance not calculated", "No dated fills or benchmark"],
] as const;

export default function TradingBots() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Bot}
        title="Trading bots"
        subtitle="Review automation readiness without fabricating strategies, balances, orders, fills, performance, risk controls, or trading execution."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Trading bot service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Trading-bot service unavailable.</strong> No strategy
            registry, exchange connection, wallet signer, order feed,
            market-data source, risk engine, or monitoring backend is connected.
            This preview cannot trade.
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
                  Automation preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify controls before execution
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This read-only workspace names the evidence a production bot
                  must provide. It does not connect an exchange, access a
                  wallet, create orders, simulate returns, or recommend a
                  trading decision.
                </p>
              </div>
              <Bot
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {controls.map(([label, value, source]) => (
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
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                onClick={() => undefined}
                className="bg-slate-700 text-slate-400"
                disabled
              >
                Start bot unavailable
              </Button>
              <Button onClick={() => undefined} variant="outline" disabled>
                Pause bot unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              No bot, order, balance, fill, or performance state is loaded.
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Execution stays withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    SlidersHorizontal,
                    "Strategy and parameters",
                    "No versioned strategy, parameter validation, or approval record.",
                  ],
                  [
                    ClipboardCheck,
                    "Simulation and audit",
                    "No backtest, paper-trade, fill, benchmark, or audit evidence.",
                  ],
                  [
                    Activity,
                    "Monitoring and recovery",
                    "No alerting, kill switch, reconciliation, or failure-recovery service.",
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
                  A production trading-bot system requires least-privilege
                  credentials, secure key custody, address and venue validation,
                  idempotent order handling, immutable order states, exposure
                  and loss limits, kill switches, rate limits, slippage and fee
                  controls, monitoring, reconciliation, and human review. It
                  must not imply profit or suitability.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Readiness visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Control gaps are named.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Execution blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No order or wallet mutation.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No bot, strategy, order, balance, fill, return, profit, loss, or
            trading outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
