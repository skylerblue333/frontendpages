import { useMemo, useState } from "react";
import {
  BarChart3,
  FolderKanban,
  Layers3,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  UploadCloud,
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

type StudioCapability = {
  title: string;
  description: string;
  icon: typeof FolderKanban;
};

const studioCapabilities: StudioCapability[] = [
  {
    title: "Projects and asset workspace",
    description:
      "No project, owner, asset, version, metadata, collaborator, storage object, permission, or change history is loaded.",
    icon: FolderKanban,
  },
  {
    title: "Production and publishing",
    description:
      "No draft, review state, format, derivative, schedule, audience, moderation result, release, rollback, or delivery state is verified.",
    icon: Layers3,
  },
  {
    title: "Analytics and observability",
    description:
      "No view, play, engagement, audience, revenue, attribution, experiment, performance, error, or export metric is connected.",
    icon: BarChart3,
  },
  {
    title: "Rights and monetization",
    description:
      "No ownership, license, consent, entitlement, payout account, rate, revenue share, invoice, tax treatment, or audit record is available.",
    icon: Sparkles,
  },
];

export default function CreatorStudio() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      studioCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="creator-studio-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Creator-operations boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="creator-studio-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Creator studio readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a truthful production workspace without
                  pretending that projects, assets, publishing, analytics,
                  collaboration, or monetization are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load studio unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Creator studio status"
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
                    Truthful studio state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No project, asset, owner, collaborator, draft, publish
                    state, metric, license, payout, or saved studio record is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <UploadCloud
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified creator-studio service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must govern project and asset storage, access
                  controls, production states, publishing, collaboration,
                  analytics, rights, monetization, and audit evidence before
                  this route can operate a creator workspace.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable studio actions"
              >
                {[
                  "Load projects",
                  "Upload asset",
                  "Publish project",
                  "View analytics",
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
                These safeguards must be verified before studio controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Project, owner, asset, version, metadata, collaborators,
                storage, permissions, and change history.
              </p>
              <p>
                Draft, review, format, derivative, schedule, audience,
                moderation, release, rollback, and delivery.
              </p>
              <p>
                Views, plays, engagement, audience, revenue, attribution,
                experiments, performance, errors, and exports.
              </p>
              <p>
                Ownership, licenses, consent, entitlements, payouts, rates,
                revenue share, tax, invoices, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Studio capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query projects, upload files,
              publish content, calculate analytics, invite collaborators, or
              persist a monetization state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search studio capability notes"
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
