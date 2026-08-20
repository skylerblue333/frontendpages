import { useMemo, useState } from "react";
import {
  Archive,
  Clock3,
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
    title: "Event and delivery provenance",
    area: "Integrity",
    description:
      "No event, actor, recipient, source, delivery attempt, message identifier, created-at timestamp, or status transition is connected.",
  },
  {
    title: "Historical completeness and ordering",
    area: "History",
    description:
      "No retention window, pagination cursor, timezone, ordering rule, duplicate guard, missing-event policy, or last-synced timestamp is available.",
  },
  {
    title: "Privacy and access controls",
    area: "Privacy",
    description:
      "No audience, account permission, sensitive-content rule, redaction, consent purpose, retention, export, or deletion control is available.",
  },
  {
    title: "Failure and correction history",
    area: "Reliability",
    description:
      "No delivery failure reason, retry attempt, fallback channel, read-state correction, audit trail, support trace, or reconciliation workflow exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No search, filter, mark-read, dismiss, archive, delete, restore, export, or historical notification mutation is connected or persisted.",
  },
];
export default function NotificationHistory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Notification history is unavailable locally. No events, delivery attempts, read states, timestamps, or historical notification records were loaded or saved."
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
      `${action} is unavailable locally. No event, delivery attempt, read state, archive, privacy, or notification-history mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="notification-history-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Clock3 className="size-3.5" aria-hidden="true" />{" "}
                  Delivery-history readiness workspace
                </Badge>
                <Badge variant="secondary">No history data</Badge>
              </div>
              <h1
                id="notification-history-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NotificationHistory readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event and delivery provenance, ordering, retention,
                privacy, correction history, and action boundaries without
                implying that notifications, delivery attempts, read states, or
                historical records exist.
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
                Notification history is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event log, delivery provider, history store, retention
                service, permission model, or persistence layer is connected.
                This workspace cannot fetch, order, filter, mark, dismiss,
                archive, delete, restore, export, or claim historical
                notifications.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Clock3 className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No event history</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, actor, recipient, delivery attempt, identifier,
                timestamp, or status transition is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Archive
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No retention state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No retention window, pagination, timezone, ordering, archive,
                sync, or missing-event policy exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No history actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No filter, read, dismiss, archive, delete, restore, export, or
                notification-history mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>History-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects an event log, fetches history, changes read states, or
              saves delivery records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NotificationHistory readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter history requirements"
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
                  No history requirements match “{query}”.
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
                Production notification history requires authenticated event
                provenance, complete and ordered delivery records, timezone and
                retention policy, privacy and access controls, failure and
                correction auditability, bounded retrieval, and clear feedback
                for every action. No event, delivery attempt, read state,
                timestamp, or historical notification record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <SlidersHorizontal
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
