import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bell,
  Bot,
  CheckCircle2,
  Hash,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  Search,
  Server,
  Settings,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

type Filter = "all" | "required" | "blocked";
type Requirement = {
  title: string;
  area: string;
  description: string;
  filter: Exclude<Filter, "all">;
  icon: typeof Server;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Discord identity and OAuth",
    area: "Access",
    description:
      "A verified OAuth client, redirect policy, scopes, consent, and account-linking contract are required.",
    filter: "required",
    icon: KeyRound,
  },
  {
    title: "Guild and role permissions",
    area: "Authorization",
    description:
      "Server membership, role mapping, least privilege, administrator approval, and revocation need verified Discord data.",
    filter: "required",
    icon: ShieldAlert,
  },
  {
    title: "Channels and messages",
    area: "Content",
    description:
      "Channel discovery, message access, moderation, retention, and privacy require a connected bot or webhook provider.",
    filter: "blocked",
    icon: Hash,
  },
  {
    title: "Events and notifications",
    area: "Delivery",
    description:
      "Commands, mentions, alerts, invitations, and synchronization require a real event and notification contract.",
    filter: "blocked",
    icon: Bell,
  },
];

export default function DiscordIntegration() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [status, setStatus] = useState(
    "Discord integration service unavailable locally. No OAuth, bot, guild, permission, channel, message, webhook, notification, sync, or credential mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.area}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (filter === "all" || item.filter === filter);
      }),
    [query, filter]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No OAuth, bot, guild, permission, channel, message, webhook, notification, sync, or credential mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="discord-integration-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-indigo-400/30 text-indigo-200"
            >
              CONNECTOR READINESS PREVIEW
            </Badge>
            <h1
              id="discord-integration-title"
              className="flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <Bot className="h-7 w-7 text-indigo-300" aria-hidden="true" />
              Discord integration
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Review Discord connector requirements without inventing accounts,
              servers, channels, permissions, messages, events, synchronization,
              or bot outcomes.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Integration refresh")}
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
                Discord connector unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No Discord OAuth client, bot token, guild directory, role
                provider, channel data, webhook, message gateway, or event
                subscription is connected. This page does not represent an
                active Discord integration.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Users className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Identity unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No Discord account, guild, member, or role is linked.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Server
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Servers unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No guild, channel, permission, or moderation state is loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Hash className="mb-3 h-5 w-5 text-amber-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Messages unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No channel, post, command, reply, or delivery event exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Bell
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Sync unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No webhook, notification, event, or synchronization job is active.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Discord integration requirement filters"
        >
          <label htmlFor="discord-search" className="sr-only">
            Search Discord requirements
          </label>
          <div className="relative min-w-[220px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="discord-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search integration requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "required", "blocked"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={filter === value ? "default" : "outline"}
              onClick={() => setFilter(value)}
            >
              {value === "all"
                ? "All"
                : value === "required"
                  ? "Required"
                  : "Blocked"}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Integration settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Discord requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is connected, invited, sent, or
                synchronized.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Discord connection")}
            >
              <Bot className="mr-2 h-4 w-4" aria-hidden="true" />
              Connect Discord unavailable
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
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.filter}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-primary">{item.area}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`Manage ${item.title}`)
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
                  No integration requirements found
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query Discord records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <LockKeyhole
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Bot token unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No bot token, client secret, webhook URL, or credential is
              rendered or stored.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Bot credential setup")}
            >
              Configure unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <CheckCircle2
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Invite unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No guild invite, role grant, permission change, or account link
              can be produced.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Guild invite")}
            >
              Invite unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <RefreshCw
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Sync unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No channels, members, messages, events, notifications, or logs can
              be synchronized.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Discord synchronization")}
            >
              Sync unavailable
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
                No connector or credential claim
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production Discord connector needs OAuth consent, token
                isolation, least-privilege scopes, server approval, moderation
                ownership, webhook verification, rate limits, retention,
                revocation, and audit logs.
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
