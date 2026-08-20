import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  BarChart3,
  Calculator,
  CircleDollarSign,
  Database,
  Download,
  Info,
  RefreshCw,
  ShieldAlert,
  Wallet,
  XCircle,
} from "lucide-react";

type Requirement = {
  title: string;
  description: string;
  icon: typeof BarChart3;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Network difficulty and blocks",
    description:
      "Chain identity, difficulty history, block cadence, confirmations, and reorganization state need an authoritative node or indexer.",
    icon: BarChart3,
  },
  {
    title: "Worker telemetry",
    description:
      "Hash rate, shares, uptime, rejected work, pool status, and device health require an authorized mining provider.",
    icon: Activity,
  },
  {
    title: "Rewards and reconciliation",
    description:
      "Mining rewards, fees, wallet balances, payouts, and transaction hashes need verified chain and wallet records.",
    icon: Wallet,
  },
  {
    title: "Profitability and forecasts",
    description:
      "Power cost, hardware efficiency, token price, difficulty forecast, and profitability require current sources and clear uncertainty.",
    icon: Calculator,
  },
];

export default function DifficultyTracking() {
  const [status, setStatus] = useState(
    "Mining data service unavailable locally. No network, worker, reward, wallet, price, profitability, prediction, or transaction mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No network, worker, reward, wallet, price, profitability, prediction, or transaction mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="difficulty-tracking-title"
    >
      <div data-ui-polish="batch-186" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-orange-400/30 text-orange-200"
            >
              MINING READINESS PREVIEW
            </Badge>
            <h1
              id="difficulty-tracking-title"
              className="flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <BarChart3
                className="h-7 w-7 text-orange-300"
                aria-hidden="true"
              />
              Difficulty tracking
            </h1>
            <p className="max-w-3xl text-muted-foreground">
              Review mining and network-data requirements without inventing
              chain difficulty, hash rate, blocks, rewards, profitability,
              wallet balances, or forecasts.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Network refresh")}
          >
            <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
            Refresh unavailable
          </Button>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mining data service unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No chain node, indexer, mining pool, worker telemetry, wallet
                provider, price feed, power model, or forecast service is
                connected. No mining or financial result is represented.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <Database
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Network unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No chain, block, difficulty, confirmation, or cadence data is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Activity
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Workers unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No hash rate, share, uptime, pool, or device state is reported.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Wallet
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Rewards unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No reward, payout, wallet balance, fee, or transaction hash
              exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <CircleDollarSign
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Profitability unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No price, power cost, forecast, return, or mining recommendation
              is calculated.
            </p>
          </Card>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Mining requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Planning requirements only; no network or financial record is
                shown.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => announceUnavailable("Difficulty calculation")}
            >
              <Calculator className="mr-2 h-4 w-4" aria-hidden="true" />
              Calculate unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {REQUIREMENTS.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge
                        variant="outline"
                        className="mt-2 border-muted-foreground/30 text-muted-foreground"
                      >
                        Unavailable
                      </Badge>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/30 p-5">
            <h2 className="font-semibold">Connect worker unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No miner, pool, device, or telemetry account can be linked.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Worker connection")}
            >
              Connect unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <h2 className="font-semibold">Connect wallet unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No wallet, reward address, payout, or chain record can be loaded.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Wallet connection")}
            >
              Connect unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <h2 className="font-semibold">Export unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No network, worker, reward, or financial report can be generated.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Mining export")}
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Export unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No mining or financial claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Mining outcomes depend on network, hardware, pool, power,
                market, custody, and software conditions. This page does not
                claim mining activity, rewards, profitability, ownership, or
                future performance.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only">
          <XCircle aria-hidden="true" /> No mining operation is active.
        </div>
      </div>
    </main>
  );
}
