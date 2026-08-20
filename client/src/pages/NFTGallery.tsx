import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BadgeCheck,
  FileSearch,
  Image,
  KeyRound,
  LockKeyhole,
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
    title: "Collection and asset provenance",
    area: "Metadata",
    description:
      "No collection, token ID, contract, chain, creator, media URI, metadata version, authenticity, or content hash is connected.",
  },
  {
    title: "Ownership and network verification",
    area: "Ownership",
    description:
      "No wallet owner, address, network ID, RPC provider, token standard, transfer event, block confirmation, or ownership proof is verified.",
  },
  {
    title: "Metadata, rights, and content safety",
    area: "Content",
    description:
      "No metadata, artwork, license, creator rights, content warning, takedown, moderation, storage pin, or availability state is available.",
  },
  {
    title: "Marketplace, royalties, and valuation",
    area: "Commerce",
    description:
      "No listing, bid, sale, floor price, royalty rule, currency, fee, escrow, transfer, market source, or valuation is connected.",
  },
  {
    title: "Custody, privacy, and recovery",
    area: "Safety",
    description:
      "No private key, signer, approval, transaction lifecycle, phishing warning, privacy rule, audit trail, or failed-operation recovery exists.",
  },
];
export default function NFTGallery() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "NFT gallery is unavailable locally. No collection, token, owner, wallet, metadata, listing, transfer, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No collection, token, owner, wallet, metadata, listing, transfer, signing, custody, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="nft-gallery-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Image className="size-3.5" aria-hidden="true" /> NFT-custody
                  readiness workspace
                </Badge>
                <Badge variant="secondary">No collection connected</Badge>
              </div>
              <h1
                id="nft-gallery-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NFTGallery readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review collection provenance, token and network validation,
                ownership, metadata, creator rights, royalties, marketplace
                state, custody, privacy, and recovery without implying that
                NFTs, wallets, transfers, or financial outcomes exist.
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
                NFT gallery is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No collection index, chain provider, ownership verifier,
                metadata source, media store, marketplace, secure signer,
                royalty ledger, or persistence layer is connected. This
                workspace cannot reveal, mint, transfer, list, buy, sell, or
                claim an NFT.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Image className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No asset records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No collection, token, contract, chain, creator, artwork,
                metadata, hash, license, or content record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ownership state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No owner, wallet, network, transfer, listing, bid, sale,
                royalty, fee, or transaction state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No gallery actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No view, connect, mint, transfer, list, buy, sell, sign, export,
                or NFT-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>NFT-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads a token, connects a wallet, verifies ownership, reveals
              media, signs a transaction, changes a listing, or saves NFT data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NFT gallery readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter NFT requirements"
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
                  No NFT notes match “{query}”.
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
                Production NFT functionality requires verified collection and
                token provenance, network and ownership proofs, trustworthy
                metadata and media storage, rights and content controls,
                marketplace and royalty accounting, secure non-plaintext key
                custody, explicit transaction states, and auditable recovery. No
                collection, token, owner, wallet, metadata, listing, transfer,
                or financial record is claimed here.
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
