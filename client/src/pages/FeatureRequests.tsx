import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  Search,
  ShieldCheck,
  ThumbsUp,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type RequestBoundary = { title: string; area: string; description: string };
const boundaries: readonly RequestBoundary[] = [
  {
    title: "Request content and ownership",
    area: "Input",
    description:
      "No feature request, problem statement, requester, account, attachment, category, or source context is loaded.",
  },
  {
    title: "Voting and prioritization",
    area: "Signal",
    description:
      "No vote, supporter count, roadmap score, duplicate match, priority, segment, or demand signal is calculated.",
  },
  {
    title: "Review and status",
    area: "Workflow",
    description:
      "No triage owner, status, comment, estimate, roadmap commitment, release state, or notification is connected.",
  },
  {
    title: "Moderation and privacy",
    area: "Governance",
    description:
      "No permission, abuse review, sensitive-content policy, privacy scope, audit record, deletion, or export workflow is configured.",
  },
];

export default function FeatureRequests() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Feature requests are unavailable locally. No request, vote, prioritization, workflow, or submission mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No request, vote, prioritization, workflow, or submission mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="feature-requests-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Lightbulb className="size-3.5" aria-hidden="true" />
                  Product feedback readiness
                </Badge>
                <Badge variant="secondary">No request service</Badge>
              </div>
              <h1
                id="feature-requests-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Feature request readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful request, voting, triage, roadmap, moderation,
                and privacy contracts without presenting invented demand or
                submitting a product change.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Feature request service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No feedback repository, account identity, voting service,
                roadmap workflow, moderation queue, or notification channel is
                connected. This is a planning boundary, not a live request
                board.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Feature request status"
        >
          <Card>
            <CardContent className="p-5">
              <ClipboardList
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No requests loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No ideas, problem statements, requesters, attachments,
                categories, or sources are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ThumbsUp
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No demand signals</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No votes, supporters, roadmap scores, duplicate matches,
                priority, or segment data is calculated.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Workflow
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No triage workflow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No review, status, comment, estimate, commitment, release,
                notification, or moderation action can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Feature request readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              requests, votes, roadmaps, accounts, comments, or feedback
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search feature request readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search request requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No request notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production request workflow needs authenticated ownership,
                consent, rate limits, abuse prevention, duplicate handling,
                voting integrity, transparent status definitions, triage
                permissions, roadmap truthfulness, moderation, audit logging,
                and deletion/export controls.
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
