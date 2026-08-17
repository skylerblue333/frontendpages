import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BellRing,
  CalendarClock,
  CheckCircle2,
  CircleSlash2,
  Filter,
  LockKeyhole,
  Plus,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type PolicyState = "Review" | "Planned" | "Unavailable";
type AlertPolicy = {
  id: string;
  title: string;
  event: string;
  state: PolicyState;
  description: string;
  source: string;
  threshold: string;
  recipients: string;
  schedule: string;
};
const policies: AlertPolicy[] = [
  {
    id: "health",
    title: "Service health signal",
    event: "Health event",
    state: "Review",
    description:
      "A local policy concept for a verified service-health event with human-reviewed thresholds.",
    source: "Event source unavailable",
    threshold: "Threshold undefined",
    recipients: "No recipients",
    schedule: "Not scheduled",
  },
  {
    id: "security",
    title: "Security review signal",
    event: "Security event",
    state: "Planned",
    description:
      "A policy concept pending trusted detection, deduplication, escalation, and incident linkage.",
    source: "Detector unavailable",
    threshold: "Threshold undefined",
    recipients: "No recipients",
    schedule: "Not scheduled",
  },
  {
    id: "billing",
    title: "Billing anomaly signal",
    event: "Financial event",
    state: "Unavailable",
    description:
      "A restricted policy concept requiring verified ledger events, privacy controls, and reconciliation.",
    source: "Ledger event unavailable",
    threshold: "Threshold undefined",
    recipients: "No recipients",
    schedule: "Not scheduled",
  },
];
const states: Array<"All" | PolicyState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const eventTypes = [
  "All",
  ...Array.from(new Set(policies.map(policy => policy.event))),
];

export default function AlertConfiguration() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [eventFilter, setEventFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(policies[0].id);
  const [status, setStatus] = useState(
    "Alert configuration unavailable. Showing local policy fixtures only."
  );
  const filtered = useMemo(
    () =>
      policies.filter(
        policy =>
          (stateFilter === "All" || policy.state === stateFilter) &&
          (eventFilter === "All" || policy.event === eventFilter) &&
          `${policy.title} ${policy.event} ${policy.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [eventFilter, query, stateFilter]
  );
  const selected =
    policies.find(policy => policy.id === selectedId) ?? policies[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setEventFilter("All");
    setSelectedId(policies[0].id);
    setStatus(
      "Alert preview reset locally. No event, threshold, recipient, schedule, notification, incident, or configuration state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No event, threshold, recipient, schedule, notification, webhook, incident, or production configuration request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-200">
              <BellRing aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Alert configuration
                </h1>
                <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-2.5 py-1 text-xs font-medium text-orange-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review alert-policy concepts without fabricated events,
                thresholds, recipients, schedules, notifications, or incident
                claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset alert configuration preview"
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
                Alert configuration unavailable.
              </strong>{" "}
              No verified event source, threshold registry, recipient directory,
              scheduler, notification channel, webhook, incident system, or
              production policy store is connected. The policies below are local
              fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <label className="relative block flex-1">
                  <span className="sr-only">Search local alert policies</span>
                  <SlidersHorizontal
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  />
                  <Input
                    className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search policy fixtures"
                    value={query}
                  />
                </label>
                <Button
                  className="border-slate-700 bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => blocked("New alert policy")}
                  variant="outline"
                >
                  <Plus aria-hidden="true" className="mr-2 h-4 w-4" />
                  New unavailable
                </Button>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter event type"
              >
                {eventTypes.map(eventType => (
                  <Button
                    aria-pressed={eventFilter === eventType}
                    className={
                      eventFilter === eventType
                        ? "bg-orange-500 text-white hover:bg-orange-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={eventType}
                    onClick={() => {
                      setEventFilter(eventType);
                      setStatus(`${eventType} event type selected locally.`);
                    }}
                    size="sm"
                    variant={eventFilter === eventType ? "default" : "outline"}
                  >
                    {eventType}
                  </Button>
                ))}
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter alert policy state"
              >
                {states.map(state => (
                  <Button
                    aria-pressed={stateFilter === state}
                    className={
                      stateFilter === state
                        ? "border-orange-400/50 bg-orange-400/10 text-orange-100"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={state}
                    onClick={() => {
                      setStateFilter(state);
                      setStatus(`${state} policy state selected locally.`);
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
                  <BellRing
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching alert policies
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another event type, state, or search term.
                  </p>
                </div>
              ) : (
                filtered.map(policy => (
                  <button
                    aria-pressed={selectedId === policy.id}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selectedId === policy.id ? "border-orange-400/35 bg-orange-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={policy.id}
                    onClick={() => {
                      setSelectedId(policy.id);
                      setStatus(
                        `${policy.title} selected for local policy review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-orange-200">
                        <BellRing aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-medium text-slate-200">
                              {policy.title}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {policy.event}
                            </p>
                          </div>
                          <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                            {policy.state}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {policy.description}
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
                Selected policy
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-orange-200">
                {selected.event} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Source</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.source}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Threshold</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.threshold}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Recipients</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.recipients}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Schedule</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.schedule}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No trigger, delivery, notification, webhook, response, incident,
                or escalation state is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Test")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Test unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Enable")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Enable unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Schedule")}
                  size="sm"
                  variant="outline"
                >
                  <CalendarClock aria-hidden="true" className="mr-2 h-4 w-4" />
                  Schedule unavailable
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
                    Notification boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No alert store, event source, recipient, scheduler, email,
                    webhook, push, incident, or production configuration
                    operation is available. Filters and selection are local
                    only.
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
                    Policy posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Production alerting requires verified event semantics,
                    thresholds, deduplication, rate limits, consent, channel
                    security, escalation, and auditability.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
                <Filter aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
