import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Cpu,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Chain, pool, and worker verification",
    area: "Infrastructure",
    description:
      "No network, node, pool, worker, hashrate, authorization, heartbeat, job, or share-validation record is connected.",
  },
  {
    title: "Mining session and reward state",
    area: "Operations",
    description:
      "No session, start time, uptime, accepted share, rejected share, block, reward, payout, or failure state is verified.",
  },
  {
    title: "Wallet and accounting boundary",
    area: "Finance",
    description:
      "No wallet address, custody path, private key, balance, transaction hash, currency conversion, ledger, or reconciliation record exists.",
  },
  {
    title: "Monitoring and incident handling",
    area: "Reliability",
    description:
      "No telemetry, alert, threshold, outage, duplicate-job guard, restart policy, incident, or recovery evidence is configured.",
  },
  {
    title: "Security, consent, and non-advisory use",
    area: "Safety",
    description:
      "No device authorization, secret boundary, role, consent, retention, audit log, risk disclosure, or investment decision workflow is verified.",
  },
];
export default function MiningDashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mining operations are unavailable locally. No chain, worker, session, reward, wallet, payout, or financial record was loaded or saved."
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
      `${action} is unavailable locally. No network, worker, session, reward, wallet, payout, mining, or financial-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mining-dashboard-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Activity className="size-3.5" aria-hidden="true" />{" "}
                  Mining-operations readiness
                </Badge>
                <Badge variant="secondary">No live session</Badge>
              </div>
              <h1
                id="mining-dashboard-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MiningDashboard readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review chain and pool verification, worker authorization, mining
                sessions, rewards, wallet and accounting boundaries, monitoring,
                security, and incident recovery without implying that mining
                activity or earnings exist.
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
                Mining operations are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No chain, node, pool, worker, authorization service, reward
                source, wallet, payout path, monitoring system, or persistence
                layer is connected. This workspace cannot start mining, report
                shares, claim rewards, or confirm earnings.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Cpu className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No worker state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No device, pool, worker, hashrate, session, heartbeat, job, or
                share record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No reward state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No block, reward, payout, wallet, balance, transaction, or
                financial result is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No mining actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No start, stop, authorize, connect, claim, payout, restart, or
                mining-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Mining-operations requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects a worker, starts a session, reads chain data, confirms a
              share, claims a reward, or saves financial data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mining dashboard readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter mining-operations requirements"
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
                  No mining-operations notes match “{query}”.
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
                Production mining operations require verified chain and pool
                integration, authorized workers, share and reward confirmation,
                secure wallet boundaries, accounting reconciliation, monitoring,
                incident recovery, access controls, and clear non-advisory
                disclosures. No session, reward, payout, wallet, or financial
                record is claimed here.
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
