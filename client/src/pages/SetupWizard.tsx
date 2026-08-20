import { useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  KeyRound,
  Link2,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  WalletCards,
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
const steps = [
  {
    id: "account",
    title: "Account",
    icon: CircleUserRound,
    detail: "Identity, authentication, tenant, and authorization contract.",
  },
  {
    id: "preferences",
    title: "Preferences",
    icon: Sparkles,
    detail:
      "Theme, language, accessibility, notifications, and privacy intent.",
  },
  {
    id: "security",
    title: "Security",
    icon: KeyRound,
    detail: "MFA, recovery, sessions, device, and audit requirements.",
  },
  {
    id: "wallet",
    title: "Wallet",
    icon: WalletCards,
    detail: "Wallet ownership, custody, network, and transaction boundaries.",
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: Link2,
    detail: "Provider, permissions, scopes, secrets, webhooks, and revocation.",
  },
  {
    id: "review",
    title: "Review",
    icon: LockKeyhole,
    detail: "Evidence review, approvals, accessibility, and completion gate.",
  },
];
export default function SetupWizard() {
  const [step, setStep] = useState(0);
  const [workspace, setWorkspace] = useState("");
  const [goal, setGoal] = useState("Goal not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const current = steps[step];
  const progress = Math.round(((step + 1) / steps.length) * 100);
  const canNext = step < steps.length - 1;
  const readiness = useMemo(
    () =>
      step === steps.length - 1 ? "Review required" : "In progress locally",
    [step]
  );
  const reset = () => {
    setStep(0);
    setWorkspace("");
    setGoal("Goal not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Sparkles}
        eyebrow="Setup wizard · Onboarding preview"
        title="Guide setup without pretending the account is provisioned."
        description="Explore a local onboarding-readiness wizard covering account, preferences, security, wallet, integrations, and review. No identity, account, MFA, wallet, provider, secret, integration, provisioning, or completion state is connected."
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
            {showGates ? "Close gates" : "Review setup gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset wizard
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Step",
              value: `${step + 1}/${steps.length}`,
              hint: current.title,
              icon: current.icon,
              tone: "cyan",
            },
            {
              label: "Progress",
              value: `${progress}%`,
              hint: "Local flow",
              icon: ChevronRight,
              tone: "violet",
            },
            {
              label: "Readiness",
              value: readiness,
              hint: "No backend proof",
              icon: ShieldAlert,
              tone: "amber",
            },
            {
              label: "Completion",
              value: "Blocked",
              hint: "Evidence required",
              icon: LockKeyhole,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Onboarding evidence boundary">
          <strong>
            This is a local setup-flow preview, not evidence that an account is
            created, verified, secured, linked, provisioned, or complete.
          </strong>{" "}
          Step navigation, fields, progress, saved state, and disabled
          integration/completion actions are browser concepts. No identity,
          login, MFA, wallet, provider, secret, integration, permission,
          provisioning, or onboarding outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3">
              {steps.map(({ id, title, icon: Icon }, index) => (
                <button
                  key={id}
                  onClick={() => setStep(index)}
                  className={`flex flex-1 items-center gap-3 rounded-xl border p-3 text-left ${index === step ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                >
                  <span
                    className={`flex size-8 items-center justify-center rounded-lg ${index <= step ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-slate-500"}`}
                  >
                    {index < step ? (
                      <Check className="size-4" />
                    ) : (
                      <Icon className="size-4" />
                    )}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{title}</span>
                    <span className="block text-xs text-slate-500">
                      {index <= step ? "Local step" : "Not visited"}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                  Step {step + 1} · {current.title}
                </p>
                <h2 className="mt-2 text-3xl font-black">{current.detail}</h2>
              </div>
              <Badge
                variant="outline"
                className="border-amber-300/20 text-amber-200"
              >
                Local preview
              </Badge>
            </div>
            {step === 0 && (
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold text-slate-300">
                  Workspace name
                  <input
                    value={workspace}
                    onChange={event => setWorkspace(event.target.value)}
                    placeholder="Local draft only"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                  />
                </label>
                <div className="rounded-xl border border-dashed border-white/10 p-5">
                  <CircleUserRound className="size-7 text-slate-600" />
                  <p className="mt-3 font-semibold">Account not provisioned</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    No identity, email, tenant, role, authentication, or
                    authorization record is available.
                  </p>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold text-slate-300">
                  Primary goal
                  <select
                    value={goal}
                    onChange={event => setGoal(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                  >
                    <option>Goal not configured</option>
                    <option>Explore the dashboard</option>
                    <option>Use education features</option>
                    <option>Review AI features</option>
                    <option>Explore crypto surfaces</option>
                  </select>
                </label>
                <div className="rounded-xl border border-white/10 p-5">
                  <Sparkles className="size-7 text-cyan-300" />
                  <p className="mt-3 font-semibold">Preferences remain local</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Theme, language, accessibility, privacy, and notifications
                    require an authenticated preference contract.
                  </p>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <KeyRound className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  Security enrollment unavailable
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect MFA, recovery codes, password policy, device binding,
                  session revocation, security alerts, rate limits, and audit
                  before enrollment.
                </p>
              </div>
            )}
            {step === 3 && (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <WalletCards className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">Wallet linking unavailable</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  No address, ownership, balance, token, NFT, transaction,
                  private key, seed phrase, custody, staking, or financial
                  outcome is available.
                </p>
              </div>
            )}
            {step === 4 && (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Link2 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  Integration linking unavailable
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Provider credentials, permissions, scopes, secrets, webhooks,
                  callback validation, rate limits, revocation, and audit
                  require a governed connector contract.
                </p>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Workspace", value: workspace || "Not entered" },
                    { label: "Goal", value: goal },
                    { label: "Evidence", value: "Unavailable" },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 p-4"
                    >
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm font-semibold text-amber-200">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-6 text-amber-100">
                  Review is a local checkpoint. Completion cannot be claimed
                  until identity, persistence, integrations, security,
                  accessibility, error recovery, permissions, and operational
                  evidence are verified.
                </div>
              </div>
            )}
            <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5">
              <Button
                onClick={() => setStep(value => Math.max(0, value - 1))}
                disabled={step === 0}
                variant="outline"
                className="border-white/10 text-slate-300"
              >
                <ChevronLeft className="mr-2 size-4" />
                Back
              </Button>
              <div className="flex flex-wrap gap-2">
                <Button
                  disabled={!canNext}
                  onClick={() =>
                    setStep(value => Math.min(steps.length - 1, value + 1))
                  }
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  {canNext ? "Continue locally" : "Review complete"}
                  <ChevronRight className="ml-2 size-4" />
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Finish unavailable
                </Button>
              </div>
            </div>
            {showGates && (
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                <p className="font-semibold text-amber-100">
                  No setup-complete claim
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A local wizard does not prove account creation, identity
                  verification, preference persistence, MFA enrollment, wallet
                  connection, integration authorization, provisioning, or
                  completion.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Setup-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real setup wizard must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated identity, tenant, roles, permissions, email verification, consent, CSRF, validation, persistence, retry, and audit",
                "Preferences, accessibility, privacy, notifications, retention, export, deletion, and data-subject rights",
                "Password, MFA, recovery, session, device, security alerts, abuse controls, rate limits, and account recovery",
                "Wallet, financial, crypto, NFT, staking, custody, transaction, balance, private-key, seed-phrase, and token claims require separate evidence",
                "Integration credentials, scopes, secrets, callback validation, webhooks, revocation, rate limits, logging, and provider provenance",
                "A setup preview must not be presented as created, verified, secured, connected, provisioned, integrated, or complete without evidence",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Setup surface preserved",
              description:
                "Account, preferences, security, wallet, integrations, review, progress, continue/back, save/reset, and gates remain interactive.",
              icon: Sparkles,
              status: "Local wizard",
            },
            {
              title: "No onboarding theater",
              description:
                "Account creation, verification, MFA, wallet linking, integration authorization, provisioning, and completion are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before completion",
              description:
                "Real onboarding requires authenticated contracts, safe persistence, permissions, recovery, connectors, audit, accessibility, and operational proof.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
