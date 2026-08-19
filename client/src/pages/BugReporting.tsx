import { useMemo, useState } from "react";
import {
  Bug,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
  UploadCloud,
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

type ReportingCapability = {
  title: string;
  description: string;
  icon: typeof Bug;
};

const reportingCapabilities: ReportingCapability[] = [
  {
    title: "Issue intake",
    description:
      "Title, reproduction steps, severity, and environment fields are not connected to a submission endpoint.",
    icon: FileText,
  },
  {
    title: "Evidence handling",
    description:
      "Attachments, redaction, malware scanning, retention, and access rules are not configured.",
    icon: UploadCloud,
  },
  {
    title: "Triage workflow",
    description:
      "Ownership, status transitions, duplicate detection, and notifications require a verified contract.",
    icon: ClipboardCheck,
  },
  {
    title: "Privacy and audit",
    description:
      "Reporter identity, authorization, audit events, and sensitive-data handling are not verified.",
    icon: ShieldCheck,
  },
];

export default function BugReporting() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      reportingCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="bug-reporting-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Provider boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="bug-reporting-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Bug reporting readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe issue-reporting workflow without
                  pretending that a report was submitted, stored, triaged, or
                  assigned.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Submit report unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Bug reporting status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Bug className="size-5 text-primary" aria-hidden="true" />
                    Truthful intake state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No issue report is drafted, submitted, queued, or visible to
                    a support team.
                  </CardDescription>
                </div>
                <ShieldCheck
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified reporting endpoint is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define required fields, validation, safe
                  evidence uploads, authentication, retention, routing, status
                  updates, notifications, and failure recovery before this
                  workspace can accept a report.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable reporting actions"
              >
                {[
                  "New report",
                  "Attach evidence",
                  "Save draft",
                  "Submit report",
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
                These safeguards must be verified before reporting controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Validated title, reproduction steps, severity, environment, and
                contact semantics.
              </p>
              <p>
                Safe upload limits, content scanning, redaction, retention, and
                access controls.
              </p>
              <p>
                Idempotent submission, visible status, triage ownership,
                duplicate handling, and retries.
              </p>
              <p>
                Structured redacted logging with no secrets, tokens, passwords,
                or sensitive evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Reporting capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not submit, upload, store, or
              notify.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search reporting capability notes"
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
