import { useMemo, useState } from "react";
import {
  CreditCard,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Settings2,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Provider, account, and onboarding provenance",
    area: "Setup",
    description:
      "No customer, merchant account, provider, region, currency, business profile, onboarding stage, or configured-at timestamp is connected.",
  },
  {
    title: "Verification, consent, and permissions",
    area: "Authorization",
    description:
      "No identity, business, bank, payment-method, account, consent, role, approval, or verification status is available.",
  },
  {
    title: "Tokenization and secret safety",
    area: "Security",
    description:
      "No payment credential, tokenization service, PCI boundary, encryption, secure transport, secret store, or webhook signing key is verified.",
  },
  {
    title: "Settlement, reconciliation, and recovery",
    area: "Controls",
    description:
      "No test or live mode, intent, transaction, fee, payout, refund, dispute, balance impact, webhook, audit event, or recovery workflow exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, configure, verify, authorize, test, activate, disable, export, or payment or financial-data mutation is connected or persisted.",
  },
];
export default function PaymentSetup() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Payment setup is unavailable locally. No customer, provider, account, verification, token, payment method, transaction, fee, payout, refund, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No provider, account, verification, token, payment, transaction, fee, payout, refund, privacy, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="payment-setup-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Settings2 className="size-3.5" aria-hidden="true" />{" "}
                  Payment-onboarding readiness workspace
                </Badge>
                <Badge variant="secondary">No setup data</Badge>
              </div>
              <h1
                id="payment-setup-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PaymentSetup readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review provider and account onboarding, verification, consent,
                permissions, tokenization, secret safety, test and live modes,
                settlement, reconciliation, and safe activation boundaries
                without implying that a payment setup or financial record
                exists.
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
                Payment setup is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider, merchant or customer account, identity or business
                verification, tokenization service, consent workflow, test or
                live mode, settlement source, or persistence layer is connected.
                This workspace cannot connect, configure, verify, authorize,
                test, activate, disable, export, or claim payment readiness.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Settings2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No setup data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No customer, merchant, provider, account, region, currency,
                profile, onboarding stage, or configuration record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CreditCard
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No verification state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, business, bank, method, consent, role, approval,
                tokenization, PCI, or verification state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No setup actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, configure, verify, authorize, test, activate,
                disable, export, or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Payment-setup governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects a provider, handles credentials, changes setup, or saves
              financial records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PaymentSetup readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter setup requirements"
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
                  No setup requirements match “{query}”.
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
                Production payment setup requires verified provider and account
                ownership, identity and business controls, explicit consent and
                permissions, tokenization and PCI boundaries, secure secrets and
                webhooks, clear test and live separation, settlement and
                reconciliation, refund and dispute workflows, audit history,
                monitoring, and non-advisory financial disclosures. No setup,
                payment, transaction, fee, payout, refund, or financial record
                is claimed here.
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
