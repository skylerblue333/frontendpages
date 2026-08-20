import { useMemo, useState } from "react";
import {
  FileWarning,
  Landmark,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Lender, borrower, and authorization",
    area: "Access",
    description:
      "No authenticated lender, borrower, counterparty, jurisdiction, suitability, consent, role, or ownership record is connected.",
  },
  {
    title: "Offer, principal, and repayment terms",
    area: "Terms",
    description:
      "No loan offer, principal, currency, interest rate, APR, duration, schedule, fee, collateral, maturity, or repayment record is loaded.",
  },
  {
    title: "Collateral and custody",
    area: "Assets",
    description:
      "No collateral asset, valuation, custody provider, wallet, lien, liquidation rule, oracle, signature, or transaction state is verified.",
  },
  {
    title: "Risk, compliance, and disclosures",
    area: "Governance",
    description:
      "No credit or protocol risk method, KYC or AML control, suitability review, disclosure, consumer protection, privacy, or dispute workflow is available.",
  },
  {
    title: "Settlement and recovery",
    area: "Operations",
    description:
      "No funding, repayment, interest accrual, default, liquidation, reconciliation, idempotency, audit event, incident, or recovery evidence exists.",
  },
];
export default function LendingBorrow() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LendingBorrow is unavailable locally. No lender, borrower, offer, loan, collateral, rate, balance, or transaction was loaded or saved."
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
      `${action} is unavailable locally. No lender, borrower, offer, principal, rate, collateral, repayment, liquidation, or financial mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="lending-borrow-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Landmark className="size-3.5" aria-hidden="true" />{" "}
                  Lending-risk readiness
                </Badge>
                <Badge variant="secondary">No lending service</Badge>
              </div>
              <h1
                id="lending-borrow-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Lending &amp; Borrow readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the counterparty, terms, collateral, custody, risk,
                compliance, settlement, and recovery contracts required for safe
                lending operations without presenting fabricated offers, rates,
                balances, collateral, or loan outcomes.
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
                Lending service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No lender or borrower account, offer engine, loan ledger,
                collateral custody, pricing oracle, compliance control,
                settlement rail, or persistence layer is connected. This is a
                readiness workspace, not a lending or borrowing console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No lending records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No lender, borrower, offer, principal, currency, rate, schedule,
                collateral, or repayment record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No custody or settlement</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No wallet, custody provider, signature, funding, repayment,
                liquidation, balance, or transaction state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No lending actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No offer, borrow, lend, fund, repay, refinance, liquidate,
                dispute, or financial mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Lending-risk governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads financial data, creates an offer, calculates a rate,
              transfers collateral, records repayment, or saves a lending
              mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Lending Borrow readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter lending-risk requirements"
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
                  No lending-risk notes match “{query}”.
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
                A production lending system needs verified counterparty
                ownership, enforceable terms, collateral and custody controls,
                validated pricing and risk methods, compliance and disclosures,
                secure settlement, idempotency, reconciliation, auditability,
                default and liquidation handling, dispute support, and tested
                recovery. No offer, loan, collateral, balance, or transaction
                state is claimed here.
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
