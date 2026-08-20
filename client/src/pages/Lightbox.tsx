import { useMemo, useState } from "react";
import {
  Accessibility,
  Download,
  Eye,
  FileWarning,
  ImageOff,
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

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Asset provenance and ownership",
    area: "Trust",
    description:
      "No image, video, document, owner, source URL, license, collection, caption, or permission record is connected.",
  },
  {
    title: "Viewer and delivery state",
    area: "Experience",
    description:
      "No selected asset, thumbnail, delivery URL, responsive source, loading state, error state, or retry evidence is available.",
  },
  {
    title: "Access, download, and sharing",
    area: "Access",
    description:
      "No authenticated viewer, private asset rule, signed URL, download permission, share link, referrer control, or expiry policy is verified.",
  },
  {
    title: "Accessibility and privacy",
    area: "Governance",
    description:
      "No alt text, caption, keyboard focus order, reduced-motion behavior, screen-reader announcement, redaction, or sensitive-media policy is configured.",
  },
  {
    title: "Storage and operations",
    area: "Operations",
    description:
      "No media store, transformation, checksum, moderation scan, cache invalidation, audit event, retention, or recovery evidence exists.",
  },
];
export default function Lightbox() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Lightbox is unavailable locally. No media asset, viewer state, download, share link, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No media asset, viewer, download, share, privacy, or content mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="lightbox-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Eye className="size-3.5" aria-hidden="true" /> Media-viewer
                  readiness
                </Badge>
                <Badge variant="secondary">No media service</Badge>
              </div>
              <h1
                id="lightbox-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Lightbox readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the media provenance, delivery, access, download,
                sharing, privacy, and accessibility contracts required for a
                trustworthy viewer without implying that an image, video,
                document, or viewer session exists.
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
                No asset repository, delivery URL, thumbnail pipeline, signed
                access, download permission, moderation scan, accessibility
                metadata, or persistence layer is connected. This is a readiness
                workspace, not a media viewer.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <ImageOff
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No media assets</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No image, video, document, thumbnail, owner, source, license,
                caption, or selected asset is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Download
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No delivery or download</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No viewer URL, signed URL, download permission, share link,
                expiry, retry, or transformation is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No viewer actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No open, zoom, navigate, download, share, annotate, redact, or
                content mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Media-viewer governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads an asset, opens a viewer, requests a signed URL, downloads
              media, creates a share link, or saves a content mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Lightbox readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter media-viewer requirements"
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
                  No media-viewer notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <Accessibility
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production media viewer needs asset provenance and
                permissions, secure delivery and signed access, download and
                sharing policy, responsive media handling, captions and alt
                text, keyboard and screen-reader behavior, moderation and
                privacy controls, caching, auditability, retention, and tested
                recovery. No asset or viewer state is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <LockKeyhole
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
