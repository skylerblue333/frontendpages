import { useMemo, useState } from "react";
import {
  BellRing,
  CheckCheck,
  FileText,
  KeyRound,
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

type ChannelCapability = {
  title: string;
  description: string;
  icon: typeof BellRing;
};

const channelCapabilities: ChannelCapability[] = [
  {
    title: "Channel ownership and content",
    description:
      "No workspace ownership, sender identity, template schema, content review, localization, or brand configuration is connected.",
    icon: FileText,
  },
  {
    title: "Consent and preferences",
    description:
      "Recipient consent, preference center, unsubscribe, suppression, quiet hours, and lawful-purpose controls are not configured.",
    icon: CheckCheck,
  },
  {
    title: "Provider delivery",
    description:
      "No approved email, SMS, push, or other provider, delivery status, bounce handling, retry, or idempotency contract is available.",
    icon: BellRing,
  },
  {
    title: "Access and safeguards",
    description:
      "Role permissions, secret isolation, rate limits, redacted logs, opt-out audit, and failure recovery are not verified.",
    icon: ShieldCheck,
  },
];

export default function ChannelCustomization() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      channelCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="channel-customization-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Messaging boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="channel-customization-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Channel customization readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe messaging configuration without
                  pretending that channels, templates, recipients, preferences,
                  providers, or delivery results are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load channels unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Channel customization status"
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
                    Truthful messaging state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No channel, sender, template, recipient, consent, provider,
                    delivery, or preference state is loaded or persisted.
                  </CardDescription>
                </div>
                <SlidersHorizontal
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified channel-management service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define channel ownership, content review,
                  recipient consent, preference and unsubscribe controls,
                  provider delivery, retries, rate limits, secret isolation, and
                  audit evidence before this route can configure or send
                  messages.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable channel actions"
              >
                {[
                  "Configure channel",
                  "Edit template",
                  "Preview message",
                  "Save preferences",
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
                These safeguards must be verified before channel controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Workspace ownership, sender identity, template schema, content
                review, localization, and brand configuration.
              </p>
              <p>
                Recipient consent, preferences, unsubscribe, suppression, quiet
                hours, lawful purpose, and correction flow.
              </p>
              <p>
                Approved provider, delivery state, bounce handling, retries,
                idempotency, provider errors, and recovery.
              </p>
              <p>
                Role permissions, secret isolation, rate limits, redacted logs,
                opt-out audit, and least privilege.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Channel capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not load recipients, alter
              preferences, call providers, send messages, or persist
              configuration.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search channel capability notes"
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
