import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bug,
  CheckCircle2,
  Database,
  EyeOff,
  Globe2,
  LockKeyhole,
  Radio,
  RefreshCw,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  Wifi,
  XCircle,
} from "lucide-react";

type RiskLevel = "critical" | "high" | "medium" | "low";

type PrivacySurface = { name: string; description: string; risk: RiskLevel };

type TrackerCategory = {
  name: string;
  icon: typeof Activity;
  description: string;
};

const PRIVACY_SURFACES: readonly PrivacySurface[] = [
  {
    name: "Behavioral profiling",
    description:
      "Mouse movement, scroll depth, and click patterns cannot be observed or verified by this page.",
    risk: "high",
  },
  {
    name: "Cross-site tracking",
    description:
      "Cookie, storage, and cross-site request activity are outside this page’s visibility.",
    risk: "high",
  },
  {
    name: "Device fingerprinting",
    description:
      "Browser and device signals cannot be inspected or changed from this route.",
    risk: "critical",
  },
  {
    name: "Location inference",
    description:
      "IP geolocation, timezone, and network routing are unavailable for local assessment.",
    risk: "medium",
  },
  {
    name: "Social graph mapping",
    description:
      "Third-party relationships and interaction graphs are not available locally.",
    risk: "medium",
  },
  {
    name: "Keystroke analysis",
    description:
      "No typing telemetry or identity inference is collected by this page.",
    risk: "low",
  },
];

const TRACKER_CATEGORIES: readonly TrackerCategory[] = [
  {
    name: "Analytics trackers",
    icon: Activity,
    description: "No request telemetry connected",
  },
  {
    name: "Ad networks",
    icon: Globe2,
    description: "No browser interception connected",
  },
  {
    name: "Social pixels",
    icon: Radio,
    description: "No page instrumentation connected",
  },
  {
    name: "Fingerprinting scripts",
    icon: Bug,
    description: "No script inspection connected",
  },
  {
    name: "Session recorders",
    icon: Database,
    description: "No session telemetry connected",
  },
  {
    name: "Beacon requests",
    icon: Wifi,
    description: "No network monitor connected",
  },
];

const riskStyles: Record<RiskLevel, string> = {
  critical: "border-red-500/30 text-red-300",
  high: "border-orange-500/30 text-orange-300",
  medium: "border-yellow-500/30 text-yellow-300",
  low: "border-emerald-500/30 text-emerald-300",
};

export default function AntiSurveillance() {
  const [status, setStatus] = useState(
    "Surveillance telemetry unavailable locally. No scan, blocklist, network, or account mutation was started."
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No browser, network, telemetry, notification, or account mutation was started.`
    );

  return (
    <main
      className="container max-w-6xl animate-page-in py-8"
      aria-labelledby="anti-surveillance-title"
    >
      <header className="mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-xs font-mono text-rose-200">
          <EyeOff className="h-3.5 w-3.5" aria-hidden="true" /> LOCAL PRIVACY
          READINESS
        </div>
        <div className="max-w-3xl">
          <h1
            id="anti-surveillance-title"
            className="text-4xl font-bold tracking-tight"
          >
            Anti-Surveillance
          </h1>
          <p className="mt-2 text-muted-foreground">
            Review monitoring boundaries without fabricating threat detections,
            tracker counts, or protection guarantees.
          </p>
        </div>
      </header>
      <section
        className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
        aria-label="Surveillance service unavailable"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-semibold text-amber-100">
              Surveillance telemetry unavailable
            </h2>
            <p className="mt-1 text-sm leading-6 text-amber-100/75">
              No browser extension, proxy, request interceptor, threat
              intelligence feed, network monitor, or verified privacy blocker is
              connected. This page cannot determine whether trackers, beacons,
              leaks, or surveillance systems are present.
            </p>
          </div>
        </div>
      </section>
      <section
        className="mb-6 grid gap-4 md:grid-cols-3"
        aria-label="Anti-surveillance status summary"
      >
        <Card className="border-border/40 bg-card/50 p-5">
          <ShieldAlert
            className="mb-3 h-5 w-5 text-amber-300"
            aria-hidden="true"
          />
          <p className="text-lg font-semibold">Protection unavailable</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No blocker is active or claimed by this page.
          </p>
        </Card>
        <Card className="border-border/40 bg-card/50 p-5">
          <ScanSearch
            className="mb-3 h-5 w-5 text-sky-300"
            aria-hidden="true"
          />
          <p className="text-lg font-semibold">No scan performed</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No clean, warning, danger, or detected result is asserted.
          </p>
        </Card>
        <Card className="border-border/40 bg-card/50 p-5">
          <BarChart3
            className="mb-3 h-5 w-5 text-violet-300"
            aria-hidden="true"
          />
          <p className="text-lg font-semibold">Counts unavailable</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Blocked requests and data-saved totals are not measured.
          </p>
        </Card>
      </section>
      <section className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/40 bg-card/40 p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck
            className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-semibold">Privacy blocker</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Browser and network blocking is unavailable. No requests are
              intercepted.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Privacy scan")}
          >
            <ScanSearch className="mr-2 h-4 w-4" aria-hidden="true" />
            Run scan unavailable
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Privacy blocker")}
          >
            <XCircle className="mr-2 h-4 w-4" aria-hidden="true" />
            Enable blocker unavailable
          </Button>
        </div>
      </section>
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="space-y-4" aria-labelledby="patterns-title">
          <div>
            <h2
              id="patterns-title"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <Activity className="h-5 w-5 text-primary" aria-hidden="true" />
              Surveillance pattern review
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              These are threat-model categories, not detections.
            </p>
          </div>
          {PRIVACY_SURFACES.map(surface => (
            <Card
              key={surface.name}
              className="border-border/40 bg-card/40 p-4"
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 rounded-lg bg-secondary/60 p-2"
                  aria-hidden="true"
                >
                  <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">{surface.name}</h3>
                    <Badge
                      variant="outline"
                      className={`text-[10px] uppercase ${riskStyles[surface.risk]}`}
                    >
                      {surface.risk} risk
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-muted-foreground/30 text-muted-foreground"
                    >
                      Not assessed
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {surface.description}
                  </p>
                </div>
                <XCircle
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                  aria-label="Not assessed"
                />
              </div>
            </Card>
          ))}
        </section>
        <aside className="space-y-4" aria-labelledby="blocklist-title">
          <Card className="border-border/40 bg-card/50 p-4">
            <h2
              id="blocklist-title"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <ShieldAlert
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />
              Tracker categories
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              No category has a measured blocked count.
            </p>
            <div className="mt-4 space-y-2">
              {TRACKER_CATEGORIES.map(category => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.name}
                    className="flex items-center gap-3 rounded-lg bg-secondary/30 p-3"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium">
                        {category.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-muted-foreground/30 text-[10px] text-muted-foreground"
                    >
                      Unavailable
                    </Badge>
                  </div>
                );
              })}
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Blocklist update")}
            >
              <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
              Update blocklist unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/50 p-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <BarChart3 className="h-5 w-5 text-primary" aria-hidden="true" />
              Session statistics
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trackers blocked</span>
                <span>Unavailable</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Beacons blocked</span>
                <span>Unavailable</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Fingerprint attempts
                </span>
                <span>Unavailable</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data saved</span>
                <span>Unavailable</span>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Session statistics clearing")}
            >
              <Trash2 className="mr-2 h-4 w-4" aria-hidden="true" />
              Clear statistics unavailable
            </Button>
          </Card>
        </aside>
      </div>
      <section className="mt-6 rounded-2xl border border-border/40 bg-card/30 p-5">
        <div className="flex items-start gap-3">
          <LockKeyhole
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-semibold">
              Production privacy monitoring requirements
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              A real implementation needs a defined threat model, consent,
              browser or network control, trustworthy request telemetry,
              false-positive handling, secure updates, auditable configuration,
              and clear limits on what can be blocked. None is connected to this
              route.
            </p>
          </div>
        </div>
      </section>
      <p
        className="mt-4 rounded-xl border border-border/30 bg-background/30 px-4 py-3 text-sm text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
      <div className="sr-only" aria-live="polite">
        <CheckCircle2 /> No surveillance protection is active.
      </div>
    </main>
  );
}
