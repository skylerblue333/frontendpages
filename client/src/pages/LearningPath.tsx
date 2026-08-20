import { useMemo, useState } from "react";
import {
  Compass,
  FileWarning,
  GraduationCap,
  LockKeyhole,
  Search,
  ServerOff,
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
    title: "Learner profile and goals",
    area: "Identity",
    description:
      "No authenticated learner, profile, goals, interests, accessibility needs, consent, cohort, or learning history is connected.",
  },
  {
    title: "Curriculum graph and prerequisites",
    area: "Content",
    description:
      "No verified course, lesson, skill, prerequisite, level, instructor, source, version, or curriculum relationship is loaded.",
  },
  {
    title: "Recommendation methodology",
    area: "Model",
    description:
      "No recommendation rule, ranking, signal weighting, explanation, evaluation, feedback loop, or model version is configured.",
  },
  {
    title: "Progress and completion outcomes",
    area: "Learning",
    description:
      "No enrollment, completion, assessment, mastery, progress persistence, certificate eligibility, or outcome record exists.",
  },
  {
    title: "Privacy and accessibility",
    area: "Governance",
    description:
      "No purpose limitation, retention, export or deletion control, screen-reader path metadata, keyboard flow, or recommendation review is verified.",
  },
];
export default function LearningPath() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LearningPath is unavailable locally. No learner profile, curriculum graph, recommendation, progress, or completion outcome was loaded or saved."
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
      `${action} is unavailable locally. No learner, curriculum, recommendation, enrollment, progress, certificate, or education mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="learning-path-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Compass className="size-3.5" aria-hidden="true" />{" "}
                  Personalized-path readiness
                </Badge>
                <Badge variant="secondary">No recommendation service</Badge>
              </div>
              <h1
                id="learning-path-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Learning Path readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the learner, curriculum, recommendation, progress,
                accessibility, and privacy contracts required for trustworthy
                personalized education paths without implying that a path,
                recommendation, enrollment, or completion outcome exists.
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
                Personalized-learning service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No learner profile, curriculum graph, recommendation method,
                accessibility metadata, progress store, or persistence layer is
                connected. This is a readiness workspace, not a personalized
                learning planner.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <GraduationCap
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No learner context</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No learner, goals, interests, accessibility needs, consent,
                cohort, or learning-history record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No path recommendation</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No course graph, prerequisite, ranking, explanation, model
                version, or recommended path is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No path actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No enrollment, path save, lesson start, progress update,
                certificate, or education mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Personalized-path governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads learner data, generates a recommendation, enrolls a course,
              saves progress, or issues a completion outcome.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Learning Path readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter personalized-path requirements"
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
                  No personalized-path notes match “{query}”.
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
                A production personalized-learning system needs authenticated
                learner goals, approved curriculum relationships, explainable
                recommendation methodology, accessible path metadata, progress
                and assessment persistence, privacy and retention controls,
                human review, auditability, and tested recovery. No learning
                path, recommendation, or completion outcome is claimed here.
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
