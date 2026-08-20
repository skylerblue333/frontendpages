import { useMemo, useState } from "react";
import {
  BellRing,
  ContactRound,
  Handshake,
  LockKeyhole,
  MessageCircle,
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

type NetworkCapability = {
  title: string;
  description: string;
  icon: typeof UsersRound;
};

const networkCapabilities: NetworkCapability[] = [
  {
    title: "Creator identity and discovery",
    description:
      "No creator profile, verified identity, audience scope, category, location, availability, search index, recommendation, or follower relationship is connected.",
    icon: ContactRound,
  },
  {
    title: "Relationship and consent",
    description:
      "No follow, connection, block, mute, invitation, collaboration request, consent, privacy preference, or relationship state is verified.",
    icon: Handshake,
  },
  {
    title: "Messaging and notifications",
    description:
      "No conversation, recipient authorization, message, attachment, delivery, read state, notification, rate limit, or abuse report is available.",
    icon: MessageCircle,
  },
  {
    title: "Moderation and governance",
    description:
      "No content review, impersonation protection, moderation queue, access control, deletion, audit event, or recovery path is configured.",
    icon: ShieldCheck,
  },
];

export default function CreatorNetwork() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      networkCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="creator-network-title"
    >
      <div data-ui-polish="batch-184" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Social-graph boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="creator-network-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Creator network readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, consent-aware creator network
                  without pretending that profiles, recommendations,
                  relationships, messages, or notifications are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load creator network unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Creator network status"
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
                    Truthful network state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No creator, identity, audience, relationship, conversation,
                    message, invitation, notification, or saved social-graph
                    state is loaded or persisted.
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
                  No verified creator-network service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define identity and discovery, consent
                  and relationship rules, recipient authorization, messaging
                  delivery, notification behavior, moderation, privacy, and
                  audit evidence before this route can connect creators or send
                  anything.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable network actions"
              >
                {[
                  "Load creators",
                  "Follow creator",
                  "Invite collaborator",
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
                These safeguards must be verified before network controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Profile, verified identity, audience scope, category, location,
                availability, search, recommendations, and followers.
              </p>
              <p>
                Follow, connection, block, mute, invitations, collaboration,
                consent, privacy, and relationship state.
              </p>
              <p>
                Recipient authorization, message, attachment, delivery, read
                state, notification, rate limits, and abuse report.
              </p>
              <p>
                Content review, impersonation protection, moderation, access
                control, deletion, audit, and recovery.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Creator-network capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query profiles, recommend
              creators, change relationships, send messages, notify users, or
              persist social-graph state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search creator-network capability notes"
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
