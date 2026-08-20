import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Coins,
  FileSearch,
  Globe2,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Provider and network provenance",
    area: "Infrastructure",
    description:
      "No pool provider, endpoint, network, protocol, region, uptime, fee schedule, terms, or independently verified source is connected.",
  },
  {
    title: "Worker authorization and configuration",
    area: "Security",
    description:
      "No worker identity, account, authorization token, algorithm, stratum configuration, hashrate, or device permission is available.",
  },
  {
    title: "Payout and custody controls",
    area: "Finance",
    description:
      "No payout threshold, schedule, wallet address, private key boundary, custody model, transaction hash, or failed-payout recovery is verified.",
  },
  {
    title: "Rewards, fees, and reconciliation",
    area: "Accounting",
    description:
      "No share accounting, reward method, fee deduction, balance, payout, ledger, currency conversion, or reconciliation record exists.",
  },
  {
    title: "Monitoring and incident handling",
    area: "Reliability",
    description:
      "No connection heartbeat, stale-share alert, duplicate-submission guard, outage state, notification, support case, or recovery evidence is configured.",
  },
];
export default function MiningPoolSelector() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mining pool selection is unavailable locally. No provider, network, worker, payout, wallet, reward, or financial record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No provider, pool, worker, payout, wallet, reward, mining, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mining-pool-selector-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <SlidersHorizontal className="size-3.5" aria-hidden="true" />{" "}
                  Pool-integration readiness
                </Badge>
                <Badge variant="secondary">No providers connected</Badge>
              </div>
              <h1
                id="mining-pool-selector-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MiningPoolSelector readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review pool provider provenance, network validation, worker
                authorization, payout custody, fees, rewards, monitoring, and
                recovery without implying that a provider, worker, payout, or
                mining reward exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Pool selection is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No provider catalog, network validator, worker authorization
                service, wallet custody path, payout processor, reward ledger,
                monitoring system, or persistence layer is connected. This
                workspace cannot select, connect, configure, or authorize a
                mining pool.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Globe2 className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No provider records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No pool, endpoint, network, region, protocol, fee, terms, or
                uptime data is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Coins className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No payout state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No reward, balance, threshold, wallet, transaction, fee, or
                reconciliation record is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No pool actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No select, connect, authorize, configure, switch, payout, or
                mining-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Pool-integration requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              fetches providers, validates a network, authorizes a worker,
              connects a pool, configures a payout, or saves financial data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mining pool readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter pool-integration requirements"
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
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No pool-integration notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production pool connectivity requires independently verified
                provider and network details, authorized workers, secure secret
                handling, payout and custody controls, reward and fee
                reconciliation, monitoring, outage recovery, access controls,
                and clear non-advisory disclosures. No provider, worker, payout,
                wallet, reward, or financial record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
