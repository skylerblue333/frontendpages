import { useMemo, useState } from "react";
import {
  Activity,
  CircleSlash2,
  Database,
  LockKeyhole,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TrackingArea = "All" | "Core" | "Community" | "Education";
type TrackingState = "All" | "Review" | "Unavailable" | "Planned";
type TrackingConcept = {
  id: string;
  title: string;
  area: Exclude<TrackingArea, "All">;
  state: Exclude<TrackingState, "All">;
  summary: string;
  consent: string;
  source: string;
  identity: string;
  purpose: string;
  retention: string;
  deletion: string;
};
const concepts: TrackingConcept[] = [
  {
    id: "core-plan",
    title: "Core activity plan",
    area: "Core",
    state: "Review",
    summary:
      "A local tracking-policy concept pending purpose limitation, consent enforcement, data minimization, identity boundaries, and retention controls.",
    consent: "Consent record unavailable",
    source: "Event source unavailable",
    identity: "Identifier boundary unavailable",
    purpose: "Purpose statement unavailable",
    retention: "Retention schedule unavailable",
    deletion: "Deletion workflow unavailable",
  },
  {
    id: "community-plan",
    title: "Community engagement plan",
    area: "Community",
    state: "Planned",
    summary:
      "A local engagement concept pending opt-out handling, privacy-aware event taxonomy, moderation context, and deletion evidence.",
    consent: "Consent record unavailable",
    source: "Event source unavailable",
    identity: "Identifier boundary unavailable",
    purpose: "Purpose statement unavailable",
    retention: "Retention schedule unavailable",
    deletion: "Deletion workflow unavailable",
  },
  {
    id: "education-plan",
    title: "Education learning plan",
    area: "Education",
    state: "Unavailable",
    summary:
      "A local learning telemetry concept pending learner-safe collection, permission review, data minimization, and retention enforcement.",
    consent: "Consent record unavailable",
    source: "Event source unavailable",
    identity: "Identifier boundary unavailable",
    purpose: "Purpose statement unavailable",
    retention: "Retention schedule unavailable",
    deletion: "Deletion workflow unavailable",
  },
];
const areas: TrackingArea[] = ["All", "Core", "Community", "Education"];
const states: TrackingState[] = ["All", "Review", "Unavailable", "Planned"];
export default function ActivityTracking() {
  const [area, setArea] = useState<TrackingArea>("All");
  const [state, setState] = useState<TrackingState>("All");
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Tracking service unavailable. Showing local policy concepts only."
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
      `${action} is unavailable locally. No consent record, event, device, session, identity, analytics, notification, retention, deletion, or external operation was started.`
    );
  const metadata: Array<[string, string]> = [
    ["Consent", selected.consent],
    ["Source", selected.source],
    ["Identity", selected.identity],
    ["Purpose", selected.purpose],
    ["Retention", selected.retention],
    ["Deletion", selected.deletion],
  ];
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Activity}
        title="Activity tracking"
        subtitle="Review local tracking-policy concepts without fabricated consent, events, devices, sessions, identities, analytics, retention, or deletion state."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Tracking service unavailable.</strong> No consent record,
            event taxonomy, device or session boundary, identity linkage,
            analytics processor, retention schedule, or deletion workflow is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Tracking service remains unavailable. Local policy concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset policies
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Tracking preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review tracking concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show policy structure only. They do
                  not represent real consent, events, devices, sessions,
                  identifiers, analytics metrics, retention, deletion, or
                  account state.
                </p>
              </div>
              <Database className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Tracking area filter"
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
              aria-label="Tracking state filter"
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
                Selected tracking concept
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
                No consent, source, identity, purpose, retention, or deletion
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Enable tracking")}
                  variant="outline"
                >
                  <UserRound className="mr-2 h-4 w-4" /> Enable unavailable
                </Button>
                <Button
                  onClick={() => blocked("Test tracking")}
                  variant="outline"
                >
                  <Activity className="mr-2 h-4 w-4" /> Test unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Tracking requires explicit consent where applicable, data
                  minimization, purpose limitation, server-side authorization,
                  redaction, retention enforcement, deletion handling, and
                  auditable access.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Consent, collection, identity, analytics, notification,
                  retention, deletion, and opt-out transitions must be auditable
                  and isolated from fabricated telemetry.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No user, device, cookie, session, IP, identifier, location,
                  activity, consent, event payload, notification, analytics,
                  provider, webhook, or SDK operation is available from this
                  preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
