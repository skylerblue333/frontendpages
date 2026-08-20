import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Coins,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Chain and contract identity",
    area: "Infrastructure",
    description:
      "No verified network, token contract, deployer, bytecode, ownership, oracle, audit provenance, or contract status is connected.",
  },
  {
    title: "Sale terms and legal scope",
    area: "Governance",
    description:
      "No offering terms, jurisdiction, eligibility, sanctions screening, disclosures, risk statement, or legal review is available.",
  },
  {
    title: "Price, supply, and allocation",
    area: "Integrity",
    description:
      "No token price, supply, allocation, participant count, raise, tokenomics, vesting schedule, or market claim is verified.",
  },
  {
    title: "Wallet and payment custody",
    area: "Security",
    description:
      "No wallet connection, payment asset, custody boundary, signed transaction, payment authorization, or private-key handling exists.",
  },
  {
    title: "Transaction and vesting state",
    area: "Operations",
    description:
      "No purchase, confirmation, refund, allocation, vesting enforcement, reconciliation, failure, or support workflow is available.",
  },
];
export default function ICOLaunchpad() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Token launchpad is unavailable locally. No chain, contract, price, funds, wallet, participant, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No token sale, wallet connection, payment, transaction, allocation, or funds record was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="ico-title"
    >
      <div data-ui-polish="batch-192" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Coins className="size-3.5" aria-hidden="true" /> Token-sale
                  readiness
                </Badge>
                <Badge variant="secondary">No launchpad service</Badge>
              </div>
              <h1
                id="ico-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ICO Launchpad readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the chain, contract, legal, sale, wallet, payment,
                transaction, and vesting controls required before any token
                offering can be represented or activated.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Token-sale service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No verified chain or contract identity, legal review, compliant
                sale control, custody boundary, payment processor, signed
                transaction status, or vesting enforcement is connected. This is
                a governance workspace, not an offering or investment
                opportunity.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Coins className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No sale claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No price, supply, raise, participants, tokenomics, vesting, or
                market state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No custody scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No wallet, payment asset, private key, signed transaction, or
                funds movement is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No purchase actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No buy, connect, confirm, allocate, refund, or vesting action
                exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Token-sale governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              connects a wallet, quotes a price, accepts funds, signs a
              transaction, or records an allocation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search token launchpad readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter token-sale requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No token-sale notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production token offering needs verified chain and contract
                identity, legal and jurisdictional review, compliant sale
                controls, wallet and payment custody boundaries, signed
                transaction status, vesting enforcement, audit provenance,
                sanctions and fraud controls, reconciliation, and independent
                acceptance. This screen is not financial advice or an offering.
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
