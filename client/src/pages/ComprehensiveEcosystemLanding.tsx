import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CircleSlash2,
  Coins,
  Cpu,
  Globe2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type EcosystemArea =
  "All" | "Core" | "Financial" | "AI" | "Education" | "Community";
type AreaState = "All" | "Review" | "Planned" | "Unavailable";

type EcosystemModule = {
  id: string;
  name: string;
  area: Exclude<EcosystemArea, "All">;
  state: Exclude<AreaState, "All">;
  summary: string;
  source: string;
  owner: string;
  readiness: string;
  integration: string;
};

const modules: EcosystemModule[] = [
  {
    id: "core-platform",
    name: "Core platform",
    area: "Core",
    state: "Review",
    summary:
      "A local map of dashboard, accounts, profiles, settings, notifications, and admin concepts.",
    source: "Verified module inventory unavailable",
    owner: "Module owner unavailable",
    readiness: "Production readiness unavailable",
    integration: "Integration status unavailable",
  },
  {
    id: "financial-hub",
    name: "Financial and crypto hub",
    area: "Financial",
    state: "Unavailable",
    summary:
      "A local map of wallets, portfolio, exchange, NFT, mining, and market-data concepts without custody claims.",
    source: "Network and data source unavailable",
    owner: "Financial service owner unavailable",
    readiness: "Custody readiness unavailable",
    integration: "Blockchain integration unavailable",
  },
  {
    id: "hopeai",
    name: "HopeAI ecosystem",
    area: "AI",
    state: "Planned",
    summary:
      "A planned map of HopeAI, companion, marketplace, and control-center concepts pending verified model services.",
    source: "Model catalog unavailable",
    owner: "AI service owner unavailable",
    readiness: "Model readiness unavailable",
    integration: "AI integration unavailable",
  },
  {
    id: "skylearn",
    name: "SkyLearn education",
    area: "Education",
    state: "Planned",
    summary:
      "A planned map of courses, curriculum, quizzes, certifications, and student dashboard concepts.",
    source: "Curriculum registry unavailable",
    owner: "Education service owner unavailable",
    readiness: "Course delivery readiness unavailable",
    integration: "Credential integration unavailable",
  },
];

const areas: EcosystemArea[] = [
  "All",
  "Core",
  "Financial",
  "AI",
  "Education",
  "Community",
];
const states: AreaState[] = ["All", "Review", "Planned", "Unavailable"];

const areaIcon = (area: EcosystemModule["area"]) => {
  const icons = {
    Core: Cpu,
    Financial: Coins,
    AI: Sparkles,
    Education: BookOpen,
    Community: Users,
  };
  return icons[area];
};

export default function ComprehensiveEcosystemLanding() {
  const [area, setArea] = useState<EcosystemArea>("All");
  const [state, setState] = useState<AreaState>("All");
  const [selectedId, setSelectedId] = useState(modules[0].id);
  const [status, setStatus] = useState(
    "Ecosystem inventory unavailable. Showing local module concepts only."
  );

  const filtered = useMemo(
    () =>
      modules.filter(
        module =>
          (area === "All" || module.area === area) &&
          (state === "All" || module.state === state)
      ),
    [area, state]
  );
  const selected =
    filtered.find(module => module.id === selectedId) ??
    filtered[0] ??
    modules[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No financial, blockchain, AI, education, account, notification, or analytics operation was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Globe2}
        title="SKYCOIN4444 ecosystem"
        subtitle="Explore a local module map without fabricated scale, valuation, mining earnings, integrations, or production readiness."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900/70 to-violet-400/10 p-6 md:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-cyan-200">
              Ecosystem map preview
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              One platform map, clearly labeled.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
              Review how the known SKYCOIN4444 areas fit together while keeping
              service status, ownership, data provenance, and production
              readiness explicit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/dashboard">
                <Button>
                  Open dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                onClick={() => blocked("Launch platform")}
                variant="outline"
              >
                Launch unavailable
              </Button>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Ecosystem inventory unavailable.</strong> No authoritative
            module registry, production telemetry, valuation source, chain
            provider, model catalog, or education service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Ecosystem inventory remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset map
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Known areas
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Explore module concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  The local fixtures are navigation and review aids only. They
                  do not prove that a module is deployed, connected, funded, or
                  available to users.
                </p>
              </div>
              <Network className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Ecosystem area filter"
            >
              {areas.map(item => (
                <Button
                  aria-pressed={area === item}
                  key={item}
                  onClick={() => setArea(item)}
                  size="sm"
                  variant={area === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Ecosystem readiness filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(module => {
                const Icon = areaIcon(module.area);
                return (
                  <button
                    aria-pressed={selected.id === module.id}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === module.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                    key={module.id}
                    onClick={() => setSelectedId(module.id)}
                    type="button"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-medium">{module.name}</p>
                          <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                            {module.state}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-cyan-200">
                          {module.area}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {module.summary}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local module fixtures match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected module
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.area} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Source", selected.source],
                  ["Owner", selected.owner],
                  ["Readiness", selected.readiness],
                  ["Integration", selected.integration],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No deployment state, user count, valuation, mining result,
                wallet custody, model capability, education credential, or
                integration health is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Open module")}
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" /> Open unavailable
                </Button>
                <Button
                  onClick={() => blocked("View live data")}
                  variant="outline"
                >
                  <CircleSlash2 className="mr-2 h-4 w-4" /> Live data
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Financial, wallet, AI, education, and community features
                  require verified service boundaries, authorization, data
                  provenance, and failure states.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  This map intentionally avoids claims about production
                  readiness, economic value, mining earnings, or security
                  certification.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
