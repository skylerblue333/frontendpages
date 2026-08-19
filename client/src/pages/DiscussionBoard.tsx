import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bell,
  CheckCircle2,
  FileQuestion,
  Filter,
  MessageCircle,
  Search,
  Settings,
  ShieldAlert,
  ThumbsUp,
  Users,
  XCircle,
} from "lucide-react";

type FilterValue = "all" | "content" | "safety" | "delivery";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<FilterValue, "all">;
  icon: typeof FileQuestion;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Questions and authors",
    description:
      "Verified authorship, titles, tags, edits, search, and durable question records need an authenticated content service.",
    area: "content",
    icon: FileQuestion,
  },
  {
    title: "Answers and accepted state",
    description:
      "Replies, accepted answers, revisions, notifications, and reputation require a governed persistence contract.",
    area: "content",
    icon: MessageCircle,
  },
  {
    title: "Votes and reputation",
    description:
      "Upvotes, downvotes, reputation, ranking, and anti-abuse controls need identity, rate limits, and an auditable event stream.",
    area: "safety",
    icon: ThumbsUp,
  },
  {
    title: "Moderation and subscriptions",
    description:
      "Reports, review, appeals, topic subscriptions, mentions, and delivery need accountable moderation and notification providers.",
    area: "delivery",
    icon: ShieldAlert,
  },
];

export default function DiscussionBoard() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterValue>("all");
  const [status, setStatus] = useState(
    "Discussion service unavailable locally. No user, question, answer, vote, reputation, moderation, notification, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (filter === "all" || item.area === filter);
      }),
    [query, filter]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No user, question, answer, vote, reputation, moderation, notification, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="discussion-board-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-blue-400/30 text-blue-200">
            Q&A READINESS PREVIEW
          </Badge>
          <h1
            id="discussion-board-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <FileQuestion
              className="h-7 w-7 text-blue-300"
              aria-hidden="true"
            />
            Discussion board
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review Q&A requirements without inventing users, questions, answers,
            votes, reputation, moderation results, notifications, or search
            records.
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
                Discussion service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity provider, question store, answer store, voting
                system, moderation queue, notification service, or search index
                is connected. This page does not represent a live Q&A forum.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Users className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Users unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No author, profile, reputation, role, or presence is loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <FileQuestion
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Questions unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No title, tag, view, answer, or accepted state exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <ThumbsUp
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Voting unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No vote, ranking, reputation, or engagement outcome is calculated.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Bell
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Delivery unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No report, subscription, mention, notification, or moderation
              event is active.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Discussion board filters"
        >
          <label htmlFor="discussion-search" className="sr-only">
            Search discussion requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="discussion-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search Q&A requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "content", "safety", "delivery"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={filter === value ? "default" : "outline"}
              onClick={() => setFilter(value)}
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
            onClick={() => announceUnavailable("Discussion settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Q&A requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is posted, voted on, reported, or
                saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Question creation")}
            >
              <FileQuestion className="mr-2 h-4 w-4" aria-hidden="true" />
              New question unavailable
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
                  No discussion requirements found
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query question or answer records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <MessageCircle
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Answer unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No reply, edit, accepted answer, or author record can be saved.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Answer creation")}
            >
              Answer unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <ThumbsUp
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Vote unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No vote, ranking, reputation, or notification event can be
              created.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Voting")}
            >
              Vote unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <CheckCircle2
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Subscribe unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No topic subscription, mention, notification, report, or
              moderation action can be persisted.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Topic subscription")}
            >
              Subscribe unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No Q&A claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production discussion board needs identity, consent,
                accessible content, moderation ownership, anti-abuse controls,
                search provenance, retention, notifications, audit history, and
                user controls.
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
