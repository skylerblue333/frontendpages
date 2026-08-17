import { useMemo, useState } from "react";
import {
  BellRing,
  CircleSlash2,
  Filter,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Policy = {
  id: string;
  title: string;
  trigger: string;
  state: State;
  description: string;
  message: string;
  recipient: string;
  identity: string;
  delivery: string;
};
const policies: Policy[] = [
  {
    id: "welcome",
    title: "Welcome response",
    trigger: "New conversation",
    state: "Review",
    description:
      "A local response-policy concept pending authorized conversation events and approved templates.",
    message: "Message unavailable",
    recipient: "Recipient unavailable",
    identity: "Identity unavailable",
    delivery: "Delivery unavailable",
  },
  {
    id: "status",
    title: "Status follow-up",
    trigger: "Status change",
    state: "Planned",
    description:
      "A follow-up concept requiring consent, rate limits, and human escalation rules.",
    message: "Message unavailable",
    recipient: "Recipient unavailable",
    identity: "Identity unavailable",
    delivery: "Delivery unavailable",
  },
  {
    id: "afterhours",
    title: "After-hours notice",
    trigger: "Schedule",
    state: "Unavailable",
    description:
      "A restricted policy concept requiring timezone, channel, and support ownership controls.",
    message: "Message unavailable",
    recipient: "Recipient unavailable",
    identity: "Identity unavailable",
    delivery: "Delivery unavailable",
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
  ...Array.from(new Set(policies.map(policy => policy.trigger))),
];

export default function AutoResponder() {
  const [trigger, setTrigger] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(policies[0].id);
  const [status, setStatus] = useState(
    "AutoResponder unavailable. Showing local response-policy fixtures only."
  );
  const filtered = useMemo(
    () =>
      policies.filter(
        policy =>
          (trigger === "All" || policy.trigger === trigger) &&
          (state === "All" || policy.state === state)
      ),
    [state, trigger]
  );
  const selected =
    policies.find(policy => policy.id === selectedId) ?? policies[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No trigger, message, recipient, identity, delivery, notification, or automation request was started.`
    );
  const reset = () => {
    setTrigger("All");
    setState("All");
    setSelectedId(policies[0].id);
    setStatus(
      "Response preview reset locally. No message, recipient, trigger, delivery, or automation state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime-400/25 bg-lime-400/10 text-lime-200">
              <Workflow aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  AutoResponder
                </h1>
                <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2 py-1 text-xs text-lime-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review response-policy concepts without fabricated messages,
                recipients, triggers, identities, delivery, automation, or
                support outcomes.
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
          <strong className="text-amber-100">AutoResponder unavailable.</strong>{" "}
          No authorized event source, recipient directory, message template
          store, delivery channel, rate-limit service, or automation runner is
          connected. These are local fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Filter className="h-4 w-4" />
              Filter policy fixtures
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
              aria-label="Policy state filter"
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
              {filtered.map(policy => (
                <button
                  aria-pressed={selectedId === policy.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === policy.id ? "border-lime-400/35 bg-lime-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={policy.id}
                  onClick={() => setSelectedId(policy.id)}
                  type="button"
                >
                  <p className="font-medium">{policy.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {policy.trigger} · {policy.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {policy.description}
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
                Selected policy
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-lime-200">
                {selected.trigger} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Message", selected.message],
                  ["Recipient", selected.recipient],
                  ["Identity", selected.identity],
                  ["Delivery", selected.delivery],
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
                No trigger, template, conversation, recipient, delivery, or
                support outcome is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Test")} variant="outline">
                  <BellRing className="mr-2 h-4 w-4" />
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
                  No trigger, message, recipient, identity, delivery,
                  notification, or automation operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production responders require consent, authorization,
                  templates, rate limits, abuse controls, delivery status,
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
