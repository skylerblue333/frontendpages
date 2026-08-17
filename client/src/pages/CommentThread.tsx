import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Flag,
  LockKeyhole,
  MessageSquare,
  Pin,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Thread = {
  id: string;
  title: string;
  topic: string;
  state: State;
  description: string;
  author: string;
  timestamp: string;
  message: string;
  replies: string;
  moderation: string;
};
const threads: Thread[] = [
  {
    id: "release",
    title: "Release discussion",
    topic: "Platform",
    state: "Review",
    description:
      "A local discussion concept pending verified authorship, content provenance, and moderation controls.",
    author: "Author unavailable",
    timestamp: "Timestamp unavailable",
    message: "Message unavailable",
    replies: "Replies unavailable",
    moderation: "Moderation unavailable",
  },
  {
    id: "course",
    title: "Course question",
    topic: "Education",
    state: "Planned",
    description:
      "An education thread concept requiring learner identity, consent, and notification authorization.",
    author: "Author unavailable",
    timestamp: "Timestamp unavailable",
    message: "Message unavailable",
    replies: "Replies unavailable",
    moderation: "Moderation unavailable",
  },
  {
    id: "community",
    title: "Community feedback",
    topic: "Community",
    state: "Unavailable",
    description:
      "A restricted thread concept requiring abuse prevention and auditable moderation decisions.",
    author: "Author unavailable",
    timestamp: "Timestamp unavailable",
    message: "Message unavailable",
    replies: "Replies unavailable",
    moderation: "Moderation unavailable",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
export default function CommentThread() {
  const [topic, setTopic] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(threads[0].id);
  const [status, setStatus] = useState(
    "Comment thread unavailable. Showing local fixtures only."
  );
  const topics = [
    "All",
    ...Array.from(new Set(threads.map(thread => thread.topic))),
  ];
  const filtered = useMemo(
    () =>
      threads.filter(
        thread =>
          (topic === "All" || thread.topic === topic) &&
          (state === "All" || thread.state === state)
      ),
    [topic, state]
  );
  const selected =
    threads.find(thread => thread.id === selectedId) ?? threads[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No author, timestamp, message, reply, moderation, notification, or social request was started.`
    );
  const reset = () => {
    setTopic("All");
    setState("All");
    setSelectedId(threads[0].id);
    setStatus(
      "Thread preview reset locally. No message, reply, moderation, notification, or social state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-400/10 text-rose-200">
              <MessageSquare aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Comment thread
                </h1>
                <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2 py-1 text-xs text-rose-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review discussion concepts without fabricated authors,
                timestamps, messages, replies, moderation, notifications, or
                social outcomes.
              </p>
            </div>
          </div>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset preview
          </Button>
        </header>
        <section
          className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-sm text-slate-300"
          role="note"
        >
          <strong className="text-amber-100">
            Comment thread unavailable.
          </strong>{" "}
          No verified discussion source, identity service, moderation system, or
          notification delivery is connected. These are local fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Thread topic filter"
            >
              {topics.map(item => (
                <Button
                  aria-pressed={topic === item}
                  key={item}
                  onClick={() => setTopic(item)}
                  size="sm"
                  variant={topic === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Thread state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant="outline"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(thread => (
                <button
                  aria-pressed={selectedId === thread.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === thread.id ? "border-rose-400/35 bg-rose-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={thread.id}
                  onClick={() => setSelectedId(thread.id)}
                  type="button"
                >
                  <p className="font-medium">{thread.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {thread.topic} · {thread.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {thread.description}
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
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected thread
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-rose-200">
                {selected.topic} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Author", selected.author],
                  ["Timestamp", selected.timestamp],
                  ["Message", selected.message],
                  ["Replies", selected.replies],
                  ["Moderation", selected.moderation],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No message, reply, moderation outcome, notification, or social
                state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Reply")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Reply unavailable
                </Button>
                <Button onClick={() => blocked("Report")} variant="outline">
                  <Flag className="mr-2 h-4 w-4" />
                  Report unavailable
                </Button>
                <Button onClick={() => blocked("Pin")} variant="outline">
                  <Pin className="mr-2 h-4 w-4" />
                  Pin unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No author, timestamp, message, reply, moderation,
                  notification, or social operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production discussions require verified identity, abuse
                  controls, moderation audit trails, notification authorization,
                  and clear delivery states.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
