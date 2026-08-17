import { useMemo, useState } from "react";
import {
  CircleSlash2,
  Code2,
  GitBranch,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type State = "Review" | "Planned" | "Unavailable";
type Repo = {
  id: string;
  title: string;
  visibility: string;
  state: State;
  description: string;
  owner: string;
  branch: string;
  commit: string;
  permission: string;
  source: string;
};
const repos: Repo[] = [
  {
    id: "platform",
    title: "Ecosystem platform",
    visibility: "Private",
    state: "Review",
    description:
      "A local repository concept pending verified provider authentication and source provenance.",
    owner: "Owner unavailable",
    branch: "Branch unavailable",
    commit: "Commit unavailable",
    permission: "Permission unavailable",
    source: "Source unavailable",
  },
  {
    id: "school",
    title: "SkySchool curriculum",
    visibility: "Restricted",
    state: "Planned",
    description:
      "An education repository concept requiring course authorization and secret scanning.",
    owner: "Owner unavailable",
    branch: "Branch unavailable",
    commit: "Commit unavailable",
    permission: "Permission unavailable",
    source: "Source unavailable",
  },
  {
    id: "community",
    title: "Community tools",
    visibility: "Unavailable",
    state: "Unavailable",
    description:
      "A restricted repository concept requiring provider connection and deployment controls.",
    owner: "Owner unavailable",
    branch: "Branch unavailable",
    commit: "Commit unavailable",
    permission: "Permission unavailable",
    source: "Source unavailable",
  },
];
const states: Array<"All" | State> = [
  "All",
  "Review",
  "Planned",
  "Unavailable",
];
const visibility = [
  "All",
  ...Array.from(new Set(repos.map(repo => repo.visibility))),
];
export default function CodeRepository() {
  const [access, setAccess] = useState("All");
  const [state, setState] = useState<(typeof states)[number]>("All");
  const [selectedId, setSelectedId] = useState(repos[0].id);
  const [status, setStatus] = useState(
    "Code repository unavailable. Showing local repository fixtures only."
  );
  const filtered = useMemo(
    () =>
      repos.filter(
        repo =>
          (access === "All" || repo.visibility === access) &&
          (state === "All" || repo.state === state)
      ),
    [access, state]
  );
  const selected = repos.find(repo => repo.id === selectedId) ?? repos[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No provider, repository, source, branch, commit, clone, permission, or deployment request was started.`
    );
  const reset = () => {
    setAccess("All");
    setState("All");
    setSelectedId(repos[0].id);
    setStatus(
      "Repository preview reset locally. No repository, source, clone, permission, or deployment state changed."
    );
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-slate-800 pb-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-violet-200">
              <Code2 aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold sm:text-3xl">
                  Code repository
                </h1>
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2 py-1 text-xs text-violet-200">
                  Local preview
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                Review repository concepts without fabricated owners, branches,
                commits, permissions, source, clones, or deployments.
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
          <strong className="text-amber-100">Repository unavailable.</strong> No
          verified provider authentication, repository source, permission scope,
          or deployment connection is available. These are local fixtures.
        </section>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Repository visibility filter"
            >
              {visibility.map(item => (
                <Button
                  aria-pressed={access === item}
                  key={item}
                  onClick={() => setAccess(item)}
                  size="sm"
                  variant={access === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Repository state filter"
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
              {filtered.map(repo => (
                <button
                  aria-pressed={selectedId === repo.id}
                  className={`w-full rounded-xl border p-5 text-left ${selectedId === repo.id ? "border-violet-400/35 bg-violet-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={repo.id}
                  onClick={() => setSelectedId(repo.id)}
                  type="button"
                >
                  <p className="font-medium">{repo.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {repo.visibility} · {repo.state}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {repo.description}
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
                Selected repository
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-violet-200">
                {selected.visibility} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  ["Owner", selected.owner],
                  ["Branch", selected.branch],
                  ["Commit", selected.commit],
                  ["Permission", selected.permission],
                  ["Source", selected.source],
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
                No repository source, commit provenance, permission, clone, or
                deployment state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button onClick={() => blocked("Open")} variant="outline">
                  <GitBranch className="mr-2 h-4 w-4" />
                  Open unavailable
                </Button>
                <Button onClick={() => blocked("Clone")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Clone unavailable
                </Button>
                <Button onClick={() => blocked("Deploy")} variant="outline">
                  <CircleSlash2 className="mr-2 h-4 w-4" />
                  Deploy unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No provider, repository, source, branch, commit, clone,
                  permission, or deployment operation is available.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Production repository access requires verified authentication,
                  least privilege, provenance, secret scanning, safe cloning,
                  and explicit deployment controls.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
