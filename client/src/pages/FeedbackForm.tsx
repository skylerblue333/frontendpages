import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardPenLine,
  FileCheck2,
  Search,
  ShieldCheck,
  Send,
  SlidersHorizontal,
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

type FormBoundary = { title: string; area: string; description: string };
const boundaries: readonly FormBoundary[] = [
  {
    title: "Fields and context",
    area: "Content",
    description:
      "No message field, rating, category, account context, attachment, prompt, character limit, or form schema is loaded.",
  },
  {
    title: "Validation and consent",
    area: "Privacy",
    description:
      "No required-field rule, format validation, consent copy, identity scope, sensitive-content warning, or acceptance state is configured.",
  },
  {
    title: "Submit and confirmation",
    area: "Workflow",
    description:
      "No submit handler, idempotency key, request record, confirmation, response, retry, or failure state is connected.",
  },
  {
    title: "Accessibility and recovery",
    area: "Experience",
    description:
      "No labelled controls, error summary, focus target, keyboard pathway, unsaved-state handling, or cancellation behavior is implemented.",
  },
];

export default function FeedbackForm() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Feedback form is unavailable locally. No field, consent, validation, submission, or response mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No field, consent, validation, submission, or response mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="feedback-form-title"
    >
      <div data-ui-polish="batch-189" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ClipboardPenLine className="size-3.5" aria-hidden="true" />
                  Feedback form readiness
                </Badge>
                <Badge variant="secondary">No form service</Badge>
              </div>
              <h1
                id="feedback-form-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Feedback form readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful fields, validation, consent, accessibility,
                submission, confirmation, and recovery contracts without opening
                an active form or sending user content.
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
                Feedback form service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No form schema, identity boundary, consent workflow, validation
                engine, submission endpoint, confirmation channel, or support
                queue is connected. This is a planning boundary, not a live
                form.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Feedback form status"
        >
          <Card>
            <CardContent className="p-5">
              <FileCheck2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No fields loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No message, rating, category, account context, attachment,
                prompt, or schema is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No validation or consent</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No required-field rule, format check, consent copy, identity
                scope, or sensitive-content warning exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Send className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No submission route</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No handler, request, confirmation, response, retry, failure, or
                cancellation state can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Feedback form readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              message content, identity, consent, form state, requests, or
              support storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search feedback form readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search form requirements"
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
                  No form notes match “{query}”.
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
                A production feedback form needs versioned schema, accessible
                labels, consent and identity boundaries, robust client/server
                validation, rate limits, abuse prevention, secure attachments,
                idempotent submission, privacy-safe errors, confirmation, retry,
                cancellation, and support routing.
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
