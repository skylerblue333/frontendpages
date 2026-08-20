import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileText,
  Gavel,
  History,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ProposalState = "Draft intent" | "Unavailable" | "Review";
type Proposal = {
  id: string;
  title: string;
  state: ProposalState;
  summary: string;
};
const proposals: readonly Proposal[] = [
  {
    id: "treasury",
    title: "Treasury policy review",
    state: "Review",
    summary:
      "A local proposal concept pending contract identity, treasury custody, proposer authorization, quorum, timelock, and auditable execution.",
  },
  {
    id: "parameters",
    title: "Governance parameter review",
    state: "Draft intent",
    summary:
      "A local parameter concept pending chain provenance, versioned policy, delegated voting power, and secure publication controls.",
  },
  {
    id: "community",
    title: "Community proposal review",
    state: "Unavailable",
    summary:
      "A local governance concept pending authenticated proposer identity, eligibility, anti-abuse controls, and immutable vote history.",
  },
];

export default function TokenGovernance() {
  const [selectedId, setSelectedId] = useState(proposals[0].id);
  const [status, setStatus] = useState(
    "Governance service unavailable locally. Showing concepts only."
  );
  const selected = useMemo(
    () => proposals.find(item => item.id === selectedId) ?? proposals[0],
    [selectedId]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No proposal, vote, treasury, token, contract, or execution mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Gavel}
        title="Token governance"
        subtitle="Review governance structure without fabricating token supply, balances, voting power, proposals, quorum, treasury custody, or execution outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Token governance service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Token governance service unavailable.</strong> No chain,
            contract, token ownership, voting-power source, proposal registry,
            treasury custody, timelock, or execution authority is connected.
            This preview is not a vote or financial result.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Governance remains unavailable. Local proposal concepts were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset concepts
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
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
                  Typed local fixtures show proposal structure only. They do not
                  represent a deployed contract, token holder, balance, voting
                  power, vote count, quorum, passed/failed outcome, treasury
                  value, APY, fee, or executed action.
                </p>
              </div>
              <Gavel
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 space-y-3">
              {proposals.map(proposal => (
                <button
                  key={proposal.id}
                  type="button"
                  aria-pressed={selected.id === proposal.id}
                  onClick={() => setSelectedId(proposal.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === proposal.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{proposal.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {proposal.state}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {proposal.summary}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected governance concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.state}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Chain", "Chain identity unavailable"],
                  ["Contract", "Governance contract unavailable"],
                  ["Token supply", "Supply data unavailable"],
                  ["Voting power", "Ownership and power unavailable"],
                  ["Quorum", "Quorum rule unavailable"],
                  ["Treasury", "Custody and balance unavailable"],
                  ["Timelock", "Timelock state unavailable"],
                  ["Audit", "Execution evidence unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No proposal, vote, token balance, treasury value, quorum result,
                passed/failed state, or execution outcome is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Create proposal")}
                  variant="outline"
                >
                  Propose unavailable
                </Button>
                <Button onClick={() => blocked("Cast vote")} variant="outline">
                  Vote unavailable
                </Button>
                <Button
                  onClick={() => blocked("Execute proposal")}
                  variant="outline"
                >
                  Execute unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  Real governance requires verified chain and contract identity,
                  safe wallet boundaries, token ownership provenance,
                  voting-power snapshots, proposal lifecycle, quorum rules,
                  anti-abuse controls, timelocks, treasury custody, simulation,
                  approvals, execution monitoring, and immutable audit evidence.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <WalletCards
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Custody blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No treasury or wallet source.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Voting blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No ownership or power proof.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <History
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    History unavailable
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No immutable proposal log.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileText
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">No vote claim</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No outcome or execution.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No token, treasury, vote, quorum, APY, fee, passed/failed, or
            financial outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
