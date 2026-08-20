import { useMemo, useState } from "react";
import { CheckCircle2, Mail, Search, ShieldCheck } from "lucide-react";

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

export default function EmailInputForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(
    "Local email intent only. No address was submitted, subscribed, stored, or sent."
  );
  const validShape = useMemo(
    () => /^\S+@\S+\.\S+$/.test(email.trim()),
    [email]
  );
  const preview = email.trim() || "No email entered.";
  const validate = () =>
    setStatus(
      validShape
        ? "Local format check passed. No address was submitted, subscribed, stored, or sent."
        : "Local format check needs a value shaped like name@example.com. No address was submitted, subscribed, stored, or sent."
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="email-input-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Input readiness
                </Badge>
                <Badge variant="secondary">Local only</Badge>
              </div>
              <h1
                id="email-input-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Email input readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Test accessible email-entry behavior and local format feedback
                without claiming subscription, account creation, contact
                storage, or message delivery.
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
                No email destination is connected
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                This form performs a local shape check only. No address is
                transmitted to a provider, newsletter, account system, analytics
                endpoint, or contact list.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Email address draft</CardTitle>
              <CardDescription>
                Use this field to review labeling, keyboard focus, and local
                validation feedback.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <label
                htmlFor="email-input-draft"
                className="text-sm font-medium"
              >
                Email address
              </label>
              <Input
                id="email-input-draft"
                type="email"
                autoComplete="email"
                value={email}
                onChange={event => {
                  setEmail(event.target.value);
                  setStatus(
                    "Local email intent updated. No address was submitted, subscribed, stored, or sent."
                  );
                }}
                placeholder="name@example.com"
                className="mt-2"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <Button type="button" onClick={validate}>
                  <Search className="mr-2 size-4" aria-hidden="true" />
                  Check locally
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEmail("");
                    setStatus(
                      "Local email draft reset. No address was submitted, subscribed, stored, or sent."
                    );
                  }}
                >
                  Reset
                </Button>
              </div>
              <p
                className="mt-4 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Local preview</CardTitle>
              <CardDescription>
                No production contact or account data is shown.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="break-words rounded-xl border border-border/70 p-4 text-sm">
                {preview}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {validShape
                  ? "The current draft matches a basic local email shape."
                  : "The current draft has not passed the basic local email shape check."}
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Production activation requirements
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A real email input needs server-side validation, consent and
                purpose, abuse prevention, privacy disclosure, rate limits,
                duplicate handling, delivery or subscription contracts,
                retention, deletion, error recovery, and tests.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
