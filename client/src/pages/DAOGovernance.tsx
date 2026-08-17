import { useMemo, useState } from "react";
import {
  FileSearch,
  CircleSlash2,
  FileDown,
  Gavel,
  LockKeyhole,
  ShieldCheck,
  TimerReset,
  Vote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type GovernanceDomain = "All" | "Treasury" | "Protocol" | "Community";
type GovernanceState = "All" | "Draft" | "Voting" | "Unavailable";

type ProposalConcept = {
  id: string;
  title: string;
  domain: Exclude<GovernanceDomain, "All">;
  state: Exclude<GovernanceState, "All">;
  summary: string;
  author: string;
  votingPower: string;
  quorum: string;
  votes: string;
  decision: string;
  treasury: string;
  execution: string;
  audit: string;
};

const proposals: ProposalConcept[] = [
  {
    id: "treasury-proposal",
    title: "Treasury allocation proposal",
    domain: "Treasury",
    state: "Voting",
    summary:
      "A local treasury-governance concept pending proposal provenance, voting snapshot, quorum rules, and authorized execution controls.",
    author: "Proposal author unavailable",
    votingPower: "Voting power unavailable",
    quorum: "Quorum requirement unavailable",
    votes: "Vote tally unavailable",
    decision: "Decision outcome unavailable",
    treasury: "Treasury balance and authorization unavailable",
    execution: "Execution and timelock unavailable",
    audit: "Governance audit trail unavailable",
  },
  {
    id: "protocol-proposal",
    title: "Protocol parameter proposal",
    domain: "Protocol",
    state: "Draft",
    summary:
      "A local protocol-governance concept pending technical review, delegation semantics, conflict controls, and execution verification.",
    author: "Proposal author unavailable",
    votingPower: "Voting power unavailable",
    quorum: "Quorum requirement unavailable",
    votes: "Vote tally unavailable",
    decision: "Decision outcome unavailable",
    treasury: "Treasury balance and authorization unavailable",
    execution: "Execution and timelock unavailable",
    audit: "Governance audit trail unavailable",
  },
  {
    id: "community-proposal",
    title: "Community initiative proposal",
    domain: "Community",
    state: "Unavailable",
    summary:
      "A local community-governance concept pending member identity, proposal review, voting integrity, and transparent decision controls.",
    author: "Proposal author unavailable",
    votingPower: "Voting power unavailable",
    quorum: "Quorum requirement unavailable",
    votes: "Vote tally unavailable",
    decision: "Decision outcome unavailable",
    treasury: "Treasury balance and authorization unavailable",
    execution: "Execution and timelock unavailable",
    audit: "Governance audit trail unavailable",
  },
];

const domains: GovernanceDomain[] = [
  "All",
  "Treasury",
  "Protocol",
  "Community",
];
const states: GovernanceState[] = ["All", "Draft", "Voting", "Unavailable"];

export default function DAOGovernance() {
  const [domain, setDomain] = useState<GovernanceDomain>("All");
  const [state, setState] = useState<GovernanceState>("All");
  const [selectedId, setSelectedId] = useState(proposals[0].id);
  const [status, setStatus] = useState(
    "Governance service unavailable. Showing local proposal concepts only."
  );

  const filtered = useMemo(
    () =>
      proposals.filter(
        proposal =>
          (domain === "All" || proposal.domain === domain) &&
          (state === "All" || proposal.state === state)
      ),
    [domain, state]
  );
  const selected =
    filtered.find(proposal => proposal.id === selectedId) ??
    filtered[0] ??
    proposals[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No member identity, vote, quorum calculation, treasury action, execution, notification, or governance mutation request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Vote}
        title="DAO governance"
        subtitle="Review local governance concepts without fabricated proposals, members, voting power, quorum, decisions, treasury actions, execution, or governance metrics."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Governance service unavailable.</strong> No proposal
            registry, member directory, voting snapshot, quorum engine, treasury
            authorization, execution relay, or governance audit endpoint is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Governance service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset proposals
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Governance preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review proposal concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show governance structure only.
                  They do not represent real members, proposals, votes, treasury
                  balances, decisions, executions, or performance.
                </p>
              </div>
              <FileSearch className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Governance domain filter"
            >
              {domains.map(item => (
                <Button
                  aria-pressed={domain === item}
                  key={item}
                  onClick={() => setDomain(item)}
                  size="sm"
                  variant={domain === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Governance state filter"
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
              {filtered.map(proposal => (
                <button
                  aria-pressed={selected.id === proposal.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === proposal.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={proposal.id}
                  onClick={() => setSelectedId(proposal.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{proposal.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {proposal.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {proposal.domain}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {proposal.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local governance fixtures match these filters.
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
                Selected proposal
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.domain} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Author", selected.author],
                  ["Voting power", selected.votingPower],
                  ["Quorum", selected.quorum],
                  ["Votes", selected.votes],
                  ["Decision", selected.decision],
                  ["Treasury", selected.treasury],
                  ["Execution", selected.execution],
                  ["Audit", selected.audit],
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
                No proposal author, member, voting power, quorum, vote,
                decision, treasury, execution, or audit state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Vote on proposal")}
                  variant="outline"
                >
                  <Vote className="mr-2 h-4 w-4" /> Vote unavailable
                </Button>
                <Button
                  onClick={() => blocked("Execute proposal")}
                  variant="outline"
                >
                  <Gavel className="mr-2 h-4 w-4" /> Execute unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export proposal")}
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
                  Governance tooling requires identity and delegation
                  safeguards, transparent proposal provenance, snapshot
                  semantics, quorum rules, vote integrity, conflict controls,
                  treasury authorization, timelocks, execution verification,
                  auditability, and non-determination disclosures.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Proposal, vote, quorum, treasury, execution, notification, and
                  audit transitions must be auditable and isolated from
                  fabricated governance outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <TimerReset className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No member lookup, vote submission, quorum calculation,
                  treasury transfer, timelock execution, notification, or
                  governance operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Governance state remains explicitly unavailable until
                  authoritative governance and blockchain services are
                  connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
