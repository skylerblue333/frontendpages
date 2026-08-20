import { useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  FileText,
  Filter,
  GraduationCap,
  LockKeyhole,
  MessageCircle,
  RefreshCw,
  ShieldAlert,
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
const lessons = [
  {
    id: 1,
    name: "Foundations lesson",
    category: "Foundations",
    detail:
      "A local lesson concept requiring content provenance, learning objective, version, accessibility, resource licensing, learner access, and completion semantics.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Wallet safety lesson",
    category: "Technology",
    detail:
      "A safety-learning concept requiring accurate source review, risk boundaries, no custody promise, privacy, assessment, and support.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "AI workflow lesson",
    category: "AI",
    detail:
      "An AI lesson concept requiring model disclosure, prompt privacy, evaluation, copyright, accessibility, and responsible-use review.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Community practice lesson",
    category: "Community",
    detail:
      "A community lesson concept requiring moderation, safeguarding, inclusive discussion, resources, notes, and appeals.",
    state: "Blocked",
  },
];
export default function SchoolLesson() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [resource, setResource] = useState("Resource access not configured");
  const [discussion, setDiscussion] = useState(
    "Discussion mode not configured"
  );
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(lessons.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      lessons.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const lesson = lessons.find(item => item.id === selected) ?? lessons[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setResource("Resource access not configured");
    setDiscussion("Discussion mode not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={BookOpen}
        eyebrow="School lesson · Learning preview"
        title="Deliver the lesson only after the learning record is real."
        description="Explore local foundations, technology, AI, and community lesson concepts with search, category filters, resource and discussion intent, progress/assessment/accessibility gates, save/reset, and blocked playback/completion actions. No lesson content, learner, progress, resource, discussion, grade, XP, reward, or educational outcome is connected."
        badge="Lesson-delivery workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save lesson locally"}
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
            {showGates ? "Close gates" : "Review lesson gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset lesson
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Lesson concepts",
              value: `${lessons.length} local`,
              hint: "No content source",
              icon: BookOpen,
              tone: "cyan",
            },
            {
              label: "Resources",
              value: "Unavailable",
              hint: "No asset source",
              icon: FileText,
              tone: "violet",
            },
            {
              label: "Discussion",
              value: "Unconfigured",
              hint: "No community source",
              icon: MessageCircle,
              tone: "amber",
            },
            {
              label: "Completion",
              value: "Blocked",
              hint: "No learner source",
              icon: GraduationCap,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Lesson evidence boundary">
          <strong>
            This is a local lesson-delivery preview, not evidence that content,
            a learner, a resource, a discussion, or completion exists.
          </strong>{" "}
          Lesson cards, filters, resource and discussion intent, saved state,
          accessibility/progress gates, and disabled playback/completion actions
          are browser concepts. No lesson, learner, enrollment, progress,
          resource, post, grade, XP, reward, certificate, or educational outcome
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
                  placeholder="Search local school lessons"
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
                    Selected lesson concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{lesson.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {lesson.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {lesson.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: lesson.category },
                  { label: "Resources", value: resource },
                  { label: "Discussion", value: discussion },
                  { label: "Progress", value: "Unavailable" },
                  { label: "Assessment", value: "Unconfigured" },
                  { label: "Completion", value: "Blocked" },
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
                  Resource intent
                  <select
                    value={resource}
                    onChange={event => setResource(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Resource access not configured</option>
                    <option>Licensed reading intent</option>
                    <option>Downloadable asset intent</option>
                    <option>Accessible alternative intent</option>
                    <option>Reference-only intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Discussion mode
                  <select
                    value={discussion}
                    onChange={event => setDiscussion(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Discussion mode not configured</option>
                    <option>Private notes intent</option>
                    <option>Moderated discussion intent</option>
                    <option>Instructor Q&A intent</option>
                    <option>No-discussion intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <BookOpen className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No lesson evidence loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed lesson content, learner access, resource
                  licensing, accessibility, progress events, assessment,
                  discussion moderation, privacy, safeguarding, and support
                  before playback.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Play unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Mark complete unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Download unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Post unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No lesson or completion claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A lesson concept does not prove content delivery, a learner,
                    access, progress, completion, grade, resource license,
                    discussion, XP, reward, or educational outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Lesson-delivery gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real lesson system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated learner, course, lesson, version, access, organization, locale, timestamp, and content provenance",
                "Instructional quality, objective, resource license, accessibility, localization, transcript, caption, alternative format, and support",
                "Progress events, completion semantics, assessment, integrity, feedback, appeals, privacy, retention, deletion, and recovery",
                "Discussion moderation, safeguarding, anti-abuse controls, learner identity, consent, reporting, and incident response",
                "XP, reward, token, wallet, chain, certificate, employment, earnings, AI, financial, and user-impact claims require domain review",
                "Play, pause, resume, complete, download, post, report, export, notify, accessibility, and accountable approval require governed controls",
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
              title: "Lesson surface preserved",
              description:
                "Foundations, technology, AI, community lessons, filters, resources, notes, discussions, progress, play, complete, download, post, save/reset, and gates remain interactive.",
              icon: BookOpen,
              status: "Local lessons",
            },
            {
              title: "No completion theater",
              description:
                "Content, learners, access, progress, resources, discussions, grades, XP, rewards, certificates, and education outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Delivery before progress",
              description:
                "Real lessons require governed content, access, licensing, accessibility, progress events, assessment, moderation, privacy, and support.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
