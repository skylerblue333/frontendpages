import { useMemo, useState } from "react";
import {
  FileWarning,
  Globe2,
  Layers3,
  LockKeyhole,
  Map,
  Search,
  ServerOff,
  ShieldCheck,
  Waypoints,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Geographic source and licensing",
    area: "Evidence",
    description:
      "No map provider, tile source, geocoder, coordinate dataset, license, freshness timestamp, jurisdiction, or provenance record is connected.",
  },
  {
    title: "Location consent and precision",
    area: "Privacy",
    description:
      "No user location, consent basis, precision policy, sensitive-place rule, retention, redaction, or sharing boundary is verified.",
  },
  {
    title: "Layers, markers, and records",
    area: "Data",
    description:
      "No layer schema, marker, place, route, polygon, owner, category, status, or record source is loaded.",
  },
  {
    title: "Interaction and accessibility",
    area: "Experience",
    description:
      "No zoom, pan, selection, keyboard map alternative, screen-reader description, reduced-motion behavior, or empty/error state is configured.",
  },
  {
    title: "Security and operations",
    area: "Operations",
    description:
      "No authenticated map access, signed tile request, rate limit, cache policy, audit event, outage fallback, or recovery evidence exists.",
  },
];
export default function MapView() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MapView is unavailable locally. No provider, location, marker, layer, coordinate, route, or map mutation was loaded or saved."
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
      `${action} is unavailable locally. No provider, location, marker, layer, coordinate, route, tile, or map mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="map-view-title"
    >
      <div data-ui-polish="batch-194" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Map className="size-3.5" aria-hidden="true" /> Geospatial
                  readiness
                </Badge>
                <Badge variant="secondary">No map service</Badge>
              </div>
              <h1
                id="map-view-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MapView readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review geographic sources, location consent, precision, layers,
                markers, routes, accessibility, security, and map operations
                without implying that a provider, place, coordinate, route, or
                map state exists.
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
                Map service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider, tile source, geocoder, location permission,
                coordinate dataset, layer store, or persistence layer is
                connected. This is a readiness workspace, not a populated map.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Globe2 className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No map source</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, tile, geocoder, license, coordinate dataset, place,
                route, or jurisdiction is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Layers3
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No layers or markers</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No layer, marker, polygon, owner, category, status, location
                consent, or precision policy is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No map actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No pan, zoom, select, locate, route, share, tile, export, or
                geospatial mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Geospatial governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a map, requests location, renders a tile, places a marker,
              geocodes an address, calculates a route, or saves map data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MapView readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter geospatial requirements"
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
                  No geospatial notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <Waypoints
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production map needs licensed and fresh geographic sources,
                explicit location consent and precision controls, accessible
                alternatives, secure tile and geocoder access, layer and marker
                authorization, privacy and retention, rate limits, auditability,
                and tested outage recovery. No place, coordinate, route, or map
                state is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <LockKeyhole
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
