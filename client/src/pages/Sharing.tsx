import { useMemo, useState } from "react";
import {
  Check,
  Clock3,
  Eye,
  FileText,
  Link2,
  LockKeyhole,
  Mail,
  RefreshCw,
  RotateCcw,
  Send,
  ShieldAlert,
  Users,
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
const items = [
  {
    id: 1,
    name: "Workspace brief concept",
    audience: "Workspace",
    permission: "View",
    detail:
      "Requires content ownership, recipient identity, workspace authorization, link policy, and audit.",
    state: "Local",
  },
  {
    id: 2,
    name: "Course resource concept",
    audience: "Learners",
    permission: "Comment",
    detail:
      "Requires learner privacy, course enrollment, moderation, accessibility, expiry, and revocation.",
    state: "Preview",
  },
  {
    id: 3,
    name: "Marketplace listing concept",
    audience: "Public",
    permission: "View",
    detail:
      "Requires listing owner, visibility, abuse controls, takedown, link security, and activity provenance.",
    state: "Needs evidence",
  },
  {
    id: 4,
    name: "Private report concept",
    audience: "Specific recipients",
    permission: "Download",
    detail:
      "Requires recipient verification, export control, watermarking, encryption, retention, and audit.",
    state: "Blocked",
  },
];
export default function Sharing() {
  const [query, setQuery] = useState("");
  const [audience, setAudience] = useState("All");
  const [selected, setSelected] = useState(1);
  const [expiry, setExpiry] = useState("Expiry not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const audiences = [
    "All",
    ...Array.from(new Set(items.map(item => item.audience))),
  ];
  const filtered = useMemo(
    () =>
      items.filter(
        item =>
          (audience === "All" || item.audience === audience) &&
          `${item.name} ${item.audience} ${item.permission} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [query, audience]
  );
  const selectedItem = items.find(item => item.id === selected) ?? items[0];
  const reset = () => {
    setQuery("");
    setAudience("All");
    setSelected(1);
    setExpiry("Expiry not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Send}
        eyebrow="Sharing · Content-access preview"
        title="Make sharing rules visible without claiming access exists."
        description="Explore a local sharing workspace with content concepts, audiences, permission filters, expiry intent, link and recipient states, activity and revoke concepts, save/reset, and blocked create/send actions. No content ownership, recipient identity, link, permission, access, delivery, or persistence is connected."
        badge="Evidence-bounded sharing workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save sharing view"}
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
            {showGates ? "Close gates" : "Review sharing gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Content",
              value: `${items.length} local`,
              hint: "No content source",
              icon: FileText,
              tone: "cyan",
            },
            {
              label: "Audiences",
              value: `${audiences.length - 1} concepts`,
              hint: "No recipients",
              icon: Users,
              tone: "violet",
            },
            {
              label: "Links",
              value: "Unavailable",
              hint: "No signing source",
              icon: Link2,
              tone: "amber",
            },
            {
              label: "Delivery",
              value: "Blocked",
              hint: "No provider",
              icon: Mail,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Sharing evidence boundary">
          <strong>
            This is a local content-sharing design preview, not evidence that
            content is owned, a recipient exists, a link works, permission is
            enforced, access was granted, delivery occurred, or revocation
            succeeded.
          </strong>{" "}
          Content cards, filters, expiry intent, saved state, and disabled
          link/send/revoke actions are browser concepts. No content, identity,
          permission, link, access, message, email, notification, share event,
          or audit record is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <label className="text-sm font-semibold text-slate-300">
                Search shared content
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local content concepts"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Expiry intent
                <select
                  value={expiry}
                  onChange={event => setExpiry(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Expiry not configured</option>
                  <option>One hour intent</option>
                  <option>One day intent</option>
                  <option>Seven days intent</option>
                  <option>No expiry intent</option>
                </select>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {audiences.map(entry => (
                <Button
                  key={entry}
                  onClick={() => setAudience(entry)}
                  size="sm"
                  variant="outline"
                  className={
                    audience === entry
                      ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                      : "border-white/10 text-slate-400"
                  }
                >
                  {entry}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Content concepts
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {filtered.length} local item{filtered.length === 1 ? "" : "s"}
              </h2>
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.audience}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.permission}
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
                    Selected sharing concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    {selectedItem.name}
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {selectedItem.state}
                </Badge>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  <Users className="mr-1 size-3" />
                  {selectedItem.audience}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  <Eye className="mr-1 size-3" />
                  {selectedItem.permission}
                </Badge>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Content", value: "Unverified" },
                  { label: "Recipient", value: "Unavailable" },
                  { label: "Permission", value: selectedItem.permission },
                  { label: "Link", value: "Unavailable" },
                  { label: "Expiry", value: expiry },
                  { label: "Activity", value: "No feed" },
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
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Link2 className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">No sharing evidence loaded</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect content ownership, recipient identity, authorization,
                  link signing, access enforcement, expiration, revocation,
                  notification, delivery, retention, and audit before sharing.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Create link unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Send unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Revoke unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  View activity unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No access or delivery claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local sharing concept does not prove content ownership,
                    recipient access, link security, permission enforcement,
                    expiry, revocation, notification, delivery, or audit.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Sharing-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real sharing system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated content ownership, recipient identity, workspace membership, permissions, tenant isolation, CSRF, validation, and audit",
                "Link entropy/signing, expiration, revocation, access checks, download controls, watermarking, encryption, and abuse handling",
                "Email, message, notification, recipient, delivery, read receipt, and activity claims require provider, timestamp, user, and audit provenance",
                "Education, marketplace, AI, crypto, wallet, financial, community, identity, and security shares require separate domain evidence",
                "Create, send, revoke, export, accessibility, confirmation, retry, and accountable approval require governed sharing operations",
                "A sharing preview must not be presented as content access, link creation, permission enforcement, delivery, or revocation without evidence",
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
              title: "Sharing surface preserved",
              description:
                "Content, audiences, permissions, expiry, links, recipients, delivery, activity, revoke, save/reset, and gates remain interactive.",
              icon: Send,
              status: "Local sharing",
            },
            {
              title: "No access theater",
              description:
                "Content ownership, recipient access, link security, permissions, delivery, revocation, and audit are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Authorization before sharing",
              description:
                "Real sharing requires governed content, identity, permissions, link security, expiry, abuse handling, delivery provenance, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
