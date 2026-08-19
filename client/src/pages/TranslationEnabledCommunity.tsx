import { useState } from "react";
import {
  CircleSlash2,
  Globe2,
  LockKeyhole,
  MessageSquareOff,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function TranslationEnabledCommunity() {
  const [targetLanguage, setTargetLanguage] = useState("English");
  const [status, setStatus] = useState(
    "Community and translation services unavailable. Showing local structure only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No community, translation, membership, notification, moderation, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Globe2}
        title="Translation-enabled community"
        subtitle="Review local community and translation structure without fabricated members, posts, views, replies, authors, translations, or join outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Community and translation services unavailable.</strong> No
          identity, moderation, membership, translation model, language-quality
          source, or notification service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="outline">Local community concept</Badge>
              <h2 className="mt-3 text-2xl font-semibold">
                Community unavailable
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                No community identity, description, language, members, posts,
                authors, views, replies, or moderation state is available.
              </p>
            </div>
            <Button onClick={() => blocked("Join community")} variant="outline">
              Join unavailable
            </Button>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {["Members", "Language", "Posts", "Replies"].map(label => (
              <div
                className="rounded-lg border border-slate-800 p-3"
                key={label}
              >
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-sm">Unavailable</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Translation preview
              </p>
              <h2 className="mt-1 text-xl font-semibold">
                Translation unavailable
              </h2>
            </div>
            <select
              aria-label="Target language"
              className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
              onChange={e => setTargetLanguage(e.target.value)}
              value={targetLanguage}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Japanese</option>
            </select>
          </div>
          <div className="mt-5 rounded-xl border border-dashed border-slate-700 p-10 text-center">
            <MessageSquareOff className="mx-auto h-8 w-8 text-slate-500" />
            <p className="mt-3 text-sm leading-6 text-slate-400">
              No source post, author, translation, language confidence, or
              quality result is available for {targetLanguage}. No translation
              fixture is presented as real content.
            </p>
            <Button
              className="mt-4"
              onClick={() => blocked("Translate discussion")}
              variant="outline"
            >
              Translate unavailable
            </Button>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [Users, "No membership"],
            [ShieldAlert, "No moderation"],
            [CircleSlash2, "No mutation"],
          ].map(([Icon, label]) => (
            <Card
              className="border-slate-800 bg-slate-900/75 p-5"
              key={String(label)}
            >
              <Icon className="h-5 w-5 text-cyan-200" />
              <h2 className="mt-3 font-semibold">{String(label)}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No community identity, post, translation, notification,
                moderation, join, or account operation is available locally.
              </p>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production translated communities require consent, content
              provenance, moderation, translation quality controls, privacy,
              retention, and auditable membership changes.
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
