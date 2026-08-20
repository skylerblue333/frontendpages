import { useState } from "react";
import {
  CheckCircle2,
  LockKeyhole,
  MessageCircle,
  Send,
  ShieldAlert,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Stage = {
  label: string;
  description: string;
};

const stages: Stage[] = [
  {
    label: "Define participants",
    description:
      "Establish authenticated identity, consent, block state, and authorized participant scope.",
  },
  {
    label: "Compose locally",
    description:
      "Draft message content locally for review without identifying a recipient or persisting a message.",
  },
  {
    label: "Review privacy",
    description:
      "Confirm encryption, key ownership, retention, moderation, deletion, export, and support boundaries.",
  },
  {
    label: "Deliver safely",
    description:
      "Verify provider routing, delivery, retry, notification, read-receipt, presence, audit, and recovery contracts.",
  },
];

const controls = [
  "Authenticated identity, blocking, consent, and participant scope",
  "Message storage, encryption, key ownership, and retention",
  "Delivery, retry, notification, read-receipt, and presence policy",
  "Moderation, reporting, abuse prevention, and support",
  "Deletion, export, audit, recovery, and incident response",
] as const;

export default function DirectMessaging() {
  const [stage, setStage] = useState(0);
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const selectedStage = stages[stage];

  const handleDraftChange = (value: string) => {
    setDraft(value);
    setSaved(false);
  };

  const handleReset = () => {
    setDraft("");
    setSaved(false);
    setStage(0);
  };

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950/40 to-slate-900 p-6 text-white sm:p-10"
      aria-labelledby="direct-messaging-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-5xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
            <MessageCircle className="size-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
              Community communication
            </p>
            <h1
              id="direct-messaging-title"
              className="text-3xl font-black sm:text-4xl"
            >
              Direct messaging workspace
            </h1>
          </div>
          <span className="sm:ml-auto self-start rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-xs text-amber-100">
            Messaging provider unavailable
          </span>
        </header>

        <section
          className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.14] via-indigo-400/[0.08] to-transparent p-6 sm:p-10"
          aria-labelledby="boundary-title"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <ShieldAlert className="size-4" aria-hidden="true" />
            Truthful messaging boundary
          </div>
          <h2
            id="boundary-title"
            className="mt-4 max-w-3xl text-4xl font-black tracking-tight"
          >
            Compose safely without pretending a message was sent.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            This local workspace preserves draft, stage, privacy, and delivery
            planning. It does not send a message, establish encryption, identify
            a recipient, show presence, issue read receipts, or claim
            notification delivery.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <Button
              type="button"
              onClick={() => setSaved(true)}
              className="bg-cyan-200 text-slate-950 hover:bg-cyan-100"
            >
              {saved ? "Draft saved locally" : "Save draft locally"}
            </Button>
            <Button
              type="button"
              onClick={handleReset}
              variant="outline"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              Reset
            </Button>
          </div>
          <p
            className="mt-3 text-xs text-slate-400"
            role="status"
            aria-live="polite"
          >
            {saved
              ? "Local review state updated. No message was sent or persisted."
              : "Local draft changes remain in this page until reset or navigation."}
          </p>
        </section>

        <section
          className="mt-8 grid gap-6 lg:grid-cols-[0.86fr_1.14fr]"
          aria-label="Messaging readiness workflow"
        >
          <Card className="border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Message stages
            </p>
            <div
              className="mt-5 space-y-3"
              role="list"
              aria-label="Local messaging readiness stages"
            >
              {stages.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setStage(index)}
                  aria-current={stage === index ? "step" : undefined}
                  className={`w-full rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 ${stage === index ? "border-cyan-300/40 bg-cyan-300/[0.08]" : "border-white/10 hover:border-white/20"}`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${stage === index ? "bg-cyan-200 text-slate-950" : "bg-white/10 text-slate-400"}`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="font-semibold">{item.label}</span>
                    <span className="ml-auto text-xs text-amber-200">
                      Local intent
                    </span>
                  </span>
                  <span className="mt-2 block pl-11 text-sm leading-6 text-slate-400">
                    {item.description}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          <section
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            aria-labelledby="selected-stage-title"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                <UsersRound className="size-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Selected stage
                </p>
                <h2
                  id="selected-stage-title"
                  className="mt-2 text-3xl font-black"
                >
                  {selectedStage.label}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {selectedStage.description}
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Recipient", "Message", "Delivery"].map(label => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 font-semibold text-amber-200">
                    Unavailable
                  </p>
                </div>
              ))}
            </div>
            <label
              htmlFor="direct-messaging-draft"
              className="mt-6 block text-sm font-semibold text-slate-300"
            >
              Local draft
              <textarea
                id="direct-messaging-draft"
                value={draft}
                onChange={event => handleDraftChange(event.target.value)}
                placeholder="Draft locally for review"
                className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
              />
            </label>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                type="button"
                disabled
                aria-disabled="true"
                className="bg-slate-700 text-slate-400"
              >
                <Send className="mr-2 size-4" aria-hidden="true" />
                Send unavailable
              </Button>
              <Button
                type="button"
                disabled
                aria-disabled="true"
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Attach unavailable
              </Button>
              <Button
                type="button"
                disabled
                aria-disabled="true"
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Call unavailable
              </Button>
            </div>
          </section>
        </section>

        <section
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          aria-labelledby="messaging-controls-title"
        >
          <p
            id="messaging-controls-title"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200"
          >
            Messaging controls
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {controls.map(item => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 p-4 text-sm leading-6 text-slate-300"
              >
                <LockKeyhole
                  className="mt-1 size-4 shrink-0 text-amber-200"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>
        </section>
        <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-slate-500">
          <CheckCircle2
            className="mt-1 size-4 shrink-0 text-emerald-200"
            aria-hidden="true"
          />
          <strong className="text-amber-100">
            No message, delivery, encryption, presence, or notification claim is
            made.
          </strong>{" "}
          Local draft state only.
        </div>
      </div>
    </main>
  );
}
