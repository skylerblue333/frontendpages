import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  DollarSign,
  Search,
  ShieldCheck,
  WalletCards,
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

type FundraisingBoundary = { title: string; area: string; description: string };
const boundaries: readonly FundraisingBoundary[] = [
  {
    title: "Campaign ownership and beneficiary verification",
    area: "Trust",
    description:
      "No campaign, organizer, beneficiary, identity verification, consent record, eligibility rule, or ownership scope is loaded.",
  },
  {
    title: "Donations, custody, and payment settlement",
    area: "Payments",
    description:
      "No donation amount, donor record, payment processor, wallet, custody boundary, transaction status, receipt, refund, or settlement is connected.",
  },
  {
    title: "Restricted funds and disbursement approval",
    area: "Controls",
    description:
      "No restricted-fund policy, approval chain, payout destination, dual control, disbursement record, reconciliation, or exception workflow exists.",
  },
  {
    title: "Fraud, tax, legal, and reporting safeguards",
    area: "Governance",
    description:
      "No fraud signal, chargeback state, tax treatment, legal review, retention policy, disclosure, audit report, or regulator-facing workflow is available.",
  },
];

export default function FundraiserTools() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Fundraiser tools are unavailable locally. No campaigns, donations, payment custody, balances, disbursements, or financial reports were started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No campaigns, donations, payment custody, balances, disbursements, or financial reports were started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="fundraiser-tools-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <DollarSign className="size-3.5" aria-hidden="true" />
                  Fundraising readiness
                </Badge>
                <Badge variant="secondary">No payment service</Badge>
              </div>
              <h1
                id="fundraiser-tools-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Fundraiser tools readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review campaign, beneficiary, payment, custody, disbursement,
                fraud, tax, and reporting contracts without presenting
                fabricated financial activity.
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
                Fundraising service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No campaign store, beneficiary verification, payment processor,
                wallet custody, disbursement controls, fraud monitoring, legal
                review, or audit stream is connected. This is a planning
                boundary, not a donation or payout tool.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Fundraising status"
        >
          <Card>
            <CardContent className="p-5">
              <ClipboardCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No campaign loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No organizer, beneficiary, verification, consent, eligibility,
                campaign, or ownership scope is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No payment flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No donation amount, donor record, processor, wallet, custody,
                transaction, receipt, refund, or settlement can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No financial action</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No balance, restricted fund, approval, payout, disbursement,
                report, or financial result exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Fundraising-readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              campaigns, donor data, payments, wallets, balances, or financial
              reports.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search fundraising readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search fundraising requirements"
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
                  No fundraising notes match “{query}”.
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
                A production fundraising tool needs verified campaign ownership
                and beneficiaries, compliant payment custody, donor consent,
                refund and chargeback handling, restricted-fund controls, dual
                approval, independently reconciled reporting, fraud controls,
                tax and legal review, and audit-safe recovery.
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
