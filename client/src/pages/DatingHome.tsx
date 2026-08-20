import { useState } from "react";
import {
  Brain,
  CircleSlash2,
  HeartOff,
  LockKeyhole,
  ShieldAlert,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
export default function DatingHome() {
  const [status, setStatus] = useState(
    "Dating discovery service unavailable. Showing a local readiness view only."
  );
  const blocked = (a: string) =>
    setStatus(
      `${a} is unavailable locally. No profile, swipe, match, notification, AI, purchase, boost, or account mutation was started.`
    );
  return (
    <div data-ui-polish="batch-185" className="min-h-screen bg-background">
      <PageHeader
        icon={Sparkles}
        title="Dating discovery"
        subtitle="Review discovery structure without fabricated profiles, locations, AI summaries, matches, premium offers, boosts, or swipe outcomes."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Dating discovery service unavailable.</strong> No identity,
          age assurance, consent, matching, moderation, AI, payment, or
          notification service is connected.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="rounded-xl border border-dashed border-slate-700 p-12 text-center">
            <UserRound className="mx-auto h-10 w-10 text-slate-500" />
            <h2 className="mt-4 text-2xl font-semibold">
              Discovery unavailable
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
              No profile identity, age, location, biography, interests, photo,
              AI analysis, match, or presence data is available. This preview
              does not fabricate a person or social outcome.
            </p>
            <div className="mt-5 flex justify-center gap-2">
              <Button onClick={() => blocked("Pass profile")} variant="outline">
                <X className="mr-2 h-4 w-4" />
                Pass unavailable
              </Button>
              <Button onClick={() => blocked("Like profile")} variant="outline">
                <HeartOff className="mr-2 h-4 w-4" />
                Like unavailable
              </Button>
              <Button
                onClick={() => blocked("Show AI analysis")}
                variant="outline"
              >
                <Brain className="mr-2 h-4 w-4" />
                AI unavailable
              </Button>
            </div>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {["Profile", "Matches", "Boost"].map(label => (
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
              No identity, location, interests, AI summary, match, premium,
              boost price, or social proof is fabricated.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm text-slate-400">
              Production discovery requires consent, age assurance, safety
              moderation, privacy, matching integrity, and payment controls.
            </p>
          </div>
          <div className="mt-4 flex gap-3">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <p className="text-sm text-slate-400">
              No swipe, match, notification, AI, purchase, boost, or account
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
