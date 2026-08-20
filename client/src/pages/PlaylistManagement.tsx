import { useMemo, useState } from "react";
import {
  FileSearch,
  Info,
  ListMusic,
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
    title: "Media, playlist, and ownership provenance",
    area: "Catalog",
    description:
      "No media item, playlist, creator, account, tenant, source, ownership, publication, or updated-at timestamp is connected.",
  },
  {
    title: "Ordering, versioning, and availability",
    area: "Integrity",
    description:
      "No item order, duplicate rule, version, duration, availability, region, content warning, or snapshot semantics are verified.",
  },
  {
    title: "Rights, privacy, and sharing",
    area: "Governance",
    description:
      "No license, rights window, age or region rule, private state, collaborator role, share scope, export, or retention control exists.",
  },
  {
    title: "Playback, moderation, and recovery",
    area: "Reliability",
    description:
      "No playback source, moderation result, unavailable-item handling, correction, restore, audit event, or support trace is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No create, add, reorder, rename, publish, share, remove, restore, export, or playlist or media-data mutation is connected or persisted.",
  },
];
export default function PlaylistManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Playlist management is unavailable locally. No media, playlist, creator, account, item order, rights, playback, sharing, or media record was loaded or saved."
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
      `${action} is unavailable locally. No playlist, media item, order, rights, playback, sharing, privacy, or media-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="playlist-management-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ListMusic className="size-3.5" aria-hidden="true" />{" "}
                  Playlist-readiness workspace
                </Badge>
                <Badge variant="secondary">No playlist data</Badge>
              </div>
              <h1
                id="playlist-management-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PlaylistManagement readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review media and playlist ownership, ordering, versioning,
                availability, rights, privacy, sharing, playback, moderation,
                recovery, and playlist-action boundaries without implying that
                media items, playlists, creators, or records exist.
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
                Playlist management is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No media catalog, playlist service, ownership model, rights
                registry, playback source, moderation workflow, sharing control,
                or persistence layer is connected. This workspace cannot create,
                add, reorder, rename, publish, share, remove, restore, export,
                or claim playlist changes.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ListMusic
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No playlist data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No media item, playlist, creator, account, tenant, source,
                ownership, publication, or item record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ordering state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No item order, duplicate rule, version, availability, rights,
                sharing, playback, or moderation state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No playlist actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No create, add, reorder, rename, publish, share, remove,
                restore, export, or media-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Playlist-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads media, creates a playlist, changes item order, exposes
              rights, or saves media records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PlaylistManagement readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter playlist requirements"
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
                  No playlist requirements match “{query}”.
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
                Production playlist management requires authoritative media and
                ownership data, deterministic ordering and versioning, rights
                and availability checks, privacy and sharing controls, playback
                and moderation semantics, restore and correction workflows,
                audit history, and clear feedback for every action. No media
                item, playlist, creator, rights, playback, sharing, or media
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
