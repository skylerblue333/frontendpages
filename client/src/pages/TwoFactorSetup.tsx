import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardX,
  KeyRound,
  LockKeyhole,
  QrCode,
  ShieldAlert,
  Smartphone,
  XCircle,
} from "lucide-react";

type SetupStep = "overview" | "enrollment" | "verify";

const steps: readonly { key: SetupStep; label: string }[] = [
  { key: "overview", label: "Review" },
  { key: "enrollment", label: "Enrollment" },
  { key: "verify", label: "Verify" },
];

export default function TwoFactorSetup() {
  const [step, setStep] = useState<SetupStep>("overview");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(
    "Two-factor enrollment unavailable locally. No secret, challenge, recovery code, or account mutation was created."
  );

  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No authenticator secret, QR code, recovery code, session, or account mutation was created.`
    );
  const currentIndex = steps.findIndex(item => item.key === step);

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="two-factor-title"
    >
      <div data-ui-polish="batch-205" className="mx-auto max-w-2xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-amber-400/30 text-amber-200"
          >
            SECURITY SETUP PREVIEW
          </Badge>
          <h1
            id="two-factor-title"
            className="text-3xl font-bold tracking-tight"
          >
            Two-factor authentication
          </h1>
          <p className="text-muted-foreground">
            Review the enrollment requirements without exposing a secret or
            claiming that your account is protected.
          </p>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Two-factor enrollment unavailable"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Enrollment service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated enrollment endpoint, server-generated TOTP
                secret, issuer binding, challenge verifier, encrypted
                recovery-code store, or account security mutation is connected.
              </p>
            </div>
          </div>
        </section>
        <nav
          aria-label="Two-factor setup steps"
          className="flex items-center gap-2"
        >
          {steps.map((item, index) => (
            <div
              key={item.key}
              className="flex min-w-0 flex-1 items-center gap-2"
            >
              {" "}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${index < currentIndex ? "bg-emerald-500 text-white" : index === currentIndex ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
              >
                {index < currentIndex ? (
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`hidden text-xs sm:block ${index === currentIndex ? "font-semibold text-foreground" : "text-muted-foreground"}`}
              >
                {item.label}
              </span>
              {index < steps.length - 1 && (
                <div className="h-px flex-1 bg-border" />
              )}
            </div>
          ))}
        </nav>

        {step === "overview" && (
          <Card className="border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LockKeyhole
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                What a real enrollment requires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">
                A production 2FA flow must create a unique server-side secret
                for the authenticated account, display a QR code generated
                within a trusted boundary, verify a time-based challenge on the
                server, and provide recovery codes that are generated, stored,
                and revoked securely.
              </p>
              <div className="grid gap-3">
                {[
                  {
                    icon: Smartphone,
                    title: "Use an authenticator app",
                    text: "The app connection is unavailable until a server-side enrollment session exists.",
                  },
                  {
                    icon: QrCode,
                    title: "Scan a verified QR code",
                    text: "No QR code or otpauth URI is displayed because no secret has been created.",
                  },
                  {
                    icon: KeyRound,
                    title: "Verify a server challenge",
                    text: "A six-digit string cannot be accepted locally as proof of enrollment.",
                  },
                  {
                    icon: ClipboardX,
                    title: "Protect recovery codes",
                    text: "No backup or recovery codes are fabricated or copied to the clipboard.",
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/30 p-3"
                  >
                    <div className="rounded-lg bg-primary/10 p-2">
                      <item.icon
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                className="w-full"
                onClick={() => setStep("enrollment")}
              >
                Review unavailable enrollment
              </Button>
            </CardContent>
          </Card>
        )}

        {step === "enrollment" && (
          <Card className="border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-primary" aria-hidden="true" />
                Enrollment unavailable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-border/30 bg-background/30 p-4">
                <XCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-semibold">
                    No secret or QR code is available
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    A reusable TOTP secret must never be hard-coded in the
                    client or sent to an unverified image service. This preview
                    intentionally shows neither a QR code nor a manual key.
                  </p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/30 bg-secondary/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Authenticator secret
                  </p>
                  <p className="mt-2 text-sm">Unavailable</p>
                </div>
                <div className="rounded-xl border border-border/30 bg-secondary/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Recovery codes
                  </p>
                  <p className="mt-2 text-sm">Unavailable</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep("overview")}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  className="flex-1"
                  onClick={() => setStep("verify")}
                >
                  Review challenge boundary
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "verify" && (
          <Card className="border-border/40 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <KeyRound className="h-5 w-5 text-primary" aria-hidden="true" />
                Challenge verification unavailable
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-6 text-muted-foreground">
                You may enter a six-digit value to review the form state. It
                will remain local and cannot verify an authenticator or enable
                account protection.
              </p>
              <label
                htmlFor="totp-preview-code"
                className="block text-sm font-medium"
              >
                Local code preview
              </label>
              <Input
                id="totp-preview-code"
                inputMode="numeric"
                maxLength={6}
                placeholder="000000"
                value={code}
                onChange={event =>
                  setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
                }
                aria-describedby="totp-preview-help"
                className="h-12 text-center font-mono text-2xl tracking-[0.45em]"
              />
              <p
                id="totp-preview-help"
                className="text-xs text-muted-foreground"
              >
                {code.length}/6 digits · no value is sent or validated
              </p>
              <div className="flex items-start gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4">
                <AlertTriangle
                  className="mt-0.5 h-4 w-4 shrink-0 text-amber-200"
                  aria-hidden="true"
                />
                <p className="text-xs leading-5 text-amber-100/80">
                  Do not enter a real authenticator code into this preview. A
                  real verifier is not connected.
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep("enrollment")}
                >
                  Back
                </Button>
                <Button
                  type="button"
                  className="flex-1"
                  disabled={code.length !== 6}
                  onClick={() => announceUnavailable("Challenge verification")}
                >
                  Verify unavailable
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">Account protection status</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Two-factor authentication is not enabled or disabled by this
                screen. The current account security state is unavailable.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-background/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
