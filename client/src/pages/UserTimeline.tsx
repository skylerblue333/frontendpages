import { useMemo, useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Lane = "All" | "Activity" | "Milestones";
type Event = { id: string; name: string; lane: string; evidence: string };
const events: readonly Event[] = [
  {
    id: "one",
    name: "Activity event concept",
    lane: "Activity",
    evidence:
      "Event source, actor, timestamp, ordering, privacy, and ownership are unavailable.",
  },
  {
    id: "two",
    name: "Milestone concept",
    lane: "Milestones",
    evidence:
      "Completion criteria, evidence, relationships, reminders, and persistence are unavailable.",
  },
  {
    id: "three",
    name: "Relationship event concept",
    lane: "Activity",
    evidence:
      "Participants, consent, visibility, history, and notification state are unavailable.",
  },
];

export default function UserTimeline() {
  const [lane, setLane] = useState<Lane>("All");
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [status, setStatus] = useState(
    "Timeline service unavailable locally. No timeline events are loaded."
  );
  const selected = useMemo(
    () => events.find(event => event.id === selectedId) ?? events[0],
    [selectedId]
  );
  const visible =
    lane === "All" ? events : events.filter(event => event.lane === lane);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No timeline query, reminder, completion, relationship, privacy, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CalendarClock}
        title="User timeline"
        subtitle="Review timeline-readiness structure without fabricating events, timestamps, actors, relationships, reminders, completion, privacy, or account activity."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Timeline unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Timeline service unavailable.</strong> No authenticated
            account, activity stream, event source, timestamp authority,
            relationship history, reminder provider, or persistence store is
            connected.
          </p>
          <Button
            onClick={() => blocked("Refresh timeline")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Timeline preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local timeline concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate lane filtering and evidence
                  notes only. They do not represent real people, activity,
                  timestamps, milestones, reminders, relationships, or
                  completion history.
                </p>
              </div>
              <CalendarClock
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Timeline lane filter"
            >
              {(["All", "Activity", "Milestones"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={lane === item}
                  onClick={() => {
                    setLane(item);
                    setStatus(
                      `Timeline lane changed locally to ${item}. No timeline query was run.`
                    );
                  }}
                  size="sm"
                  variant={lane === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(event => (
                <button
                  key={event.id}
                  type="button"
                  aria-pressed={selected.id === event.id}
                  onClick={() => setSelectedId(event.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === event.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{event.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {event.lane}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {event.evidence}
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
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.lane}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Event ID", "Unavailable"],
                  ["Timestamp", "Not available"],
                  ["Actor/owner", "Identity unavailable"],
                  ["Source", "Event source unavailable"],
                  ["Ordering", "Not determined"],
                  ["Status", "Not determined"],
                  ["Completion", "Evidence unavailable"],
                  ["Reminder", "Provider unavailable"],
                  ["Privacy", "Scope unavailable"],
                  ["Persistence", "Store unavailable"],
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
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled size="sm">
                  Add reminder unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Mark complete unavailable
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
                  A production timeline requires authenticated scope, immutable
                  event IDs, trusted timestamps, ordering rules, actor and
                  relationship authorization, privacy and visibility controls,
                  completion evidence, reminder delivery, persistence,
                  auditability, pagination, and safe redaction of sensitive
                  activity.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Lane local</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No timeline query.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Completion blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No event mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Clock3
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Time absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No trusted timestamp.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Evidence absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No completion proof.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No timeline event, actor, timestamp, relationship, reminder,
            completion, privacy, persistence, or account-activity outcome is
            claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
