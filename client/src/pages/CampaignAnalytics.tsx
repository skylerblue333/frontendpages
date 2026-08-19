import { useMemo, useState } from "react";
import {
  Activity,
  BarChart3,
  DollarSign,
  Fingerprint,
  LockKeyhole,
  Search,
  ShieldCheck,
  UsersRound,
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

type AnalyticsCapability = {
  title: string;
  description: string;
  icon: typeof BarChart3;
};

const analyticsCapabilities: AnalyticsCapability[] = [
  {
    title: "Event lineage",
    description:
      "Campaign ownership, event schemas, timestamps, deduplication, source coverage, and processing status are not connected.",
    icon: Activity,
  },
  {
    title: "Attribution methodology",
    description:
      "Attribution windows, identity resolution, touchpoint rules, consent, and reproducible model versions are not configured.",
    icon: Fingerprint,
  },
  {
    title: "Spend and revenue",
    description:
      "Spend, conversion, revenue, refunds, currency, and reconciliation sources are unavailable; no return or performance metric is calculated.",
    icon: DollarSign,
  },
  {
    title: "Privacy and access",
    description:
      "Account scope, least-privilege access, retention, redaction, aggregation, export, and audit evidence are not verified.",
    icon: ShieldCheck,
  },
];

export default function CampaignAnalytics() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      analyticsCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="campaign-analytics-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Analytics boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="campaign-analytics-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Campaign analytics readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route describes a measurable campaign workflow without
                  pretending that events, attribution, spend, revenue, or
                  performance metrics are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load campaign metrics unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Campaign analytics status"
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
                    Truthful analytics state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No campaign, event, spend, conversion, revenue, attribution,
                    or performance metric is loaded or calculated.
                  </CardDescription>
                </div>
                <BarChart3
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified campaign analytics service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define event lineage, attribution
                  methodology, spend and conversion sources, revenue
                  reconciliation, privacy controls, account scope, and
                  reproducible tests before this route can report performance.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable analytics actions"
              >
                {[
                  "Select campaign",
                  "Choose attribution",
                  "View funnel",
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
                These safeguards must be verified before analytics controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Owned event schemas, source lineage, deduplication, timestamps,
                processing status, and data quality checks.
              </p>
              <p>
                Versioned attribution windows, identity rules, consent, model
                assumptions, and reproducible calculations.
              </p>
              <p>
                Spend, conversion, revenue, refund, currency, and reconciliation
                sources with visible failure states.
              </p>
              <p>
                Account-scoped access, aggregation, retention, redaction,
                export, rate limits, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Campaign analytics capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query campaign data, infer
              attribution, expose personal data, or calculate metrics.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search campaign analytics capability notes"
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
