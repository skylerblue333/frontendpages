import { useMemo, useState } from "react";
import {
  BookOpenText,
  CircleSlash2,
  Eye,
  FileText,
  LockKeyhole,
  PenLine,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";
import { Textarea } from "@/components/ui/textarea";

type Mode = "Draft" | "Preview";
type Visibility = "Public preview" | "Subscriber preview" | "Private draft";
export default function CreateArticle() {
  const [mode, setMode] = useState<Mode>("Draft");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [visibility, setVisibility] = useState<Visibility>("Private draft");
  const [status, setStatus] = useState(
    "Article persistence unavailable. Showing local editor structure only."
  );
  const words = useMemo(
    () => (content.trim() ? content.trim().split(/\s+/).length : 0),
    [content]
  );
  const blocked = (a: string) =>
    setStatus(
      `${a} is unavailable locally. No author, draft, article, visibility, subscriber, notification, payment, payout, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={BookOpenText}
        title="Create article"
        subtitle="Draft and preview article structure locally without fabricated authorship, publishing, subscriber access, monetization, or persistence outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Article persistence unavailable.</strong> Drafts remain in
          component memory. No identity, storage, moderation, publication,
          entitlement, payment, tax, or payout service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="outline">Local editor</Badge>
              <h2 className="mt-3 text-2xl font-semibold">
                {mode === "Draft" ? "Draft locally" : "Preview locally"}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {words} words. This is not saved or published.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                aria-pressed={mode === "Draft"}
                onClick={() => setMode("Draft")}
                size="sm"
                variant={mode === "Draft" ? "default" : "outline"}
              >
                <PenLine className="mr-2 h-4 w-4" />
                Draft
              </Button>
              <Button
                aria-pressed={mode === "Preview"}
                onClick={() => setMode("Preview")}
                size="sm"
                variant={mode === "Preview" ? "default" : "outline"}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </div>
          </div>
          {mode === "Draft" ? (
            <div className="mt-6 space-y-4">
              <Input
                aria-label="Article title"
                onChange={e => setTitle(e.target.value)}
                placeholder="Article title draft"
                value={title}
              />
              <Textarea
                aria-label="Article content"
                onChange={e => setContent(e.target.value)}
                placeholder="Write locally; no content is transmitted"
                rows={14}
                value={content}
              />
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => blocked("Save draft")} variant="outline">
                  Save unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish article")}
                  variant="outline"
                >
                  Publish unavailable
                </Button>
                <Button
                  onClick={() => {
                    setTitle("");
                    setContent("");
                  }}
                  variant="ghost"
                >
                  Clear local draft
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-slate-800 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Local preview
              </p>
              <h1 className="mt-3 text-3xl font-semibold">
                {title || "Untitled article"}
              </h1>
              <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-300">
                {content || "Nothing written yet."}
              </p>
            </div>
          )}
        </Card>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Visibility concept
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                No live access policy
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  "Public preview",
                  "Subscriber preview",
                  "Private draft",
                ] as Visibility[]
              ).map(item => (
                <Button
                  aria-pressed={visibility === item}
                  key={item}
                  onClick={() => setVisibility(item)}
                  size="sm"
                  variant={visibility === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Selected: {visibility}. This is a local display preference, not a
            published visibility or entitlement policy.
          </p>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [FileText, "No persistence"],
            [ShieldAlert, "No publication"],
            [CircleSlash2, "No monetization"],
          ].map(([Icon, label]) => (
            <Card
              className="border-slate-800 bg-slate-900/75 p-5"
              key={String(label)}
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-3 font-semibold">{String(label)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No author, article, subscriber, revenue, token, notification,
                payment, or account operation is available locally.
              </p>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production publishing requires authenticated authorship, content
              moderation, revision history, access controls, subscriber
              entitlements, payment, tax, payout, and deletion workflows.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
