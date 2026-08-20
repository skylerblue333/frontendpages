import { useMemo, useState } from "react";
import {
  BarChart3,
  Calculator,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Customer and cohort identity",
    area: "Data",
    description:
      "No authenticated customer, tenant, cohort, lifecycle stage, consent record, or account ownership data is connected.",
  },
  {
    title: "Revenue and cost inputs",
    area: "Finance",
    description:
      "No verified revenue, subscription, transaction, refund, discount, acquisition cost, service cost, currency, or accounting period is loaded.",
  },
  {
    title: "Method and assumptions",
    area: "Model",
    description:
      "No retention curve, churn definition, discount rate, gross-margin assumption, attribution rule, horizon, or calculation version is configured.",
  },
  {
    title: "Privacy and authorization",
    area: "Governance",
    description:
      "No role, purpose limitation, consent, aggregation threshold, anonymization, retention, export control, or financial-data authorization is verified.",
  },
  {
    title: "Reconciliation and evidence",
    area: "Reliability",
    description:
      "No source reconciliation, data quality check, model run, lineage, variance review, audit event, or reproducible result exists.",
  },
];
export default function LTVAnalysis() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LTVAnalysis is unavailable locally. No customer cohort, revenue input, cost input, calculation, or financial result was loaded or saved."
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
      `${action} is unavailable locally. No customer, revenue, cost, cohort, calculation, export, or financial mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ltv-analysis-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BarChart3 className="size-3.5" aria-hidden="true" />{" "}
                  Cohort-analysis readiness
                </Badge>
                <Badge variant="secondary">No verified data</Badge>
              </div>
              <h1
                id="ltv-analysis-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                LTV Analysis readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the identity, revenue, cost, method, privacy, and
                reconciliation contracts required for defensible lifetime-value
                analysis without presenting fabricated customer value,
                retention, churn, or financial results.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Verified analysis data is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No customer source, cohort definition, revenue or cost ledger,
                accounting period, calculation method, or persistence layer is
                connected. This is a readiness workspace, not a financial
                forecast or valuation report.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No customer cohorts</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No customer, tenant, lifecycle, consent, retention, churn, or
                cohort record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Calculator
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial inputs</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No revenue, refund, discount, acquisition cost, service cost,
                currency, or accounting period is verified.
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
                No cohort creation, calculation, forecast, export, attribution,
                or financial mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Cohort-analysis governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads customer data, calculates lifetime value, creates a
              forecast, exports a result, or saves a financial mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search LTV Analysis readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter cohort-analysis requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No cohort-analysis notes match “{query}”.
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
                A production LTV system needs governed customer identity,
                reconciled revenue and cost sources, explicit methodology and
                assumptions, privacy and authorization controls, versioned
                calculations, reproducible lineage, quality checks,
                auditability, and review of uncertainty. No customer value or
                financial result is claimed here.
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
