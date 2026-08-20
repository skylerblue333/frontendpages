import {
  CheckCircle2,
  WalletCards,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const walletFacts = [
  ["Ownership", "Authenticated ownership unavailable"],
  ["Address", "Address not connected"],
  ["Network", "Network identity unavailable"],
  ["Custody", "Custody model unavailable"],
  ["Balance", "Not loaded"],
  ["Assets", "Token and NFT registry unavailable"],
  ["Transactions", "Transaction store unavailable"],
  ["Reconciliation", "Not performed"],
] as const;

export default function UnifiedWallet() {
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={WalletCards}
        title="Unified wallet"
        subtitle="Review wallet readiness without fabricating addresses, balances, assets, custody, keys, transactions, or transfer outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Wallet unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Unified wallet unavailable.</strong> No authenticated owner,
            network/provider registry, wallet connector, custody boundary, asset
            indexer, signer, transaction service, or reconciliation store is
            connected.
          </p>
          <Button onClick={() => undefined} size="sm" variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Read-only wallet preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Verify ownership before display
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fields identify the evidence a production wallet
                  must verify. They do not represent a connected address,
                  balance, token, NFT, signer, transaction, or custody
                  relationship.
                </p>
              </div>
              <WalletCards
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {walletFacts.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Connect wallet unavailable
              </Button>
              <Button disabled variant="outline">
                Send unavailable
              </Button>
              <Button disabled variant="outline">
                Receive unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              No wallet, address, balance, asset, signer, transaction, or
              custody state is loaded.
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Wallet readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Custody actions withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    WalletCards,
                    "Ownership and network",
                    "No authenticated owner, wallet connector, chain identity, or address validation.",
                  ],
                  [
                    KeyRound,
                    "Keys and signing",
                    "No private key, seed phrase, signer, signature, or custody secret is exposed or generated.",
                  ],
                  [
                    WalletCards,
                    "Transfers and reconciliation",
                    "No balance, asset, transaction hash, confirmation, fee, or reconciliation evidence.",
                  ],
                ].map(([Icon, label, description]) => (
                  <div
                    key={label as string}
                    className="flex gap-3 rounded-xl border border-slate-800 p-4"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium">{label as string}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production wallet requires network and address validation,
                  secure connector boundaries, no plaintext keys or seed
                  phrases, transaction signing, replay and duplicate protection,
                  fee and nonce validation, status verification, failure
                  recovery, and reconciliation. It must not imply custodial
                  security without implemented custody controls.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Readiness visible</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Evidence gaps are named.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Transfer blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No signer or balance.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No wallet address, balance, asset ownership, private key, signature,
            transaction, custody, or transfer outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
