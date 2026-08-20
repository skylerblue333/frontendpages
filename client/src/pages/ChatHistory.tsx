import { useMemo, useState } from "react";
import {
  Database,
  FileDown,
  KeyRound,
  LockKeyhole,
  MessageSquareText,
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

type HistoryCapability = {
  title: string;
  description: string;
  icon: typeof Database;
};

const historyCapabilities: HistoryCapability[] = [
  {
    title: "Account-scoped persistence",
    description:
      "No conversation, message, timestamp, model, attachment, title, ownership, or account-scoped record source is connected.",
    icon: Database,
  },
  {
    title: "Search and navigation",
    description:
      "Search, pagination, ordering, loading, empty, error, retry, and deep-link semantics are not configured.",
    icon: Search,
  },
  {
    title: "Retention and deletion",
    description:
      "Retention periods, deletion confirmation, cascade behavior, export, legal holds, and recovery are unavailable.",
    icon: Trash2,
  },
  {
    title: "Privacy and access",
    description:
      "Authorization, redaction, sensitive-content handling, encryption, audit history, and least-privilege access are not verified.",
    icon: ShieldCheck,
  },
];

export default function ChatHistory() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      historyCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="chat-history-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Conversation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="chat-history-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Chat history readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents privacy-conscious conversation history
                  operations without pretending that messages, records, search,
                  retention, or deletion state are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load history unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Chat history status"
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
                    Truthful history state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No conversation, message, model, attachment, search result,
                    retention state, export, or deletion state is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <MessageSquareText
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified conversation-history service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define account-scoped storage, searchable
                  metadata, retention, deletion, export, privacy redaction,
                  authorization, encryption, and failure recovery before this
                  route can reveal or change conversation history.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable history actions"
              >
                {[
                  "Search history",
                  "Open conversation",
                  "Export records",
                  "Delete history",
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
                These safeguards must be verified before history controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Account-scoped records with message metadata, model,
                attachments, title, ownership, timestamps, and integrity.
              </p>
              <p>
                Search, pagination, ordering, loading, empty, error, retry, and
                deep-link behavior with bounded queries.
              </p>
              <p>
                Retention periods, deletion confirmation, cascade semantics,
                export, legal holds, recovery, and user notice.
              </p>
              <p>
                Authorization, redaction, sensitive-content handling,
                encryption, audit history, and least privilege.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Chat history capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not read conversations, reveal
              messages, export records, or persist deletion state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search chat history capability notes"
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
