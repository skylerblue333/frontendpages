import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  ShieldCheck as ShieldIcon,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Account and recovery-request ownership",
    area: "Identity",
    description:
      "No account, recovery request, verified email or factor, expiry, request identifier, or ownership timestamp is connected.",
  },
  {
    title: "Token, link, and replay protection",
    area: "Security",
    description:
      "No reset token, one-time link, hash, signing key, secure transport, expiry check, single-use guard, or replay protection is available.",
  },
  {
    title: "Credential policy and validation",
    area: "Validation",
    description:
      "No password policy, confirmation rule, breached-password check, rate limit, lockout, session revocation, or validation error state exists.",
  },
  {
    title: "Privacy, notification, and auditability",
    area: "Privacy",
    description:
      "No consent purpose, account-enumeration protection, notification, sensitive-data retention, access log, recovery event, or support trace is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No request, verify, reveal, confirm, reset, revoke, retry, export, or credential or account mutation is connected or persisted.",
  },
];
export default function PasswordReset() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Password reset is unavailable locally. No account, reset request, token, recovery factor, credential, session, or authentication record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No account, reset request, token, recovery, credential, session, privacy, or authentication mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="password-reset-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <KeyRound className="size-3.5" aria-hidden="true" />{" "}
                  Credential-recovery readiness workspace
                </Badge>
                <Badge variant="secondary">No recovery data</Badge>
              </div>
              <h1
                id="password-reset-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PasswordReset readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review account ownership, recovery-request identity, token
                safety, replay protection, credential policy, privacy,
                notifications, auditability, and reset boundaries without
                implying that an account, reset request, token, credential, or
                authentication record exists.
              </p>
            </div>
            <ShieldIcon className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Password reset is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account service, recovery provider, one-time token workflow,
                secret handling boundary, password policy, notification service,
                session revocation, or persistence layer is connected. This
                workspace cannot request, verify, reveal, confirm, reset,
                revoke, retry, export, or claim recovery success.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No recovery data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, reset request, verified factor, token, expiry,
                credential, or authentication record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ShieldCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No security state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No token, link, hash, expiry, replay guard, rate limit, policy,
                lockout, or session-revocation state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No recovery actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No request, verify, reveal, confirm, reset, revoke, retry,
                export, or credential mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Recovery-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              accepts an account identifier, handles a token, changes a
              credential, or saves recovery data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PasswordReset readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter recovery requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No recovery requirements match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production recovery requires account and request ownership,
                account-enumeration protection, one-time expiring tokens, secure
                transport, single-use and replay controls, strong credential
                policy, session revocation, notifications, privacy boundaries,
                audit history, and clear failure feedback. No account, reset
                request, token, recovery factor, credential, session, or
                authentication record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
