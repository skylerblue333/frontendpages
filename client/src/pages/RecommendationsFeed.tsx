import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Feed item and source provenance",
    area: "Evidence",
    description:
      "No feed item, candidate, source, publisher, catalog, content version, user context, or recommendation record is connected.",
  },
  {
    title: "Ranking, ordering, and freshness",
    area: "Method",
    description:
      "No ranking model, feature, score, ordering rule, freshness signal, pagination cursor, duplicate key, or feed snapshot is verified.",
  },
  {
    title: "Personalization, privacy, and safety",
    area: "Controls",
    description:
      "No consent, preference, sensitive-data classification, audience, role, fairness review, content policy, or access decision exists.",
  },
  {
    title: "Feedback, moderation, and recovery",
    area: "Reliability",
    description:
      "No dismiss or feedback signal, moderation state, report, correction, opt-out, stale-data handling, retry, audit event, or recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No refresh, filter, save, dismiss, explain, report, share, export, opt out, or feed, profile, preference, content, or personal-data mutation is connected or persisted.",
  },
];
export default function RecommendationsFeed() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Recommendations Feed is unavailable locally. No feed item, candidate, source, ranking, score, preference, profile, feedback, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No feed, recommendation, ranking, score, preference, feedback, profile, content, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="recommendations-feed-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Layers3 className="size-3.5" aria-hidden="true" />{" "}
                  Feed-readiness workspace
                </Badge>
                <Badge variant="secondary">No feed state</Badge>
              </div>
              <h1
                id="recommendations-feed-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                RecommendationsFeed readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review feed-item and source provenance, ranking and ordering,
                freshness, personalization, privacy, safety, feedback,
                moderation, recovery, and persistence boundaries without
                implying that feed items, suggestions, scores, profiles, or
                outcomes exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Recommendations Feed is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No feed source, catalog, ranking service, preference store,
                content-safety policy, moderation path, feedback channel, or
                persistence layer is connected. This workspace cannot refresh,
                filter, save, dismiss, explain, report, share, export, or opt
                out.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Layers3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No feed state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No item, candidate, source, publisher, catalog, version, user
                context, or recommendation record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ranking state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No model, feature, score, ordering, freshness, pagination,
                duplicate key, or feed snapshot is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No feed actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No refresh, filter, save, dismiss, explain, report, share,
                export, opt out, or feed mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Recommendation-feed governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads feed items, personalizes content, exposes profiles, or saves
              preference or feed records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search RecommendationsFeed readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter feed requirements"
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
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No feed requirements match “{query}”.
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
                Production recommendation feeds require authoritative item and
                source catalogs, transparent ranking and ordering, freshness and
                pagination semantics, consent and sensitive-data handling,
                audience and role controls, fairness and content-safety review,
                moderation and feedback, opt-out, model and data versioning,
                audit history, and recovery from stale or harmful feed items. No
                feed, recommendation, ranking, score, preference, feedback,
                profile, content, or personal-data record is claimed here.
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
