import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Award,
  BookOpenCheck,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  Target,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Course, lesson, and instructor provenance",
    area: "Content",
    description:
      "No course, lesson, instructor, version, syllabus, prerequisite, source, language, duration, or availability state is connected.",
  },
  {
    title: "Enrollment and account authorization",
    area: "Access",
    description:
      "No student account, enrollment, entitlement, role, cohort, institution, purchase, privacy boundary, or account-scoped authorization is verified.",
  },
  {
    title: "Progress and completion semantics",
    area: "Progress",
    description:
      "No lesson completion, checkpoint, attendance, time spent, streak, score, synchronization, correction, or progress timestamp is available.",
  },
  {
    title: "Assessment and certification",
    area: "Assessment",
    description:
      "No quiz, rubric, attempt, answer, grade, passing rule, certificate, credential, issuer, expiration, or verification record exists.",
  },
  {
    title: "Accessibility, privacy, and recovery",
    area: "Governance",
    description:
      "No captions, transcript, keyboard path, screen-reader state, retention, export, deletion, offline behavior, retry, or audit trail is tested.",
  },
];
export default function MyLearning() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "My Learning is unavailable locally. No course, enrollment, student, progress, assessment, certificate, or education record was loaded or saved."
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
      `${action} is unavailable locally. No course, enrollment, student, progress, assessment, certificate, privacy, or education-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="my-learning-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BookOpenCheck className="size-3.5" aria-hidden="true" />{" "}
                  Learning-readiness workspace
                </Badge>
                <Badge variant="secondary">No student records</Badge>
              </div>
              <h1
                id="my-learning-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                My Learning readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review course provenance, enrollment authorization, student
                progress, assessment, certification, privacy, accessibility,
                synchronization, and recovery without implying that courses,
                enrollments, learning activity, or certificates exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                My Learning is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No course catalog, enrollment service, student account, progress
                store, assessment engine, credential issuer, accessibility asset
                source, or persistence layer is connected. This workspace cannot
                enroll, track, grade, certify, or claim learning progress.
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
              <h2 className="font-semibold">No learning records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No course, lesson, instructor, syllabus, enrollment,
                entitlement, student, or cohort record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Target className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No progress state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No completion, checkpoint, attendance, score, attempt, grade,
                synchronization, or progress state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No learning actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No enroll, start, complete, submit, certify, export, delete, or
                education-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Learning-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a course, reads enrollment, changes progress, submits an
              assessment, issues a certificate, or saves education data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search My Learning readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter learning requirements"
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
                  No learning notes match “{query}”.
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
                Production learning requires authoritative course and lesson
                contracts, account-scoped enrollment, durable and explainable
                progress semantics, accessible content, secure assessment and
                grading, explicit certification rules and issuer verification,
                privacy and retention controls, synchronization, recovery, and
                auditable student changes. No course, enrollment, student,
                progress, assessment, certificate, or education record is
                claimed here.
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
