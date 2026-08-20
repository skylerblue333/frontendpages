import { useMemo, useState } from "react";
import {
  Activity,
  Database,
  Globe2,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldCheck,
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

type CdnCapability = {
  title: string;
  description: string;
  icon: typeof Globe2;
};

const cdnCapabilities: CdnCapability[] = [
  {
    title: "Provider and origins",
    description:
      "No CDN provider, origin registry, domain mapping, or TLS certificate state is connected.",
    icon: Globe2,
  },
  {
    title: "Cache policy",
    description:
      "Cache keys, headers, TTLs, stale behavior, compression, and asset versioning are not configured.",
    icon: Database,
  },
  {
    title: "Invalidation controls",
    description:
      "Purge scope, authorization, preview, rate limits, idempotency, and completion evidence are unavailable.",
    icon: RefreshCw,
  },
  {
    title: "Observability and access",
    description:
      "Hit rates, errors, latency, audit logs, secrets handling, and least-privilege access are not verified.",
    icon: Activity,
  },
];

export default function CDNManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      cdnCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="cdn-management-title"
    >
      <div data-ui-polish="batch-182" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Infrastructure boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="cdn-management-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  CDN management readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route describes safe edge delivery operations without
                  pretending that a provider is connected, cache state is live,
                  or an invalidation completed.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Refresh edge status unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="CDN management status"
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
                    Truthful edge state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No provider, origin, cache, purge, delivery, or uptime state
                    is loaded or reported as successful.
                  </CardDescription>
                </div>
                <KeyRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified CDN management service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define provider credentials, origin
                  health, cache policy, invalidation behavior, deployment
                  coupling, failure recovery, observability, and least-privilege
                  access before this route can show operational state.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable CDN actions"
              >
                {[
                  "Connect provider",
                  "Inspect origins",
                  "Purge cache",
                  "Edit cache policy",
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
                These safeguards must be verified before edge controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Provider, origin, domain, TLS, environment, and deployment
                ownership contracts.
              </p>
              <p>
                Deterministic cache keys, TTL, headers, compression, versioning,
                and purge semantics.
              </p>
              <p>
                Least-privilege credentials, approval gates, idempotency, rate
                limits, and rollback.
              </p>
              <p>
                Structured redacted logs with hit rate, latency, errors, health,
                and invalidation evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>CDN capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query providers, expose
              credentials, or mutate edge configuration.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search CDN capability notes"
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
