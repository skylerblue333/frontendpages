import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileText,
  ImageOff,
  Info,
  LockKeyhole,
  Plus,
  Send,
  Trash2,
  VideoOff,
  XCircle,
} from "lucide-react";

type ContentType = "text" | "image" | "video";
type SampleStatus = "sample scheduled" | "sample published" | "local draft";

type SamplePost = {
  id: string;
  body: string;
  type: ContentType;
  platforms: readonly string[];
  status: SampleStatus;
  timing: string;
};

const SAMPLE_POSTS: readonly SamplePost[] = [
  {
    id: "sample-1",
    body: "Local sample announcement for layout review.",
    type: "text",
    platforms: ["Platform preview"],
    status: "sample scheduled",
    timing: "Timing unavailable",
  },
  {
    id: "sample-2",
    body: "Media post preview; no asset is uploaded or published.",
    type: "image",
    platforms: ["Platform preview"],
    status: "sample published",
    timing: "Publication unavailable",
  },
  {
    id: "sample-3",
    body: "Draft content remains an example and is not connected to a creator account.",
    type: "video",
    platforms: ["Platform preview"],
    status: "local draft",
    timing: "No schedule stored",
  },
];

const CONTENT_TYPES: readonly ContentType[] = ["text", "image", "video"];

export default function ContentScheduler() {
  const [activeView, setActiveView] = useState<
    "queue" | "create" | "analytics"
  >("queue");
  const [content, setContent] = useState("");
  const [selectedType, setSelectedType] = useState<ContentType>("text");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState(
    "Publishing service unavailable locally. No schedule, post, analytics, media, or account mutation was started."
  );

  const draftCount = useMemo(() => (content.trim() ? 1 : 0), [content]);
  const announceUnavailable = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No post, job, platform, analytics, media, notification, or account mutation was started.`
    );
  };

  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="content-scheduler-title"
    >
      <header className="sticky top-0 z-10 border-b border-border/30 bg-background/95 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3">
          <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <h1 id="content-scheduler-title" className="text-lg font-bold">
              Content Scheduler
            </h1>
            <p className="text-xs text-muted-foreground">
              Local planning preview · publishing unavailable
            </p>
          </div>
          <Badge
            variant="outline"
            className="border-amber-400/30 text-amber-200"
          >
            No jobs connected
          </Badge>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-4 py-6">
        <section
          className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Publishing unavailable notice"
        >
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Publishing integrations unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No verified social platform connection, creator identity, media
                storage, scheduler, notification service, or analytics event
                source is connected. All items below are local layout samples.
              </p>
            </div>
          </div>
        </section>
        <section
          className="mb-6 grid gap-4 md:grid-cols-3"
          aria-label="Scheduler status summary"
        >
          <Card className="border-border/40 bg-card/50">
            <CardContent className="p-4">
              <Clock3
                className="mb-3 h-5 w-5 text-sky-300"
                aria-hidden="true"
              />
              <p className="text-xl font-bold">Unavailable</p>
              <p className="text-xs text-muted-foreground">Scheduled jobs</p>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-card/50">
            <CardContent className="p-4">
              <CheckCircle2
                className="mb-3 h-5 w-5 text-emerald-300"
                aria-hidden="true"
              />
              <p className="text-xl font-bold">Unavailable</p>
              <p className="text-xs text-muted-foreground">Published posts</p>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-card/50">
            <CardContent className="p-4">
              <BarChart3
                className="mb-3 h-5 w-5 text-violet-300"
                aria-hidden="true"
              />
              <p className="text-xl font-bold">No data</p>
              <p className="text-xs text-muted-foreground">
                Views and engagement
              </p>
            </CardContent>
          </Card>
        </section>
        <nav className="mb-5 flex flex-wrap gap-2" aria-label="Scheduler views">
          {(["queue", "create", "analytics"] as const).map(view => (
            <Button
              key={view}
              type="button"
              variant={activeView === view ? "default" : "outline"}
              onClick={() => setActiveView(view)}
            >
              <>
                {view === "queue" ? (
                  <CalendarClock className="mr-2 h-4 w-4" aria-hidden="true" />
                ) : view === "create" ? (
                  <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
                ) : (
                  <BarChart3 className="mr-2 h-4 w-4" aria-hidden="true" />
                )}
              </>
              {view === "queue"
                ? "Local queue"
                : view === "create"
                  ? "Draft a post"
                  : "Analytics unavailable"}
            </Button>
          ))}
        </nav>

        {activeView === "queue" && (
          <section className="space-y-3" aria-labelledby="queue-title">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 id="queue-title" className="text-xl font-semibold">
                  Local queue samples
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Nothing here is scheduled, published, or delivered.
                </p>
              </div>
              <Badge
                variant="outline"
                className="border-muted-foreground/30 text-muted-foreground"
              >
                {SAMPLE_POSTS.length} samples
              </Badge>
            </div>
            {SAMPLE_POSTS.map(post => (
              <Card key={post.id} className="border-border/40 bg-card/40">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 rounded-lg bg-secondary/60 p-2"
                      aria-hidden="true"
                    >
                      {post.type === "text" ? (
                        <FileText className="h-4 w-4" />
                      ) : post.type === "image" ? (
                        <ImageOff className="h-4 w-4" />
                      ) : (
                        <VideoOff className="h-4 w-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {post.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-border/40 text-muted-foreground"
                        >
                          {post.type} preview
                        </Badge>
                        {post.platforms.map(platform => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="border-border/40 text-muted-foreground"
                          >
                            {platform}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm leading-6">{post.body}</p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        <Clock3
                          className="mr-1 inline h-3 w-3"
                          aria-hidden="true"
                        />
                        {post.timing} · metrics unavailable
                      </p>
                    </div>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      onClick={() => announceUnavailable("Post deletion")}
                      aria-label="Post deletion unavailable"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {activeView === "create" && (
          <section aria-labelledby="draft-title">
            <Card className="border-border/40 bg-card/40">
              <CardHeader>
                <CardTitle id="draft-title" className="text-lg">
                  Draft a local post preview
                </CardTitle>
                <p className="text-sm font-normal text-muted-foreground">
                  This form does not create a job, upload media, publish
                  content, or notify a platform.
                </p>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <label
                    htmlFor="post-content"
                    className="mb-2 block text-sm font-medium"
                  >
                    Post content
                  </label>
                  <Textarea
                    id="post-content"
                    placeholder="Write a local draft only"
                    value={content}
                    onChange={event => setContent(event.target.value)}
                    rows={5}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {content.length}/500 characters ·{" "}
                    {draftCount ? "local draft present" : "no draft"}
                  </p>
                </div>
                <div>
                  <span className="mb-2 block text-sm font-medium">
                    Content type
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CONTENT_TYPES.map(type => (
                      <Button
                        key={type}
                        type="button"
                        variant={selectedType === type ? "default" : "outline"}
                        onClick={() => setSelectedType(type)}
                        aria-pressed={selectedType === type}
                      >
                        {type === "text" ? (
                          <FileText
                            className="mr-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        ) : type === "image" ? (
                          <ImageOff
                            className="mr-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        ) : (
                          <VideoOff
                            className="mr-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        )}
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="schedule-date"
                      className="mb-2 block text-sm font-medium"
                    >
                      Local date preview
                    </label>
                    <Input
                      id="schedule-date"
                      type="date"
                      value={date}
                      onChange={event => setDate(event.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="schedule-time"
                      className="mb-2 block text-sm font-medium"
                    >
                      Local time preview
                    </label>
                    <Input
                      id="schedule-time"
                      type="time"
                      value={time}
                      onChange={event => setTime(event.target.value)}
                    />
                  </div>
                </div>
                <div className="rounded-xl border border-border/30 bg-background/30 p-4 text-sm text-muted-foreground">
                  <LockKeyhole
                    className="mr-2 inline h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  Platforms, media storage, scheduling, publishing, and delivery
                  are unavailable.
                </div>
                <Button
                  type="button"
                  onClick={() => announceUnavailable("Post scheduling")}
                  disabled={!content.trim()}
                >
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  Schedule unavailable
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        {activeView === "analytics" && (
          <section aria-labelledby="analytics-title">
            <Card className="border-border/40 bg-card/40">
              <CardContent className="p-10 text-center">
                <XCircle
                  className="mx-auto mb-4 h-10 w-10 text-muted-foreground"
                  aria-hidden="true"
                />
                <h2 id="analytics-title" className="text-xl font-semibold">
                  Analytics unavailable
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  No verified platform event source, published-post identifier,
                  view counter, engagement stream, or attribution model is
                  connected. No performance number is shown.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-5"
                  onClick={() => announceUnavailable("Analytics retrieval")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" aria-hidden="true" />
                  Analytics unavailable
                </Button>
              </CardContent>
            </Card>
          </section>
        )}

        <div
          className="mt-6 rounded-xl border border-border/30 bg-card/30 p-4 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </div>
      </div>
    </main>
  );
}
