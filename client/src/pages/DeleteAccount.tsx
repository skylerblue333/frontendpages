import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Archive,
  FileCheck2,
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

type DeletionCapability = {
  title: string;
  description: string;
  icon: typeof Trash2;
};

const deletionCapabilities: DeletionCapability[] = [
  {
    title: "Identity and authorization",
    description:
      "No account identity, session assurance, re-authentication, MFA challenge, delegated authority, consent, or deletion permission is verified.",
    icon: KeyRound,
  },
  {
    title: "Data inventory and dependencies",
    description:
      "No profile, content, wallet, financial, subscription, education, notification, integration, export, retention, or legal-hold inventory is loaded.",
    icon: Archive,
  },
  {
    title: "Confirmation and recovery",
    description:
      "No warning, dependency review, typed confirmation, grace period, cancellation window, restore path, or irreversible-action record is configured.",
    icon: AlertTriangle,
  },
  {
    title: "Erasure, privacy, and audit",
    description:
      "No deletion job, anonymization result, backup policy, provider propagation, privacy request, notification, completion state, or audit evidence is available.",
    icon: FileCheck2,
  },
];

export default function DeleteAccount() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      deletionCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="delete-account-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Destructive account-action boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="delete-account-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Account deletion readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, reviewable account-deletion
                  contract without pretending that identity, dependencies,
                  erasure, recovery, or irreversible outcomes are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load deletion service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Account deletion status"
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
                    No account, identity, dependency inventory, deletion
                    request, export, erasure job, recovery state, or saved
                    action is loaded or persisted.
                  </CardDescription>
                </div>
                <Trash2 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified account-deletion service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must verify identity and authorization,
                  inventory dependencies, explain retention and legal holds,
                  support export and consent, require deliberate confirmation,
                  define recovery boundaries, propagate erasure to providers and
                  backups, and produce auditable privacy evidence before this
                  route can delete anything.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable deletion actions"
              >
                {[
                  "Load account inventory",
                  "Request export",
                  "Review dependencies",
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
                These safeguards must be verified before deletion controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Identity, session assurance, re-authentication, MFA, delegated
                authority, consent, and permission checks.
              </p>
              <p>
                Profile, content, wallet, financial, subscription, education,
                notification, integration, export, retention, and legal holds.
              </p>
              <p>
                Warnings, dependency review, typed confirmation, grace periods,
                cancellation windows, restore paths, and irreversible-action
                records.
              </p>
              <p>
                Deletion jobs, anonymization, backups, provider propagation,
                privacy requests, notifications, completion, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Account-deletion capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not inspect an account, export data,
              request erasure, send notifications, delete content, or persist a
              destructive action.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search account-deletion capability notes"
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
