import { useState } from "react";
import {
  AlertTriangle,
  Copy,
  DollarSign,
  ExternalLink,
  Link2,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ProgramState = "Unavailable" | "Review" | "Planned";
type LocalReferral = {
  id: string;
  label: string;
  state: ProgramState;
  note: string;
};
const referrals: LocalReferral[] = [
  {
    id: "attribution",
    label: "Referral attribution",
    state: "Unavailable",
    note: "No verified referral event or participant identity is connected.",
  },
  {
    id: "earnings",
    label: "Earnings ledger",
    state: "Unavailable",
    note: "No commission, conversion, token, or account balance is available.",
  },
  {
    id: "payout",
    label: "Payout workflow",
    state: "Planned",
    note: "No wallet, payment rail, tax, or reconciliation service is connected.",
  },
];
const states: Array<"All" | ProgramState> = [
  "All",
  "Unavailable",
  "Review",
  "Planned",
];

export default function AffiliateDashboard() {
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [activeTab, setActiveTab] = useState<"overview" | "link" | "rules">(
    "overview"
  );
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(
    "Affiliate program unavailable. Showing local policy fixtures only."
  );
  const filtered = referrals.filter(
    item => stateFilter === "All" || item.state === stateFilter
  );
  const copyPreview = async () => {
    const preview = "Referral link unavailable — local preview only";
    try {
      await navigator.clipboard.writeText(preview);
      setCopied(true);
      setStatus(
        "Local preview text copied. No personal referral code or attribution link was created."
      );
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setStatus(
        "Clipboard access unavailable. No referral link or external action was attempted."
      );
    }
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No identity, attribution, account, payment, wallet, external share, or payout request was started.`
    );
  const reset = () => {
    setStateFilter("All");
    setActiveTab("overview");
    setCopied(false);
    setStatus(
      "Affiliate preview reset locally. No program, referral, earnings, payout, or account state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-400/10 text-purple-200">
              <Users aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Affiliate dashboard
                </h1>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-2.5 py-1 text-xs font-medium text-purple-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review referral-program concepts without attribution, earnings,
                payout, identity, wallet, or network claims.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset affiliate dashboard preview"
            className="self-start border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white"
            onClick={reset}
            variant="outline"
          >
            <RotateCcw aria-hidden="true" className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <div className="flex gap-3">
            <AlertTriangle
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Affiliate program unavailable.
              </strong>{" "}
              No verified program terms, referral identity, attribution ledger,
              earnings source, payout rail, wallet, or external sharing channel
              is connected. All values below are local policy fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_330px]">
          <div className="space-y-6">
            <div
              aria-label="Affiliate dashboard sections"
              className="flex flex-wrap gap-2"
              role="tablist"
            >
              {(["overview", "link", "rules"] as const).map(tab => (
                <Button
                  aria-selected={activeTab === tab}
                  className={
                    activeTab === tab
                      ? "bg-purple-500 text-white hover:bg-purple-400"
                      : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                  }
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setStatus(
                      `${tab === "overview" ? "Overview" : tab === "link" ? "Referral link" : "Program rules"} preview selected locally.`
                    );
                  }}
                  role="tab"
                  variant={activeTab === tab ? "default" : "outline"}
                >
                  {tab === "overview"
                    ? "Overview"
                    : tab === "link"
                      ? "Referral link"
                      : "Program rules"}
                </Button>
              ))}
            </div>
            {activeTab === "overview" && (
              <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <Users
                      aria-hidden="true"
                      className="h-5 w-5 text-cyan-200"
                    />
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                      Verified referrals
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-200">
                      Unavailable
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      No attribution source
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <DollarSign
                      aria-hidden="true"
                      className="h-5 w-5 text-emerald-200"
                    />
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                      Earnings
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-200">
                      Unavailable
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      No ledger connected
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <Wallet
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-200"
                    />
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">
                      Payout
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-200">
                      Unavailable
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      No payment rail
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Program components
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                      Use the state filter to review each local boundary.
                    </p>
                  </div>
                  <div
                    aria-label="Filter program component state"
                    className="flex flex-wrap gap-2"
                    role="group"
                  >
                    {states.map(state => (
                      <Button
                        aria-pressed={stateFilter === state}
                        className={
                          stateFilter === state
                            ? "bg-cyan-500 text-white hover:bg-cyan-400"
                            : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                        }
                        key={state}
                        onClick={() => {
                          setStateFilter(state);
                          setStatus(
                            `${state} program components selected locally.`
                          );
                        }}
                        size="sm"
                        variant={stateFilter === state ? "default" : "outline"}
                      >
                        {state}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  {filtered.map(item => (
                    <div
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                      key={item.id}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-slate-200">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {item.note}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                          {item.state}
                        </span>
                      </div>
                    </div>
                  ))}
                  {filtered.length === 0 && (
                    <p className="rounded-xl border border-dashed border-slate-700 p-6 text-center text-sm text-slate-500">
                      No local program components match this state.
                    </p>
                  )}
                </div>
              </Card>
            )}
            {activeTab === "link" && (
              <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="flex gap-3">
                  <Link2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple-200"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Referral link preview
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Personal referral links require an authenticated identity
                      and a verified attribution service. Neither is connected
                      in this preview.
                    </p>
                  </div>
                </div>
                <label className="mt-6 block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Local placeholder
                  </span>
                  <div className="flex gap-2">
                    <Input
                      aria-describedby="link-boundary"
                      className="border-slate-700 bg-slate-950/70 font-mono text-xs text-slate-400"
                      readOnly
                      value="Referral link unavailable — local preview only"
                    />
                    <Button
                      aria-label="Copy local referral preview"
                      className="shrink-0 border-slate-700 text-slate-200 hover:bg-slate-800"
                      onClick={copyPreview}
                      variant="outline"
                    >
                      <Copy aria-hidden="true" className="mr-2 h-4 w-4" />
                      {copied ? "Copied" : "Copy preview"}
                    </Button>
                  </div>
                </label>
                <p
                  className="mt-3 text-xs leading-5 text-slate-600"
                  id="link-boundary"
                >
                  Copying only places this explanatory local text on the
                  clipboard; it does not create a code, track a click, or
                  attribute a participant.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  <Button
                    className="border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => blocked("Social sharing")}
                    variant="outline"
                  >
                    <ExternalLink aria-hidden="true" className="mr-2 h-4 w-4" />
                    Share unavailable
                  </Button>
                  <Button
                    className="border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => blocked("Referral activation")}
                    variant="outline"
                  >
                    <ShieldCheck aria-hidden="true" className="mr-2 h-4 w-4" />
                    Activate unavailable
                  </Button>
                  <Button
                    className="border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => blocked("Payout request")}
                    variant="outline"
                  >
                    <Wallet aria-hidden="true" className="mr-2 h-4 w-4" />
                    Payout unavailable
                  </Button>
                </div>
              </Card>
            )}
            {activeTab === "rules" && (
              <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
                <h2 className="text-xl font-semibold text-white">
                  Program rules preview
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  No program terms are active. These review points describe what
                  would be required before a referral program could be enabled.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="font-medium text-slate-200">Attribution</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Consent, verified events, anti-abuse controls, and
                      provenance would be required.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="font-medium text-slate-200">Payouts</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Reconciliation, identity, tax handling, wallet safety, and
                      human review would be required.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="font-medium text-slate-200">Disclosure</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Rates, eligibility, timing, exclusions, and dispute
                      handling would need verifiable terms.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="font-medium text-slate-200">Auditability</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Every referral, adjustment, and payout state would need an
                      immutable audit trail.
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Account boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No authenticated user, personal code, participant, referral
                    tree, earnings ledger, or account balance is available in
                    this preview.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Financial safety
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Withdrawal is blocked because no verified earnings, wallet,
                    payment provider, payout approval, or reconciliation service
                    exists.
                  </p>
                </div>
              </div>
            </Card>
            <p
              aria-live="polite"
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
