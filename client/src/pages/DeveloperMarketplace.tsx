import { useMemo, useState } from "react";
import {
  BadgeDollarSign,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  PackageCheck,
  Search,
  ShieldCheck,
  Store,
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

type MarketplaceCapability = {
  title: string;
  description: string;
  icon: typeof Store;
};

const marketplaceCapabilities: MarketplaceCapability[] = [
  {
    title: "Catalog and asset provenance",
    description:
      "No asset identity, version, checksum, documentation, dependency, compatibility, source, availability, rating, review, or download record is verified.",
    icon: Store,
  },
  {
    title: "Seller, licensing, and rights",
    description:
      "No seller identity, authorization, ownership, license, usage restriction, attribution, intellectual-property review, or takedown process is connected.",
    icon: KeyRound,
  },
  {
    title: "Pricing, payment, and fulfillment",
    description:
      "No currency, price, tax, payment method, checkout, order, entitlement, download, delivery, refund, payout, or revenue-share record is available.",
    icon: BadgeDollarSign,
  },
  {
    title: "Moderation, privacy, and audit",
    description:
      "No content moderation, fraud control, abuse report, privacy notice, notification, retention, dispute, reconciliation, or audit record is configured.",
    icon: FileCheck2,
  },
];

export default function DeveloperMarketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      marketplaceCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="developer-marketplace-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Marketplace boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="developer-marketplace-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Developer marketplace readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a trustworthy developer-asset marketplace
                  contract without pretending that listings, sellers, prices,
                  licenses, purchases, downloads, or payouts are live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load marketplace service unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Developer marketplace status"
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
                    Truthful marketplace state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No catalog, asset, seller, listing, price, order,
                    entitlement, download, payout, or saved marketplace record
                    is loaded or persisted.
                  </CardDescription>
                </div>
                <PackageCheck
                  className="size-5 text-amber-500"
                  aria-hidden="true"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified developer-marketplace service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must establish catalog and asset provenance,
                  seller authorization, licensing and rights, payment and tax
                  handling, fulfillment and entitlements, refunds and payouts,
                  moderation, privacy, disputes, reconciliation, and audit
                  evidence before this route can represent a marketplace
                  transaction.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable marketplace actions"
              >
                {[
                  "Browse catalog",
                  "Publish asset",
                  "Review license",
                  "Start checkout",
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
                These safeguards must be verified before marketplace controls
                are enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Asset identity, versions, checksums, documentation,
                dependencies, compatibility, sources, availability, ratings,
                reviews, and downloads.
              </p>
              <p>
                Seller identity, authorization, ownership, licenses, usage
                restrictions, attribution, intellectual property, and takedowns.
              </p>
              <p>
                Currencies, prices, taxes, payments, checkout, orders,
                entitlements, downloads, delivery, refunds, payouts, and revenue
                share.
              </p>
              <p>
                Moderation, fraud, abuse, privacy, notifications, retention,
                disputes, reconciliation, and audit evidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Marketplace capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query listings, inspect sellers,
              show prices, review licenses, start checkout, download assets, or
              persist an order.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search marketplace capability notes"
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
