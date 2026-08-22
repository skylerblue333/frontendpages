import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  Send,
  ShieldCheck,
  Webhook,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type WebhookGate = { label: string; state: string; detail: string };
const gates: readonly WebhookGate[] = [
  {
    label: "Endpoint registration",
    state: "Not connected",
    detail: "No URL is stored or displayed.",
  },
  {
    label: "Secret handling",
    state: "Unavailable",
    detail: "No signing secret, token, or credential is generated.",
  },
  {
    label: "Event contract",
    state: "Not defined",
    detail:
      "No event names, schemas, versions, or destinations are authoritative.",
  },
  {
    label: "Signature verification",
    state: "Not running",
    detail: "No inbound request is accepted or trusted.",
  },
  {
    label: "Delivery attempts",
    state: "Not recorded",
    detail: "No event has been sent or acknowledged.",
  },
  {
    label: "Retries / idempotency",
    state: "Not configured",
    detail: "No queue, backoff, deduplication, or replay behavior exists.",
  },
];

export default function WebhookManagement() {
  const [status, setStatus] = useState(
    "Webhook service unavailable locally. No endpoint, secret, event, delivery, retry, or inbound request was created."
  );
  const notify = (action: string) =>
    setStatus(
      `${action} unavailable locally. No URL, secret, event, delivery attempt, retry, signature verification, or persisted configuration was changed.`
    );
  return (
    <div data-ui-polish="batch-207" className="min-h-screen bg-background">
      <PageHeader
        icon={Webhook}
        title="Webhook management"
        subtitle="Review event-delivery readiness without exposing credentials, sending requests, trusting inbound traffic, or fabricating delivery outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Webhook management unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Webhook service unavailable.</strong> No verified endpoint
            contract, secret vault, event schema, signature verification,
            delivery queue, retry policy, or audit trail is connected.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => notify("Refresh webhook readiness")}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Integration preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Delivery readiness
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  A production webhook system needs authenticated ownership,
                  secret rotation, signed payloads, schema versioning, replay
                  protection, idempotency, delivery observability, safe retries,
                  redaction, and explicit inbound authorization. This workspace
                  shows those gates without contacting an endpoint.
                </p>
              </div>
              <Send
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-3">
              {gates.map(gate => (
                <div
                  key={gate.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{gate.label}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {gate.state}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {gate.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Register endpoint unavailable
              </Button>
              <Button disabled variant="outline">
                Send test event unavailable
              </Button>
              <Button disabled variant="outline">
                Rotate secret unavailable
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
                Security boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No webhook trust implied
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  ["Credential", "Not generated"],
                  ["Endpoint", "Not stored"],
                  ["Payload", "Not sent"],
                  ["Inbound request", "Not accepted"],
                  ["Signature", "Not verified"],
                  ["Delivery status", "Not known"],
                  ["Audit record", "Not written"],
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
                  Secrets belong in server-side secret storage and must never
                  appear in client markup, logs, screenshots, or exported
                  payloads. Any future handler must authenticate the owner,
                  validate schemas, verify signatures against a rotated secret,
                  enforce replay and idempotency rules, redact sensitive data,
                  and record safe delivery telemetry.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldCheck
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Trust blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No request accepted.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <KeyRound
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Secrets absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Nothing exposed.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Clock3
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Delivery absent</p>
                  <p className="mt-1 text-xs text-slate-500">No retry state.</p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Send blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No outbound call.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-cyan-200" aria-hidden="true" />
          <strong className="text-cyan-100">
            No endpoint, secret, event, inbound request, signature verification,
            delivery attempt, retry, or audit result is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
