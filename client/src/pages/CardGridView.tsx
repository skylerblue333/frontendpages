import { useMemo, useState } from "react";
import {
  Accessibility,
  ArrowDownUp,
  Grid2X2,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type GridCapability = {
  title: string;
  description: string;
  icon: typeof Grid2X2;
};

const gridCapabilities: GridCapability[] = [
  {
    title: "Card data contract",
    description:
      "No card schema, ownership, loading, empty, error, or pagination source is connected to this view.",
    icon: Grid2X2,
  },
  {
    title: "Responsive layout",
    description:
      "Column rules, density, image ratios, truncation, focus order, and mobile behavior require verified content and tests.",
    icon: SlidersHorizontal,
  },
  {
    title: "Filter and ordering",
    description:
      "Search, filters, sorting, grouping, URL state, and deterministic result semantics are not configured.",
    icon: ArrowDownUp,
  },
  {
    title: "Accessibility and access",
    description:
      "Keyboard navigation, screen-reader labels, focus visibility, private-data handling, and authorization are not verified.",
    icon: Accessibility,
  },
];

export default function CardGridView() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      gridCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="card-grid-view-title"
    >
      <div data-ui-polish="batch-182" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Presentation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="card-grid-view-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Card grid view readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a responsive card-grid contract without
                  pretending that records, images, metadata, filters, or layout
                  state are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load card grid unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Card grid view status"
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
                    Truthful grid state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No card records, images, filters, ordering, pagination, or
                    success state is loaded.
                  </CardDescription>
                </div>
                <Grid2X2 className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified card-grid data service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define card data, image handling,
                  responsive layout, filtering, ordering, pagination,
                  loading/error states, accessibility, and authorization before
                  this route can render content.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable card grid actions"
              >
                {[
                  "Load records",
                  "Apply filters",
                  "Change layout",
                  "Open card",
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
                These safeguards must be verified before grid controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Typed card schema, ownership, image source, alt text,
                pagination, empty, loading, and error semantics.
              </p>
              <p>
                Responsive columns, density, aspect ratios, truncation, focus
                order, keyboard behavior, and touch targets.
              </p>
              <p>
                Deterministic filtering, ordering, grouping, URL state, bounded
                queries, and cache correctness.
              </p>
              <p>
                Private-data authorization, redaction, rate limits,
                export/deletion behavior, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Card grid capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load records, fetch images,
              apply remote filters, or persist layout preferences.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search card grid capability notes"
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
