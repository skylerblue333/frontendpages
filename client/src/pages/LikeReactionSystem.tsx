import { useMemo, useState } from "react";
import {
  Bell,
  FileWarning,
  Heart,
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

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Actor and content ownership",
    area: "Identity",
    description:
      "No authenticated actor, content owner, post, comment, object, workspace, audience, or relationship record is connected.",
  },
  {
    title: "Reaction semantics and idempotency",
    area: "Behavior",
    description:
      "No reaction type, toggle rule, duplicate constraint, ordering, undo behavior, aggregate, or event source is configured.",
  },
  {
    title: "Privacy and visibility",
    area: "Governance",
    description:
      "No audience rule, private-content boundary, consent, redaction, block or mute preference, retention, or export control is verified.",
  },
  {
    title: "Abuse and notification controls",
    area: "Safety",
    description:
      "No rate limit, spam detection, automated abuse signal, moderation review, notification preference, delivery receipt, or suppression rule exists.",
  },
  {
    title: "Persistence and observability",
    area: "Operations",
    description:
      "No reaction write, aggregate reconciliation, audit event, retry, conflict handling, cache invalidation, telemetry, or recovery evidence exists.",
  },
];
export default function LikeReactionSystem() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LikeReactionSystem is unavailable locally. No actor, content item, reaction, aggregate, notification, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No actor, content, reaction, aggregate, notification, moderation, or engagement mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="like-reaction-system-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Heart className="size-3.5" aria-hidden="true" />{" "}
                  Engagement-governance readiness
                </Badge>
                <Badge variant="secondary">No reaction service</Badge>
              </div>
              <h1
                id="like-reaction-system-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Like &amp; Reaction System readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review identity, reaction semantics, privacy, abuse prevention,
                notification, persistence, and aggregation contracts without
                implying that likes, reactions, engagement counts, or user
                statistics exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Reaction service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated actor, content source, reaction API, idempotent
                persistence, aggregate pipeline, moderation control,
                notification service, or storage layer is connected. This is a
                readiness workspace, not a populated engagement system.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No reaction records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No actor, content item, reaction type, toggle state, aggregate,
                owner, or engagement record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Bell className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No notifications</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No notification preference, delivery, suppression, moderation
                alert, or read state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No engagement actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No like, unlike, reaction, aggregate update, notification,
                report, or engagement mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Engagement-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads content, writes a reaction, updates a count, sends a
              notification, reports abuse, or saves an engagement mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Like and Reaction System readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter engagement-governance requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No engagement-governance notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production reaction system needs authenticated actor and
                content ownership, explicit reaction semantics and idempotency,
                privacy and visibility controls, rate limits and abuse
                prevention, notification policy, aggregate reconciliation,
                auditability, moderation, retention, and tested recovery. No
                reaction, count, notification, or engagement state is claimed
                here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
