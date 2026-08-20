import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Compass,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type GroupBoundary = { title: string; area: string; description: string };
const boundaries: readonly GroupBoundary[] = [
  {
    title: "Group catalog and discovery",
    area: "Discovery",
    description:
      "No group directory, topic, description, member count, activity signal, recommendation, or freshness record is connected.",
  },
  {
    title: "Membership and invitations",
    area: "Identity",
    description:
      "No authenticated identity, membership status, invite, approval, role, block, or organization scope is loaded.",
  },
  {
    title: "Room access and conversation",
    area: "Messaging",
    description:
      "No room, thread, message history, attachment, reaction, notification, or realtime delivery state exists.",
  },
  {
    title: "Moderation and community safety",
    area: "Safety",
    description:
      "No report, moderation queue, content policy, rate limit, abuse control, escalation, or support workflow is available.",
  },
  {
    title: "Privacy and retention",
    area: "Governance",
    description:
      "No consent, visibility, encryption, redaction, export, deletion, retention, or audit policy is configured.",
  },
  {
    title: "Group mutations",
    area: "Operations",
    description:
      "Create, join, leave, invite, approve, edit, archive, delete, and notification operations have no backend contract.",
  },
];

export default function GroupChats() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Group discovery is unavailable locally. No group, member, room, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !normalized ||
        `${title} ${area} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No group, membership, invitation, message, or moderation record was changed.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="group-chats-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Compass className="size-3.5" aria-hidden="true" /> Community
                  discovery
                </Badge>
                <Badge variant="secondary">No group service</Badge>
              </div>
              <h1
                id="group-chats-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Group Chats readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the discovery, membership, messaging, moderation, and
                privacy contracts required for safe groups without implying that
                a directory, room, or community record exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Group Chats service status"
        >
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Group discovery service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No group catalog, authenticated membership, invitation flow,
                realtime room service, moderation pipeline, privacy policy, or
                persistence layer is connected. This is a readiness workspace,
                not a live community directory.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Group Chats status"
        >
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No group catalog</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No groups, topics, activity, recommendations, or member counts
                are loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No membership scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, role, invite, visibility, privacy, or moderation
                state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No live rooms</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No room, message, notification, attachment, or realtime event
                exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Group-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              a directory, joins a group, sends an invitation, opens a room, or
              saves a community change.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search group chats readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter group requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(boundary => (
                <div
                  key={boundary.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{boundary.title}</h3>
                    <Badge variant="outline">{boundary.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {boundary.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${boundary.title}`)}
                  >
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No group notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production group directory needs authenticated discovery
                scope, membership and invitation authorization, room and message
                contracts, moderation and abuse handling, privacy and retention
                controls, notifications, rate limits, observability, and tested
                recovery for joins, leaves, delivery, and uploads.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
