import { useMemo, useState } from "react";
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
import {
  BellRing,
  CreditCard,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRoundCheck,
  Webhook,
} from "lucide-react";

type SubscriptionCapability = {
  title: string;
  description: string;
  icon: typeof CreditCard;
};

const subscriptionCapabilities: SubscriptionCapability[] = [
  {
    title: "Plans, pricing, and entitlements",
    description:
      "No product, plan, currency, price, trial, renewal, entitlement, feature gate, account scope, or catalog version is connected.",
    icon: CreditCard,
  },
  {
    title: "Payment authorization and checkout",
    description:
      "No customer, payment method, checkout session, provider token, authorization, charge, decline, or receipt is available.",
    icon: UserRoundCheck,
  },
  {
    title: "Lifecycle and webhooks",
    description:
      "No subscription state, activation, pause, cancellation, upgrade, downgrade, webhook signature, retry, or idempotency record is verified.",
    icon: Webhook,
  },
  {
    title: "Refunds, tax, privacy, and audit",
    description:
      "No refund, proration, tax calculation, invoice, retention rule, consent, notification, reconciliation, or billing audit event is configured.",
    icon: FileCheck2,
  },
];

export default function DatingSubscription() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      subscriptionCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="dating-subscription-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Billing boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="dating-subscription-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Dating subscription readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents an account-scoped subscription contract
                  without pretending that plans, prices, entitlements, payments,
                  renewals, or premium access are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load billing service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Dating subscription status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful subscription state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No account, plan, price, entitlement, payment, subscription,
                    renewal, invoice, or saved billing record is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <CreditCard
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified subscription-billing service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish account scope, plan and price
                  provenance, payment authorization, checkout, signed webhooks,
                  idempotent lifecycle changes, cancellation, refunds, tax,
                  privacy, notifications, and reconciliation before this route
                  can change access or charge an account.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable subscription actions"
              >
                {[
                  "Load plans",
                  "Start checkout",
                  "Change plan",
                  "Cancel subscription",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before subscription controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Products, plans, currencies, prices, trials, renewals,
                entitlements, feature gates, account scope, and catalog
                versions.
              </p>
              <p>
                Customers, payment methods, provider tokens, authorization,
                checkout, charges, declines, and receipts.
              </p>
              <p>
                Subscription lifecycle, activations, pauses, cancellations, plan
                changes, webhook signatures, retries, and idempotency.
              </p>
              <p>
                Refunds, proration, taxes, invoices, retention, consent,
                notifications, reconciliation, and billing audit events.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Subscription capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query plans, show prices, access
              payment methods, start checkout, change entitlements, send
              notifications, or persist billing state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search subscription capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
