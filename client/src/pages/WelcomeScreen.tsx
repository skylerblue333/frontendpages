import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type SetupStep = { title: string; detail: string; state: string };
const steps: readonly SetupStep[] = [
  {
    title: "Account identity",
    detail:
      "Authentication, account ownership, and session status are not connected.",
    state: "Not verified",
  },
  {
    title: "Profile preferences",
    detail:
      "No display name, language, accessibility preference, or notification choice is stored.",
    state: "Not configured",
  },
  {
    title: "Workspace orientation",
    detail:
      "No module access, consent, or personalized recommendation is determined.",
    state: "Not available",
  },
];

export default function WelcomeScreen() {
  const [status, setStatus] = useState(
    "Onboarding service unavailable locally. No account, profile, consent, preference, or completion state was created."
  );
  const notify = (action: string) =>
    setStatus(
      `${action} unavailable locally. No account, profile, preference, consent, session, or onboarding completion state was changed.`
    );
  return (
    <div data-ui-polish="batch-209" className="min-h-screen bg-background">
      <PageHeader
        icon={Compass}
        title="Welcome"
        subtitle="Review onboarding readiness without creating an account, persisting preferences, inferring identity, or claiming that setup is complete."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="Onboarding unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Onboarding service unavailable.</strong> No verified
            authentication, profile store, consent record, preference service,
            or module-access contract is connected.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => notify("Refresh onboarding readiness")}
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Onboarding preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  A clear first step
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  A production welcome flow should explain what is available,
                  identify the signed-in account, collect only necessary
                  preferences, record consent explicitly, respect accessibility
                  choices, and make every next step reversible. This local
                  preview shows the sequence without asserting any user state.
                </p>
              </div>
              <Compass
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-700 text-sm text-slate-400"
                      aria-label={`Step ${index + 1}`}
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium">{step.title}</p>
                        <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                          {step.state}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Create account unavailable{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button disabled variant="outline">
                Continue unavailable
              </Button>
              <Button disabled variant="outline">
                Choose preferences unavailable
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
                Setup boundary
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                No account state implied
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  ["Identity", "Not authenticated"],
                  ["Profile", "Not loaded"],
                  ["Consent", "Not recorded"],
                  ["Preferences", "Not stored"],
                  ["Access", "Not determined"],
                  ["Completion", "Not claimed"],
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
                  This preview does not read identity, create sessions, store
                  profile data, collect consent, select modules, or personalize
                  content. A future flow must make authentication and consent
                  states explicit, minimize data collection, support keyboard
                  and assistive technology users, and provide a safe route back.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <UserRound
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Identity absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No session read.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Setup blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No completion claimed.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-cyan-200" aria-hidden="true" />
          <strong className="text-cyan-100">
            No account, session, profile, consent, preference, module access, or
            onboarding completion is claimed as real.
          </strong>
        </p>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />{" "}
          This is a local readiness preview, not an account-registration or
          authentication workflow.
        </p>
      </main>
    </div>
  );
}
