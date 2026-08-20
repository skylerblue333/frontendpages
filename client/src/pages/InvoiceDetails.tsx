import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileText,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Invoice identity and source",
    area: "Records",
    description:
      "No invoice number, issuer, customer, line item, quantity, currency, tax, total, date, payment term, or source record is connected.",
  },
  {
    title: "Authorization and privacy",
    area: "Access",
    description:
      "No account, customer, billing role, recipient, consent, sensitive financial data, retention, or access boundary is loaded.",
  },
  {
    title: "Payment and settlement state",
    area: "Money",
    description:
      "No payment method, authorization, transaction, balance, refund, credit, settlement, chargeback, or payment status is verified.",
  },
  {
    title: "Tax and accounting treatment",
    area: "Compliance",
    description:
      "No tax jurisdiction, tax rate, exemption, accounting classification, ledger entry, reconciliation, or filing record exists.",
  },
  {
    title: "Delivery and dispute workflow",
    area: "Operations",
    description:
      "No PDF, email, download, reminder, dispute, adjustment, approval, audit, support, or recovery workflow is available.",
  },
];
export default function InvoiceDetails() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Invoice Details is unavailable locally. No invoice, customer, payment, tax, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No invoice, payment, tax record, download, dispute, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="invoice-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileText className="size-3.5" aria-hidden="true" />{" "}
                  Billing-record readiness
                </Badge>
                <Badge variant="secondary">No billing service</Badge>
              </div>
              <h1
                id="invoice-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Invoice Details readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review invoice, authorization, payment, tax, delivery, and
                dispute contracts required for trustworthy billing records
                without implying that invoices, balances, or payments exist.
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
                Billing service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No invoice source, customer account, payment processor, tax
                system, document delivery path, or persistence layer is
                connected. This is a readiness workspace, not a billing or
                payment interface.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FileText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No invoice records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No number, issuer, customer, line item, currency, tax, total,
                date, or payment term is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No account scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No billing role, recipient, account, consent, sensitive
                financial data, or access boundary exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payment actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No payment, refund, credit, settlement, download, reminder,
                dispute, or adjustment action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Billing-record governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              an invoice, processes a payment, calculates tax, downloads a
              document, or saves a billing action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Invoice Details readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter billing-record requirements"
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
                  No billing notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production billing-record system needs invoice schemas,
                customer authorization, payment and settlement contracts, tax
                and accounting treatment, document delivery, disputes, refunds,
                auditability, privacy, reconciliation, support, and tested
                recovery. No invoice or payment state is claimed here.
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
