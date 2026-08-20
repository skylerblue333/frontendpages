import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleDollarSign,
  HeartHandshake,
  Search,
  ShieldCheck,
  UsersRound,
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

type CharityBoundary = { title: string; area: string; description: string };
const boundaries: readonly CharityBoundary[] = [
  {
    title: "Game-event provenance and donor identity",
    area: "Participation",
    description:
      "No game-event source, player identity, donor consent, campaign eligibility, anti-abuse signal, or attributable contribution record is loaded.",
  },
  {
    title: "Charity due diligence and beneficiary identity",
    area: "Stewardship",
    description:
      "No charity verification, beneficiary identity, campaign scope, restricted-fund policy, custody arrangement, or allocation rule is connected.",
  },
  {
    title: "Payments, tokens, custody, and reconciliation",
    area: "Finance",
    description:
      "No payment authorization, token transfer, wallet custody, donation ledger, transaction hash, fee, refund, tax treatment, or reconciliation exists.",
  },
  {
    title: "Impact evidence, privacy, and reporting",
    area: "Impact",
    description:
      "No verified impact metric, reporting period, evidence source, privacy control, moderation path, dispute workflow, or audit event is available.",
  },
];

export default function GamingForCharity() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Gaming for charity is unavailable locally. No player, campaign, donation, transfer, charity total, claim, leaderboard, or impact result was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No player, campaign, donation, transfer, charity total, claim, leaderboard, or impact result was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="charity-title"
    >
      <div data-ui-polish="batch-191" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <HeartHandshake className="size-3.5" aria-hidden="true" />
                  Charity readiness
                </Badge>
                <Badge variant="secondary">No charity service</Badge>
              </div>
              <h1
                id="charity-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Gaming for charity readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review participation provenance, donor and beneficiary identity,
                custody, reconciliation, impact evidence, privacy, and reporting
                boundaries without presenting fabricated charitable activity.
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
                Charity service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No game-event ledger, donor or beneficiary registry, charity
                due-diligence record, payment or token custody, allocation
                ledger, or audit stream is connected. This is a planning
                boundary, not an active donation or impact surface.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Gaming for charity status"
        >
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No participation record</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No player, game event, donor consent, campaign eligibility,
                anti-abuse signal, or attributable contribution is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <CircleDollarSign
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No donation flow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No payment, token, wallet, donation ledger, transfer, fee,
                refund, tax treatment, or reconciliation can run.
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
                No charity total, beneficiary, campaign claim, leaderboard,
                verified metric, or on-chain impact evidence exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Charity-readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads players,
              campaigns, donations, charity totals, claims, leaderboards, or
              impact results.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search gaming for charity readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search charity requirements"
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
                  No charity notes match “{query}”.
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
                A production gaming-for-charity program needs game-event
                provenance, donor consent, verified charities and beneficiaries,
                restricted-fund rules, secure payment or token custody,
                allocation and reconciliation, anti-abuse controls, privacy, tax
                and legal review, and independently verifiable impact reporting.
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
