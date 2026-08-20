import { useState } from "react";
import {
  CheckCircle2,
  CircleAlert,
  Clock3,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";

const states = [
  {
    label: "Intent recorded",
    detail: "Local browser intent only",
    icon: CheckCircle2,
  },
  { label: "Processing", detail: "No worker or request", icon: Clock3 },
  {
    label: "Verified success",
    detail: "Requires authoritative response",
    icon: CheckCircle2,
  },
  {
    label: "Failure and recovery",
    detail: "Requires retry contract",
    icon: CircleAlert,
  },
];
export default function SuccessDialog() {
  const [saved, setSaved] = useState(false);
  const [open, setOpen] = useState(true);
  const reset = () => {
    setSaved(false);
    setOpen(true);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={CheckCircle2}
        eyebrow="Success screen · Result-state preview"
        title="Present a result state without claiming an action succeeded."
        description="Review a local full-screen result-state workspace for intent, processing, verified success, failure, retry, idempotency, persistence, accessibility, privacy, audit, and recovery. No account change, payment, wallet transaction, message delivery, entitlement, upload, or business outcome is connected."
        badge="Evidence-bounded success-screen workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <CheckCircle2 className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save state locally"}
          </Button>
          <Button
            onClick={() => setOpen(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {open ? (
              <X className="mr-2 size-4" />
            ) : (
              <CheckCircle2 className="mr-2 size-4" />
            )}
            {open ? "Dismiss preview" : "Open preview"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset state
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Intent",
              value: "Local only",
              hint: "No request source",
              icon: CheckCircle2,
              tone: "cyan",
            },
            {
              label: "Processing",
              value: "Unavailable",
              hint: "No worker source",
              icon: Clock3,
              tone: "violet",
            },
            {
              label: "Outcome",
              value: "Unverified",
              hint: "No response source",
              icon: ShieldAlert,
              tone: "amber",
            },
            {
              label: "Retry",
              value: "Blocked",
              hint: "No idempotency",
              icon: RefreshCw,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Success-screen evidence boundary">
          <strong>
            This is a local success-screen design preview, not evidence that any
            action, transaction, account change, delivery, payment, entitlement,
            upload, or business outcome succeeded.
          </strong>{" "}
          Saved state, dialog visibility, labels, and disabled retry/confirm
          actions are browser concepts. No success, failure, request ID,
          transaction hash, receipt, webhook, or persistence claim is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Screen result states
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Every outcome needs evidence
              </h2>
              <div className="mt-6 space-y-3">
                {states.map(state => (
                  <div
                    key={state.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 p-4"
                  >
                    <state.icon className="size-4 text-slate-500" />
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">
                        {state.label}
                      </span>
                      <span className="text-xs text-slate-500">
                        {state.detail}
                      </span>
                    </span>
                    <Badge
                      variant="outline"
                      className="border-amber-300/20 text-amber-200"
                    >
                      Unavailable
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Selected screen state
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {open
                  ? "No verified screen success loaded"
                  : "Dialog dismissed locally"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A real success dialog must receive an authoritative response,
                correlate a request or idempotency key, persist the result,
                distinguish pending from confirmed and failed states, protect
                sensitive details, and provide an accessible recovery path.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Request", value: "Unavailable" },
                  { label: "Receipt", value: "No source" },
                  { label: "Persistence", value: "Unverified" },
                  { label: "Retry", value: "No contract" },
                  { label: "Audit", value: "No source" },
                  { label: "Privacy", value: "Review required" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <CheckCircle2 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No verified result loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A visual confirmation is not a server response. Do not show
                  success, payment completion, transaction confirmation, account
                  creation, delivery, or entitlement until the authoritative
                  operation is verified.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Confirm outcome unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Retry unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  View receipt unavailable
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Success-screen governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real success screen must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authoritative response, status code, schema validation, request correlation, idempotency, timeout, and duplicate handling",
                "Clear pending, confirmed, failed, cancelled, and unknown states with retry and reconciliation rules",
                "Receipt, hash, webhook, delivery, persistence, or audit evidence must be sourced before showing a consequential success",
                "Sensitive identifiers, payment data, credentials, wallet details, and personal information require minimization and access control",
                "Confirm, retry, dismiss, undo, support, and escalation actions require accessible loading, failure, and recovery behavior",
                "A success dialog must not be used to imply an account, payment, transaction, delivery, entitlement, or business result without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <Badge
                    variant="outline"
                    className="border-amber-300/20 text-amber-200"
                  >
                    Required
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Success-screen surface preserved",
              description:
                "Intent, processing, verified success, failure, retry, persistence, audit, privacy, dialog visibility, save/reset, and blocked confirmation actions remain visible.",
              icon: CheckCircle2,
              status: "Read-only",
            },
            {
              title: "No success theater",
              description:
                "Account changes, payments, transactions, deliveries, entitlements, uploads, receipts, and business outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before screen confirmation",
              description:
                "Real success requires authoritative response, correlation, persistence, idempotency, reconciliation, and accessible recovery.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
