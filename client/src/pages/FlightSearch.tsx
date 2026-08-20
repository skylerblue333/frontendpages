import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Plane,
  Search,
  ShieldCheck,
  Ticket,
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

type FlightBoundary = { title: string; area: string; description: string };
const boundaries: readonly FlightBoundary[] = [
  {
    title: "Search inputs and availability",
    area: "Discovery",
    description:
      "No origin, destination, dates, passengers, cabin, airline, inventory source, schedule, or availability is loaded.",
  },
  {
    title: "Fares and itinerary rules",
    area: "Pricing",
    description:
      "No fare, currency, taxes, fees, baggage rule, fare family, layover, change rule, or price freshness is available.",
  },
  {
    title: "Passenger and booking",
    area: "Reservation",
    description:
      "No passenger identity, seat, itinerary hold, booking reference, payment method, ticket, or confirmation exists.",
  },
  {
    title: "Supplier and travel safety",
    area: "Governance",
    description:
      "No airline supplier, authorization, cancellation policy, disruption feed, privacy boundary, refund, or support workflow is connected.",
  },
];

export default function FlightSearch() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Flight search is unavailable locally. No itinerary lookup, fare quote, passenger record, booking, or purchase mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No itinerary lookup, fare quote, passenger record, booking, or purchase mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="flight-search-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Plane className="size-3.5" aria-hidden="true" />
                  Travel-search readiness
                </Badge>
                <Badge variant="secondary">No travel service</Badge>
              </div>
              <h1
                id="flight-search-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Flight search readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful search, availability, fare, passenger, booking,
                supplier, privacy, and support contracts without displaying a
                fabricated itinerary or accepting a booking.
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
                Flight search service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No airline supplier, schedule feed, availability source, fare
                engine, passenger scope, payment processor, booking channel, or
                cancellation support is connected. This is a planning boundary,
                not a booking surface.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Flight search status"
        >
          <Card>
            <CardContent className="p-5">
              <CalendarDays
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No availability loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No airports, dates, passengers, cabin, airline, schedule,
                inventory, or availability result is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Ticket className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No fare or itinerary</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No fare, currency, taxes, fees, baggage, layover, change rule,
                itinerary, or freshness marker is calculated.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No booking</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No passenger, seat, hold, reference, payment, ticket,
                confirmation, cancellation, or refund state exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Flight search readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              schedules, fares, availability, passenger data, bookings, or
              payments.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search flight search readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search travel requirements"
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
                  No travel notes match “{query}”.
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
                A production flight-search system needs authoritative supplier
                feeds, airport and schedule normalization, real-time
                availability, fare and currency controls, tax and baggage
                clarity, passenger privacy, booking and payment boundaries,
                ticketing confirmation, cancellation and refund semantics, and
                support for disruption states.
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
