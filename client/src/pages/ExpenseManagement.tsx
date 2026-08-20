import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  Receipt,
  Search,
  ShieldCheck,
  WalletCards,
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

type ExpenseBoundary = { title: string; area: string; description: string };
const boundaries: readonly ExpenseBoundary[] = [
  {
    title: "Expense records and receipts",
    area: "Records",
    description:
      "No expense, receipt, vendor, category, currency, amount, date, attachment, or accounting record is loaded.",
  },
  {
    title: "Approvals and reimbursements",
    area: "Workflow",
    description:
      "No approver, policy decision, reimbursement request, payout, payment method, or settlement state is connected.",
  },
  {
    title: "Budgets and reporting",
    area: "Controls",
    description:
      "No budget, spend total, forecast, tax treatment, variance, financial report, or accounting export is available.",
  },
  {
    title: "Permissions and audit",
    area: "Security",
    description:
      "No organization, role, cost center, policy rule, audit event, retention state, or deletion/export workflow is configured.",
  },
];

export default function ExpenseManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Expense management is unavailable locally. No expense, reimbursement, approval, payout, or financial-data mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No expense, reimbursement, approval, payout, or financial-data mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="expense-management-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Receipt className="size-3.5" aria-hidden="true" />
                  Finance operations readiness
                </Badge>
                <Badge variant="secondary">No finance connection</Badge>
              </div>
              <h1
                id="expense-management-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Expense management readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful expense, receipt, approval, reimbursement,
                budget, reporting, permissions, and audit contracts without
                displaying invented financial data or initiating a payout.
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
                Expense service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No expense ledger, receipt store, approval policy, reimbursement
                provider, accounting system, budget source, or financial export
                is connected. This is a planning boundary, not a bookkeeping or
                payout console.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Expense management status"
        >
          <Card>
            <CardContent className="p-5">
              <Receipt
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No expenses loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No amounts, vendors, receipts, dates, currencies, categories, or
                attachments are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payouts available</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reimbursement, approval, payout, payment method, or
                settlement action can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <FileCheck2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">Controls required</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No policy, permission, cost center, audit, retention, or export
                state is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Expense readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              financial records, receipts, approvals, reimbursements, budgets,
              or accounting systems.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search expense readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search expense requirements"
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
                  No expense notes match “{query}”.
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
                A production expense workflow needs a defined ledger contract,
                currency and tax rules, receipt security, duplicate prevention,
                policy enforcement, role-based approvals, payout verification,
                reconciliation, retention and deletion controls, audit logging,
                and clear financial-data disclosures.
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
