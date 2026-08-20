import { useMemo, useState } from "react";
import {
  BarChart3,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Portfolio, holdings, and valuation provenance",
    area: "Data",
    description:
      "No account, portfolio, holding, asset, quantity, cost basis, valuation, currency, price source, or as-of timestamp is connected.",
  },
  {
    title: "Benchmark, period, and methodology",
    area: "Method",
    description:
      "No benchmark, comparison set, period, return definition, fee treatment, contribution flow, currency conversion, or calculation methodology is verified.",
  },
  {
    title: "Risk, suitability, and disclosure",
    area: "Safety",
    description:
      "No risk measure, allocation, concentration, liquidity, volatility, suitability context, tax treatment, or non-advisory disclosure state exists.",
  },
  {
    title: "Privacy, integrity, and reconciliation",
    area: "Controls",
    description:
      "No account authorization, stale-data rule, duplicate guard, discrepancy, correction history, audit event, or sensitive financial-data boundary is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, import, compare, calculate, rebalance, export, save, or portfolio or financial-data mutation is connected or persisted.",
  },
];
export default function PortfolioComparison() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Portfolio comparison is unavailable locally. No account, portfolio, holding, valuation, benchmark, return, risk, tax, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No portfolio, holding, valuation, benchmark, return, risk, tax, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="portfolio-comparison-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />{" "}
                  Portfolio-analysis readiness workspace
                </Badge>
                <Badge variant="secondary">No portfolio data</Badge>
              </div>
              <h1
                id="portfolio-comparison-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PortfolioComparison readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review holdings and valuation provenance, benchmark and period
                methodology, risk and suitability boundaries, privacy,
                reconciliation, and comparison-action safety without implying
                that portfolios, returns, risk metrics, or financial records
                exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Portfolio comparison is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No portfolio service, account authorization, holdings source,
                valuation provider, benchmark, calculation engine, tax context,
                or persistence layer is connected. This workspace cannot
                connect, import, compare, calculate, rebalance, export, save, or
                claim financial analysis.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No portfolio data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, portfolio, holding, asset, quantity, cost basis,
                valuation, currency, price source, or update record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No comparison state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No benchmark, period, return, fee, flow, risk, allocation,
                concentration, tax, or calculation state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No analysis actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, import, compare, calculate, rebalance, export, save,
                or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio-comparison governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads holdings, calculates returns, ranks portfolios, offers
              advice, or saves financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PortfolioComparison readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter portfolio requirements"
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
                  No portfolio requirements match “{query}”.
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
                Production portfolio comparison requires authoritative holdings
                and valuation data, benchmark methodology, period and fee
                definitions, currency and cash-flow handling, risk and
                concentration calculations, suitability context, tax boundaries,
                reconciliation, privacy, audit history, and clear non-advisory
                disclosures. No portfolio, holding, valuation, benchmark,
                return, risk, tax, or financial record is claimed here.
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
