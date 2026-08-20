import { useMemo, useState } from "react";
import {
  Activity,
  CheckCircle2,
  Clock3,
  Download,
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

type Filter = "All" | "Security" | "Account";
type Event = { id: string; name: string; category: string; evidence: string };
const events: readonly Event[] = [
  {
    id: "one",
    name: "Sign-in event concept",
    category: "Security",
    evidence:
      "Actor, timestamp, session, device, location, and authentication result are unavailable.",
  },
  {
    id: "two",
    name: "Profile update concept",
    category: "Account",
    evidence:
      "Authenticated identity, field change, consent, audit ID, and persistence state are unavailable.",
  },
  {
    id: "three",
    name: "Notification preference concept",
    category: "Account",
    evidence:
      "Preference source, device scope, delivery state, and privacy-safe audit data are unavailable.",
  },
];

export default function UserActivity() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [status, setStatus] = useState(
    "User-activity service unavailable locally. No activity events are loaded."
  );
  const selected = useMemo(
    () => events.find(event => event.id === selectedId) ?? events[0],
    [selectedId]
  );
  const visible =
    filter === "All"
      ? events
      : events.filter(event => event.category === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No activity query, export, audit, session, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Activity}
        title="User activity"
        subtitle="Review activity-log readiness without fabricating events, timestamps, actors, sessions, devices, locations, audit records, or security outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="User activity unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>User-activity service unavailable.</strong> No authenticated
            account, event stream, audit store, timestamp source, session
            registry, device inventory, or privacy-safe location data is
            connected.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => blocked("Refresh activity")}
              size="sm"
              variant="outline"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
            </Button>
            <Button
              onClick={() => blocked("Export activity")}
              size="sm"
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" /> Export unavailable
            </Button>
          </div>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Activity preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local event concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate event category and evidence
                  notes only. They do not represent a user, session, device,
                  authentication result, audit history, or persisted account
                  activity.
                </p>
              </div>
              <Activity
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Activity category filter"
            >
              {(["All", "Security", "Account"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Activity filter changed locally to ${item}. No event query was run.`
                    );
                  }}
                  size="sm"
                  variant={filter === item ? "default" : "outline"}
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
                      {event.category}
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
                Selected event concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.category}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Event ID", "Unavailable"],
                  ["Timestamp", "Not available"],
                  ["Actor", "Identity unavailable"],
                  ["Session", "Session registry unavailable"],
                  ["Device", "Device data unavailable"],
                  ["IP/location", "Privacy-safe scope unavailable"],
                  ["Audit", "Audit record unavailable"],
                  ["Outcome", "Not determined"],
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
                No activity event, actor, timestamp, session, device, location,
                audit record, or outcome is available.
              </p>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production activity log requires authenticated scope,
                  immutable event IDs, trusted timestamps, actor and session
                  boundaries, device privacy controls, retention policy, audit
                  integrity, access logging, pagination, export authorization,
                  and redaction of secrets or sensitive personal data.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Filter local</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No event query sent.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audit blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No authoritative log.
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
                  <UserRound
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Actor absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No identity inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No event, actor, timestamp, session, device, location, audit,
            authentication, or account-activity outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
