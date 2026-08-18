import { useState } from "react";
import {
  BookOpenCheck,
  CircleSlash2,
  ClipboardCheck,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type AssignmentState = "All" | "Review" | "Planned" | "Unavailable";
type AssignmentConcept = {
  title: string;
  state: Exclude<AssignmentState, "All">;
  summary: string;
  course: string;
  assignee: string;
  progress: string;
  deadline: string;
  submission: string;
  grading: string;
  completion: string;
};
const concepts: AssignmentConcept[] = [
  {
    title: "Course checkpoint",
    state: "Review",
    summary:
      "Local assignment concept pending verified course membership, authorization, submission storage, grading policy, feedback auditability, and completion semantics.",
    course: "Course relation unavailable",
    assignee: "Assignee identity unavailable",
    progress: "Progress unavailable",
    deadline: "Deadline unavailable",
    submission: "Submission state unavailable",
    grading: "Grading record unavailable",
    completion: "Completion state unavailable",
  },
  {
    title: "Portfolio assignment",
    state: "Planned",
    summary:
      "Local portfolio concept pending learner-safe storage, instructor authorization, rubric provenance, feedback controls, and retention policy.",
    course: "Course relation unavailable",
    assignee: "Assignee identity unavailable",
    progress: "Progress unavailable",
    deadline: "Deadline unavailable",
    submission: "Submission state unavailable",
    grading: "Grading record unavailable",
    completion: "Completion state unavailable",
  },
  {
    title: "Certification readiness",
    state: "Unavailable",
    summary:
      "Local readiness concept pending verified criteria, learner identity controls, assessment evidence, and explicit completion semantics.",
    course: "Course relation unavailable",
    assignee: "Assignee identity unavailable",
    progress: "Progress unavailable",
    deadline: "Deadline unavailable",
    submission: "Submission state unavailable",
    grading: "Grading record unavailable",
    completion: "Completion state unavailable",
  },
];
export default function AssignmentTracker() {
  const [state, setState] = useState<AssignmentState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Assignment service unavailable. Showing local assignment concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No assignment, student, instructor, course, progress, deadline, submission, grade, feedback, notification, certificate, or completion record was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={ClipboardCheck}
        title="Assignment tracker"
        subtitle="Review local assignment concepts without fabricated learners, courses, progress, deadlines, submissions, grades, feedback, or completion."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Assignment service unavailable.</strong> No verified course
          membership, assignment schema, learner identity, submission store,
          grading record, or completion service is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Education preview
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Review assignments</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Typed local fixtures show workflow structure only; they do not
              represent students, instructors, courses, progress, due dates,
              submissions, grades, or completion.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Planned", "Unavailable"] as AssignmentState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.title === item.title ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.title}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-xs text-slate-400">{item.state}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
                </button>
              ))}
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
                Selected assignment
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Course", selected.course],
                    ["Assignee", selected.assignee],
                    ["Progress", selected.progress],
                    ["Deadline", selected.deadline],
                    ["Submission", selected.submission],
                    ["Grading", selected.grading],
                    ["Completion", selected.completion],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Submit assignment")}
                  variant="outline"
                >
                  <BookOpenCheck className="mr-2 h-4 w-4" /> Submit unavailable
                </Button>
                <Button
                  onClick={() => blocked("Complete assignment")}
                  variant="outline"
                >
                  <ClipboardCheck className="mr-2 h-4 w-4" /> Complete
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Assignments require verified membership, authorization,
                  privacy controls, submission storage, grading policy, feedback
                  auditability, retention, and explicit completion semantics.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No assignment, learner, course, progress, submission, grade,
                  feedback, certificate, notification, or completion record is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No learner identity, due date, grade, completion, or academic
                  outcome is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
