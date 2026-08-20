import { useMemo, useState } from "react";
import {
  Blocks,
  CheckCircle2,
  CircleDollarSign,
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

type BuilderBoundary = { title: string; area: string; description: string };
const boundaries: readonly BuilderBoundary[] = [
  {
    title: "Game identity, level state, and anti-cheat",
    area: "Integrity",
    description:
      "No player identity, session, level, score, XP, gameplay event, anti-cheat signal, replay, or server-authoritative result is loaded.",
  },
  {
    title: "Rewards, token accounting, and custody",
    area: "Rewards",
    description:
      "No reward rule, token balance, issuance event, wallet, custody boundary, transaction hash, fee, or reconciliation is connected.",
  },
  {
    title: "Charity, donor, and beneficiary records",
    area: "Impact",
    description:
      "No donation, donor consent, charity, beneficiary, restricted-fund policy, custody, disbursement, or independently verified impact record exists.",
  },
  {
    title: "Safety, moderation, and reporting",
    area: "Governance",
    description:
      "No age or accessibility control, abuse report, moderation decision, fraud signal, privacy policy, audit event, or incident workflow is available.",
  },
];

export default function GameBlockBuilder() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Block Builder is unavailable locally. No scores, XP, tokens, donations, wallet transactions, payouts, or charity-impact results were started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No scores, XP, tokens, donations, wallet transactions, payouts, or charity-impact results were started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="block-builder-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Blocks className="size-3.5" aria-hidden="true" />
                  Game rewards readiness
                </Badge>
                <Badge variant="secondary">No game service</Badge>
              </div>
              <h1
                id="block-builder-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Block Builder readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review game integrity, rewards, token accounting, charity
                custody, safety, and impact-evidence boundaries without
                presenting fabricated gameplay or donation results.
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
                Block Builder service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authoritative game server, anti-cheat system, reward ledger,
                wallet custody, charity registry, donor records, disbursement
                controls, or audit stream is connected. This is a planning
                boundary, not an active game or impact tracker.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Block Builder status"
        >
          <Card>
            <CardContent className="p-5">
              <Trophy className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No game session</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No player, level, score, XP, gameplay event, anti-cheat signal,
                replay, or server result is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CircleDollarSign
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No reward flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reward rule, token balance, issuance, wallet, custody,
                transaction, fee, or reconciliation can run.
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
                No donation, donor, charity, beneficiary, disbursement, payout,
                or independently verified impact exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Block-Builder readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never starts
              gameplay, scorekeeping, rewards, wallet actions, donations, or
              payouts.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Block Builder readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search game reward requirements"
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
                  No reward notes match “{query}”.
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
                A production game would require server-authoritative identity
                and scoring, anti-cheat controls, transparent reward rules,
                secure token custody, charity and beneficiary verification,
                restricted-fund controls, donor consent, independently
                reconciled disbursements, safety controls, and auditable impact
                evidence.
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
