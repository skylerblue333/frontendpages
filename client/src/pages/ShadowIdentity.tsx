import { useState } from "react";
import {
  Eye,
  Fingerprint,
  History,
  LockKeyhole,
  Network,
  RefreshCw,
  Save,
  ShieldAlert,
  SlidersHorizontal,
  UserRound,
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
export default function ShadowIdentity() {
  const [alias, setAlias] = useState("");
  const [reveal, setReveal] = useState(false);
  const [reputation, setReputation] = useState(
    "Reputation model not configured"
  );
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const reset = () => {
    setAlias("");
    setReveal(false);
    setReputation("Reputation model not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Fingerprint}
        eyebrow="Shadow identity · Privacy design preview"
        title="Design privacy controls without promising anonymity."
        description="Explore a local pseudonymous-identity workspace with alias, reveal-intent, reputation-model, consent, audit, threat-model, and abuse-prevention concepts. No identity provider, anonymity guarantee, verification, reputation score, public leaderboard, or privacy outcome is connected."
        badge="Evidence-bounded identity workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Save className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save identity draft"}
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
            {showGates ? "Close gates" : "Review privacy gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset draft
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Identity",
              value: "Local draft",
              hint: "No provider",
              icon: UserRound,
              tone: "cyan",
            },
            {
              label: "Reveal",
              value: reveal ? "Intent" : "Off",
              hint: "No enforcement",
              icon: Eye,
              tone: "violet",
            },
            {
              label: "Reputation",
              value: "Unavailable",
              hint: "No score source",
              icon: SlidersHorizontal,
              tone: "amber",
            },
            {
              label: "Privacy",
              value: "Unverified",
              hint: "No threat-model proof",
              icon: LockKeyhole,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Identity evidence boundary">
          <strong>
            This is a local privacy and pseudonym design preview, not evidence
            that anyone is anonymous, protected, verified, pseudonymous,
            reputable, or hidden from a party.
          </strong>{" "}
          Alias fields, reveal intent, model selectors, consent gates, audit
          concepts, and disabled identity actions are browser concepts. No
          identity, anonymity, privacy, reputation, score, verification, public
          ranking, abuse decision, or security outcome is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="space-y-6 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Local identity draft
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Choose the privacy boundary before the identity model
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                A pseudonym is not anonymity. A local draft is not an identity
                record.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-300">
                Pseudonym or alias
                <input
                  value={alias}
                  onChange={event => setAlias(event.target.value)}
                  placeholder="Local draft only"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Reputation model intent
                <select
                  value={reputation}
                  onChange={event => setReputation(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Reputation model not configured</option>
                  <option>Transparent rubric intent</option>
                  <option>Human-review assist intent</option>
                  <option>Community feedback intent</option>
                  <option>No-score design</option>
                </select>
              </label>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4">
              <div className="flex items-start gap-3">
                <Eye className="mt-0.5 size-5 text-cyan-300" />
                <div>
                  <p className="font-semibold">Reveal identity intent</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    This toggle does not reveal or hide an identity, change
                    permissions, or prove a privacy boundary.
                  </p>
                </div>
              </div>
              <button
                aria-pressed={reveal}
                onClick={() => setReveal(value => !value)}
                className={`h-6 w-11 shrink-0 rounded-full p-1 transition ${reveal ? "bg-cyan-300" : "bg-white/10"}`}
              >
                <span
                  className={`block size-4 rounded-full bg-white transition ${reveal ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Alias", value: alias || "Not entered" },
                { label: "Identity", value: "Unverified" },
                { label: "Reputation", value: reputation },
              ].map(item => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 p-4"
                >
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-amber-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
              <Fingerprint className="mx-auto size-8 text-slate-600" />
              <p className="mt-3 font-semibold">No identity evidence loaded</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Connect identity provider, pseudonym mapping, consent, key
                management, access control, reveal policy, threat model, abuse
                prevention, reputation provenance, appeals, and audit before
                enabling real actions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Create identity unavailable
              </Button>
              <Button
                disabled
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Verify identity unavailable
              </Button>
              <Button
                disabled
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Reveal identity unavailable
              </Button>
              <Button
                disabled
                variant="outline"
                className="border-white/10 text-slate-500"
              >
                Publish reputation unavailable
              </Button>
            </div>
            {showGates && (
              <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                <p className="font-semibold text-amber-100">
                  No privacy or reputation claim
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A local alias does not prove anonymity, confidentiality,
                  identity protection, verification, reputation accuracy, public
                  ranking, or abuse prevention.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Identity-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real shadow-identity system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Identity provider, pseudonym mapping, key lifecycle, authentication, authorization, tenant isolation, consent, recovery, and audit",
                "Privacy threat model, metadata leakage, linkability, correlation, reveal policy, revocation, legal basis, retention, and data-subject rights",
                "Reputation rubric, source provenance, model version, bias, explainability, appeals, human review, abuse controls, and no sensitive inference",
                "Financial, wallet, blockchain, education, marketplace, AI, community, security, and public-leaderboard claims require separate domain evidence",
                "Create, verify, reveal, revoke, export, delete, publish, accessibility, and accountable approval require governed identity operations",
                "A shadow-identity preview must not be presented as anonymous, private, verified, reputable, protected, or hidden without evidence",
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
              title: "Identity surface preserved",
              description:
                "Alias, reveal intent, reputation model, consent, audit, threat model, abuse controls, create, verify, revoke, save/reset, and gates remain interactive.",
              icon: Fingerprint,
              status: "Local design",
            },
            {
              title: "No anonymity theater",
              description:
                "Anonymity, privacy, verification, reputation, public ranking, identity reveal, and security outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Threat model before trust",
              description:
                "Real privacy identity requires governed mapping, key lifecycle, access controls, reveal policy, abuse prevention, appeals, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
