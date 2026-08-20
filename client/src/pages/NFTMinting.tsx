import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Coins,
  FileSearch,
  ImagePlus,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Creator, collection, and contract provenance",
    area: "Provenance",
    description:
      "No creator account, collection identity, contract, chain, token standard, supply, nonce, deployment, or authorization is connected.",
  },
  {
    title: "Media, metadata, and rights validation",
    area: "Content",
    description:
      "No media asset, metadata schema, content hash, storage pin, license, creator right, moderation result, or immutable URI is available.",
  },
  {
    title: "Wallet custody, network, and fee controls",
    area: "Custody",
    description:
      "No wallet owner, signer, network ID, RPC provider, gas estimate, fee currency, balance, approval, or non-plaintext key custody is verified.",
  },
  {
    title: "Transaction lifecycle and reconciliation",
    area: "Transactions",
    description:
      "No unsigned payload, signature, transaction hash, block confirmation, replacement, failure, duplicate guard, receipt, or ownership reconciliation exists.",
  },
  {
    title: "Royalties, privacy, and recovery",
    area: "Governance",
    description:
      "No royalty rule, marketplace compatibility, privacy boundary, phishing warning, retry, rollback, audit trail, or failed-mint recovery workflow is connected.",
  },
];
export default function NFTMinting() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "NFT minting is unavailable locally. No creator, collection, token, wallet, metadata, fee, transaction, or ownership record was loaded or saved."
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
      `${action} is unavailable locally. No creator, collection, token, wallet, metadata, fee, transaction, signing, custody, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="nft-minting-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Sparkles className="size-3.5" aria-hidden="true" />{" "}
                  NFT-minting readiness workspace
                </Badge>
                <Badge variant="secondary">No minting service</Badge>
              </div>
              <h1
                id="nft-minting-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NFTMinting readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review creator authorization, collection provenance, media and
                metadata, network and fee validation, wallet custody,
                transaction state, royalties, privacy, and recovery without
                implying that an NFT can be minted or that a token or financial
                result exists.
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
                NFT minting is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No creator authorization, collection registry, metadata and
                media pipeline, chain provider, secure signer, fee service,
                transaction endpoint, royalty ledger, or reconciliation layer is
                connected. This workspace cannot prepare, sign, submit, confirm,
                or claim a mint.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ImagePlus
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No mint records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No creator, collection, token, media, metadata, contract, chain,
                supply, or authorization record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Coins className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No transaction state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No fee, balance, approval, payload, signature, hash,
                confirmation, failure, receipt, or ownership state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No mint actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No upload, prepare, preview, connect, sign, mint, retry, export,
                or blockchain-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Minting-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              uploads media, connects a wallet, creates metadata, estimates
              fees, signs a payload, submits a transaction, or saves NFT data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NFT minting readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter minting requirements"
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
                  No minting notes match “{query}”.
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
                Production minting requires verified creator and collection
                authorization, durable media and metadata provenance, network
                and fee validation, secure non-plaintext key custody, explicit
                unsigned/signed/submitted/confirmed/failed states, duplicate
                protection, royalty and reconciliation rules, privacy controls,
                and auditable recovery. No creator, collection, token, wallet,
                metadata, fee, transaction, or ownership record is claimed here.
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
