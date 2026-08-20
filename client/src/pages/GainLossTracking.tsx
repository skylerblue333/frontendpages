import { useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  FileSpreadsheet,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type GainLossBoundary = { title: string; area: string; description: string };
const boundaries: readonly GainLossBoundary[] = [
  {
    title: "Account-scoped holdings and transactions",
    area: "Records",
    description:
      "No account, wallet, holding, lot, transaction history, transfer, fee, corporate action, or custody scope is loaded.",
  },
  {
    title: "Cost basis, pricing, and currency methodology",
    area: "Methodology",
    description:
      "No cost-basis method, market-price source, timestamp, currency conversion, realized or unrealized calculation, or provenance is connected.",
  },
  {
    title: "Gain/loss calculation and reconciliation",
    area: "Controls",
    description:
      "No calculation engine, completeness check, discrepancy state, correction workflow, report version, or independently reconciled result exists.",
  },
  {
    title: "Tax, privacy, and export safeguards",
    area: "Governance",
    description:
      "No tax jurisdiction, tax advice, privacy control, data export, retention policy, legal review, or accountant-ready report is available.",
  },
];

export default function GainLossTracking() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Gain/loss tracking is unavailable locally. No holdings, transactions, market prices, balances, gains, losses, or tax results were calculated."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No holdings, transactions, market prices, balances, gains, losses, or tax results were calculated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="gain-loss-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />
                  Portfolio methodology readiness
                </Badge>
                <Badge variant="secondary">No market-data service</Badge>
              </div>
              <h1
                id="gain-loss-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Gain and loss tracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review account scope, cost basis, pricing provenance,
                reconciliation, privacy, and tax-reporting boundaries without
                presenting fabricated financial results.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Gain/loss service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account-scoped holdings, transaction ledger, market-price
                provenance, currency service, calculation engine, tax
                methodology, or audit stream is connected. This is a planning
                boundary, not a financial report or tax determination.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Gain and loss status"
        >
          <Card>
            <CardContent className="p-5">
              <CircleDollarSign
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No holdings loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, wallet, holding, lot, transaction, transfer, fee,
                corporate action, or custody scope is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <FileSpreadsheet
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No calculation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No cost basis, price, currency conversion, realized or
                unrealized result, reconciliation, or report can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial result</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No balance, gain, loss, tax outcome, investment recommendation,
                or accountant-ready export exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Gain/loss readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              holdings, transactions, market data, balances, calculations, or
              tax records.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search gain and loss readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search methodology requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No methodology notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production gain/loss tool needs account-scoped ledger
                completeness, deterministic lot accounting, disclosed cost-basis
                and price methodology, time-stamped market sources, currency
                policy, corporate-action handling, reconciliation, privacy
                safeguards, jurisdiction-specific professional review, and
                audit-safe recovery.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
