import { useMemo, useState } from "react";
import {
  Edit3,
  FolderKanban,
  LockKeyhole,
  MessageSquare,
  Plus,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type WorkspaceAccess = "All" | "Private" | "Shared" | "Review";
type WorkspaceState = "All" | "Draft" | "Review" | "Unavailable";

type CollaborationWorkspace = {
  id: string;
  title: string;
  access: Exclude<WorkspaceAccess, "All">;
  state: Exclude<WorkspaceState, "All">;
  summary: string;
  members: string;
  roles: string;
  permissions: string;
  comments: string;
  activity: string;
  sync: string;
};

const workspaces: CollaborationWorkspace[] = [
  {
    id: "editorial-workspace",
    title: "Editorial workspace",
    access: "Shared",
    state: "Review",
    summary:
      "A local workspace concept for drafting and reviewing educational content with least-privilege access.",
    members: "Member roster unavailable",
    roles: "Role assignments unavailable",
    permissions: "Permission state unavailable",
    comments: "Comment history unavailable",
    activity: "Activity feed unavailable",
    sync: "Sync state unavailable",
  },
  {
    id: "campaign-workspace",
    title: "Campaign workspace",
    access: "Private",
    state: "Draft",
    summary:
      "A draft workspace concept for channel planning pending verified collaborators, approval, and version controls.",
    members: "Member roster unavailable",
    roles: "Role assignments unavailable",
    permissions: "Permission state unavailable",
    comments: "Comment history unavailable",
    activity: "Activity feed unavailable",
    sync: "Sync state unavailable",
  },
  {
    id: "learning-workspace",
    title: "Learning workspace",
    access: "Review",
    state: "Unavailable",
    summary:
      "A local workspace concept for course material pending safeguarding, curriculum ownership, and access review.",
    members: "Member roster unavailable",
    roles: "Role assignments unavailable",
    permissions: "Permission state unavailable",
    comments: "Comment history unavailable",
    activity: "Activity feed unavailable",
    sync: "Sync state unavailable",
  },
];

const accessOptions: WorkspaceAccess[] = ["All", "Private", "Shared", "Review"];
const stateOptions: WorkspaceState[] = [
  "All",
  "Review",
  "Draft",
  "Unavailable",
];

export default function ContentCollaboration() {
  const [access, setAccess] = useState<WorkspaceAccess>("All");
  const [state, setState] = useState<WorkspaceState>("All");
  const [selectedId, setSelectedId] = useState(workspaces[0].id);
  const [status, setStatus] = useState(
    "Collaboration service unavailable. Showing local workspace concepts only."
  );

  const filtered = useMemo(
    () =>
      workspaces.filter(
        workspace =>
          (access === "All" || workspace.access === access) &&
          (state === "All" || workspace.state === state)
      ),
    [access, state]
  );
  const selected =
    filtered.find(workspace => workspace.id === selectedId) ??
    filtered[0] ??
    workspaces[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No collaborator, permission, comment, approval, content-sync, notification, or publication request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Users}
        title="Content collaboration"
        subtitle="Review local workspace concepts without fabricated collaborators, permissions, comments, activity, sync, or publication states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Collaboration service unavailable.</strong> No identity
            directory, workspace store, access-control service, comment feed,
            version store, sync channel, or notification service is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Collaboration service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset workspaces
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Workspace preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review collaboration concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show collaboration structure only.
                  They do not represent real people, permissions, comments,
                  approvals, synchronized content, or activity.
                </p>
              </div>
              <FolderKanban className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Workspace access filter"
            >
              {accessOptions.map(item => (
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
              aria-label="Workspace state filter"
            >
              {stateOptions.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(workspace => (
                <button
                  aria-pressed={selected.id === workspace.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === workspace.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={workspace.id}
                  onClick={() => setSelectedId(workspace.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{workspace.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {workspace.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {workspace.access}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {workspace.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local workspace fixtures match these filters.
                </p>
              )}
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
                Selected workspace
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.access} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Members", selected.members],
                  ["Roles", selected.roles],
                  ["Permissions", selected.permissions],
                  ["Comments", selected.comments],
                  ["Activity", selected.activity],
                  ["Sync", selected.sync],
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
                No collaborator identity, role, permission, comment, approval,
                activity, version, sync, or notification state is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Invite collaborator")}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" /> Invite unavailable
                </Button>
                <Button
                  onClick={() => blocked("Add comment")}
                  variant="outline"
                >
                  <MessageSquare className="mr-2 h-4 w-4" /> Comment unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish workspace")}
                  variant="outline"
                >
                  <Send className="mr-2 h-4 w-4" /> Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Collaboration requires verified identity, least-privilege
                  access, content versioning, conflict handling, privacy
                  controls, and reliable notifications.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Workspace, permission, comment, and publication transitions
                  must be auditable and isolated from fabricated activity.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Edit3 className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No editor, version conflict, approval, content sync, or
                  publication operation is available from this preview.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
