import { useState } from "react";
import {
  Bell,
  CheckCircle2,
  Info,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ToastKind = "Info" | "Success" | "Warning" | "Error";
type ToastPreview = {
  id: string;
  kind: ToastKind;
  title: string;
  body: string;
};
const initialToasts: readonly ToastPreview[] = [
  {
    id: "info",
    kind: "Info",
    title: "Preview information",
    body: "A local notification concept is ready for review.",
  },
  {
    id: "warning",
    kind: "Warning",
    title: "Delivery unavailable",
    body: "No notification provider or persistence contract is connected.",
  },
];

export default function ToastNotifications() {
  const [toasts, setToasts] = useState<ToastPreview[]>([...initialToasts]);
  const [status, setStatus] = useState(
    "Toast service unavailable locally. No notification was delivered."
  );
  const dismiss = (id: string) => {
    setToasts(current => current.filter(toast => toast.id !== id));
    setStatus(
      "Toast dismissed locally. No delivery, persistence, or read-state mutation was started."
    );
  };
  const reset = () => {
    setToasts([...initialToasts]);
    setStatus("Toast preview reset locally. No notification was delivered.");
  };
  const addLocal = () => {
    setToasts(current => [
      ...current,
      {
        id: `local-${current.length + 1}`,
        kind: "Success",
        title: "Local preview",
        body: "This toast exists in browser state only.",
      },
    ]);
    setStatus(
      "Local preview toast added. No provider, queue, or notification event was used."
    );
  };

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Bell}
        title="Toast notifications"
        subtitle="Review notification timing and dismissal states without claiming delivery, persistence, read state, or a real alert event."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Toast service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Toast service unavailable.</strong> No event source,
            notification provider, delivery queue, account preference,
            persistence layer, or cross-device sync is connected. Toasts below
            are local preview state only.
          </p>
          <Button onClick={reset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset toasts
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Toast preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local notification states
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These typed fixtures demonstrate severity, ordering,
                  dismissal, and live status semantics. They do not represent a
                  delivered alert, message, email, push, inbox record, or
                  user-facing operational event.
                </p>
              </div>
              <Bell
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                onClick={addLocal}
                className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              >
                Add local toast
              </Button>
              <Button onClick={() => setToasts([])} variant="outline">
                Dismiss all locally
              </Button>
            </div>
            <div className="mt-6 space-y-3" aria-label="Local toast previews">
              {toasts.length ? (
                toasts.map(toast => (
                  <div
                    key={toast.id}
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <div className="mt-0.5 shrink-0 text-cyan-200">
                      {toast.kind === "Info" ? (
                        <Info className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-medium">{toast.title}</p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {toast.kind}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {toast.body}
                      </p>
                    </div>
                    <Button
                      type="button"
                      aria-label={`Dismiss ${toast.title}`}
                      onClick={() => dismiss(toast.id)}
                      variant="ghost"
                      size="icon"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))
              ) : (
                <p className="rounded-xl border border-dashed border-slate-700 p-6 text-sm text-slate-500">
                  No local toasts are currently shown. This does not indicate
                  that a real notification was read or dismissed.
                </p>
              )}
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
                Selected notification state
              </p>
              <h2 className="mt-2 text-xl font-semibold">Local preview only</h2>
              <dl className="mt-5 grid gap-2">
                {[
                  [
                    "Count",
                    `${toasts.length} local preview${toasts.length === 1 ? "" : "s"}`,
                  ],
                  ["Delivery", "Provider unavailable"],
                  ["Persistence", "Store unavailable"],
                  ["Read state", "Unavailable"],
                  ["Timing", "Timeout policy unavailable"],
                  ["Audience", "Recipient scope unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
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
                  A production notification system requires event provenance,
                  recipient authorization, severity policy, accessible live
                  regions, rate limits, deduplication, timeout semantics,
                  delivery receipts, privacy-safe content, persistence,
                  cross-device consistency, and auditability.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Live intent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Local status uses polite announcements.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Delivery blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No provider or queue connected.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No alert, message, email, push, inbox, delivery, read, or dismissal
            outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
