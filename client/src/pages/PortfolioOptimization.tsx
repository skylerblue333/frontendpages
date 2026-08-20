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
    title: "Portfolio, holdings, and market-data provenance",
    area: "Data",
    description:
      "No account, portfolio, holding, asset, quantity, price, market source, currency, cost basis, or as-of timestamp is connected.",
  },
  {
    title: "Objective, constraints, and suitability",
    area: "Method",
    description:
      "No objective, horizon, liquidity need, risk tolerance, concentration limit, tax context, restriction, or user suitability assessment is verified.",
  },
  {
    title: "Model, assumptions, and calculation integrity",
    area: "Controls",
    description:
      "No optimizer, risk model, return assumption, covariance input, scenario, fee treatment, sensitivity, validation, or calculation provenance exists.",
  },
  {
    title: "Authorization, execution, and disclosure",
    area: "Safety",
    description:
      "No recommendation boundary, consent, approval, order route, rebalance guard, dry-run, audit event, non-advisory disclosure, or failure recovery is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, import, optimize, recommend, rebalance, execute, export, save, or portfolio or financial-data mutation is connected or persisted.",
  },
];
export default function PortfolioOptimization() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Portfolio optimization is unavailable locally. No account, portfolio, holding, market data, objective, risk profile, model output, allocation, order, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No portfolio, holding, market-data, risk, recommendation, allocation, order, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="portfolio-optimization-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />{" "}
                  Allocation-readiness workspace
                </Badge>
                <Badge variant="secondary">No optimization data</Badge>
              </div>
              <h1
                id="portfolio-optimization-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PortfolioOptimization readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review holdings and market-data provenance, objectives and
                constraints, suitability, model assumptions, calculation
                integrity, authorization, execution, and recommendation
                boundaries without implying that an allocation, optimization,
                trade, or financial record exists.
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
                Portfolio optimization is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No portfolio service, holdings source, market-data provider,
                risk engine, suitability workflow, calculation runtime,
                authorization control, order route, or persistence layer is
                connected. This workspace cannot connect, import, optimize,
                recommend, rebalance, execute, export, save, or claim financial
                analysis or investment advice.
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
              <h2 className="font-semibold">No optimization data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, portfolio, holding, asset, quantity, price, market
                source, cost basis, or allocation record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No model state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No objective, constraint, risk profile, model, assumption,
                scenario, sensitivity, suitability, or calculation state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No optimization actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, import, optimize, recommend, rebalance, execute,
                export, save, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>
              Portfolio-optimization governance requirements
            </CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads holdings, generates a recommendation, calculates an
              allocation, places an order, offers advice, or saves financial
              records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PortfolioOptimization readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter optimization requirements"
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
                  No optimization requirements match “{query}”.
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
                Production optimization requires authoritative holdings and
                market data, explicit objective and constraints, suitability
                context, validated models and assumptions, calculation
                provenance, stress testing, recommendation and execution
                separation, consent and approvals, order and rebalance
                safeguards, audit history, and clear non-advisory disclosures.
                No optimization, recommendation, allocation, order, or financial
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
