import { useMemo, useState } from "react";
import {
  Braces,
  CircleSlash2,
  Code2,
  FileCheck2,
  LockKeyhole,
  Network,
  ShieldCheck,
  Upload,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ContractNetwork = "All" | "EVM" | "Solana" | "Other";
type ContractState = "All" | "Review" | "Planned" | "Unavailable";

type ContractConcept = {
  id: string;
  title: string;
  network: Exclude<ContractNetwork, "All">;
  state: Exclude<ContractState, "All">;
  summary: string;
  address: string;
  networkId: string;
  artifact: string;
  functions: string;
  events: string;
  verification: string;
};

const contracts: ContractConcept[] = [
  {
    id: "evm-interface",
    title: "EVM contract interface",
    network: "EVM",
    state: "Review",
    summary:
      "A local ABI concept for reading functions and events after network, address, and artifact validation.",
    address: "Contract address unavailable",
    networkId: "Network and chain ID unavailable",
    artifact: "ABI artifact unavailable",
    functions: "Function signatures unavailable",
    events: "Event definitions unavailable",
    verification: "Verification status unavailable",
  },
  {
    id: "solana-interface",
    title: "Solana program interface",
    network: "Solana",
    state: "Planned",
    summary:
      "A planned interface concept for program instructions pending validated IDL, cluster, and authority metadata.",
    address: "Program address unavailable",
    networkId: "Cluster unavailable",
    artifact: "IDL artifact unavailable",
    functions: "Instruction definitions unavailable",
    events: "Account/event definitions unavailable",
    verification: "Verification status unavailable",
  },
  {
    id: "other-interface",
    title: "Other chain interface",
    network: "Other",
    state: "Unavailable",
    summary:
      "A local contract-interface concept pending supported network rules and immutable artifact provenance.",
    address: "Contract address unavailable",
    networkId: "Network identifier unavailable",
    artifact: "Interface artifact unavailable",
    functions: "Function definitions unavailable",
    events: "Event definitions unavailable",
    verification: "Verification status unavailable",
  },
];

const networks: ContractNetwork[] = ["All", "EVM", "Solana", "Other"];
const states: ContractState[] = ["All", "Review", "Planned", "Unavailable"];

export default function ContractABI() {
  const [network, setNetwork] = useState<ContractNetwork>("All");
  const [state, setState] = useState<ContractState>("All");
  const [selectedId, setSelectedId] = useState(contracts[0].id);
  const [status, setStatus] = useState(
    "Contract service unavailable. Showing local interface concepts only."
  );

  const filtered = useMemo(
    () =>
      contracts.filter(
        contract =>
          (network === "All" || contract.network === network) &&
          (state === "All" || contract.state === state)
      ),
    [network, state]
  );
  const selected =
    filtered.find(contract => contract.id === selectedId) ??
    filtered[0] ??
    contracts[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No chain read, ABI parse, wallet, transaction, signature, deployment, or contract mutation request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Braces}
        title="Contract interfaces"
        subtitle="Review local ABI concepts without fabricated addresses, networks, artifacts, signatures, transactions, or deployment states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Contract service unavailable.</strong> No chain provider,
            contract registry, artifact store, wallet authorizer, verification
            service, or transaction simulator is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Contract service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset interfaces
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Interface preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review contract concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show interface structure only. They
                  do not represent deployed contracts, verified artifacts,
                  callable functions, wallets, transactions, or chain state.
                </p>
              </div>
              <Code2 className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Contract network filter"
            >
              {networks.map(item => (
                <Button
                  aria-pressed={network === item}
                  key={item}
                  onClick={() => setNetwork(item)}
                  size="sm"
                  variant={network === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Contract state filter"
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
              {filtered.map(contract => (
                <button
                  aria-pressed={selected.id === contract.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === contract.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={contract.id}
                  onClick={() => setSelectedId(contract.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{contract.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {contract.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {contract.network}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {contract.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local contract fixtures match these filters.
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
                Selected interface
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.network} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Address", selected.address],
                  ["Network", selected.networkId],
                  ["Artifact", selected.artifact],
                  ["Functions", selected.functions],
                  ["Events", selected.events],
                  ["Verification", selected.verification],
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
                No address, chain ID, bytecode, ABI/IDL, function, event,
                verification, wallet, transaction, or deployment state is
                available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Inspect contract")}
                  variant="outline"
                >
                  <Network className="mr-2 h-4 w-4" /> Inspect unavailable
                </Button>
                <Button
                  onClick={() => blocked("Validate interface")}
                  variant="outline"
                >
                  <FileCheck2 className="mr-2 h-4 w-4" /> Validate unavailable
                </Button>
                <Button
                  onClick={() => blocked("Deploy contract")}
                  variant="outline"
                >
                  <Upload className="mr-2 h-4 w-4" /> Deploy unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Contract tooling requires network validation, immutable
                  artifact provenance, deterministic parsing, address checks,
                  wallet authorization, transaction simulation, and signature
                  verification.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Contract reads, writes, deployment, and transaction status
                  must be auditable and isolated from fabricated blockchain
                  results.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <WalletCards className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet connection, private-key use, signature, transaction,
                  replay protection, or chain mutation is available from this
                  preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  Contract state remains explicitly unavailable until
                  authoritative chain services are connected.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
