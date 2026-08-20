import { useMemo, useState } from "react";
import {
  Accessibility,
  BadgeCheck,
  Code2,
  Database,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  TerminalSquare,
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

type QualityCapability = {
  title: string;
  description: string;
  icon: typeof Database;
};

const qualityCapabilities: QualityCapability[] = [
  {
    title: "Repository and scope",
    description:
      "No repository, commit, branch, language, dependency graph, generated-file policy, or scan scope is connected to this dashboard.",
    icon: Database,
  },
  {
    title: "Evidence and tool provenance",
    description:
      "No formatter, linter, type checker, test runner, build, coverage, benchmark, timestamp, tool version, or reproducible artifact is available.",
    icon: TerminalSquare,
  },
  {
    title: "Security and maintainability",
    description:
      "Dependency advisories, secret detection, authorization review, complexity, duplication, accessibility, and maintainability findings are not verified.",
    icon: ShieldCheck,
  },
  {
    title: "Review and remediation",
    description:
      "No issue severity, quality score, grade, recommendation, auto-fix, approval, comparison, or persisted remediation state is configured.",
    icon: BadgeCheck,
  },
];

export default function CodeQualityDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      qualityCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="code-quality-dashboard-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Engineering evidence boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="code-quality-dashboard-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Code quality dashboard readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents reproducible engineering-quality evidence
                  without pretending that a repository was scanned or that
                  scores, grades, issues, or auto-fixes are authoritative.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load quality evidence unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Code quality dashboard status"
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
                    Truthful quality state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No repository, scan, metric, quality score, grade, issue,
                    recommendation, or remediation state is loaded or generated.
                  </CardDescription>
                </div>
                <Code2 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified code-quality scanning service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define repository scope, tool and version
                  provenance, reproducible lint/type/test/build evidence,
                  security and privacy handling, severity semantics, review
                  ownership, and remediation controls before this route can
                  report quality findings.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable quality actions"
              >
                {[
                  "Load repository",
                  "Run quality scan",
                  "Review findings",
                  "Auto-fix code",
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
                These safeguards must be verified before quality controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Repository commit, branch, scope, language, dependencies,
                generated files, and reproducible scan inputs.
              </p>
              <p>
                Formatter, linter, type checker, tests, build, coverage,
                benchmark, timestamps, versions, and artifacts.
              </p>
              <p>
                Dependency advisories, secrets, authorization, complexity,
                duplication, accessibility, and maintainability.
              </p>
              <p>
                Severity, score/grade semantics, issue ownership, review,
                approvals, remediation, comparison, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Code quality capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read a repository, run tools,
              calculate metrics, expose issues, generate fixes, or persist
              remediation.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search code quality capability notes"
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
