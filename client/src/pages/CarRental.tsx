import { useMemo, useState } from "react";
import {
  CalendarClock,
  CarFront,
  CreditCard,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
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

type RentalCapability = {
  title: string;
  description: string;
  icon: typeof CarFront;
};

const rentalCapabilities: RentalCapability[] = [
  {
    title: "Inventory and availability",
    description:
      "Vehicle inventory, location, maintenance, availability windows, holds, and fleet ownership are not connected.",
    icon: CarFront,
  },
  {
    title: "Pricing and eligibility",
    description:
      "Rates, taxes, fees, deposits, currency, driver eligibility, insurance, mileage, and fuel rules are unavailable.",
    icon: FileCheck2,
  },
  {
    title: "Reservation lifecycle",
    description:
      "Quote expiry, idempotent reservation, pickup, return, extensions, status reconciliation, and support workflows are not configured.",
    icon: CalendarClock,
  },
  {
    title: "Payment and recovery",
    description:
      "Payment authorization, sensitive-data handling, cancellation, refunds, disputes, audit logs, and failure recovery are not verified.",
    icon: CreditCard,
  },
];

export default function CarRental() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      rentalCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="car-rental-title"
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
                  id="car-rental-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Car rental readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe rental operations without pretending
                  that vehicles, availability, pricing, reservations, payments,
                  or booking confirmations are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Search vehicles unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Car rental status"
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
                    Truthful rental state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No vehicle, availability, quote, reservation, payment,
                    pickup, return, or booking status is loaded or persisted.
                  </CardDescription>
                </div>
                <CarFront
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified car-rental service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define fleet inventory, availability,
                  pricing, driver eligibility, insurance, payment, reservation
                  lifecycle, pickup/return state, cancellation, refunds, and
                  audit evidence before this route can offer or confirm a
                  rental.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable rental actions"
              >
                {[
                  "Choose dates",
                  "Compare vehicles",
                  "Get a quote",
                  "Reserve vehicle",
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
                These safeguards must be verified before rental controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Fleet ownership, vehicle location, maintenance, availability,
                holds, and supplier contracts.
              </p>
              <p>
                Rates, tax, fees, deposit, currency, driver eligibility,
                insurance, mileage, fuel, and quote expiry.
              </p>
              <p>
                Idempotent reservation, pickup, return, extension, cancellation,
                support, and status reconciliation.
              </p>
              <p>
                Payment authorization, tokenized sensitive data, refunds,
                disputes, redacted logs, and recovery.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Car rental capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read fleet data, calculate a
              quote, authorize payment, or create a reservation.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search car rental capability notes"
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
