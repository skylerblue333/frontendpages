import { useMemo, useState } from "react";
import {
  CircleSlash2,
  FileDown,
  Landmark,
  LockKeyhole,
  Network,
  Send,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TreasuryAsset = "All" | "Native" | "Stablecoin" | "Token";
type TreasuryState = "All" | "Review" | "Proposed" | "Unavailable";

type TreasuryConcept = {
  id: string;
  title: string;
  asset: Exclude<TreasuryAsset, "All">;
  state: Exclude<TreasuryState, "All">;
  summary: string;
  holdings: string;
  balance: string;
  signers: string;
  proposal: string;
  approvals: string;
  transaction: string;
  settlement: string;
};

const treasuryConcepts: TreasuryConcept[] = [
  {
    id: "native-treasury",
    title: "Native asset treasury",
    asset: "Native",
    state: "Review",
    summary:
      "A local treasury concept for native assets pending network verification, signer custody, proposal provenance, and reconciliation controls.",
    holdings: "Asset holdings unavailable",
    balance: "Balance and valuation unavailable",
    signers: "Signer set and custody unavailable",
    proposal: "Spend proposal unavailable",
    approvals: "Approval state unavailable",
    transaction: "Transaction hash and status unavailable",
    settlement: "Settlement and reconciliation unavailable",
  },
  {
    id: "stablecoin-treasury",
    title: "Stablecoin reserve treasury",
    asset: "Stablecoin",
    state: "Proposed",
    summary:
      "A local reserve concept pending issuer verification, network/address validation, spend limits, multisignature approval, and settlement controls.",
    holdings: "Asset holdings unavailable",
    balance: "Balance and valuation unavailable",
    signers: "Signer set and custody unavailable",
    proposal: "Spend proposal unavailable",
    approvals: "Approval state unavailable",
    transaction: "Transaction hash and status unavailable",
    settlement: "Settlement and reconciliation unavailable",
  },
  {
    id: "ecosystem-treasury",
    title: "Ecosystem token treasury",
    asset: "Token",
    state: "Unavailable",
    summary:
      "A local token-treasury concept pending contract verification, token balances, signer custody, governance approval, and transfer monitoring.",
    holdings: "Asset holdings unavailable",
    balance: "Balance and valuation unavailable",
    signers: "Signer set and custody unavailable",
    proposal: "Spend proposal unavailable",
    approvals: "Approval state unavailable",
    transaction: "Transaction hash and status unavailable",
    settlement: "Settlement and reconciliation unavailable",
  },
];

const assets: TreasuryAsset[] = ["All", "Native", "Stablecoin", "Token"];
const states: TreasuryState[] = ["All", "Review", "Proposed", "Unavailable"];

export default function DAOTreasury() {
  const [asset, setAsset] = useState<TreasuryAsset>("All");
  const [state, setState] = useState<TreasuryState>("All");
  const [selectedId, setSelectedId] = useState(treasuryConcepts[0].id);
  const [status, setStatus] = useState(
    "Treasury service unavailable. Showing local treasury concepts only."
  );

  const filtered = useMemo(
    () =>
      treasuryConcepts.filter(
        concept =>
          (asset === "All" || concept.asset === asset) &&
          (state === "All" || concept.state === state)
      ),
    [asset, state]
  );
  const selected =
    filtered.find(concept => concept.id === selectedId) ??
    filtered[0] ??
    treasuryConcepts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No asset balance, signer, proposal, approval, recipient, transfer, notification, or financial transaction request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Landmark}
        title="DAO treasury"
        subtitle="Review local treasury concepts without fabricated assets, balances, transactions, signers, approvals, transfers, or financial performance."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Treasury service unavailable.</strong> No asset registry,
            wallet custody service, signer set, governance proposal store,
            transaction relay, reconciliation engine, or reporting endpoint is
            connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Treasury service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset treasury
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Treasury preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review treasury concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show treasury structure only. They
                  do not represent real assets, balances, wallets, signers,
                  proposals, approvals, transfers, or settlements.
                </p>
              </div>
              <WalletCards className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Treasury asset filter"
            >
              {assets.map(item => (
                <Button
                  aria-pressed={asset === item}
                  key={item}
                  onClick={() => setAsset(item)}
                  size="sm"
                  variant={asset === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Treasury state filter"
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
                  <p className="mt-1 text-xs text-cyan-200">{concept.asset}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {concept.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local treasury fixtures match these filters.
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
                Selected treasury
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.asset} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Holdings", selected.holdings],
                  ["Balance", selected.balance],
                  ["Signers", selected.signers],
                  ["Proposal", selected.proposal],
                  ["Approvals", selected.approvals],
                  ["Transaction", selected.transaction],
                  ["Settlement", selected.settlement],
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
                No asset holdings, balance, signer, proposal, approval,
                transaction, recipient, or settlement state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Transfer from treasury")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Transfer unavailable
                </Button>
                <Button
                  onClick={() => blocked("Approve treasury proposal")}
                  variant="outline"
                >
                  <ShieldCheck className="mr-2 h-4 w-4" /> Approve unavailable
                </Button>
                <Button
                  onClick={() => blocked("Export treasury")}
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
                  Treasury tooling requires multisignature custody, role
                  separation, proposal provenance, spend limits, network and
                  address validation, transaction simulation, signing controls,
                  timelocks, replay protection, confirmation tracking,
                  reconciliation, and audit trails.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Asset, balance, signer, proposal, approval, transfer,
                  settlement, and notification transitions must be auditable and
                  isolated from fabricated financial outcomes.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Network className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet lookup, signer action, proposal submission, transfer
                  signing, transaction broadcast, confirmation, notification, or
                  treasury operation is available from this preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Treasury state remains explicitly unavailable until
                  authoritative custody and blockchain services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
