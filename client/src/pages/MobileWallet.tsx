import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FileSearch,
  KeyRound,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Authenticated ownership and account boundary",
    area: "Ownership",
    description:
      "No authenticated owner, wallet account, address, chain identity, role, consent, device binding, or ownership proof is connected.",
  },
  {
    title: "Network, provider, and address validation",
    area: "Network",
    description:
      "No chain, network ID, RPC provider, address checksum, token standard, fee source, block explorer, or provider health is verified.",
  },
  {
    title: "Key custody and signing security",
    area: "Custody",
    description:
      "No private key, seed phrase, signer, hardware boundary, encryption, backup, recovery, approval, or secret-storage policy exists.",
  },
  {
    title: "Transaction lifecycle and reconciliation",
    area: "Transactions",
    description:
      "No intent, amount, asset, destination, fee, nonce, signature, hash, pending state, confirmation, failure, replacement, or balance reconciliation is available.",
  },
  {
    title: "Fraud prevention, privacy, and recovery",
    area: "Safety",
    description:
      "No replay guard, duplicate-submission guard, rate limit, phishing warning, privacy rule, audit log, incident process, or recovery evidence is configured.",
  },
];
export default function MobileWallet() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile wallet is unavailable locally. No owner, address, chain, key, balance, transaction, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No owner, address, chain, key, balance, transaction, signing, custody, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-wallet-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <WalletCards className="size-3.5" aria-hidden="true" />{" "}
                  Wallet-security readiness
                </Badge>
                <Badge variant="secondary">No custody connected</Badge>
              </div>
              <h1
                id="mobile-wallet-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileWallet readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review authenticated ownership, network and address validation,
                key custody, signing, transaction lifecycle, reconciliation,
                fraud prevention, privacy, and recovery without implying that a
                wallet, balance, transaction, or private key exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mobile wallet is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated wallet owner, chain provider, address
                validator, secure signer, transaction service, reconciliation
                layer, or persistence system is connected. This workspace cannot
                create, import, sign, send, receive, or claim a wallet
                transaction.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Network
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wallet records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No owner, address, chain, network, asset, balance, token,
                provider, or wallet account is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <KeyRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No signing state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No key, seed phrase, signer, intent, signature, transaction
                hash, confirmation, or failure state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wallet actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No create, import, connect, sign, send, receive, swap, backup,
                export, or wallet-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Wallet-security requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads an address, connects a provider, accesses a key, signs a
              transaction, changes a balance, or saves wallet data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile wallet readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter wallet-security requirements"
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
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No wallet-security notes match “{query}”.
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
                Production wallet functionality requires authenticated
                ownership, validated chain and addresses, secure non-plaintext
                key custody, explicit transaction lifecycle states, signature
                and hash verification, balance reconciliation, replay and
                duplicate guards, phishing protection, privacy, auditability,
                and tested recovery. No owner, address, chain, key, balance,
                transaction, or financial record is claimed here.
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
