import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Compass,
  Filter,
  Hash,
  RefreshCw,
  Search,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";

type Category = "all" | "people" | "topics" | "communities";
type DiscoveryArea = {
  title: string;
  description: string;
  category: Exclude<Category, "all">;
  icon: typeof Users;
};
const AREAS: readonly DiscoveryArea[] = [
  {
    title: "People and creators",
    description:
      "Verified profiles, consent, identity, activity, audience, and follow relationships require a trusted directory and social graph.",
    category: "people",
    icon: Users,
  },
  {
    title: "Topics and trends",
    description:
      "Trend labels, post volume, momentum, growth, ranking, and freshness require a provenance-backed feed and ranking policy.",
    category: "topics",
    icon: TrendingUp,
  },
  {
    title: "Communities",
    description:
      "Community membership, moderation, recommendations, invitations, and access require connected services and safety ownership.",
    category: "communities",
    icon: Hash,
  },
  {
    title: "Personalized recommendations",
    description:
      "Personalization needs consent, explainability, data minimization, evaluation, and a user-controlled opt-out.",
    category: "people",
    icon: Sparkles,
  },
];

export default function Discover() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [status, setStatus] = useState(
    "Discovery service unavailable locally. No profile, trend, community, ranking, follow, notification, or recommendation mutation was started."
  );
  const areas = useMemo(
    () =>
      AREAS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return (
          matchesQuery && (category === "all" || item.category === category)
        );
      }),
    [query, category]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, trend, community, ranking, follow, notification, or recommendation mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="discover-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-purple-400/30 text-purple-200"
            >
              DISCOVERY READINESS PREVIEW
            </Badge>
            <h1
              id="discover-title"
              className="flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <Compass className="h-7 w-7 text-purple-300" aria-hidden="true" />
              Discover
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Review discovery requirements without inventing creators,
              profiles, engagement, trends, communities, rankings, or
              personalized recommendations.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Discovery refresh")}
          >
            <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
            Refresh unavailable
          </Button>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Discovery service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No profile directory, social graph, content feed, trend
                analyzer, community catalog, ranking provider, notification
                service, or personalization model is connected. This page
                contains planning requirements only.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Users className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">People unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No names, handles, avatars, verification, presence, followers, or
              engagement are loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <TrendingUp
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Trends unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No topic, post count, momentum, growth, freshness, or ranking is
              authoritative.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Hash className="mb-3 h-5 w-5 text-amber-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Communities unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No group, member, access, invitation, or moderation state exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Sparkles
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Recommendations unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No personalized score, explanation, or recommendation outcome is
              produced.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Discovery filters"
        >
          <label htmlFor="discover-search" className="sr-only">
            Search discovery requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="discover-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search discovery requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "people", "topics", "communities"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={category === value ? "default" : "outline"}
              onClick={() => setCategory(value)}
            >
              <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
              {value === "all"
                ? "All"
                : value[0].toUpperCase() + value.slice(1)}
            </Button>
          ))}
        </section>
        <section aria-labelledby="discovery-areas-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="discovery-areas-title" className="text-xl font-semibold">
                Discovery areas
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filtering only. Nothing queries or changes social records.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Community browsing")}
            >
              <Compass className="mr-2 h-4 w-4" aria-hidden="true" />
              Browse communities unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {areas.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          Unavailable
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} discovery`)
                        }
                      >
                        {item.title} unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {areas.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No discovery requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query profiles, posts, trends, or
                  communities.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No discovery claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production discovery surface needs provenance, moderation,
                privacy, ranking transparency, user controls, rate limits, abuse
                handling, accessibility, and auditable follow or recommendation
                events.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
