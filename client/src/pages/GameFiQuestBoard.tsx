import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  Medal,
  Search,
  ShieldCheck,
  WalletCards,
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

type QuestBoundary = { title: string; area: string; description: string };
const boundaries: readonly QuestBoundary[] = [
  {
    title: "Quest identity, events, and anti-cheat",
    area: "Integrity",
    description:
      "No account or game identity, quest definition, completion event, event provenance, anti-cheat signal, replay, or server-authoritative progress is loaded.",
  },
  {
    title: "Progress, rankings, streaks, and bonuses",
    area: "Progress",
    description:
      "No progress record, ranking, streak, daily bonus, XP balance, timestamp, eligibility rule, or dispute evidence exists.",
  },
  {
    title: "Token rewards, wallet delivery, and idempotency",
    area: "Rewards",
    description:
      "No reward rule, token issuance, wallet authorization, transaction hash, idempotency key, tax treatment, rollback, or reconciliation is connected.",
  },
  {
    title: "Claims, privacy, and charity impact",
    area: "Governance",
    description:
      "No claim action, donor or beneficiary record, restricted-fund policy, privacy control, moderation state, or independently verified impact evidence is available.",
  },
];

export default function GameFiQuestBoard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "GameFi quests are unavailable locally. No quest, progress, ranking, XP, token issuance, wallet transaction, claim, or charity-impact result was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No quest, progress, ranking, XP, token issuance, wallet transaction, claim, or charity-impact result was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="quest-board-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <ClipboardList className="size-3.5" aria-hidden="true" />
                  Quest rewards readiness
                </Badge>
                <Badge variant="secondary">No quest service</Badge>
              </div>
              <h1
                id="quest-board-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                GameFi quest board readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review quest integrity, progress, rankings, rewards, wallet
                delivery, claims, privacy, and charity-evidence boundaries
                without presenting fabricated game activity.
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
                Quest service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authoritative quest catalog, event ledger, anti-cheat
                service, reward system, wallet authorization, claims ledger,
                charity registry, or audit stream is connected. This is a
                planning boundary, not an active quest board.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="GameFi quest status"
        >
          <Card>
            <CardContent className="p-5">
              <Medal className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No quest progress</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No quest, event, completion, anti-cheat signal, progress,
                ranking, streak, bonus, or XP state is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No reward flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reward rule, token issuance, wallet, transaction, claim, fee,
                tax treatment, rollback, or reconciliation can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No impact result</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No donation, donor, beneficiary, payout, charity custody, or
                independently verified impact exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>GameFi-quest readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads quests,
              records progress, issues rewards, sends wallet transactions, or
              posts claims.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search GameFi quest readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search quest requirements"
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
                  No quest notes match “{query}”.
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
                A production quest system needs account and game identity,
                server-authoritative event provenance, anti-cheat validation,
                idempotent reward issuance, secure wallet authorization, tax and
                rollback controls, claims reconciliation, privacy and
                moderation, and independently verifiable impact evidence.
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
