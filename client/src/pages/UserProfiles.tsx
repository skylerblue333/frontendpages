import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Eye,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  UserRoundSearch,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "All" | "Community" | "Education";
type Profile = { id: string; name: string; category: string; evidence: string };
const profiles: readonly Profile[] = [
  {
    id: "one",
    name: "Community profile concept",
    category: "Community",
    evidence:
      "Identity, biography, avatar, privacy, verification, and activity are unavailable.",
  },
  {
    id: "two",
    name: "Education profile concept",
    category: "Education",
    evidence:
      "Course context, credentials, audience scope, and follow relationship are unavailable.",
  },
  {
    id: "three",
    name: "Ecosystem profile concept",
    category: "Community",
    evidence:
      "Links, moderation, public visibility, and source provenance are unavailable.",
  },
];

export default function UserProfiles() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(profiles[0].id);
  const [status, setStatus] = useState(
    "Profile-directory service unavailable locally. No profiles are loaded."
  );
  const selected = useMemo(
    () => profiles.find(profile => profile.id === selectedId) ?? profiles[0],
    [selectedId]
  );
  const visible =
    filter === "All"
      ? profiles
      : profiles.filter(profile => profile.category === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No profile query, follow, privacy, moderation, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={UserRoundSearch}
        title="User profiles"
        subtitle="Review profile-directory readiness without fabricating identities, avatars, biographies, activity, verification, privacy, relationships, or moderation outcomes."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="User profiles unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Profile-directory service unavailable.</strong> No
            authenticated profile source, directory index, avatar store,
            verification service, privacy policy, activity stream, or moderation
            state is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh profiles")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <div className="grid gap-6 lg:grid-cols-[1fr_370px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Directory preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local profile concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate categories and evidence notes
                  only. They do not represent real people, public profiles,
                  social relationships, activity, credentials, or verification.
                </p>
              </div>
              <UserRoundSearch
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Profile category filter"
            >
              {(["All", "Community", "Education"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Profile category filter changed locally to ${item}. No directory query was run.`
                    );
                  }}
                  size="sm"
                  variant={filter === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {visible.map(profile => (
                <button
                  key={profile.id}
                  type="button"
                  aria-pressed={selected.id === profile.id}
                  onClick={() => setSelectedId(profile.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === profile.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{profile.name}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {profile.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {profile.evidence}
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
                Selected profile concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.name}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.category}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Profile ID", "Unavailable"],
                  ["Identity", "Not authenticated"],
                  ["Display name", "Not loaded"],
                  ["Avatar", "Image source unavailable"],
                  ["Biography", "Not loaded"],
                  ["Verification", "Not verified"],
                  ["Activity", "Stream unavailable"],
                  ["Visibility", "Privacy policy unavailable"],
                  ["Follow relationship", "Not determined"],
                  ["Moderation", "Review state unavailable"],
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
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled size="sm">
                  Follow unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Open unavailable
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
                  A production directory requires authenticated profile
                  ownership, privacy and blocking controls, field and avatar
                  safety, verification provenance, activity redaction, follow
                  authorization, moderation, pagination, abuse controls,
                  auditability, and clear separation between preview and public
                  state.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Filter local</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No directory query sent.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Follow blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No relationship mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Source absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No profile provenance.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Privacy boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No audience inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No profile identity, avatar, biography, verification, activity,
            visibility, follow relationship, moderation, or public-profile
            outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
