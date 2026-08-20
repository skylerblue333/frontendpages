import { useMemo, useState } from "react";
import {
  Accessibility,
  BellRing,
  FileText,
  Flag,
  LockKeyhole,
  MessageSquareText,
  Search,
  ShieldCheck,
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

type CommentCapability = {
  title: string;
  description: string;
  icon: typeof MessageSquareText;
};

const commentCapabilities: CommentCapability[] = [
  {
    title: "Thread and identity scope",
    description:
      "No parent resource, thread, author identity, account scope, reply relationship, edit history, or visibility policy is connected.",
    icon: MessageSquareText,
  },
  {
    title: "Moderation and abuse controls",
    description:
      "Reporting, filtering, rate limits, block/mute behavior, moderator roles, escalation, evidence retention, and appeal workflow are not verified.",
    icon: Flag,
  },
  {
    title: "Privacy and notifications",
    description:
      "Mention handling, notification preferences, redaction, deletion, retention, sensitive-content policy, and contact boundaries are unavailable.",
    icon: BellRing,
  },
  {
    title: "Accessibility and authorization",
    description:
      "Keyboard navigation, screen-reader announcements, focus management, permission checks, CSRF protection, and audit history are not configured.",
    icon: Accessibility,
  },
];

export default function CommentsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      commentCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="comments-section-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Discussion boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="comments-section-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Comments section readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, accessible discussion contract
                  without pretending that comments, identities, moderation,
                  notifications, or persistence are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load discussion unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Comments section status"
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
                    Truthful discussion state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No thread, comment, author, reply, moderation, notification,
                    or saved discussion state is loaded or persisted.
                  </CardDescription>
                </div>
                <UsersRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified comments service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define parent-resource scope, identity,
                  threading, moderation, privacy, abuse prevention,
                  notifications, accessibility, authorization, and audit
                  evidence before this route can display or accept a comment.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable comment actions"
              >
                {[
                  "Load comments",
                  "Write comment",
                  "Reply",
                  "Report comment",
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
                These safeguards must be verified before discussion controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Parent resource, thread, identity, account scope, replies, edit
                history, visibility, and ownership.
              </p>
              <p>
                Reporting, filtering, rate limits, block/mute, moderator roles,
                escalation, retention, and appeals.
              </p>
              <p>
                Mentions, notifications, preferences, redaction, deletion,
                retention, sensitive content, and contact boundaries.
              </p>
              <p>
                Keyboard navigation, announcements, focus, permission checks,
                CSRF protection, and audit history.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Discussion capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load comments, reveal
              identities, post replies, moderate content, notify users, or
              persist discussion state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search discussion capability notes"
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
