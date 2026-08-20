import { useState } from "react";
import {
  CheckCircle2,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ToggleKey = "updates" | "privacy" | "motion";
type ToggleItem = { key: ToggleKey; label: string; detail: string };
const items: readonly ToggleItem[] = [
  {
    key: "updates",
    label: "Product updates intent",
    detail:
      "Local preference only; no email provider, audience, or delivery contract is connected.",
  },
  {
    key: "privacy",
    label: "Discoverability intent",
    detail:
      "Local preference only; no profile index, consent record, or privacy policy is connected.",
  },
  {
    key: "motion",
    label: "Reduced-motion intent",
    detail:
      "Local preference only; no device setting or global animation policy is changed.",
  },
];

type ToggleState = Record<ToggleKey, boolean>;
const initialState: ToggleState = {
  updates: false,
  privacy: false,
  motion: false,
};

export default function ToggleSwitchForm() {
  const [values, setValues] = useState<ToggleState>(initialState);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(
    "Toggle service unavailable locally. No preference was persisted or applied."
  );
  const setToggle = (key: ToggleKey) => {
    setValues(current => ({ ...current, [key]: !current[key] }));
    setSaved(false);
    setStatus(
      "Toggle changed in local preview only. No account, device, privacy, email, or notification mutation was started."
    );
  };
  const reset = () => {
    setValues(initialState);
    setSaved(false);
    setStatus(
      "Toggle preview reset locally. No preference was persisted or applied."
    );
  };
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={SlidersHorizontal}
        title="Toggle switch form"
        subtitle="Review accessible preference toggles without claiming consent, persistence, delivery, device changes, or a global policy update."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Toggle service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Toggle service unavailable.</strong> No authenticated
            account, preference store, consent source, email provider, device
            setting, or global policy contract is connected. Values below are
            local intent only.
          </p>
          <Button onClick={reset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset toggles
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Toggle preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Choose local preference intent
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These typed controls demonstrate native button semantics,
                  checked state, keyboard activation, readable descriptions, and
                  local feedback. They do not represent consent, subscription,
                  delivery, access, privacy, or device outcomes.
                </p>
              </div>
              <SlidersHorizontal
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-3">
              {items.map(item => (
                <div
                  key={item.key}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 p-4"
                >
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={values[item.key]}
                    aria-label={item.label}
                    onClick={() => setToggle(item.key)}
                    className={`relative h-7 w-12 shrink-0 rounded-full p-1 transition ${values[item.key] ? "bg-cyan-300" : "bg-slate-700"}`}
                  >
                    <span
                      className={`block size-5 rounded-full bg-white transition ${values[item.key] ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                onClick={() => {
                  setSaved(true);
                  setStatus(
                    "Toggle draft saved locally. No preference was persisted or applied globally."
                  );
                }}
                className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              >
                {saved ? "Draft saved locally" : "Save preview locally"}
              </Button>
              <Button onClick={reset} variant="outline">
                Reset
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
                Selected toggle state
              </p>
              <h2 className="mt-2 text-xl font-semibold">Local preview only</h2>
              <dl className="mt-5 grid gap-2">
                {items.map(item => (
                  <div
                    key={item.key}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{item.label}</dt>
                    <dd className="mt-1 text-sm">
                      {values[item.key] ? "Intent enabled" : "Intent disabled"}
                    </dd>
                  </div>
                ))}
                <div className="rounded-lg border border-slate-800 p-3">
                  <dt className="text-xs text-slate-500">Persistence</dt>
                  <dd className="mt-1 text-sm">Unavailable</dd>
                </div>
              </dl>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production toggle requires authenticated scope, explicit
                  consent where relevant, server-side validation, persistence
                  semantics, privacy controls, email or notification delivery
                  policy, device preference handling, auditability, and
                  accessible failure states.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Switch semantics</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Uses role=switch and aria-checked.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Backend blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No preference mutation connected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">No consent claim</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Intent is not consent or opt-in.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No subscription, privacy, consent, notification, device, or access
            outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
