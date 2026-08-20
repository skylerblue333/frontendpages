import { useState } from "react";
import {
  Bell,
  Check,
  History,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  SlidersHorizontal,
  UserRound,
  WalletCards,
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
const tabs = [
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "privacy", label: "Privacy", icon: LockKeyhole },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: KeyRound },
  { id: "sessions", label: "Sessions", icon: History },
  { id: "wallet", label: "Wallet", icon: WalletCards },
  { id: "danger", label: "Danger zone", icon: ShieldAlert },
];
export default function Settings() {
  const [tab, setTab] = useState("profile");
  const [displayName, setDisplayName] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [productUpdates, setProductUpdates] = useState(true);
  const [allowMessages, setAllowMessages] = useState(false);
  const [twoFactorIntent, setTwoFactorIntent] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const [feedback, setFeedback] = useState("No account contract connected");
  const reset = () => {
    setTab("profile");
    setDisplayName("");
    setEmailUpdates(false);
    setProductUpdates(true);
    setAllowMessages(false);
    setTwoFactorIntent(false);
    setSaved(false);
    setShowGates(false);
    setFeedback("No account contract connected");
  };
  const save = () => {
    setSaved(true);
    setFeedback("Preferences saved locally");
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={SlidersHorizontal}
        eyebrow="Settings · Account controls"
        title="Make preferences clear without implying they are persisted."
        description="Explore local profile, privacy, notification, security, session, wallet, and account-removal controls with save/reset and evidence gates. No account record, identity, email delivery, 2FA enrollment, session history, wallet custody, or deletion action is connected."
        badge="Evidence-bounded settings workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={save}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save preferences"}
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
            {showGates ? "Close gates" : "Review settings gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Profile",
              value: "Local draft",
              hint: "No account source",
              icon: UserRound,
              tone: "cyan",
            },
            {
              label: "Security",
              value: twoFactorIntent ? "Intent" : "Unverified",
              hint: "No enrollment proof",
              icon: KeyRound,
              tone: "violet",
            },
            {
              label: "Sessions",
              value: "Unavailable",
              hint: "No session source",
              icon: History,
              tone: "amber",
            },
            {
              label: "Wallet",
              value: "Not connected",
              hint: "No custody",
              icon: WalletCards,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Settings evidence boundary">
          <strong>
            This is a local account-preferences preview, not evidence that any
            setting, identity, email, security factor, session, wallet,
            notification, or deletion request is persisted or executed.
          </strong>{" "}
          Form controls, toggles, saved state, and disabled account actions are
          browser concepts. No personal data, login history, 2FA enrollment,
          active session, wallet address, balance, seed phrase, message
          delivery, account deletion, or security outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-3">
            <div className="flex flex-wrap gap-2">
              {tabs.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  onClick={() => setTab(id)}
                  variant="outline"
                  className={
                    tab === id
                      ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-white/10 text-slate-400"
                  }
                >
                  <Icon className="mr-2 size-4" />
                  {label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                  {tabs.find(item => item.id === tab)?.label} settings
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  {tab === "profile"
                    ? "Profile draft"
                    : tab === "privacy"
                      ? "Privacy intent"
                      : tab === "notifications"
                        ? "Notification preferences"
                        : tab === "security"
                          ? "Security intent"
                          : tab === "sessions"
                            ? "Session visibility"
                            : tab === "wallet"
                              ? "Wallet boundary"
                              : "Account removal"}
                </h2>
              </div>
              <Badge
                variant="outline"
                className="border-amber-300/20 text-amber-200"
              >
                {feedback}
              </Badge>
            </div>
            {tab === "profile" && (
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm font-semibold text-slate-300">
                  Display name
                  <input
                    value={displayName}
                    onChange={event => setDisplayName(event.target.value)}
                    placeholder="Local draft only"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                  />
                </label>
                <div className="rounded-xl border border-white/10 p-4">
                  <p className="text-sm font-semibold">Email and identity</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    No email, account ID, verification state, avatar, or
                    identity record is available to this preview.
                  </p>
                </div>
              </div>
            )}
            {tab === "privacy" && (
              <div className="space-y-4">
                {[
                  {
                    label: "Allow community messages",
                    value: allowMessages,
                    set: setAllowMessages,
                    detail:
                      "Local preference only; no message inbox or delivery contract is connected.",
                  },
                  {
                    label: "Discoverability",
                    value: false,
                    set: () => undefined,
                    detail:
                      "No public profile, search index, or privacy contract is connected.",
                  },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4"
                  >
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="mt-2 text-sm text-slate-500">
                        {item.detail}
                      </p>
                    </div>
                    <button
                      aria-pressed={item.value}
                      onClick={() => item.set(!item.value)}
                      className={`h-6 w-11 rounded-full p-1 transition ${item.value ? "bg-cyan-300" : "bg-white/10"}`}
                    >
                      <span
                        className={`block size-4 rounded-full bg-white transition ${item.value ? "translate-x-5" : "translate-x-0"}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {tab === "notifications" && (
              <div className="space-y-4">
                {[
                  {
                    label: "Email updates",
                    value: emailUpdates,
                    set: setEmailUpdates,
                    detail:
                      "No email provider, recipient, delivery, opt-out, or audit source is connected.",
                  },
                  {
                    label: "Product updates",
                    value: productUpdates,
                    set: setProductUpdates,
                    detail:
                      "Local preference only; no notification event or delivery is asserted.",
                  },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4"
                  >
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="mt-2 text-sm text-slate-500">
                        {item.detail}
                      </p>
                    </div>
                    <button
                      aria-pressed={item.value}
                      onClick={() => item.set(!item.value)}
                      className={`h-6 w-11 rounded-full p-1 transition ${item.value ? "bg-cyan-300" : "bg-white/10"}`}
                    >
                      <span
                        className={`block size-4 rounded-full bg-white transition ${item.value ? "translate-x-5" : "translate-x-0"}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {tab === "security" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4">
                  <div>
                    <p className="font-semibold">
                      Two-factor enrollment intent
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      This toggle does not enroll an authenticator, issue a
                      code, change a session, or prove account protection.
                    </p>
                  </div>
                  <button
                    aria-pressed={twoFactorIntent}
                    onClick={() => setTwoFactorIntent(value => !value)}
                    className={`h-6 w-11 rounded-full p-1 transition ${twoFactorIntent ? "bg-cyan-300" : "bg-white/10"}`}
                  >
                    <span
                      className={`block size-4 rounded-full bg-white transition ${twoFactorIntent ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </button>
                </div>
                <div className="rounded-xl border border-dashed border-white/10 p-6">
                  <KeyRound className="size-7 text-slate-600" />
                  <p className="mt-3 font-semibold">
                    No security evidence loaded
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Connect authentication, MFA enrollment, recovery codes,
                    password policy, device binding, session revocation, audit
                    logging, and abuse controls before enabling real actions.
                  </p>
                </div>
              </div>
            )}
            {tab === "sessions" && (
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 p-5">
                  <p className="font-semibold">Active sessions unavailable</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    The browser cannot identify current device, location, IP,
                    last-active time, or other sessions without an authenticated
                    session-management contract.
                  </p>
                </div>
                <Button disabled className="bg-slate-700 text-slate-400">
                  Revoke sessions unavailable
                </Button>
              </div>
            )}
            {tab === "wallet" && (
              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 p-5">
                  <p className="text-xs text-slate-500">Wallet address</p>
                  <p className="mt-2 font-mono text-sm text-amber-200">
                    Not connected — wallet infrastructure is not enabled
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    No wallet address, ownership, balance, token, NFT,
                    transaction, private key, seed phrase, custody, staking, or
                    financial result is available.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button disabled className="bg-slate-700 text-slate-400">
                    Connect wallet unavailable
                  </Button>
                  <Button
                    disabled
                    variant="outline"
                    className="border-white/10 text-slate-500"
                  >
                    Transaction notifications unavailable
                  </Button>
                </div>
              </div>
            )}
            {tab === "danger" && (
              <div className="rounded-xl border border-red-300/20 bg-red-300/[0.05] p-6">
                <ShieldAlert className="size-7 text-red-300" />
                <p className="mt-3 text-xl font-black">
                  Account deletion is blocked
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Deletion requires authenticated identity, confirmation,
                  retention rules, export, dependency handling, audit, recovery
                  policy, and an approved backend contract. This preview cannot
                  delete an account or claim data removal.
                </p>
                <Button disabled className="mt-5 bg-red-950 text-red-300">
                  Delete account unavailable
                </Button>
              </div>
            )}
            {showGates && (
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                <p className="font-semibold text-amber-100">
                  No account-state claim
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A local setting does not prove persistence, identity, email
                  delivery, privacy enforcement, MFA enrollment, session
                  revocation, wallet custody, or deletion.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Settings-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real settings surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated account, tenant, identity, permission, CSRF protection, validation, persistence, optimistic failure, retry, audit, and notification behavior",
                "Privacy, retention, export, deletion, message delivery, profile discoverability, analytics, consent, and data-subject rights",
                "Password, MFA, recovery, device, session, login history, token revocation, abuse controls, security alerts, and audit",
                "Wallet, financial, crypto, NFT, staking, custody, transaction, balance, private-key, seed-phrase, and token claims require separate evidence",
                "Save, revoke, connect, delete, accessibility, confirmation, retry, and accountable approval require governed account operations",
                "A settings preview must not be presented as persisted preference, enrolled MFA, active session, verified login, connected wallet, or deleted account without evidence",
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
              title: "Settings surface preserved",
              description:
                "Profile, privacy, notifications, security, sessions, login history, wallet, danger zone, toggles, save/reset, and gates remain interactive.",
              icon: SlidersHorizontal,
              status: "Local controls",
            },
            {
              title: "No account theater",
              description:
                "Identity, persistence, email delivery, MFA, sessions, wallet custody, deletion, and security outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Contract before mutation",
              description:
                "Real settings require authenticated APIs, authorization, validation, persistence, audit, recovery, and safe failure handling.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
