import { useMemo, useState } from "react";
import {
  FolderTree,
  GitBranch,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  Tags,
  Waypoints,
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

type CategoryCapability = {
  title: string;
  description: string;
  icon: typeof Tags;
};

const categoryCapabilities: CategoryCapability[] = [
  {
    title: "Taxonomy and hierarchy",
    description:
      "No category schema, parent-child rules, slug uniqueness, ordering, locale, or version is connected.",
    icon: FolderTree,
  },
  {
    title: "References and validation",
    description:
      "Usage references, deletion safeguards, merge behavior, validation, migration, and orphan handling are not configured.",
    icon: Waypoints,
  },
  {
    title: "Ownership and access",
    description:
      "Workspace ownership, role permissions, private categories, audit history, and least-privilege access are not verified.",
    icon: KeyRound,
  },
  {
    title: "Change management",
    description:
      "Draft, review, approval, publishing, rollback, cache invalidation, and downstream compatibility are unavailable.",
    icon: GitBranch,
  },
];

export default function CategoryManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      categoryCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="category-management-title"
    >
      <div data-ui-polish="batch-182" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Taxonomy boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="category-management-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Category management readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe taxonomy operations without
                  pretending that categories, relationships, usage, or published
                  changes are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load categories unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Category management status"
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
                    Truthful taxonomy state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No category, hierarchy, reference, ownership, validation, or
                    change state is loaded or persisted.
                  </CardDescription>
                </div>
                <Tags className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified category-management service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define taxonomy, hierarchy, uniqueness,
                  references, deletion and merge behavior, ownership,
                  authorization, validation, migration, publishing, rollback,
                  and audit evidence before this route can manage categories.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable category actions"
              >
                {[
                  "Create category",
                  "Edit hierarchy",
                  "Merge categories",
                  "Publish taxonomy",
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
                These safeguards must be verified before category controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Typed schema, parent-child rules, slug uniqueness, ordering,
                locale, versioning, and compatibility.
              </p>
              <p>
                Usage references, deletion safeguards, merge semantics,
                validation, migration, and orphan handling.
              </p>
              <p>
                Workspace ownership, role permissions, private data, audit
                history, and least-privilege access.
              </p>
              <p>
                Draft/review/approval, publishing, rollback, cache invalidation,
                downstream impact, and recovery.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Category capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read categories, alter
              hierarchy, inspect usage, or persist taxonomy changes.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search category capability notes"
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
