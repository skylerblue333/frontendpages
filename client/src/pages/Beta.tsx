import { useState } from "react";
import {
  BadgeCheck,
  Ban,
  FlaskConical,
  LockKeyhole,
  Rocket,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ReviewState = "All" | "Review" | "Planned" | "Unavailable";
type BetaConcept = {
  name: string;
  state: Exclude<ReviewState, "All">;
  summary: string;
  access: string;
  eligibility: string;
  rewards: string;
  financial: string;
  application: string;
};
const concepts: BetaConcept[] = [
  {
    name: "AI-assisted development review",
    state: "Review",
    summary:
      "Concept for security-aware code review; no connected repository, model, findings, or production availability is represented.",
    access: "Access unavailable",
    eligibility: "Eligibility unavailable",
    rewards: "Rewards unavailable",
    financial: "Financial terms unavailable",
    application: "Application unavailable",
  },
  {
    name: "Creator collaboration workspace",
    state: "Planned",
    summary:
      "Concept for collaborative creator workflows; no invitations, accounts, content, permissions, or delivery service is connected.",
    access: "Access unavailable",
    eligibility: "Eligibility unavailable",
    rewards: "Rewards unavailable",
    financial: "Financial terms unavailable",
    application: "Application unavailable",
  },
  {
    name: "Cross-network asset transfer",
    state: "Unavailable",
    summary:
      "High-risk blockchain concept pending network, custody, signing, transaction, monitoring, and incident-response infrastructure.",
    access: "Access unavailable",
    eligibility: "Eligibility unavailable",
    rewards: "Rewards unavailable",
    financial: "Financial terms unavailable",
    application: "Application unavailable",
  },
  {
    name: "AI trading signal research",
    state: "Unavailable",
    summary:
      "Financial concept pending approved market-data sources, research methodology, risk disclosures, and authorization; no signal is provided.",
    access: "Access unavailable",
    eligibility: "Eligibility unavailable",
    rewards: "Rewards unavailable",
    financial: "Financial terms unavailable",
    application: "Application unavailable",
  },
];
export default function Beta() {
  const [state, setState] = useState<ReviewState>("All");
  const [selected, setSelected] = useState(concepts[0]);
  const [status, setStatus] = useState(
    "Beta service unavailable. Showing local readiness concepts only."
  );
  const visible = concepts.filter(
    item => state === "All" || item.state === state
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No eligibility check, account mutation, asset issuance, fee change, financial query, invitation, or application was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        backHref="/dashboard"
        icon={Rocket}
        title="Beta readiness"
        subtitle="Review early-access concepts without fabricated rewards, financial claims, eligibility, availability, trading signals, or account actions."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Beta service unavailable.</strong> No connected access
          registry, eligibility source, reward ledger, financial terms,
          repository integration, blockchain connector, or application endpoint
          is available.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-5 w-5 text-cyan-200" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Readiness catalog
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Review beta concepts
                </h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Local fixtures describe review structure only. They do not
              indicate live access, production readiness, account eligibility,
              token balances, rewards, fee discounts, trading signals, or
              partner availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Review", "Planned", "Unavailable"] as ReviewState[]
              ).map(item => (
                <Button
                  key={item}
                  aria-pressed={state === item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(item => (
                <button
                  className={`w-full rounded-xl border p-5 text-left ${selected.name === item.name ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.name}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">{item.name}</p>
                    <Badge
                      variant={
                        item.state === "Review" ? "secondary" : "outline"
                      }
                    >
                      {item.state}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{item.summary}</p>
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Access", selected.access],
                    ["Eligibility", selected.eligibility],
                    ["Rewards", selected.rewards],
                    ["Financial terms", selected.financial],
                    ["Application", selected.application],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Check eligibility")}
                  variant="outline"
                >
                  <BadgeCheck className="mr-2 h-4 w-4" /> Eligibility
                  unavailable
                </Button>
                <Button
                  onClick={() => blocked("Apply for beta access")}
                  variant="outline"
                >
                  <Rocket className="mr-2 h-4 w-4" /> Apply unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Beta access requires a verified registry, explicit eligibility
                  rules, privacy controls, authorization, auditability, and a
                  supported application workflow.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No tokens, balances, rewards, fee discounts, trading signals,
                  financial outcomes, or production availability are claimed.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Ban className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No account, wallet, repository, blockchain, invitation,
                  subscription, or application mutation is available from this
                  preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
