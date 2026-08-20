import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  ChartNoAxesCombined,
  FileCheck2,
  LockKeyhole,
  Search,
  ShieldCheck,
  Tags,
  Waypoints,
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

type ResearchCapability = {
  title: string;
  description: string;
  icon: typeof BookOpenCheck;
};

const researchCapabilities: ResearchCapability[] = [
  {
    title: "Sources and methodology",
    description:
      "No source, author, date, methodology, data license, provider identity, update schedule, or research version is connected.",
    icon: BookOpenCheck,
  },
  {
    title: "Market data and analysis",
    description:
      "No asset, price, volume, liquidity, chain metric, model input, calculation, forecast, scenario, rating, or risk estimate is verified.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Citations and conflicts",
    description:
      "No citation, evidence trail, assumption, uncertainty, conflict disclosure, editorial review, correction, or reproducibility record is available.",
    icon: FileCheck2,
  },
  {
    title: "Organization and export",
    description:
      "No topic taxonomy, watchlist, saved thesis, comparison, alert, personalized recommendation, report, export, or audit event is configured.",
    icon: Tags,
  },
];

export default function CryptoResearchHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      researchCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="crypto-research-hub-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Research-data boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="crypto-research-hub-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Crypto research hub readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a rigorous research contract without
                  pretending that sources, market data, models, ratings,
                  forecasts, or investment conclusions are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load research service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Crypto research status"
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
                    Truthful research state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No source, article, asset, price, metric, model, rating,
                    thesis, recommendation, report, or saved research state is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <Waypoints
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified crypto-research service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify sources and methodology,
                  preserve data provenance, validate calculations, disclose
                  assumptions and conflicts, distinguish facts from analysis,
                  handle corrections, and provide reproducible citation and
                  audit evidence before this route can publish research.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable research actions"
              >
                {[
                  "Load research",
                  "Compare assets",
                  "Save thesis",
                  "Export report",
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
                These safeguards must be verified before research controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Sources, authors, dates, methodology, licensing, providers,
                update schedules, and research versions.
              </p>
              <p>
                Assets, prices, volumes, liquidity, chain metrics, model inputs,
                calculations, forecasts, scenarios, ratings, and risk.
              </p>
              <p>
                Citations, evidence, assumptions, uncertainty, conflicts,
                editorial review, corrections, and reproducibility.
              </p>
              <p>
                Taxonomy, watchlists, theses, comparisons, alerts,
                recommendations, reports, exports, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Research capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query sources, load market data,
              run models, generate ratings, recommend investments, save a
              thesis, or export a report.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search research capability notes"
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
