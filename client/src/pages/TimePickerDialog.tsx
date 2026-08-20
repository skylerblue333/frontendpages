import { useEffect, useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function TimePickerDialog() {
  const [open, setOpen] = useState(true);
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("Timezone intent required");
  const [status, setStatus] = useState(
    "Time-picker service unavailable locally. No schedule or reminder was created."
  );
  const valid = Boolean(time && timezone !== "Timezone intent required");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setStatus(
          "Dialog closed locally. No time selection or schedule was saved."
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const reset = () => {
    setOpen(true);
    setTime("");
    setTimezone("Timezone intent required");
    setStatus(
      "Time-picker service unavailable locally. No schedule or reminder was created."
    );
  };
  const confirm = () => {
    if (!valid) {
      setStatus(
        "Choose a time and timezone intent before local review. No schedule was created."
      );
      return;
    }
    setStatus(
      "Time selection confirmed locally. No conversion, persistence, reminder, or calendar mutation was started."
    );
    setOpen(false);
  };

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={CalendarClock}
        title="Time picker dialog"
        subtitle="Review dialog semantics and time selection without claiming a saved appointment, reminder, calendar event, or timezone conversion."
      />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <section
          aria-label="Time picker service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Time-picker service unavailable.</strong> This preview has
            no scheduling backend, calendar, device timezone, persistence layer,
            authenticated owner, or notification provider. Dialog state and
            inputs are local only.
          </p>
          <Button onClick={reset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset dialog
          </Button>
        </section>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Dialog preview
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Open a local time picker
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                The preview demonstrates an explicit trigger, dialog role, close
                affordance, Escape behavior, labeled time and timezone controls,
                local validation, and a no-op confirm action.
              </p>
            </div>
            <Clock3
              className="hidden h-7 w-7 text-cyan-200 sm:block"
              aria-hidden="true"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              onClick={() => setOpen(true)}
              className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
            >
              Open time picker
            </Button>
            <Button onClick={reset} variant="outline">
              Reset state
            </Button>
          </div>
          <p
            aria-live="polite"
            className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
          >
            {status}
          </p>
        </Card>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
            role="presentation"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="time-picker-title"
              aria-describedby="time-picker-description"
              className="w-full max-w-md rounded-2xl border border-cyan-300/20 bg-slate-900 p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-200">
                    Local dialog
                  </p>
                  <h2
                    id="time-picker-title"
                    className="mt-2 text-2xl font-semibold"
                  >
                    Choose a time intent
                  </h2>
                </div>
                <Button
                  aria-label="Close time picker"
                  onClick={() => {
                    setOpen(false);
                    setStatus(
                      "Dialog closed locally. No time selection or schedule was saved."
                    );
                  }}
                  variant="ghost"
                  size="icon"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <p
                id="time-picker-description"
                className="mt-3 text-sm leading-6 text-slate-400"
              >
                No appointment, reminder, calendar event, conversion, or
                notification will be created by this local preview.
              </p>
              <div className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-slate-200">
                  Time
                  <input
                    autoFocus
                    type="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-200">
                  Timezone intent
                  <select
                    value={timezone}
                    onChange={event => setTimezone(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                  >
                    <option>Timezone intent required</option>
                    <option>UTC intent</option>
                    <option>Local device intent</option>
                    <option>Named timezone intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 flex flex-wrap justify-end gap-2">
                <Button
                  onClick={() => {
                    setOpen(false);
                    setStatus(
                      "Dialog cancelled locally. No time selection or schedule was saved."
                    );
                  }}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirm}
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  Confirm locally
                </Button>
              </div>
            </div>
          </div>
        )}
        <section className="grid gap-4 sm:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CheckCircle2
              className="h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="mt-2 font-medium">Dialog semantics</p>
            <p className="mt-1 text-sm text-slate-500">
              Role, label, description, close, cancel, and Escape intent are
              present.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <XCircle className="h-5 w-5 text-amber-300" aria-hidden="true" />
            <p className="mt-2 font-medium">Scheduling blocked</p>
            <p className="mt-1 text-sm text-slate-500">
              No calendar, reminder, or notification target is connected.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <LockKeyhole
              className="h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="mt-2 font-medium">Timezone boundary</p>
            <p className="mt-1 text-sm text-slate-500">
              No device detection or conversion is claimed.
            </p>
          </Card>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No real time selection, schedule, or delivery outcome is asserted.
          </strong>
        </p>
      </main>
    </div>
  );
}
