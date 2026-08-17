import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CircleSlash2,
  Filter,
  FileText,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Outcome = "Review" | "Recorded" | "Unavailable";
type Event = {
  id: string;
  title: string;
  kind: string;
  outcome: Outcome;
  description: string;
  actor: string;
  timestamp: string;
  provenance: string;
};
const events: Event[] = [
  {
    id: "auth",
    title: "Authentication review",
    kind: "Access",
    outcome: "Review",
    description:
      "A local event shape for reviewing access activity after a trusted event source is connected.",
    actor: "Actor unavailable",
    timestamp: "Timestamp unavailable",
    provenance: "Provenance unavailable",
  },
  {
    id: "profile",
    title: "Profile change",
    kind: "Account",
    outcome: "Recorded",
    description:
      "A local event shape pending verified account, authorization, and retention semantics.",
    actor: "Actor unavailable",
    timestamp: "Timestamp unavailable",
    provenance: "Provenance unavailable",
  },
  {
    id: "policy",
    title: "Policy review",
    kind: "Security",
    outcome: "Unavailable",
    description:
      "A restricted event shape requiring tamper evidence and compliance ownership.",
    actor: "Actor unavailable",
    timestamp: "Timestamp unavailable",
    provenance: "Provenance unavailable",
  },
];
const outcomes: Array<"All" | Outcome> = [
  "All",
  "Review",
  "Recorded",
  "Unavailable",
];
const kinds = ["All", ...Array.from(new Set(events.map(event => event.kind)))];
export default function AuditTrail() {
  const [kind, setKind] = useState("All");
  const [outcome, setOutcome] = useState<(typeof outcomes)[number]>("All");
  const [selectedId, setSelectedId] = useState(events[0].id);
  const [status, setStatus] = useState(
    "Audit trail unavailable. Showing local event fixtures only."
  );
  const filtered = useMemo(
    () =>
      events.filter(
        event =>
          (kind === "All" || event.kind === kind) &&
          (outcome === "All" || event.outcome === outcome)
      ),
    [kind, outcome]
  );
  const selected = events.find(event => event.id === selectedId) ?? events[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No actor lookup, audit record, export, acknowledgement, incident, or compliance operation was started.`
    );
  const reset = () => {
    setKind("All");
    setOutcome("All");
    setSelectedId(events[0].id);
    setStatus(
      "Audit preview reset locally. No event, actor, timestamp, outcome, or retention state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 text-amber-200">
              <FileText aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">Audit trail</h1>
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-xs text-amber-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review event shapes without fabricated actors, timestamps,
                outcomes, security evidence, retention, or compliance claims.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <strong className="text-amber-100">Audit trail unavailable.</strong>{" "}
          No trusted event source, clock/provenance service, retention policy,
          or compliance store is connected. These are local fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Filter className="h-4 w-4" />
              Filter event fixtures
            </div>
            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label="Event class filter"
            >
              {kinds.map(item => (
                <Button
                  aria-pressed={kind === item}
                  key={item}
                  onClick={() => setKind(item)}
                  size="sm"
                  variant={kind === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Event outcome filter"
            >
              {outcomes.map(item => (
                <Button
                  aria-pressed={outcome === item}
                  key={item}
                  onClick={() => setOutcome(item)}
                  size="sm"
                  variant="outline"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(event => (
                <button
                  aria-pressed={selectedId === event.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === event.id ? "border-amber-400/35 bg-amber-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={event.id}
                  onClick={() => setSelectedId(event.id)}
                  type="button"
                >
                  <p className="font-medium">{event.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {event.kind} · {event.outcome}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {event.description}
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
              <p className="mt-1 text-sm text-amber-200">
                {selected.kind} · {selected.outcome}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Actor", selected.actor],
                  ["Timestamp", selected.timestamp],
                  ["Provenance", selected.provenance],
                ].map(([label, value]) => (
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
                No audit record, security finding, incident, retention, or
                compliance evidence is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Export")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Export unavailable
                </Button>
                <Button
                  onClick={() => blocked("Acknowledge")}
                  variant="outline"
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Acknowledge unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No event, actor, retention, export, incident, security, or
                  compliance operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production audit trails require trusted ingestion, provenance
                  integrity, authorization, tamper evidence, privacy, retention,
                  and auditable exports.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
