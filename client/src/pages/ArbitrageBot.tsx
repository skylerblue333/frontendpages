import { useState } from "react";
import {
  Bot,
  CircleSlash2,
  LockKeyhole,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type StrategyState = "All" | "Review" | "Planned" | "Unavailable";
type StrategyConcept = {
  title: string;
  state: Exclude<StrategyState, "All">;
  summary: string;
  venue: string;
  market: string;
  risk: string;
  wallet: string;
  order: string;
  execution: string;
};
const concepts: StrategyConcept[] = [
  {
    title: "Cross-venue spread review",
    state: "Review",
    summary:
      "Local strategy concept pending verified venues, price freshness, order-book semantics, deterministic risk limits, idempotency, signing, and auditability.",
    venue: "Exchange connectivity unavailable",
    market: "Market data unavailable",
    risk: "Risk limits unavailable",
    wallet: "Wallet custody unavailable",
    order: "Order model unavailable",
    execution: "Execution state unavailable",
  },
  {
    title: "Stable-asset route review",
    state: "Planned",
    summary:
      "Local strategy concept pending network validation, fees, slippage, liquidity checks, explicit user approval, and non-custodial key boundaries.",
    venue: "Exchange connectivity unavailable",
    market: "Market data unavailable",
    risk: "Risk limits unavailable",
    wallet: "Wallet custody unavailable",
    order: "Order model unavailable",
    execution: "Execution state unavailable",
  },
  {
    title: "High-volatility route",
    state: "Unavailable",
    summary:
      "Local high-risk concept pending authoritative market data, venue authorization, loss controls, failure handling, and execution audit.",
    venue: "Exchange connectivity unavailable",
    market: "Market data unavailable",
    risk: "Risk limits unavailable",
    wallet: "Wallet custody unavailable",
    order: "Order model unavailable",
    execution: "Execution state unavailable",
  },
];
export default function ArbitrageBot() {
  const [state, setState] = useState<StrategyState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Arbitrage services unavailable. Showing local strategy concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No market quote, spread, balance, wallet, exchange, order, trade, fill, profit, fee, slippage, transaction, or execution operation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Bot}
        title="Arbitrage strategy review"
        subtitle="Review local strategy concepts without fabricated prices, spreads, balances, orders, profits, performance, uptime, or execution claims."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Arbitrage services unavailable.</strong> No exchange
          connector, market-data provenance, wallet custody, order route, risk
          engine, or execution audit is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Strategy preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review strategy prerequisites
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show strategy structure only; they do not
              represent live quotes, spreads, balances, trades, fills, profit,
              fees, slippage, or execution.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Planned", "Unavailable"] as StrategyState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.title === item.title ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected strategy
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Venue", selected.venue],
                    ["Market", selected.market],
                    ["Risk", selected.risk],
                    ["Wallet", selected.wallet],
                    ["Order", selected.order],
                    ["Execution", selected.execution],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Simulate strategy")}
                  variant="outline"
                >
                  <Bot className="mr-2 h-4 w-4" /> Simulate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Execute strategy")}
                  variant="outline"
                >
                  <TriangleAlert className="mr-2 h-4 w-4" /> Execute unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Financial automation requires verified venues, fresh read-only
                  market data, deterministic fees/slippage/liquidity checks,
                  explicit approval, non-custodial key boundaries, idempotent
                  orders, transaction verification, failure handling, and
                  auditability.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet, exchange, blockchain, order, trade, profit, fee,
                  slippage, transaction, or execution operation is available
                  from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No market quote, spread, balance, fill, performance, uptime,
                  latency, throughput, or security-certification claim is
                  fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
