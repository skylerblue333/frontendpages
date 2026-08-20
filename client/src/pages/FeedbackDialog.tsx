import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileText,
  MessageCircle,
  Search,
  ShieldCheck,
  Send,
  UserCheck,
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

type DialogBoundary = { title: string; area: string; description: string };
const boundaries: readonly DialogBoundary[] = [
  {
    title: "Dialog content and focus",
    area: "Experience",
    description:
      "No dialog context, prompt, message field, rating control, category, focus trap, or return target is connected.",
  },
  {
    title: "Consent and submission",
    area: "Privacy",
    description:
      "No consent copy, identity scope, validation, attachment policy, submit action, or confirmation state is available.",
  },
  {
    title: "Routing and response",
    area: "Workflow",
    description:
      "No team queue, recipient, ticket, response, SLA, escalation, notification, or retry behavior is configured.",
  },
  {
    title: "Dismissal and recovery",
    area: "Safety",
    description:
      "No close, cancel, unsaved-state warning, error recovery, rate limit, or duplicate-submission guard is connected.",
  },
];

export default function FeedbackDialog() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Feedback dialog is unavailable locally. No dialog, message, consent, submission, or response mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No dialog, message, consent, submission, or response mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="feedback-dialog-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <MessageCircle className="size-3.5" aria-hidden="true" />
                  Feedback interaction readiness
                </Badge>
                <Badge variant="secondary">No dialog service</Badge>
              </div>
              <h1
                id="feedback-dialog-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Feedback dialog readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful dialog, focus, consent, submission, routing,
                dismissal, and recovery contracts without opening a live capture
                surface or sending user content.
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
                Feedback dialog service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No dialog host, feedback contract, consent layer, identity
                boundary, focus manager, support queue, or notification channel
                is connected. This is a planning boundary, not an active
                submission dialog.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Feedback dialog status"
        >
          <Card>
            <CardContent className="p-5">
              <FileText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No dialog content</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No context, prompt, message field, rating, category, focus trap,
                or return target is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UserCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No consent or identity</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No consent copy, identity scope, validation, attachment policy,
                or confirmation state is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Send className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No submission route</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No recipient, ticket, response, SLA, retry, dismissal, recovery,
                or duplicate guard can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Feedback dialog readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              message content, identity, consent, dialogs, tickets, or support
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search feedback dialog readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search dialog requirements"
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
                  No dialog notes match “{query}”.
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
                A production feedback dialog needs accessible modal semantics,
                focus restoration, keyboard and escape behavior, explicit
                consent, identity boundaries, validation, secure attachment
                handling, rate limits, idempotent submission, privacy-safe
                errors, routing, retry, and clear success/cancellation states.
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
