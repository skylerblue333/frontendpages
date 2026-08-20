import { useMemo, useState } from "react";
import {
  Award,
  Check,
  FileCheck2,
  Filter,
  GraduationCap,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  Share2,
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
const credentials = [
  {
    id: 1,
    name: "Course completion credential",
    category: "Completion",
    detail:
      "A local credential concept requiring course version, learner identity, completion evidence, assessment result, issuer authority, privacy, and revocation rules.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Skill badge",
    category: "Achievement",
    detail:
      "A skills badge concept requiring objective evidence, rubric, assessor, issuer, expiry, accessibility, and appeal handling.",
    state: "Needs evidence",
  },
  {
    id: 3,
    name: "Blockchain literacy certificate",
    category: "Technology",
    detail:
      "A technology certificate concept requiring accurate curriculum, assessment integrity, issuer identity, registry or chain provenance, and no investment promise.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Community leadership record",
    category: "Community",
    detail:
      "A community credential concept requiring safeguarding, moderator review, participation evidence, privacy, and responsible sharing.",
    state: "Preview",
  },
];
export default function SchoolCertificate() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [issuer, setIssuer] = useState("Issuer not configured");
  const [verification, setVerification] = useState(
    "Verification not configured"
  );
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(credentials.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      credentials.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const credential =
    credentials.find(item => item.id === selected) ?? credentials[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setIssuer("Issuer not configured");
    setVerification("Verification not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Award}
        eyebrow="School certificate · Credential preview"
        title="Prove completion before issuing the credential."
        description="Explore local completion, achievement, technology, and community credential concepts with search, category filters, issuer and verification intent, assessment and revocation gates, save/reset, and blocked issue/verify actions. No learner, course, assessment, issuer, certificate, registry, chain, score, employment, or credential is connected."
        badge="Credential-governance workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save credential locally"}
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
            {showGates ? "Close gates" : "Review credential gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset credential
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Credential concepts",
              value: `${credentials.length} local`,
              hint: "No learner source",
              icon: Award,
              tone: "cyan",
            },
            {
              label: "Completion",
              value: "Unavailable",
              hint: "No assessment source",
              icon: GraduationCap,
              tone: "violet",
            },
            {
              label: "Issuer",
              value: "Unconfigured",
              hint: "No authority source",
              icon: FileCheck2,
              tone: "amber",
            },
            {
              label: "Verification",
              value: "Blocked",
              hint: "No registry source",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Credential evidence boundary">
          <strong>
            This is a local credential-design preview, not evidence that a
            learner completed a course or that a certificate was issued,
            verified, recognized, or employable.
          </strong>{" "}
          Credential cards, filters, issuer and verification intent, saved
          state, assessment/revocation gates, and disabled issue/verify actions
          are browser concepts. No learner, course, grade, score, issuer,
          certificate, hash, registry, blockchain, employment, earnings, or
          educational outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local credentials"
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
                    Selected credential concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {credential.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {credential.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {credential.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: credential.category },
                  { label: "Issuer", value: issuer },
                  { label: "Verification", value: verification },
                  { label: "Completion", value: "Unavailable" },
                  { label: "Revocation", value: "Unconfigured" },
                  { label: "Sharing", value: "Required" },
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
                  Issuer intent
                  <select
                    value={issuer}
                    onChange={event => setIssuer(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Issuer not configured</option>
                    <option>Course-provider intent</option>
                    <option>Institution intent</option>
                    <option>Community-issuer intent</option>
                    <option>Independent-review intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Verification intent
                  <select
                    value={verification}
                    onChange={event => setVerification(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Verification not configured</option>
                    <option>Registry intent</option>
                    <option>Signed-document intent</option>
                    <option>Public-verification intent</option>
                    <option>Revocation-check intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Award className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No credential evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed course version, learner identity, completion
                  evidence, assessment, issuer authority, registry or chain,
                  privacy, revocation, accessibility, appeals, and verification
                  before issuing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Issue unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Verify unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  <Share2 className="mr-2 size-4" />
                  Share unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Revoke unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No credential or employment claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A credential concept does not prove a learner, course
                    completion, score, issuer, certificate, hash, registry,
                    chain verification, employment, earnings, or educational
                    recognition.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Credential-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real education credential must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated learner, course, version, enrollment, completion, assessment, issuer, timestamp, organization, locale, and provenance",
                "Academic integrity, rubric, score, moderation, appeals, accessibility, learner privacy, safeguarding, retention, and deletion",
                "Certificate schema, signature, registry or chain, public verification, revocation, expiry, transfer, issuer identity, and audit",
                "Employment, earnings, reward, investment, blockchain, financial, AI, education, legal, and user-impact claims require domain review",
                "Issue, verify, share, revoke, export, notify, recover, accessibility, and accountable approval require governed credential operations",
                "A certificate preview must not be presented as a credential, certification, license, regulated qualification, employment proof, or financial outcome without evidence",
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
              title: "Credential surface preserved",
              description:
                "Completion, achievement, technology, community credentials, filters, issuers, verification, assessment, revocation, sharing, issue, save/reset, and gates remain interactive.",
              icon: Award,
              status: "Local credentials",
            },
            {
              title: "No certificate theater",
              description:
                "Learners, courses, scores, issuers, certificates, hashes, registries, verification, employment, earnings, and recognition are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Assessment before issuance",
              description:
                "Real credentials require governed completion evidence, assessment, issuer authority, signed representation, revocation, privacy, appeals, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
