import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Eye,
  FileImage,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  ZoomIn,
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

type PreviewBoundary = { title: string; area: string; description: string };
const boundaries: readonly PreviewBoundary[] = [
  {
    title: "Artifact and content",
    area: "Input",
    description:
      "No file, object identity, mime type, size, version, text, image, media, metadata, or content is loaded.",
  },
  {
    title: "Rendering and safety",
    area: "Processing",
    description:
      "No renderer, parser, sandbox, thumbnail, malware scan, content policy, resource limit, or rendering error state is configured.",
  },
  {
    title: "Access and interaction",
    area: "Experience",
    description:
      "No authorization, signed URL, zoom, pagination, keyboard navigation, selection, annotation, or focus model is available.",
  },
  {
    title: "Delivery and privacy",
    area: "Controls",
    description:
      "No download, share, cache, retention, redaction, audit, deletion, or privacy boundary is connected.",
  },
];

export default function FilePreview() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "File preview is unavailable locally. No artifact, content, renderer, access, or download mutation was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No artifact, content, renderer, access, or download mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="file-preview-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Eye className="size-3.5" aria-hidden="true" />
                  Content preview readiness
                </Badge>
                <Badge variant="secondary">No preview service</Badge>
              </div>
              <h1
                id="file-preview-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                File preview readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review truthful content, rendering, security, access,
                interaction, delivery, and privacy contracts without opening an
                artifact or claiming that a preview is available.
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
                File preview service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No artifact source, authorization layer, signed URL, renderer,
                sandbox, content policy, thumbnail service, or privacy boundary
                is connected. This is a planning boundary, not a preview viewer.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="File preview status"
        >
          <Card>
            <CardContent className="p-5">
              <FileImage
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No artifact loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No file, object, mime type, size, version, text, image, media,
                metadata, or content is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No renderer connected</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No parser, sandbox, thumbnail, malware scan, content policy,
                resource limit, or rendering error state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ZoomIn className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No preview controls</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No access, zoom, pagination, keyboard navigation, selection,
                annotation, focus, share, or download action can run.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>File preview readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              artifacts, content, renderers, permissions, or preview storage.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search file preview readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search preview requirements"
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
                  No preview notes match “{query}”.
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
                A production preview service needs authorized artifact access,
                safe parsing and sandboxing, format support, malware and content
                scanning, memory and time limits, accessible controls, keyboard
                focus, privacy-aware caching, redaction, audit logging, and
                correct download/share boundaries.
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
