import { useState } from "react";
import {
  AlertCircle,
  Check,
  FileText,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Ticket,
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

const cases = [
  "Account access",
  "Billing question",
  "Wallet safety",
  "Education support",
  "Technical issue",
];
export default function TicketDetail() {
  const [category, setCategory] = useState(cases[0]);
  const [severity, setSeverity] = useState("Severity not assessed");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const reset = () => {
    setCategory(cases[0]);
    setSeverity("Severity not assessed");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Ticket}
        eyebrow="Support ticket · Detail-readiness preview"
        title="Review ticket details without claiming an outcome."
        description="Review local ticket detail, identity, message, routing, SLA, and resolution boundaries. No ticket record, agent assignment, response, refund, account change, or customer outcome is connected."
        badge="Ticket detail preview"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save detail locally"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review support gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset detail
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Requester",
              value: "Unavailable",
              hint: "No identity source",
              icon: Ticket,
              tone: "cyan",
            },
            {
              label: "Case",
              value: "Local only",
              hint: "No ticket source",
              icon: FileText,
              tone: "violet",
            },
            {
              label: "Routing",
              value: "Unassigned",
              hint: "No support queue",
              icon: AlertCircle,
              tone: "amber",
            },
            {
              label: "SLA",
              value: "Unavailable",
              hint: "No service contract",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Ticket-detail evidence boundary">
          <strong>
            This is a local ticket-detail preview, not evidence that a ticket
            exists, was routed, read, answered, escalated, refunded, resolved,
            or closed.
          </strong>{" "}
          Category, severity, saved state, privacy prompts, and disabled
          reply/attach actions are browser concepts. No requester, message,
          attachment, agent, SLA, response, resolution, refund, or customer
          outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Ticket detail state
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Review a local ticket detail
              </h2>
              <label className="mt-6 block text-sm font-semibold text-slate-300">
                Category
                <select
                  value={category}
                  onChange={event => setCategory(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  {cases.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-sm font-semibold text-slate-300">
                Severity
                <select
                  value={severity}
                  onChange={event => setSeverity(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Severity not assessed</option>
                  <option>Low intent</option>
                  <option>Needs review</option>
                  <option>Urgent intent</option>
                </select>
              </label>
              <div className="mt-5 rounded-xl border border-white/10 p-4">
                <p className="text-sm font-semibold">
                  Message and attachment intent
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  No message, personal data, payment detail, wallet key, seed
                  phrase, or attachment is stored or transmitted by this
                  preview.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Selected ticket detail
              </p>
              <h2 className="mt-2 text-2xl font-black">{category}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A real support ticket requires authenticated requester identity,
                consent, redacted content, attachment scanning, routing
                ownership, severity policy, SLA definition, agent access
                controls, response history, escalation, audit, and a correction
                or appeal path.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Requester", value: "Unavailable" },
                  { label: "Status", value: "Draft only" },
                  { label: "Severity", value: severity },
                  { label: "Queue", value: "Unassigned" },
                  { label: "SLA", value: "No contract" },
                  { label: "Response", value: "No source" },
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
                <Ticket className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No ticket evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect identity, case persistence, queue routing, agent
                  authorization, redaction, attachment scanning, SLA policy,
                  response history, escalation, and audit before claiming
                  support activity.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Reply unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Attach unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Escalate unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Close unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No ticket outcome claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local case concept does not prove ticket creation, agent
                    review, response time, SLA compliance, refund, resolution,
                    or customer satisfaction.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Ticket governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real ticket system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated requester, tenant, account, channel, consent, locale, timezone, and case provenance",
                "Redaction, secure attachment scanning, secret detection, payment and wallet safety, retention, and access controls",
                "Queue ownership, severity policy, SLA contract, assignment, response history, escalation, incident linkage, and audit",
                "Clear pending, accepted, assigned, waiting, resolved, closed, rejected, and reopened states",
                "Submit, attach, retry, escalate, close, reopen, redact, export, and support-contact actions need accessible recovery",
                "A support preview must not imply response, resolution, refund, SLA compliance, satisfaction, or customer outcome without evidence",
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
              title: "Support surface preserved",
              description:
                "Requester, category, severity, message and attachment intent, routing, SLA, response, escalation, save/reset, and blocked support actions remain visible.",
              icon: Ticket,
              status: "Read-only",
            },
            {
              title: "No resolution theater",
              description:
                "Tickets, agents, responses, SLAs, refunds, resolutions, and customer outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before submission",
              description:
                "Real support requires authenticated intake, privacy controls, queue ownership, case persistence, escalation, audit, and accessible recovery.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
