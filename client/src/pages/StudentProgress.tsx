import { useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  Check,
  Filter,
  GraduationCap,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
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
const courses = [
  {
    id: 1,
    name: "Digital foundations",
    category: "Foundations",
    detail:
      "A local course concept requiring curriculum provenance, authoring, instructor authorization, accessibility, learner support, assessment, and version history.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Blockchain literacy",
    category: "Technology",
    detail:
      "A technology-learning concept requiring accurate sources, safety boundaries, wallet-risk education, instructor review, and no investment promises.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "AI product studio",
    category: "AI",
    detail:
      "An AI course concept requiring model disclosure, privacy, safety, evaluation, copyright, accessibility, and responsible-use review.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Community leadership",
    category: "Community",
    detail:
      "A community course concept requiring safeguarding, moderation, inclusion, assessment, appeals, and learner privacy.",
    state: "Blocked",
  },
];
export default function School() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [learning, setLearning] = useState("Learning path not configured");
  const [assessment, setAssessment] = useState("Assessment not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(courses.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      courses.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const course = courses.find(item => item.id === selected) ?? courses[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setLearning("Learning path not configured");
    setAssessment("Assessment not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div
      data-ui-polish="batch-202"
      className="min-h-screen bg-[#070a16] text-white"
    >
      <ScreenHero
        icon={GraduationCap}
        eyebrow="Student progress · Learning evidence preview"
        title="Review learner progress before claiming achievement."
        description="Explore local learner-progress concepts with search, category filters, enrollment and assessment intent, instructor authorization, privacy, accessibility, safeguarding, progress persistence, grade, streak, certificate, and reward gates, save/reset, and blocked enrollment/progress/certificate actions. No learner, course, enrollment, progress, grade, streak, reward, price, earnings, or certificate is connected."
        badge="Evidence-bounded StudentProgress workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save course locally"}
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
            {showGates ? "Close gates" : "Review learning gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset course
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Course concepts",
              value: `${courses.length} local`,
              hint: "No catalog source",
              icon: BookOpen,
              tone: "cyan",
            },
            {
              label: "Learners",
              value: "Unavailable",
              hint: "No enrollment source",
              icon: UsersRound,
              tone: "violet",
            },
            {
              label: "Progress",
              value: "Unavailable",
              hint: "No learner source",
              icon: GraduationCap,
              tone: "amber",
            },
            {
              label: "Certificates",
              value: "Blocked",
              hint: "No assessment source",
              icon: Award,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Student-progress evidence boundary">
          <strong>
            This is a local student-progress design preview, not evidence that a
            course, instructor, learner, enrollment, grade, certificate, price,
            or earnings outcome exists.
          </strong>{" "}
          Course cards, filters, learning and assessment intent, saved state,
          privacy/accessibility gates, and disabled enrollment/certificate
          actions are browser concepts. No curriculum, instructor, learner,
          progress, grade, rating, price, credential, employment, earnings, or
          educational outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local SkySchool courses"
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
                    Selected course concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{course.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {course.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {course.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: course.category },
                  { label: "Learning path", value: learning },
                  { label: "Assessment", value: assessment },
                  { label: "Instructor", value: "Unavailable" },
                  { label: "Progress", value: "Unavailable" },
                  { label: "Certificate", value: "Blocked" },
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
                  Learning path intent
                  <select
                    value={learning}
                    onChange={event => setLearning(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Learning path not configured</option>
                    <option>Self-paced intent</option>
                    <option>Instructor-led intent</option>
                    <option>Cohort intent</option>
                    <option>Project-based intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Assessment intent
                  <select
                    value={assessment}
                    onChange={event => setAssessment(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Assessment not configured</option>
                    <option>Quiz intent</option>
                    <option>Project-review intent</option>
                    <option>Peer-assessment intent</option>
                    <option>Certificate-gate intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <GraduationCap className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No education evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed curriculum, instructor authorization, course
                  access, learner privacy, accessibility, safeguarding,
                  assessment, progress persistence, appeals, certificate rules,
                  and support before enrolling.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Enroll unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
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
                  Certificate unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No course, learner, or certificate claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A course concept does not prove curriculum, instructor,
                    learner, enrollment, progress, grade, rating, price,
                    credential, employment, earnings, or educational outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Learner-progress governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real learner-progress system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated learner, instructor, curriculum, course version, enrollment, organization, locale, timestamp, and source provenance",
                "Course quality, author authorization, objectives, accessibility, localization, assessment, grading, feedback, appeals, and support",
                "Learner privacy, consent, safeguarding, sensitive data, retention, deletion, export, moderation, and incident response",
                "Certificate rules, verification, revocation, completion evidence, issuer identity, academic integrity, and legal review",
                "Pricing, earnings, reward, employment, investment, blockchain, AI, health, financial, and user-impact claims require domain review",
                "Enroll, start, submit, grade, publish, issue, revoke, share, export, notify, and accountable approval require governed controls",
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
              title: "Student-progress surface preserved",
              description:
                "Foundations, technology, AI, community courses, filters, learning paths, assessments, instructors, enroll, start, submit, certificates, save/reset, and gates remain interactive.",
              icon: GraduationCap,
              status: "Local courses",
            },
            {
              title: "No progress theater",
              description:
                "Courses, instructors, learners, progress, grades, ratings, prices, certificates, employment, earnings, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Safeguarding before enrollment",
              description:
                "Real education requires governed curriculum, instructor authorization, privacy, accessibility, assessment, learner support, appeals, certificate rules, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
