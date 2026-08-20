import { useMemo, useState } from "react";
import {
  Box,
  Code2,
  FileCheck2,
  KeyRound,
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

type LibraryCapability = {
  title: string;
  description: string;
  icon: typeof Box;
};

const libraryCapabilities: LibraryCapability[] = [
  {
    title: "Package and API identity",
    description:
      "No package registry, language/runtime support, version, API schema, authentication method, compatibility matrix, or ownership is connected.",
    icon: Box,
  },
  {
    title: "Security and supply chain",
    description:
      "Dependency provenance, signing, checksums, vulnerability policy, secret handling, sandboxing, and disclosure process are not verified.",
    icon: ShieldCheck,
  },
  {
    title: "Release and compatibility",
    description:
      "No changelog, semantic-versioning policy, deprecation path, migration guide, test matrix, support window, or release artifact is available.",
    icon: FileCheck2,
  },
  {
    title: "Integration and support",
    description:
      "Examples, error taxonomy, rate limits, observability, support channel, incident process, and authenticated download workflow are unavailable.",
    icon: TerminalSquare,
  },
];

export default function ClientLibraries() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      libraryCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="client-libraries-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Developer platform boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="client-libraries-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Client libraries readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents trustworthy SDK and library distribution
                  without pretending that packages, versions, downloads,
                  examples, or support commitments are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load libraries unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Client libraries status"
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
                    Truthful library state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No package, version, download, API contract, compatibility
                    result, install instruction, or support status is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <Code2 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified client-library catalog is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define package identity, API schemas,
                  authentication, compatibility, supply-chain security, release
                  provenance, support, and authenticated distribution before
                  this route can recommend or install a library.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable library actions"
              >
                {[
                  "Load catalog",
                  "View package",
                  "Copy install command",
                  "Download library",
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
                These safeguards must be verified before library controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Package registry, language/runtime, version, API schema,
                authentication, compatibility matrix, and ownership.
              </p>
              <p>
                Dependency provenance, signing, checksums, vulnerability policy,
                secret handling, sandboxing, and disclosure.
              </p>
              <p>
                Changelog, semantic versioning, deprecation, migration guide,
                test matrix, support window, and artifacts.
              </p>
              <p>
                Examples, error taxonomy, rate limits, observability, support,
                incident process, and authenticated downloads.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Client library capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query a registry, expose package
              metadata, generate install commands, download artifacts, or
              persist an integration.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search client library capability notes"
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
