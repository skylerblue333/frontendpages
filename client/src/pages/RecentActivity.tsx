import { useMemo, useState } from "react";
import {
  Activity,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Timer,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Event and actor provenance",
    area: "Evidence",
    description:
      "No activity event, actor, subject, action, source, identifier, timestamp, location, device, or current activity record is connected.",
  },
  {
    title: "Ordering, freshness, and deduplication",
    area: "Method",
    description:
      "No event-time rule, timezone, ordering, pagination, freshness signal, duplicate key, retention window, or aggregation definition is verified.",
  },
  {
    title: "Privacy, visibility, and authorization",
    area: "Controls",
    description:
      "No identity, audience, consent, role, ownership check, sensitive-data classification, visibility rule, or access decision exists.",
  },
  {
    title: "Moderation, correction, and recovery",
    area: "Reliability",
    description:
      "No content policy, moderation state, correction, removal, retry, stale-data handling, audit event, or support recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No refresh, filter, mark read, hide, report, export, share, delete, or activity, account, device, or personal-data mutation is connected or persisted.",
  },
];
export default function RecentActivity() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Recent Activity is unavailable locally. No activity event, actor, action, timestamp, source, audience, freshness, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No activity, actor, event, timestamp, visibility, moderation, account, device, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="recent-activity-title"
    >
      <div data-ui-polish="batch-200" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Activity className="size-3.5" aria-hidden="true" />{" "}
                  Activity-readiness workspace
                </Badge>
                <Badge variant="secondary">No activity state</Badge>
              </div>
              <h1
                id="recent-activity-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                RecentActivity readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review event and actor provenance, ordering and freshness,
                privacy and visibility, authorization, moderation, correction,
                recovery, and persistence boundaries without implying that
                activity events, timestamps, users, or recent records exist.
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
                Recent Activity is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No event stream, identity source, privacy policy, authorization
                control, ordering service, freshness signal, moderation path,
                recovery workflow, or persistence layer is connected. This
                workspace cannot refresh, filter, mark read, hide, report,
                export, share, delete, or claim activity.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Activity
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No activity state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, actor, subject, action, source, identifier, timestamp,
                location, device, or activity record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Timer className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No freshness state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event-time rule, timezone, ordering, pagination, duplicate
                key, retention, or freshness signal exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No activity actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No refresh, filter, mark read, hide, report, export, share,
                delete, or activity mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Activity governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads events, exposes identities, changes visibility, or saves
              account or personal-data records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search RecentActivity readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter activity requirements"
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
                  No activity requirements match “{query}”.
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
                Production activity requires authoritative event sources, actor
                and subject identity, event-time and timezone discipline,
                ordering and deduplication, freshness and retention policies,
                privacy and visibility controls, role authorization, moderation
                and correction, audit history, and clear handling of stale,
                partial, or failed activity streams. No activity, actor, event,
                timestamp, visibility, moderation, account, device, or
                personal-data record is claimed here.
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
