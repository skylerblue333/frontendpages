import { useMemo, useState } from "react";
import {
  CalendarClock,
  Eye,
  FileText,
  ImagePlus,
  LockKeyhole,
  Search,
  Send,
  Settings2,
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

interface PublishingCapability {
  readonly label: string;
  readonly detail: string;
  readonly icon: typeof Send;
}

const capabilities: readonly PublishingCapability[] = [
  {
    label: "Publication target",
    detail:
      "No verified site, channel, audience, or tenant target is connected.",
    icon: Send,
  },
  {
    label: "Schedule and delivery",
    detail:
      "Scheduling, queueing, timezone handling, and delivery status are unavailable.",
    icon: CalendarClock,
  },
  {
    label: "Metadata and moderation",
    detail:
      "SEO metadata, canonical links, review gates, and policy checks are not connected.",
    icon: Tags,
  },
  {
    label: "Preview and media",
    detail:
      "Preview rendering, media uploads, and content sanitization are unavailable.",
    icon: ImagePlus,
  },
];

const unavailableActionLabels = [
  "New publication",
  "Schedule",
  "Publish",
  "Preview",
  "Add media",
  "Metadata",
  "Publisher settings",
] as const;

export default function BlogPublisher() {
  const [searchQuery, setSearchQuery] = useState("");

  const visibleCapabilities = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return capabilities;
    return capabilities.filter(({ label, detail }) =>
      `${label} ${detail}`.toLowerCase().includes(normalizedQuery)
    );
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div data-ui-polish="batch-181" className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="gap-2">
                <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
                Provider boundary
              </Badge>
              <Badge variant="secondary">Not active</Badge>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Blog publishing readiness
            </h1>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              Publishing remains discoverable without implying that an article,
              target channel, schedule, or delivery provider exists.
            </p>
          </div>
          <Button variant="outline" disabled aria-disabled="true">
            <Settings2 className="mr-2 h-4 w-4" aria-hidden="true" />
            Publisher settings unavailable
          </Button>
        </header>

        <section
          aria-labelledby="truthful-state-heading"
          className="grid gap-4 lg:grid-cols-[1.35fr_1fr]"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle id="truthful-state-heading">
                    Truthful state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No article, schedule, or delivery data is shown as real or
                    persisted.
                  </CardDescription>
                </div>
                <FileText
                  className="h-5 w-5 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <p className="font-medium">
                  No publications are available in this workspace.
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Article identity, author permissions, publication target,
                  schedule, moderation, delivery, and rollback require verified
                  provider contracts. This page does not create or publish an
                  article.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable publishing actions"
              >
                {unavailableActionLabels.map(label => (
                  <Button
                    key={label}
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
                These contracts must be verified before publishing actions are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                <li>
                  Authenticated author and tenant-scoped publication ownership.
                </li>
                <li>
                  Validated content, metadata, media, schedule, and timezone
                  persistence.
                </li>
                <li>
                  Moderation, delivery, retry, deduplication, rollback, and
                  audit states.
                </li>
                <li>
                  Provider provenance, rate limits, failure handling, and
                  accessibility evidence.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader className="gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Publishing capability map</CardTitle>
              <CardDescription>
                Search is local-only and filters the readiness notes below.
              </CardDescription>
            </div>
            <div className="relative w-full sm:max-w-xs">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search publishing capability notes"
                className="pl-9"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(({ label, detail, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border/70 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                      <h2 className="font-medium">{label}</h2>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>

        <footer className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-muted/20 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <CalendarClock
              className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 text-muted-foreground">
              Publication delivery remains unavailable until content ownership,
              moderation, provider integration, and retry evidence are complete.
            </p>
          </div>
          <Button variant="outline" disabled aria-disabled="true">
            <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
            Preview unavailable
          </Button>
        </footer>
      </div>
    </main>
  );
}
