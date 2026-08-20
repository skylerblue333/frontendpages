import { useMemo, useState } from "react";
import {
  Accessibility,
  AlertTriangle,
  ClipboardCheck,
  FileWarning,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
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

type ConfirmationCapability = {
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
};

const confirmationCapabilities: ConfirmationCapability[] = [
  {
    title: "Target and action intent",
    description:
      "No target resource, account scope, action intent, affected-record summary, dependency impact, or reversible/irreversible classification is connected.",
    icon: ClipboardCheck,
  },
  {
    title: "Authorization and safeguards",
    description:
      "Permission checks, step-up authentication, CSRF protection, confirmation text, rate limits, idempotency, and destructive-action policy are not verified.",
    icon: KeyRound,
  },
  {
    title: "Cancellation and recovery",
    description:
      "No cancel path, timeout, retry behavior, rollback, partial-failure handling, duplicate prevention, or post-action state is available.",
    icon: AlertTriangle,
  },
  {
    title: "Accessibility and audit",
    description:
      "Focus management, keyboard semantics, screen-reader announcement, error messaging, actor identity, evidence, and audit history are not configured.",
    icon: Accessibility,
  },
];

export default function ConfirmationDialog() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      confirmationCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="confirmation-dialog-title"
    >
      <div data-ui-polish="batch-184" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Action-safety boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="confirmation-dialog-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Confirmation dialog readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, accessible action-confirmation
                  contract without pretending that a target, permission,
                  confirmation, or destructive action is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load action context unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Confirmation dialog status"
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
                    Truthful confirmation state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No target, action intent, actor, permission, confirmation
                    text, submission, or post-action state is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <FileWarning
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified confirmation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify the target and action, summarize
                  impact, verify authorization, support cancellation, prevent
                  duplicates, handle failure, meet accessibility requirements,
                  and record an audit trail before this route can confirm or
                  execute anything.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable confirmation actions"
              >
                {[
                  "Load action",
                  "Confirm action",
                  "Cancel action",
                  "View audit",
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
                These safeguards must be verified before confirmation controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Target, account scope, action intent, affected records,
                dependency impact, and reversible classification.
              </p>
              <p>
                Permission, step-up authentication, CSRF, confirmation text,
                rate limits, idempotency, and policy.
              </p>
              <p>
                Cancel, timeout, retry, rollback, partial failure, duplicate
                prevention, and post-action state.
              </p>
              <p>
                Focus, keyboard semantics, announcements, error messaging, actor
                identity, evidence, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Confirmation capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load an action, verify a
              permission, submit a confirmation, mutate data, or persist an
              outcome.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search confirmation capability notes"
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
