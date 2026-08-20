import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleHelp,
  FileKey2,
  Globe2,
  KeyRound,
  Link2,
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

type ResolverContract = {
  title: string;
  area: string;
  description: string;
  icon: typeof Globe2;
};

const resolverContracts: readonly ResolverContract[] = [
  {
    title: "Name and resolver lookup",
    area: "Resolution",
    description:
      "No ENS name, resolver contract, chain, RPC provider, block height, or resolution response is connected.",
    icon: Globe2,
  },
  {
    title: "Address and reverse record",
    area: "Identity",
    description:
      "No wallet address, reverse record, primary name, ownership proof, or account identity is loaded.",
    icon: WalletCards,
  },
  {
    title: "Text, content, and service records",
    area: "Records",
    description:
      "No text record, content hash, avatar, website, mail, social, service, or record version is queried.",
    icon: FileKey2,
  },
  {
    title: "Ownership and write safety",
    area: "Security",
    description:
      "No owner, manager, resolver permission, signature, transaction, gas estimate, or on-chain write can be created.",
    icon: KeyRound,
  },
];

export default function ENSResolver() {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(
    "ENS resolution is unavailable locally. No chain read, wallet lookup, signature, transaction, or record mutation was started."
  );
  const visibleContracts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return resolverContracts.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No chain read, wallet lookup, signature, transaction, or record mutation was started.`
    );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ens-resolver-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <Link2 className="size-3.5" aria-hidden="true" />
                  Web3 readiness
                </Badge>
                <Badge variant="secondary">Not connected</Badge>
              </div>
              <div>
                <h1
                  id="ens-resolver-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  ENS resolver readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Review the contracts required for safe ENS name resolution
                  without claiming that a name, address, resolver, chain,
                  record, wallet, or transaction is available.
                </p>
              </div>
            </div>
            <ShieldCheck
              className="size-8 shrink-0 text-primary"
              aria-hidden="true"
            />
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-labelledby="ens-boundary-title"
        >
          <div className="flex items-start gap-3">
            <CircleHelp
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2
                id="ens-boundary-title"
                className="font-semibold text-amber-100"
              >
                ENS provider and chain are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No ENS name, RPC network, resolver contract, wallet connection,
                record response, signature, or transaction is connected. This
                page is a planning boundary, not a live blockchain resolver.
              </p>
            </div>
          </div>
        </section>

        <section
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="ENS availability status"
        >
          {[
            {
              title: "Name lookup unavailable",
              text: "No name, resolver, chain, RPC provider, or resolution response is loaded.",
              icon: Globe2,
            },
            {
              title: "Wallet mapping unavailable",
              text: "No address, reverse record, primary name, or ownership proof is loaded.",
              icon: WalletCards,
            },
            {
              title: "Records unavailable",
              text: "No text, avatar, content, website, social, or service record is queried.",
              icon: FileKey2,
            },
            {
              title: "On-chain write unavailable",
              text: "No owner, permission, signature, gas estimate, or transaction can be produced.",
              icon: KeyRound,
            },
          ].map(({ title, text, icon: Icon }) => (
            <Card key={title} className="border-border/40 bg-card/50 p-5">
              <Icon className="mb-3 size-5 text-primary" aria-hidden="true" />
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </Card>
          ))}
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Local resolver planning</CardTitle>
            <CardDescription>
              Enter a name to preserve local intent only. No ENS name is
              normalized, resolved, validated against chain state, or persisted.
            </CardDescription>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input
                aria-label="ENS name draft"
                value={name}
                onChange={event => {
                  setName(event.target.value);
                  setStatus(
                    "Local ENS name intent updated. No chain read or name resolution was started."
                  );
                }}
                placeholder="example.eth (local intent only)"
              />
              <Button
                type="button"
                onClick={() => announceUnavailable("ENS resolution")}
              >
                <Search className="mr-2 size-4" aria-hidden="true" />
                Resolve unavailable
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-dashed border-border p-5 text-sm leading-6 text-muted-foreground">
              <p className="font-medium text-foreground">
                Current local name intent
              </p>
              <p className="mt-1 break-words">
                {name.trim() || "No ENS name entered."}
              </p>
              <p className="mt-3">
                This local field does not prove ownership, query a chain,
                inspect a wallet, or create a resolver result.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ENS contract map</CardTitle>
            <CardDescription>
              Search filters static readiness notes only. It does not inspect
              chain data, wallets, keys, records, or transaction history.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ENS contract notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search resolver contracts"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visibleContracts.map(
                ({ title, area, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border/70 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-secondary/60 p-3">
                        <Icon
                          className="size-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold">{title}</h3>
                          <Badge variant="outline">{area}</Badge>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="mt-4"
                          onClick={() => announceUnavailable(`Manage ${title}`)}
                        >
                          Manage unavailable
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
              {visibleContracts.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No ENS contract notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                ENS evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production ENS integration needs network and chain
                identification, resolver ABI compatibility, name normalization,
                ownership and reverse-record verification, wallet safety,
                signature and transaction review, gas and failure handling,
                privacy controls, rate limits, audit logs, and clear read versus
                write boundaries.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
