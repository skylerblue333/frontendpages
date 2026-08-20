import { useMemo, useState } from "react";
import {
  Archive,
  CheckCircle2,
  FolderOpen,
  Search,
  ShieldCheck,
  UploadCloud,
  UsersRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type FileBoundary = { title: string; area: string; description: string };
const boundaries: readonly FileBoundary[] = [
  {
    title: "Files and folders",
    area: "Storage",
    description:
      "No file, folder, name, size, mime type, preview, version, owner, or storage location is loaded.",
  },
  {
    title: "Access and sharing",
    area: "Permissions",
    description:
      "No authenticated subject, tenant scope, role, ACL, share link, recipient, expiry, or access log is available.",
  },
  {
    title: "Upload and download",
    area: "Transfer",
    description:
      "No upload session, checksum, malware scan, download URL, transfer progress, retry, or completion state is connected.",
  },
  {
    title: "Mutation and retention",
    area: "Governance",
    description:
      "No create, rename, move, delete, restore, retention, versioning, export, or audit workflow is configured.",
  },
];

export default function FileBrowser() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "File browser is unavailable locally. No file, folder, permission, upload, download, or storage mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No file, folder, permission, upload, download, or storage mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="file-browser-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FolderOpen className="size-3.5" aria-hidden="true" />
                  File storage readiness
                </Badge>
                <Badge variant="secondary">No storage service</Badge>
              </div>
              <h1
                id="file-browser-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                File browser readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful storage, access, transfer, mutation, retention,
                and audit contracts without presenting invented files or
                changing a storage account.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                File storage service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No storage provider, account scope, permission model,
                upload/download channel, malware scan, retention worker, or
                audit log is connected. This is a planning boundary, not a file
                manager.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="File browser status"
        >
          <Card>
            <CardContent className="p-5">
              <Archive
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No files loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No files, folders, metadata, previews, versions, owners, or
                storage locations are presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No access scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No subject, tenant, role, ACL, share link, recipient, expiry, or
                access log is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UploadCloud
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No transfers</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No upload, checksum, scan, download URL, progress, retry, or
                completion state can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>File browser readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects files,
              folders, users, permissions, storage, or transfer state.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search file browser readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search storage requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No storage notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production file browser needs authenticated scoping,
                least-privilege permissions, object identity, secure
                upload/download URLs, content-type and size validation, malware
                scanning, checksums, resumable transfers, retention and restore
                semantics, audit logging, and safe error handling.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
