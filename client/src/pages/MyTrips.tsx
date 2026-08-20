import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  FileSearch,
  LockKeyhole,
  MapPinned,
  Search,
  ShieldCheck,
  TicketCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Itinerary and booking provenance",
    area: "Bookings",
    description:
      "No trip, itinerary, traveler, booking reference, provider, route, date, accommodation, transport, or status record is connected.",
  },
  {
    title: "Authorization, payment, and settlement",
    area: "Commerce",
    description:
      "No account, traveler consent, payment provider, currency, price, invoice, confirmation, refund, cancellation, or settlement state is verified.",
  },
  {
    title: "Traveler privacy and sensitive details",
    area: "Privacy",
    description:
      "No identity document, contact, loyalty, accessibility need, companion, location, sharing, retention, or deletion rule is available.",
  },
  {
    title: "Safety, changes, and disruptions",
    area: "Safety",
    description:
      "No provider alert, delay, cancellation, rebooking, emergency contact, destination advisory, incident, support case, or recovery workflow exists.",
  },
  {
    title: "Accessibility and traveler actions",
    area: "UX",
    description:
      "No keyboard path, screen-reader label, timezone handling, offline itinerary, loading, retry, calendar export, share, or audit behavior is tested.",
  },
];
export default function MyTrips() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "My trips is unavailable locally. No traveler, itinerary, booking, payment, location, companion, or travel record was loaded or saved."
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
      `${action} is unavailable locally. No traveler, itinerary, booking, payment, location, companion, cancellation, or travel-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="my-trips-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MapPinned className="size-3.5" aria-hidden="true" />{" "}
                  Travel-readiness workspace
                </Badge>
                <Badge variant="secondary">No trips connected</Badge>
              </div>
              <h1
                id="my-trips-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MyTrips readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review itinerary provenance, booking authorization, payment and
                settlement, traveler privacy, safety, disruption handling,
                accessibility, and recovery without implying that trips,
                bookings, locations, or traveler records exist.
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
                My trips is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No travel provider, booking service, traveler account, payment
                processor, itinerary store, location service, disruption feed,
                or persistence layer is connected. This workspace cannot book,
                cancel, rebook, notify, share, or claim a trip.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <CalendarDays
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No trip records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No trip, itinerary, route, date, accommodation, transport,
                booking reference, or traveler is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <TicketCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No booking state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No payment, price, confirmation, refund, cancellation,
                rebooking, disruption, or settlement state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No travel actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No search, book, cancel, rebook, share, export, notify, or
                travel-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Travel-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads a booking, exposes a location, opens checkout, changes an
              itinerary, sends a disruption alert, or saves traveler data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MyTrips readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter travel requirements"
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
                  No travel notes match “{query}”.
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
                Production travel requires authoritative itinerary and booking
                contracts, account-scoped traveler authorization, secure payment
                and refund handling, strict privacy for identity and location
                details, disruption and emergency support, accessible and
                offline itinerary views, timezone correctness, and auditable
                changes. No traveler, itinerary, booking, payment, location,
                companion, or travel record is claimed here.
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
