import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Source documents and provenance",
    area: "Evidence",
    description:
      "No product brief, research note, support record, experiment result, source URL, author, timestamp, or claim provenance is connected.",
  },
  {
    title: "Ownership, access, and versioning",
    area: "Governance",
    description:
      "No document owner, reviewer, role, permission, workspace boundary, version history, approval, or change audit exists.",
  },
  {
    title: "Evaluation and recommendation method",
    area: "Method",
    description:
      "No playbook, insight, rubric, sample, metric definition, confidence, effectiveness score, recommendation, or human review is verified.",
  },
  {
    title: "Analytics reconciliation and privacy",
    area: "Safety",
    description:
      "No usage, adoption, retention, revenue, customer, or behavioral analytics source is connected or reconciled; no privacy boundary is established.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No import, index, annotate, publish, approve, archive, recommend, export, or product-knowledge mutation is connected or persisted.",
  },
];
export default function ProductBrain() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Product Brain is unavailable locally. No source document, playbook, usage count, effectiveness score, recommendation, product insight, analytics record, or knowledge-base record was loaded or changed."
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
      `${action} is unavailable locally. No source, playbook, insight, analytics, recommendation, product-knowledge, or publication mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="product-brain-title"
    >
      <div data-ui-polish="batch-199" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Sparkles className="size-3.5" aria-hidden="true" />{" "}
                  Product-knowledge readiness workspace
                </Badge>
                <Badge variant="secondary">No knowledge state</Badge>
              </div>
              <h1
                id="product-brain-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ProductBrain readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review source documents, provenance, ownership, access, version
                history, evaluation methods, analytics reconciliation, privacy
                boundaries, and recommendation controls without implying that
                playbooks, insights, usage counts, effectiveness scores, or
                product knowledge exist.
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
                Product Brain is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No knowledge-base source, document index, ownership registry,
                access policy, version history, evaluation pipeline, analytics
                source, privacy control, or persistence layer is connected. This
                workspace cannot import, index, annotate, publish, approve,
                archive, recommend, export, or claim product insights.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BookOpenCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No knowledge state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No source document, playbook, insight, author, owner, version,
                or product-knowledge record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No analytics claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No usage, adoption, retention, revenue, effectiveness,
                confidence, or recommendation metric is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No knowledge actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No import, index, annotate, publish, approve, archive,
                recommend, export, or knowledge mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Product-knowledge governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads documents, computes analytics, generates recommendations, or
              saves knowledge records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ProductBrain readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter knowledge requirements"
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
                  No knowledge requirements match “{query}”.
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
                Production product intelligence requires sourced documents,
                claim provenance, ownership, access and privacy controls,
                version and approval history, evaluation methodology, analytics
                definitions and reconciliation, confidence and uncertainty,
                human review, and safe publication. No playbook, insight, usage,
                effectiveness, recommendation, revenue, retention, or adoption
                record is claimed here.
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
