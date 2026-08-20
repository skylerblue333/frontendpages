import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  BarChart3,
  CheckSquare,
  ClipboardX,
  Download,
  Keyboard,
  LockKeyhole,
  Settings2,
  ShieldAlert,
  Square,
  Wrench,
  XCircle,
  Zap,
} from "lucide-react";

type Flag = { key: string; label: string; description: string };
type Dataset = { key: string; label: string; description: string };

const SHORTCUTS = [
  {
    category: "Navigation",
    items: ["G H · Home", "G F · Feed", "G W · Wallet", "/ · Search"],
  },
  {
    category: "Local composition",
    items: ["N · New draft", "C · Compose preview", "Esc · Close overlay"],
  },
  {
    category: "Accessibility",
    items: ["Tab · Move focus", "? · Show shortcuts"],
  },
] as const;

const FLAGS: readonly Flag[] = [
  {
    key: "feed",
    label: "Experimental feed ranking",
    description: "No ranking service or preference store connected.",
  },
  {
    key: "dm",
    label: "Encrypted messaging preview",
    description: "Encryption status and provider are unavailable.",
  },
  {
    key: "ai",
    label: "AI post suggestions",
    description: "No model, prompt, or generated output is connected.",
  },
  {
    key: "voice",
    label: "Voice navigation",
    description: "No microphone, speech model, or command action is connected.",
  },
  {
    key: "world",
    label: "World simulation",
    description: "No simulation state or persistent environment is connected.",
  },
  {
    key: "nft",
    label: "NFT lazy minting",
    description: "No wallet, chain, signing, or minting endpoint is connected.",
  },
];

const DATASETS: readonly Dataset[] = [
  { key: "posts", label: "Posts", description: "Post records unavailable" },
  {
    key: "followers",
    label: "Followers",
    description: "Relationship data unavailable",
  },
  {
    key: "transactions",
    label: "Transaction history",
    description: "Ledger data unavailable",
  },
  {
    key: "staking",
    label: "Staking positions",
    description: "Wallet data unavailable",
  },
  {
    key: "ai",
    label: "AI chat history",
    description: "Provider history unavailable",
  },
  {
    key: "referrals",
    label: "Referral data",
    description: "Attribution data unavailable",
  },
];

export default function PowerUserTools() {
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [selectedDatasets, setSelectedDatasets] = useState<ReadonlySet<string>>(
    new Set()
  );
  const [status, setStatus] = useState(
    "Power tools service unavailable locally. No identity, feature flag, export, clipboard, or account mutation was started."
  );
  const enabledCount = useMemo(
    () => Object.values(flags).filter(Boolean).length,
    [flags]
  );

  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No identity, data, feature flag, clipboard, export, or account mutation was started.`
    );
  const toggleFlag = (key: string) => {
    setFlags(previous => ({ ...previous, [key]: !previous[key] }));
    setStatus(
      "Feature flag changed in local preview only. It was not persisted or applied to the platform."
    );
  };
  const toggleDataset = (key: string) =>
    setSelectedDatasets(previous => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="power-tools-title"
    >
      <header className="sticky top-0 z-10 border-b border-border/30 bg-background/95 px-4 py-4 backdrop-blur">
        <div data-ui-polish="batch-199" className="mx-auto flex max-w-5xl items-center gap-3">
          <Wrench className="h-5 w-5 text-orange-300" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <h1 id="power-tools-title" className="text-lg font-bold">
              Power user tools
            </h1>
            <p className="text-xs text-muted-foreground">
              Local control-readiness preview · no privileged operations
              connected
            </p>
          </div>
          <Badge
            variant="outline"
            className="border-amber-400/30 text-amber-200"
          >
            Preview only
          </Badge>
        </div>
      </header>
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-6">
        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Power tools unavailable"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Privileged tools unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated user profile, role authorization, feature-flag
                store, data export service, clipboard identity action, or system
                administration endpoint is connected. Local selections are not
                authoritative.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/40 bg-card/50 p-5">
            <LockKeyhole
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Identity unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No name, role, or user ID is exposed.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Settings2
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">
              {enabledCount} local toggles
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              No feature flag is persisted or applied.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Download
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Export unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No real dataset is loaded or downloadable.
            </p>
          </Card>
        </section>
        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/40 bg-card/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-primary" aria-hidden="true" />
                Keyboard shortcuts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {SHORTCUTS.map(group => (
                <div key={group.category}>
                  <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.category}
                  </h2>
                  <div className="grid gap-2">
                    {group.items.map(item => (
                      <div
                        key={item}
                        className="rounded-lg border border-border/30 bg-background/30 px-3 py-2 text-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-xs leading-5 text-muted-foreground">
                Shortcuts are documentation only. No navigation, command bar,
                microphone, or content action is registered by this screen.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-card/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
                Feature flag preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {FLAGS.map(flag => (
                <div
                  key={flag.key}
                  className="flex items-center gap-3 rounded-lg border border-border/30 bg-background/30 p-3"
                >
                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-medium">{flag.label}</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {flag.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={Boolean(flags[flag.key])}
                    onClick={() => toggleFlag(flag.key)}
                    className={`relative h-6 w-11 shrink-0 rounded-full ${flags[flag.key] ? "bg-primary" : "bg-secondary"}`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${flags[flag.key] ? "translate-x-6" : "translate-x-1"}`}
                    />
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
        <Card className="border-border/40 bg-card/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" aria-hidden="true" />
              Data export readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm leading-6 text-muted-foreground">
              Select dataset concepts to review export scope. No records are
              loaded, generated, serialized, downloaded, or sent.
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {DATASETS.map(dataset => {
                const selected = selectedDatasets.has(dataset.key);
                return (
                  <button
                    key={dataset.key}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleDataset(dataset.key)}
                    className={`flex items-start gap-2 rounded-xl border p-3 text-left ${selected ? "border-primary/50 bg-primary/10" : "border-border/30 bg-background/30 hover:bg-background/50"}`}
                  >
                    {selected ? (
                      <CheckSquare
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <Square
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                    )}
                    <span>
                      <span className="block text-sm font-medium">
                        {dataset.label}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {dataset.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                type="button"
                onClick={() => announceUnavailable("Data export")}
                disabled={selectedDatasets.size === 0}
              >
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                Export unavailable
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => announceUnavailable("User ID copy")}
              >
                <ClipboardX className="mr-2 h-4 w-4" aria-hidden="true" />
                Copy ID unavailable
              </Button>
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-3 sm:grid-cols-2">
          <Card className="border-border/40 bg-card/30 p-4">
            <div className="flex items-start gap-3">
              <Activity
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">System tools</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Observability, automation, security, and unhidden controls
                  require separate authenticated contracts.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-3"
                  onClick={() => announceUnavailable("System tool navigation")}
                >
                  Open unavailable
                </Button>
              </div>
            </div>
          </Card>
          <Card className="border-border/40 bg-card/30 p-4">
            <div className="flex items-start gap-3">
              <BarChart3
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold">Audit boundary</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Role checks, export logs, consent, data minimization, and safe
                  error handling are required before privileged tools exist.
                </p>
              </div>
            </div>
          </Card>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
        <div className="sr-only" aria-live="polite">
          <XCircle /> No privileged power-user operation is active.
        </div>
      </div>
    </main>
  );
}
