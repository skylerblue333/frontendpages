import { useMemo, useState } from "react";
import {
  Bell,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Event provenance and recipient scope",
    area: "Integrity",
    description:
      "No event, actor, recipient, source, account, created-at timestamp, delivery attempt, or read state is connected.",
  },
  {
    title: "Privacy, consent, and channels",
    area: "Privacy",
    description:
      "No audience, permission, consent purpose, sensitive-content rule, channel, quiet hours, retention, or unsubscribe control is available.",
  },
  {
    title: "Priority, grouping, and retrieval",
    area: "Product",
    description:
      "No category, priority, deduplication key, grouping rule, pagination cursor, filter, search index, or archive state exists.",
  },
  {
    title: "Delivery reliability and feedback",
    area: "Operations",
    description:
      "No retry policy, failure reason, rate limit, fallback channel, idempotency key, error state, or support trace is available.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No mark-read, dismiss, mute, subscribe, unsubscribe, delete, archive, export, or notification mutation is connected or persisted.",
  },
];
export default function Notifications() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Notifications are unavailable locally. No events, recipients, preferences, read states, or notification records were loaded or saved."
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
      `${action} is unavailable locally. No event, recipient, read state, preference, privacy, or notification-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="notifications-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Bell className="size-3.5" aria-hidden="true" />{" "}
                  Notification-readiness workspace
                </Badge>
                <Badge variant="secondary">No notification data</Badge>
              </div>
              <h1
                id="notifications-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Notifications readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event provenance, recipient scope, privacy, consent,
                delivery channels, reliability, retrieval, and action boundaries
                without implying that events, recipients, read states,
                preferences, or notifications exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Notifications are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event source, delivery queue, notification store, preference
                service, permission model, channel provider, or persistence
                layer is connected. This workspace cannot send, fetch, mark,
                dismiss, mute, subscribe, unsubscribe, delete, archive, or claim
                notifications.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Bell className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No events</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, actor, recipient, source, delivery attempt, read
                state, or notification record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No notification state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No channel, consent, category, priority, quiet-hours, grouping,
                filter, or retention state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No notification actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No read, dismiss, mute, subscribe, unsubscribe, delete, archive,
                preference, or delivery mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Notification-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects an event source, fetches notifications, changes
              preferences, or saves delivery records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Notifications readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter notification requirements"
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
                  No notification requirements match “{query}”.
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
                Production notifications require authenticated event provenance,
                recipient authorization, consent and channel preferences,
                deduplication and priority rules, reliable delivery and retry
                telemetry, accessible presentation, privacy controls, audit
                history, and clear feedback for every action. No event,
                recipient, preference, read state, or notification record is
                claimed here.
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
