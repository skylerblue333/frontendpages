import { useMemo, useState } from "react";
import {
  BadgeCheck,
  FileCheck2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  Stamp,
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

type CertificateCapability = {
  title: string;
  description: string;
  icon: typeof BadgeCheck;
};

const certificateCapabilities: CertificateCapability[] = [
  {
    title: "Assessment and identity",
    description:
      "Course completion evidence, assessment integrity, learner identity binding, consent, and eligibility are not connected.",
    icon: Fingerprint,
  },
  {
    title: "Issuer and credential",
    description:
      "Issuer authorization, credential schema, signing keys, metadata, expiry, and secure custody are not configured.",
    icon: Stamp,
  },
  {
    title: "Verification and revocation",
    description:
      "Public verification, status, revocation reasons, privacy redaction, and offline/error behavior are unavailable.",
    icon: BadgeCheck,
  },
  {
    title: "Audit and access",
    description:
      "Role permissions, issuance approvals, key rotation, audit history, retention, and least-privilege access are not verified.",
    icon: ShieldCheck,
  },
];

export default function CertificateManager() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      certificateCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="certificate-manager-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Credential boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="certificate-manager-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Certificate management readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe education-credential operations
                  without pretending that a learner certificate, issuer,
                  signature, verification result, or accreditation claim exists.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Issue certificate unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Certificate manager status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful credential state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No course completion, learner identity, certificate,
                    signature, verification, or revocation state is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <KeyRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified certificate-management service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define assessment evidence, identity
                  binding, issuer authorization, signing-key custody, issuance,
                  public verification, revocation, privacy, and audit controls
                  before this route can issue or validate a credential.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable certificate actions"
              >
                {[
                  "Review completion",
                  "Issue certificate",
                  "Verify credential",
                  "Revoke credential",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before credential controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Assessment integrity, course completion evidence, learner
                identity, consent, eligibility, and correction flow.
              </p>
              <p>
                Issuer authorization, credential schema, signing-key custody,
                rotation, expiry, and metadata integrity.
              </p>
              <p>
                Public verification, status and revocation reasons, privacy
                redaction, and offline/error behavior.
              </p>
              <p>
                Role permissions, approval gates, audit history, retention, rate
                limits, and least-privilege access.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Certificate capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not inspect learner records, sign
              credentials, reveal keys, or persist certificate state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search certificate capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
