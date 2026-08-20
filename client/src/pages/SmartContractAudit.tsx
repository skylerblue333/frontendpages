import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Check,
  Code2,
  FileSearch,
  GitBranch,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
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

type ContractState = "Unverified" | "Preview" | "Needs evidence" | "Test-only";
interface ContractConcept {
  id: number;
  name: string;
  chain: string;
  state: ContractState;
  detail: string;
}

const concepts: ContractConcept[] = [
  {
    id: 1,
    name: "Token contract concept",
    chain: "EVM",
    state: "Unverified",
    detail:
      "Requires immutable chain and address identity, source and compiler provenance, deployed-bytecode match, ownership model, upgrade controls, and independent review.",
  },
  {
    id: 2,
    name: "Marketplace contract concept",
    chain: "EVM",
    state: "Needs evidence",
    detail:
      "Requires access control, payment and royalty semantics, reentrancy analysis, pause authority, settlement, event coverage, and tested failure paths.",
  },
  {
    id: 3,
    name: "Solana program concept",
    chain: "Solana",
    state: "Preview",
    detail:
      "Requires program identity, build reproducibility, account constraints, signer checks, PDA derivation, upgrade authority, and chain-specific review.",
  },
  {
    id: 4,
    name: "Test audit fixture",
    chain: "Test-only",
    state: "Test-only",
    detail:
      "A fixture cannot prove deployed code safety, exploit absence, transaction safety, custody security, or production readiness.",
  },
];

export default function SmartContractAudit() {
  const [query, setQuery] = useState("");
  const [chain, setChain] = useState("All");
  const [selected, setSelected] = useState(1);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const chains = [
    "All",
    ...Array.from(new Set(concepts.map(item => item.chain))),
  ];
  const filtered = useMemo(
    () =>
      concepts.filter(
        item =>
          (chain === "All" || item.chain === chain) &&
          `${item.name} ${item.chain} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [chain, query]
  );
  const contract = concepts.find(item => item.id === selected) ?? concepts[0];
  const reset = () => {
    setQuery("");
    setChain("All");
    setSelected(1);
    setSaved(false);
    setShowGates(false);
  };

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={ShieldCheck}
        eyebrow="Smart-contract audit · Security review preview"
        title="Review contract-risk evidence without inventing an audit result."
        description="Explore local EVM, Solana, marketplace, token, and test contract concepts with source search, chain filters, finding and remediation states, reviewer gates, save/reset, and blocked analysis, signing, deployment, and certification actions. No contract, address, source match, finding, exploit result, transaction, or security certification is connected."
        badge="Evidence-bounded contract-audit workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save audit view"}
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
            {showGates ? "Close gates" : "Review audit gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" /> Reset audit
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Contracts",
              value: `${concepts.length} local`,
              hint: "No chain source",
              icon: Code2,
              tone: "cyan",
            },
            {
              label: "Source match",
              value: "Unknown",
              hint: "No bytecode proof",
              icon: GitBranch,
              tone: "violet",
            },
            {
              label: "Findings",
              value: "Unavailable",
              hint: "No analyzer",
              icon: AlertTriangle,
              tone: "amber",
            },
            {
              label: "Certification",
              value: "Blocked",
              hint: "No reviewer evidence",
              icon: ShieldCheck,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Contract-audit evidence boundary">
          <strong>
            This is a local contract-review design preview, not evidence that a
            contract is deployed, source-verified, analyzed, safe, exploitable,
            audited, signed, or certified.
          </strong>{" "}
          Contract cards, chain filters, findings, remediation, saved state, and
          disabled analysis actions are browser concepts. No chain identity,
          address, bytecode match, compiler result, severity, exploit proof,
          transaction, private key, or security claim is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <label className="text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <Search className="size-4 text-slate-500" />
                  Search contract concepts
                </span>
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search token, marketplace, Solana..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <div className="mt-5 flex flex-wrap gap-2">
                {chains.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setChain(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      chain === entry
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
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
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
                    <Badge
                      variant="outline"
                      className="mt-4 border-white/10 text-slate-500"
                    >
                      {item.chain}
                    </Badge>
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
                    Selected contract concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{contract.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {contract.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {contract.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Chain", value: contract.chain },
                  { label: "Address", value: "Unverified" },
                  { label: "Source", value: "Unavailable" },
                  { label: "Compiler", value: "Unknown" },
                  { label: "Findings", value: "No analyzer" },
                  { label: "Remediation", value: "No tracker" },
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
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Source provenance", icon: FileSearch },
                  { label: "Bytecode match", icon: GitBranch },
                  { label: "Access controls", icon: LockKeyhole },
                  { label: "Transaction safety", icon: ShieldCheck },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <Icon className="size-5 text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-amber-200">Unavailable</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Code2 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No audit evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect chain identity, contract address, source provenance,
                  compiler build, analyzer output, finding severity,
                  remediation, reviewer identity, key policy, transaction
                  controls, and immutable audit evidence before making a
                  security claim.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Analyze unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Verify source unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Sign transaction unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Certify audit unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No security certification claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A contract concept does not prove deployment, source match,
                    analyzer coverage, exploit absence, remediation, transaction
                    safety, custody security, or audit certification.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Contract-audit governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real audit surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated chain, contract address, source, compiler, deployed-bytecode, upgrade-authority, dependency, and build provenance",
                "Static, dynamic, fuzz, symbolic, economic, access-control, reentrancy, oracle, bridge, and chain-specific analysis with reproducible versions",
                "Finding severity, exploit evidence, confidence, impact, remediation owner, retest result, disclosure policy, exceptions, and immutable audit history",
                "Wallet, key, signing, transaction, custody, token, NFT, marketplace, payment, governance, and financial claims require separate security contracts",
                "Analyze, verify, sign, deploy, remediate, certify, export, accessibility, retry, and accountable approval require governed operations",
                "An audit preview must not be presented as secure, audited, certified, exploit-free, production-ready, or safe to transact without evidence",
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
              title: "Audit surface preserved",
              description:
                "Contract concepts, chains, source, compiler, findings, remediation, analyzer, transaction, signing, certification, save/reset, and gates remain visible.",
              icon: ShieldCheck,
              status: "Local security",
            },
            {
              title: "No audit theater",
              description:
                "Deployment, source match, analyzer coverage, exploit absence, remediation, transaction safety, and certification are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before signing",
              description:
                "Real contract review requires reproducible provenance, independent analysis, key/transaction controls, remediation, reviewer accountability, and immutable records.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
