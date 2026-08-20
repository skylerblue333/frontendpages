import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Version and capability definitions",
    area: "Product",
    description:
      "No release version, capability contract, availability, performance multiplier, launch date, or support window is verified.",
  },
  {
    title: "Domain-specific safety review",
    area: "Safety",
    description:
      "No medical, legal, financial, autonomous trading, multimodal, or superintelligence capability has approved domain controls.",
  },
  {
    title: "Provider, billing, and entitlement",
    area: "Operations",
    description:
      "No provider, plan, billing, quota, entitlement, migration, rollback, or account authorization workflow exists.",
  },
  {
    title: "Evaluation and acceptance",
    area: "Assurance",
    description:
      "No benchmark, red-team result, quality evaluation, incident evidence, operational acceptance, or release decision is loaded.",
  },
  {
    title: "Activation and rollback",
    area: "Change control",
    description:
      "No activation, upgrade, downgrade, rollback, notification, audit, support, or recovery action is available.",
  },
];
export default function HopeAIUpgrades() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Hope AI upgrades are unavailable locally. No version, capability, entitlement, release, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No version, capability, billing, entitlement, activation, or rollback record was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="hope-ai-upgrades-title"
    >
      <div data-ui-polish="batch-192" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Sparkles className="size-3.5" aria-hidden="true" /> Release
                  readiness
                </Badge>
                <Badge variant="secondary">No upgrade service</Badge>
              </div>
              <h1
                id="hope-ai-upgrades-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Hope AI upgrades readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the release, domain-safety, provider, billing,
                evaluation, and change-control contracts required before any AI
                capability can be advertised or activated.
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
                Upgrade service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No version roadmap, capability release, provider, billing,
                safety review, evaluation, entitlement, or activation system is
                connected. This is a governance workspace, not a feature catalog
                or release promise.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Sparkles
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No version claims</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No release number, capability, performance multiplier, launch
                date, or support window is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No activation scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No provider, plan, billing, quota, entitlement, migration, or
                authorization workflow exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No acceptance claim</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No benchmark, red-team result, safety review, operational
                acceptance, or release decision is presented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Upgrade-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              activates a capability, changes a plan, calls a provider, or
              records a release decision.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Hope AI upgrade readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter upgrade requirements"
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
                  No upgrade notes match “{query}”.
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
                A production upgrade program needs versioned capability
                contracts, domain-specific safety review, providers and billing,
                entitlement controls, benchmarks, red-team evidence, operational
                acceptance, change management, rollback, support, and
                observability. No roadmap or activation claim is made here.
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
