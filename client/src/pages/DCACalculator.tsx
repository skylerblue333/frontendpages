import { useMemo, useState } from "react";
import {
  Calculator,
  CircleSlash2,
  FileDown,
  LineChart,
  LockKeyhole,
  PlayCircle,
  Save,
  Send,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type DcaAsset = "All" | "Native asset" | "Stablecoin" | "Token";
type DcaState = "All" | "Draft" | "Review" | "Unavailable";

type DcaConcept = {
  id: string;
  title: string;
  asset: Exclude<DcaAsset, "All">;
  state: Exclude<DcaState, "All">;
  summary: string;
  price: string;
  schedule: string;
  contribution: string;
  fee: string;
  balance: string;
  returnValue: string;
  forecast: string;
};

const strategies: DcaConcept[] = [
  {
    id: "native-strategy",
    title: "Native asset contribution plan",
    asset: "Native asset",
    state: "Review",
    summary:
      "A local strategy concept for recurring native-asset contributions pending timestamped market data, fee semantics, risk review, and authorized execution.",
    price: "Market price unavailable",
    schedule: "Cadence and dates unavailable",
    contribution: "Contribution amount and currency unavailable",
    fee: "Fee schedule unavailable",
    balance: "Portfolio balance unavailable",
    returnValue: "Historical return unavailable",
    forecast: "Forecast unavailable",
  },
  {
    id: "stablecoin-strategy",
    title: "Stablecoin contribution plan",
    asset: "Stablecoin",
    state: "Draft",
    summary:
      "A draft strategy concept for stablecoin contributions pending issuer and market verification, currency rules, and portfolio suitability review.",
    price: "Market price unavailable",
    schedule: "Cadence and dates unavailable",
    contribution: "Contribution amount and currency unavailable",
    fee: "Fee schedule unavailable",
    balance: "Portfolio balance unavailable",
    returnValue: "Historical return unavailable",
    forecast: "Forecast unavailable",
  },
  {
    id: "token-strategy",
    title: "Ecosystem token contribution plan",
    asset: "Token",
    state: "Unavailable",
    summary:
      "A local token strategy concept pending contract verification, liquidity and price provenance, custody controls, and risk disclosures.",
    price: "Market price unavailable",
    schedule: "Cadence and dates unavailable",
    contribution: "Contribution amount and currency unavailable",
    fee: "Fee schedule unavailable",
    balance: "Portfolio balance unavailable",
    returnValue: "Historical return unavailable",
    forecast: "Forecast unavailable",
  },
];

const assets: DcaAsset[] = ["All", "Native asset", "Stablecoin", "Token"];
const states: DcaState[] = ["All", "Draft", "Review", "Unavailable"];

export default function DCACalculator() {
  const [asset, setAsset] = useState<DcaAsset>("All");
  const [state, setState] = useState<DcaState>("All");
  const [selectedId, setSelectedId] = useState(strategies[0].id);
  const [status, setStatus] = useState(
    "Market and portfolio services unavailable. Showing local DCA strategy concepts only."
  );

  const filtered = useMemo(
    () =>
      strategies.filter(
        strategy =>
          (asset === "All" || strategy.asset === asset) &&
          (state === "All" || strategy.state === state)
      ),
    [asset, state]
  );
  const selected =
    filtered.find(strategy => strategy.id === selectedId) ??
    filtered[0] ??
    strategies[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No market price, balance, contribution, return, forecast, order, transaction, or investment recommendation request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Calculator}
        title="DCA calculator"
        subtitle="Review local dollar-cost-averaging concepts without fabricated prices, balances, returns, fees, forecasts, investment recommendations, or transaction execution."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Market and portfolio services unavailable.</strong> No price
            feed, portfolio store, fee schedule, exchange order service, custody
            provider, tax context, or financial reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Market and portfolio services remain unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset strategies
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  DCA preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review strategy concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show strategy structure only. They
                  do not represent real assets, prices, contributions, balances,
                  returns, fees, forecasts, or orders.
                </p>
              </div>
              <LineChart className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="DCA asset filter"
            >
              {assets.map(item => (
                <Button
                  aria-pressed={asset === item}
                  key={item}
                  onClick={() => setAsset(item)}
                  size="sm"
                  variant={asset === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="DCA strategy state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(strategy => (
                <button
                  aria-pressed={selected.id === strategy.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === strategy.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={strategy.id}
                  onClick={() => setSelectedId(strategy.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{strategy.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {strategy.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{strategy.asset}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {strategy.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local DCA fixtures match these filters.
                </p>
              )}
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
              <p className="mt-1 text-sm text-cyan-200">
                {selected.asset} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Price", selected.price],
                  ["Schedule", selected.schedule],
                  ["Contribution", selected.contribution],
                  ["Fees", selected.fee],
                  ["Balance", selected.balance],
                  ["Return", selected.returnValue],
                  ["Forecast", selected.forecast],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No price, cadence, contribution, fee, balance, return, forecast,
                order, or financial recommendation state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Calculate strategy")}
                  variant="outline"
                >
                  <PlayCircle className="mr-2 h-4 w-4" /> Calculate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Save strategy")}
                  variant="outline"
                >
                  <Save className="mr-2 h-4 w-4" /> Save unavailable
                </Button>
                <Button
                  onClick={() => blocked("Execute strategy")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Execute unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export strategy")}
                  variant="outline"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Financial tooling requires authoritative market sources,
                  timestamped prices, currency and fee semantics, suitability
                  and risk disclosures, validation, rounding discipline,
                  transaction authorization, custody controls, tax boundaries,
                  auditability, and clear non-advice disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Price, contribution, fee, balance, return, forecast, order,
                  and notification transitions must be auditable and isolated
                  from fabricated financial outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <WalletCards className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No portfolio lookup, market refresh, order creation, custody
                  action, transaction broadcast, tax calculation, or investment
                  operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  DCA state remains explicitly unavailable until authoritative
                  market, portfolio, and execution services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
