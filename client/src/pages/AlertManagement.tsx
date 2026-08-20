import { useState } from "react";
import {
  Bell,
  CircleSlash2,
  LockKeyhole,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AlertState = "All" | "Active" | "Review" | "Unavailable";
type AlertConcept = {
  title: string;
  state: Exclude<AlertState, "All">;
  summary: string;
  source: string;
  trigger: string;
  delivery: string;
  recipient: string;
  incident: string;
  response: string;
};
const concepts: AlertConcept[] = [
  {
    title: "Core service alert",
    state: "Active",
    summary:
      "Local operations concept pending verified event provenance, delivery receipts, escalation policy, incident state transitions, and auditable acknowledgement.",
    source: "Event source unavailable",
    trigger: "Trigger state unavailable",
    delivery: "Delivery receipt unavailable",
    recipient: "Recipient state unavailable",
    incident: "Incident linkage unavailable",
    response: "Response state unavailable",
  },
  {
    title: "Financial risk alert",
    state: "Review",
    summary:
      "Local financial operations concept pending sensitive-event authorization, recipient consent, idempotent acknowledgement, and safe rollback.",
    source: "Event source unavailable",
    trigger: "Trigger state unavailable",
    delivery: "Delivery receipt unavailable",
    recipient: "Recipient state unavailable",
    incident: "Incident linkage unavailable",
    response: "Response state unavailable",
  },
  {
    title: "Education engagement alert",
    state: "Unavailable",
    summary:
      "Local education operations concept pending learner-safe event provenance, quiet hours, delivery evidence, and privacy review.",
    source: "Event source unavailable",
    trigger: "Trigger state unavailable",
    delivery: "Delivery receipt unavailable",
    recipient: "Recipient state unavailable",
    incident: "Incident linkage unavailable",
    response: "Response state unavailable",
  },
];
export default function AlertManagement() {
  const [state, setState] = useState<AlertState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Alert operations service unavailable. Showing local concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No alert, event, trigger, delivery, notification, incident, acknowledgement, response, or production mutation was started.`
    );
  return (
    <div data-ui-polish="batch-181" className="min-h-screen bg-background">
      <PageHeader
        icon={Bell}
        title="Alert management"
        subtitle="Review local alert-operations concepts without fabricated triggers, delivery receipts, notifications, incidents, acknowledgements, or response metrics."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Alert operations service unavailable.</strong> No
          authoritative alert inventory, event source, trigger state,
          notification delivery record, incident linkage, recipient policy, or
          response workflow is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Operations preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Review alert operations
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show operations structure only; they do not
              represent live alerts, triggers, deliveries, incidents,
              acknowledgements, or response times.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(["All", "Active", "Review", "Unavailable"] as AlertState[]).map(
                item => (
                  <Button
                    key={item}
                    aria-pressed={state === item}
                    onClick={() => setState(item)}
                    size="sm"
                    variant={state === item ? "default" : "outline"}
                  >
                    {item}
                  </Button>
                )
              )}
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
                Selected alert
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Source", selected.source],
                    ["Trigger", selected.trigger],
                    ["Delivery", selected.delivery],
                    ["Recipient", selected.recipient],
                    ["Incident", selected.incident],
                    ["Response", selected.response],
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
                  onClick={() => blocked("Acknowledge alert")}
                  variant="outline"
                >
                  <Bell className="mr-2 h-4 w-4" /> Acknowledge unavailable
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
                  Alert operations require verified event provenance,
                  deduplication, delivery receipts, recipient consent,
                  escalation policy, incident transitions, idempotent
                  acknowledgement, auditability, and safe rollback.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No alert, trigger, delivery, incident, response, escalation,
                  notification, or production configuration is available from
                  this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No alert count, delivery result, incident, acknowledgement, or
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
