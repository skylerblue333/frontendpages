import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  Focus,
  Globe2,
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

type PickerCapability = {
  title: string;
  description: string;
  icon: typeof CalendarDays;
};

const pickerCapabilities: PickerCapability[] = [
  {
    title: "Dialog and focus semantics",
    description:
      "No open state, trigger identity, focus return target, focus trap, keyboard escape rule, modal labeling, or screen-reader announcement contract is configured.",
    icon: Focus,
  },
  {
    title: "Calendar and timezone behavior",
    description:
      "No calendar system, locale, timezone, daylight-saving rule, date-only versus instant meaning, month navigation, or clock source is connected.",
    icon: Globe2,
  },
  {
    title: "Selection and validation",
    description:
      "No selected date, range, minimum, maximum, disabled day, required state, parse result, invalid message, confirm action, or cancel outcome is verified.",
    icon: CheckCircle2,
  },
  {
    title: "Persistence and audit",
    description:
      "No form identity, authorization, saved value, submission, notification, audit event, retention policy, or downstream workflow is configured.",
    icon: FileCheck2,
  },
];

export default function DatePickerDialog() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      pickerCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="date-picker-dialog-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Picker-dialog boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="date-picker-dialog-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Date picker dialog readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a predictable, accessible date-picker
                  dialog without pretending that dialogs, focus, calendars,
                  selections, validation, or saved values are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load picker service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Date picker dialog status"
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
                    Truthful picker-dialog state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No dialog, trigger, focus state, calendar, selected date,
                    validation result, submission, notification, or saved record
                    is loaded or persisted.
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
                  No verified date-picker service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define modal semantics, focus management,
                  keyboard behavior, calendar and timezone rules, selection and
                  validation, clear confirmation and cancellation outcomes,
                  authorization, persistence, and audit evidence before this
                  route can choose a date.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable picker actions"
              >
                {[
                  "Open picker",
                  "Select date",
                  "Confirm value",
                  "Cancel dialog",
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
                These safeguards must be verified before picker controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Open state, trigger, focus return, focus trap, escape behavior,
                modal labeling, and screen-reader announcements.
              </p>
              <p>
                Calendar, locale, timezone, daylight saving, date-only versus
                instant meaning, navigation, and clock source.
              </p>
              <p>
                Selected date, ranges, minimum and maximum, disabled days,
                required state, parsing, errors, confirmation, and cancellation.
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
            <CardTitle>Date-picker capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not open a dialog, move focus,
              render a calendar, select a date, validate a value, confirm,
              cancel, or persist a record.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search date-picker capability notes"
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
