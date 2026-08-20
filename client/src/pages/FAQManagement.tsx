import { useMemo, useState } from "react";
import {
  BookOpenText,
  CheckCircle2,
  FileQuestion,
  Search,
  ShieldCheck,
  Waypoints,
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

type FaqBoundary = { title: string; area: string; description: string };
const boundaries: readonly FaqBoundary[] = [
  {
    title: "Questions and answers",
    area: "Content",
    description:
      "No FAQ question, answer, category, author, source, language, version, or content record is loaded.",
  },
  {
    title: "Drafting and publication",
    area: "Workflow",
    description:
      "No draft, reviewer, approval, publication state, schedule, revision history, or rollback is available.",
  },
  {
    title: "Search and audience delivery",
    area: "Experience",
    description:
      "No search index, relevance signal, audience rule, localization, visibility setting, or public delivery channel is connected.",
  },
  {
    title: "Moderation and audit",
    area: "Governance",
    description:
      "No permission, moderation rule, sensitive-content review, feedback loop, audit trail, or deletion/export workflow is configured.",
  },
];

export default function FAQManagement() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "FAQ management is unavailable locally. No question, answer, draft, publication, search, or content mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No question, answer, draft, publication, search, or content mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="faq-management-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileQuestion className="size-3.5" aria-hidden="true" />
                  Knowledge content readiness
                </Badge>
                <Badge variant="secondary">No FAQ service</Badge>
              </div>
              <h1
                id="faq-management-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                FAQ management readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful question, answer, review, publication, search,
                audience, and governance contracts without presenting invented
                help content or publishing a change.
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
                FAQ service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No content repository, authoring workflow, reviewer permission,
                publication channel, search index, localization service, or
                feedback loop is connected. This is a planning boundary, not a
                live content editor.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="FAQ management status"
        >
          <Card>
            <CardContent className="p-5">
              <BookOpenText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No FAQ content loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No questions, answers, categories, sources, authors, languages,
                or versions are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Waypoints
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No publication workflow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No draft, review, approval, schedule, revision, rollback, or
                public delivery action can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ShieldCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">Governance required</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No permissions, moderation, sensitive-content review, audit,
                retention, or deletion state is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>FAQ readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              questions, answers, drafts, publication states, search indices, or
              content storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search FAQ readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search FAQ requirements"
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
                  No FAQ notes match “{query}”.
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
                A production FAQ system needs content ownership, source
                citations, versioning, accessibility, localization, review and
                approval gates, permission boundaries, moderation, search
                indexing, cache invalidation, publication rollback, audit
                logging, and deletion/export controls.
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
