import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Smartphone,
  UserRoundCheck,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function TwoFactorAuth() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(
    "MFA service unavailable locally. No authenticator enrollment or account change was started."
  );
  const review = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      code.trim().length === 6
        ? "Verification code reviewed locally. No factor was verified, enrolled, enabled, or persisted."
        : "Enter a six-digit example code for local validation. No factor was changed."
    );
  };
  const reset = () => {
    setCode("");
    setStatus(
      "MFA preview reset locally. No authenticator, recovery code, session, or account mutation was started."
    );
  };
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={ShieldAlert}
        title="Two-factor authentication"
        subtitle="Review MFA enrollment and verification states without fabricating secrets, factors, recovery codes, account security, or authentication outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="MFA service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>MFA service unavailable.</strong> No authenticated session,
            authenticator registry, enrollment secret, QR payload, verification
            endpoint, recovery-code store, or rate-limit service is connected.
            Values below are local preview only.
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
                  MFA preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review a local verification step
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This form demonstrates labeling, six-digit validation, live
                  status feedback, and safe disclosure. It does not generate a
                  secret, enroll a factor, verify a code, issue recovery codes,
                  or change an account.
                </p>
              </div>
              <KeyRound
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <form onSubmit={review} className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-200">
                Example verification code
                <input
                  inputMode="numeric"
                  maxLength={6}
                  value={code}
                  onChange={event =>
                    setCode(event.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Six digits"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm tracking-[0.35em] text-white outline-none focus:border-cyan-300"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="submit"
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  Review locally
                </Button>
                <Button type="button" onClick={reset} variant="outline">
                  Clear
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
                Security state
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Enrollment stays withheld
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Factor", "Not enrolled"],
                  ["Issuer", "Unavailable"],
                  ["Secret", "Never displayed"],
                  ["Verification", "Not performed"],
                  ["Recovery codes", "Not generated"],
                  ["Backup method", "Unavailable"],
                  ["Rate limit", "Policy unavailable"],
                  ["Session", "Authenticated scope unavailable"],
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
                  A production MFA flow requires authenticated enrollment,
                  secret protection, QR provisioning, issuer and account
                  binding, replay-resistant verification, rate limits,
                  recovery-code hashing and rotation, backup-factor policy,
                  session invalidation, audit events, and safe failure handling.
                  Secrets must never be exposed to the client or logs.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Safe disclosure</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No secret or QR is shown.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Auth blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No factor or session change.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Smartphone
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Backup absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No device or recovery path.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UserRoundCheck
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Identity unavailable
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No authenticated account scope.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No MFA factor, secret, QR, verification, recovery code, session, or
            account-security outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
