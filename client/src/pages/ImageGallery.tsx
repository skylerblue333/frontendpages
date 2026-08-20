import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileImage,
  FileWarning,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Media source and storage",
    area: "Assets",
    description:
      "No image, video, upload, storage bucket, metadata, thumbnail, checksum, or source provenance record is connected.",
  },
  {
    title: "Access and sharing",
    area: "Privacy",
    description:
      "No identity, ownership, audience, consent, signed URL, download, share, export, or deletion scope is loaded.",
  },
  {
    title: "Search and organization",
    area: "Discovery",
    description:
      "No media index, folder, tag, caption, OCR, duplicate detection, sort, filter, or freshness signal is evaluated.",
  },
  {
    title: "Transformation and moderation",
    area: "Safety",
    description:
      "No resize, edit, derivative, moderation, copyright, sensitive-content, malware, or policy workflow exists.",
  },
  {
    title: "Reliability and recovery",
    area: "Operations",
    description:
      "No upload progress, retry, quota, virus scan, backup, restore, incident, or support contract is available.",
  },
];
export default function ImageGallery() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Image Gallery is unavailable locally. No media, storage record, ownership, preview, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No media, upload, preview, share, export, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="image-gallery-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileImage className="size-3.5" aria-hidden="true" />{" "}
                  Media-library readiness
                </Badge>
                <Badge variant="secondary">No media service</Badge>
              </div>
              <h1
                id="image-gallery-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Image Gallery readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review media-source, storage, privacy, discovery,
                transformation, moderation, and recovery contracts required for
                a trustworthy gallery without implying that images, uploads, or
                shares exist.
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
                Media service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No media catalog, upload path, storage boundary, identity scope,
                preview pipeline, moderation process, or persistence layer is
                connected. This is a readiness workspace, not a gallery or media
                repository.
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
              <h2 className="font-semibold">No media records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No image, upload, source, preview, metadata, thumbnail, or
                storage record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No ownership scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, audience, consent, signed URL, download, share,
                export, or deletion scope is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No media actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No upload, edit, derivative, moderation, share, export, or
                restore action exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Media-library governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              uploads media, reads storage, generates previews, shares a file,
              or saves a gallery action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Image Gallery readiness notes"
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
                  No media notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production gallery needs storage and upload contracts,
                ownership and audience controls, signed access, metadata and
                indexing, moderation and copyright handling, malware scanning,
                quotas, progress and retry, backup, restore, observability, and
                tested recovery. No media library is claimed here.
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
