import { useMemo, useState } from "react";
import {
  BarChart3,
  CheckCircle2,
  FileText,
  Search,
  ShieldCheck,
  TrendingUp,
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

type ReportBoundary = { title: string; area: string; description: string };
const boundaries: readonly ReportBoundary[] = [
  {
    title: "Source data and periods",
    area: "Inputs",
    description:
      "No account, ledger, wallet, portfolio, market, tax period, currency, holdings, or transaction data is loaded.",
  },
  {
    title: "Statements and calculations",
    area: "Reporting",
    description:
      "No balance, income, expense, cash flow, return, gain, loss, allocation, valuation, or reconciliation calculation is available.",
  },
  {
    title: "Accuracy and review",
    area: "Controls",
    description:
      "No source freshness, accounting policy, review status, approval, correction workflow, or audit trail is connected.",
  },
  {
    title: "Export and distribution",
    area: "Governance",
    description:
      "No report artifact, PDF, spreadsheet, download, recipient, permission, retention rule, or notification exists.",
  },
];

export default function FinancialReports() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Financial reporting is unavailable locally. No balances, statements, calculations, exports, or financial mutations were started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No balances, statements, calculations, exports, or financial mutations were started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="financial-reports-title"
    >
      <div data-ui-polish="batch-189" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileText className="size-3.5" aria-hidden="true" />
                  Financial reporting readiness
                </Badge>
                <Badge variant="secondary">No finance data service</Badge>
              </div>
              <h1
                id="financial-reports-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Financial reports readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful source data, statement, calculation, review,
                export, and distribution contracts without displaying fabricated
                financial results or creating a report.
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
                Financial reporting service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authoritative ledger, wallet, portfolio, market, tax,
                accounting, export, or audit source is connected. This is a
                planning boundary, not a financial statement viewer.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Financial reports status"
        >
          <Card>
            <CardContent className="p-5">
              <BarChart3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No source data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, ledger, wallet, portfolio, market, period, currency,
                holdings, or transaction data is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <TrendingUp
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No calculations</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No balance, income, expense, cash flow, return, gain, loss,
                allocation, valuation, or reconciliation result is calculated.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No report artifact</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No statement, PDF, spreadsheet, download, recipient, approval,
                retention, or notification state exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Financial reports readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              financial records, balances, calculations, reports, exports, or
              permissions.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search financial reports readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search reporting requirements"
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
                  No reporting notes match “{query}”.
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
                A production financial-reporting system needs authoritative
                sources, period and currency controls, documented calculation
                policies, reconciliation, freshness indicators, independent
                review, least-privilege access, immutable audit events,
                privacy-aware exports, and explicit disclaimers for unavailable
                data.
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
