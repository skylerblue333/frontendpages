import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Calculator,
  FileSearch,
  Gauge,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Network and market-data provenance",
    area: "Data",
    description:
      "No coin, network, block reward, difficulty, hashrate, fee, exchange rate, liquidity, or timestamped source is connected.",
  },
  {
    title: "Hardware and operating assumptions",
    area: "Inputs",
    description:
      "No device, hashrate, power draw, electricity tariff, uptime, pool fee, cooling cost, maintenance, or hardware price is verified.",
  },
  {
    title: "Methodology and uncertainty",
    area: "Method",
    description:
      "No formula, unit conversion, variance range, stale-data guard, scenario, validation result, or reproducible calculation record exists.",
  },
  {
    title: "Costs, tax, and accounting",
    area: "Finance",
    description:
      "No revenue, expense, depreciation, tax treatment, payout, currency conversion, wallet address, or accounting record is available.",
  },
  {
    title: "Security and non-advisory use",
    area: "Safety",
    description:
      "No wallet, private key, payout integration, custody boundary, risk disclosure, investment suitability review, or decision workflow is configured.",
  },
];
export default function MiningCalculator() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mining calculator is unavailable locally. No market data, network data, hardware input, profitability estimate, wallet, or financial record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No coin, price, difficulty, hardware, profitability, ROI, wallet, payout, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mining-calculator-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Calculator className="size-3.5" aria-hidden="true" />{" "}
                  Mining-analysis readiness
                </Badge>
                <Badge variant="secondary">No live inputs</Badge>
              </div>
              <h1
                id="mining-calculator-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MiningCalculator readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review network data, market inputs, hardware assumptions,
                methodology, uncertainty, costs, tax, security, and non-advisory
                disclosures without implying that profitability, ROI, breakeven,
                payout, or financial results exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mining analysis is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No market-data provider, network source, hardware catalog,
                electricity input, calculation engine, tax model, wallet, payout
                service, or persistence layer is connected. This workspace
                cannot estimate profit, ROI, breakeven, earnings, or investment
                suitability.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Gauge className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No live inputs</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No coin price, block reward, difficulty, hashrate, fee, power,
                tariff, or uptime input is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial outputs</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No profitability, ROI, breakeven, payout, revenue, expense, tax,
                or wallet result is calculated.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No mining actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No hardware purchase, pool connection, wallet, payout, mining
                job, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Mining-analysis requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              fetches market data, computes an estimate, connects a wallet,
              saves an input, or makes a financial recommendation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mining calculator readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter mining-analysis requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No mining-analysis notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production calculator needs timestamped network and market
                sources, verified hardware and electricity assumptions,
                reproducible methodology, uncertainty ranges, cost and tax
                treatment, secure wallet boundaries, and clear non-advisory
                disclosures. No estimate, ROI, breakeven, payout, or financial
                record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
