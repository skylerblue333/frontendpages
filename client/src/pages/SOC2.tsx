import { useMemo, useState } from "react";
import {
  Check,
  FileCheck2,
  Filter,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UsersRound,
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
const controls = [
  {
    id: 1,
    name: "Security controls",
    category: "Security",
    detail:
      "A local control-family concept covering identity, access, secrets, infrastructure, vulnerability, incident, and recovery evidence.",
    state: "Unassessed",
  },
  {
    id: 2,
    name: "Availability controls",
    category: "Availability",
    detail:
      "An availability concept requiring uptime source, monitoring, capacity, backups, recovery objectives, incident records, and support ownership.",
    state: "No evidence",
  },
  {
    id: 3,
    name: "Confidentiality controls",
    category: "Confidentiality",
    detail:
      "A confidentiality concept requiring classification, encryption, least privilege, redaction, retention, deletion, and access review.",
    state: "Needs review",
  },
  {
    id: 4,
    name: "Privacy controls",
    category: "Privacy",
    detail:
      "A privacy concept requiring purpose, consent, lawful basis, data map, rights handling, processors, retention, and independent review.",
    state: "Blocked",
  },
  {
    id: 5,
    name: "Change management",
    category: "Governance",
    detail:
      "A governance concept requiring approvals, tests, separation of duties, release evidence, rollback, audit, and exceptions.",
    state: "Preview",
  },
];
export default function SOC2() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [owner, setOwner] = useState("Owner not configured");
  const [evidence, setEvidence] = useState("Evidence status not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(controls.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      controls.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const control = controls.find(item => item.id === selected) ?? controls[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setOwner("Owner not configured");
    setEvidence("Evidence status not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={FileCheck2}
        eyebrow="SOC 2 · Trust controls preview"
        title="Map the control before making an attestation."
        description="Explore local security, availability, confidentiality, privacy, and change-management control concepts with search, category filters, owner and evidence intent, exception and review gates, save/reset, and blocked attestation actions. No control operation, audit test, certification, compliance status, or trust outcome is connected."
        badge="Assurance governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save control locally"}
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
            {showGates ? "Close gates" : "Review assurance gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset control
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Control families",
              value: `${controls.length} local`,
              hint: "No audit source",
              icon: FileCheck2,
              tone: "cyan",
            },
            {
              label: "Evidence",
              value: "Unavailable",
              hint: "No control source",
              icon: LockKeyhole,
              tone: "violet",
            },
            {
              label: "Owners",
              value: "Unconfigured",
              hint: "No accountability source",
              icon: UsersRound,
              tone: "amber",
            },
            {
              label: "Attestation",
              value: "Blocked",
              hint: "No auditor evidence",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Trust-assurance evidence boundary">
          <strong>
            This is a local control-mapping preview, not a SOC 2 report,
            certification, audit result, or compliance status.
          </strong>{" "}
          Control cards, filters, owner and evidence intent, saved state, review
          gates, and disabled attestation actions are browser concepts. No
          security control, uptime, privacy program, compliance status, auditor
          opinion, certification, or customer trust outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local trust controls"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
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
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
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
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                    </div>
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
                    Selected control concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{control.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {control.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {control.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: control.category },
                  { label: "Owner", value: owner },
                  { label: "Evidence", value: evidence },
                  { label: "Test", value: "Unexecuted" },
                  { label: "Exception", value: "Unconfigured" },
                  { label: "Auditor", value: "Unavailable" },
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
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Owner intent
                  <select
                    value={owner}
                    onChange={event => setOwner(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Owner not configured</option>
                    <option>Security owner intent</option>
                    <option>Privacy owner intent</option>
                    <option>Engineering owner intent</option>
                    <option>Independent reviewer intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Evidence intent
                  <select
                    value={evidence}
                    onChange={event => setEvidence(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Evidence status not configured</option>
                    <option>Design evidence intent</option>
                    <option>Operating evidence intent</option>
                    <option>Exception evidence intent</option>
                    <option>Auditor-request intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <FileCheck2 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No assurance evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed control descriptions, policies, owners, test
                  procedures, operating evidence, exceptions, remediation,
                  auditor scope, period, and review before making a trust claim.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Test control unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Request evidence unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Generate report unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Attest unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No SOC 2 or compliance claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A control concept does not prove design effectiveness,
                    operating effectiveness, audit scope, reporting period,
                    auditor opinion, certification, compliance, or customer
                    trust.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Trust-control gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real SOC 2 program must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Defined system, services, entities, boundaries, trust criteria, reporting period, subservice organizations, and scope",
                "Security, availability, processing integrity, confidentiality, and privacy control objectives mapped to evidence",
                "Design and operating effectiveness, test procedure, sample, result, exception, remediation, retest, and change history",
                "Identity, access, secrets, infrastructure, vulnerability, incident, backup, recovery, privacy, retention, and deletion",
                "Auditor independence, report type, opinion, qualified findings, management response, customer request, and legal review",
                "Certification, compliance, security, uptime, privacy, customer trust, financial, AI, crypto, and user-impact claims require accountable evidence",
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
              title: "SOC 2 surface preserved",
              description:
                "Security, availability, confidentiality, privacy, change, owners, evidence, tests, exceptions, reports, attestation, save/reset, and gates remain interactive.",
              icon: FileCheck2,
              status: "Local controls",
            },
            {
              title: "No certification theater",
              description:
                "Control effectiveness, audit results, compliance, certification, uptime, privacy, security, and customer trust outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before attestation",
              description:
                "Real assurance requires defined scope, control mapping, operating evidence, testing, exceptions, auditor review, and accountable reporting.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
