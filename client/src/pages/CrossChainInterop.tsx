import { useMemo, useState } from "react";
import {
  ArrowLeftRight,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
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

type InteropCapability = {
  title: string;
  description: string;
  icon: typeof Network;
};

const interopCapabilities: InteropCapability[] = [
  {
    title: "Chain and bridge identity",
    description:
      "No source or destination network, chain ID, bridge contract, token mapping, deployment, validator set, route, or security review is verified.",
    icon: Network,
  },
  {
    title: "Quote, limits, and authorization",
    description:
      "No asset, amount, balance, allowance, minimum/maximum, fee, quote expiry, slippage, wallet scope, or signer authorization is connected.",
    icon: WalletCards,
  },
  {
    title: "Transfer lifecycle",
    description:
      "No message ID, nonce, signature, relay, source confirmation, destination transaction, finality threshold, reorg handling, or duplicate prevention exists.",
    icon: GitBranch,
  },
  {
    title: "Recovery and audit",
    description:
      "No failed-transfer state, refund, timeout, retry, pause, incident response, custody boundary, monitoring, or audit evidence is available.",
    icon: FileCheck2,
  },
];

export default function CrossChainInterop() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      interopCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="cross-chain-interop-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Bridge-execution boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="cross-chain-interop-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Cross-chain interoperability readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe bridge-transfer contract without
                  pretending that chain support, routes, quotes, balances,
                  confirmations, or asset movements are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load bridge routes unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Cross-chain interoperability status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful bridge state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No networks, bridge contracts, token mapping, quote,
                    balance, wallet, signature, transfer, destination receipt,
                    or saved movement is loaded or persisted.
                  </CardDescription>
                </div>
                <ArrowLeftRight
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified bridge service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify both chains and bridge
                  deployments, validate limits and quotes, authorize a wallet,
                  sign and relay a message, verify finality, handle reorgs and
                  failures, and provide recovery and audit evidence before this
                  route can move an asset.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable bridge actions"
              >
                {[
                  "Load route",
                  "Get quote",
                  "Review transfer",
                  "Bridge asset",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before bridge controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Networks, chain IDs, bridge contracts, token mappings,
                deployments, validators, routes, and security review.
              </p>
              <p>
                Asset, amount, balance, allowance, limits, fees, quote expiry,
                slippage, wallet scope, and signer authorization.
              </p>
              <p>
                Message ID, nonce, signature, relay, source confirmation,
                destination transaction, finality, reorgs, and duplicates.
              </p>
              <p>
                Failure, refund, timeout, retry, pause, incident response,
                custody, monitoring, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Interoperability capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query chains, load routes,
              calculate quotes, access wallets, sign messages, relay transfers,
              or persist a receipt.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search interoperability capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
