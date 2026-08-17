import { useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  CircleSlash2,
  FileCheck2,
  GraduationCap,
  LockKeyhole,
  PenLine,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type CourseSubject = "All" | "AI" | "Finance" | "Education";
type CourseState = "All" | "Draft" | "Review" | "Unavailable";

type CourseConcept = {
  id: string;
  title: string;
  subject: Exclude<CourseSubject, "All">;
  state: Exclude<CourseState, "All">;
  summary: string;
  author: string;
  lessons: string;
  outcomes: string;
  certification: string;
  accessibility: string;
  publication: string;
};

const courses: CourseConcept[] = [
  {
    id: "ai-course",
    title: "AI foundations course",
    subject: "AI",
    state: "Review",
    summary:
      "A local course concept for responsible AI fundamentals pending curriculum ownership, instructional review, and accessibility checks.",
    author: "Instructor identity unavailable",
    lessons: "Lesson structure unavailable",
    outcomes: "Learning outcomes unavailable",
    certification: "Certification criteria unavailable",
    accessibility: "Accessibility review unavailable",
    publication: "Publication state unavailable",
  },
  {
    id: "finance-course",
    title: "Digital finance course",
    subject: "Finance",
    state: "Draft",
    summary:
      "A draft learning concept for finance literacy pending subject review, learner safeguards, assessment integrity, and versioning.",
    author: "Instructor identity unavailable",
    lessons: "Lesson structure unavailable",
    outcomes: "Learning outcomes unavailable",
    certification: "Certification criteria unavailable",
    accessibility: "Accessibility review unavailable",
    publication: "Publication state unavailable",
  },
  {
    id: "education-course",
    title: "Learning design course",
    subject: "Education",
    state: "Unavailable",
    summary:
      "A local course concept for learning design pending curriculum ownership, safeguarding, learner permissions, and publication controls.",
    author: "Instructor identity unavailable",
    lessons: "Lesson structure unavailable",
    outcomes: "Learning outcomes unavailable",
    certification: "Certification criteria unavailable",
    accessibility: "Accessibility review unavailable",
    publication: "Publication state unavailable",
  },
];

const subjects: CourseSubject[] = ["All", "AI", "Finance", "Education"];
const states: CourseState[] = ["All", "Review", "Draft", "Unavailable"];

export default function CourseBuilder() {
  const [subject, setSubject] = useState<CourseSubject>("All");
  const [state, setState] = useState<CourseState>("All");
  const [selectedId, setSelectedId] = useState(courses[0].id);
  const [status, setStatus] = useState(
    "Curriculum service unavailable. Showing local course concepts only."
  );

  const filtered = useMemo(
    () =>
      courses.filter(
        course =>
          (subject === "All" || course.subject === subject) &&
          (state === "All" || course.state === state)
      ),
    [state, subject]
  );
  const selected =
    filtered.find(course => course.id === selectedId) ??
    filtered[0] ??
    courses[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No course, lesson, instructor, learner, assessment, certification, publication, or notification request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={GraduationCap}
        title="Course builder"
        subtitle="Review local curriculum-authoring concepts without fabricated courses, lessons, instructors, outcomes, certifications, learner access, or publication states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Curriculum service unavailable.</strong> No course registry,
            instructor directory, lesson editor, assessment service, learner
            permission store, certification issuer, or publication workflow is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Curriculum service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset courses
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Curriculum preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review course concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show curriculum structure only.
                  They do not represent real courses, lessons, instructors,
                  learners, outcomes, assessments, certifications, or
                  publication.
                </p>
              </div>
              <BookOpen className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Course subject filter"
            >
              {subjects.map(item => (
                <Button
                  aria-pressed={subject === item}
                  key={item}
                  onClick={() => setSubject(item)}
                  size="sm"
                  variant={subject === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Course state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(course => (
                <button
                  aria-pressed={selected.id === course.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === course.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={course.id}
                  onClick={() => setSelectedId(course.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{course.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {course.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{course.subject}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {course.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local course fixtures match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected course
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.subject} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Author", selected.author],
                  ["Lessons", selected.lessons],
                  ["Outcomes", selected.outcomes],
                  ["Certification", selected.certification],
                  ["Accessibility", selected.accessibility],
                  ["Publication", selected.publication],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No course title, author, lessons, outcomes, assessment,
                certification, accessibility, learner, or publication state is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Edit course")}
                  variant="outline"
                >
                  <PenLine className="mr-2 h-4 w-4" /> Edit unavailable
                </Button>
                <Button
                  onClick={() => blocked("Validate course")}
                  variant="outline"
                >
                  <FileCheck2 className="mr-2 h-4 w-4" /> Validate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish course")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Course authoring requires curriculum ownership, instructional
                  quality review, accessibility, safeguarding, versioning,
                  learner permissions, assessment integrity, certification
                  criteria, and auditable publication states.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Course, lesson, assessment, certification, learner, and
                  publication transitions must be auditable and isolated from
                  fabricated education outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No lesson edit, assessment submission, certificate issue,
                  enrollment, learner notice, or publication operation is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Course state remains explicitly unavailable until
                  authoritative curriculum services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
