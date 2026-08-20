import { useMemo, useState } from "react";
import {
  Check,
  Filter,
  KeyRound,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserCog,
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
const roles = [
  {
    id: 1,
    name: "Member role",
    category: "Core",
    detail:
      "A local role concept for scoped product access requiring identity, tenant, least privilege, and periodic review.",
    state: "Unconfigured",
  },
  {
    id: 2,
    name: "Reviewer role",
    category: "Governance",
    detail:
      "A review role concept requiring evidence boundaries, separation of duties, appeals, audit, and conflict handling.",
    state: "Needs review",
  },
  {
    id: 3,
    name: "Wallet operator role",
    category: "Crypto",
    detail:
      "A high-risk role concept requiring custody boundary, transaction policy, signing authorization, limits, and recovery.",
    state: "Blocked",
  },
  {
    id: 4,
    name: "Support role",
    category: "Operations",
    detail:
      "A support role concept requiring customer-data minimization, impersonation controls, consent, redaction, and audit.",
    state: "Unmeasured",
  },
];
export default function RoleManagement() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [membership, setMembership] = useState("Membership not configured");
  const [review, setReview] = useState("Review not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(roles.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      roles.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const role = roles.find(item => item.id === selected) ?? roles[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setMembership("Membership not configured");
    setReview("Review not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={UserCog}
        eyebrow="Role management · Security preview"
        title="Manage the role lifecycle before changing access."
        description="Explore local core, governance, crypto, and support role concepts with search, category filters, membership and review intent, deprovisioning gates, save/reset, and blocked directory actions. No live users, memberships, permissions, sessions, custody, or security certification is connected."
        badge="Identity workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save role locally"}
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
            {showGates ? "Close gates" : "Review role gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset role
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Roles",
              value: `${roles.length} local`,
              hint: "No directory source",
              icon: UserCog,
              tone: "cyan",
            },
            {
              label: "Members",
              value: "Unavailable",
              hint: "No identity source",
              icon: UsersRound,
              tone: "violet",
            },
            {
              label: "Permissions",
              value: "Unconfigured",
              hint: "No policy source",
              icon: KeyRound,
              tone: "amber",
            },
            {
              label: "Deprovisioning",
              value: "Blocked",
              hint: "No authorization",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Role-management evidence boundary">
          <strong>
            This is a local role-lifecycle preview, not proof that users, roles,
            memberships, permissions, or access decisions exist.
          </strong>{" "}
          Role cards, filters, membership and review intent, saved state, and
          disabled directory actions are browser concepts. No user identity,
          role assignment, permission grant, session, wallet custody, data
          access, security status, or compliance outcome is asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local roles"
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
                    Selected role concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{role.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {role.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {role.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: role.category },
                  { label: "Membership", value: membership },
                  { label: "Review", value: review },
                  { label: "Members", value: "Unavailable" },
                  { label: "Permissions", value: "Unconfigured" },
                  { label: "Audit", value: "Required" },
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
                  Membership intent
                  <select
                    value={membership}
                    onChange={event => setMembership(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Membership not configured</option>
                    <option>Invite intent</option>
                    <option>Request intent</option>
                    <option>Owner-assigned intent</option>
                    <option>Temporary intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Review intent
                  <select
                    value={review}
                    onChange={event => setReview(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Review not configured</option>
                    <option>Periodic review intent</option>
                    <option>Privilege review intent</option>
                    <option>Incident review intent</option>
                    <option>Offboarding review intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <UserCog className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No role-management evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed identity, directory, memberships,
                  permissions, MFA, approvals, sessions, offboarding, privacy,
                  custody, and audit before changing roles.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Create role unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Assign unavailable
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
                  Export audit unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No live role or authorization claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A role concept does not prove user membership, permission,
                    session, access decision, wallet custody, data
                    authorization, or security certification.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Role-lifecycle gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real role-management system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated identity, directory, tenant, role, resource, action, scope, timestamp, and assignment provenance",
                "Least privilege, separation of duties, MFA, privileged access, temporary access, review, revocation, and offboarding",
                "Wallet, payment, blockchain, financial, personal, educational, AI, marketplace, and admin actions require domain authorization",
                "Server-side enforcement, deny-by-default, IDOR protection, CSRF, rate limits, audit, incident response, and recovery",
                "Privacy, consent, classification, redaction, retention, deletion, export, lawful access, and support ownership",
                "Security, compliance, certification, custody, privacy, and user-impact claims require independent evidence and accountable review",
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
              title: "Role surface preserved",
              description:
                "Core, governance, crypto, support roles, filters, memberships, permissions, approvals, review, assign, revoke, audit, save/reset, and gates remain interactive.",
              icon: UserCog,
              status: "Local roles",
            },
            {
              title: "No directory theater",
              description:
                "Users, memberships, permissions, sessions, custody, privacy, compliance, and security outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Lifecycle evidence before change",
              description:
                "Real role management requires authenticated server-side decisions, least privilege, review, revocation, recovery, and audit.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
