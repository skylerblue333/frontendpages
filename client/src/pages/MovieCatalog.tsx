import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Clapperboard,
  FileSearch,
  Filter,
  LockKeyhole,
  Search,
  ShieldCheck,
  Subtitles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Title, artwork, and source provenance",
    area: "Catalog",
    description:
      "No title, creator, synopsis, artwork, genre, release date, rating, duration, provider, identifier, or catalog version is connected.",
  },
  {
    title: "Rights, territory, and availability",
    area: "Rights",
    description:
      "No license, territory, age gate, availability window, language, price, subscription entitlement, playback route, or takedown status is verified.",
  },
  {
    title: "Accessibility and content safety",
    area: "Accessibility",
    description:
      "No caption, transcript, audio description, content warning, sensitive-content label, keyboard path, or playback accessibility asset exists.",
  },
  {
    title: "Search, ranking, and personalization",
    area: "Discovery",
    description:
      "No query index, filter, facet, ranking rule, recommendation signal, watch history, profile, or personalization consent is available.",
  },
  {
    title: "Privacy, analytics, and user actions",
    area: "Governance",
    description:
      "No viewing event, favorite, watchlist, review, share, telemetry, retention, export, deletion, or account audit record is connected.",
  },
];
export default function MovieCatalog() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Movie catalog is unavailable locally. No title, artwork, rights, availability, viewer, watchlist, recommendation, or media record was loaded or saved."
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
      `${action} is unavailable locally. No title, artwork, rights, availability, viewer, watchlist, recommendation, playback, or media-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="movie-catalog-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Clapperboard className="size-3.5" aria-hidden="true" />{" "}
                  Media-catalog readiness
                </Badge>
                <Badge variant="secondary">No catalog connected</Badge>
              </div>
              <h1
                id="movie-catalog-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MovieCatalog readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review title provenance, rights, availability, ratings,
                accessibility, discovery, personalization, privacy, and viewer
                actions without implying that movies, artwork, playback,
                entitlements, or user media records exist.
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
                Movie catalog is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No catalog source, rights registry, ratings service, media
                provider, playback route, accessibility asset source,
                recommendation engine, viewer account system, or persistence
                layer is connected. This workspace cannot browse, play, rent,
                recommend, or claim a movie.
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
              <h2 className="font-semibold">No title records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No title, creator, synopsis, artwork, genre, release date,
                rating, duration, provider, or identifier is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Subtitles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No viewing state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No availability, playback, caption, transcript, entitlement,
                history, watchlist, or recommendation state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No catalog actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No search, play, rent, favorite, review, share, recommend,
                subscribe, or media-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Media-catalog requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              queries a catalog, reveals artwork, checks rights, opens playback,
              grants an entitlement, or saves viewing data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search movie catalog readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter catalog requirements"
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
                  No catalog notes match “{query}”.
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
                Production media catalogs require authoritative title and
                artwork sources, rights and territory validation, age and
                content controls, accessible playback assets, tested search and
                ranking, consent-aware personalization, privacy and telemetry
                controls, and auditable viewer actions. No title, rights,
                availability, playback, entitlement, or media record is claimed
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
