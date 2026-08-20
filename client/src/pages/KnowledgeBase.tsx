import { useMemo, useState } from "react";
import {
  BookOpen,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Tags,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Source and ownership",
    area: "Trust",
    description:
      "No article, document, author, workspace, tenant, source URL, approval owner, or provenance record is connected.",
  },
  {
    title: "Search and retrieval",
    area: "Discovery",
    description:
      "No index, embedding, ranking, full-text search, filter, version, freshness, or retrieval result is available.",
  },
  {
    title: "Editorial lifecycle",
    area: "Content",
    description:
      "No draft, review, publish, archive, revision, translation, taxonomy, or content mutation workflow is active.",
  },
  {
    title: "Permissions and privacy",
    area: "Access",
    description:
      "No authenticated workspace, role, ACL, private collection, sharing rule, retention policy, or redaction control is verified.",
  },
  {
    title: "Reliability and observability",
    area: "Operations",
    description:
      "No ingestion job, sync status, failed import, retry, audit event, incident, usage metric, or recovery evidence exists.",
  },
];
export default function KnowledgeBase() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "KnowledgeBase is unavailable locally. No article, document, search index, or content mutation was loaded or saved."
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
      `${action} is unavailable locally. No article, document, search, publishing, sharing, or content mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="knowledge-base-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BookOpen className="size-3.5" aria-hidden="true" /> Knowledge
                  operations readiness
                </Badge>
                <Badge variant="secondary">No content service</Badge>
              </div>
              <h1
                id="knowledge-base-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                KnowledgeBase readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the source, discovery, editorial, access, and reliability
                contracts required for a trustworthy knowledge base without
                implying that articles, documents, search results, or publishing
                workflows exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Knowledge service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No content repository, source connector, search index, embedding
                service, editorial workflow, permission model, or persistence
                layer is connected. This is a readiness workspace, not a
                populated documentation system.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BookOpen
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No source records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No articles, documents, authors, workspaces, sources, or
                provenance records are loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Search className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No search index</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No index, ranking, embedding, full-text query, filter, or
                retrieval result is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No content actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No article creation, publishing, sharing, importing, tagging, or
                deletion action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Knowledge-operations governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads an article, queries a search index, imports a source,
              publishes content, changes permissions, or saves a mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search KnowledgeBase readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter knowledge-operations requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No knowledge-operations notes match “{query}”.
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
                A production knowledge base needs source provenance, indexing
                and retrieval contracts, editorial approval, versioning,
                permissions, privacy and retention controls, ingestion retries,
                auditability, observability, and tested recovery. No article,
                search result, or publishing state is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <Tags
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
