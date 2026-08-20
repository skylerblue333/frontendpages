import { useMemo, useState } from "react";
import {
  Compass,
  FileCheck2,
  Globe2,
  LockKeyhole,
  MapPinned,
  Search,
  ShieldCheck,
  Sparkles,
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

type DestinationCapability = {
  title: string;
  description: string;
  icon: typeof Globe2;
};

const destinationCapabilities: DestinationCapability[] = [
  {
    title: "Destination identity and provenance",
    description:
      "No place identity, coordinates, address, source, provider, attribution, freshness timestamp, or confidence level is verified.",
    icon: Globe2,
  },
  {
    title: "Discovery, maps, and itinerary",
    description:
      "No search result, map tile, route, distance, opening hour, reservation, recommendation, itinerary, or navigation instruction is connected.",
    icon: MapPinned,
  },
  {
    title: "Safety, privacy, and accessibility",
    description:
      "No safety notice, local policy, accessibility detail, emergency information, location permission, precise location, or personalization profile is configured.",
    icon: ShieldCheck,
  },
  {
    title: "Sharing, freshness, and audit",
    description:
      "No saved destination, share link, notification, moderation result, translation, export, retention rule, update check, or audit record is available.",
    icon: FileCheck2,
  },
];

export default function DestinationGuide() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      destinationCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="destination-guide-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Destination-data boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="destination-guide-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Destination guide readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a source-aware destination guide without
                  pretending that places, maps, directions, safety notices,
                  recommendations, or saved travel plans are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load destination service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Destination guide status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful destination state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No destination, source, map, route, recommendation, safety
                    notice, location permission, itinerary, or saved travel
                    record is loaded or persisted.
                  </CardDescription>
                </div>
                <Compass className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified destination-information service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish place and source provenance,
                  freshness, attribution, location consent, map and route
                  providers, safety and accessibility data, privacy boundaries,
                  and clear recommendation and navigation behavior before this
                  route can guide a trip.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable destination actions"
              >
                {[
                  "Search destinations",
                  "Open map",
                  "Build itinerary",
                  "Save destination",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before destination controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Place identities, coordinates, addresses, sources, providers,
                attribution, freshness timestamps, and confidence levels.
              </p>
              <p>
                Search, map tiles, routes, distances, opening hours,
                reservations, recommendations, itineraries, and navigation.
              </p>
              <p>
                Safety, local policy, accessibility, emergency information,
                location permission, precise location, and personalization.
              </p>
              <p>
                Saved places, sharing, notifications, moderation, translation,
                export, retention, updates, and audit records.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Destination capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query places, read location,
              render maps, calculate routes, make recommendations, send
              notifications, or persist an itinerary.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search destination capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
