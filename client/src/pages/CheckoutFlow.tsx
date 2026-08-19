import { useMemo, useState } from "react";
import {
  ArrowRightLeft,
  CreditCard,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  PackageCheck,
  Search,
  ShieldCheck,
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

type CheckoutFlowCapability = {
  title: string;
  description: string;
  icon: typeof ArrowRightLeft;
};

const checkoutFlowCapabilities: CheckoutFlowCapability[] = [
  {
    title: "Step and state contracts",
    description:
      "No typed step sequence, transition rules, cart snapshot, customer identity, shipping state, or resumable-session contract is connected.",
    icon: ArrowRightLeft,
  },
  {
    title: "Validation and consent",
    description:
      "Address validation, inventory recheck, pricing/tax recalculation, terms, consent, duplicate protection, and error recovery are unavailable.",
    icon: FileCheck2,
  },
  {
    title: "Payment and order transitions",
    description:
      "No provider authorization, token boundary, idempotency key, order state machine, webhook, reconciliation, or confirmation contract is configured.",
    icon: CreditCard,
  },
  {
    title: "Fulfillment and accessibility",
    description:
      "Shipping, cancellation, refunds, support, keyboard navigation, screen-reader step status, authorization, and audit evidence are not verified.",
    icon: PackageCheck,
  },
];

export default function CheckoutFlow() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      checkoutFlowCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="checkout-flow-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Commerce boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="checkout-flow-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Checkout flow readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe stepwise checkout contract without
                  pretending that a cart, address, payment, order, or
                  fulfillment transition is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load flow unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Checkout flow status"
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
                    Truthful flow state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No step, cart snapshot, address, shipping option, payment
                    authorization, order, webhook, or completion state is loaded
                    or advanced.
                  </CardDescription>
                </div>
                <KeyRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified checkout-flow service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define each step, transition guards,
                  inventory and price rechecks, shipping, payment authorization,
                  idempotent order creation, webhook reconciliation,
                  fulfillment, failure recovery, and accessible status messaging
                  before this route can advance.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable checkout flow actions"
              >
                {[
                  "Load flow",
                  "Continue to shipping",
                  "Continue to payment",
                  "Complete order",
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
                These safeguards must be verified before flow controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Typed step sequence, transition guards, cart snapshot, customer
                identity, shipping state, and resumable session.
              </p>
              <p>
                Address validation, inventory recheck, price/tax recalculation,
                terms, consent, duplicate protection, and recovery.
              </p>
              <p>
                Provider authorization, token boundary, idempotency, order state
                machine, webhooks, reconciliation, and confirmation.
              </p>
              <p>
                Shipping, cancellation, refunds, support, keyboard navigation,
                screen-reader step status, authorization, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Checkout flow capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load a flow, advance a step,
              recalculate totals, call payment providers, or persist an order.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search checkout flow capability notes"
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
