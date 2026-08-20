import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CircleDollarSign,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  ReceiptText,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Revenue and entitlement provenance",
    area: "Revenue",
    description:
      "No product, creator, subscriber, entitlement, ad impression, sponsorship, tip, subscription, revenue source, or timestamp is connected.",
  },
  {
    title: "Payments and checkout integrity",
    area: "Payments",
    description:
      "No payment provider, customer, currency, tax, invoice, checkout session, authorization, capture, failure, chargeback, or refund state is available.",
  },
  {
    title: "Fees, payouts, and reconciliation",
    area: "Accounting",
    description:
      "No platform fee, creator share, payout threshold, bank or wallet destination, settlement ledger, reconciliation, or transaction hash is verified.",
  },
  {
    title: "Privacy, consent, and tax",
    area: "Governance",
    description:
      "No consent purpose, financial-data boundary, retention, deletion, tax form, jurisdiction, withholding, or access-audit policy exists.",
  },
  {
    title: "Fraud, disputes, and operational recovery",
    area: "Safety",
    description:
      "No fraud signal, duplicate charge guard, dispute, support case, incident, retry, reversal, suspension, or recoverable audit trail is configured.",
  },
];
export default function Monetization() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Monetization is unavailable locally. No product, entitlement, payment, revenue, fee, payout, tax, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No product, entitlement, payment, revenue, fee, payout, tax, refund, dispute, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="monetization-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CircleDollarSign className="size-3.5" aria-hidden="true" />{" "}
                  Monetization-readiness workspace
                </Badge>
                <Badge variant="secondary">No revenue connected</Badge>
              </div>
              <h1
                id="monetization-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Monetization readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review revenue provenance, entitlements, payment integrity,
                fees, payouts, tax, privacy, refunds, disputes, fraud controls,
                and recovery without implying that sales, revenue, transactions,
                or financial outcomes exist.
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
                Monetization is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No revenue source, entitlement service, payment processor,
                checkout flow, payout ledger, tax system, privacy boundary,
                fraud control, dispute workflow, or persistence layer is
                connected. This workspace cannot charge, sell, pay out, refund,
                or claim revenue.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ReceiptText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No revenue records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No product, subscriber, entitlement, ad, sponsorship, tip,
                subscription, sales, or revenue record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CircleDollarSign
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payment state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No payment, invoice, fee, payout, tax, settlement, refund,
                chargeback, or transaction state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No monetization actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No charge, subscribe, grant, revoke, payout, refund, dispute,
                export, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Monetization-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens checkout, creates an entitlement, processes a payment,
              calculates revenue, issues a refund, or saves financial data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search monetization readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter monetization requirements"
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
                  No monetization notes match “{query}”.
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
                Production monetization requires authoritative revenue and
                entitlement sources, payment and checkout integrity, fee and
                payout reconciliation, tax and jurisdiction handling, financial
                privacy, fraud and duplicate-charge controls, disputes and
                refunds, support, and immutable audit history. No product,
                entitlement, payment, revenue, payout, tax, refund, or financial
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
