import { useMemo, useState } from "react";
import {
  FileCheck2,
  Landmark,
  LockKeyhole,
  Search,
  ShieldCheck,
  Vote,
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

type TreasuryCapability = {
  title: string;
  description: string;
  icon: typeof Landmark;
};

const treasuryCapabilities: TreasuryCapability[] = [
  {
    title: "Custody and asset ledger",
    description:
      "No DAO identity, wallet, signer set, network, asset, balance, valuation, custody policy, ledger entry, or reconciliation record is connected.",
    icon: WalletCards,
  },
  {
    title: "Proposals and voting",
    description:
      "No proposal, proposer, agenda, quorum, voting power, delegation, eligibility, vote, execution threshold, or finalized decision is verified.",
    icon: Vote,
  },
  {
    title: "Transfers and controls",
    description:
      "No recipient, amount, asset, allowance, multisig approval, timelock, transfer, failure, cancellation, or settlement is available.",
    icon: Landmark,
  },
  {
    title: "Risk, reporting, and audit",
    description:
      "No permissions, segregation of duties, limits, sanctions check, risk review, statement, valuation, incident response, or audit evidence is configured.",
    icon: FileCheck2,
  },
];

export default function DAOTreasury() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      treasuryCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="dao-treasury-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Treasury-governance boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="dao-treasury-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  DAO treasury readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a controlled treasury-governance workflow
                  without pretending that custody, balances, proposals, votes,
                  transfers, or financial outcomes are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load treasury service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="DAO treasury status"
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
                    Truthful treasury state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No DAO, wallet, signer, asset, balance, valuation, proposal,
                    vote, transfer, or saved treasury record is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <Landmark
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified DAO-treasury service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish custody and signer authority,
                  reconcile assets, define proposal and voting rules, enforce
                  transfer safeguards, separate duties, handle failures, and
                  provide financial and audit evidence before this route can
                  govern funds.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable treasury actions"
              >
                {[
                  "Load treasury",
                  "Create proposal",
                  "Review vote",
                  "Authorize transfer",
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
                These safeguards must be verified before treasury controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                DAO identity, wallets, signers, networks, assets, balances,
                valuation, custody policy, ledger, and reconciliation.
              </p>
              <p>
                Proposal, proposer, agenda, quorum, voting power, delegation,
                eligibility, vote, threshold, and final decision.
              </p>
              <p>
                Recipient, amount, asset, allowance, multisig, timelock,
                transfer, failure, cancellation, and settlement.
              </p>
              <p>
                Permissions, segregation of duties, limits, sanctions, risk
                review, statements, valuation, incidents, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>DAO treasury capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query wallets, read balances,
              create proposals, count votes, authorize transfers, or persist a
              ledger event.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search DAO treasury capability notes"
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
