import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  Filter,
  GitBranch,
  MessageSquare,
  Search,
  Settings,
  ShieldAlert,
  Upload,
  XCircle,
} from "lucide-react";

type Area = "all" | "content" | "search" | "governance";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<Area, "all">;
  icon: typeof FileText;
};

const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Content provenance",
    description:
      "Approved source content, authorship, ownership, citations, accessibility, and review status need a trusted content repository.",
    area: "content",
    icon: FileText,
  },
  {
    title: "Search and navigation",
    description:
      "A searchable index, stable links, taxonomy, redirects, freshness, and error states need a maintained documentation service.",
    area: "search",
    icon: Search,
  },
  {
    title: "Versioning and release history",
    description:
      "Version identifiers, compatibility, change history, deprecations, and rollback require source control and release provenance.",
    area: "content",
    icon: GitBranch,
  },
  {
    title: "Publication and feedback",
    description:
      "Editorial approval, publication, issue reporting, feedback routing, moderation, and retention need accountable ownership.",
    area: "governance",
    icon: MessageSquare,
  },
];

export default function Documentation() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<Area>("all");
  const [status, setStatus] = useState(
    "Documentation service unavailable locally. No article, author, search, version, publication, notification, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (area === "all" || item.area === area);
      }),
    [query, area]
  );
  const announceUnavailable = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No article, author, search, version, publication, notification, or persistence mutation was started.`
    );
  };

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="documentation-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-sky-400/30 text-sky-200">
            DOCUMENTATION READINESS PREVIEW
          </Badge>
          <h1
            id="documentation-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <BookOpen className="h-7 w-7 text-sky-300" aria-hidden="true" />
            Documentation
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review knowledge-base requirements without inventing articles,
            authors, versions, search results, publication state, or support
            commitments.
          </p>
        </header>

        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Documentation service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No article repository, author directory, search index, version
                source, editorial workflow, feedback queue, or publication
                service is connected. This page contains planning requirements
                only.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <FileText
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Articles unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No title, body, author, citation, asset, or article status is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Search
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Search unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No index, query result, ranking, redirect, or freshness state
              exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <GitBranch
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Versions unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No release, compatibility, deprecation, or change history is
              authoritative.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MessageSquare
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Feedback unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No issue, support request, moderation, notification, or owner
              response is active.
            </p>
          </Card>
        </section>

        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Documentation requirement filters"
        >
          <label htmlFor="documentation-search" className="sr-only">
            Search documentation requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="documentation-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search documentation requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "content", "search", "governance"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={area === value ? "default" : "outline"}
              onClick={() => setArea(value)}
            >
              <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
              {value === "all"
                ? "All"
                : value[0].toUpperCase() + value.slice(1)}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Documentation settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>

        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Documentation requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is authored, published, indexed,
                exported, or saved.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Article creation")}
            >
              <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
              New article unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.area}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} workflow`)
                        }
                      >
                        Manage unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {requirements.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">
                  No documentation requirements found
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query article or version records.
                </p>
              </Card>
            )}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/30 p-5">
            <Upload className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Import unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No source file, article, asset, or metadata can be imported.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Documentation import")}
            >
              Import unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <BookOpen
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Open article unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No article, author, version, link, or content view can be opened.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Article opening")}
            >
              Open unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <GitBranch
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Publish unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No review, approval, release, notification, or version mutation
              can occur.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Documentation publication")}
            >
              Publish unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <MessageSquare
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Feedback unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No issue, rating, support message, or owner notification can be
              submitted.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Documentation feedback")}
            >
              Feedback unavailable
            </Button>
          </Card>
        </section>

        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No documentation claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production knowledge base needs provenance, editorial
                ownership, version compatibility, secure publishing, search
                observability, accessibility, feedback routing, retention, and
                auditable change history.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
