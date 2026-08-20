import { useState } from "react";
import {
  BellRing,
  CircleSlash2,
  LockKeyhole,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AlertState = "All" | "Review" | "Unavailable" | "Planned";
type AlertConcept = {
  title: string;
  state: Exclude<AlertState, "All">;
  summary: string;
  source: string;
  threshold: string;
  recipient: string;
  schedule: string;
  delivery: string;
  incident: string;
};
const concepts: AlertConcept[] = [
  {
    title: "Core service alert",
    state: "Review",
    summary:
      "Local alert-policy concept pending a verified event schema, threshold semantics, deduplication, rate limits, recipient consent, and channel security.",
    source: "Event source unavailable",
    threshold: "Threshold unavailable",
    recipient: "Recipient policy unavailable",
    schedule: "Schedule unavailable",
    delivery: "Delivery state unavailable",
    incident: "Incident linkage unavailable",
  },
  {
    title: "Financial risk alert",
    state: "Unavailable",
    summary:
      "Local financial alert concept pending sensitive-event authorization, escalation policy, auditability, and incident lifecycle controls.",
    source: "Event source unavailable",
    threshold: "Threshold unavailable",
    recipient: "Recipient policy unavailable",
    schedule: "Schedule unavailable",
    delivery: "Delivery state unavailable",
    incident: "Incident linkage unavailable",
  },
  {
    title: "Education engagement alert",
    state: "Planned",
    summary:
      "Local education alert concept pending learner-safe signals, consent-aware recipients, quiet hours, and notification evidence.",
    source: "Event source unavailable",
    threshold: "Threshold unavailable",
    recipient: "Recipient policy unavailable",
    schedule: "Schedule unavailable",
    delivery: "Delivery state unavailable",
    incident: "Incident linkage unavailable",
  },
];
export default function AlertConfiguration() {
  const [state, setState] = useState<AlertState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Alert service unavailable. Showing local policy concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No alert, event, threshold, recipient, schedule, notification, webhook, incident, or production configuration was started.`
    );
  return (
    <div data-ui-polish="batch-181" className="min-h-screen bg-background">
      <PageHeader
        icon={BellRing}
        title="Alert configuration"
        subtitle="Review local alert-policy concepts without fabricated events, thresholds, recipients, schedules, delivery results, incidents, or notification claims."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Alert service unavailable.</strong> No event source, threshold
          model, recipient policy, schedule, notification channel, or incident
          linkage is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Alert preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review alert policies
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show configuration structure only; they do
              not represent live events, triggers, delivery, incidents, or
              notifications.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Unavailable", "Planned"] as AlertState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.title === item.title ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
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
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Source", selected.source],
                    ["Threshold", selected.threshold],
                    ["Recipient", selected.recipient],
                    ["Schedule", selected.schedule],
                    ["Delivery", selected.delivery],
                    ["Incident", selected.incident],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create alert")}
                  variant="outline"
                >
                  <BellRing className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
                <Button onClick={() => blocked("Test alert")} variant="outline">
                  <TestTube2 className="mr-2 h-4 w-4" /> Test unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Alerts require verified event schemas, threshold semantics,
                  deduplication, rate limits, recipient consent, channel
                  security, escalation policy, auditability, and incident
                  lifecycle controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No alert, event, threshold, delivery, incident, escalation,
                  webhook, email, or production configuration is available from
                  this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No alert count, trigger state, delivery result, incident, or
                  response-time claim is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
