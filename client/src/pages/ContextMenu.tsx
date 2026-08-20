import { useMemo, useState } from "react";
import {
  Ban,
  CheckSquare,
  ClipboardList,
  LockKeyhole,
  MousePointer2,
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

type MenuCapability = {
  title: string;
  description: string;
  icon: typeof MousePointer2;
};

const menuCapabilities: MenuCapability[] = [
  {
    title: "Target context and command scope",
    description:
      "No target element, selected record, account scope, menu command, enabled state, or affected-resource summary is connected.",
    icon: MousePointer2,
  },
  {
    title: "Keyboard and focus semantics",
    description:
      "No focus return target, roving navigation, Escape handling, pointer positioning, screen-reader announcement, or touch equivalent is verified.",
    icon: CheckSquare,
  },
  {
    title: "Authorization and safeguards",
    description:
      "No permission check, confirmation contract, CSRF protection, rate limit, idempotency, or destructive-action policy is configured.",
    icon: ShieldCheck,
  },
  {
    title: "Action result and audit",
    description:
      "No command handler, loading state, success or failure result, retry, rollback, notification, audit event, or persisted outcome is available.",
    icon: ClipboardList,
  },
];

export default function ContextMenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      menuCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="context-menu-title"
    >
      <div data-ui-polish="batch-184" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Interaction-safety boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="context-menu-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Context menu readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, keyboard-accessible command menu
                  without pretending that a target, permission, command, or
                  action result is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load menu context unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Context menu status"
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
                    Truthful menu state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No target, selected record, menu command, permission,
                    handler, action result, or saved outcome is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <Ban className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified context-menu service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify the target and command scope,
                  enforce authorization, support keyboard and touch semantics,
                  confirm destructive actions, handle failures, and record an
                  audit trail before menu commands can run.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable menu actions"
              >
                {[
                  "Open menu",
                  "Run command",
                  "Confirm delete",
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
                These safeguards must be verified before command controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Target element, selected record, account scope, commands,
                enabled states, and affected-resource summary.
              </p>
              <p>
                Focus return, keyboard navigation, Escape handling, pointer
                positioning, announcements, and touch equivalent.
              </p>
              <p>
                Permission checks, confirmation, CSRF, rate limits, idempotency,
                and destructive-action policy.
              </p>
              <p>
                Loading, success, failure, retry, rollback, notification, audit
                event, and post-action state.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Context-menu capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not open a menu, invoke a command,
              change a record, confirm deletion, or persist an outcome.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search context-menu capability notes"
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
