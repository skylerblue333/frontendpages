import { useMemo, useState } from "react";
import {
  FileImage,
  FileWarning,
  FolderOpen,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  UploadCloud,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Asset ownership and provenance",
    area: "Evidence",
    description:
      "No image, video, audio, document, owner, source, license, checksum, timestamp, collection, or storage record is connected.",
  },
  {
    title: "Metadata, taxonomy, and search",
    area: "Organization",
    description:
      "No title, caption, alt text, tag, folder, category, query index, duplicate rule, or metadata editing policy is configured.",
  },
  {
    title: "Upload and delivery security",
    area: "Delivery",
    description:
      "No authorized upload, file type and size rule, malware scan, signed URL, thumbnail, transcoding, CDN, or delivery failure state is verified.",
  },
  {
    title: "Access, moderation, and privacy",
    area: "Safety",
    description:
      "No viewer role, collection boundary, sharing rule, sensitive-media review, report, redaction, retention, deletion, or access audit exists.",
  },
  {
    title: "Accessibility and lifecycle",
    area: "Governance",
    description:
      "No keyboard workflow, alt text, captions, reduced-motion behavior, version history, correction, export, incident, or recovery evidence is available.",
  },
];
export default function MediaGallery() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "MediaGallery is unavailable locally. No asset, collection, owner, metadata, upload, thumbnail, viewer, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No asset, collection, upload, metadata, folder, viewer, share, or media-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="media-gallery-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FolderOpen className="size-3.5" aria-hidden="true" />{" "}
                  Media-library readiness
                </Badge>
                <Badge variant="secondary">No media library</Badge>
              </div>
              <h1
                id="media-gallery-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MediaGallery readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review asset ownership, provenance, metadata, search, upload,
                delivery, access, moderation, privacy, and lifecycle contracts
                without implying that a gallery, asset, thumbnail, upload, or
                viewer state exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Media library is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No asset store, collection index, upload pipeline, metadata
                service, signed delivery layer, access policy, moderation
                workflow, or persistence layer is connected. This is a readiness
                workspace, not a populated gallery.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FileImage
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No gallery records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No asset, owner, source, license, checksum, timestamp, metadata,
                tag, folder, or collection is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UploadCloud
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No upload pipeline</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No upload, type check, scan, signed URL, thumbnail, transcoding,
                delivery, or viewer state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No gallery actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No upload, organize, edit, share, download, moderate, delete,
                export, or media-data mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Media-library governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads an asset, opens a gallery, uploads a file, edits metadata,
              creates a folder, shares a collection, or saves media data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search MediaGallery readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter media-library requirements"
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
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No media-library notes match “{query}”.
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
                A production media library needs asset ownership and licensing,
                metadata and taxonomy, secure upload and delivery, malware and
                file validation, access and sharing controls, moderation,
                privacy and retention, alt text and captions, versioning,
                auditability, and tested recovery. No asset, upload, collection,
                viewer, or media record is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
