import { useMemo, useState } from "react";
import {
  BellRing,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  Upload,
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

type MessagingCapability = {
  title: string;
  description: string;
  icon: typeof MessageSquare;
};

const messagingCapabilities: MessagingCapability[] = [
  {
    title: "Identity and conversation access",
    description:
      "No participant identity, relationship, block state, thread, authorization, consent, presence, or conversation access policy is verified.",
    icon: KeyRound,
  },
  {
    title: "Delivery, encryption, and attachments",
    description:
      "No message, delivery state, read receipt, encryption contract, key custody, attachment, malware scan, or provider route is connected.",
    icon: MessageSquare,
  },
  {
    title: "Moderation, privacy, and retention",
    description:
      "No abuse report, moderation rule, privacy boundary, deletion request, retention period, export, legal hold, or recovery path is configured.",
    icon: ShieldCheck,
  },
  {
    title: "Notifications and audit",
    description:
      "No notification preference, push or email delivery, message search, audit event, reconciliation, incident recovery, or support record is available.",
    icon: FileCheck2,
  },
];

export default function DirectMessages() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      messagingCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="direct-messages-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Messaging boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="direct-messages-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Direct messages readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, consent-aware messaging contract
                  without pretending that identities, conversations, delivery,
                  encryption, notifications, or message history are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load messaging service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Direct messages status"
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
                    Truthful messaging state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No participant, conversation, message, delivery state,
                    attachment, notification, or saved message record is loaded
                    or persisted.
                  </CardDescription>
                </div>
                <MessageSquare
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified direct-messaging service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish participant identity and
                  consent, conversation access, encryption and key custody,
                  delivery and read states, attachment handling, moderation,
                  privacy, retention, notifications, deletion, recovery, and
                  auditable support boundaries before this route can send a
                  message.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable messaging actions"
              >
                {[
                  "Load conversations",
                  "Start conversation",
                  "Attach file",
                  "Send message",
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
                These safeguards must be verified before messaging controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Participants, relationships, blocks, threads, authorization,
                consent, presence, and conversation access policies.
              </p>
              <p>
                Messages, delivery, read receipts, encryption, key custody,
                attachments, malware scanning, and provider routing.
              </p>
              <p>
                Abuse reports, moderation, privacy, deletion, retention, export,
                legal holds, and recovery paths.
              </p>
              <p>
                Notification preferences, push and email delivery, search,
                audit, reconciliation, incidents, and support records.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Messaging capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not inspect conversations, identify
              participants, send messages, upload attachments, send
              notifications, or persist message history.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search messaging capability notes"
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
