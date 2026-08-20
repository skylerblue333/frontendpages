import { useMemo, useState } from "react";
import {
  Eye,
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
      "No authenticated user, content owner, post, comment, object, workspace, audience, or relationship record is connected.",
  },
  {
    title: "Like state and idempotency",
    area: "Behavior",
    description:
      "No like target, toggle state, duplicate constraint, event order, undo behavior, aggregate, or source event is configured.",
  },
  {
    title: "Visibility and privacy",
    area: "Governance",
    description:
      "No audience rule, private-content boundary, consent, block or mute preference, redaction, retention, or export control is verified.",
  },
  {
    title: "Aggregation and notifications",
    area: "Experience",
    description:
      "No count reconciliation, notification preference, delivery state, suppression, cache behavior, or moderation review exists.",
  },
  {
    title: "Persistence and operations",
    area: "Operations",
    description:
      "No like write, audit event, retry, conflict handling, rate limit, abuse signal, telemetry, or recovery evidence exists.",
  },
];
export default function Likes() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Likes is unavailable locally. No actor, content item, like state, aggregate, notification, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No actor, content, like state, count, notification, moderation, or engagement mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="likes-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Heart className="size-3.5" aria-hidden="true" /> Like-history
                  readiness
                </Badge>
                <Badge variant="secondary">No like service</Badge>
              </div>
              <h1
                id="likes-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Likes readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the actor, content, like-state, visibility, privacy,
                aggregation, and operational contracts without implying that
                likes, counts, notifications, or engagement history exist.
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
                Like service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated actor, content source, like API, idempotent
                persistence, aggregation pipeline, notification service,
                moderation control, or storage layer is connected. This is a
                readiness workspace, not a populated likes history or engagement
                console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No like records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No actor, content item, target, toggle state, aggregate, owner,
                or engagement history record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Eye className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No visible counts</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reconciled count, audience, notification, delivery, block,
                mute, or visibility state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No like actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No like, unlike, count update, notification, report, or
                engagement mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Like-history governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads content, writes a like, updates a count, sends a
              notification, changes visibility, or saves an engagement mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Likes readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter like-history requirements"
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
                  No like-history notes match “{query}”.
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
                A production likes system needs authenticated actor and content
                ownership, explicit like semantics and idempotency, privacy and
                visibility controls, aggregation reconciliation, notification
                policy, rate limits and abuse prevention, moderation,
                auditability, retention, and tested recovery. No like, count,
                notification, or engagement history is claimed here.
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
