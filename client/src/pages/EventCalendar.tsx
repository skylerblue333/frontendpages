import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
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

type CalendarBoundary = { title: string; description: string };
const boundaries: readonly CalendarBoundary[] = [
  {
    title: "Event identity and ownership",
    description:
      "No calendar account, organizer, event identifier, attendee list, venue, or ownership record is connected.",
  },
  {
    title: "Date, timezone, and recurrence",
    description:
      "No date, timezone, locale, recurrence rule, daylight-saving policy, or conflict state is available.",
  },
  {
    title: "Attendance and reminders",
    description:
      "No RSVP, capacity, invitation, reminder, notification, or attendance status is loaded.",
  },
  {
    title: "Permissions and synchronization",
    description:
      "No calendar permission, external sync, webhook, audit trail, or create/update/delete operation is configured.",
  },
];

export default function EventCalendar() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Event calendar is unavailable locally. No event, attendee, date, reminder, or calendar mutation was queried or fabricated."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, description }) =>
      `${title} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No event, attendee, date, reminder, or calendar mutation was queried or fabricated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="event-calendar-title"
    >
      <div data-ui-polish="batch-188" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  Calendar readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <h1
                id="event-calendar-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Event calendar readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful event, timezone, recurrence, attendance,
                reminder, permission, and synchronization contracts without
                claiming calendar access or event data.
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
                Calendar provider is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No calendar account, organizer, event record, attendee list,
                timezone policy, reminder channel, permission, or external sync
                is connected. This is a planning boundary, not a live calendar.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <CalendarDays
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No events loaded</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No event, organizer, venue, identifier, date, or ownership record
              is presented.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <UsersRound
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">No attendance state</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No attendee, RSVP, capacity, invitation, reminder, or attendance
              status is available.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <Clock3 className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">No time policy</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No timezone, locale, recurrence, daylight-saving, or conflict
              state is connected.
            </p>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Calendar readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              events, attendees, dates, reminders, permissions, or calendar
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search calendar readiness notes"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search calendar requirements"
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
                  No calendar notes match “{query}”.
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
                Production calendars need authenticated ownership, permission
                scopes, timezone correctness, recurrence tests, conflict
                handling, attendee privacy, reminder delivery, synchronization,
                audit logging, and safe create/update/delete workflows.
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
