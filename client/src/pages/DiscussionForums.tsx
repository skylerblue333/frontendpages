import { useMemo, useState } from "react";
import {
  Bookmark,
  CheckCircle2,
  CircleSlash2,
  Clock3,
  EyeOff,
  HeartOff,
  LockKeyhole,
  MessageCircle,
  MessageCircleOff,
  PinOff,
  Search,
  ShieldAlert,
  Tag,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/PageHeader";

type Category = "All" | "Education" | "Community" | "Product";
type Discussion = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  summary: string;
  status: string;
};
const discussions: Discussion[] = [
  {
    id: "education",
    title: "Education discussion concept",
    category: "Education",
    summary:
      "Local discussion concept pending verified authorship, moderation, timestamps, and reply persistence.",
    status: "Discussion unavailable",
  },
  {
    id: "community",
    title: "Community discussion concept",
    category: "Community",
    summary:
      "Local community thread concept pending identity, abuse prevention, privacy, and notification services.",
    status: "Discussion unavailable",
  },
  {
    id: "product",
    title: "Product feedback concept",
    category: "Product",
    summary:
      "Local feedback thread concept pending ownership, issue tracking, moderation, and durable records.",
    status: "Discussion unavailable",
  },
];
export default function DiscussionForums() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Discussion | null>(null);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState(
    "Community service unavailable. Showing local discussion concepts only."
  );
  const visible = useMemo(
    () =>
      discussions.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.title} ${item.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No post, reply, like, bookmark, notification, moderation, identity, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-187" className="min-h-screen bg-background">
      <PageHeader
        icon={MessageCircle}
        title="Discussion forums"
        subtitle="Review local discussion concepts without fabricated authors, timestamps, views, likes, replies, resolution, bookmarks, or community outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Community service unavailable.</strong> No authenticated
          identity, discussion store, moderation queue, notification endpoint,
          abuse controls, or engagement source is connected.
        </div>
        {selected ? (
          <div className="space-y-6">
            <Button onClick={() => setSelected(null)} variant="ghost">
              ← Back to discussions
            </Button>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge variant="outline">
                    {selected.category} · Unavailable
                  </Badge>
                  <h2 className="mt-3 text-2xl font-semibold">
                    {selected.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    {selected.summary}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => blocked("Like discussion")}
                    variant="outline"
                  >
                    <HeartOff className="mr-2 h-4 w-4" /> Like unavailable
                  </Button>
                  <Button
                    onClick={() => blocked("Bookmark discussion")}
                    variant="outline"
                  >
                    <Bookmark className="mr-2 h-4 w-4" /> Save unavailable
                  </Button>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {(
                  [
                    ["Author", "Unavailable"],
                    ["Created", "Unavailable"],
                    ["Views", "Unavailable"],
                    ["Replies", "Unavailable"],
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
              <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-10 text-center">
                <MessageCircleOff className="mx-auto h-8 w-8 text-slate-500" />
                <h2 className="mt-4 text-xl font-semibold">
                  Discussion content unavailable
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                  No post body, tags, author, timestamp, view count, resolution,
                  moderation outcome, or reply history is available.
                </p>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-cyan-200" />
                <div>
                  <h2 className="font-semibold">Local reply draft</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    This field remains in component memory and cannot be
                    submitted or notified.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <Textarea
                  aria-label="Reply draft"
                  onChange={event => setDraft(event.target.value)}
                  placeholder="Reply draft only"
                  rows={3}
                  value={draft}
                />
                <Button
                  disabled={!draft.trim()}
                  onClick={() => blocked("Reply to discussion")}
                  variant="outline"
                >
                  Reply unavailable
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Discussion catalog
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">
                    Local community concepts
                  </h2>
                </div>
                <div className="relative w-full md:max-w-sm">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <Input
                    aria-label="Search discussions"
                    className="pl-9"
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Search discussions"
                    value={query}
                  />
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Local entries describe forum structure only. They do not
                represent real authors, community activity, content, engagement,
                or moderation outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(
                  ["All", "Education", "Community", "Product"] as Category[]
                ).map(item => (
                  <Button
                    aria-pressed={category === item}
                    key={item}
                    onClick={() => setCategory(item)}
                    size="sm"
                    variant={category === item ? "default" : "outline"}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {visible.map(item => (
                  <button
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 p-5 text-left transition hover:border-cyan-400/30"
                    key={item.id}
                    onClick={() => setSelected(item)}
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.category} · Author unavailable · Timestamp
                          unavailable
                        </p>
                      </div>
                      <Badge variant="outline">Unavailable</Badge>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.summary}
                    </p>
                  </button>
                ))}
                {visible.length === 0 && (
                  <div className="rounded-xl border border-slate-800 p-8 text-center text-sm text-slate-400">
                    No local discussions match this query.
                  </div>
                )}
              </div>
              <Button
                className="mt-5"
                onClick={() => blocked("Create discussion")}
                variant="outline"
              >
                New discussion unavailable
              </Button>
            </Card>
            <aside>
              <Card className="border-slate-800 bg-slate-900/75 p-6">
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Forum boundaries
                </p>
                <h2 className="mt-2 text-xl font-semibold">Not connected</h2>
                <div className="mt-5 grid gap-2">
                  {(
                    [
                      ["Identity", "Unavailable"],
                      ["Content", "Unavailable"],
                      ["Engagement", "Unavailable"],
                      ["Moderation", "Unavailable"],
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
                    A real forum requires authenticated authorship, content
                    policy, moderation, rate limits, privacy, retention,
                    deletion, and auditable mutations.
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-amber-200" />
                  <p className="text-sm leading-6 text-slate-400">
                    No views, likes, replies, pinned or resolved status,
                    timestamps, author, or social proof is claimed.
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <CircleSlash2 className="h-5 w-5 text-slate-500" />
                  <p className="text-sm leading-6 text-slate-400">
                    No post, reply, like, bookmark, notification, moderation, or
                    account operation is available locally.
                  </p>
                </div>
              </Card>
            </aside>
          </div>
        )}
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Local discussion
          catalog; no community mutation occurred.
        </div>
      </div>
    </div>
  );
}
