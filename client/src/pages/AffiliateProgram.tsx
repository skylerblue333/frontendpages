import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Gift,
  Info,
  Link2,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ProgramState = "Review" | "Planned" | "Unavailable";
type AffiliateFixture = {
  id: string;
  title: string;
  state: ProgramState;
  summary: string;
  attribution: string;
  reward: string;
  boundary: string;
};
const programs: AffiliateFixture[] = [
  {
    id: "community",
    title: "Community referral",
    state: "Review",
    summary:
      "A local program concept for sharing approved ecosystem resources.",
    attribution: "Attribution window unavailable",
    reward: "Commission policy review required",
    boundary:
      "No referrer, recipient, link, campaign, conversion, or identity record is connected.",
  },
  {
    id: "education",
    title: "Education partner",
    state: "Planned",
    summary:
      "A local partner concept for course discovery with consent controls pending.",
    attribution: "Partner attribution unavailable",
    reward: "Reward and payout source unavailable",
    boundary:
      "No learner, partner, enrollment, referral, payout, tax, or notification record is available.",
  },
  {
    id: "ecosystem",
    title: "Ecosystem advocate",
    state: "Unavailable",
    summary:
      "A restricted program concept pending fraud, privacy, and reconciliation review.",
    attribution: "Conversion source unavailable",
    reward: "Ledger and payout provider unavailable",
    boundary:
      "No account, balance, payment, commission, fraud signal, or financial record is available.",
  },
];
const states: Array<"All" | ProgramState> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];

export default function AffiliateProgram() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] =
    useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(programs[0].id);
  const [status, setStatus] = useState(
    "Affiliate service unavailable. Showing local referral-program fixtures only."
  );
  const filtered = useMemo(
    () =>
      programs.filter(
        program =>
          (stateFilter === "All" || program.state === stateFilter) &&
          `${program.title} ${program.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, stateFilter]
  );
  const selected =
    programs.find(program => program.id === selectedId) ?? programs[0];
  const reset = () => {
    setQuery("");
    setStateFilter("All");
    setSelectedId(programs[0].id);
    setStatus(
      "Affiliate preview reset locally. No identity, referral, attribution, commission, payout, or financial state changed."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No referral, identity, attribution, commission, payout, notification, or financial request was started.`
    );
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-pink-400/25 bg-pink-400/10 text-pink-200">
              <Link2 aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Affiliate program
                </h1>
                <span className="rounded-full border border-pink-400/20 bg-pink-400/10 px-2.5 py-1 text-xs font-medium text-pink-200">
                  Local preview
                </span>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-slate-400">
                Review referral-program concepts without identifying people,
                tracking clicks, calculating commissions, or initiating payouts.
              </p>
            </div>
          </div>
          <Button
            aria-label="Reset affiliate program preview"
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
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
            />
            <p>
              <strong className="font-semibold text-amber-100">
                Affiliate service unavailable.
              </strong>{" "}
              No referral system, identity store, attribution engine, commission
              ledger, payout provider, tax service, notification channel, or
              financial record is connected. The programs below are local
              fixtures.
            </p>
          </div>
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block flex-1">
                <span className="sr-only">Search local affiliate fixtures</span>
                <Link2
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                />
                <Input
                  className="border-slate-700 bg-slate-950/70 pl-9 text-slate-200 placeholder:text-slate-600"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search program fixtures"
                  value={query}
                />
              </label>
              <div
                aria-label="Filter affiliate program state"
                className="flex flex-wrap gap-2"
                role="group"
              >
                {states.map(option => (
                  <Button
                    aria-pressed={stateFilter === option}
                    className={
                      stateFilter === option
                        ? "bg-pink-500 text-white hover:bg-pink-400"
                        : "border-slate-700 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }
                    key={option}
                    onClick={() => {
                      setStateFilter(option);
                      setStatus(`${option} affiliate state selected locally.`);
                    }}
                    size="sm"
                    variant={stateFilter === option ? "default" : "outline"}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {filtered.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-8 text-center">
                  <Link2
                    aria-hidden="true"
                    className="mx-auto h-8 w-8 text-slate-600"
                  />
                  <p className="mt-3 font-medium text-slate-300">
                    No matching local programs
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Try another state or search term.
                  </p>
                </div>
              ) : (
                filtered.map(program => (
                  <button
                    aria-pressed={program.id === selectedId}
                    className={`flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-colors ${program.id === selectedId ? "border-pink-400/35 bg-pink-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"}`}
                    key={program.id}
                    onClick={() => {
                      setSelectedId(program.id);
                      setStatus(
                        `${program.title} selected for local referral review.`
                      );
                    }}
                    type="button"
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-pink-200">
                      <Link2 aria-hidden="true" className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-200">
                          {program.title}
                        </p>
                        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          {program.state}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {program.summary}
                      </p>
                      <p className="mt-2 text-xs text-slate-600">
                        {program.attribution} · payout unavailable
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
            <p
              aria-live="polite"
              className="mt-6 rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-6 text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected program
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {selected.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {selected.boundary}
              </p>
              <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Attribution posture
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {selected.attribution}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Reward</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selected.reward}
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Identity</p>
                    <p className="mt-1 text-sm text-slate-200">Unavailable</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Clicks, conversions, commissions, balances, payouts, tax, and
                  fraud signals are unavailable.
                </p>
              </div>
              <Button
                className="mt-5 w-full border-amber-400/30 text-amber-100 hover:bg-amber-400/10"
                onClick={() => blocked("Create referral")}
                variant="outline"
              >
                <CircleSlash2 aria-hidden="true" className="mr-2 h-4 w-4" />
                Referral unavailable
              </Button>
            </Card>
            <Card className="border-slate-800 bg-slate-700/10 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-pink-200"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-200">
                    Privacy and payout boundary
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    No referrer, recipient, link, click, campaign, conversion,
                    commission, balance, payment, tax, fraud, notification, or
                    payout operation is available. Future programs require
                    consent, duplicate protection, reconciliation, and
                    auditability.
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
                    Program posture
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Participant count, click-through, conversion rate,
                    commission balance, payout status, fraud review, and
                    financial metrics are unavailable rather than estimated.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3 text-slate-600">
                <Gift aria-hidden="true" className="h-5 w-5" />
                <Users aria-hidden="true" className="h-5 w-5" />
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
