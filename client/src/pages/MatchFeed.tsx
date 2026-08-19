import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock3,
  Filter,
  Heart,
  LockKeyhole,
  MessageCircleOff,
  Search,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";

type FilterMode = "all" | "unread" | "available";
type Concept = {
  id: string;
  title: string;
  description: string;
  status: string;
  unread: boolean;
};
const CONCEPTS: readonly Concept[] = [
  {
    id: "new",
    title: "New conversation concept",
    description: "No person, profile, message, or match is loaded.",
    status: "Not connected",
    unread: false,
  },
  {
    id: "active",
    title: "Active conversation concept",
    description: "Message history and delivery state are unavailable.",
    status: "Not connected",
    unread: false,
  },
  {
    id: "follow-up",
    title: "Follow-up concept",
    description: "No reminder, presence, or response prediction is available.",
    status: "Not connected",
    unread: false,
  },
];

export default function MatchFeed() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterMode>("all");
  const [status, setStatus] = useState(
    "Conversation service unavailable locally. No profile, message, presence, match, notification, or social mutation was started."
  );
  const filtered = useMemo(
    () =>
      CONCEPTS.filter(concept => {
        const matchesSearch =
          !search || concept.title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
          filter === "all" ||
          (filter === "unread" && concept.unread) ||
          (filter === "available" && false);
        return matchesSearch && matchesFilter;
      }),
    [filter, search]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, message, presence, match, notification, or social mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="match-feed-title"
    >
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge
              variant="outline"
              className="border-pink-400/30 text-pink-200"
            >
              CONVERSATION READINESS PREVIEW
            </Badge>
            <h1
              id="match-feed-title"
              className="mt-3 flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <Heart className="h-7 w-7 text-pink-300" aria-hidden="true" />
              Match feed
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Review local conversation concepts without inventing profiles,
              match scores, presence, messages, unread counts, or response
              analytics.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Filter service")}
          >
            <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
            Filters unavailable
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
                Conversation service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No consented profiles, matching provider, messaging transport,
                delivery receipts, presence signal, notification service,
                moderation system, or response analytics is connected. Nothing
                here represents a real person or conversation.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <UserRound
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Profiles unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No names, ages, avatars, verification, or location are loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MessageCircleOff
              className="mb-3 h-5 w-5 text-pink-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Messages unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No message content, delivery, read state, or chat route is
              connected.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Clock3
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Analytics unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No compatibility, response, engagement, presence, or unread metric
              is asserted.
            </p>
          </Card>
        </section>
        <section className="space-y-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="match-feed-search" className="sr-only">
              Search local conversation concepts
            </label>
            <input
              id="match-feed-search"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search local concepts"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Local conversation filters"
          >
            {(["all", "unread", "available"] as const).map(mode => (
              <Button
                key={mode}
                type="button"
                size="sm"
                variant={filter === mode ? "default" : "outline"}
                onClick={() => setFilter(mode)}
              >
                {mode === "available"
                  ? "Available"
                  : mode === "unread"
                    ? "Unread"
                    : "All concepts"}
              </Button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map(concept => (
              <Card
                key={concept.id}
                className="border-border/40 bg-card/40 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-secondary/60 p-3">
                    <MessageCircleOff
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold">{concept.title}</h2>
                      <Badge
                        variant="outline"
                        className="border-muted-foreground/30 text-muted-foreground"
                      >
                        {concept.status}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {concept.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => announceUnavailable("Conversation opening")}
                  >
                    Open unavailable
                  </Button>
                  <Button
                    type="button"
                    className="flex-1"
                    onClick={() => announceUnavailable("Message service")}
                  >
                    Message unavailable
                  </Button>
                </div>
              </Card>
            ))}
            {filtered.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No local concepts found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search and filtering are browser-only and do not query
                  profiles or messages.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">Safe conversation boundary</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production feed needs consent, identity and age controls,
                secure transport, moderation, blocking, reporting, notification
                governance, deletion, and auditable delivery states. No
                response-rate, compatibility, or safety claim is made here.
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
