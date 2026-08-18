import { useState } from "react";
import {
  CameraOff,
  CircleSlash2,
  FileText,
  Heart,
  ImageOff,
  LockKeyhole,
  MessageCircleOff,
  ShieldAlert,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/PageHeader";

type Tab = "posts" | "media" | "about";
export default function Profile() {
  const [postDraft, setPostDraft] = useState("");
  const [status, setStatus] = useState(
    "Profile service unavailable. Showing a local read-only profile shell only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, post, media, follow, notification, wallet, or account mutation was started.`
    );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={UserRound}
        title="Profile"
        subtitle="Review a local profile shell without fabricated identity, posts, media, followers, likes, publishing, wallet, or social outcomes."
        badge="Read-only preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Profile service unavailable.</strong> No authenticated
          profile, social feed, media store, relationship service, notification
          endpoint, or wallet profile connector is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/10">
              <UserRound className="h-9 w-9 text-purple-200" />
            </div>
            <div className="flex-1">
              <Badge variant="outline">Identity unavailable</Badge>
              <h2 className="mt-2 text-2xl font-semibold">
                Profile identity unavailable
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                No display name, username, biography, avatar, location,
                verification, reputation, follower count, or wallet profile is
                available from this preview.
              </p>
            </div>
            <Button onClick={() => blocked("Follow profile")} variant="outline">
              <UserRoundPlus className="mr-2 h-4 w-4" /> Follow unavailable
            </Button>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {(
              [
                ["Posts", "Unavailable"],
                ["Media", "Unavailable"],
                ["Followers", "Unavailable"],
                ["Following", "Unavailable"],
              ] as Array<[string, string]>
            ).map(([label, value]) => (
              <div
                className="rounded-lg border border-slate-800 p-3"
                key={label}
              >
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </Card>
        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <Tabs defaultValue="posts">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
              </TabsList>
              <TabsContent className="mt-6" value="posts">
                <div className="rounded-xl border border-slate-800 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Local post draft
                  </p>
                  <Textarea
                    className="mt-4"
                    maxLength={255}
                    onChange={event => setPostDraft(event.target.value)}
                    placeholder="Post draft remains local"
                    rows={4}
                    value={postDraft}
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {postDraft.length}/255
                    </span>
                    <Button
                      disabled={postDraft.trim().length === 0}
                      onClick={() => blocked("Publish post")}
                      variant="outline"
                    >
                      <FileText className="mr-2 h-4 w-4" /> Publish unavailable
                    </Button>
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-dashed border-slate-700 p-10 text-center">
                  <MessageCircleOff className="mx-auto h-8 w-8 text-slate-500" />
                  <h2 className="mt-4 text-xl font-semibold">
                    Posts unavailable
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                    No post identity, content, likes, comments, shares,
                    timestamps, moderation, or persistence is available.
                  </p>
                </div>
              </TabsContent>
              <TabsContent className="mt-6" value="media">
                <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">
                  <ImageOff className="mx-auto h-8 w-8 text-slate-500" />
                  <h2 className="mt-4 text-xl font-semibold">
                    Media unavailable
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                    No profile media, upload, storage, moderation, or media
                    provenance is connected.
                  </p>
                  <Button
                    className="mt-5"
                    onClick={() => blocked("Load profile media")}
                    variant="outline"
                  >
                    Load media unavailable
                  </Button>
                </div>
              </TabsContent>
              <TabsContent className="mt-6" value="about">
                <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center">
                  <Heart className="mx-auto h-8 w-8 text-slate-500" />
                  <h2 className="mt-4 text-xl font-semibold">
                    About data unavailable
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
                    No biography, links, interests, verification, reputation, or
                    wallet identity is available.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Account boundaries
              </p>
              <h2 className="mt-2 text-xl font-semibold">Not connected</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Identity", "Unavailable"],
                    ["Posts", "Unavailable"],
                    ["Media", "Unavailable"],
                    ["Relationships", "Unavailable"],
                    ["Notifications", "Unavailable"],
                    ["Wallet profile", "Unavailable"],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  A real profile surface requires authenticated authorization,
                  provenance, privacy controls, moderation, deletion handling,
                  and auditable social mutations.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No verification badge, engagement count, activity timestamp,
                  follower graph, wallet identity, or social proof is claimed.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No post, like, comment, follow, message, media, notification,
                  wallet, or account operation is available locally.
                </p>
              </div>
            </Card>
            <div className="mt-6 flex gap-2">
              <Button
                onClick={() => blocked("Upload profile image")}
                variant="outline"
              >
                <CameraOff className="mr-2 h-4 w-4" /> Image unavailable
              </Button>
              <Button
                onClick={() => blocked("Load profile data")}
                variant="outline"
              >
                Load unavailable
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
