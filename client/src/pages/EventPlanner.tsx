import { useMemo, useState } from "react";
import {
  CalendarDays,
  CircleSlash2,
  Clock3,
  Grid3X3,
  Info,
  LockKeyhole,
  MapPin,
  RotateCcw,
  Save,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type EventState = "Planning" | "Review" | "Unavailable";
type EventFixture = {
  id: string;
  title: string;
  state: EventState;
  summary: string;
  boundary: string;
  tableCount: number;
  seatCount: number;
};
const events: EventFixture[] = [
  {
    id: "community",
    title: "Community gathering layout",
    state: "Planning",
    summary:
      "A local floor-plan prompt for table placement and accessibility review",
    boundary:
      "No venue, attendee list, calendar record, invitation, capacity, or registration is connected.",
    tableCount: 8,
    seatCount: 48,
  },
  {
    id: "workshop",
    title: "Builder workshop layout",
    state: "Review",
    summary:
      "A local workshop arrangement checklist with stage and breakout zones",
    boundary:
      "No presenter, attendee, room booking, reminder, invitation, or calendar integration is available.",
    tableCount: 6,
    seatCount: 36,
  },
  {
    id: "private",
    title: "Private event layout",
    state: "Unavailable",
    summary:
      "A restricted planning concept pending authorization and venue evidence",
    boundary:
      "No tenant, organizer, guest, venue, payment, access, or analytics state is available.",
    tableCount: 4,
    seatCount: 24,
  },
];
const states: Array<"All" | EventState> = [
  "All",
  "Planning",
  "Review",
  "Unavailable",
];

export default function EventPlanner() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [status, setStatus] = useState(
    "Event service unavailable. Showing local planning fixtures only."
  );
  const filtered = useMemo(
    () =>
      events.filter(
        event =>
          (stateFilter === "All" || event.state === stateFilter) &&
          `${event.title} ${event.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected = events.find(event => event.id === selectedId) ?? events[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(events[0].id);
    setStatus(
      "Event planner preview reset locally. No calendar, attendee, venue, sync, or persistence state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No calendar, attendee, venue, invitation, sync, or persistence request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-violet-200">
              <CalendarDays aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Event planner
                </h1>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review event layout concepts without connecting calendars,
                venues, attendees, invitations, reminders, or collaboration
                services.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset event planner preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Event service unavailable.
              </strong>{" "}
              No calendar, venue, attendee, invitation, registration, reminder,
              collaboration channel, persistence store, or production metric is
              connected. The records below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">Search local event fixtures</span>
                <CalendarDays
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search event fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter event planning state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-violet-500 text-white hover:bg-violet-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(`${option} event state selected locally.`);
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <CalendarDays
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local events
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(event => (
                  <button
                    aria-pressed={event.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${event.id === selectedId ? "border-violet-400/35 bg-violet-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={event.id}
                    onClick={() => {
                      setSelectedId(event.id);
                      setStatus(
                        `${event.title} selected for local layout review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-violet-200">
                      <Grid3X3 aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {event.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {event.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {event.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {event.tableCount} local tables · {event.seatCount}{" "}
                        planning seats · no live capacity
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected layout
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                  <Grid3X3
                    aria-hidden="true"
                    className="h-4 w-4 text-violet-200"
                  />
                  <p className="mt-2 text-xs text-slate-500">Local tables</p>
                  <p className="text-lg font-semibold text-slate-200">
                    {selected.tableCount}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
                  <Users
                    aria-hidden="true"
                    className="h-4 w-4 text-violet-200"
                  />
                  <p className="mt-2 text-xs text-slate-500">Planning seats</p>
                  <p className="text-lg font-semibold text-slate-200">
                    {selected.seatCount}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600">
                Counts are fixture values, not venue capacity or registration
                totals.
              </p>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Save layout")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Save unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-violet-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Planning boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No layout, calendar, venue, attendee, invitation, reminder,
                    sync, export, or persistence operation is available. Future
                    event actions require authorization, conflict handling,
                    privacy controls, idempotency, and auditability.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Event posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Venue availability, attendee counts, registrations,
                    invitations, reminders, calendar conflicts, sync health, and
                    analytics are unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <MapPin
                aria-hidden="true"
                className="mt-5 h-5 w-5 text-slate-600"
              />
              <Clock3
                aria-hidden="true"
                className="ml-2 inline h-5 w-5 text-slate-600"
              />
              <Save
                aria-hidden="true"
                className="ml-2 inline h-5 w-5 text-slate-600"
              />
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
