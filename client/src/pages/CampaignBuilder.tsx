import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  LockKeyhole,
  MailCheck,
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

type BuilderCapability = {
  title: string;
  description: string;
  icon: typeof UsersRound;
};

const builderCapabilities: BuilderCapability[] = [
  {
    title: "Ownership and audience",
    description:
      "Campaign ownership, audience eligibility, consent, suppression, segmentation, and account scope are not connected.",
    icon: UsersRound,
  },
  {
    title: "Content and approvals",
    description:
      "Templates, personalization, links, accessibility, moderation, review gates, and approval evidence are not configured.",
    icon: FileCheck2,
  },
  {
    title: "Budget and delivery",
    description:
      "Budget authorization, provider credentials, rate limits, scheduling, idempotency, and delivery state are unavailable.",
    icon: MailCheck,
  },
  {
    title: "Consent and rollback",
    description:
      "Unsubscribe handling, privacy retention, audit logs, cancellation, rollback, and failure recovery are not verified.",
    icon: ShieldCheck,
  },
];

export default function CampaignBuilder() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      builderCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="campaign-builder-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Campaign boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="campaign-builder-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Campaign builder readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route describes safe campaign preparation without
                  pretending that an audience, message, budget, delivery
                  provider, or publish action is connected.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Create campaign unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Campaign builder status"
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
                    Truthful builder state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No campaign, audience, content, budget, provider, delivery,
                    or publish state is loaded or persisted.
                  </CardDescription>
                </div>
                <CheckCircle2
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified campaign-building service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define ownership, consent, content
                  review, budget authorization, provider delivery, unsubscribe
                  handling, rate limits, idempotency, cancellation, rollback,
                  and audit evidence before this route can build or publish a
                  campaign.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable campaign actions"
              >
                {[
                  "Select audience",
                  "Draft content",
                  "Preview campaign",
                  "Publish campaign",
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
                These safeguards must be verified before campaign controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Account ownership, audience consent, suppression, segmentation,
                private-data handling, and scope.
              </p>
              <p>
                Content accessibility, personalization safety, moderation,
                links, review gates, and approval evidence.
              </p>
              <p>
                Budget authorization, provider credentials, scheduling, rate
                limits, idempotency, and delivery state.
              </p>
              <p>
                Unsubscribe, cancellation, rollback, redacted logs, retention,
                failure recovery, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Campaign builder capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load audiences, send content,
              spend budget, or persist campaign drafts.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search campaign builder capability notes"
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
