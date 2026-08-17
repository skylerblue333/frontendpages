import { useState } from "react";
import {
  BookOpen,
  CircleSlash2,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
type Policy = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
};
const policies: Policy[] = [
  {
    id: "respect",
    title: "Respectful participation",
    category: "Conduct",
    status: "Review",
    description:
      "Local policy concept pending authoritative source, review owner, and moderation workflow.",
  },
  {
    id: "safety",
    title: "Safety and privacy",
    category: "Safety",
    status: "Planned",
    description:
      "Policy concept requiring jurisdictional context, privacy review, and publication control.",
  },
  {
    id: "content",
    title: "Content boundaries",
    category: "Moderation",
    status: "Unavailable",
    description:
      "Restricted policy concept with no verified moderation decision or legal interpretation.",
  },
];
export default function CommunityGuidelines() {
  const [c, setC] = useState("All"),
    [s, setS] = useState("All"),
    [p, setP] = useState(policies[0]),
    [m, setM] = useState(
      "Guidelines unavailable. Showing local fixtures only."
    );
  const cats = ["All", ...new Set(policies.map(x => x.category))],
    sts = ["All", "Review", "Planned", "Unavailable"],
    block = (a: string) =>
      setM(
        `${a} is unavailable locally. No source, authority, enforcement, moderation, legal, notification, or publication request was started.`
      ),
    reset = () => {
      setC("All");
      setS("All");
      setP(policies[0]);
      setM(
        "Guideline preview reset locally. No policy or publication state changed."
      );
    };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex justify-between border-b border-slate-800 pb-8">
          <div className="flex gap-4">
            <BookOpen className="h-12 w-12 rounded-xl border border-amber-400/25 bg-amber-400/10 p-3 text-amber-200" />
            <div>
              <h1 className="text-3xl font-bold">Community guidelines</h1>
              <p className="mt-2 text-sm text-slate-400">
                Review local policy concepts without fabricated authority or
                enforcement.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </header>
        <section className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[.07] p-4 text-sm">
          <strong className="text-amber-100">Guidelines unavailable.</strong> No
          authoritative source, version registry, moderation system, or
          publication service is connected.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex flex-wrap gap-2">
              {cats.map(x => (
                <Button
                  aria-pressed={c === x}
                  key={x}
                  onClick={() => setC(x)}
                  size="sm"
                  variant={c === x ? "default" : "outline"}
                >
                  {x}
                </Button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {sts.map(x => (
                <Button
                  aria-pressed={s === x}
                  key={x}
                  onClick={() => setS(x)}
                  size="sm"
                  variant="outline"
                >
                  {x}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {policies
                .filter(
                  x =>
                    (c === "All" || x.category === c) &&
                    (s === "All" || x.status === s)
                )
                .map(x => (
                  <button
                    aria-pressed={p.id === x.id}
                    className={`w-full rounded-xl border p-5 text-left ${p.id === x.id ? "border-amber-400/35 bg-amber-400/10" : "border-slate-800"}`}
                    key={x.id}
                    onClick={() => setP(x)}
                    type="button"
                  >
                    <p className="font-medium">{x.title}</p>
                    <p className="text-xs text-slate-500">
                      {x.category} · {x.status}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {x.description}
                    </p>
                  </button>
                ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {m}
              </p>
            </div>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <div className="mt-5 grid gap-2">
              {[
                "Source unavailable",
                "Version unavailable",
                "Authority unavailable",
                "Enforcement unavailable",
              ].map(x => (
                <div
                  className="rounded-lg border border-slate-800 p-3 text-sm"
                  key={x}
                >
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-2">
              {["Acknowledge", "Report", "Publish"].map(x => (
                <Button key={x} onClick={() => block(x)} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  {x} unavailable
                </Button>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-sm text-slate-400">
              <LockKeyhole className="h-5 w-5 text-cyan-200" />
              <span>
                No moderation, legal, notification, or publication operation is
                available.
              </span>
            </div>
            <div className="mt-4 flex gap-3 text-sm text-slate-400">
              <ShieldCheck className="h-5 w-5 text-emerald-200" />
              <span>
                Production policies require authority, version history,
                jurisdictional context, review ownership, and audit trails.
              </span>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
