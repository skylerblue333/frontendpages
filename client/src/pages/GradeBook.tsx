import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  FileSpreadsheet,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type GradeBoundary = { title: string; area: string; description: string };
const boundaries: readonly GradeBoundary[] = [
  {
    title: "Learner and instructor scope",
    area: "Identity",
    description:
      "No authenticated learner, instructor, organization, course enrollment, or role scope is loaded.",
  },
  {
    title: "Course and assessment records",
    area: "Academic",
    description:
      "No course, assignment, rubric, submission, grade, feedback, term, or grading policy record is connected.",
  },
  {
    title: "Grade calculation and approval",
    area: "Integrity",
    description:
      "No calculation rules, weighting, rounding, moderation, approval, correction, or audit semantics are available.",
  },
  {
    title: "Privacy and access controls",
    area: "Safety",
    description:
      "No learner visibility, consent, redaction, retention, export, deletion, or support boundary is configured.",
  },
  {
    title: "Reports and notifications",
    area: "Operations",
    description:
      "No transcript, report card, notification, parent view, export, analytics, or delivery status can be claimed.",
  },
  {
    title: "Mutations and recovery",
    area: "Workflow",
    description:
      "Create, edit, publish, finalize, import, sync, and recovery operations have no connected backend contract.",
  },
];

export default function GradeBook() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "GradeBook is unavailable locally. No learner, course, grade, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !normalized ||
        `${title} ${area} ${description}`.toLowerCase().includes(normalized)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No academic record, grade, report, or mutation was changed.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="gradebook-title"
    >
      <div data-ui-polish="batch-191" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BookOpen className="size-3.5" aria-hidden="true" /> Academic
                  records
                </Badge>
                <Badge variant="secondary">No gradebook service</Badge>
              </div>
              <h1
                id="gradebook-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                GradeBook readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the records, privacy controls, and calculation contracts
                required for a trustworthy gradebook without implying that
                grades, learners, or courses exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="GradeBook service status"
        >
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Gradebook service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated academic scope, course catalog, assessment
                records, grading policy, privacy boundary, or persistence layer
                is connected. This is a readiness workspace, not a record of
                achievement.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="GradeBook status"
        >
          <Card>
            <CardContent className="p-5">
              <FileSpreadsheet
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No academic records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No learner, course, assignment, submission, grade, or feedback
                data is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No access scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No role, visibility, consent, retention, or export policy is
                available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No calculated result</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No average, rank, transcript, report card, or completion outcome
                is presented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Gradebook-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never loads
              academic data, calculates grades, publishes results, or saves
              changes.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search gradebook readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter gradebook requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(boundary => (
                <div
                  key={boundary.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{boundary.title}</h3>
                    <Badge variant="outline">{boundary.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {boundary.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${boundary.title}`)}
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
                  No gradebook notes match “{query}”.
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
                A production gradebook needs authenticated learner and
                instructor scope, course and assessment contracts, tested grade
                calculation, approval and correction workflows, privacy
                controls, audit trails, reporting, notification delivery, and
                recovery for imports and sync.
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
