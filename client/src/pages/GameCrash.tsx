import { useMemo, useState } from "react";
import {
  Activity,
  CheckCircle2,
  Search,
  ShieldCheck,
  TrendingUp,
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

type CrashBoundary = { title: string; area: string; description: string };
const boundaries: readonly CrashBoundary[] = [
  {
    title: "Jurisdiction, age, and responsible gaming",
    area: "Safety",
    description:
      "No jurisdiction, age verification, geofence, self-exclusion, limit, responsible-gaming, accessibility, or support control is connected.",
  },
  {
    title: "Server-side randomness and round integrity",
    area: "Integrity",
    description:
      "No server-authoritative round, randomness source, crash point, seed commitment, fairness proof, round history, or dispute evidence exists.",
  },
  {
    title: "Wagers, cashout, custody, and payouts",
    area: "Payments",
    description:
      "No wager, wallet, balance, payment authorization, cashout, payout, fee, ledger entry, refund, or reconciliation is loaded.",
  },
  {
    title: "Fraud, moderation, and incident response",
    area: "Governance",
    description:
      "No fraud signal, collusion control, rate limit, abuse review, moderation action, incident workflow, or audit event is available.",
  },
];

export default function GameCrash() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Crash game is unavailable locally. No wager, round, random crash point, balance, cashout, wallet transaction, or payout was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No wager, round, random crash point, balance, cashout, wallet transaction, or payout was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="crash-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <TrendingUp className="size-3.5" aria-hidden="true" />
                  Game safety readiness
                </Badge>
                <Badge variant="secondary">No game service</Badge>
              </div>
              <h1
                id="crash-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Crash game readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review jurisdiction, age, fairness, custody, cashout, fraud, and
                responsible-gaming boundaries without simulating a wager or
                random game round.
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
                Crash-game service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No jurisdictional review, age verification, game server,
                fairness evidence, wallet custody, payout ledger, fraud
                monitoring, or audit stream is connected. This is a planning
                boundary, not an active game or gambling surface.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Crash game readiness status"
        >
          <Card>
            <CardContent className="p-5">
              <Activity
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No player session</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No age, jurisdiction, self-exclusion, limit, accessibility,
                identity, or responsible-gaming state is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wager flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No wager, wallet, balance, payment, cashout, payout, fee,
                refund, or financial ledger can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No game round</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No round, crash point, randomness, win, loss, cashout, payout,
                or fairness result exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Crash-game readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never starts a game,
              wager, random round, wallet action, cashout, or payout.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search crash game readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search game safety requirements"
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
                  No safety notes match “{query}”.
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
                A production game would require jurisdictional and legal review,
                age and responsible-gaming controls, server-authoritative
                randomness, fairness evidence, secure custody, anti-fraud
                controls, payment reconciliation, dispute handling, auditable
                cashouts, and independent operational acceptance.
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
