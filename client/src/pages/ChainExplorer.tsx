import { useMemo, useState } from "react";
import {
  Blocks,
  Database,
  Fingerprint,
  Globe2,
  KeyRound,
  LockKeyhole,
  Search,
  ShieldCheck,
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

type ExplorerCapability = {
  title: string;
  description: string;
  icon: typeof Blocks;
};

const explorerCapabilities: ExplorerCapability[] = [
  {
    title: "Network identity and RPC",
    description:
      "No approved network, chain ID, RPC endpoint, provider trust, health, or fallback state is connected.",
    icon: Globe2,
  },
  {
    title: "Blocks and transactions",
    description:
      "Indexed blocks, transactions, receipts, confirmations, timestamps, finality, and reorg handling are not available.",
    icon: Blocks,
  },
  {
    title: "Addresses and privacy",
    description:
      "Address validation, chain-specific formats, token metadata, privacy redaction, and abuse controls are not configured.",
    icon: Fingerprint,
  },
  {
    title: "Indexing and access",
    description:
      "Indexer consistency, pagination, rate limits, caching, audit logs, credentials, and least-privilege access are not verified.",
    icon: Database,
  },
];

export default function ChainExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      explorerCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="chain-explorer-title"
    >
      <div data-ui-polish="batch-183" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Blockchain boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="chain-explorer-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Chain explorer readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe chain exploration without pretending
                  that a network, block, transaction, address, confirmation, or
                  provider response is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Search chain unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Chain explorer status"
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
                    Truthful explorer state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No network, block, transaction, receipt, address, token,
                    confirmation, or provider status is loaded.
                  </CardDescription>
                </div>
                <KeyRound
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified chain-exploration service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define approved networks, RPC trust,
                  indexing, address privacy, confirmation/finality, reorg
                  handling, rate limits, provider failures, and response
                  provenance before this route can report chain data.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable chain explorer actions"
              >
                {[
                  "Choose network",
                  "Search block",
                  "Inspect transaction",
                  "Inspect address",
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
                These safeguards must be verified before explorer controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Network name, chain ID, address format, RPC provenance, provider
                trust, health, fallback, and environment.
              </p>
              <p>
                Block/transaction indexing, receipts, confirmations, finality,
                timestamps, pagination, and reorg semantics.
              </p>
              <p>
                Address privacy, token metadata, abuse controls, rate limits,
                caching, and bounded query behavior.
              </p>
              <p>
                Redacted structured logs, credential isolation, least privilege,
                provider failure handling, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Chain explorer capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not contact RPC providers, expose
              addresses, query transactions, or persist explorer state.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search chain explorer capability notes"
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
