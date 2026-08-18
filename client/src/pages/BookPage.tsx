import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  CircleSlash2,
  Crown,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type ChapterState = "Preview" | "Unavailable";
type Chapter = {
  number: number;
  title: string;
  teaser: string;
  state: ChapterState;
};
const chapters: Chapter[] = [
  {
    number: 1,
    title: "The beginning",
    teaser:
      "Editorial preview text is available locally; publication status is not connected.",
    state: "Preview",
  },
  {
    number: 2,
    title: "The blueprint",
    teaser:
      "Editorial preview text is available locally; publication status is not connected.",
    state: "Preview",
  },
  {
    number: 3,
    title: "The build",
    teaser:
      "Editorial preview text is available locally; publication status is not connected.",
    state: "Preview",
  },
  {
    number: 4,
    title: "The signal",
    teaser: "Full chapter access is unavailable from this preview.",
    state: "Unavailable",
  },
  {
    number: 5,
    title: "The network",
    teaser: "Full chapter access is unavailable from this preview.",
    state: "Unavailable",
  },
  {
    number: 6,
    title: "The horizon",
    teaser: "Full chapter access is unavailable from this preview.",
    state: "Unavailable",
  },
  {
    number: 7,
    title: "The next page",
    teaser: "Full chapter access is unavailable from this preview.",
    state: "Unavailable",
  },
];
export default function BookPage() {
  const [status, setStatus] = useState(
    "Publication service unavailable. Showing local editorial preview only."
  );
  const [selected, setSelected] = useState(chapters[0]);
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No email was collected, stored, transmitted, subscribed, purchased, or added to a waitlist.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BookOpen}
        title="The Chosen One"
        subtitle="A local editorial preview of a proposed SKYCOIN4444 publication without fabricated publication, preorder, endorsement, email, payment, or token claims."
        badge="Editorial preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-950/70 to-slate-950 p-6">
            <div className="mx-auto flex h-64 w-44 items-center justify-center rounded-lg border border-purple-400/30 bg-gradient-to-br from-purple-900 via-fuchsia-950 to-black shadow-2xl shadow-purple-900/30">
              <div className="text-center">
                <Crown className="mx-auto mb-3 h-9 w-9 text-yellow-300" />
                <p className="text-xs font-bold uppercase tracking-widest text-purple-300">
                  The
                </p>
                <p className="text-2xl font-black text-white">Chosen</p>
                <p className="text-2xl font-black text-white">One</p>
                <p className="mt-3 text-[10px] text-purple-300">SKYCOIN4444</p>
              </div>
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <Badge variant="outline">Status unavailable</Badge>
            <h2 className="mt-4 text-3xl font-bold">
              A proposed manifesto and blueprint
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              This screen preserves the editorial concept while avoiding
              unsupported claims about publication, sales, readers,
              translations, endorsements, airdrops, or access. A connected
              catalog and publication service are not available.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {(
                [
                  ["Chapters", "Unavailable"],
                  ["Languages", "Unavailable"],
                  ["Preorders", "Unavailable"],
                ] as Array<[string, string]>
              ).map(([label, value]) => (
                <div
                  className="rounded-xl border border-slate-800 p-4"
                  key={label}
                >
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-purple-300" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Editorial outline
                </p>
                <h2 className="mt-1 text-2xl font-semibold">Chapter preview</h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Select a chapter to review local teaser content. Full manuscript
              access and publication metadata are unavailable.
            </p>
            <div className="mt-6 space-y-2">
              {chapters.map(chapter => (
                <button
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left ${selected.number === chapter.number ? "border-purple-400/35 bg-purple-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={chapter.number}
                  onClick={() => setSelected(chapter)}
                  type="button"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-purple-400/20 bg-purple-500/10 text-sm font-bold text-purple-200">
                    {chapter.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{chapter.title}</span>
                    <span className="mt-1 block truncate text-sm text-slate-400">
                      {chapter.teaser}
                    </span>
                  </span>
                  <Badge
                    variant={
                      chapter.state === "Preview" ? "secondary" : "outline"
                    }
                  >
                    {chapter.state}
                  </Badge>
                </button>
              ))}
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected chapter
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <div className="mt-5 rounded-xl border border-slate-800 p-4">
                <p className="text-sm leading-6 text-slate-400">
                  {selected.teaser}
                </p>
              </div>
              <Button
                className="mt-5 w-full"
                onClick={() => blocked("Open full chapter")}
                variant="outline"
              >
                <LockKeyhole className="mr-2 h-4 w-4" /> Full chapter
                unavailable
              </Button>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No publication, payment, preorder, email, reader, endorsement,
                  translation, or token service is connected.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No reader count, sales volume, airdrop, waitlist, or marketing
                  outcome is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-cyan-200" />
            <div>
              <h2 className="font-semibold">Publication notification</h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                A notification service is not connected. This local preview does
                not accept or retain an email address.
              </p>
              <Button
                className="mt-4"
                onClick={() => blocked("Request publication notification")}
                variant="outline"
              >
                <Star className="mr-2 h-4 w-4" /> Notification unavailable
              </Button>
            </div>
          </div>
          <p
            aria-live="polite"
            className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
          >
            {status}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Local-only
            state; no outbound request was made.
          </div>
        </Card>
      </div>
    </div>
  );
}
