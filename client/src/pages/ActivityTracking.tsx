import { useMemo, useState } from "react";
import {
  Activity,
  CircleSlash2,
  Info,
  KeyRound,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  UserRoundX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type CollectionState = "Planned" | "Review" | "Unavailable";
type TrackingFixture = {
  id: string;
  title: string;
  state: CollectionState;
  purpose: string;
  schema: string;
  consent: string;
  boundary: string;
};
const plans: TrackingFixture[] = [
  {
    id: "workspace",
    title: "Workspace viewed",
    state: "Planned",
    purpose:
      "A local event concept for understanding workspace navigation needs.",
    schema: "Workspace identifier: unavailable",
    consent: "Purpose and consent review required",
    boundary:
      "No user, device, workspace, cookie, session, or event payload is connected.",
  },
  {
    id: "course",
    title: "Course checkpoint",
    state: "Review",
    purpose:
      "A local event concept for measuring learning-flow friction without collecting progress.",
    schema: "Course identifier: unavailable",
    consent: "Consent language pending review",
    boundary:
      "No learner identity, course progress, event stream, analytics, or notification channel is available.",
  },
  {
    id: "integration",
    title: "Integration connected",
    state: "Unavailable",
    purpose:
      "A restricted event concept pending data-minimization and opt-out review.",
    schema: "Provider identifier: unavailable",
    consent: "Consent and provider controls unavailable",
    boundary:
      "No provider, account, webhook, device identifier, payload, retention, or production metric is available.",
  },
];
const states: Array<"All" | CollectionState> = [
  "All",
  "Planned",
  "Review",
  "Unavailable",
];

export default function ActivityTracking() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(plans[0].id);
  const [status, setStatus] = useState(
    "Tracking service unavailable. Showing local event-plan fixtures only."
  );
  const filtered = useMemo(
    () =>
      plans.filter(
        plan =>
          (stateFilter === "All" || plan.state === stateFilter) &&
          `${plan.title} ${plan.purpose}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected = plans.find(plan => plan.id === selectedId) ?? plans[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(plans[0].id);
    setStatus(
      "Tracking preview reset locally. No collection, consent, identifier, notification, or analytics state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No event, identifier, consent, provider, notification, or analytics request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-violet-200">
              <SlidersHorizontal aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Activity tracking
                </h1>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review event concepts without collecting identifiers, emitting
                telemetry, recording consent, sending notifications, or claiming
                analytics.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset activity tracking preview"
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
                Tracking service unavailable.
              </strong>{" "}
              No consent manager, event collector, identifier store,
              notification service, analytics pipeline, SDK, or provider is
              connected. The records below are local fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">Search local tracking fixtures</span>
                <Activity
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search tracking fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter tracking state"
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
                      setStatus(`${option} tracking state selected locally.`);
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
                  <Activity
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local tracking plans
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(plan => (
                  <button
                    aria-pressed={plan.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${plan.id === selectedId ? "border-violet-400/35 bg-violet-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={plan.id}
                    onClick={() => {
                      setSelectedId(plan.id);
                      setStatus(
                        `${plan.title} selected for local tracking review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-violet-200">
                      <Activity aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {plan.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {plan.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {plan.purpose}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {plan.schema} · collection unavailable
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
                Selected event plan
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Purpose
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.purpose}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Schema</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.schema}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Consent</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.consent}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Identifiers, payloads, retention, opt-out, and analytics are
                  unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Collect event")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Collect unavailable
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
                    Collection boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No user, device, cookie, session, IP, location, payload,
                    consent, notification, provider, retention, deletion, or
                    analytics operation is available. Future tracking requires
                    purpose limitation, minimization, opt-out, redaction, access
                    control, and auditability.
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
                    Telemetry posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Collection state, consent state, event volume, identifiers,
                    retention, opt-out, notification, and analytics are
                    unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <KeyRound
                aria-hidden="true"
                className="mt-5 h-5 w-5 text-slate-600"
              />
              <UserRoundX
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
