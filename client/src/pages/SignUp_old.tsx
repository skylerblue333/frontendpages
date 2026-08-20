import { useState } from "react";
import {
  AlertTriangle,
  Check,
  Code2,
  KeyRound,
  LockKeyhole,
  Mail,
  RefreshCw,
  ShieldAlert,
  UserPlus,
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
export default function SignUp_old() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
  const [consent, setConsent] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const reset = () => {
    setName("");
    setEmail("");
    setReferral("");
    setConsent(false);
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={UserPlus}
        eyebrow="Legacy sign-up · Compatibility preview"
        title="Keep the legacy registration surface useful without submitting credentials."
        description="This route preserves legacy identity, email, referral, verification, recovery, and AI-assist concepts as a local compatibility preview. No password is stored, no account is created, no dashboard redirect occurs, and no AI code is generated or applied."
        badge="Evidence-bounded legacy authentication workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save draft locally"}
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
            {showGates ? "Close gates" : "Review legacy gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset draft
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Identity",
              value: name ? "Local draft" : "Not entered",
              hint: "No account source",
              icon: UserPlus,
              tone: "cyan",
            },
            {
              label: "Email",
              value: email ? "Local intent" : "Not entered",
              hint: "No delivery",
              icon: Mail,
              tone: "violet",
            },
            {
              label: "Credentials",
              value: "Not collected",
              hint: "No password field",
              icon: KeyRound,
              tone: "amber",
            },
            {
              label: "Activation",
              value: "Blocked",
              hint: "No redirect or account",
              icon: LockKeyhole,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Legacy authentication evidence boundary">
          <strong>
            This is a local compatibility preview, not evidence that an account,
            identity, email, password, referral, verification, session, AI
            assistant, or activation exists.
          </strong>{" "}
          Fields and local controls are browser concepts. No password or secret
          is persisted, no email is sent, no referral is credited, no user is
          created, no dashboard redirect occurs, and no AI code is generated,
          reviewed, or applied.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="space-y-5 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                  Legacy registration draft
                </p>
                <h2 className="mt-2 text-2xl font-black">Identity intent</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Do not enter a real password, recovery code, seed phrase, or
                  sensitive personal information into this local preview.
                </p>
              </div>
              <label className="text-sm font-semibold text-slate-300">
                Full name intent
                <input
                  value={name}
                  onChange={event => setName(event.target.value)}
                  placeholder="Local draft only"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Email intent
                <input
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  type="email"
                  placeholder="No real email required"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 font-normal text-white outline-none"
                />
                <span className="mt-2 block text-xs text-amber-200">
                  No address validation, account lookup, or delivery provider is
                  connected.
                </span>
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Referral code intent
                <input
                  value={referral}
                  onChange={event => setReferral(event.target.value)}
                  placeholder="Not validated or credited"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 font-normal text-white outline-none"
                />
              </label>
              <label className="flex items-start gap-3 rounded-xl border border-white/10 p-4">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={event => setConsent(event.target.checked)}
                  className="mt-1 size-4 accent-cyan-300"
                />
                <span>
                  <span className="block font-semibold">Consent intent</span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    This local checkbox is not terms acceptance, privacy
                    consent, referral consent, age verification, or a persisted
                    preference.
                  </span>
                </span>
              </label>
              <div className="flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Create account unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Sign in redirect unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Verify email unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Recover account unavailable
                </Button>
              </div>
              {showGates && (
                <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No legacy success claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Local fields do not prove account creation, credentials,
                    email ownership, referral credit, verification, session
                    security, redirect, recovery, or activation.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 size-5 text-amber-200" />
                <div>
                  <p className="font-semibold">Legacy route warning</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    The original route could submit credentials, redirect to a
                    dashboard, and suggest unsupported AI code generation. Those
                    claims are intentionally blocked until verified services
                    exist.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-5">
                <Code2 className="size-6 text-violet-300" />
                <p className="mt-3 font-semibold">AI assist concept</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  No model, prompt, code output, security review,
                  implementation, or deployment is connected. AI-generated
                  authentication code must never be applied automatically.
                </p>
                <Button disabled className="mt-4 bg-slate-700 text-slate-400">
                  Generate AI code unavailable
                </Button>
              </div>
              <div className="rounded-xl border border-white/10 p-5">
                <KeyRound className="size-6 text-cyan-300" />
                <p className="mt-3 font-semibold">Credential boundary</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Password hashing, breach checks, rate limits, bot protection,
                  recovery, MFA, session cookies, and secret redaction require a
                  verified server-side authentication service.
                </p>
              </div>
              <div className="rounded-xl border border-dashed border-white/10 p-5">
                <p className="font-semibold">No account evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect identity, email, authorization, persistence,
                  verification, referral accounting, provider scopes, audit, and
                  safe failure states before enabling legacy actions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Legacy auth-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What this compatibility route must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Server-side credential hashing, password policy, breach detection, rate limits, bot defense, CSRF, validation, tenant isolation, and safe errors",
                "Email ownership, verification tokens, expiration, replay prevention, delivery provider, opt-out, recovery, and audit provenance",
                "Referral identity, attribution window, anti-abuse rules, reward accounting, disclosure, entitlement, and dispute handling",
                "AI provider, prompt controls, code provenance, security review, sandbox, human approval, tests, deployment gates, and audit",
                "Create, verify, recover, redirect, referral, AI assist, accessibility, confirmation, retry, and accountable approval require governed operations",
                "This preview must not be presented as an active registration form, verified email, credited referral, created account, dashboard redirect, or AI implementation without evidence",
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
              title: "Legacy surface preserved",
              description:
                "Identity, email, referral, consent, verification, recovery, AI-assist, save/reset, and blocked actions remain visible for compatibility.",
              icon: UserPlus,
              status: "Local auth UX",
            },
            {
              title: "No unsafe submission",
              description:
                "Credentials, redirects, account success, referral credit, and AI code application are not fabricated or executed.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before activation",
              description:
                "Real legacy registration requires secure auth, delivery, attribution, provider governance, audit, and safe failure handling.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
