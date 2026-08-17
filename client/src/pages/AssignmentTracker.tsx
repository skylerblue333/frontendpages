import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  CircleSlash2,
  ClipboardList,
  FileUp,
  GraduationCap,
  LockKeyhole,
  RotateCcw,
  Search,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type AssignmentState = "Review" | "Planned" | "Unavailable";
type AssignmentFixture = {
  id: string;
  title: string;
  course: string;
  state: AssignmentState;
  description: string;
  assignee: string;
  progress: string;
  deadline: string;
  submission: string;
};
const assignments: AssignmentFixture[] = [
  {
    id: "research",
    title: "Ecosystem research brief",
    course: "SkyLearn · Research",
    state: "Review",
    description:
      "A local assignment concept for reviewing requirements and rubric structure after verified course data is connected.",
    assignee: "Student unavailable",
    progress: "Progress unavailable",
    deadline: "Deadline unavailable",
    submission: "No submission",
  },
  {
    id: "wallet",
    title: "Wallet safety reflection",
    course: "SkySchool · Digital safety",
    state: "Planned",
    description:
      "A lesson activity concept pending course membership, learner identity, and submission storage.",
    assignee: "Student unavailable",
    progress: "Progress unavailable",
    deadline: "Deadline unavailable",
    submission: "No submission",
  },
  {
    id: "capstone",
    title: "Capstone checkpoint",
    course: "SkyLearn · Capstone",
    state: "Unavailable",
    description:
      "A restricted checkpoint requiring instructor ownership, rubric policy, feedback, and completion evidence.",
    assignee: "Student unavailable",
    progress: "Progress unavailable",
    deadline: "Deadline unavailable",
    submission: "No submission",
  },
];
const states: Array<"All" | AssignmentState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const courses = [
  "All",
  ...Array.from(new Set(assignments.map(assignment => assignment.course))),
];

export default function AssignmentTracker() {
  const [query, setQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(assignments[0].id);
  const [status, setStatus] = useState(
    "Assignment tracking unavailable. Showing local assignment fixtures only."
  );
  const filtered = useMemo(
    () =>
      assignments.filter(
        assignment =>
          (courseFilter === "All" || assignment.course === courseFilter) &&
          (stateFilter === "All" || assignment.state === stateFilter) &&
          `${assignment.title} ${assignment.course} ${assignment.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [courseFilter, query, stateFilter]
  );
  const selected =
    assignments.find(assignment => assignment.id === selectedId) ??
    assignments[0];
  const reset = () => {
    setQuery("");
    setCourseFilter("All");
    setStateFilter("All");
    setSelectedId(assignments[0].id);
    setStatus(
      "Assignment preview reset locally. No student, course, progress, deadline, submission, grade, or completion state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No student, assignment, course, submission, grade, notification, or completion request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-violet-200">
              <ClipboardList aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Assignment tracker
                </h1>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review assignment concepts without fabricated students,
                progress, deadlines, submissions, grades, or completion claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset assignment tracker preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <GraduationCap
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Assignment tracking unavailable.
              </strong>{" "}
              No verified course membership, learner identity, assignment store,
              submission service, rubric, gradebook, notification channel, or
              completion record is connected. The assignments below are local
              fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
              <label className="relative block">
                <span className="sr-only">
                  Search local assignment fixtures
                </span>
                <Search
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search assignment fixtures"
                  value={query}
                />
              </label>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter assignment course"
              >
                {courses.map(course => (
                  <Button
                    aria-pressed={courseFilter === course}
                    className={
                      courseFilter === course
                        ? "bg-violet-500 text-white hover:bg-violet-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={course}
                    onClick={() => {
                      setCourseFilter(course);
                      setStatus(`${course} course filter selected locally.`);
                    }}
                    size="sm"
                    variant={courseFilter === course ? "default" : "outline"}
                  >
                    {course}
                  </Button>
                ))}
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter assignment state"
              >
                {states.map(state => (
                  <Button
                    aria-pressed={stateFilter === state}
                    className={
                      stateFilter === state
                        ? "border-violet-400/50 bg-violet-400/10 text-violet-100"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={state}
                    onClick={() => {
                      setStateFilter(state);
                      setStatus(`${state} assignment state selected locally.`);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    {state}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <ClipboardList
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching assignment fixtures
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another course, state, or search term.
                  </p>
                </div>
              ) : (
                filtered.map(assignment => (
                  <button
                    aria-pressed={selectedId === assignment.id}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selectedId === assignment.id ? "border-violet-400/35 bg-violet-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={assignment.id}
                    onClick={() => {
                      setSelectedId(assignment.id);
                      setStatus(
                        `${assignment.title} selected for local assignment review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-violet-200">
                        <BookOpenCheck aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-medium text-slate-200">
                              {assignment.title}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {assignment.course}
                            </p>
                          </div>
                          <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                            {assignment.state}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {assignment.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected assignment
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-1 text-sm text-violet-200">
                {selected.course} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Assignee</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.assignee}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Progress</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.progress}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Deadline</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.deadline}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <p className="text-xs text-slate-500">Submission</p>
                  <p className="mt-1 text-sm text-slate-200">
                    {selected.submission}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No learner, requirement, due date, submission, grade, feedback,
                or completion state is available.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Submit")}
                  size="sm"
                  variant="outline"
                >
                  <FileUp aria-hidden="true" className="mr-2 h-4 w-4" />
                  Submit unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Complete")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Complete unavailable
                </Button>
                <Button
                  className="border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                  onClick={() => blocked("Create assignment")}
                  size="sm"
                  variant="outline"
                >
                  <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                  Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Education boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No course, learner, submission, gradebook, feedback,
                    notification, or completion operation is available. Filters
                    and selection are local only.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Academic posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Production assignment tracking requires verified membership,
                    authorization, privacy, submission storage, grading policy,
                    feedback auditability, and explicit completion semantics.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <CalendarClock aria-hidden="true" className="h-5 w-5" />
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
