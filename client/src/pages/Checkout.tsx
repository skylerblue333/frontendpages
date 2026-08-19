import { useMemo, useState } from "react";
import {
  ClipboardCheck,
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

type CheckoutCapability = {
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
};

const checkoutCapabilities: CheckoutCapability[] = [
  {
    title: "Cart and inventory integrity",
    description:
      "No authenticated cart, product, inventory hold, availability, quantity, or price snapshot is connected.",
    icon: ClipboardCheck,
  },
  {
    title: "Pricing, tax, and consent",
    description:
      "Currency, discounts, tax, fees, shipping, terms, billing address, consent, and final amount semantics are unavailable.",
    icon: FileCheck2,
  },
  {
    title: "Payment and order lifecycle",
    description:
      "No payment provider, authorization, sensitive-data boundary, idempotency key, order state, webhook, or reconciliation contract is configured.",
    icon: CreditCard,
  },
  {
    title: "Fulfillment and recovery",
    description:
      "Fulfillment, cancellation, refunds, disputes, failures, support, audit logs, and account permissions are not verified.",
    icon: PackageCheck,
  },
];

export default function Checkout() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      checkoutCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="checkout-title"
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
                  id="checkout-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Checkout readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe checkout operations without
                  pretending that a cart, price, payment, order, fulfillment, or
                  refund state is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Review checkout unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Checkout status"
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
                    Truthful checkout state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No cart, item, inventory hold, total, payment, order,
                    webhook, fulfillment, or refund state is loaded or
                    persisted.
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
                  No verified checkout service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define cart ownership, inventory, price
                  and tax calculation, consent, payment authorization,
                  idempotent order creation, webhook reconciliation,
                  fulfillment, cancellation, refunds, and audit evidence before
                  this route can accept payment.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable checkout actions"
              >
                {[
                  "Load cart",
                  "Review total",
                  "Choose payment",
                  "Place order",
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
                These safeguards must be verified before checkout controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Authenticated cart, product, inventory hold, availability,
                quantity, and immutable price snapshot.
              </p>
              <p>
                Currency, discounts, tax, fees, shipping, billing address,
                consent, terms, and final amount semantics.
              </p>
              <p>
                Provider authorization, sensitive-data boundary, idempotency,
                order states, webhooks, and reconciliation.
              </p>
              <p>
                Fulfillment, cancellation, refunds, disputes, failure recovery,
                support, audit logs, and permissions.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Checkout capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read a cart, calculate totals,
              call a payment provider, place an order, or persist checkout
              state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search checkout capability notes"
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
