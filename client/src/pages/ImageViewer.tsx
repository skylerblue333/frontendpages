import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Eye,
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
    title: "Asset source and preview",
    area: "Assets",
    description:
      "No image, video, thumbnail, source URL, signed asset, metadata, loading state, or preview record is connected.",
  },
  {
    title: "Access and ownership",
    area: "Privacy",
    description:
      "No identity, ownership, audience, consent, permission, expiry, download, share, or deletion scope is loaded.",
  },
  {
    title: "Rendering and transformations",
    area: "Presentation",
    description:
      "No decoder, format support, zoom, rotate, pan, crop, annotation, derivative, or accessibility description is available.",
  },
  {
    title: "Safety and content policy",
    area: "Governance",
    description:
      "No sensitive-content, copyright, malware, moderation, redaction, or abuse-report workflow exists.",
  },
  {
    title: "Reliability and recovery",
    area: "Operations",
    description:
      "No progressive loading, retry, cache, quota, error, offline, backup, restore, or support contract is configured.",
  },
];
export default function ImageViewer() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Image Viewer is unavailable locally. No asset, preview, ownership, download, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No asset, preview, annotation, download, share, or mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="image-viewer-title"
    >
      <div data-ui-polish="batch-192" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Eye className="size-3.5" aria-hidden="true" /> Media-viewer
                  readiness
                </Badge>
                <Badge variant="secondary">No viewer service</Badge>
              </div>
              <h1
                id="image-viewer-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Image Viewer readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review asset, access, rendering, safety, and recovery contracts
                required for a trustworthy viewer without implying that images,
                previews, annotations, or downloads exist.
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
                Viewer service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No asset source, signed access path, decoding or preview
                pipeline, content policy, or persistence layer is connected.
                This is a readiness workspace, not a media viewer.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Eye className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No asset records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No image, video, thumbnail, source URL, metadata, loading state,
                or preview is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No access scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identity, ownership, audience, consent, permission, expiry,
                download, or share scope is available.
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
                No zoom, annotation, crop, download, share, rotate, or external
                mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Media-viewer governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never reads
              an asset, generates a preview, opens a signed URL, annotates
              content, or saves a viewer action.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Image Viewer readiness notes"
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
                  No viewer notes match “{query}”.
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
                A production viewer needs asset and signed-access contracts,
                format and rendering support, privacy and ownership controls,
                content safety, accessibility descriptions, progressive loading,
                zoom and navigation, caching, quotas, retry, backup, restore,
                observability, and tested recovery. No viewer is claimed here.
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
