import { useState } from "react";
import {
  CircleSlash2,
  HeartOff,
  LockKeyhole,
  ShieldAlert,
  UserRound,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function DatingProfile() {
  const [bio, setBio] = useState("");
  const [status, setStatus] = useState(
    "Dating profile service unavailable. Showing a local draft only."
  );
  const blocked = (a: string) =>
    setStatus(
      `${a} is unavailable locally. No identity, photo, matching, discovery, suggestion, notification, profile, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-185" className="min-h-screen bg-background">
      <PageHeader
        icon={UserRound}
        title="Dating profile"
        subtitle="Review a local profile draft without fabricated identity, completeness, matching, discovery, photos, suggestions, or publication outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Dating profile service unavailable.</strong> No identity, age
          assurance, consent, moderation, media, matching, or profile
          persistence service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <Badge variant="outline">Local draft</Badge>
          <h2 className="mt-3 text-2xl font-semibold">
            Profile details unavailable
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Values remain in component memory only and are not published,
            matched, retained, or sent to a service.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Input aria-label="Age draft" placeholder="Age draft" />
            <Input aria-label="Gender draft" placeholder="Gender draft" />
            <Textarea
              aria-label="Bio draft"
              className="md:col-span-2"
              onChange={e => setBio(e.target.value)}
              placeholder="Bio draft only"
              rows={5}
              value={bio}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button onClick={() => blocked("Save profile")} variant="outline">
              Save unavailable
            </Button>
            <Button
              onClick={() => blocked("Get suggestions")}
              variant="outline"
            >
              Suggestions unavailable
            </Button>
            <Button
              onClick={() => blocked("Publish profile")}
              variant="outline"
            >
              Publish unavailable
            </Button>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {["Identity", "Completeness", "Matches"].map(label => (
            <Card className="border-slate-800 bg-slate-900/75 p-5" key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">Unavailable</p>
              <Badge className="mt-3" variant="outline">
                Source unavailable
              </Badge>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <p className="text-sm text-slate-400">
              No age, gender, biography, photo, completeness, match, discovery,
              or suggestion claim is fabricated.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm text-slate-400">
              Production dating profiles require consent, age assurance,
              privacy, safety moderation, retention, and deletion controls.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <p className="text-sm text-slate-400">
              No profile, photo, matching, notification, discovery, or account
              operation is available locally.
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
