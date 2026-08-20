import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  FileCheck2,
  Globe2,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type DateCapability = {
  title: string;
  description: string;
  icon: typeof CalendarDays;
};

const dateCapabilities: DateCapability[] = [
  {
    title: "Calendar and locale semantics",
    description:
      "No calendar system, locale, language, numbering, week start, holiday rule, display format, or accessible label contract is configured.",
    icon: CalendarDays,
  },
  {
    title: "Timezone and precision",
    description:
      "No timezone, daylight-saving rule, offset, date-only versus instant semantic, precision, clock source, or normalization policy is connected.",
    icon: Globe2,
  },
  {
    title: "Validation and range rules",
    description:
      "No minimum, maximum, disabled dates, required state, range relation, error message, parsing rule, or invalid-input recovery is verified.",
    icon: SlidersHorizontal,
  },
  {
    title: "Persistence and audit",
    description:
      "No form identity, authorization, saved value, submission, notification, audit event, retention policy, or downstream workflow is configured.",
    icon: FileCheck2,
  },
];

export default function DateInputForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      dateCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="date-input-form-title"
    >
      <div data-ui-polish="batch-185" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Date-input boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="date-input-form-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Date input form readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents an inclusive, deterministic date-entry
                  contract without pretending that dates, timezones, validation,
                  submissions, or saved records are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load date service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Date input form status"
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
                    Truthful date-input state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No form, date value, locale, timezone, validation result,
                    submission, notification, or saved record is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <Clock3 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified date-input service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define date-only and instant semantics,
                  timezone and daylight-saving behavior, locale and calendar
                  rules, parsing and validation, range constraints, accessible
                  errors, authorization, persistence, and audit evidence before
                  this route can submit a value.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable date-input actions"
              >
                {[
                  "Load form",
                  "Pick date",
                  "Validate value",
                  "Submit date",
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
                These safeguards must be verified before date-input controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Calendar system, locale, language, numbering, week start,
                holidays, display format, and accessible labels.
              </p>
              <p>
                Timezone, daylight saving, offset, date-only versus instant
                meaning, precision, clock source, and normalization.
              </p>
              <p>
                Minimum and maximum dates, disabled days, required state,
                ranges, parsing, errors, and recovery.
              </p>
              <p>
                Form identity, authorization, saved values, submission,
                notifications, audit, retention, and downstream workflow.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Date-input capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not open a calendar, parse a date,
              access a clock, validate a value, submit a form, or persist a
              record.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search date-input capability notes"
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
