import { useState } from "react";
import {
  CircleSlash2,
  Crown,
  FlagOff,
  Gamepad2,
  LockKeyhole,
  ShieldAlert,
  Swords,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Tab = "Guilds" | "Wars" | "Leaderboard";
const tabs: Tab[] = ["Guilds", "Wars", "Leaderboard"];
export default function Guilds() {
  const [tab, setTab] = useState<Tab>("Guilds");
  const [status, setStatus] = useState(
    "Guild service unavailable. Showing local community concepts only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No guild, membership, invite, war, leaderboard, reward, notification, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-191" className="min-h-screen bg-background">
      <PageHeader
        icon={Users}
        title="Guilds"
        subtitle="Review local guild concepts without fabricated members, levels, XP, reputation, wars, scores, rankings, invites, or reward outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Guild service unavailable.</strong> No authenticated identity,
          guild store, membership graph, game state, war service, leaderboard,
          moderation, or notification endpoint is connected.
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Guilds", "Members", "Active wars", "Leaderboard"].map(label => (
            <Card className="border-slate-800 bg-slate-900/75 p-5" key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">Unavailable</p>
              <Badge className="mt-3" variant="outline">
                Source unavailable
              </Badge>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap gap-2">
            {tabs.map(item => (
              <Button
                aria-pressed={tab === item}
                key={item}
                onClick={() => setTab(item)}
                size="sm"
                variant={tab === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-12 text-center">
            {tab === "Wars" ? (
              <Swords className="mx-auto h-9 w-9 text-slate-500" />
            ) : tab === "Leaderboard" ? (
              <Crown className="mx-auto h-9 w-9 text-slate-500" />
            ) : (
              <Users className="mx-auto h-9 w-9 text-slate-500" />
            )}
            <h2 className="mt-4 text-xl font-semibold">{tab} unavailable</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
              No verified {tab.toLowerCase()} data is connected. This preview
              does not fabricate members, XP, level, reputation, war scores,
              rankings, or rewards.
            </p>
            <Button
              className="mt-5"
              onClick={() => blocked(`Load ${tab.toLowerCase()}`)}
              variant="outline"
            >
              Load unavailable
            </Button>
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <Gamepad2 className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-3 font-semibold">No game state</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No level, XP, win, reputation, score, reward, or activity outcome
              is claimed.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No membership claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No guild identity, member, invite, role, ownership, or moderation
              state is available.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No mutation</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No guild, join, invite, war, leaderboard, notification, reward, or
              account operation is available locally.
            </p>
          </Card>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production guild systems require authenticated membership,
              game-state provenance, moderation, abuse controls, competitive
              integrity, and auditable mutations.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <FlagOff className="h-5 w-5 text-slate-500" />
            <p className="text-sm leading-6 text-slate-400">
              No war, score, rank, member, invite, or reward data is fabricated.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
