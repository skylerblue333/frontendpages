import { useMemo, useState } from "react";
import {
  Award,
  Check,
  ClipboardCheck,
  Filter,
  GraduationCap,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const quizzes = [
  {
    id: 1,
    name: "Foundations checkpoint",
    category: "Foundations",
    detail:
      "A local quiz concept requiring question provenance, objective alignment, attempt limits, accessibility, answer privacy, grading semantics, and review.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Wallet safety check",
    category: "Technology",
    detail:
      "A safety-assessment concept requiring accurate content, no investment promise, secure delivery, integrity controls, and learner support.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "AI workflow review",
    category: "AI",
    detail:
      "An AI quiz concept requiring model disclosure, privacy, copyright, evaluation, accessibility, and responsible-use boundaries.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Community leadership check",
    category: "Community",
    detail:
      "A community-assessment concept requiring safeguarding, moderation, inclusive design, appeals, and accountable review.",
    state: "Blocked",
  },
];
export default function SchoolQuiz() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [attempts, setAttempts] = useState("Attempt policy not configured");
  const [grading, setGrading] = useState("Grading mode not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(quizzes.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      quizzes.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const quiz = quizzes.find(item => item.id === selected) ?? quizzes[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setAttempts("Attempt policy not configured");
    setGrading("Grading mode not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ClipboardCheck}
        eyebrow="School quiz · Assessment preview"
        title="Define the assessment before showing the score."
        description="Explore local foundations, technology, AI, and community quiz concepts with search, category filters, attempt and grading intent, integrity/accessibility/appeal gates, save/reset, and blocked start/submit actions. No question bank, learner, attempt, answer, grade, pass/fail, certificate, XP, reward, or educational outcome is connected."
        badge="Assessment-governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save quiz locally"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review assessment gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset quiz
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Quiz concepts",
              value: `${quizzes.length} local`,
              hint: "No question source",
              icon: ClipboardCheck,
              tone: "cyan",
            },
            {
              label: "Attempts",
              value: "Unavailable",
              hint: "No learner source",
              icon: GraduationCap,
              tone: "violet",
            },
            {
              label: "Grades",
              value: "Not claimed",
              hint: "No grading source",
              icon: Award,
              tone: "amber",
            },
            {
              label: "Rewards",
              value: "Blocked",
              hint: "No ledger source",
              icon: Sparkles,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Assessment evidence boundary">
          <strong>
            This is a local quiz-design preview, not evidence that a learner
            attempted, answered, passed, failed, or earned a reward or
            certificate.
          </strong>{" "}
          Quiz cards, filters, attempt and grading intent, saved state,
          integrity/accessibility gates, and disabled start/submit actions are
          browser concepts. No question, answer, learner, attempt, grade,
          pass/fail, accuracy, XP, reward, certificate, or educational outcome
          is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local school quizzes"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected quiz concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{quiz.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {quiz.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {quiz.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: quiz.category },
                  { label: "Attempts", value: attempts },
                  { label: "Grading", value: grading },
                  { label: "Question bank", value: "Unavailable" },
                  { label: "Integrity", value: "Required" },
                  { label: "Result", value: "Not claimed" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Attempt policy
                  <select
                    value={attempts}
                    onChange={event => setAttempts(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Attempt policy not configured</option>
                    <option>Single attempt intent</option>
                    <option>Limited attempts intent</option>
                    <option>Practice mode intent</option>
                    <option>Instructor-review intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Grading mode
                  <select
                    value={grading}
                    onChange={event => setGrading(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Grading mode not configured</option>
                    <option>Server-side rubric intent</option>
                    <option>Instructor grading intent</option>
                    <option>Peer-review intent</option>
                    <option>Completion-only intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <ClipboardCheck className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No quiz evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed question bank, secure delivery, learner
                  identity, attempt limits, server-side grading, integrity
                  controls, accessibility, feedback, appeals, certificates, and
                  reward linkage before starting.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Start unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Submit unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Review unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Certificate unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No score or progression claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A quiz concept does not prove a question, learner, attempt,
                    answer, grade, pass/fail, accuracy, certificate, XP, reward,
                    or educational outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Assessment-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real school quiz must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated learner, course, quiz, version, attempt, question source, locale, timestamp, and provenance",
                "Secure question delivery, randomized selection, answer privacy, attempt limits, integrity, anti-cheat, accessibility, and recovery",
                "Server-side grading, rubric, score semantics, feedback, moderation, appeals, certificate linkage, and reward policy",
                "Learner privacy, consent, safeguarding, retention, deletion, export, instructor access, and incident response",
                "XP, reward, token, wallet, chain, certificate, employment, earnings, investment, AI, financial, and user-impact claims require domain review",
                "Start, submit, review, retry, grade, issue, export, notify, accessibility, and accountable approval require governed controls",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Quiz surface preserved",
              description:
                "Foundations, technology, AI, community quizzes, filters, attempts, grading, integrity, feedback, start, submit, review, certificates, save/reset, and gates remain interactive.",
              icon: ClipboardCheck,
              status: "Local assessments",
            },
            {
              title: "No score theater",
              description:
                "Questions, learners, attempts, answers, grades, pass/fail, accuracy, certificates, XP, rewards, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Integrity before grading",
              description:
                "Real quizzes require secure question delivery, server-side grading, attempt rules, accessibility, privacy, appeals, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
