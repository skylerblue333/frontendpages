import { useMemo, useState } from "react";
import {
  CalendarPlus,
  CheckCircle2,
  ClipboardCheck,
  Search,
  ShieldCheck,
  UsersRound,
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

type CreationBoundary = { title: string; description: string };
const boundaries: readonly CreationBoundary[] = [
  {
    title: "Identity and ownership",
    description:
      "No organizer account, event owner, venue, event identifier, publishing role, or ownership record is connected.",
  },
  {
    title: "Schedule and capacity",
    description:
      "No title, date, timezone, recurrence, capacity, ticketing, waitlist, or conflict rule is persisted.",
  },
  {
    title: "People and accessibility",
    description:
      "No attendee list, invitation, consent, accessibility accommodation, moderation, or notification state is loaded.",
  },
  {
    title: "Publication and lifecycle",
    description:
      "No draft, approval, publish, edit, cancel, reminder, external sync, audit, or delete operation is configured.",
  },
];

export default function EventCreation() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Event creation is unavailable locally. No draft, event, attendee, invitation, reminder, or publication mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No draft, event, attendee, invitation, reminder, or publication mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="event-creation-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CalendarPlus className="size-3.5" aria-hidden="true" />
                  Creation readiness
                </Badge>
                <Badge variant="secondary">No event service</Badge>
              </div>
              <h1
                id="event-creation-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Event creation readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful event identity, scheduling, capacity,
                accessibility, consent, moderation, and publication contracts
                without creating an event or contacting attendees.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Event service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No organizer, event store, venue, capacity system, attendee
                directory, reminder channel, moderation queue, or publication
                workflow is connected. This is a planning boundary, not an event
                composer.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <ClipboardCheck
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No draft persisted</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No title, description, schedule, venue, organizer, capacity, or
              event identifier is saved.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <UsersRound
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No people notified</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No attendee, invitation, consent, accessibility, reminder, or
              moderation state is available.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <CalendarPlus
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No publication action</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No approval, publish, edit, cancel, sync, audit, or delete
              operation can run.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Event creation readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects event
              storage, attendees, invitations, reminders, or publication
              systems.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search event creation readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search event creation requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <h3 className="font-semibold">{title}</h3>
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
                  No event creation notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production event creation needs authenticated ownership,
                date/timezone correctness, capacity semantics, accessibility
                review, attendee consent, moderation, approval, notification
                delivery, safe lifecycle controls, audit logging, and
                cancellation recovery tests.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
