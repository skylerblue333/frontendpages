import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileText,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Editorial source and evidence",
    area: "Content",
    description:
      "No author, reviewer, publication date, source citation, evidence level, update history, or health-content catalog is connected.",
  },
  {
    title: "Clinical safety and scope",
    area: "Safety",
    description:
      "No diagnosis, treatment, triage, medication, emergency, contraindication, or clinician-review workflow is available.",
  },
  {
    title: "Audience and personalization",
    area: "Privacy",
    description:
      "No identity, age, condition, consent, accessibility, language, personalization, or sensitive-health-data scope is loaded.",
  },
  {
    title: "Search and discovery",
    area: "Discovery",
    description:
      "No article index, ranking, freshness, recommendation, topic taxonomy, or source provenance is evaluated.",
  },
  {
    title: "User actions and support",
    area: "Operations",
    description:
      "No save, share, report, feedback, notification, export, deletion, or support workflow has a backend contract.",
  },
];

export default function HealthArticles() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Health Articles is unavailable locally. No article, clinical claim, profile, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No article, health claim, profile, notification, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="health-articles-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Stethoscope className="size-3.5" aria-hidden="true" /> Health
                  content readiness
                </Badge>
                <Badge variant="secondary">No health-content service</Badge>
              </div>
              <h1
                id="health-articles-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Health Articles readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the editorial, clinical-safety, privacy, and discovery
                contracts required for trustworthy health content without
                implying that articles, medical guidance, or personalized
                recommendations exist.
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
                Health-content service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No reviewed article catalog, clinical safety process, source
                evidence, personalization scope, privacy policy, or persistence
                layer is connected. This is a readiness workspace, not medical
                advice.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FileText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No article records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No author, reviewer, source, evidence level, freshness, or
                article content is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No clinical scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No diagnosis, treatment, medication, triage, profile, or
                personalized health claim is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No user actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No save, share, report, notification, feedback, export, or
                support record exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Health-content governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              articles, gives medical guidance, creates a profile, or saves a
              content action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search health articles readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter health-content requirements"
                className="pl-9"
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
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No health-content notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production health-content system needs qualified editorial and
                clinical review, source provenance, dated updates, emergency and
                disclaimer handling, privacy controls, accessibility,
                moderation, safe personalization boundaries, and tested support
                and correction workflows. This screen is not medical advice.
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
