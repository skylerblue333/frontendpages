import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  Shield,
  ShieldAlert,
  Smartphone,
  UserRound,
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
const settings = [
  {
    id: 1,
    name: "Multi-factor authentication",
    category: "Authentication",
    detail:
      "A local MFA concept covering enrollment, factor types, recovery codes, step-up prompts, device trust, rate limits, and account recovery.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Session and device security",
    category: "Sessions",
    detail:
      "A local session concept covering secure cookies, expiry, revocation, device review, concurrent sessions, and sensitive-action reauthentication.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Password and recovery",
    category: "Recovery",
    detail:
      "A local recovery concept covering password policy, reset proof, lockout, phishing resistance, notifications, and support escalation.",
    state: "Preview",
  },
  {
    id: 4,
    name: "Privacy and security alerts",
    category: "Privacy",
    detail:
      "A local alert concept covering security notifications, consent, sensitive data, access, retention, deletion, and incident communication.",
    state: "Blocked",
  },
];
export default function SecuritySettings() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [state, setState] = useState("Setting state not configured");
  const [recovery, setRecovery] = useState("Recovery intent not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(settings.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      settings.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const setting = settings.find(item => item.id === selected) ?? settings[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setState("Setting state not configured");
    setRecovery("Recovery intent not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Shield}
        eyebrow="Security settings · Account preview"
        title="Protect the account only after the control is real."
        description="Explore local MFA, session, recovery, and privacy-alert concepts with search, category filters, setting and recovery intent, save/reset, audit gates, and blocked account-security actions. No account, user, password, MFA factor, session, device, recovery code, notification, privacy setting, or security outcome is connected."
        badge="Account-security workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save setting locally"}
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
            {showGates ? "Close gates" : "Review security gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset settings
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Setting concepts",
              value: `${settings.length} local`,
              hint: "No account source",
              icon: Shield,
              tone: "cyan",
            },
            {
              label: "MFA",
              value: "Unconfigured",
              hint: "No factor source",
              icon: KeyRound,
              tone: "violet",
            },
            {
              label: "Sessions",
              value: "Unavailable",
              hint: "No session source",
              icon: Smartphone,
              tone: "amber",
            },
            {
              label: "Recovery",
              value: "Blocked",
              hint: "No identity source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Account-security evidence boundary">
          <strong>
            This is a local account-security design preview, not evidence that
            an account is protected, MFA is enabled, a password is changed, a
            session is revoked, or recovery works.
          </strong>{" "}
          Setting cards, filters, state/recovery intent, saved state, audit
          gates, and disabled security actions are browser concepts. No account,
          user, password, factor, session, device, recovery code, notification,
          privacy setting, security control, or authentication outcome is
          asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local security settings"
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
                    Selected setting concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{setting.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {setting.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {setting.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: setting.category },
                  { label: "State", value: state },
                  { label: "Recovery", value: recovery },
                  { label: "Account", value: "Unavailable" },
                  { label: "Audit", value: "Required" },
                  { label: "Outcome", value: "Not claimed" },
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
                  Setting state
                  <select
                    value={state}
                    onChange={event => setState(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Setting state not configured</option>
                    <option>Design intent</option>
                    <option>Implementation intent</option>
                    <option>Test-required intent</option>
                    <option>Owner-review intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Recovery intent
                  <select
                    value={recovery}
                    onChange={event => setRecovery(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Recovery intent not configured</option>
                    <option>Recovery-code intent</option>
                    <option>Support-reviewed intent</option>
                    <option>Device-recovery intent</option>
                    <option>Phishing-resistant intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Shield className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No account-security evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect authenticated account scope, factor enrollment, secure
                  password handling, session storage, device trust, recovery
                  proof, notifications, privacy controls, audit, and support
                  before changing a setting.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Enable unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Change password unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Revoke sessions unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Rotate keys unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No authentication or security claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A setting concept does not prove an account, user, password,
                    factor, session, device, recovery code, notification,
                    privacy control, or security outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Account-security gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What real security settings must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated account, user, setting, factor, device, session, timestamp, tenant, locale, and audit provenance",
                "Password hashing, reset proof, MFA enrollment, recovery codes, lockout, rate limits, phishing resistance, secure cookies, and step-up authentication",
                "Session listing, revocation, device trust, notifications, sensitive-action reauthentication, privacy, retention, deletion, export, and support",
                "Account, identity, privacy, security, financial, crypto, AI, health, legal, and user-impact claims require domain review",
                "Enable, change, revoke, rotate, recover, notify, export, accessibility, and accountable approval require governed account operations",
                "A settings preview must not be presented as an active account security control, authentication guarantee, or certification without evidence",
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
              title: "Security-settings surface preserved",
              description:
                "MFA, sessions, recovery, privacy alerts, filters, setting states, password, revoke, rotate, save/reset, and gates remain interactive.",
              icon: Shield,
              status: "Local settings",
            },
            {
              title: "No authentication theater",
              description:
                "Accounts, users, passwords, factors, sessions, devices, recovery codes, notifications, privacy controls, and outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Identity before changing",
              description:
                "Real settings require authenticated scope, secure storage, factor and recovery controls, audit, support, and tested account operations.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
