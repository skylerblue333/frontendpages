import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  FileText,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const MAX_LENGTH = 280;

type FormState = "Empty" | "Local draft" | "Unavailable" | "Validation review";

export default function TextInputForm() {
  const [value, setValue] = useState("");
  const [state, setState] = useState<FormState>("Empty");
  const [status, setStatus] = useState(
    "Text-input service unavailable locally. No submission endpoint is connected."
  );
  const remaining = MAX_LENGTH - value.length;
  const hasText = value.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hasText) {
      setState("Validation review");
      setStatus("Enter local text before review. No submission was started.");
      return;
    }
    setState("Unavailable");
    setStatus(
      "Text submission is unavailable locally. The entered text remains in the browser preview only and was not persisted or sent."
    );
  };

  const reset = () => {
    setValue("");
    setState("Empty");
    setStatus(
      "Text-input service unavailable locally. No submission endpoint is connected."
    );
  };

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={FileText}
        title="Text input form"
        subtitle="Review a typed input flow with honest validation and privacy boundaries without claiming storage, moderation, delivery, or submission."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Text input service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Text input service unavailable.</strong> No backend
            contract, authenticated owner, moderation policy, persistence layer,
            delivery target, or submission endpoint is connected. This preview
            does not send or store text.
          </p>
          <Button onClick={reset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset form
          </Button>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Form preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Write a local draft
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  The field below demonstrates labels, a character limit,
                  required input feedback, and local-only draft state. It is not
                  a message, support ticket, application, prompt, or saved
                  record.
                </p>
              </div>
              <FileText
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label
                  htmlFor="text-input-preview"
                  className="text-sm font-medium text-slate-200"
                >
                  Text input
                </label>
                <textarea
                  id="text-input-preview"
                  value={value}
                  maxLength={MAX_LENGTH}
                  onChange={event => {
                    setValue(event.target.value);
                    setState(event.target.value ? "Local draft" : "Empty");
                    setStatus(
                      "Local draft changed. No text was persisted or sent."
                    );
                  }}
                  aria-describedby="text-input-help text-input-count"
                  aria-invalid={state === "Validation review"}
                  placeholder="Type locally for interface review"
                  className="mt-2 min-h-40 w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm leading-6 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                />
                <div className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-slate-500">
                  <p id="text-input-help">
                    Required for local validation only. No personal or sensitive
                    content is needed.
                  </p>
                  <p id="text-input-count" aria-live="polite">
                    {remaining} characters remaining
                  </p>
                </div>
                {state === "Validation review" && (
                  <p role="alert" className="mt-2 text-sm text-amber-200">
                    Enter at least one non-space character before reviewing the
                    unavailable submit action.
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="submit"
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  Review submission
                </Button>
                <Button type="button" onClick={reset} variant="outline">
                  Clear local draft
                </Button>
              </div>
            </form>
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
                Selected form state
              </p>
              <h2 className="mt-2 text-xl font-semibold">{state}</h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Input", hasText ? "Entered locally" : "Empty"],
                  [
                    "Validation",
                    state === "Validation review"
                      ? "Needs local input"
                      : "Client rules only",
                  ],
                  ["Persistence", "Unavailable"],
                  ["Moderation", "Policy unavailable"],
                  ["Delivery", "Target unavailable"],
                  ["Submission", "Endpoint unavailable"],
                ].map(([label, result]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{result}</dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production text flow requires purpose limitation,
                  sensitive-data handling, authenticated ownership, server-side
                  validation, moderation, rate limits, retention and deletion
                  rules, delivery provenance, and auditable error handling.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Typed input</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Local max length: {MAX_LENGTH}.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Send blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No target or endpoint.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Privacy boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No sensitive data required.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
      </main>
    </div>
  );
}
