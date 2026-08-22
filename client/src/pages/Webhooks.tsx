import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  CheckCircle2,
  FileJson,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Webhook,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Direction = "Inbound" | "Outbound";
type EventConcept = { name: string; direction: Direction; detail: string };
const events: readonly EventConcept[] = [
  {
    name: "Account lifecycle concept",
    direction: "Inbound",
    detail:
      "No sender, signature, schema version, or authorized consumer is configured.",
  },
  {
    name: "Wallet activity concept",
    direction: "Outbound",
    detail:
      "No blockchain source, event contract, transaction status, or destination is connected.",
  },
  {
    name: "Education progress concept",
    direction: "Outbound",
    detail:
      "No authenticated learner, completion proof, payload, or delivery record exists.",
  },
];

export default function Webhooks() {
  const [direction, setDirection] = useState<Direction>("Inbound");
  const [status, setStatus] = useState(
    "Webhook catalog unavailable locally. No inbound request or outbound event was accepted, emitted, or recorded."
  );
  const visible = events.filter(item => item.direction === direction);
  const notify = (action: string) =>
    setStatus(
      `${action} unavailable locally. No endpoint, credential, event contract, payload, delivery attempt, retry, or audit record was changed.`
    );
  return (
    <div data-ui-polish="batch-208" className="min-h-screen bg-background">
      <PageHeader
        icon={Webhook}
        title="Webhooks"
        subtitle="Review inbound and outbound event readiness without trusting requests, exposing secrets, emitting payloads, or claiming delivery outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Webhooks unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Webhook catalog unavailable.</strong> No verified event
            contracts, endpoint ownership, secret storage, signature
            verification, delivery queue, retry policy, or audit trail is
            connected.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => notify("Refresh webhook catalog")}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Event catalog preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Integration readiness
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  Inbound and outbound events require a versioned schema,
                  ownership, authorization, signing, replay protection,
                  idempotency, redaction, delivery telemetry, and safe failure
                  handling. These local concepts are not registered events.
                </p>
              </div>
              <FileJson
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Webhook direction"
            >
              <Button
                type="button"
                aria-pressed={direction === "Inbound"}
                onClick={() => {
                  setDirection("Inbound");
                  setStatus(
                    "Inbound concept filter changed locally. No request was accepted or verified."
                  );
                }}
                size="sm"
                variant={direction === "Inbound" ? "default" : "outline"}
              >
                <ArrowDownToLine className="mr-2 h-4 w-4" /> Inbound
              </Button>
              <Button
                type="button"
                aria-pressed={direction === "Outbound"}
                onClick={() => {
                  setDirection("Outbound");
                  setStatus(
                    "Outbound concept filter changed locally. No event was emitted or delivered."
                  );
                }}
                size="sm"
                variant={direction === "Outbound" ? "default" : "outline"}
              >
                <ArrowUpFromLine className="mr-2 h-4 w-4" /> Outbound
              </Button>
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(event => (
                <div
                  key={event.name}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{event.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {event.direction}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {event.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Register event unavailable
              </Button>
              <Button disabled variant="outline">
                Replay event unavailable
              </Button>
              <Button disabled variant="outline">
                Inspect delivery unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Event boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No event trust implied
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  ["Direction", direction],
                  ["Endpoint", "Not registered"],
                  ["Schema", "Not versioned"],
                  ["Secret", "Not generated"],
                  ["Signature", "Not verified"],
                  ["Payload", "Not sent"],
                  ["Delivery", "Not recorded"],
                  ["Audit", "Not written"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 p-3"
                  >
                    <span className="text-sm text-slate-500">{label}</span>
                    <span className="text-right text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  This preview does not receive, trust, send, replay, or inspect
                  webhook traffic. Secrets must remain server-side, signatures
                  must be verified before processing, and payloads must be
                  schema-validated, redacted, deduplicated, and tied to an
                  auditable delivery state.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Boundary visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No traffic trusted.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Event blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No delivery claimed.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No inbound request, outbound event, payload, signature, delivery,
            replay, retry, or audit result is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
