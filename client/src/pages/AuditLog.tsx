import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  CircleSlash2,
  ClipboardList,
  Download,
  Filter,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type EventState = "Review" | "Unavailable" | "Planned";
type EventFixture = {
  id: string;
  label: string;
  kind: string;
  state: EventState;
  description: string;
  actor: string;
  timestamp: string;
  outcome: string;
  request: string;
};
const events: EventFixture[] = [
  {
    id: "auth",
    label: "Authentication event",
    kind: "Identity",
    state: "Review",
    description:
      "A local event shape for sign-in and session review after a trusted event source is connected.",
    actor: "Actor unavailable",
    timestamp: "Timestamp unavailable",
    outcome: "Outcome unavailable",
    request: "Request ID unavailable",
  },
  {
    id: "change",
    label: "Configuration change",
    kind: "Change",
    state: "Unavailable",
    description:
      "A restricted change record requiring immutable ingestion and authorization provenance.",
    actor: "Actor unavailable",
    timestamp: "Timestamp unavailable",
    outcome: "Outcome unavailable",
    request: "Request ID unavailable",
  },
  {
    id: "security",
    label: "Security signal",
    kind: "Security",
    state: "Planned",
    description:
      "A local security-event concept pending detection, triage, incident, and evidence systems.",
    actor: "Actor unavailable",
    timestamp: "Timestamp unavailable",
    outcome: "Outcome unavailable",
    request: "Request ID unavailable",
  },
];
const kinds = ["All", ...Array.from(new Set(events.map(event => event.kind)))];
const states: Array<"All" | EventState> = [
  "All",
  "Review",
  "Unavailable",
  "Planned",
];

export default function AuditLog() {
  const [kindFilter, setKindFilter] = useState("All");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [status, setStatus] = useState(
    "Audit log unavailable. Showing local event-shape fixtures only."
  );
  const filtered = useMemo(
    () =>
      events.filter(
        event =>
          (kindFilter === "All" || event.kind === kindFilter) &&
          (stateFilter === "All" || event.state === stateFilter)
      ),
    [kindFilter, stateFilter]
  );
  const selected = events.find(event => event.id === selectedId) ?? events[0];
  const reset = () => {
    setKindFilter("All");
    setStateFilter("All");
    setSelectedId(events[0].id);
    setStatus(
      "Audit preview reset locally. No actor, event, timestamp, outcome, export, acknowledgement, or incident state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No audit store, actor, event, timestamp, outcome, export, acknowledgement, alert, or incident request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
              <ClipboardList aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Audit log
                </h1>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review audit-event concepts without fabricated actors,
                timestamps, outcomes, security evidence, or compliance claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset audit log preview"
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
            <AlertTriangle
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Audit log unavailable.
              </strong>{" "}
              No immutable event store, trusted timestamp source, actor
              identity, request trace, security detector, incident system,
              retention policy, or compliance evidence is connected. The events
              below are local shapes only.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-2">
                <Filter aria-hidden="true" className="h-4 w-4 text-slate-500" />
                <p className="text-sm font-medium text-slate-300">
                  Filter local event shapes
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter audit event class"
              >
                {kinds.map(kind => (
                  <Button
                    aria-pressed={kindFilter === kind}
                    className={
                      kindFilter === kind
                        ? "bg-emerald-500 text-white hover:bg-emerald-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={kind}
                    onClick={() => {
                      setKindFilter(kind);
                      setStatus(`${kind} event class selected locally.`);
                    }}
                    size="sm"
                    variant={kindFilter === kind ? "default" : "outline"}
                  >
                    {kind}
                  </Button>
                ))}
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter audit event state"
              >
                {states.map(state => (
                  <Button
                    aria-pressed={stateFilter === state}
                    className={
                      stateFilter === state
                        ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-100"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={state}
                    onClick={() => {
                      setStateFilter(state);
                      setStatus(`${state} event state selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {state}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <ClipboardList
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching event shapes
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another event class or state.
                  </p>
                </div>
              ) : (
                filtered.map(event => (
                  <button
                    aria-pressed={selectedId === event.id}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selectedId === event.id ? "border-emerald-400/35 bg-emerald-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={event.id}
                    onClick={() => {
                      setSelectedId(event.id);
                      setStatus(
                        `${event.label} selected for local audit review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-emerald-200">
                        <ClipboardList aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-medium text-slate-200">
                              {event.label}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {event.kind}
                            </p>
                          </div>
                          <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                            {event.state}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {event.description}
                        </p>
                      </div>
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
                Selected event shape
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.label}
              </h2>
              <p className="mt-1 text-sm text-emerald-200">
                {selected.kind} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Actor</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.actor}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Timestamp</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.timestamp}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Outcome</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.outcome}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Request</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.request}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No event, actor, action, timestamp, outcome, IP address, request
                trace, or security conclusion is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Export")}
                  size="sm"
                  variant="outline"
                >
                  <Download aria-hidden="true" className="mr-2 h-4 w-4" />
                  Export unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Acknowledge")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Acknowledge unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Evidence boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No audit store, immutable ingestion, actor provenance,
                    trusted time, tamper evidence, retention, incident linkage,
                    or export operation is available. Filters and selection are
                    local only.
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
                    Compliance posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    The preview makes no security, audit, retention, incident,
                    or compliance guarantee. Production evidence requires
                    verified controls and an auditable source.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
