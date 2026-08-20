import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileSearch,
  Info,
  LockKeyhole,
  RadioTower,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Content provenance and versioning",
    area: "Evidence",
    description:
      "No content item, author, owner, source, version, checksum, approval history, draft, attachment, or current queue record is connected.",
  },
  {
    title: "Audience, moderation, and authorization",
    area: "Controls",
    description:
      "No audience, consent, role, moderation decision, policy check, copyright review, sensitive-data classification, or publish authorization is verified.",
  },
  {
    title: "Scheduling and delivery",
    area: "Operations",
    description:
      "No channel, schedule, timezone, delivery provider, retry policy, receipt, failure state, or downstream publication event exists.",
  },
  {
    title: "Rollback, correction, and audit",
    area: "Recovery",
    description:
      "No approval gate, cancellation, rollback, correction workflow, incident trace, audit event, support path, or recovery state is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No queue, schedule, approve, publish, cancel, retry, rollback, delete, export, or content, audience, or personal-data mutation is connected or persisted.",
  },
];
export default function PublishingQueue() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Publishing Queue is unavailable locally. No content, author, audience, schedule, approval, queue item, publication, delivery, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No queue, content, audience, approval, publication, delivery, rollback, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="publishing-queue-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <RadioTower className="size-3.5" aria-hidden="true" />{" "}
                  Publishing-readiness workspace
                </Badge>
                <Badge variant="secondary">No queue state</Badge>
              </div>
              <h1
                id="publishing-queue-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PublishingQueue readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review content provenance and versioning, audience and
                authorization, moderation, scheduling, channel delivery,
                rollback, audit, and persistence boundaries without implying
                that queued content, publication status, or delivery results
                exist.
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
                Publishing Queue is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No content source, version registry, moderation service,
                authorization policy, scheduler, delivery provider, rollback
                path, or persistence layer is connected. This workspace cannot
                queue, schedule, approve, publish, cancel, retry, roll back,
                delete, or claim delivery.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <RadioTower
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No queue state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No content, author, owner, source, version, audience, schedule,
                approval, or queue item is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CheckCircle2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No delivery state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No channel, provider, receipt, publication event, retry,
                failure, or downstream delivery result exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No publishing actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No queue, schedule, approve, publish, cancel, retry, rollback,
                delete, or content mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Publishing governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads content, creates queue items, schedules publication, sends
              delivery, or saves audience records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PublishingQueue readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter publishing requirements"
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
                  No publishing requirements match “{query}”.
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
                Production publishing requires authoritative content and version
                sources, ownership and licensing, audience and consent controls,
                moderation and policy approval, role authorization,
                timezone-safe scheduling, delivery receipts and retries,
                cancellation and rollback, audit history, and user-facing
                confirmation for every state transition. No content, queue,
                audience, approval, publication, delivery, rollback, or
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
