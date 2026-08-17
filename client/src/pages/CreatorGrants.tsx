import { useMemo, useState } from "react";
import {
  Award,
  CircleSlash2,
  FileDown,
  Gift,
  LockKeyhole,
  Send,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type GrantCategory = "All" | "Arts" | "Technology" | "Community";
type GrantState = "All" | "Review" | "Open" | "Unavailable";

type GrantConcept = {
  id: string;
  title: string;
  category: Exclude<GrantCategory, "All">;
  state: Exclude<GrantState, "All">;
  summary: string;
  sponsor: string;
  budget: string;
  eligibility: string;
  applicant: string;
  review: string;
  award: string;
};

const grants: GrantConcept[] = [
  {
    id: "arts-grant",
    title: "Creative arts grant",
    category: "Arts",
    state: "Review",
    summary:
      "A local grant concept for creative work pending sponsor governance, eligibility review, and applicant privacy controls.",
    sponsor: "Sponsor identity unavailable",
    budget: "Grant budget and currency unavailable",
    eligibility: "Eligibility criteria unavailable",
    applicant: "Applicant identity unavailable",
    review: "Review decision unavailable",
    award: "Award and payout state unavailable",
  },
  {
    id: "technology-grant",
    title: "Open technology grant",
    category: "Technology",
    state: "Open",
    summary:
      "A local technology grant concept pending technical review, conflict controls, fair selection, and authorized financial operations.",
    sponsor: "Sponsor identity unavailable",
    budget: "Grant budget and currency unavailable",
    eligibility: "Eligibility criteria unavailable",
    applicant: "Applicant identity unavailable",
    review: "Review decision unavailable",
    award: "Award and payout state unavailable",
  },
  {
    id: "community-grant",
    title: "Community impact grant",
    category: "Community",
    state: "Unavailable",
    summary:
      "A local community grant concept pending program ownership, applicant safeguarding, governance, and payout controls.",
    sponsor: "Sponsor identity unavailable",
    budget: "Grant budget and currency unavailable",
    eligibility: "Eligibility criteria unavailable",
    applicant: "Applicant identity unavailable",
    review: "Review decision unavailable",
    award: "Award and payout state unavailable",
  },
];

const categories: GrantCategory[] = ["All", "Arts", "Technology", "Community"];
const states: GrantState[] = ["All", "Review", "Open", "Unavailable"];

export default function CreatorGrants() {
  const [category, setCategory] = useState<GrantCategory>("All");
  const [state, setState] = useState<GrantState>("All");
  const [selectedId, setSelectedId] = useState(grants[0].id);
  const [status, setStatus] = useState(
    "Grant service unavailable. Showing local grant concepts only."
  );

  const filtered = useMemo(
    () =>
      grants.filter(
        grant =>
          (category === "All" || grant.category === category) &&
          (state === "All" || grant.state === state)
      ),
    [category, state]
  );
  const selected =
    filtered.find(grant => grant.id === selectedId) ?? filtered[0] ?? grants[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No applicant identity, application, eligibility, review decision, award, payout, notification, or financial transaction request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Gift}
        title="Creator grants"
        subtitle="Review local grant-program concepts without fabricated applicants, awards, budgets, eligibility, review decisions, payouts, or financial outcomes."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Grant service unavailable.</strong> No program registry,
            applicant identity service, application store, eligibility engine,
            review workflow, financial authorization, payout provider, or
            reporting endpoint is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Grant service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset grants
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Grant preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review grant concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show grant structure only. They do
                  not represent real applicants, sponsors, budgets,
                  applications, decisions, awards, payouts, or financial
                  outcomes.
                </p>
              </div>
              <Award className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Grant category filter"
            >
              {categories.map(item => (
                <Button
                  aria-pressed={category === item}
                  key={item}
                  onClick={() => setCategory(item)}
                  size="sm"
                  variant={category === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Grant state filter"
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
              {filtered.map(grant => (
                <button
                  aria-pressed={selected.id === grant.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === grant.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={grant.id}
                  onClick={() => setSelectedId(grant.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{grant.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {grant.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">{grant.category}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {grant.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local grant fixtures match these filters.
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
                Selected grant
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.category} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Sponsor", selected.sponsor],
                  ["Budget", selected.budget],
                  ["Eligibility", selected.eligibility],
                  ["Applicant", selected.applicant],
                  ["Review", selected.review],
                  ["Award", selected.award],
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
                No applicant, sponsor, budget, eligibility, application, review,
                award, payout, balance, or financial performance state is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Apply for grant")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Apply unavailable
                </Button>
                <Button
                  onClick={() => blocked("Review grant")}
                  variant="outline"
                >
                  <UsersRound className="mr-2 h-4 w-4" /> Review unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export grant")}
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
                  Grant tooling requires program governance, conflict controls,
                  eligibility criteria, applicant privacy, fair review process,
                  financial authorization, payout verification, audit trails,
                  and clear non-advice disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Application, eligibility, review, award, payout, balance, and
                  notification transitions must be auditable and isolated from
                  fabricated financial outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <UsersRound className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No applicant profile, application submission, reviewer
                  decision, grant award, payout transfer, financial notice, or
                  transaction operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Grant state remains explicitly unavailable until authoritative
                  program and financial services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
