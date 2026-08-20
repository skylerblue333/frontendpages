import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  FileText,
  Filter,
  MessageSquare,
  Save,
  Search,
  Settings,
  Share2,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

type Area = "all" | "content" | "collaboration" | "storage";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<Area, "all">;
  icon: typeof FileText;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Document content and structure",
    description:
      "Typed content, autosave, validation, accessibility, formatting, and conflict-safe editing need a trusted document service.",
    area: "content",
    icon: FileText,
  },
  {
    title: "Collaborators and comments",
    description:
      "Verified collaborators, cursors, comments, mentions, notifications, and moderation need identity and realtime event contracts.",
    area: "collaboration",
    icon: Users,
  },
  {
    title: "Versions and recovery",
    description:
      "Version history, diffs, restore, deletion, retention, and recovery need durable storage and auditable permissions.",
    area: "storage",
    icon: Save,
  },
  {
    title: "Sharing and export",
    description:
      "Access grants, links, expiry, downloads, exports, and revocation need controlled storage and a permission ledger.",
    area: "collaboration",
    icon: Share2,
  },
];

export default function DocumentEditor() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<Area>("all");
  const [status, setStatus] = useState(
    "Document editor unavailable locally. No document, collaborator, comment, save, version, share, export, notification, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (area === "all" || item.area === area);
      }),
    [query, area]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No document, collaborator, comment, save, version, share, export, notification, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="document-editor-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge
            variant="outline"
            className="border-indigo-400/30 text-indigo-200"
          >
            EDITOR READINESS PREVIEW
          </Badge>
          <h1
            id="document-editor-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <BookOpen className="h-7 w-7 text-indigo-300" aria-hidden="true" />
            Document editor
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review collaborative-editor requirements without inventing document
            content, collaborators, comments, autosave, versions, sharing,
            exports, or saved work.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Document editor unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No document store, editor session, identity provider, realtime
                collaboration service, version history, export provider, or
                notification service is connected. This page contains planning
                requirements only.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <FileText
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Content unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No document body, title, format, autosave, or edit state is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Users
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Collaboration unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No user, cursor, comment, mention, presence, or notification is
              active.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Save className="mb-3 h-5 w-5 text-amber-300" aria-hidden="true" />
            <p className="text-lg font-semibold">Versions unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No save, version, diff, restore, retention, or recovery state
              exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Share2
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Sharing unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No permission, link, export, download, revocation, or access
              record is authoritative.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Editor requirement filters"
        >
          <label htmlFor="editor-search" className="sr-only">
            Search editor requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="editor-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search editor requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "content", "collaboration", "storage"] as const).map(
            value => (
              <Button
                key={value}
                type="button"
                variant={area === value ? "default" : "outline"}
                onClick={() => setArea(value)}
              >
                <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
                {value === "all"
                  ? "All"
                  : value[0].toUpperCase() + value.slice(1)}
              </Button>
            )
          )}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Editor settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="requirements-title" className="text-xl font-semibold">
                Editor requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is authored, edited, saved, shared,
                exported, or persisted.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Document creation")}
            >
              <FileText className="mr-2 h-4 w-4" aria-hidden="true" />
              New document unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.area}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} workflow`)
                        }
                      >
                        Manage unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {requirements.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No editor requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query document or collaborator
                  records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/30 p-5">
            <FileText
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Edit unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No document content, cursor, autosave, or conflict state can be
              changed.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Document editing")}
            >
              Edit unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <MessageSquare
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Comment unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No comment, mention, notification, or moderation event can be
              created.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Commenting")}
            >
              Comment unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Share2 className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Share unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No collaborator, permission, link, invitation, or access grant can
              be saved.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Document sharing")}
            >
              Share unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <CheckCircle2
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Export unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No document, version, PDF, download, or audit package can be
              generated.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Document export")}
            >
              Export unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No collaboration claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production editor needs authenticated content, conflict-safe
                writes, permissions, realtime events, version history,
                retention, export controls, notifications, audit history, and
                recovery.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
