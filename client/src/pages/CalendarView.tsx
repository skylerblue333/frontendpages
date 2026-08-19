import { useMemo, useState } from "react";
import {
  CalendarDays,
  Eye,
  Filter,
  Globe2,
  Keyboard,
  LockKeyhole,
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

type ViewCapability = {
  title: string;
  description: string;
  icon: typeof CalendarDays;
};

const viewCapabilities: ViewCapability[] = [
  {
    title: "Date and timezone view",
    description:
      "Month/week/day navigation, locale, timezone, daylight-saving, and date-range semantics are not connected.",
    icon: CalendarDays,
  },
  {
    title: "Event rendering",
    description:
      "No event data, visibility rules, recurrence expansion, loading, empty, or error states are available to render.",
    icon: Eye,
  },
  {
    title: "Filtering and density",
    description:
      "Category filters, search, pagination, overlap handling, and responsive density rules are not configured.",
    icon: Filter,
  },
  {
    title: "Accessibility and access",
    description:
      "Keyboard navigation, screen-reader announcements, private-event handling, and authorization are not verified.",
    icon: Keyboard,
  },
];

export default function CalendarView() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      viewCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="calendar-view-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  View boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="calendar-view-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Calendar view readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents an accessible calendar-view contract
                  without pretending that dates, events, filters, or navigation
                  state are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Open calendar view unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Calendar view status"
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
                    Truthful view state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No date range, event, filter, navigation state, or rendered
                    calendar data is loaded.
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
                  No verified calendar-view service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define date navigation, timezone, event
                  visibility, recurrence, filtering, responsive layout, keyboard
                  behavior, loading/error states, and authorization before this
                  route can render a calendar view.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable calendar view actions"
              >
                {["Previous period", "Today", "Next period", "Change view"].map(
                  label => (
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
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before view controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Locale, timezone, daylight-saving, range, recurrence, and
                accessible date-label semantics.
              </p>
              <p>
                Private-event authorization, redaction, filtering, overlap, and
                responsive rendering rules.
              </p>
              <p>
                Keyboard focus, screen-reader announcements, loading, empty,
                error, and retry states.
              </p>
              <p>
                Deterministic data fetching with bounded queries, cache
                correctness, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Calendar view capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load events, navigate dates,
              reveal private data, or persist preferences.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search calendar view capability notes"
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
