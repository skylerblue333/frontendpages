import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  FileQuestion,
  MessageSquareText,
  Search,
  ShieldCheck,
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

type FaqSurface = { title: string; area: string; description: string };
const surfaces: readonly FaqSurface[] = [
  {
    title: "Published questions and answers",
    area: "Content",
    description:
      "No public FAQ entries, source citations, category, language, version, owner, or last-reviewed state is loaded.",
  },
  {
    title: "Search and navigation",
    area: "Discovery",
    description:
      "No search index, relevance ranking, related article, anchor link, or empty-result behavior is connected.",
  },
  {
    title: "Support and feedback",
    area: "Support",
    description:
      "No contact route, helpfulness response, escalation, feedback ticket, or support handoff is configured.",
  },
  {
    title: "Accessibility and localization",
    area: "Experience",
    description:
      "No content accessibility review, translation state, locale fallback, or public cache invalidation is available.",
  },
];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Public FAQ content is unavailable locally. No search, feedback, support, or content-delivery mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return surfaces.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No search, feedback, support, or content-delivery mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="faq-page-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileQuestion className="size-3.5" aria-hidden="true" />
                  Knowledge experience readiness
                </Badge>
                <Badge variant="secondary">No published FAQ</Badge>
              </div>
              <h1
                id="faq-page-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                FAQ page readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful public help-content, discovery, support,
                accessibility, and localization contracts without presenting
                invented answers or implying that support content is published.
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
                Published FAQ content is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No public content repository, search index, support handoff,
                feedback service, accessibility review, localization pipeline,
                or cache is connected. This is a planning boundary, not a live
                help center.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="FAQ page status"
        >
          <Card>
            <CardContent className="p-5">
              <BookOpen
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No answers loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No public questions, answers, citations, categories, languages,
                or review dates are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Search className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No search connected</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No index, ranking, related article, empty result, or navigation
                behavior can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <MessageSquareText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No support handoff</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No feedback, helpfulness response, escalation, contact route, or
                support ticket is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>FAQ experience readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects public
              answers, support requests, feedback, search data, or content
              storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search FAQ page readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search help experience requirements"
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
                  No FAQ experience notes match “{query}”.
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
                A production FAQ experience needs reviewed source content,
                accessible markup, localization and fallback rules, search
                indexing, cache invalidation, feedback privacy, support
                escalation, content ownership, publication rollback, and
                deletion/export controls.
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
