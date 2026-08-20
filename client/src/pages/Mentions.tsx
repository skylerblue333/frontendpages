import { useMemo, useState } from "react";
import {
  Bell,
  FileSearch,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  UserRoundCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Mention source and context",
    area: "Attribution",
    description:
      "No post, comment, author, timestamp, conversation, attachment, link, or mention target is connected.",
  },
  {
    title: "Authorization and visibility",
    area: "Access",
    description:
      "No account, workspace, audience, block list, muted term, role, privacy setting, or visibility policy is available.",
  },
  {
    title: "Notification delivery",
    area: "Notifications",
    description:
      "No unread state, notification channel, delivery preference, digest, push token, email, or retry policy is configured.",
  },
  {
    title: "Moderation and abuse handling",
    area: "Safety",
    description:
      "No spam filter, report flow, harassment review, content action, appeal, rate limit, or moderation audit exists.",
  },
  {
    title: "Privacy and retention",
    area: "Governance",
    description:
      "No consent, data minimization, retention, deletion, export, redaction, access log, or sensitive-content boundary is verified.",
  },
];
export default function Mentions() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mentions are unavailable locally. No post, author, target, notification, moderation, or social record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No post, comment, mention target, notification, moderation, privacy, or social-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mentions-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MessageSquare className="size-3.5" aria-hidden="true" />{" "}
                  Social-safety readiness
                </Badge>
                <Badge variant="secondary">No mention feed</Badge>
              </div>
              <h1
                id="mentions-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Mentions readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review mention attribution, authorization, visibility,
                notification delivery, moderation, privacy, and retention
                without implying that posts, authors, targets, unread mentions,
                or social interactions exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <XCircle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mention service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No mention index, social graph, notification service, moderation
                workflow, privacy policy, or persistence layer is connected.
                This is a readiness workspace, not a populated mention feed.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UserRoundCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No mention records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No post, comment, author, target, conversation, attachment, or
                timestamp is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Bell className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No notifications</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No unread state, digest, push, email, delivery, retry, or
                preference state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No social actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reply, react, follow, mute, block, report, delete, or
                moderation mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Mention governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a mention, opens a post, changes visibility, sends a
              notification, or saves social data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mention readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter mention requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No mention notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production mention feature needs reliable attribution,
                authorization and audience boundaries, notification delivery,
                abuse prevention, moderation and appeals, privacy and retention
                controls, accessibility, and auditable event history. No post,
                author, target, notification, or social record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
