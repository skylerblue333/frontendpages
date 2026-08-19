import { useMemo, useState } from "react";
import {
  CalendarClock,
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

type CreationCapability = {
  title: string;
  description: string;
  icon: typeof FileCheck2;
};

const creationCapabilities: CreationCapability[] = [
  {
    title: "Ownership and consent",
    description:
      "Campaign owner, audience scope, consent, suppression, preference, and private-data handling are not connected.",
    icon: UsersRound,
  },
  {
    title: "Content and policy review",
    description:
      "Message content, links, accessibility, moderation, policy approval, versioning, and audit evidence are not configured.",
    icon: FileCheck2,
  },
  {
    title: "Schedule and budget",
    description:
      "Timezone, recurrence, budget authorization, provider credentials, rate limits, and idempotent submission are unavailable.",
    icon: CalendarClock,
  },
  {
    title: "Delivery and recovery",
    description:
      "Unsubscribe, delivery status, reconciliation, cancellation, retries, rollback, and failure recovery are not verified.",
    icon: MailCheck,
  },
];

export default function CampaignCreation() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      creationCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="campaign-creation-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Creation boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="campaign-creation-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Campaign creation readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe creation and scheduling workflow
                  without pretending that a campaign record, audience, budget,
                  schedule, or delivery submission exists.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Submit campaign unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Campaign creation status"
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
                    Truthful creation state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No campaign record, audience, content, schedule, budget,
                    provider, or delivery status is loaded or persisted.
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
                  No verified campaign-creation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define ownership, content and policy
                  review, audience consent, scheduling, budget authorization,
                  delivery providers, status reconciliation, unsubscribe
                  behavior, idempotency, cancellation, rollback, and audit
                  evidence before this route can create or schedule a campaign.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable campaign creation actions"
              >
                {[
                  "Define campaign",
                  "Validate audience",
                  "Schedule delivery",
                  "Submit campaign",
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
                These safeguards must be verified before creation controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Owner, audience, consent, suppression, preferences, private-data
                handling, and account scope.
              </p>
              <p>
                Content accessibility, links, policy review, moderation,
                versioning, approval gates, and audit evidence.
              </p>
              <p>
                Timezone, schedule, budget authorization, provider credentials,
                rate limits, and idempotent submission.
              </p>
              <p>
                Delivery status, unsubscribe, reconciliation, cancellation,
                retry, rollback, redacted logs, and recovery.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Campaign creation capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not create records, contact
              audiences, schedule delivery, spend budget, or send messages.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search campaign creation capability notes"
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
