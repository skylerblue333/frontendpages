import { useMemo, useState } from "react";
import {
  FileWarning,
  FolderPen,
  ImageOff,
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
    title: "Instructor authorization and ownership",
    area: "Access",
    description:
      "No authenticated instructor, institution, course owner, role, workspace, learner audience, or authoring permission is connected.",
  },
  {
    title: "Lesson content and versioning",
    area: "Content",
    description:
      "No lesson title, objectives, body, assessment, prerequisite, draft, revision, source, or approved version is loaded.",
  },
  {
    title: "Media and accessibility",
    area: "Experience",
    description:
      "No image, video, attachment, caption, transcript, alt text, keyboard path, reading order, or accessibility review is verified.",
  },
  {
    title: "Moderation and publication",
    area: "Governance",
    description:
      "No content review, safety check, release approval, learner visibility, rollback, or publication status exists.",
  },
  {
    title: "Storage and operational recovery",
    area: "Operations",
    description:
      "No upload store, checksum, malware scan, persistence, audit event, notification, conflict handling, or recovery evidence exists.",
  },
];
export default function LessonEditor() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LessonEditor is unavailable locally. No instructor, lesson, media asset, version, publication, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No lesson, media upload, draft, review, publication, learner access, or education mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="lesson-editor-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FolderPen className="size-3.5" aria-hidden="true" />{" "}
                  Lesson-authoring readiness
                </Badge>
                <Badge variant="secondary">No authoring service</Badge>
              </div>
              <h1
                id="lesson-editor-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Lesson Editor readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the instructor, content, media, accessibility,
                moderation, publication, and storage contracts required for
                reliable lesson authoring without implying that lesson content,
                uploads, drafts, or learner-visible releases exist.
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
                Authoring service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No instructor authorization, lesson repository, media storage,
                accessibility workflow, content moderation, publication
                pipeline, or persistence layer is connected. This is a readiness
                workspace, not a lesson authoring or publishing console.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FolderPen
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No lesson drafts</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No instructor, course owner, lesson, objective, body,
                assessment, prerequisite, draft, or version record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ImageOff
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No media assets</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No image, video, attachment, caption, transcript, alt text,
                checksum, or upload state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No authoring actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No draft, upload, save, review, publish, rollback, learner
                access, or education mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Lesson-authoring governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads lesson content, uploads media, saves a draft, submits
              review, publishes a release, or changes learner visibility.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Lesson Editor readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter lesson-authoring requirements"
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
                  No lesson-authoring notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <UploadCloud
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production lesson editor needs authenticated instructor
                ownership, versioned content, secure media uploads, malware and
                file controls, accessible captions and transcripts, moderation
                and approval, learner visibility, auditability, conflict
                handling, rollback, and tested recovery. No lesson, media,
                draft, or publication state is claimed here.
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
