import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Heart,
  ListChecks,
  Search,
  ShieldCheck,
  Users,
  XCircle,
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

type FollowBoundary = { title: string; area: string; description: string };
const boundaries: readonly FollowBoundary[] = [
  {
    title: "Identity and relationship state",
    area: "Privacy",
    description:
      "No profile, account, handle, avatar, relationship status, follower count, or identity scope is loaded.",
  },
  {
    title: "List and pagination",
    area: "Records",
    description:
      "No followed profile list, cursor, sort order, freshness marker, empty state, or pagination contract is connected.",
  },
  {
    title: "Follow and unfollow actions",
    area: "Mutations",
    description:
      "No follow state, request state, optimistic update, idempotency key, error, notification, or undo action exists.",
  },
  {
    title: "Visibility and moderation",
    area: "Governance",
    description:
      "No block, mute, privacy setting, consent boundary, moderation result, audit event, or abuse-report workflow is available.",
  },
];

export default function FollowList() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Follow list is unavailable locally. No profiles, relationship states, notifications, or social mutations were started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profiles, relationship states, notifications, or social mutations were started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="follow-list-title"
    >
      <div data-ui-polish="batch-189" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Heart className="size-3.5" aria-hidden="true" />
                  Relationship readiness
                </Badge>
                <Badge variant="secondary">No social service</Badge>
              </div>
              <h1
                id="follow-list-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Follow list readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful identity, relationship, list, mutation, privacy,
                and moderation contracts without presenting fabricated profiles
                or changing a social relationship.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Follow service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity source, relationship store, list query, notification
                channel, privacy policy, moderation service, or audit stream is
                connected. This is a planning boundary, not an active social
                list.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Follow list status"
        >
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No profiles loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No profile, account, handle, avatar, relationship status, count,
                or identity scope is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ListChecks
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No follow list</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No followed profiles, cursor, sort order, freshness marker,
                empty state, or pagination can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No social action</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No follow, unfollow, request, notification, block, mute, undo,
                or moderation state exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Follow list readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              profiles, relationship state, notifications, privacy, or
              moderation data.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search follow list readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search relationship requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No relationship notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production follow list needs authenticated identity scope,
                privacy-aware relationship queries, stable pagination,
                consistent relationship state, idempotent follow mutations,
                notification semantics, block and mute precedence, moderation
                controls, abuse reporting, and audit-safe recovery.
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
