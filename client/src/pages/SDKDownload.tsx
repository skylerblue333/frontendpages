import { useMemo, useState } from "react";
import {
  Check,
  Download,
  Filter,
  KeyRound,
  LockKeyhole,
  Package,
  RefreshCw,
  ShieldAlert,
  TerminalSquare,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const packages = [
  {
    id: 1,
    name: "Web client SDK",
    category: "Web",
    detail:
      "A local package concept requiring API contract, auth flow, browser support, versioning, provenance, and release evidence.",
    state: "No artifact",
  },
  {
    id: 2,
    name: "Wallet integration SDK",
    category: "Crypto",
    detail:
      "A high-risk package concept requiring network, address validation, signing boundary, transaction status, custody, and security review.",
    state: "Blocked",
  },
  {
    id: 3,
    name: "HopeAI client SDK",
    category: "AI",
    detail:
      "An AI package concept requiring model contract, safety, privacy, rate limits, error semantics, observability, and evaluation.",
    state: "Unreleased",
  },
  {
    id: 4,
    name: "SkySchool content SDK",
    category: "Education",
    detail:
      "An education package concept requiring content schema, learner privacy, accessibility, curriculum authority, and support policy.",
    state: "Preview",
  },
];
export default function SDKDownload() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [platform, setPlatform] = useState("Platform not configured");
  const [version, setVersion] = useState("Version not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(packages.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      packages.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const pkg = packages.find(item => item.id === selected) ?? packages[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setPlatform("Platform not configured");
    setVersion("Version not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Package}
        eyebrow="SDK download · Release preview"
        title="Verify the artifact before distributing the client."
        description="Explore local web, crypto, AI, and education SDK package concepts with search, category filters, platform and version intent, integrity and security gates, save/reset, and blocked binary downloads. No package, version, artifact, signature, support promise, security certification, or release is connected."
        badge="Developer workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save package locally"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review release gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset package
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Packages",
              value: `${packages.length} local`,
              hint: "No artifact source",
              icon: Package,
              tone: "cyan",
            },
            {
              label: "Version",
              value: "Unconfigured",
              hint: "No release source",
              icon: TerminalSquare,
              tone: "violet",
            },
            {
              label: "Integrity",
              value: "Unverified",
              hint: "No signature source",
              icon: KeyRound,
              tone: "amber",
            },
            {
              label: "Download",
              value: "Blocked",
              hint: "No release evidence",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="SDK distribution evidence boundary">
          <strong>
            This is a local SDK-catalog preview, not a downloadable release.
          </strong>{" "}
          Package cards, filters, platform and version intent, release gates,
          saved state, and disabled downloads are browser concepts. No binary,
          version, checksum, signature, support level, security review,
          compatibility, API contract, or production release is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local SDK packages"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected package concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{pkg.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {pkg.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {pkg.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: pkg.category },
                  { label: "Platform", value: platform },
                  { label: "Version", value: version },
                  { label: "Artifact", value: "Unavailable" },
                  { label: "Integrity", value: "Unverified" },
                  { label: "Support", value: "Unconfigured" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Platform intent
                  <select
                    value={platform}
                    onChange={event => setPlatform(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Platform not configured</option>
                    <option>Browser intent</option>
                    <option>Node intent</option>
                    <option>Mobile intent</option>
                    <option>Server intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Version intent
                  <select
                    value={version}
                    onChange={event => setVersion(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Version not configured</option>
                    <option>Stable intent</option>
                    <option>Preview intent</option>
                    <option>Nightly intent</option>
                    <option>Long-term-support intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Download className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No SDK artifact loaded</p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed package builds, registry provenance,
                  checksums, signatures, compatibility tests, API contracts,
                  release notes, security review, and support before
                  distributing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  <Download className="mr-2 size-4" />
                  Download unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Verify unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  View release notes unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Report issue unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No release or security claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A package concept does not prove a binary, version,
                    checksum, signature, compatibility, security review, support
                    commitment, API behavior, or production release.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              SDK release gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real SDK distribution must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated package source, artifact provenance, version, platform, API contract, ownership, timestamp, and release record",
                "Checksums, signatures, registry policy, dependency inventory, vulnerability review, SBOM, and reproducible build evidence",
                "Browser, Node, mobile, server, wallet, payment, AI, education, accessibility, localization, and compatibility tests",
                "Authentication, authorization, rate limits, error semantics, privacy, telemetry, secret handling, support, and deprecation",
                "Crypto, financial, AI, educational, marketplace, security, and user-impact claims require domain review",
                "Downloads, install commands, documentation, release notes, incident response, rollback, and legal/support commitments require approval",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "SDK surface preserved",
              description:
                "Web, crypto, AI, education packages, filters, platform, version, artifact, verification, release notes, downloads, save/reset, and gates remain interactive.",
              icon: Package,
              status: "Local packages",
            },
            {
              title: "No binary theater",
              description:
                "Artifacts, versions, checksums, signatures, compatibility, security review, support, and production releases are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Provenance before download",
              description:
                "Real SDK distribution requires reproducible artifacts, integrity checks, contracts, compatibility tests, security review, and support ownership.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
