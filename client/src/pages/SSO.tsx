import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
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
const providers = [
  {
    id: 1,
    name: "Enterprise identity provider",
    category: "OIDC",
    detail:
      "A local OIDC concept requiring issuer discovery, client registration, redirect validation, claims mapping, session policy, logout, and audit.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "SAML workforce provider",
    category: "SAML",
    detail:
      "A SAML concept requiring metadata, certificate validation, audience and recipient checks, assertion mapping, clock skew, and recovery.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Education identity provider",
    category: "Education",
    detail:
      "An education federation concept requiring learner privacy, organization scope, safeguarding, consent, role mapping, and support.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Community identity provider",
    category: "Community",
    detail:
      "A community federation concept requiring verified domain, moderation roles, anti-abuse controls, appeals, privacy, and lifecycle review.",
    state: "Preview",
  },
];
export default function SSO() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [protocol, setProtocol] = useState("Protocol not configured");
  const [claims, setClaims] = useState("Claims mapping not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(providers.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      providers.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const provider = providers.find(item => item.id === selected) ?? providers[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setProtocol("Protocol not configured");
    setClaims("Claims mapping not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-201" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={KeyRound}
        eyebrow="SSO · Federated identity preview"
        title="Validate the identity boundary before trusting a claim."
        description="Explore local OIDC, SAML, education, and community federated-identity concepts with search, category filters, protocol and claims intent, domain and session gates, save/reset, and blocked connect/sign-in actions. No identity provider, user, assertion, session, role, authentication result, or security certification is connected."
        badge="Authentication governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save provider locally"}
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
            {showGates ? "Close gates" : "Review identity gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset provider
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Providers",
              value: `${providers.length} local`,
              hint: "No IdP source",
              icon: KeyRound,
              tone: "cyan",
            },
            {
              label: "Protocol",
              value: "Unconfigured",
              hint: "No federation source",
              icon: LockKeyhole,
              tone: "violet",
            },
            {
              label: "Sessions",
              value: "Unavailable",
              hint: "No auth source",
              icon: UsersRound,
              tone: "amber",
            },
            {
              label: "Sign in",
              value: "Blocked",
              hint: "No identity evidence",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Federated-identity evidence boundary">
          <strong>
            This is a local SSO configuration preview, not evidence that a
            provider, user, assertion, session, or authentication result exists.
          </strong>{" "}
          Provider cards, filters, protocol and claims intent, saved state,
          identity gates, and disabled connect/sign-in actions are browser
          concepts. No issuer, client secret, certificate, redirect, user
          identity, role, session, login, logout, recovery, security, or
          compliance outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local identity providers"
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
                    Selected provider concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{provider.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {provider.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {provider.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: provider.category },
                  { label: "Protocol", value: protocol },
                  { label: "Claims", value: claims },
                  { label: "Domain", value: "Unconfigured" },
                  { label: "Session", value: "Required" },
                  { label: "Recovery", value: "Required" },
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
                  Protocol intent
                  <select
                    value={protocol}
                    onChange={event => setProtocol(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Protocol not configured</option>
                    <option>OIDC intent</option>
                    <option>SAML intent</option>
                    <option>Managed federation intent</option>
                    <option>Test identity intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Claims mapping intent
                  <select
                    value={claims}
                    onChange={event => setClaims(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Claims mapping not configured</option>
                    <option>Least-privilege claims</option>
                    <option>Role-mapping intent</option>
                    <option>Tenant-scope intent</option>
                    <option>Privacy-minimized intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <KeyRound className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No federated-identity evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed issuer metadata, client registration,
                  certificates, redirect policy, claim mapping, domain
                  verification, session controls, logout, recovery, privacy, and
                  audit before connecting.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Connect unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Sign in unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Test assertion unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Disconnect unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No identity or authentication claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    An SSO concept does not prove an issuer, user, assertion,
                    role, session, login, logout, recovery, access decision,
                    security control, or compliance outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Federated-identity gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real SSO system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Issuer, tenant, client, redirect, domain, certificate, audience, recipient, nonce, state, timestamp, and environment",
                "OIDC/SAML validation, signature, clock skew, claim mapping, role scope, session, logout, recovery, MFA, and revocation",
                "Least privilege, IDOR protection, CSRF, replay protection, secure cookies, rate limits, secrets, audit, and incident response",
                "Privacy, consent, data minimization, retention, deletion, export, lawful access, learner safeguarding, and support ownership",
                "Wallet, payment, blockchain, financial, AI, education, marketplace, admin, and user-impact claims require domain review",
                "Connect, sign in, test, disconnect, rotate, recover, notify, accessibility, and accountable approval",
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
              title: "SSO surface preserved",
              description:
                "OIDC, SAML, education, community providers, filters, protocol, claims, domains, sessions, recovery, connect, sign-in, test, disconnect, save/reset, and gates remain interactive.",
              icon: KeyRound,
              status: "Local providers",
            },
            {
              title: "No identity theater",
              description:
                "Issuers, users, assertions, sessions, roles, logins, security, privacy, compliance, and authentication outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Validation before trust",
              description:
                "Real SSO requires secure federation validation, claim minimization, session control, recovery, privacy, audit, and server-side enforcement.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
