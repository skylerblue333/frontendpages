import { useState } from "react";
import {
  CheckCircle2,
  Eye,
  LockKeyhole,
  MonitorCog,
  RefreshCw,
  ShieldAlert,
  Smartphone,
  SunMoon,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ThemeMode = "System preference" | "Light preview" | "Dark preview";
type Density = "Comfortable" | "Compact";

export default function ThemeSettings() {
  const [theme, setTheme] = useState<ThemeMode>("System preference");
  const [density, setDensity] = useState<Density>("Comfortable");
  const [fontScale, setFontScale] = useState("100%");
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState(
    "Theme service unavailable locally. Preview preferences are not persisted or applied globally."
  );
  const reset = () => {
    setTheme("System preference");
    setDensity("Comfortable");
    setFontScale("100%");
    setHighContrast(false);
    setReducedMotion(false);
    setSaved(false);
    setStatus(
      "Theme service unavailable locally. Preview preferences were reset."
    );
  };
  const save = () => {
    setSaved(true);
    setStatus(
      "Theme preference draft saved locally. No global setting was changed."
    );
  };

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={SunMoon}
        title="Theme settings"
        subtitle="Preview appearance and accessibility preferences without claiming device detection, persistence, or a global theme change."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Theme service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Theme service unavailable.</strong> No account preference,
            device system setting, browser storage, contrast audit, font loader,
            or global application theme contract is connected. Controls below
            are local preview intent only.
          </p>
          <Button onClick={reset} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Reset preview
          </Button>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Appearance preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Shape a local preference draft
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  These controls do not change the application shell, operating
                  system, browser, account, or another user’s view.
                </p>
              </div>
              <MonitorCog
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-200">
                Color mode
                <select
                  value={theme}
                  onChange={event => setTheme(event.target.value as ThemeMode)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                >
                  <option>System preference</option>
                  <option>Light preview</option>
                  <option>Dark preview</option>
                </select>
              </label>
              <label className="text-sm font-medium text-slate-200">
                Content density
                <select
                  value={density}
                  onChange={event => setDensity(event.target.value as Density)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                >
                  <option>Comfortable</option>
                  <option>Compact</option>
                </select>
              </label>
              <label className="text-sm font-medium text-slate-200">
                Font scale
                <select
                  value={fontScale}
                  onChange={event => setFontScale(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                >
                  <option>100%</option>
                  <option>110%</option>
                  <option>125%</option>
                  <option>150%</option>
                </select>
              </label>
              <div className="rounded-xl border border-slate-800 p-4">
                <p className="text-sm font-medium">Preview summary</p>
                <p className="mt-2 text-sm text-slate-400">
                  {theme} · {density} · {fontScale}
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                {
                  label: "High-contrast intent",
                  value: highContrast,
                  set: setHighContrast,
                  detail:
                    "Local intent only; no contrast audit or global theme update is connected.",
                },
                {
                  label: "Reduced-motion intent",
                  value: reducedMotion,
                  set: setReducedMotion,
                  detail:
                    "Local intent only; no animation policy or OS preference is changed.",
                },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 p-4"
                >
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.detail}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed={item.value}
                    onClick={() => item.set(value => !value)}
                    className={`h-6 w-11 shrink-0 rounded-full p-1 transition ${item.value ? "bg-cyan-300" : "bg-white/10"}`}
                  >
                    <span
                      className={`block size-4 rounded-full bg-white transition ${item.value ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                onClick={save}
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
                Selected appearance state
              </p>
              <h2 className="mt-2 text-xl font-semibold">Local preview only</h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Color mode", theme],
                  ["Density", density],
                  ["Font scale", fontScale],
                  [
                    "Contrast",
                    highContrast ? "Intent enabled" : "Default intent",
                  ],
                  [
                    "Motion",
                    reducedMotion ? "Reduced intent" : "Default intent",
                  ],
                  ["Persistence", "Unavailable"],
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
                  A production appearance system requires preference ownership,
                  storage semantics, device preference detection, contrast
                  testing, accessible font scaling, reduced-motion behavior,
                  theme tokens, migration, and user-visible failure handling.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Contrast required</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No automated audit loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Global change blocked
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No shell update claimed.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Smartphone
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Device preference</p>
                  <p className="mt-1 text-xs text-slate-500">
                    System source unavailable.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <ShieldAlert
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    No preference claim
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Local intent only.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <CheckCircle2
            className="h-4 w-4 text-emerald-300"
            aria-hidden="true"
          />
          <strong className="text-amber-100">
            No global theme, device preference, contrast result, or persisted
            setting is claimed.
          </strong>
        </p>
      </main>
    </div>
  );
}
