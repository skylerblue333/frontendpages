import { useMemo, useState } from "react";
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
import {
  Activity,
  Coins,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

type DefiCapability = {
  title: string;
  description: string;
  icon: typeof Coins;
};

const defiCapabilities: DefiCapability[] = [
  {
    title: "Chain and contract identity",
    description:
      "No network, chain ID, RPC, protocol, contract address, ABI, deployment provenance, upgrade state, or provider health is verified.",
    icon: GitBranch,
  },
  {
    title: "Markets, liquidity, and lending",
    description:
      "No token pair, price, TVL, APY, volume, pool, reserves, oracle, collateral, borrow, liquidation, fee, or utilization data is connected.",
    icon: Coins,
  },
  {
    title: "Wallet authorization and execution",
    description:
      "No wallet, account, allowance, signature, quote, slippage, gas, MEV protection, transaction simulation, status, receipt, or settlement is available.",
    icon: WalletCards,
  },
  {
    title: "Risk, custody, and reconciliation",
    description:
      "No custody boundary, monitoring, incident response, bridge recovery, reconciliation, audit trail, sanctions review, or financial outcome is configured.",
    icon: FileCheck2,
  },
];

export default function DeFi() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      defiCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="defi-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  On-chain operations boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="defi-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  DeFi readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a verifiable decentralized-finance
                  contract without pretending that networks, protocols,
                  liquidity, yield, wallets, transactions, or financial outcomes
                  are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load DeFi service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="DeFi status"
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
                    Truthful DeFi state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No network, protocol, contract, market, wallet, balance,
                    position, transaction, yield, or saved DeFi record is loaded
                    or persisted.
                  </CardDescription>
                </div>
                <Activity
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified DeFi service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish chain and contract identity,
                  provider and price provenance, wallet authorization,
                  simulation and status, slippage and MEV controls, custody
                  boundaries, monitoring, reconciliation, and failure recovery
                  before this route can move assets or represent yield.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable DeFi actions"
              >
                {[
                  "Load protocol",
                  "Review quote",
                  "Connect wallet",
                  "Execute transaction",
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
                These safeguards must be verified before DeFi controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Network, chain ID, RPC, protocol, contracts, ABIs, deployment
                provenance, upgrades, and provider health.
              </p>
              <p>
                Pairs, prices, TVL, APY, volume, pools, reserves, oracles,
                collateral, borrows, liquidations, fees, and utilization.
              </p>
              <p>
                Wallets, accounts, allowances, signatures, quotes, slippage,
                gas, MEV, simulation, status, receipts, and settlement.
              </p>
              <p>
                Custody, monitoring, incidents, bridge recovery, reconciliation,
                audit, sanctions, and non-advice disclosures.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>DeFi capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query chains, read balances,
              show prices or yield, access wallets, calculate returns, or
              execute an on-chain action.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search DeFi capability notes"
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
