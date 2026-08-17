import { useMemo, useState } from "react";
import {
  BadgeDollarSign,
  CircleSlash2,
  FileDown,
  HandCoins,
  LockKeyhole,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type FundingProgram = "All" | "Grant" | "Fellowship" | "Community";
type FundingState = "All" | "Review" | "Open" | "Unavailable";

type FundingConcept = {
  id: string;
  title: string;
  program: Exclude<FundingProgram, "All">;
  state: Exclude<FundingState, "All">;
  summary: string;
  sponsor: string;
  budget: string;
  eligibility: string;
  application: string;
  decision: string;
  payout: string;
};

const fundingConcepts: FundingConcept[] = [
  {
    id: "creator-grant",
    title: "Creator ecosystem grant",
    program: "Grant",
    state: "Review",
    summary:
      "A local funding-program concept for ecosystem creators pending sponsor governance, eligibility review, and application privacy controls.",
    sponsor: "Sponsor identity unavailable",
    budget: "Budget and currency unavailable",
    eligibility: "Eligibility criteria unavailable",
    application: "Application status unavailable",
    decision: "Funding decision unavailable",
    payout: "Payout verification unavailable",
  },
  {
    id: "creator-fellowship",
    title: "Creator fellowship",
    program: "Fellowship",
    state: "Open",
    summary:
      "A local fellowship concept pending program ownership, selection criteria, conflicts review, and authorized financial operations.",
    sponsor: "Sponsor identity unavailable",
    budget: "Budget and currency unavailable",
    eligibility: "Eligibility criteria unavailable",
    application: "Application status unavailable",
    decision: "Funding decision unavailable",
    payout: "Payout verification unavailable",
  },
  {
    id: "community-fund",
    title: "Community project fund",
    program: "Community",
    state: "Unavailable",
    summary:
      "A local community-funding concept pending governance, treasury authorization, applicant privacy, and payout controls.",
    sponsor: "Sponsor identity unavailable",
    budget: "Budget and currency unavailable",
    eligibility: "Eligibility criteria unavailable",
    application: "Application status unavailable",
    decision: "Funding decision unavailable",
    payout: "Payout verification unavailable",
  },
];

const programs: FundingProgram[] = ["All", "Grant", "Fellowship", "Community"];
const states: FundingState[] = ["All", "Review", "Open", "Unavailable"];

export default function CreatorFunding() {
  const [program, setProgram] = useState<FundingProgram>("All");
  const [state, setState] = useState<FundingState>("All");
  const [selectedId, setSelectedId] = useState(fundingConcepts[0].id);
  const [status, setStatus] = useState(
    "Funding service unavailable. Showing local creator-support concepts only."
  );

  const filtered = useMemo(
    () =>
      fundingConcepts.filter(
        concept =>
          (program === "All" || concept.program === program) &&
          (state === "All" || concept.state === state)
      ),
    [program, state]
  );
  const selected =
    filtered.find(concept => concept.id === selectedId) ??
    filtered[0] ??
    fundingConcepts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No creator identity, application, eligibility, funding decision, payout, balance, notification, or financial transaction request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BadgeDollarSign}
        title="Creator funding"
        subtitle="Review local creator-support concepts without fabricated grants, balances, eligibility, funding decisions, payouts, creator identities, or financial performance."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Funding service unavailable.</strong> No program registry,
            creator identity service, application store, eligibility engine,
            financial authorization, payout provider, or reporting endpoint is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Funding service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset programs
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Funding preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review support concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show funding structure only. They
                  do not represent real creators, sponsors, budgets,
                  applications, decisions, payouts, balances, or financial
                  outcomes.
                </p>
              </div>
              <HandCoins className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Funding program filter"
            >
              {programs.map(item => (
                <Button
                  aria-pressed={program === item}
                  key={item}
                  onClick={() => setProgram(item)}
                  size="sm"
                  variant={program === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Funding state filter"
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
              {filtered.map(concept => (
                <button
                  aria-pressed={selected.id === concept.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === concept.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={concept.id}
                  onClick={() => setSelectedId(concept.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{concept.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {concept.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {concept.program}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {concept.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local funding fixtures match these filters.
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
                Selected program
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.program} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Sponsor", selected.sponsor],
                  ["Budget", selected.budget],
                  ["Eligibility", selected.eligibility],
                  ["Application", selected.application],
                  ["Decision", selected.decision],
                  ["Payout", selected.payout],
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
                No creator, sponsor, budget, eligibility, application, funding
                decision, payout, balance, or financial performance state is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Apply to program")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Apply unavailable
                </Button>
                <Button
                  onClick={() => blocked("Fund program")}
                  variant="outline"
                >
                  <HandCoins className="mr-2 h-4 w-4" /> Fund unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export program")}
                  variant="outline"
                >
                  <FileDown className="mr-2 h-4 w-4" /> Export unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Creator funding requires program governance, conflict
                  controls, eligibility criteria, application privacy, financial
                  authorization, sanctions screening where applicable, payout
                  verification, audit trails, and clear non-advice disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Application, eligibility, decision, payout, balance, and
                  notification transitions must be auditable and isolated from
                  fabricated financial outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <UserRound className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No creator profile, application submission, grant award,
                  payout transfer, financial notice, or transaction operation is
                  available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Funding state remains explicitly unavailable until
                  authoritative program and financial services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
