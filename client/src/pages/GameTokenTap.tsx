import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Coins,
  HeartHandshake,
  Search,
  ShieldCheck,
  Sparkles,
  WalletCards,
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

type TokenBoundary = { title: string; area: string; description: string };
const boundaries: readonly TokenBoundary[] = [
  {
    title: "Game identity, taps, and anti-cheat scoring",
    area: "Integrity",
    description:
      "No player identity, tap event, combo rule, score, XP, rate limit, anti-cheat signal, replay, or server-authoritative session is loaded.",
  },
  {
    title: "Token rewards, wallet delivery, and accounting",
    area: "Rewards",
    description:
      "No reward rule, token issuance, wallet authorization, transaction hash, idempotency key, custody boundary, tax treatment, or reconciliation is connected.",
  },
  {
    title: "Charity custody, donors, beneficiaries, and impact",
    area: "Impact",
    description:
      "No donation, donor record, beneficiary, restricted-fund policy, Clean Water Initiative transfer, custody evidence, or independently verified impact result is available.",
  },
  {
    title: "Privacy, moderation, disputes, and recovery",
    area: "Governance",
    description:
      "No consent, privacy setting, moderation action, dispute workflow, error recovery, rollback, audit event, or retention policy exists.",
  },
];

export default function GameTokenTap() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Token Tap Frenzy is unavailable locally. No tap session, score, XP, token reward, wallet transaction, donation, or charity-impact result was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No tap session, score, XP, token reward, wallet transaction, donation, or charity-impact result was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="token-tap-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Token-game readiness
                </Badge>
                <Badge variant="secondary">No token game service</Badge>
              </div>
              <h1
                id="token-tap-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Token Tap Frenzy readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review game integrity, rewards, wallet custody, charity
                accounting, privacy, and dispute boundaries without presenting
                fabricated game activity or impact.
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
                Token game service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authoritative game session, anti-cheat service, token ledger,
                wallet custody, charity registry, beneficiary record, or audit
                stream is connected. This is a planning boundary, not an active
                game or impact tracker.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Token tap status"
        >
          <Card>
            <CardContent className="p-5">
              <Coins className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No game session</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No taps, combo, score, XP, rate limit, anti-cheat signal, or
                player state is presented.
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
                No token issuance, wallet, transaction, custody, tax treatment,
                rollback, or reconciliation can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <HeartHandshake
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No impact result</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No donation, donor, beneficiary, water-project transfer, or
                independently verified charity impact exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Token-game readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never starts a tap
              session, issues tokens, sends wallet transactions, posts
              donations, or claims impact.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search token game readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search game and impact requirements"
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
                  No token-game notes match “{query}”.
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
                A production token game needs identity-scoped event provenance,
                anti-cheat validation, idempotent reward issuance, secure
                custody, wallet authorization, financial reconciliation, donor
                and beneficiary records, restricted-fund controls, privacy and
                moderation, dispute recovery, and independently verifiable
                impact evidence.
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
