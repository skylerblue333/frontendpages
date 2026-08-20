import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  EyeOff,
  Fingerprint,
  Globe2,
  LockKeyhole,
  Monitor,
  RefreshCw,
  ShieldAlert,
  Shuffle,
  SlidersHorizontal,
  UserRound,
  WifiOff,
  XCircle,
} from "lucide-react";

type RiskLevel = "critical" | "high" | "medium" | "low";

type PrivacyLayer = {
  name: string;
  description: string;
  risk: RiskLevel;
};

type IdentityPreview = {
  name: string;
  browser: string;
  timezone: string;
  viewport: string;
  language: string;
};

const PRIVACY_LAYERS: readonly PrivacyLayer[] = [
  {
    name: "Browser fingerprint changes",
    description:
      "Canvas, WebGL, audio, font, and device signals cannot be changed by this page.",
    risk: "critical",
  },
  {
    name: "User-agent masking",
    description:
      "Changing browser headers requires a verified browser boundary and is unavailable here.",
    risk: "high",
  },
  {
    name: "Timezone and language spoofing",
    description:
      "A display preview cannot alter browser, network, or server-observed locale signals.",
    risk: "high",
  },
  {
    name: "WebRTC leak prevention",
    description:
      "No network interception, proxy, or IP leak control is connected to this route.",
    risk: "critical",
  },
  {
    name: "Behavioral noise",
    description:
      "This page does not inject synthetic mouse, keyboard, or browsing activity.",
    risk: "medium",
  },
];

const IDENTITY_PREVIEWS: readonly IdentityPreview[] = [
  {
    name: "Neutral desktop preview",
    browser: "Browser identity unavailable",
    timezone: "Timezone unavailable",
    viewport: "Viewport unavailable",
    language: "Language unavailable",
  },
  {
    name: "Neutral mobile preview",
    browser: "Browser identity unavailable",
    timezone: "Timezone unavailable",
    viewport: "Viewport unavailable",
    language: "Language unavailable",
  },
  {
    name: "Custom preview",
    browser: "No custom fingerprint stored",
    timezone: "No custom timezone stored",
    viewport: "No custom viewport stored",
    language: "No custom language stored",
  },
];

const riskStyles: Record<RiskLevel, string> = {
  critical: "border-red-500/30 text-red-300",
  high: "border-orange-500/30 text-orange-300",
  medium: "border-yellow-500/30 text-yellow-300",
  low: "border-emerald-500/30 text-emerald-300",
};

export default function GhostMode() {
  const [selectedPreview, setSelectedPreview] = useState(0);
  const [noiseLevel, setNoiseLevel] = useState(0);
  const [status, setStatus] = useState(
    "Privacy controls are unavailable locally. No browser or network mutation was started."
  );

  const announceUnavailable = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No browser, network, identity, or account mutation was started.`
    );
  };

  const preview = IDENTITY_PREVIEWS[selectedPreview];

  return (
    <main
      className="container max-w-6xl animate-page-in py-8"
      aria-labelledby="ghost-mode-title"
    >
      <header className="mb-8 space-y-4">
        <div data-ui-polish="batch-179" className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-mono text-indigo-200">
          <EyeOff className="h-3.5 w-3.5" aria-hidden="true" /> LOCAL PRIVACY
          READINESS
        </div>
        <div className="max-w-3xl">
          <h1
            id="ghost-mode-title"
            className="text-4xl font-bold tracking-tight"
          >
            Ghost Mode
          </h1>
          <p className="mt-2 text-muted-foreground">
            Review privacy boundaries without claiming anonymity, browser
            spoofing, or protection that this application cannot verify.
          </p>
        </div>
      </header>

      <section
        className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
        aria-label="Unavailable privacy service notice"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-semibold text-amber-100">
              Privacy protection service unavailable
            </h2>
            <p className="mt-1 text-sm leading-6 text-amber-100/75">
              No browser isolation, proxy, header control, network interception,
              identity store, or verified anonymity service is connected. The
              controls below are review-only and do not change how this browser
              or account is observed.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mb-6 grid gap-4 md:grid-cols-3"
        aria-label="Privacy readiness summary"
      >
        <Card className="border-border/40 bg-card/50 p-5">
          <div className="mb-3 flex items-center gap-2 text-emerald-300">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Local preview
            </span>
          </div>
          <p className="text-lg font-semibold">No sensitive mutation</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Selections remain in component memory and are not retained,
            transmitted, or applied.
          </p>
        </Card>
        <Card className="border-border/40 bg-card/50 p-5">
          <div className="mb-3 flex items-center gap-2 text-amber-300">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Protection status
            </span>
          </div>
          <p className="text-lg font-semibold">Unavailable</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No anonymity, fingerprint resistance, IP masking, or stealth
            guarantee is available.
          </p>
        </Card>
        <Card className="border-border/40 bg-card/50 p-5">
          <div className="mb-3 flex items-center gap-2 text-sky-300">
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Account safety
            </span>
          </div>
          <p className="text-lg font-semibold">No account changes</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No session, identity, notification, profile, or security setting is
            changed by this screen.
          </p>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section className="space-y-4" aria-labelledby="layers-title">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2
                id="layers-title"
                className="flex items-center gap-2 text-xl font-semibold"
              >
                <Fingerprint
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                Protection boundaries
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Each proposed layer is unavailable until a verified
                implementation exists.
              </p>
            </div>
            <Badge
              variant="outline"
              className="shrink-0 border-amber-400/30 text-amber-200"
            >
              0 active
            </Badge>
          </div>
          <div className="space-y-3">
            {PRIVACY_LAYERS.map(layer => (
              <Card
                key={layer.name}
                className="border-border/40 bg-card/40 p-4"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="mt-1 rounded-lg bg-secondary/60 p-2"
                    aria-hidden="true"
                  >
                    <WifiOff className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-medium">{layer.name}</h3>
                      <Badge
                        variant="outline"
                        className={`text-[10px] uppercase ${riskStyles[layer.risk]}`}
                      >
                        {layer.risk} risk
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-muted-foreground/30 text-muted-foreground"
                      >
                        Unavailable
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {layer.description}
                    </p>
                  </div>
                  <XCircle
                    className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                    aria-label="Unavailable"
                  />
                </div>
              </Card>
            ))}
          </div>
          <Card className="border-border/40 bg-card/50 p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="flex items-center gap-2 font-semibold">
                <SlidersHorizontal
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                Behavioral noise preview
              </h3>
              <span className="text-sm font-semibold text-muted-foreground">
                {noiseLevel}% local only
              </span>
            </div>
            <input
              aria-label="Local behavioral noise preview"
              className="w-full accent-primary"
              type="range"
              min="0"
              max="100"
              value={noiseLevel}
              onChange={event => setNoiseLevel(Number(event.target.value))}
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>None</span>
              <span>No synthetic activity is sent</span>
              <span>Maximum</span>
            </div>
          </Card>
        </section>

        <aside className="space-y-4" aria-labelledby="identity-preview-title">
          <div>
            <h2
              id="identity-preview-title"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <UserRound className="h-5 w-5 text-primary" aria-hidden="true" />
              Identity preview
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Illustrative labels only. No identity is generated or applied.
            </p>
          </div>
          <Card className="border-border/40 bg-card/50 p-4">
            <div className="space-y-2">
              {IDENTITY_PREVIEWS.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={selectedPreview === index}
                  onClick={() => setSelectedPreview(index)}
                  className={`w-full rounded-xl border p-3 text-left transition-colors ${selectedPreview === index ? "border-primary/50 bg-primary/10" : "border-border/30 bg-secondary/20 hover:bg-secondary/40"}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{item.name}</span>
                    {selectedPreview === index && (
                      <CheckCircle2
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Preview selection only
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-3 rounded-xl border border-border/30 bg-background/30 p-4">
              <div className="flex items-center gap-2 text-sm">
                <Monitor
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
                {preview.browser}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe2
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
                {preview.timezone}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RefreshCw
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
                {preview.viewport}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Fingerprint
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
                {preview.language}
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Random identity generation")}
            >
              <Shuffle className="mr-2 h-4 w-4" aria-hidden="true" />
              Generate identity unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/50 p-4">
            <h3 className="flex items-center gap-2 font-semibold">
              <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
              Session rotation
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Automatic identity rotation is unavailable. No timer, session
              mutation, or account operation is started.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-3 w-full"
              onClick={() => announceUnavailable("Session rotation")}
            >
              <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
              Rotation unavailable
            </Button>
          </Card>
        </aside>
      </div>

      <section
        className="mt-6 rounded-2xl border border-border/40 bg-card/30 p-5"
        aria-label="Privacy implementation requirements"
      >
        <div className="flex items-start gap-3">
          <LockKeyhole
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-semibold">
              Before production privacy controls exist
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              A real implementation needs an explicit threat model, consent,
              browser or network isolation, verified failure states, secure
              configuration, audit logs that exclude sensitive data, and clear
              limits on what can be protected. This page currently provides none
              of those controls.
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
        No Ghost Mode protection is active.
      </div>
    </main>
  );
}
