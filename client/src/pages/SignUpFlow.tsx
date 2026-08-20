import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Gift,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
const steps = ["Identity", "Preferences", "Security", "Welcome", "Review"];
export const SignUpFlow = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const reset = () => {
    setStep(0);
    setName("");
    setConsent(false);
    setSaved(false);
    setShowGates(false);
  };
  const stepLabel = steps[step];
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Sparkles}
        eyebrow="Sign-up flow · Guided onboarding preview"
        title="Guide setup without pretending onboarding completed."
        description="Explore a local multi-step registration journey across identity, preferences, security, welcome concepts, and review. No account, entitlement, bonus, premium access, provider link, credential, session, or completion state is connected."
        badge="Evidence-bounded onboarding workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save progress locally"}
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
            {showGates ? "Close gates" : "Review onboarding gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset flow
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Step",
              value: `${step + 1}/${steps.length}`,
              hint: stepLabel,
              icon: UserRound,
              tone: "cyan",
            },
            {
              label: "Progress",
              value: `${Math.round(((step + 1) / steps.length) * 100)}%`,
              hint: "Local flow",
              icon: ChevronRight,
              tone: "violet",
            },
            {
              label: "Provisioning",
              value: "Blocked",
              hint: "No backend proof",
              icon: LockKeyhole,
              tone: "amber",
            },
            {
              label: "Entitlements",
              value: "Unverified",
              hint: "No bonus or access",
              icon: Gift,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Guided onboarding evidence boundary">
          <strong>
            This is a local sign-up-flow preview, not evidence that an account,
            identity, credential, preference, security factor, bonus, premium
            entitlement, provider connection, or onboarding completion exists.
          </strong>{" "}
          Step navigation, progress, local fields, consent, saved state, and
          disabled completion actions are browser concepts. No scarcity, user
          count, review, earnings, reward, bonus, premium access, account,
          email, session, or provisioning outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {steps.map((entry, index) => (
                <button
                  key={entry}
                  onClick={() => setStep(index)}
                  className={`rounded-xl border px-4 py-3 text-left ${index === step ? "border-cyan-300/40 bg-cyan-300/[0.08]" : "border-white/10"}`}
                >
                  <span className="block text-xs text-slate-500">
                    Step {index + 1}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">
                    {entry}
                  </span>
                  <span className="mt-1 block text-xs text-amber-200">
                    {index <= step ? "Local step" : "Not visited"}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-all"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                  Step {step + 1} · {stepLabel}
                </p>
                <h2 className="mt-2 text-3xl font-black">{stepLabel} intent</h2>
              </div>
              <Badge
                variant="outline"
                className="border-amber-300/20 text-amber-200"
              >
                Local preview
              </Badge>
            </div>
            {step === 0 && (
              <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-300">
                  Display name
                  <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Local draft only"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 font-normal text-white outline-none"
                  />
                </label>
                <p className="text-sm leading-6 text-slate-500">
                  No identity, email, tenant, role, authentication, or
                  authorization record is available.
                </p>
              </div>
            )}
            {step === 1 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Theme intent",
                  "Language intent",
                  "Notification intent",
                  "Privacy intent",
                ].map(item => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <p className="font-semibold">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Local preference only; no persistence, notification,
                      consent, or data-subject outcome is connected.
                    </p>
                  </div>
                ))}
              </div>
            )}
            {step === 2 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Password policy",
                  "MFA enrollment",
                  "Recovery",
                  "Device trust",
                ].map(item => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <LockKeyhole className="size-5 text-cyan-300" />
                    <p className="mt-3 font-semibold">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Not configured. This preview does not enroll, issue,
                      verify, or change security state.
                    </p>
                  </div>
                ))}
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 p-5">
                  <Gift className="size-6 text-amber-200" />
                  <p className="mt-3 font-semibold">Welcome reward concept</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    No reward, bonus, scarcity, earnings, points, premium
                    access, or entitlement exists without a verified product and
                    accounting contract.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 p-5">
                  <Sparkles className="size-6 text-violet-300" />
                  <p className="mt-3 font-semibold">Premium feature concept</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    No feature unlock, subscription, trial, payment, or access
                    grant is connected.
                  </p>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <label className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={event => setConsent(event.target.checked)}
                    className="mt-1 size-4 accent-cyan-300"
                  />
                  <span>
                    <span className="block font-semibold">
                      Review and consent intent
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500">
                      This local checkbox is not legal consent, terms
                      acceptance, privacy acknowledgment, age verification, or a
                      persisted preference.
                    </span>
                  </span>
                </label>
                <div className="rounded-xl border border-dashed border-white/10 p-6">
                  <p className="font-semibold">Completion blocked</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    No account, session, welcome state, bonus, premium
                    entitlement, provider link, or onboarding outcome can be
                    claimed from this local review.
                  </p>
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              <Button
                disabled={step === 0}
                onClick={() => setStep(value => Math.max(0, value - 1))}
                variant="outline"
                className="border-white/10 text-slate-400"
              >
                <ChevronLeft className="mr-2 size-4" />
                Back
              </Button>
              <Button
                disabled={step === steps.length - 1}
                onClick={() =>
                  setStep(value => Math.min(steps.length - 1, value + 1))
                }
                className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              >
                Continue locally
                <ChevronRight className="ml-2 size-4" />
              </Button>
              <Button disabled className="bg-slate-700 text-slate-400">
                Finish unavailable
              </Button>
            </div>
            {showGates && (
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                <p className="font-semibold text-amber-100">
                  No completion or entitlement claim
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A local flow does not prove account creation, verification,
                  security, provisioning, reward, premium access, payment, or
                  onboarding success.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Guided flow preserved",
              description:
                "Identity, preferences, security, welcome concepts, review, step navigation, progress, consent, save/reset, and completion boundaries remain visible.",
              icon: Sparkles,
              status: "Local onboarding",
            },
            {
              title: "No conversion theater",
              description:
                "Scarcity, users, reviews, earnings, bonuses, premium access, accounts, and success states are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before provisioning",
              description:
                "Real onboarding requires authenticated contracts, safe persistence, security, entitlements, billing, audit, and accountable product evidence.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
};
export default SignUpFlow;
