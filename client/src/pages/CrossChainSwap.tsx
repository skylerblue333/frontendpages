import { useMemo, useState } from "react";
import {
  ArrowLeftRight,
  Calculator,
  FileCheck2,
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

type SwapCapability = {
  title: string;
  description: string;
  icon: typeof Network;
};

const swapCapabilities: SwapCapability[] = [
  {
    title: "Network, pair, and liquidity identity",
    description:
      "No network, chain ID, token pair, token decimals, pool, router, liquidity source, market status, or route is connected.",
    icon: Network,
  },
  {
    title: "Quote, balance, and risk controls",
    description:
      "No wallet balance, allowance, price, quote expiry, minimum output, slippage, fee, price impact, gas estimate, or limit is verified.",
    icon: Calculator,
  },
  {
    title: "Authorization and execution",
    description:
      "No wallet scope, approval, signature, nonce, replay protection, transaction, order state, confirmation, or settlement is available.",
    icon: WalletCards,
  },
  {
    title: "Failure and compliance",
    description:
      "No failed swap, timeout, retry, refund, pause, sanctions check, jurisdiction rule, incident response, or audit evidence is configured.",
    icon: FileCheck2,
  },
];

export default function CrossChainSwap() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      swapCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="cross-chain-swap-title"
    >
      <div data-ui-polish="batch-185" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Swap-execution boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="cross-chain-swap-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Cross-chain swap readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe swap contract without pretending
                  that token pairs, liquidity, prices, quotes, balances,
                  approvals, or settlements are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load swap service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Cross-chain swap status"
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
                    Truthful swap state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No networks, token pair, liquidity, price, quote, balance,
                    wallet, approval, signature, transaction, settlement, or
                    saved order is loaded or persisted.
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
                  No verified swap service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify the network, pair, liquidity and
                  route, validate balances and quote risk, authorize wallet
                  approvals and signing, track execution and finality, handle
                  failures, and enforce compliance before this route can execute
                  a swap.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable swap actions"
              >
                {["Load pair", "Get quote", "Review order", "Execute swap"].map(
                  label => (
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
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before swap controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Network, chain ID, token pair, decimals, pool, router, liquidity
                source, market status, and route.
              </p>
              <p>
                Balance, allowance, price, quote expiry, minimum output,
                slippage, fees, impact, gas, and limits.
              </p>
              <p>
                Wallet scope, approval, signature, nonce, replay protection,
                transaction, order state, confirmation, and settlement.
              </p>
              <p>
                Failure, timeout, retry, refund, pause, sanctions, jurisdiction,
                incident response, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Swap capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query liquidity, calculate a
              price, access wallets, request approval, sign a transaction,
              execute a swap, or persist an order.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search swap capability notes"
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
