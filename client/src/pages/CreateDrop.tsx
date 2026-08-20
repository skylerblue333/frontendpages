import { useMemo, useState } from "react";
import {
  FileCheck2,
  Image,
  LockKeyhole,
  Search,
  ShieldCheck,
  ShoppingBag,
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

type DropCapability = {
  title: string;
  description: string;
  icon: typeof ShoppingBag;
};

const dropCapabilities: DropCapability[] = [
  {
    title: "Drop content and provenance",
    description:
      "No asset, content type, owner, checksum, version, metadata, license, preview, or content-safety result is loaded.",
    icon: Image,
  },
  {
    title: "Supply, pricing, and settlement",
    description:
      "No currency, price, supply, fee, tax, payout, inventory reservation, settlement account, or calculated revenue is verified.",
    icon: ShoppingBag,
  },
  {
    title: "Eligibility and wallet access",
    description:
      "No network, wallet, token ownership, subscription, whitelist, entitlement, signature, or claim authorization is connected.",
    icon: WalletCards,
  },
  {
    title: "Claim, delivery, and audit",
    description:
      "No launch, mint, claim, payment, delivery, duplicate prevention, failure recovery, refund, ownership record, or audit event is available.",
    icon: FileCheck2,
  },
];

export default function CreateDrop() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      dropCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="create-drop-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Drop-execution boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="create-drop-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Create drop readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe digital-drop workflow without
                  pretending that content, price, supply, eligibility, payment,
                  claims, or delivery are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load drop service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Create drop status"
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
                    Truthful drop state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No content, owner, price, supply, currency, entitlement,
                    wallet, payment, claim, delivery, or saved drop is loaded or
                    persisted.
                  </CardDescription>
                </div>
                <ShoppingBag
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified drop-creation service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must validate content provenance, define
                  pricing and supply, verify eligibility, authorize payment or
                  claims, prevent duplicates, handle failures and refunds, and
                  record ownership and audit evidence before this route can
                  launch a drop.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable drop actions"
              >
                {[
                  "Load content",
                  "Configure drop",
                  "Review claim",
                  "Launch drop",
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
                These safeguards must be verified before drop controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Asset, content type, owner, checksum, version, metadata,
                license, preview, and content safety.
              </p>
              <p>
                Currency, price, supply, fees, tax, payout, inventory,
                settlement, and revenue calculations.
              </p>
              <p>
                Network, wallet, token ownership, subscriptions, whitelist,
                entitlement, signature, and claim authorization.
              </p>
              <p>
                Launch, mint, claim, payment, delivery, duplicate prevention,
                failure, refund, ownership, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Drop capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not inspect content, calculate
              revenue, verify a wallet, charge payment, launch a drop, mint,
              claim, or persist ownership.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search drop capability notes"
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
