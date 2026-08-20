import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  Gamepad2,
  FileSearch,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Game catalog and platform provenance",
    area: "Catalog",
    description:
      "No game, developer, publisher, version, platform, rating, age classification, artwork, license, or store source is connected.",
  },
  {
    title: "Device compatibility and performance",
    area: "Quality",
    description:
      "No device capability, operating-system version, screen-size, input, network, battery, performance, crash, or accessibility profile is verified.",
  },
  {
    title: "Accounts, identity, and safety",
    area: "Safety",
    description:
      "No player account, parental control, age gate, moderation, report, block, chat, anti-cheat, or recovery workflow is configured.",
  },
  {
    title: "Purchases and entitlements",
    area: "Commerce",
    description:
      "No payment provider, price, currency, purchase, refund, subscription, virtual item, entitlement, or transaction record exists.",
  },
  {
    title: "Privacy and telemetry",
    area: "Governance",
    description:
      "No consent, data minimization, analytics event, advertising identifier, retention, deletion, export, access log, or incident policy is verified.",
  },
];
export default function MobileGaming() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile gaming is unavailable locally. No game, player, device, purchase, entitlement, telemetry, or social record was loaded or saved."
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
      `${action} is unavailable locally. No game, player, device, purchase, entitlement, telemetry, social, or gaming-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-gaming-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Smartphone className="size-3.5" aria-hidden="true" />{" "}
                  Mobile-gaming readiness
                </Badge>
                <Badge variant="secondary">No game catalog</Badge>
              </div>
              <h1
                id="mobile-gaming-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileGaming readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review game provenance, mobile compatibility, player safety,
                purchases, entitlements, privacy, telemetry, accessibility, and
                operational support without implying that games, players,
                gameplay, or commerce data exist.
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
                Mobile gaming is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No game catalog, mobile build, device compatibility service,
                account system, moderation layer, payment provider, entitlement
                store, telemetry pipeline, or persistence layer is connected.
                This workspace cannot launch, install, purchase, or claim a
                game.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Gamepad2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No game records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No game, developer, version, platform, rating, age
                classification, artwork, or license is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Smartphone
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No player state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, device, session, progression, chat, moderation,
                accessibility, or support state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No gaming actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No launch, install, purchase, entitlement, chat, report,
                analytics, or gaming-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Mobile-gaming requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              opens a game, reads device data, creates an account, submits a
              purchase, or saves telemetry or player data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile gaming readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter mobile-gaming requirements"
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
                  No mobile-gaming notes match “{query}”.
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
                Production mobile gaming requires catalog provenance, tested
                mobile builds, device and accessibility compatibility, accounts
                and parental controls, moderation and anti-cheat, secure
                purchases and entitlements, privacy and telemetry consent,
                support, and incident recovery. No game, player, purchase,
                entitlement, telemetry, or social record is claimed here.
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
