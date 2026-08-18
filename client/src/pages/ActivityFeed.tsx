import { useMemo, useState } from "react";
import {
  Activity,
  CircleSlash2,
  EyeOff,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ActivityArea = "All" | "Core" | "Community" | "Financial";
type ActivityState = "All" | "Review" | "Unavailable" | "Planned";
type ActivityConcept = {
  id: string;
  title: string;
  area: Exclude<ActivityArea, "All">;
  state: Exclude<ActivityState, "All">;
  summary: string;
  actor: string;
  action: string;
  source: string;
  time: string;
  visibility: string;
  retention: string;
};
const concepts: ActivityConcept[] = [
  {
    id: "core-event",
    title: "Core platform event",
    area: "Core",
    state: "Review",
    summary:
      "A local activity concept pending an authoritative event stream, actor identity, source provenance, ordering, and retention policy.",
    actor: "Actor unavailable",
    action: "Action unavailable",
    source: "Source unavailable",
    time: "Timestamp unavailable",
    visibility: "Visibility policy unavailable",
    retention: "Retention policy unavailable",
  },
  {
    id: "community-event",
    title: "Community activity event",
    area: "Community",
    state: "Planned",
    summary:
      "A local community activity concept pending privacy-aware event taxonomy, moderation context, visibility controls, and safe pagination.",
    actor: "Actor unavailable",
    action: "Action unavailable",
    source: "Source unavailable",
    time: "Timestamp unavailable",
    visibility: "Visibility policy unavailable",
    retention: "Retention policy unavailable",
  },
  {
    id: "financial-event",
    title: "Financial activity event",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local financial event concept pending authorization, sensitive-data redaction, immutable provenance, and auditable access.",
    actor: "Actor unavailable",
    action: "Action unavailable",
    source: "Source unavailable",
    time: "Timestamp unavailable",
    visibility: "Visibility policy unavailable",
    retention: "Retention policy unavailable",
  },
];
const areas: ActivityArea[] = ["All", "Core", "Community", "Financial"];
const states: ActivityState[] = ["All", "Review", "Unavailable", "Planned"];
export default function ActivityFeed() {
  const [area, setArea] = useState<ActivityArea>("All");
  const [state, setState] = useState<ActivityState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Activity service unavailable. Showing local event concepts only."
  );
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (area === "All" || item.area === area) &&
          (state === "All" || item.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(item => item.id === selectedId) ?? filtered[0] ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No event lookup, actor identity, notification, social action, analytics request, persistence, or external mutation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Actor", selected.actor],
    ["Action", selected.action],
    ["Source", selected.source],
    ["Time", selected.time],
    ["Visibility", selected.visibility],
    ["Retention", selected.retention],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Activity}
        title="Activity feed"
        subtitle="Review local activity-event concepts without fabricated actors, actions, timestamps, sources, notifications, engagement, analytics, or history."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Activity service unavailable.</strong> No authoritative
            event stream, actor identity, source metadata, visibility policy,
            retention boundary, or audit service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Activity service remains unavailable. Local events were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset activity
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Activity preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review activity concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show event-stream structure only.
                  They do not represent real users, actions, timestamps,
                  notifications, engagement, analytics, or audit history.
                </p>
              </div>
              <Activity className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Activity area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Activity state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(item => (
                <button
                  aria-pressed={selected.id === item.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{item.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {item.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{item.area}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.summary}
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected event
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {metadata.map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No actor, action, source, timestamp, visibility, or retention
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Refresh activity")}
                  variant="outline"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export activity")}
                  variant="outline"
                >
                  <EyeOff className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Activity feeds require server-side authorization,
                  privacy-aware event taxonomy, immutable event identity,
                  ordering guarantees, retention policy, redaction, and
                  auditable access.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Actor, action, visibility, notification, moderation,
                  analytics, and history transitions must be auditable and
                  isolated from fabricated events.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No event lookup, actor identity, notification, follow,
                  comment, reaction, analytics request, persistence, or activity
                  mutation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
