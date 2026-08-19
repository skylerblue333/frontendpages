import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LockKeyhole,
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

type CalendarCapability = {
  title: string;
  description: string;
  icon: typeof CalendarDays;
};

const calendarCapabilities: CalendarCapability[] = [
  {
    title: "Event model",
    description:
      "Event fields, ownership, timezone, recurrence, visibility, and versioning are not connected to a persistence contract.",
    icon: CalendarDays,
  },
  {
    title: "Availability and conflicts",
    description:
      "Working hours, conflict detection, attendee availability, and rescheduling semantics are not configured.",
    icon: Clock3,
  },
  {
    title: "Invitations and notifications",
    description:
      "Invitation delivery, reminders, responses, cancellation, and retry states require a verified provider.",
    icon: UsersRound,
  },
  {
    title: "Authorization and audit",
    description:
      "Calendar access, private-event handling, sharing, export, deletion, and audit evidence are not verified.",
    icon: ShieldCheck,
  },
];

export default function Calendar() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      calendarCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="calendar-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Scheduling boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="calendar-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Calendar readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe scheduling workflow without
                  pretending that events, invitations, availability, reminders,
                  or successful updates exist.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Create event unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Calendar status"
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
                    Truthful calendar state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No event, attendee, invitation, availability, reminder, or
                    update is loaded or persisted.
                  </CardDescription>
                </div>
                <CalendarDays
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified scheduling service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define event semantics, timezone and
                  recurrence rules, access control, conflict handling,
                  invitations, notifications, cancellation, retries, and audit
                  evidence before this route can manage a calendar.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable calendar actions"
              >
                {[
                  "Create event",
                  "Invite attendees",
                  "Check availability",
                  "Export calendar",
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
                These safeguards must be verified before calendar controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Timezone, locale, recurrence, daylight-saving, version, and
                event ownership semantics.
              </p>
              <p>
                Private-event access, attendee consent, conflict detection,
                rescheduling, and cancellation.
              </p>
              <p>
                Invitation and reminder providers with visible delivery,
                failure, retry, and opt-out states.
              </p>
              <p>
                Authorization, export/deletion behavior, rate limits, redacted
                logs, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Calendar capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read calendars, contact
              attendees, send invitations, or persist events.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search calendar capability notes"
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
