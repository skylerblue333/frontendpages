import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type EventBoundary = { title: string; area: string; description: string };
const boundaries: readonly EventBoundary[] = [
  {
    title: "Event source and group scope",
    area: "Discovery",
    description:
      "No authenticated group, event catalog, organizer, venue, time zone, capacity, or freshness record is connected.",
  },
  {
    title: "Attendance and invitations",
    area: "Membership",
    description:
      "No attendee identity, membership, invitation, RSVP, waitlist, accessibility need, or approval scope is loaded.",
  },
  {
    title: "Schedule and delivery",
    area: "Reliability",
    description:
      "No calendar sync, reminder, notification, cancellation, check-in, or delivery state is available.",
  },
  {
    title: "Safety and moderation",
    area: "Governance",
    description:
      "No event policy, report, moderation queue, safety plan, conduct rule, escalation, or support workflow exists.",
  },
  {
    title: "Privacy and retention",
    area: "Safety",
    description:
      "No consent, location visibility, photo policy, retention, export, deletion, or audit boundary is configured.",
  },
  {
    title: "Event mutations",
    area: "Operations",
    description:
      "Create, edit, publish, RSVP, cancel, invite, check in, and notification operations have no backend contract.",
  },
];

export default function GroupEvents() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Group events are unavailable locally. No event, attendee, RSVP, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !normalized ||
        `${title} ${area} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No event, invitation, RSVP, check-in, or notification record was changed.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="group-events-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CalendarDays className="size-3.5" aria-hidden="true" />{" "}
                  Community events
                </Badge>
                <Badge variant="secondary">No events service</Badge>
              </div>
              <h1
                id="group-events-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Group Events readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the group scope, attendance, schedule, privacy, and
                safety contracts required for reliable community events without
                implying that events or attendees exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Group Events service status"
        >
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Group events service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated group scope, event catalog, organizer identity,
                attendance service, notification pipeline, safety policy, or
                persistence layer is connected. This is a readiness workspace,
                not a live event calendar.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Group Events status"
        >
          <Card>
            <CardContent className="p-5">
              <CalendarDays
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No event records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, group, organizer, venue, schedule, capacity, or
                freshness data is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No attendance scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No attendee, membership, invitation, RSVP, waitlist, or approval
                state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No live schedule</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reminder, cancellation, calendar sync, check-in,
                notification, or safety event exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Event-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              queries an event catalog, creates an event, sends an invitation,
              records an RSVP, or saves a schedule.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search group events readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter event requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(boundary => (
                <div
                  key={boundary.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{boundary.title}</h3>
                    <Badge variant="outline">{boundary.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {boundary.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${boundary.title}`)}
                  >
                    <LockKeyhole className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No event notes match “{query}”.
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
                A production event system needs authenticated group and
                organizer scope, event and attendance contracts, time-zone and
                calendar semantics, notifications and cancellation recovery,
                privacy and accessibility controls, moderation and safety
                operations, rate limits, observability, and tested check-in and
                RSVP workflows.
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
