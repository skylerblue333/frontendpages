import { useState } from "react";
import {
  CheckCircle2,
  ImagePlus,
  LockKeyhole,
  Save,
  ShieldCheck,
  UserRound,
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

export default function EditProfile() {
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [saved, setSaved] = useState(false);

  const resetDraft = () => {
    setDisplayName("");
    setBio("");
    setLocation("");
    setSaved(false);
  };

  const updateDraft = (setter: (value: string) => void, value: string) => {
    setter(value);
    setSaved(false);
  };

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="edit-profile-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <UserRound className="size-3.5" aria-hidden="true" />
                  Profile readiness
                </Badge>
                <Badge variant="secondary">Local draft</Badge>
              </div>
              <h1
                id="edit-profile-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Edit profile readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review a profile-editing contract with local draft fields only.
                No account identity, saved profile, avatar, privacy setting, or
                user record is loaded or changed.
              </p>
            </div>
            <ShieldCheck
              className="size-8 shrink-0 text-primary"
              aria-hidden="true"
            />
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-labelledby="profile-boundary-title"
        >
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2
                id="profile-boundary-title"
                className="font-semibold text-amber-100"
              >
                Account profile service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated user, profile record, avatar storage, privacy
                policy, moderation rule, or account update contract is
                connected. Save and reset below affect only this page’s local
                draft state.
              </p>
            </div>
          </div>
        </section>

        <section
          className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
          aria-label="Profile draft and readiness contract"
        >
          <Card>
            <CardHeader>
              <CardTitle>Local profile draft</CardTitle>
              <CardDescription>
                These fields are for review only. They are not validated against
                an account and are not persisted.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <label
                  htmlFor="profile-display-name"
                  className="text-sm font-medium"
                >
                  Display name
                </label>
                <Input
                  id="profile-display-name"
                  value={displayName}
                  onChange={event =>
                    updateDraft(setDisplayName, event.target.value)
                  }
                  placeholder="Local display name"
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="profile-bio" className="text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="profile-bio"
                  value={bio}
                  onChange={event => updateDraft(setBio, event.target.value)}
                  placeholder="Draft a short bio locally"
                  className="mt-2 min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="profile-location"
                  className="text-sm font-medium"
                >
                  Location
                </label>
                <Input
                  id="profile-location"
                  value={location}
                  onChange={event =>
                    updateDraft(setLocation, event.target.value)
                  }
                  placeholder="Local location field"
                  className="mt-2"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="button" onClick={() => setSaved(true)}>
                  <Save className="mr-2 size-4" aria-hidden="true" />
                  {saved ? "Draft saved locally" : "Save draft locally"}
                </Button>
                <Button type="button" variant="outline" onClick={resetDraft}>
                  Reset draft
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled
                  aria-disabled="true"
                >
                  <ImagePlus className="mr-2 size-4" aria-hidden="true" />
                  Avatar unavailable
                </Button>
              </div>
              <p
                className="text-xs text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                {saved
                  ? "Local draft state updated. No profile record was changed."
                  : "Draft changes remain in this page until reset or navigation."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile contract</CardTitle>
              <CardDescription>
                Requirements for a real account-backed workflow.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/70 p-4">
                <p className="font-medium text-foreground">
                  Identity and authorization
                </p>
                <p className="mt-1 leading-6">
                  Authenticated subject, ownership checks, session handling,
                  field permissions, and conflict handling must be verified.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 p-4">
                <p className="font-medium text-foreground">
                  Privacy and moderation
                </p>
                <p className="mt-1 leading-6">
                  Visibility settings, sensitive-field handling, content rules,
                  abuse reporting, and audit events must be defined.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 p-4">
                <p className="font-medium text-foreground">
                  Media and persistence
                </p>
                <p className="mt-1 leading-6">
                  Avatar upload, type and size validation, storage, deletion,
                  cache invalidation, optimistic state, error recovery, and
                  tests remain unavailable.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-2xl border border-border/70 bg-card/50 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">Truthful profile state</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                No display name, bio, location, avatar, privacy setting, or
                account statistic is presented as production data. The only
                interactive behavior is local draft editing and status feedback.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
