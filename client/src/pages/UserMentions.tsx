import { useMemo, useState } from "react";
import {
  BellRing,
  CheckCircle2,
  Eye,
  FileSearch,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Filter = "All" | "Unread" | "Read";
type Mention = { id: string; title: string; state: string; evidence: string };
const mentions: readonly Mention[] = [
  {
    id: "one",
    title: "Community mention concept",
    state: "Unread",
    evidence:
      "Author, content, target identity, timestamp, permission, and delivery state are unavailable.",
  },
  {
    id: "two",
    title: "Education mention concept",
    state: "Read",
    evidence:
      "Course context, audience scope, notification provider, and read receipt are unavailable.",
  },
  {
    id: "three",
    title: "Profile mention concept",
    state: "Unread",
    evidence:
      "Privacy, moderation, actor identity, and notification preference state are unavailable.",
  },
];

export default function UserMentions() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(mentions[0].id);
  const [status, setStatus] = useState(
    "Mention service unavailable locally. No mention events are loaded."
  );
  const selected = useMemo(
    () => mentions.find(mention => mention.id === selectedId) ?? mentions[0],
    [selectedId]
  );
  const visible =
    filter === "All"
      ? mentions
      : mentions.filter(mention => mention.state === filter);
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No mention query, read-state, notification, privacy, moderation, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={BellRing}
        title="User mentions"
        subtitle="Review mention-notification readiness without fabricating actors, content, permissions, delivery, read state, privacy, moderation, or account activity."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="User mentions unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Mention service unavailable.</strong> No authenticated
            recipient, mention stream, content source, notification provider,
            privacy policy, moderation state, or read-state store is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh mentions")}
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
                  Mention preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review local mention concepts
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fixtures demonstrate notification state and
                  evidence notes only. They do not represent real people,
                  content, mention targets, delivery, read receipts, or
                  moderation outcomes.
                </p>
              </div>
              <BellRing
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Mention state filter"
            >
              {(["All", "Unread", "Read"] as const).map(item => (
                <Button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => {
                    setFilter(item);
                    setStatus(
                      `Mention-state filter changed locally to ${item}. No mention query was run.`
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
              {visible.map(mention => (
                <button
                  key={mention.id}
                  type="button"
                  aria-pressed={selected.id === mention.id}
                  onClick={() => setSelectedId(mention.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === mention.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{mention.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {mention.state}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {mention.evidence}
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
                Selected mention concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.state}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Mention ID", "Unavailable"],
                  ["Actor", "Identity unavailable"],
                  ["Content", "Content source unavailable"],
                  ["Target", "Recipient scope unavailable"],
                  ["Timestamp", "Not available"],
                  ["Delivery", "Provider unavailable"],
                  ["Read state", "Not verified"],
                  ["Privacy", "Policy unavailable"],
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
                  Mark read unavailable
                </Button>
                <Button disabled size="sm" variant="outline">
                  Open content unavailable
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
                  A production mentions system requires authenticated recipient
                  scope, content and actor authorization, privacy and blocking
                  controls, moderation, deduplication, provider delivery state,
                  retry policy, read receipts, audit events, and safe redaction
                  of private content or personal data.
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
                    No mention query sent.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Delivery blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No notification mutation.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Content absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No source or context.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Eye className="h-5 w-5 text-rose-300" aria-hidden="true" />
                  <p className="mt-2 text-sm font-medium">Privacy boundary</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No target inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No mention, actor, content, recipient, notification, read receipt,
            privacy, moderation, or account-activity outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
