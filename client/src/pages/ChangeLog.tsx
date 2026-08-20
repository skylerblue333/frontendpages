import { useMemo, useState } from "react";
import {
  FileCheck2,
  GitCommitHorizontal,
  History,
  LockKeyhole,
  Search,
  ShieldCheck,
  Tags,
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

type ChangeLogCapability = {
  title: string;
  description: string;
  icon: typeof History;
};

const changeLogCapabilities: ChangeLogCapability[] = [
  {
    title: "Release provenance",
    description:
      "No version, commit, artifact, release time, environment, author, or source-of-truth history is connected.",
    icon: GitCommitHorizontal,
  },
  {
    title: "Compatibility and migration",
    description:
      "API contract changes, migration notes, deprecation windows, rollout state, and rollback guidance are unavailable.",
    icon: Tags,
  },
  {
    title: "Approval and security",
    description:
      "Review approvals, security disclosures, dependency impact, access controls, and incident linkage are not verified.",
    icon: ShieldCheck,
  },
  {
    title: "Audit and publication",
    description:
      "Immutable history, correction policy, publication workflow, structured metadata, and reader access are not configured.",
    icon: FileCheck2,
  },
];

export default function ChangeLog() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      changeLogCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="change-log-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
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
                  id="change-log-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Change log readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents trustworthy release-history operations
                  without pretending that versions, commits, API changes,
                  security disclosures, or publication records are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load change log unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Change log status"
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
                    No version, commit, artifact, API change, security
                    disclosure, approval, or publication state is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <History className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified change-log service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define release provenance, API
                  compatibility, migration and deprecation notes, approval,
                  security disclosure, publication, correction, and immutable
                  audit behavior before this route can report history.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable change log actions"
              >
                {[
                  "Load releases",
                  "Filter versions",
                  "View migration notes",
                  "Publish entry",
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
                These safeguards must be verified before changelog controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Version, commit, artifact digest, environment, timestamp,
                author, source of truth, and signed provenance.
              </p>
              <p>
                API contract changes, migration notes, deprecation windows,
                rollout status, compatibility, and rollback guidance.
              </p>
              <p>
                Review approvals, security/dependency disclosures, incident
                linkage, access controls, and correction policy.
              </p>
              <p>
                Immutable history, structured metadata, publication workflow,
                reader access, and redacted operational logs.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Change-log capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load release records, inspect
              commits, infer versions, or publish history.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search change log capability notes"
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
