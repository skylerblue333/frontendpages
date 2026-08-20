import { useMemo, useState } from "react";
import {
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Search,
  ShieldCheck,
  Trophy,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type QuizBoundary = { title: string; area: string; description: string };
const boundaries: readonly QuizBoundary[] = [
  {
    title: "Question bank and secure content delivery",
    area: "Curriculum",
    description:
      "No reviewed question bank, learning objective, content version, answer key, accessibility review, or secure delivery service is connected.",
  },
  {
    title: "Server-side grading and progress",
    area: "Assessment",
    description:
      "No server-side grading, attempt record, identity scope, score, streak, XP, completion state, or anti-cheating evidence exists.",
  },
  {
    title: "Rewards, donations, and education-fund accounting",
    area: "Rewards",
    description:
      "No reward rule, token balance, donation, education-fund transfer, beneficiary, custody boundary, or independently reconciled impact record is available.",
  },
  {
    title: "Privacy, feedback, and recovery",
    area: "Governance",
    description:
      "No consent, privacy setting, feedback review, dispute workflow, rate limit, audit event, error recovery, or retention policy is connected.",
  },
];

export default function GameCryptoQuiz() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Crypto Quiz Blitz is unavailable locally. No questions, attempts, answers, scores, streaks, XP, donations, or education-fund results were started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No questions, attempts, answers, scores, streaks, XP, donations, or education-fund results were started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="crypto-quiz-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BookOpenCheck className="size-3.5" aria-hidden="true" />
                  Learning assessment readiness
                </Badge>
                <Badge variant="secondary">No quiz service</Badge>
              </div>
              <h1
                id="crypto-quiz-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Crypto Quiz Blitz readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review question governance, assessment integrity, learner
                progress, rewards, and education-impact boundaries without
                presenting fabricated quiz activity.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Crypto Quiz service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No reviewed content bank, learner identity, grading service,
                progress ledger, reward accounting, education-fund registry, or
                audit stream is connected. This is a planning boundary, not an
                active assessment or impact tracker.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Crypto quiz status"
        >
          <Card>
            <CardContent className="p-5">
              <ClipboardCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No assessment</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No question, answer, attempt, score, streak, XP, grade,
                completion, or anti-cheating state is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Trophy className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No reward flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reward rule, token balance, donation, education-fund
                transfer, beneficiary, or reconciliation can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No learner result</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No learning outcome, accuracy, progress, educational impact, or
                certification claim exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Crypto-quiz readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads
              questions, records attempts, grades answers, issues rewards, or
              posts donations.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search crypto quiz readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search assessment requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No assessment notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production learning assessment needs reviewed curriculum,
                secure content delivery, server-side grading, identity-scoped
                progress, anti-cheating controls, accessibility, privacy,
                feedback and appeal workflows, transparent reward rules, and
                independently reconciled education-impact evidence.
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
