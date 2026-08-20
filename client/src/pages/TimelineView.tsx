import { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  History,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type EventState = "Planned" | "Unavailable" | "Review";
type TimelineEvent = {
  id: string;
  title: string;
  lane: "Core" | "Education" | "Financial";
  state: EventState;
  date: string;
  summary: string;
};
const events: readonly TimelineEvent[] = [
  {
    id: "core",
    title: "Core platform milestone",
    lane: "Core",
    state: "Review",
    date: "Date unavailable",
    summary:
      "A local milestone concept pending event ownership, timestamps, completion evidence, and audit history.",
  },
  {
    id: "education",
    title: "Education review window",
    lane: "Education",
    state: "Planned",
    date: "Window unavailable",
    summary:
      "A local education event concept pending learner-safe scheduling, source provenance, and notification policy.",
  },
  {
    id: "financial",
    title: "Financial control checkpoint",
    lane: "Financial",
    state: "Unavailable",
    date: "Date unavailable",
    summary:
      "A local financial event concept pending authorized records, time provenance, privacy, and auditable status transitions.",
  },
];
const lanes = ["All", "Core", "Education", "Financial"] as const;

export default function TimelineView() {
  const [lane, setLane] = useState<(typeof lanes)[number]>("All");
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [status, setStatus] = useState(
    "Timeline service unavailable locally. Showing ordered concepts only."
  );
  const filtered = useMemo(
    () => events.filter(event => lane === "All" || event.lane === lane),
    [lane]
  );
  const selected =
    filtered.find(event => event.id === selectedId) ?? filtered[0] ?? events[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No event, reminder, notification, completion, or timeline mutation was started.`
    );

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CalendarDays}
        title="Timeline view"
        subtitle="Review an ordered activity structure without fabricating dates, events, completion, reminders, ownership, or historical activity."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Timeline service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Timeline service unavailable.</strong> No event source,
            timestamp authority, owner scope, calendar, reminder provider,
            persistence layer, or immutable activity history is connected.
            Concepts below are local preview data only.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Timeline remains unavailable. Local concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset timeline
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Timeline preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review ordered concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Typed local fixtures show lanes, order, status, and selected
                  detail only. They do not represent real events, dates,
                  history, progress, completion, reminders, or notifications.
                </p>
              </div>
              <Clock3
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Timeline lane filter"
            >
              {lanes.map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={lane === item}
                  onClick={() => setLane(item)}
                  size="sm"
                  variant={lane === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(event => (
                <button
                  key={event.id}
                  type="button"
                  aria-pressed={selected.id === event.id}
                  onClick={() => setSelectedId(event.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === event.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{event.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {event.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {event.lane} · {event.date}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {event.summary}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected timeline concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.lane} · {selected.state}
              </p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Date", selected.date],
                  ["Timestamp", "Timestamp authority unavailable"],
                  ["Owner", "Owner unavailable"],
                  ["Status history", "History unavailable"],
                  ["Reminder", "Reminder provider unavailable"],
                  ["Completion", "Completion evidence unavailable"],
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
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No event, date, owner, history, reminder, completion, or
                notification outcome is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Add timeline event")}
                  variant="outline"
                >
                  Add event unavailable
                </Button>
                <Button
                  onClick={() => blocked("Set reminder")}
                  variant="outline"
                >
                  Reminder unavailable
                </Button>
                <Button
                  onClick={() => blocked("Mark complete")}
                  variant="outline"
                >
                  Complete unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production timeline requires authoritative timestamps,
                  timezone rules, immutable event identity, tenant-aware
                  ownership, ordering guarantees, privacy-safe history,
                  completion evidence, reminder idempotency, notification
                  controls, and auditable correction paths.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Order intent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Local fixture order only.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Activity blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No event source connected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <History
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    History unavailable
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No immutable activity log.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">No outcome claim</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No completion or reminder.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
