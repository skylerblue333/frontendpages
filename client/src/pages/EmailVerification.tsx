import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  MailCheck,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EmailVerification() {
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(
    "Email verification is unavailable locally. No code was accepted, stored, resent, or bound to an account."
  );
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No code was accepted, stored, resent, or bound to an account.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-verification-title"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MailCheck className="size-3.5" aria-hidden="true" />
                  Verification readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <h1
                id="email-verification-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Email verification readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review a safe verification contract without accepting codes,
                writing account state, resending messages, or claiming that an
                address is verified.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Verification service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated account, token issuer, delivery provider,
                expiry policy, attempt counter, replay protection, or audit-safe
                success state is connected. Fields below remain local-only.
              </p>
            </div>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Local verification intent</CardTitle>
            <CardDescription>
              Use the fields to review labeling and status feedback. No address
              or code is transmitted, validated against a server, persisted, or
              bound to an account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <label
                htmlFor="verification-address"
                className="text-sm font-medium"
              >
                Email address
              </label>
              <Input
                id="verification-address"
                type="email"
                autoComplete="email"
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                  setStatus(
                    "Local address intent updated. No verification request was started."
                  );
                }}
                placeholder="name@example.com"
                className="mt-2"
              />
            </div>
            <div>
              <label
                htmlFor="verification-code"
                className="text-sm font-medium"
              >
                Verification code
              </label>
              <Input
                id="verification-code"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={code}
                onChange={e => {
                  setCode(e.target.value);
                  setStatus(
                    "Local code intent updated. No code was accepted or checked."
                  );
                }}
                placeholder="Code entry unavailable"
                className="mt-2"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                onClick={() => unavailable("Code verification")}
              >
                <MailCheck className="mr-2 size-4" aria-hidden="true" />
                Verify unavailable
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => unavailable("Verification resend")}
              >
                <TimerReset className="mr-2 size-4" aria-hidden="true" />
                Resend unavailable
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setAddress("");
                  setCode("");
                  setStatus(
                    "Local verification intent reset. No verification state changed."
                  );
                }}
              >
                Reset
              </Button>
            </div>
            <p
              className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground"
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          </CardContent>
        </Card>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <Clock3 className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Token lifecycle</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Issuer, hashing, expiry, replay protection, and attempt limits are
              unavailable.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <ShieldCheck
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Account safety</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Binding, authorization, rate limits, privacy, and audit events are
              unavailable.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <CheckCircle2
              className="mb-3 size-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Truthful state</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No verified badge, activation, redirect, resend success, or
              account mutation is presented.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
