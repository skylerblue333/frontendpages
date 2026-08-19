import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type ChecklistCapability = {
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
};

const checklistCapabilities: ChecklistCapability[] = [
  {
    title: "Scope and acceptance evidence",
    description:
      "No release scope, acceptance criteria, test results, accessibility review, dependency audit, or owner sign-off is connected.",
    icon: ClipboardCheck,
  },
  {
    title: "Security and data protection",
    description:
      "Secrets review, authorization, privacy, threat model, vulnerability triage, backup/restore, incident contacts, and data retention are not verified.",
    icon: ShieldCheck,
  },
  {
    title: "Operations and observability",
    description:
      "Deployment target, migrations, monitoring, alerts, structured logs, dashboards, runbooks, SLOs, and on-call ownership are unavailable.",
    icon: SlidersHorizontal,
  },
  {
    title: "Rollback and accountability",
    description:
      "Rollback plan, feature flags, change approval, communication, evidence archive, incident path, and final release decision are not configured.",
    icon: UsersRound,
  },
];

export default function ClosingChecklist() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      checklistCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="closing-checklist-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Release boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="closing-checklist-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Release closing checklist readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents accountable release closure without
                  pretending that tests, approvals, deployment, security review,
                  or production readiness are complete.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load checklist unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Release closing checklist status"
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
                    Truthful release state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No checklist, task, evidence, approval, deployment,
                    production status, or release decision is loaded or
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
                  No verified release-closure service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define release scope, evidence,
                  ownership, security review, operational readiness, rollback,
                  approvals, communication, and audit history before this route
                  can claim a release is ready or closed.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable checklist actions"
              >
                {[
                  "Load checklist",
                  "Mark task complete",
                  "Request approval",
                  "Close release",
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
                These safeguards must be verified before checklist controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Release scope, acceptance criteria, tests, accessibility review,
                dependency audit, owner, and sign-off evidence.
              </p>
              <p>
                Secrets, authorization, privacy, threat model, vulnerabilities,
                backup/restore, incident contacts, and retention.
              </p>
              <p>
                Deployment target, migrations, monitoring, alerts, logs,
                dashboards, runbooks, SLOs, and on-call ownership.
              </p>
              <p>
                Rollback, feature flags, change approval, communication,
                evidence archive, incident path, and final decision.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Release checklist capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load tasks, mark completion,
              request approval, deploy software, or persist a release decision.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search release checklist capability notes"
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
