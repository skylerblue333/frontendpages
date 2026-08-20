import { useMemo, useState } from "react";
import {
  ClipboardCheck,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  GraduationCap,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Question and curriculum provenance",
    area: "Evidence",
    description:
      "No course, lesson, question, answer key, author, source, version, objective, rubric, or published quiz record is connected.",
  },
  {
    title: "Instructor authorization and review",
    area: "Controls",
    description:
      "No instructor identity, role, ownership check, peer review, approval, copyright, sensitive-data, or publishing permission is verified.",
  },
  {
    title: "Grading, attempts, and integrity",
    area: "Assessment",
    description:
      "No scoring rule, rubric, attempt limit, time limit, randomization, accommodation, anti-cheating control, or grade record exists.",
  },
  {
    title: "Accessibility, progress, and certificates",
    area: "Learner safety",
    description:
      "No keyboard or screen-reader review, alternative format, learner progress, completion rule, certificate linkage, or correction workflow is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No create, edit, preview, publish, assign, grade, retake, archive, export, or quiz, learner, score, certificate, or personal-data mutation is connected or persisted.",
  },
];
export default function QuizBuilder() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Quiz builder is unavailable locally. No course, question, answer key, instructor, grading rule, attempt, learner, score, certificate, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No quiz, question, grading, learner, score, certificate, publication, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="quiz-builder-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ClipboardCheck className="size-3.5" aria-hidden="true" />{" "}
                  Assessment-readiness workspace
                </Badge>
                <Badge variant="secondary">No quiz state</Badge>
              </div>
              <h1
                id="quiz-builder-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                QuizBuilder readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review question and curriculum provenance, instructor
                authorization, grading and attempts, accessibility, academic
                integrity, learner progress, certificates, and persistence
                boundaries without implying that quiz content, learner scores,
                or assessment records exist.
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
                Quiz builder is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No curriculum source, authoring service, instructor
                authorization, grading engine, attempt control, accessibility
                review, anti-cheating system, progress ledger, certificate link,
                or persistence layer is connected. This workspace cannot create,
                edit, preview, publish, assign, grade, retake, archive, or claim
                quiz results.
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
              <h2 className="font-semibold">No quiz state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No course, lesson, question, answer key, author, source,
                version, objective, rubric, or quiz record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ClipboardCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No assessment state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No grading rule, attempt, time limit, score, learner progress,
                completion, or certificate linkage exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No quiz actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No create, edit, preview, publish, assign, grade, retake,
                archive, export, or assessment mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Assessment governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads quiz content, evaluates answers, records attempts, assigns
              grades, or saves learner or certificate data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search QuizBuilder readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter assessment requirements"
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
                  No assessment requirements match “{query}”.
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
                Production assessment authoring requires authoritative
                curriculum and question sources, instructor ownership and
                authorization, answer-key and rubric review, transparent grading
                and attempt rules, accessibility and accommodation checks,
                academic-integrity controls, learner progress and certificate
                definitions, privacy safeguards, audit history, and correction
                workflows. No quiz, question, grade, learner, score,
                certificate, publication, or personal-data record is claimed
                here.
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
