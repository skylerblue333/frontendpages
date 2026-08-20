import { FormEvent, useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function TimeInputForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("Timezone intent required");
  const [status, setStatus] = useState(
    "Time-input service unavailable locally. No scheduling or persistence endpoint is connected."
  );
  const hasLocalInput = Boolean(
    date && time && timezone !== "Timezone intent required"
  );

  const reset = () => {
    setDate("");
    setTime("");
    setTimezone("Timezone intent required");
    setStatus(
      "Time-input service unavailable locally. Local time intent was reset."
    );
  };
  const review = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      hasLocalInput
        ? "Time intent reviewed locally. No timezone conversion, schedule, reminder, persistence, or notification was started."
        : "Select a date, time, and timezone intent before local review. No schedule was created."
    );
  };

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CalendarClock}
        title="Time input form"
        subtitle="Review a date and time flow without claiming timezone conversion, scheduling, reminders, persistence, or delivery."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Time input service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Time input service unavailable.</strong> No locale, device
            timezone, calendar, scheduling backend, authenticated owner,
            persistence layer, or notification provider is connected. Values
            below are local intent only.
          </p>
          <Button onClick={reset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset form
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Time form preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Choose a local time intent
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  The controls demonstrate labels, native date/time inputs,
                  timezone selection, validation, and status feedback. They do
                  not create an appointment, reminder, calendar event, deadline,
                  or notification.
                </p>
              </div>
              <Clock3
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <form onSubmit={review} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-200">
                  Date
                  <input
                    required
                    type="date"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                  />
                </label>
                <label className="text-sm font-medium text-slate-200">
                  Time
                  <input
                    required
                    type="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                  />
                </label>
              </div>
              <label className="text-sm font-medium text-slate-200">
                Timezone intent
                <select
                  required
                  value={timezone}
                  onChange={event => setTimezone(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                >
                  <option>Timezone intent required</option>
                  <option>UTC intent</option>
                  <option>Local device intent</option>
                  <option>Named timezone intent</option>
                </select>
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="submit"
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  Review time locally
                </Button>
                <Button type="button" onClick={reset} variant="outline">
                  Clear local intent
                </Button>
              </div>
            </form>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected time state
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                {hasLocalInput ? "Local intent entered" : "Needs local input"}
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Date", date || "Date unavailable"],
                  ["Time", time || "Time unavailable"],
                  ["Timezone", timezone],
                  ["Conversion", "Unavailable"],
                  ["Persistence", "Unavailable"],
                  ["Notification", "Provider unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production time flow requires explicit timezone identifiers,
                  DST and locale rules, server-side normalization, clock-source
                  policy, validation, ownership, scheduling idempotency,
                  calendar or reminder integration, privacy controls, and
                  auditable delivery state.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Native controls</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Date and time are locally entered.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Schedule blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No calendar or reminder target.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Timezone boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No conversion is claimed.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
      </main>
    </div>
  );
}
