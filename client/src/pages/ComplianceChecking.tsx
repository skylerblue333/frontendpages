import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  UsersRound,
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

type ComplianceCapability = {
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
};

const complianceCapabilities: ComplianceCapability[] = [
  {
    title: "Framework and control scope",
    description:
      "No applicable framework, control version, system boundary, applicability statement, control owner, or assessment period is connected.",
    icon: ClipboardCheck,
  },
  {
    title: "Evidence and test procedures",
    description:
      "No evidence source, collection timestamp, chain of custody, test procedure, sample, reviewer, or reproducible assessment artifact is available.",
    icon: FileSearch,
  },
  {
    title: "Findings and remediation",
    description:
      "No finding severity, root cause, remediation owner, due date, exception, compensating control, validation, or closure evidence is verified.",
    icon: ShieldCheck,
  },
  {
    title: "Approvals and report integrity",
    description:
      "No review approval, independence, report version, attestation, signature, distribution boundary, privacy review, or audit trail is configured.",
    icon: FileCheck2,
  },
];

export default function ComplianceChecking() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      complianceCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="compliance-checking-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Assurance boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="compliance-checking-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Compliance checking readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents evidence-based control assessment without
                  pretending that a framework, test result, finding,
                  attestation, or certification is live or authoritative.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load assessment unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Compliance checking status"
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
                    Truthful assessment state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No framework, control, evidence, test result, finding,
                    remediation, approval, report, or certification state is
                    loaded or generated.
                  </CardDescription>
                </div>
                <UsersRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified compliance-assessment service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define the applicable framework, control
                  scope, evidence sources, test procedures, findings,
                  remediation ownership, exceptions, independent review,
                  approvals, privacy, and report integrity before this route can
                  assess a control or make an assurance claim.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable compliance actions"
              >
                {[
                  "Load controls",
                  "Run assessment",
                  "Review findings",
                  "Export report",
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
                These safeguards must be verified before assessment controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Framework, control version, system boundary, applicability,
                owner, assessment period, and independence.
              </p>
              <p>
                Evidence source, timestamp, chain of custody, procedure, sample,
                reviewer, and reproducible artifact.
              </p>
              <p>
                Finding severity, root cause, remediation, due date, exception,
                compensating control, and closure evidence.
              </p>
              <p>
                Approval, report version, attestation, signature, distribution
                boundary, privacy review, and audit trail.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Compliance capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load controls, evaluate
              evidence, create findings, export reports, or claim certification.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search compliance capability notes"
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
