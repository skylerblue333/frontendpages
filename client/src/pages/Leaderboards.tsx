import { useMemo, useState } from "react";
import {
  Award,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Trophy,
  Users,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Participant identity and consent",
    area: "Trust",
    description:
      "No authenticated participant, profile, workspace, privacy preference, consent, eligibility, or ownership record is connected.",
  },
  {
    title: "Score and ranking provenance",
    area: "Data",
    description:
      "No verified event, score, season, timestamp, tie-breaker, source, aggregation, or ranking record is loaded.",
  },
  {
    title: "Rules and competition scope",
    area: "Policy",
    description:
      "No category, period, eligibility rule, opt-out, display name policy, tie handling, or ranking version is configured.",
  },
  {
    title: "Privacy and anti-abuse",
    area: "Safety",
    description:
      "No privacy redaction, age or safeguarding rule, anti-cheat signal, rate limit, anomaly review, moderation, or appeal workflow is verified.",
  },
  {
    title: "Reconciliation and operations",
    area: "Operations",
    description:
      "No score reconciliation, duplicate handling, correction, audit event, cache invalidation, notification, or rollback evidence exists.",
  },
];
export default function Leaderboards() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Leaderboards is unavailable locally. No participant, score, ranking, season, or user-statistics record was loaded or saved."
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
      `${action} is unavailable locally. No participant, score, ranking, season, display name, correction, or user-statistics mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="leaderboards-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Trophy className="size-3.5" aria-hidden="true" />{" "}
                  Ranking-governance readiness
                </Badge>
                <Badge variant="secondary">No score service</Badge>
              </div>
              <h1
                id="leaderboards-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Leaderboards readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the participant, score, ranking, competition-policy,
                privacy, and anti-abuse contracts required for trustworthy
                leaderboards without presenting fabricated scores, rankings,
                seasons, or user statistics.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Score and ranking service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No participant source, score event pipeline, season rules,
                privacy policy, anti-cheat controls, moderation workflow, or
                persistence layer is connected. This is a readiness workspace,
                not a populated ranking board.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Users className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No participants</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No participant, profile, eligibility, consent, display name,
                season, or ranking record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Award className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No verified scores</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No event, score, aggregation, tie-breaker, source, correction,
                or ranking value is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ranking actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No score submission, correction, season creation, display
                update, export, or user-statistics mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Ranking-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads participant data, calculates a rank, changes a score,
              publishes a season, exports statistics, or saves a ranking
              mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Leaderboards readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter ranking-governance requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No ranking-governance notes match “{query}”.
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
                A production leaderboard needs authenticated participant
                ownership, verifiable score provenance, explicit seasons and
                eligibility rules, privacy and opt-out controls, anti-cheat and
                moderation, corrections and appeals, reconciliation,
                auditability, cache and notification management, and tested
                rollback. No score, ranking, season, or user statistic is
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
