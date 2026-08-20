import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Cloud,
  FileText,
  Filter,
  LockKeyhole,
  Megaphone,
  RefreshCw,
  Search,
  Settings,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

type Area = "all" | "channel" | "delivery" | "audience" | "measurement";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<Area, "all">;
  icon: typeof Cloud;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Channel connections",
    description:
      "Platform OAuth, scopes, provider credentials, account ownership, revocation, and per-channel permissions need verified integrations.",
    area: "channel",
    icon: Cloud,
  },
  {
    title: "Content and scheduling",
    description:
      "Media, copy, accessibility, timezone, approval, scheduling, cancellation, and retention need a durable publishing contract.",
    area: "delivery",
    icon: CalendarClock,
  },
  {
    title: "Audience and consent",
    description:
      "Recipients, audience controls, privacy, opt-out, rate limits, and platform policy need accountable user and provider data.",
    area: "audience",
    icon: Users,
  },
  {
    title: "Delivery and measurement",
    description:
      "Delivery receipts, retries, failures, reach, engagement, attribution, and analytics require verified provider events and provenance.",
    area: "measurement",
    icon: BarChart3,
  },
];

export default function DistributionChannels() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<Area>("all");
  const [status, setStatus] = useState(
    "Distribution service unavailable locally. No channel, audience, content, schedule, publish, delivery, analytics, notification, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (area === "all" || item.area === area);
      }),
    [query, area]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No channel, audience, content, schedule, publish, delivery, analytics, notification, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="distribution-channels-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-cyan-400/30 text-cyan-200"
            >
              DISTRIBUTION READINESS PREVIEW
            </Badge>
            <h1
              id="distribution-channels-title"
              className="flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <Megaphone className="h-7 w-7 text-cyan-300" aria-hidden="true" />
              Distribution channels
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Review multi-platform publishing requirements without inventing
              channel connections, audiences, schedules, delivery receipts,
              analytics, or publication outcomes.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Distribution refresh")}
          >
            <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
            Refresh unavailable
          </Button>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Distribution service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No platform OAuth, channel provider, audience directory, content
                store, scheduler, delivery webhook, analytics source, or
                notification service is connected. This page does not represent
                a live publishing system.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Cloud className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Channels unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No provider, account, token, scope, permission, or channel is
              connected.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Users
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Audience unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No recipient, follower, consent, reach, or audience record is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <CalendarClock
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Scheduling unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No content, timezone, approval, job, publish, retry, or
              cancellation state exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <BarChart3
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Analytics unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No delivery, reach, engagement, attribution, or performance result
              is authoritative.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Distribution requirement filters"
        >
          <label htmlFor="distribution-search" className="sr-only">
            Search distribution requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="distribution-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search publishing requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(
            ["all", "channel", "delivery", "audience", "measurement"] as const
          ).map(value => (
            <Button
              key={value}
              type="button"
              variant={area === value ? "default" : "outline"}
              onClick={() => setArea(value)}
            >
              <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
              {value === "all"
                ? "All"
                : value[0].toUpperCase() + value.slice(1)}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Distribution settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Publishing requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is connected, posted, scheduled,
                delivered, or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Channel connection")}
            >
              <Cloud className="mr-2 h-4 w-4" aria-hidden="true" />
              Connect channel unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.area}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} workflow`)
                        }
                      >
                        Manage unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {requirements.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">
                  No distribution requirements found
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query provider or audience
                  records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/30 p-5">
            <FileText
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Publish unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No content, media, platform post, delivery receipt, or
              notification can be created.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Publication")}
            >
              Publish unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <CalendarClock
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Schedule unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No job, timezone, approval, retry, cancellation, or platform
              schedule can be saved.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Scheduling")}
            >
              Schedule unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <RefreshCw
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Retry unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No failed delivery, provider response, retry job, or
              duplicate-post guard is available.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Delivery retry")}
            >
              Retry unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <BarChart3
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Export unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No audience, delivery, campaign, or analytics report can be
              generated.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Distribution export")}
            >
              Export unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                No publication or provider claim
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production distribution system needs server-side secrets,
                provider scopes, consent, content moderation, accessibility,
                idempotency, rate limits, delivery evidence, retries, retention,
                and auditable cancellation.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
