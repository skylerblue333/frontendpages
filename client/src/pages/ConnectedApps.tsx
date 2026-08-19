import { useMemo, useState } from "react";
import {
  AppWindow,
  Database,
  FileKey2,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  UserRoundCheck,
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

type AppCapability = {
  title: string;
  description: string;
  icon: typeof AppWindow;
};

const appCapabilities: AppCapability[] = [
  {
    title: "Provider and connection identity",
    description:
      "No provider, app, tenant, environment, connection owner, status, callback, or account scope is connected.",
    icon: AppWindow,
  },
  {
    title: "Credential custody and scopes",
    description:
      "No OAuth grant, token custody, secret handling, permission scope, consent record, rotation, expiry, or least-privilege policy is verified.",
    icon: FileKey2,
  },
  {
    title: "Data access and health",
    description:
      "No data classes, synchronization direction, field mapping, webhook, rate limit, health check, error state, or provider outage handling is available.",
    icon: Database,
  },
  {
    title: "Revocation and governance",
    description:
      "No disconnect, revocation, deletion, privacy review, audit event, administrator approval, user notification, or recovery path is configured.",
    icon: UserRoundCheck,
  },
];

export default function ConnectedApps() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      appCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="connected-apps-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Integration boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="connected-apps-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Connected apps readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents secure third-party integration management
                  without pretending that a provider, credential, permission
                  scope, or synchronized record is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load connections unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Connected apps status"
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
                    Truthful integration state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No provider, app, credential, token, permission scope,
                    consent, data sync, health state, or saved connection is
                    loaded or persisted.
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
                  No verified connected-apps service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define provider identity, credential
                  custody, least-privilege scopes, consent, data access,
                  synchronization, health, revocation, privacy, and audit
                  evidence before this route can connect or disconnect an app.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable integration actions"
              >
                {[
                  "Load connections",
                  "Connect app",
                  "Review permissions",
                  "Disconnect app",
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
                These safeguards must be verified before integration controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Provider, app, tenant, environment, owner, status, callback, and
                account-scoped connection identity.
              </p>
              <p>
                OAuth grant, token custody, secret handling, scopes, consent,
                rotation, expiry, and least privilege.
              </p>
              <p>
                Data classes, synchronization, field mapping, webhooks, rate
                limits, health, errors, and outages.
              </p>
              <p>
                Disconnect, revocation, deletion, privacy, audit, admin
                approval, notification, and recovery.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Connected-app capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query a provider, expose
              credentials, authorize scopes, sync data, connect an app, or
              persist a revocation state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search connected-app capability notes"
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
