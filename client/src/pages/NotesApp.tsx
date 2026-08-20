import { useMemo, useState } from "react";
import {
  Archive,
  FileSearch,
  Info,
  LockKeyhole,
  NotebookPen,
  Search,
  ShieldCheck,
  Tag,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Note ownership and provenance",
    area: "Integrity",
    description:
      "No note, author, workspace, source, created-at timestamp, updated-at timestamp, revision, or synchronization state is connected.",
  },
  {
    title: "Content privacy and access",
    area: "Privacy",
    description:
      "No visibility, collaborator, permission, sensitive-content rule, encryption, retention, export, deletion, or recovery control is available.",
  },
  {
    title: "Organization and retrieval",
    area: "Product",
    description:
      "No notebook, folder, tag, pin, archive, search index, attachment, reminder, link, filter, or sort state is loaded.",
  },
  {
    title: "Editing and conflict safety",
    area: "Reliability",
    description:
      "No draft, autosave, revision history, conflict resolution, offline queue, duplicate guard, or restore workflow exists.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No create, edit, delete, archive, share, export, import, reminder, or note-content mutation is connected or persisted.",
  },
];
export default function NotesApp() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Note storage is unavailable locally. No notes, notebooks, attachments, reminders, or personal content were loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No note, notebook, attachment, reminder, privacy, or personal-content mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="notes-app-title"
    >
      <div data-ui-polish="batch-197" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <NotebookPen className="size-3.5" aria-hidden="true" />{" "}
                  Personal-notes readiness workspace
                </Badge>
                <Badge variant="secondary">No note data</Badge>
              </div>
              <h1
                id="notes-app-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                NotesApp readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review note ownership, privacy, organization, retrieval, editing
                safety, persistence, and recovery boundaries without implying
                that personal notes, notebooks, attachments, reminders, or
                content exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Note storage is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No notes database, local persistence layer, synchronization
                service, attachment store, search index, permission model, or
                recovery workflow is connected. This workspace cannot create,
                edit, save, search, share, export, import, or claim personal
                content.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <NotebookPen
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No notes</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No note, author, workspace, notebook, revision, attachment,
                reminder, or personal content is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Tag className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No organization</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No folder, tag, pin, archive, search index, filter, sort, link,
                or retrieval state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No note actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No create, edit, delete, archive, share, export, import,
                reminder, or content mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Note-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              connects storage, loads personal content, searches notes, or saves
              records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search NotesApp readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter note requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No note requirements match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production notes functionality requires clear ownership and
                provenance, privacy and access controls, safe content handling,
                duplicate-safe persistence, revisions and conflict recovery,
                attachment security, searchable indexing, export and deletion
                controls, and explicit user feedback for every mutation. No
                note, notebook, attachment, reminder, or personal record is
                claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <Archive
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
