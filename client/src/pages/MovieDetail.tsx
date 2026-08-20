import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Clapperboard,
  FileSearch,
  LockKeyhole,
  PlayCircle,
  Search,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Title identity and provenance",
    area: "Catalog",
    description:
      "No title identifier, creator, synopsis, artwork, genre, release date, duration, source, version, or update timestamp is connected.",
  },
  {
    title: "Rights, availability, and age controls",
    area: "Rights",
    description:
      "No license, territory, availability window, language, rating authority, age gate, price, entitlement, or takedown state is verified.",
  },
  {
    title: "Ratings, reviews, and recommendations",
    area: "Discovery",
    description:
      "No rating, review, reviewer, moderation state, recommendation signal, personalization consent, or explanation is available.",
  },
  {
    title: "Playback and purchase authorization",
    area: "Playback",
    description:
      "No provider, playback URL, signed session, device limit, caption asset, purchase, subscription, receipt, or playback error state exists.",
  },
  {
    title: "Privacy and viewer actions",
    area: "Governance",
    description:
      "No profile, watch history, favorite, watchlist, share, telemetry, retention, deletion, or account audit record is connected.",
  },
];
export default function MovieDetail() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Movie details are unavailable locally. No title, rights, rating, review, recommendation, playback, purchase, or viewer record was loaded or saved."
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
      `${action} is unavailable locally. No title, rights, rating, review, recommendation, playback, purchase, viewer, or media-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="movie-detail-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Clapperboard className="size-3.5" aria-hidden="true" />{" "}
                  Media-detail readiness
                </Badge>
                <Badge variant="secondary">No title loaded</Badge>
              </div>
              <h1
                id="movie-detail-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MovieDetail readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review title provenance, rights, age and regional controls,
                ratings, reviews, recommendations, playback, purchase
                authorization, privacy, accessibility, and provider failure
                handling without implying that a movie or viewer record exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Movie details are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No licensed catalog source, rights service, ratings and review
                system, recommendation engine, playback provider, purchase
                authorization, accessibility asset source, or persistence layer
                is connected. This workspace cannot reveal, play, purchase,
                review, or claim a movie.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Clapperboard
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No title state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identifier, title, creator, artwork, synopsis, rating,
                runtime, provider, or rights record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <PlayCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No playback state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No availability, entitlement, playback session, caption asset,
                purchase, receipt, or playback error exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No detail actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No play, rent, buy, review, rate, favorite, share, recommend, or
                media-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Media-detail requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a title, checks rights, reveals a rating, opens playback,
              starts checkout, or saves viewer data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search movie detail readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter detail requirements"
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
                  No detail notes match “{query}”.
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
                Production details require authoritative title and artwork,
                rights and territory validation, age controls, moderated ratings
                and reviews, explainable recommendations, secure playback and
                purchase authorization, accessible media assets, privacy
                controls, and auditable viewer actions. No title, rights,
                rating, review, recommendation, playback, purchase, or media
                record is claimed here.
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
