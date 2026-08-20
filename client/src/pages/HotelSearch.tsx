import { useMemo, useState } from "react";
import {
  BedDouble,
  CheckCircle2,
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
    title: "Property and room inventory",
    area: "Catalog",
    description:
      "No hotel, room type, address, amenity, image, occupancy, rate, currency, or availability record is connected.",
  },
  {
    title: "Search and availability semantics",
    area: "Discovery",
    description:
      "No destination, dates, guests, filters, taxes, cancellation policy, ranking, freshness, or supplier source is evaluated.",
  },
  {
    title: "Guest and booking identity",
    area: "Privacy",
    description:
      "No traveler, guest, account, passport, payment method, loyalty profile, consent, or booking identity is loaded.",
  },
  {
    title: "Reservation and payment",
    area: "Transaction",
    description:
      "No reservation hold, confirmation, cancellation, payment authorization, refund, voucher, or supplier booking workflow exists.",
  },
  {
    title: "Travel safety and support",
    area: "Operations",
    description:
      "No accessibility detail, fraud control, incident support, supplier escalation, notification, or recovery contract is configured.",
  },
];
export default function HotelSearch() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Hotel Search is unavailable locally. No property, rate, availability, guest, booking, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No property, rate, guest, booking, payment, or reservation record was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="hotel-search-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BedDouble className="size-3.5" aria-hidden="true" />{" "}
                  Hospitality readiness
                </Badge>
                <Badge variant="secondary">No travel service</Badge>
              </div>
              <h1
                id="hotel-search-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Hotel Search readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the inventory, availability, guest-privacy, payment,
                reservation, and travel-support contracts required for
                trustworthy hotel search without implying that rooms, rates, or
                bookings exist.
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
                Travel service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No property inventory, supplier source, live availability, guest
                privacy boundary, payment processor, reservation system, or
                support process is connected. This is a readiness workspace, not
                a booking engine.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BedDouble
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No inventory</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No property, room, rate, amenity, occupancy, currency, or
                availability record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No guest scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No traveler, payment, identity, loyalty profile, consent, or
                booking context is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No booking actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reservation, confirmation, cancellation, payment, refund,
                voucher, or supplier action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Hotel-search governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              queries inventory, calculates rates, holds a room, charges a
              payment method, or saves a reservation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search hotel readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter hospitality requirements"
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
                  No hotel notes match “{query}”.
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
                A production hotel search needs supplier contracts, inventory
                and rate freshness, tax and cancellation semantics, guest
                privacy, accessibility and fraud controls, payment
                authorization, reservation state, refunds, support,
                observability, and tested recovery. No booking claim is made
                here.
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
