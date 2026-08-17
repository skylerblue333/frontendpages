import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Filter,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Rule = {
  id: string;
  title: string;
  trigger: string;
  state: State;
  description: string;
  identity: string;
  schedule: string;
  action: string;
  execution: string;
};
const rules: Rule[] = [
  {
    id: "profile",
    title: "Profile review prompt",
    trigger: "Profile update",
    state: "Review",
    description:
      "A local rule concept pending authorized event ingestion and an approved action contract.",
    identity: "Identity unavailable",
    schedule: "Schedule unavailable",
    action: "Action unavailable",
    execution: "Execution disabled",
  },
  {
    id: "course",
    title: "Course reminder",
    trigger: "Course milestone",
    state: "Planned",
    description:
      "A reminder concept requiring learner consent, course membership, and notification policy.",
    identity: "Identity unavailable",
    schedule: "Schedule unavailable",
    action: "Action unavailable",
    execution: "Execution disabled",
  },
  {
    id: "security",
    title: "Security escalation",
    trigger: "Security event",
    state: "Unavailable",
    description:
      "A restricted rule concept requiring incident ownership, least privilege, and rollback controls.",
    identity: "Identity unavailable",
    schedule: "Schedule unavailable",
    action: "Action unavailable",
    execution: "Execution disabled",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const triggers = [
  "All",
  ...Array.from(new Set(rules.map(rule => rule.trigger))),
];
export default function AutomationRules() {
  const [trigger, setTrigger] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(rules[0].id);
  const [status, setStatus] = useState(
    "Automation unavailable. Showing local rule fixtures only."
  );
  const filtered = useMemo(
    () =>
      rules.filter(
        rule =>
          (trigger === "All" || rule.trigger === trigger) &&
          (state === "All" || rule.state === state)
      ),
    [state, trigger]
  );
  const selected = rules.find(rule => rule.id === selectedId) ?? rules[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No trigger, identity, schedule, action, execution, notification, or automation request was started.`
    );
  const reset = () => {
    setTrigger("All");
    setState("All");
    setSelectedId(rules[0].id);
    setStatus(
      "Automation preview reset locally. No rule, schedule, execution, notification, or outcome state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-200">
              <Zap aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Automation rules
                </h1>
                <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-2 py-1 text-xs text-orange-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review rule concepts without fabricated triggers, actions,
                identities, schedules, executions, notifications, or business
                outcomes.
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
          <strong className="text-amber-100">Automation unavailable.</strong> No
          authorized event source, identity directory, scheduler, action
          connector, idempotency service, or automation runner is connected.
          These are local fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Filter className="h-4 w-4" />
              Filter rule fixtures
            </div>
            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label="Trigger filter"
            >
              {triggers.map(item => (
                <Button
                  aria-pressed={trigger === item}
                  key={item}
                  onClick={() => setTrigger(item)}
                  size="sm"
                  variant={trigger === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Rule state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant="outline"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(rule => (
                <button
                  aria-pressed={selectedId === rule.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === rule.id ? "border-orange-400/35 bg-orange-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={rule.id}
                  onClick={() => setSelectedId(rule.id)}
                  type="button"
                >
                  <p className="font-medium">{rule.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {rule.trigger} · {rule.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {rule.description}
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
                Selected rule
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-orange-200">
                {selected.trigger} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Identity", selected.identity],
                  ["Schedule", selected.schedule],
                  ["Action", selected.action],
                  ["Execution", selected.execution],
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
                No event, identity, schedule, action, execution, notification,
                or business outcome is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Test")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Test unavailable
                </Button>
                <Button onClick={() => blocked("Enable")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Enable unavailable
                </Button>
                <Button onClick={() => blocked("Create")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No trigger, identity, schedule, action, execution,
                  notification, or automation operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production automation requires authorization, idempotency,
                  least privilege, rate limits, rollback, delivery status,
                  auditability, and escalation.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
