import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Globe2,
  Network,
  Search,
  ShieldCheck,
  UserRound,
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

type NetworkBoundary = { title: string; area: string; description: string };
const boundaries: readonly NetworkBoundary[] = [
  {
    title: "Network identity and relationship graph",
    area: "Identity",
    description:
      "No authenticated identity, follower edge, profile, account, handle, avatar, mutual relationship, or graph scope is loaded.",
  },
  {
    title: "Network query and traversal",
    area: "Records",
    description:
      "No graph query, cursor, depth, ordering, freshness marker, deduplication rule, empty state, or pagination contract is connected.",
  },
  {
    title: "Privacy and audience visibility",
    area: "Privacy",
    description:
      "No consent scope, private-account rule, block or mute precedence, visibility filter, notification state, or cross-device consistency exists.",
  },
  {
    title: "Moderation and relationship actions",
    area: "Governance",
    description:
      "No follow, remove, block, mute, report, moderation decision, rate limit, audit event, or abuse-safety workflow is available.",
  },
];

export default function FollowersNetwork() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Followers network is unavailable locally. No identities, graph edges, relationship state, notifications, or social mutations were started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No identities, graph edges, relationship state, notifications, or social mutations were started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="followers-network-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Network className="size-3.5" aria-hidden="true" />
                  Network readiness
                </Badge>
                <Badge variant="secondary">No social service</Badge>
              </div>
              <h1
                id="followers-network-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Followers network readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review network identity, graph, privacy, moderation, and
                traversal contracts without presenting fabricated connections or
                social activity.
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
                Followers network service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated identity source, graph store, privacy policy,
                notification channel, moderation service, or audit stream is
                connected. This is a planning boundary, not an active
                relationship graph.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Followers network status"
        >
          <Card>
            <CardContent className="p-5">
              <UserRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No identities loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, profile, handle, avatar, mutual relationship,
                follower edge, or graph scope is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Globe2 className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No graph query</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No traversal, cursor, depth, ordering, freshness marker,
                deduplication, empty state, or pagination can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No social activity</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No follow, remove, block, mute, notify, report, moderation, or
                relationship state exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Followers-network readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              identities, graph edges, privacy, notifications, or moderation
              data.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search followers network readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search network requirements"
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
                  No network notes match “{query}”.
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
                A production network needs authenticated graph scope,
                privacy-aware traversal, stable pagination, deterministic
                deduplication, relationship consistency, block and mute
                precedence, notification semantics, moderation controls, abuse
                reporting, rate limiting, and audit-safe recovery.
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
