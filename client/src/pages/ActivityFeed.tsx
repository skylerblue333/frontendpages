import { useMemo, useState } from "react";
import {
  Activity,
  BellOff,
  CircleSlash2,
  Info,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ActivityKind = "System" | "Workspace" | "Unavailable";
type ActivityFixture = {
  id: string;
  title: string;
  kind: ActivityKind;
  summary: string;
  actor: string;
  timing: string;
  boundary: string;
};
const activities: ActivityFixture[] = [
  {
    id: "policy",
    title: "Policy review checkpoint",
    kind: "System",
    summary: "A local governance event describing a documented review step.",
    actor: "Actor unavailable",
    timing: "Timestamp unavailable",
    boundary:
      "No user, administrator, policy record, or audit event is connected.",
  },
  {
    id: "workspace",
    title: "Workspace planning note",
    kind: "Workspace",
    summary:
      "A local workspace event describing a planning concept without a live project record.",
    actor: "Identity unavailable",
    timing: "Time provenance unavailable",
    boundary:
      "No project, workspace member, notification, comment, or activity history is available.",
  },
  {
    id: "integration",
    title: "Integration status review",
    kind: "Unavailable",
    summary:
      "A restricted activity concept pending integration and privacy review.",
    actor: "Service actor unavailable",
    timing: "Event time unavailable",
    boundary:
      "No provider, webhook, delivery, metric, or external account state is available.",
  },
];
const kinds: Array<"All" | ActivityKind> = [
  "All",
  "System",
  "Workspace",
  "Unavailable",
];

export default function ActivityFeed() {
  const [query, setQuery] = useState("");
  const [kindFilter, setKindFilter] = useState<(typeof kinds)[number]>("All");
  const [selectedId, setSelectedId] = useState(activities[0].id);
  const [status, setStatus] = useState(
    "Activity service unavailable. Showing local event fixtures only."
  );
  const filtered = useMemo(
    () =>
      activities.filter(
        event =>
          (kindFilter === "All" || event.kind === kindFilter) &&
          `${event.title} ${event.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, kindFilter]
  );
  const selected =
    activities.find(event => event.id === selectedId) ?? activities[0];
  const reset = () => {
    setQuery("");
    setKindFilter("All");
    setSelectedId(activities[0].id);
    setStatus(
      "Activity preview reset locally. No history, timestamp, identity, notification, social, or analytics state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No activity, identity, notification, engagement, or analytics request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
              <Activity aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Activity feed
                </h1>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review activity concepts without reading user history,
                generating timestamps, sending notifications, or claiming social
                engagement.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset activity feed preview"
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
                Activity service unavailable.
              </strong>{" "}
              No identity, event history, timestamp source, notification
              service, social graph, analytics store, or external provider is
              connected. The records below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">Search local activity fixtures</span>
                <Activity
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search activity fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter activity type"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {kinds.map(option => (
                  <Button
                    aria-pressed={kindFilter === option}
                    className={
                      kindFilter === option
                        ? "bg-cyan-500 text-white hover:bg-cyan-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setKindFilter(option);
                      setStatus(`${option} activity type selected locally.`);
                    }}
                    size="sm"
                    variant={kindFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <Activity
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local activity
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another type or search term.
                  </p>
                </div>
              ) : (
                filtered.map(event => (
                  <button
                    aria-pressed={event.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${event.id === selectedId ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={event.id}
                    onClick={() => {
                      setSelectedId(event.id);
                      setStatus(
                        `${event.title} selected for local activity review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-cyan-200">
                      <Activity aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {event.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {event.kind}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {event.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {event.actor} · {event.timing}
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
                Selected event
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Summary
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.summary}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Actor</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.actor}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Timing</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.timing}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Engagement, notification, retention, and analytics details are
                  unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Refresh activity")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Refresh unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    History boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No user, actor, event, timestamp, notification, comment,
                    reaction, follow, retention, or export operation is
                    available. Future activity requires authorization, privacy
                    filtering, provenance, retention, deduplication, and
                    auditability.
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
                    Activity posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Actor identity, event time, notification state, engagement
                    counts, retention state, and analytics are unavailable
                    rather than estimated.
                  </p>
                </div>
              </div>
              <BellOff
                aria-hidden="true"
                className="mt-5 h-5 w-5 text-slate-600"
              />
              <Users
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
