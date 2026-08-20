import { useMemo, useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  ClipboardPenLine,
  ReceiptText,
  Search,
  ShieldCheck,
  TrendingUp,
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

type TrackingBoundary = { title: string; area: string; description: string };
const boundaries: readonly TrackingBoundary[] = [
  {
    title: "Expense entry and receipt capture",
    area: "Input",
    description:
      "No amount, currency, vendor, category, date, receipt image, note, or expense entry is accepted or stored.",
  },
  {
    title: "Categories and recurring rules",
    area: "Organization",
    description:
      "No category taxonomy, recurring expense, merchant rule, split allocation, tagging, or duplicate detection is configured.",
  },
  {
    title: "Budgets and trends",
    area: "Analysis",
    description:
      "No budget, spend total, period comparison, forecast, chart, tax estimate, or financial trend is calculated.",
  },
  {
    title: "Export and synchronization",
    area: "Integrations",
    description:
      "No accounting export, bank connection, reimbursement sync, cloud backup, audit record, or deletion workflow is available.",
  },
];

export default function ExpenseTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Expense tracking is unavailable locally. No expense, receipt, budget, trend, export, or financial-data mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No expense, receipt, budget, trend, export, or financial-data mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="expense-tracker-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ClipboardPenLine className="size-3.5" aria-hidden="true" />
                  Personal finance readiness
                </Badge>
                <Badge variant="secondary">No tracking store</Badge>
              </div>
              <h1
                id="expense-tracker-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Expense tracking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful entry, receipt, categorization, budget, trend,
                export, and privacy contracts without recording a real expense
                or presenting invented financial totals.
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
                Expense tracking service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No private expense store, receipt processing, budget source,
                analytics pipeline, bank connection, accounting sync, or backup
                service is connected. This is a planning boundary, not a live
                ledger.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Expense tracking status"
        >
          <Card>
            <CardContent className="p-5">
              <ReceiptText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No entries captured</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No amounts, currencies, merchants, receipts, dates, notes, or
                categories are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <TrendingUp
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No totals calculated</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No budget, trend, comparison, forecast, tax estimate, or
                financial insight is generated.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CalendarClock
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No sync scheduled</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No recurring rule, bank connection, accounting export, backup,
                or retention job can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Expense tracking readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              receipts, financial records, budgets, trends, or external
              providers.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search expense tracking readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search tracking requirements"
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
                  No tracking notes match “{query}”.
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
                A production tracker needs explicit consent and privacy
                controls, secure receipt handling, currency and tax rules,
                duplicate prevention, budget correctness, clear calculation
                provenance, export/deletion controls, reconciliation, audit
                logging, and no hidden bank or accounting access.
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
