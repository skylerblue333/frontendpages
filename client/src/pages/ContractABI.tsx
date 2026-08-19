import { useMemo, useState } from "react";
import {
  Braces,
  Code2,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  Network,
  Search,
  ShieldCheck,
  TerminalSquare,
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

type AbiCapability = {
  title: string;
  description: string;
  icon: typeof Braces;
};

const abiCapabilities: AbiCapability[] = [
  {
    title: "Chain and contract identity",
    description:
      "No network, chain ID, contract address, deployment environment, bytecode hash, verification source, or owner scope is connected.",
    icon: Network,
  },
  {
    title: "ABI schema and validation",
    description:
      "No ABI document, parser, function/event/error schema, compiler version, proxy resolution, checksum, or validation result is loaded.",
    icon: FileCheck2,
  },
  {
    title: "Read, write, and simulation",
    description:
      "No read method, write method, argument encoding, gas estimate, call simulation, state diff, signer, or authorization is available.",
    icon: TerminalSquare,
  },
  {
    title: "Transaction and audit state",
    description:
      "No signature, nonce, replay protection, transaction hash, confirmation, failure, retry, receipt, event log, or audit record is created or persisted.",
    icon: GitBranch,
  },
];

export default function ContractABI() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      abiCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="contract-abi-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  Contract execution boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="contract-abi-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Contract ABI readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents a safe, typed contract-interface workflow
                  without pretending that a chain, ABI, signer, method call,
                  transaction, or receipt is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Load contract unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Contract ABI status"
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
                    Truthful ABI state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No network, contract, ABI, method, signer, simulation,
                    transaction hash, receipt, or saved contract record is
                    loaded or persisted.
                  </CardDescription>
                </div>
                <Braces className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified contract-interface service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must identify network and address, validate
                  the ABI, encode and simulate calls, verify authorization and
                  signing, handle transaction failures, and expose receipts and
                  audit evidence before this route can interact with a contract.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable contract actions"
              >
                {[
                  "Load ABI",
                  "Validate ABI",
                  "Simulate call",
                  "Send transaction",
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
                These safeguards must be verified before contract controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Network, chain ID, address, environment, bytecode hash,
                verification source, proxy, and account scope.
              </p>
              <p>
                ABI schema, parser, compiler version, checksum,
                function/event/error definitions, and validation result.
              </p>
              <p>
                Argument encoding, read/write separation, gas estimate,
                simulation, state diff, signer, and authorization.
              </p>
              <p>
                Signature, nonce, replay protection, hash, confirmation,
                failure, receipt, event log, retry, and audit.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>ABI capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not query a chain, parse an ABI,
              invoke a method, sign a payload, broadcast a transaction, or
              persist a receipt.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ABI capability notes"
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
