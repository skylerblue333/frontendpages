import { useMemo, useState } from "react";
import {
  Archive,
  FileCheck2,
  FolderOpen,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  Trash2,
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

type ContentDeletionCapability = {
  title: string;
  description: string;
  icon: typeof Trash2;
};

const contentDeletionCapabilities: ContentDeletionCapability[] = [
  {
    title: "Ownership and authorization",
    description:
      "No content identity, owner, collaborator, role, permission, re-authentication, consent, or deletion authority is verified.",
    icon: KeyRound,
  },
  {
    title: "Dependencies and versions",
    description:
      "No asset, attachment, derivative, playlist, post, collection, link, embed, revision, marketplace, or downstream dependency inventory is loaded.",
    icon: FolderOpen,
  },
  {
    title: "Retention and recovery",
    description:
      "No moderation hold, legal hold, retention rule, archive, trash state, grace period, restore path, or irreversible-action confirmation is configured.",
    icon: Archive,
  },
  {
    title: "Propagation, privacy, and audit",
    description:
      "No provider deletion, cache invalidation, backup policy, privacy request, notification, completion state, or audit record is available.",
    icon: FileCheck2,
  },
];

export default function DeleteContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      contentDeletionCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="delete-content-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Destructive content-action boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="delete-content-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Content deletion readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a reviewable, ownership-aware
                  content-deletion contract without pretending that content
                  identity, dependencies, retention, erasure, recovery, or
                  irreversible outcomes are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load content service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Content deletion status"
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
                    Truthful deletion state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No content, owner, dependency inventory, deletion request,
                    archive, recovery state, or saved action is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <Trash2 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified content-deletion service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must verify ownership and authorization,
                  inventory versions and dependencies, respect moderation and
                  legal holds, explain retention, support export and consent,
                  require deliberate confirmation, define recovery boundaries,
                  propagate erasure to providers and backups, and produce
                  auditable privacy evidence before this route can delete
                  content.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable content-deletion actions"
              >
                {[
                  "Load content inventory",
                  "Review dependencies",
                  "Move to archive",
                  "Confirm deletion",
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
                These safeguards must be verified before content-deletion
                controls are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Content identity, ownership, collaborators, roles, permissions,
                re-authentication, consent, and deletion authority.
              </p>
              <p>
                Assets, attachments, derivatives, playlists, posts, collections,
                links, embeds, revisions, marketplaces, and downstream
                dependencies.
              </p>
              <p>
                Moderation and legal holds, retention, archive and trash states,
                grace periods, restore paths, and irreversible-action
                confirmation.
              </p>
              <p>
                Provider erasure, cache invalidation, backups, privacy requests,
                notifications, completion, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Content-deletion capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not inspect content, review
              ownership, archive assets, request erasure, send notifications, or
              persist a destructive action.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search content-deletion capability notes"
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
