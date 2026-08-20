import { useState } from "react";
import {
  CheckCircle2,
  Eye,
  FileText,
  Globe2,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const fields = [
  ["Identity", "Authenticated profile unavailable"],
  ["Display name", "Not loaded"],
  ["Biography", "Not loaded"],
  ["Avatar", "Image source unavailable"],
  ["Links", "Link registry unavailable"],
  ["Visibility", "Privacy setting unavailable"],
  ["Verification", "Not verified"],
  ["Moderation", "Review state unavailable"],
] as const;

export default function UserBio() {
  const [status, setStatus] = useState(
    "Profile service unavailable locally. No biography, identity, or profile mutation was started."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No profile, identity, privacy, moderation, or persistence mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={UserRound}
        title="User bio"
        subtitle="Review profile-readiness structure without fabricating identity, biography, links, verification, privacy, moderation, or persisted profile state."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Profile unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Profile service unavailable.</strong> No authenticated
            owner, profile record, media store, link registry, privacy policy,
            verification source, or moderation state is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh profile")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Profile preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review profile evidence
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Typed local fields identify the evidence a production bio
                  surface must verify. They do not represent a real person,
                  biography, avatar, social link, verification badge, audience,
                  or saved profile.
                </p>
              </div>
              <FileText
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {fields.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button disabled className="bg-slate-700 text-slate-400">
                Edit bio unavailable
              </Button>
              <Button disabled variant="outline">
                Save unavailable
              </Button>
              <Button disabled variant="outline">
                Publish unavailable
              </Button>
            </div>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Profile readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Identity actions withheld
              </h2>
              <div className="mt-5 space-y-3">
                {[
                  [
                    UserRound,
                    "Identity and ownership",
                    "No authenticated owner, profile ID, identity source, or account scope.",
                  ],
                  [
                    Globe2,
                    "Links and media",
                    "No avatar source, external link registry, media moderation, or URL validation.",
                  ],
                  [
                    Eye,
                    "Privacy and visibility",
                    "No visibility policy, audience scope, consent, or public profile state.",
                  ],
                ].map(([Icon, label, description]) => (
                  <div
                    key={label as string}
                    className="flex gap-3 rounded-xl border border-slate-800 p-4"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium">{label as string}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {description as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production profile requires authenticated ownership, field
                  validation, media and link safety, privacy controls, consent,
                  moderation, persistence, optimistic-concurrency protection,
                  audit events, and clear separation between preview and
                  published state. It must not imply verification without a
                  trusted source.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Evidence named</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Profile sources remain explicit.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Publish blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No profile mutation.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No identity, bio, avatar, link, verification, audience, moderation,
            or saved-profile outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
