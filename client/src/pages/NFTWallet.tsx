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
    title: "Wallet ownership and network validation",
    area: "Ownership",
    description:
      "No wallet owner, address, chain ID, network, RPC provider, token standard, account type, or ownership proof is connected.",
  },
  {
    title: "Key custody and signer boundaries",
    area: "Custody",
    description:
      "No private key, seed phrase, signer, approval, hardware device, session permission, phishing warning, or non-plaintext custody control is verified.",
  },
  {
    title: "NFT discovery and metadata provenance",
    area: "Assets",
    description:
      "No collection index, token ID, contract, creator, metadata URI, media, ownership event, content hash, or refresh timestamp is available.",
  },
  {
    title: "Transaction lifecycle and approvals",
    area: "Transactions",
    description:
      "No unsigned payload, signature, fee estimate, approval, transfer, hash, confirmation, failure, replacement, duplicate guard, or receipt exists.",
  },
  {
    title: "Privacy, recovery, and reconciliation",
    area: "Governance",
    description:
      "No address privacy rule, export, revocation, recovery, cross-chain reconciliation, audit trail, or failed-operation workflow is connected.",
  },
];
export default function NFTWallet() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "NFT wallet is unavailable locally. No owner, address, network, key, token, metadata, approval, transaction, or asset record was loaded or saved."
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
      `${action} is unavailable locally. No owner, address, network, key, token, metadata, approval, transaction, signing, custody, or asset-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="nft-wallet-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <WalletCards className="size-3.5" aria-hidden="true" />{" "}
                  NFT-wallet readiness workspace
                </Badge>
                <Badge variant="secondary">No wallet connected</Badge>
              </div>
              <h1
                id="nft-wallet-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NFTWallet readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review wallet ownership, network validation, token discovery,
                metadata provenance, signer custody, approvals, transaction
                states, privacy, recovery, and reconciliation without implying
                that a wallet, NFT, address, or balance exists.
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
                NFT wallet is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No wallet connector, chain provider, ownership verifier, NFT
                index, metadata source, secure signer, transaction endpoint,
                approval tracker, or persistence layer is connected. This
                workspace cannot connect, reveal, approve, transfer, sign, or
                claim NFT ownership.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No wallet records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No owner, address, chain, network, token, collection, metadata,
                or ownership event is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Network
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No transaction state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No approval, fee, payload, signature, hash, confirmation,
                failure, receipt, or reconciliation state exists.
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
                No connect, discover, approve, transfer, sign, refresh, export,
                revoke, or NFT-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>NFT-wallet governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects a wallet, exposes an address, queries tokens, verifies
              ownership, requests approval, signs a payload, or saves wallet
              data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NFT wallet readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter wallet requirements"
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
                  No wallet notes match “{query}”.
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
                Production NFT wallets require verified ownership and network
                controls, secure non-plaintext signer custody, explicit token
                and metadata provenance, allowance and approval safety,
                signed/submitted/confirmed/failed transaction states, duplicate
                protection, privacy and recovery controls, cross-chain
                reconciliation, and auditability. No owner, address, network,
                key, token, metadata, approval, transaction, or asset record is
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
