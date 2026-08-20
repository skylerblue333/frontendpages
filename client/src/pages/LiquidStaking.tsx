import { useMemo, useState } from "react";
import {
  Coins,
  FileWarning,
  KeyRound,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Waves,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Wallet ownership and network",
    area: "Access",
    description:
      "No authenticated wallet owner, address, network, chain identifier, staking account, custody mode, or authorization record is connected.",
  },
  {
    title: "Validator and protocol state",
    area: "Protocol",
    description:
      "No validator, delegation pool, protocol version, commission, epoch, lock period, slashing rule, oracle, or network health record is verified.",
  },
  {
    title: "Rewards, shares, and balances",
    area: "Accounting",
    description:
      "No token balance, share price, reward rate, APR, fee, accrued reward, exchange rate, or accounting ledger is loaded.",
  },
  {
    title: "Transaction and key security",
    area: "Custody",
    description:
      "No unsigned transaction, signature, nonce, private key, seed phrase, approval, transaction hash, confirmation, or failure state exists.",
  },
  {
    title: "Reconciliation and recovery",
    area: "Operations",
    description:
      "No chain reconciliation, duplicate submission guard, reward claim record, audit event, incident, rollback, or recovery evidence is available.",
  },
];
export default function LiquidStaking() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LiquidStaking is unavailable locally. No wallet, network, validator, token balance, reward, yield, or transaction was loaded or saved."
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
      `${action} is unavailable locally. No wallet, stake, delegation, reward, claim, key, transaction, balance, or financial mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="liquid-staking-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Waves className="size-3.5" aria-hidden="true" /> Staking-risk
                  readiness
                </Badge>
                <Badge variant="secondary">No staking service</Badge>
              </div>
              <h1
                id="liquid-staking-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Liquid Staking readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review wallet ownership, network, validator, protocol, rewards,
                custody, transaction, and reconciliation contracts without
                implying that staking balances, yields, rewards, validator
                positions, or transaction outcomes exist.
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
                Staking service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No wallet connector, chain RPC, validator registry, staking
                protocol, custody boundary, reward ledger, transaction signer,
                or persistence layer is connected. This is a readiness
                workspace, not a staking console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wallet or protocol</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No owner, address, network, validator, delegation pool, epoch,
                lock period, or protocol state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Coins className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No rewards or balances</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No token balance, share price, APR, fee, reward rate, accrued
                reward, exchange rate, or ledger is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No staking actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No stake, delegate, undelegate, claim, withdraw, sign, submit,
                or crypto mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Staking-risk governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects a wallet, queries a chain, calculates yield, signs a
              transaction, claims rewards, or saves a staking mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Liquid Staking readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter staking-risk requirements"
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
                  No staking-risk notes match “{query}”.
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
                A production liquid-staking system needs verified wallet
                ownership and network, validated protocol and validator state,
                secure key boundaries, deterministic transaction construction
                and confirmation, reward and share accounting, slashing and lock
                handling, chain reconciliation, idempotency, auditability, and
                tested recovery. No staking balance, yield, reward, or
                transaction state is claimed here.
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
