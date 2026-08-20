import { useMemo, useState } from "react";
import {
  BellRing,
  FileCheck2,
  Globe2,
  LockKeyhole,
  Newspaper,
  Search,
  ShieldCheck,
  Tags,
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

type NewsCapability = {
  title: string;
  description: string;
  icon: typeof Newspaper;
};

const newsCapabilities: NewsCapability[] = [
  {
    title: "Source and freshness provenance",
    description:
      "No publisher, source URL, author, timestamp, update time, feed identity, licensing, freshness check, or retrieval status is connected.",
    icon: Globe2,
  },
  {
    title: "Article and market claims",
    description:
      "No headline, article body, quote, token claim, market event, price context, forecast, fact check, correction, or editorial review is verified.",
    icon: Newspaper,
  },
  {
    title: "Topics and discovery",
    description:
      "No category, asset tag, search index, recommendation, ranking, related story, saved item, or reading history is available.",
    icon: Tags,
  },
  {
    title: "Alerts, moderation, and privacy",
    description:
      "No alert rule, notification delivery, moderation decision, takedown, personalization, consent, profile, or audit record is configured.",
    icon: BellRing,
  },
];

export default function CryptoNews() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      newsCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="crypto-news-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Editorial-data boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="crypto-news-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Crypto news readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a trustworthy crypto-news contract
                  without pretending that headlines, sources, timestamps, market
                  claims, alerts, or article content are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load news feed unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Crypto news status"
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
                    Truthful news state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No publisher, article, headline, timestamp, source, market
                    claim, topic, alert, notification, or saved reading state is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <FileCheck2
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified crypto-news service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify sources, preserve freshness and
                  licensing metadata, validate article and market claims, handle
                  corrections, moderate harmful content, respect consent and
                  privacy, and provide delivery and audit evidence before this
                  route can publish news.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable news actions"
              >
                {[
                  "Load headlines",
                  "Open article",
                  "Search stories",
                  "Create alert",
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
                These safeguards must be verified before news controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Publisher, URL, author, timestamps, feed identity, licensing,
                freshness, retrieval, and provenance.
              </p>
              <p>
                Headline, article, quotes, token claims, market events, price
                context, forecasts, fact checks, corrections, and editorial
                review.
              </p>
              <p>
                Categories, asset tags, search, recommendations, ranking,
                related stories, saved items, and reading history.
              </p>
              <p>
                Alerts, notifications, moderation, takedown, personalization,
                consent, profile, privacy, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Crypto-news capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query feeds, retrieve articles,
              validate market claims, track reading, create alerts, notify
              users, or persist editorial data.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search crypto-news capability notes"
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
