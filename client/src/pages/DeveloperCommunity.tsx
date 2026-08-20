import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bell,
  BookOpen,
  CheckCircle2,
  FileText,
  Info,
  LockKeyhole,
  MessageSquare,
  Plus,
  Search,
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
  icon: typeof Users;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Member identity and access",
    area: "Community",
    description:
      "Verified profiles, roles, consent, access control, and account recovery need an authenticated provider.",
    filter: "required",
    icon: Users,
  },
  {
    title: "Posts and knowledge",
    area: "Content",
    description:
      "Threads, replies, search, revisions, authorship, and durable content need a moderated persistence contract.",
    filter: "required",
    icon: FileText,
  },
  {
    title: "Safety and moderation",
    area: "Trust",
    description:
      "Reports, abuse response, appeals, rate limits, and moderator audit need trained ownership and protected workflows.",
    filter: "blocked",
    icon: ShieldAlert,
  },
  {
    title: "Notifications and events",
    area: "Delivery",
    description:
      "Mentions, subscriptions, invitations, events, and message delivery require a real notification service.",
    filter: "blocked",
    icon: Bell,
  },
];

export default function DeveloperCommunity() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [status, setStatus] = useState(
    "Developer community service unavailable locally. No member, post, message, moderation, notification, event, or persistence mutation was started."
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
      `${action} is unavailable locally. No member, post, message, moderation, notification, event, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="developer-community-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-indigo-400/30 text-indigo-200"
          >
            COMMUNITY READINESS PREVIEW
          </Badge>
          <h1
            id="developer-community-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Users className="h-7 w-7 text-indigo-300" aria-hidden="true" />
            Developer community
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review community requirements without inventing members, posts,
            replies, moderation outcomes, notifications, events, or social
            activity.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Community service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity provider, member directory, post store, moderation
                queue, messaging service, notification provider, or event
                calendar is connected. This page does not represent a live
                forum.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Users className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Members unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No people, roles, presence, reputation, or membership count is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <FileText
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Posts unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No thread, author, reply, view, reaction, or search result is
              displayed.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <ShieldAlert
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Moderation unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No report, review, enforcement, appeal, or safety outcome exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Bell
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Events unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No notification, invitation, message, event, or subscription is
              active.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Community requirement filters"
        >
          <label htmlFor="community-search" className="sr-only">
            Search community requirements
          </label>
          <div className="relative min-w-[220px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="community-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search community requirements"
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
            onClick={() => announceUnavailable("Community settings")}
          >
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Community requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is posted, sent, or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Discussion creation")}
            >
              <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
              New discussion unavailable
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
                <p className="font-semibold">No community requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query member or post records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <MessageSquare
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Post unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No thread, reply, reaction, or edit can be persisted.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Post creation")}
            >
              Post unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <BookOpen
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Events unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No event, invitation, registration, or calendar record can be
              created.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Event creation")}
            >
              Create event unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <LockKeyhole
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Moderation unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No report, enforcement, account, or content mutation can be
              applied.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Moderation action")}
            >
              Report unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No community claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production developer community needs identity, consent,
                moderation ownership, abuse handling, accessible content,
                notifications, rate limits, privacy controls, retention, and an
                auditable content lifecycle.
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
