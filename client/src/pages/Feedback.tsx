import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardPenLine,
  MessageCircle,
  Search,
  ShieldCheck,
  Tags,
  UsersRound,
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

type FeedbackBoundary = { title: string; area: string; description: string };
const boundaries: readonly FeedbackBoundary[] = [
  {
    title: "Feedback capture and consent",
    area: "Input",
    description:
      "No feedback text, rating, category, account, context, attachment, consent, or submission record is loaded or accepted.",
  },
  {
    title: "Routing and response",
    area: "Workflow",
    description:
      "No team queue, assignee, status, response, SLA, escalation, notification, or support ticket is connected.",
  },
  {
    title: "Analysis and themes",
    area: "Insights",
    description:
      "No sentiment, theme, trend, volume, score, cohort, duplicate, or prioritization signal is calculated.",
  },
  {
    title: "Privacy and governance",
    area: "Controls",
    description:
      "No permission, sensitive-content review, retention, deletion, export, audit record, or abuse workflow is configured.",
  },
];

export default function Feedback() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Feedback is unavailable locally. No feedback, rating, routing, analysis, or personal-data mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No feedback, rating, routing, analysis, or personal-data mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="feedback-title"
    >
      <div data-ui-polish="batch-189" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MessageCircle className="size-3.5" aria-hidden="true" />
                  Feedback operations readiness
                </Badge>
                <Badge variant="secondary">No feedback service</Badge>
              </div>
              <h1
                id="feedback-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Feedback readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful capture, consent, routing, response, analysis,
                privacy, and governance contracts without collecting a real
                message or presenting invented user sentiment.
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
                Feedback service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No feedback repository, identity and consent layer, support
                queue, analytics pipeline, moderation policy, or notification
                channel is connected. This is a planning boundary, not a live
                feedback inbox.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Feedback status"
        >
          <Card>
            <CardContent className="p-5">
              <ClipboardPenLine
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No feedback loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No messages, ratings, categories, accounts, context,
                attachments, or consent records are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No response queue</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No team, assignee, status, response, SLA, escalation,
                notification, or support ticket can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Tags className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No analysis calculated</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No sentiment, theme, trend, volume, score, cohort, duplicate, or
                priority signal is generated.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Feedback readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              feedback, ratings, users, queues, analytics, or personal-data
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search feedback readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search feedback requirements"
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
                  No feedback notes match “{query}”.
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
                A production feedback system needs explicit consent,
                authenticated or anonymous boundaries, abuse prevention, rate
                limits, secure handling of sensitive text, response ownership,
                SLA definitions, privacy and deletion controls, analysis
                provenance, audit logging, and clear submission failure states.
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
