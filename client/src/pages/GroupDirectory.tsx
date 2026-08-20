import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Compass,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type DirectoryBoundary = { title: string; area: string; description: string };
const boundaries: readonly DirectoryBoundary[] = [
  {
    title: "Directory source and freshness",
    area: "Discovery",
    description:
      "No group catalog, source, category, topic, activity signal, member count, recommendation, or freshness timestamp is connected.",
  },
  {
    title: "Identity and membership eligibility",
    area: "Identity",
    description:
      "No authenticated identity, organization, age or location rule, membership status, invite, or approval scope is loaded.",
  },
  {
    title: "Visibility and privacy",
    area: "Safety",
    description:
      "No public, private, hidden, consent, redaction, retention, export, deletion, or audit policy is configured.",
  },
  {
    title: "Group room and messaging access",
    area: "Messaging",
    description:
      "No room, thread, message history, attachment, notification, realtime event, or delivery state exists.",
  },
  {
    title: "Moderation and abuse handling",
    area: "Governance",
    description:
      "No community policy, report, moderation queue, rate limit, spam control, block, ban, or escalation workflow is available.",
  },
  {
    title: "Join, leave, and directory mutations",
    area: "Operations",
    description:
      "Join, leave, invite, approve, create, edit, archive, delete, and notification operations have no backend contract.",
  },
];

export default function GroupDirectory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Group directory is unavailable locally. No catalog, group, membership, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !normalized ||
        `${title} ${area} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No group, membership, invitation, message, or moderation record was changed.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="group-directory-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Compass className="size-3.5" aria-hidden="true" /> Group
                  directory
                </Badge>
                <Badge variant="secondary">No directory service</Badge>
              </div>
              <h1
                id="group-directory-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Group Directory readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the catalog, eligibility, privacy, messaging, and
                moderation contracts required for a trustworthy group directory
                without implying that groups or member counts exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Group Directory service status"
        >
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Directory service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No group catalog, authenticated discovery scope, eligibility
                rules, privacy policy, room service, moderation pipeline, or
                persistence layer is connected. This is a readiness workspace,
                not a live directory.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Group Directory status"
        >
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No catalog records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No groups, topics, categories, activity, recommendations, or
                member counts are loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No eligibility scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, organization, visibility, consent, privacy, or
                moderation state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No joinable groups</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No invite, approval, room, message, notification, or membership
                mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Directory-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              queries a catalog, joins a group, reveals a member count, sends an
              invitation, or saves a directory change.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search group directory readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter directory requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(boundary => (
                <div
                  key={boundary.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{boundary.title}</h3>
                    <Badge variant="outline">{boundary.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {boundary.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${boundary.title}`)}
                  >
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No directory notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production directory needs authenticated discovery scope,
                source freshness and provenance, membership and eligibility
                authorization, privacy controls, room and message contracts,
                moderation and abuse handling, rate limits, notifications,
                observability, and tested recovery for joins, leaves, delivery,
                and uploads.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
