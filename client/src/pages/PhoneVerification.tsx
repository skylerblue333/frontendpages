import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  LockKeyhole,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "User, number, and consent provenance",
    area: "Identity",
    description:
      "No user, phone number, country, consent purpose, ownership, verification request, or verified-at timestamp is connected.",
  },
  {
    title: "OTP generation, delivery, and expiry",
    area: "Security",
    description:
      "No one-time code, challenge, carrier, sender, delivery event, expiry, attempt counter, hash, or single-use guard is available.",
  },
  {
    title: "Rate limits, fraud, and recovery",
    area: "Controls",
    description:
      "No rate limit, lockout, SIM-swap signal, fraud review, fallback factor, recovery flow, session update, or error state exists.",
  },
  {
    title: "Privacy, retention, and auditability",
    area: "Privacy",
    description:
      "No number masking, sensitive-data minimization, retention, deletion, notification, access log, verification event, or support trace is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No enter, send, verify, resend, change, remove, recover, export, or phone-identity mutation is connected or persisted.",
  },
];
export default function PhoneVerification() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Phone verification is unavailable locally. No user, phone number, consent, OTP, carrier, verification request, session, recovery, or identity record was loaded or saved."
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
      `${action} is unavailable locally. No phone number, OTP, consent, carrier, verification, recovery, privacy, or identity mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="phone-verification-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Phone className="size-3.5" aria-hidden="true" />{" "}
                  Phone-identity readiness workspace
                </Badge>
                <Badge variant="secondary">No verification data</Badge>
              </div>
              <h1
                id="phone-verification-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PhoneVerification readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review user and number provenance, consent, one-time-code
                delivery and expiry, rate limits, fraud and recovery controls,
                privacy, retention, auditability, and phone-verification
                boundaries without implying that a phone number, OTP, or
                verified identity exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
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
                Phone verification is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity service, SMS provider, carrier integration, OTP
                workflow, rate limiter, fraud control, recovery factor, privacy
                boundary, or persistence layer is connected. This workspace
                cannot enter, send, verify, resend, change, remove, recover,
                export, or claim phone verification success.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Smartphone
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No verification data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No user, phone number, country, consent, request, OTP, carrier,
                or verified identity record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ShieldCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No challenge state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No code, delivery, expiry, attempt, hash, rate limit, lockout,
                fraud, recovery, or session state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No verification actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No enter, send, verify, resend, change, remove, recover, export,
                or identity mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Phone-verification governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              accepts a phone number, sends a code, verifies identity, or saves
              authentication data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PhoneVerification readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter verification requirements"
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
                  No verification requirements match “{query}”.
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
                Production phone verification requires explicit consent,
                verified user and number ownership, secure one-time codes,
                carrier delivery and expiry, single-use and rate-limit controls,
                fraud and SIM-swap protections, recovery and session workflows,
                number minimization, retention and deletion controls, audit
                history, and clear failure feedback. No phone number, OTP,
                verification, recovery, session, or identity record is claimed
                here.
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
