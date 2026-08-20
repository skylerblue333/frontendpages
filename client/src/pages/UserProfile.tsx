import { useState } from "react";
import {
  Activity,
  BadgeCheck,
  CircleSlash2,
  Heart,
  LockKeyhole,
  MessageCircle,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Tab = "Posts" | "Activity" | "Followers" | "Likes";
type ProfileState = { label: string; value: string };
const states: ProfileState[] = [
  { label: "Posts", value: "Posts unavailable" },
  { label: "Activity", value: "Activity unavailable" },
  { label: "Followers", value: "Followers unavailable" },
  { label: "Likes", value: "Likes unavailable" },
];
export default function UserProfile() {
  const [tab, setTab] = useState<Tab>("Posts");
  const [status, setStatus] = useState(
    "Profile service unavailable. Showing a local read-only profile shell only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, relationship, notification, moderation, activity, or social mutation was started.`
    );
  const selected = states.find(item => item.label === tab) ?? states[0];
  return (
    <div data-ui-polish="batch-205" className="min-h-screen bg-background">
      <PageHeader
        icon={UserRound}
        title="User profile"
        subtitle="Review a read-only profile shell without fabricated identity, posts, activity, follower counts, likes, badges, timestamps, or relationship outcomes."
        badge="Read-only preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Profile service unavailable.</strong> No verified profile,
          social feed, activity history, follower graph, moderation source, or
          relationship endpoint is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/10">
              <UserRound className="h-9 w-9 text-purple-200" />
            </div>
            <div className="flex-1">
              <Badge variant="outline">Identity unavailable</Badge>
              <h2 className="mt-2 text-2xl font-semibold">
                Profile identity unavailable
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No display name, username, avatar, biography, location, badges,
                reputation, or verification outcome is available from this
                preview.
              </p>
            </div>
            <Button onClick={() => blocked("Follow profile")} variant="outline">
              <UserRoundPlus className="mr-2 h-4 w-4" /> Follow unavailable
            </Button>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {(
              [
                ["Posts", "Unavailable"],
                ["Followers", "Unavailable"],
                ["Following", "Unavailable"],
                ["Reputation", "Unavailable"],
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
        </Card>
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex flex-wrap gap-2">
              {states.map(item => (
                <Button
                  aria-pressed={tab === item.label}
                  key={item.label}
                  onClick={() => setTab(item.label as Tab)}
                  size="sm"
                  variant={tab === item.label ? "default" : "outline"}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">
                <Activity className="h-6 w-6 text-slate-500" />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{selected.value}</h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                A verified service would need authenticated access, provenance,
                moderation, privacy controls, and consistent timestamps before
                showing this profile surface.
              </p>
              <Button
                className="mt-5"
                onClick={() => blocked(`Load ${tab.toLowerCase()}`)}
                variant="outline"
              >
                Load unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Data boundaries
              </p>
              <h2 className="mt-2 text-xl font-semibold">Not connected</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Identity", "Unavailable"],
                    ["Posts", "Unavailable"],
                    ["Activity", "Unavailable"],
                    ["Relationships", "Unavailable"],
                    ["Notifications", "Unavailable"],
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
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Profile data requires authenticated authorization, provenance,
                  privacy controls, moderation, deletion handling, and auditable
                  relationship mutations.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <BadgeCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No verification badge, engagement count, activity timestamp,
                  follower graph, or social proof is claimed.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No post, like, comment, follow, message, notification, or
                  moderation operation is available locally.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
