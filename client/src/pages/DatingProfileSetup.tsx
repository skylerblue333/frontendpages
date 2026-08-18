import { useState } from "react";
import {
  CheckCircle2,
  Heart,
  ImageOff,
  LockKeyhole,
  ShieldAlert,
  UserRoundCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Step = 1 | 2 | 3;
type Preference =
  "Books" | "Learning" | "Music" | "Travel" | "Gaming" | "Community";
const preferences: Preference[] = [
  "Books",
  "Learning",
  "Music",
  "Travel",
  "Gaming",
  "Community",
];
const stepLabels: Record<Step, string> = {
  1: "Safety boundary",
  2: "Preferences",
  3: "Review",
};
export default function DatingProfileSetup() {
  const [step, setStep] = useState<Step>(1);
  const [selected, setSelected] = useState<Preference[]>([]);
  const [status, setStatus] = useState(
    "Dating profile service unavailable. This local draft is not saved or published."
  );
  const toggle = (item: Preference) =>
    setSelected(current =>
      current.includes(item)
        ? current.filter(value => value !== item)
        : [...current, item]
    );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, photo, identity verification, discovery, matching, publication, or account mutation was started.`
    );
  const next = () =>
    setStep(current => (current === 3 ? 3 : ((current + 1) as Step)));
  const prev = () =>
    setStep(current => (current === 1 ? 1 : ((current - 1) as Step)));
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Heart}
        title="Dating profile setup"
        subtitle="Prepare a local preference draft without collecting sensitive identity data, uploading photos, verifying identity, publishing a profile, or claiming match outcomes."
        badge="Local draft"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Dating service unavailable.</strong> This preview does not
          accept names, ages, location, contact details, photos, identity
          documents, or other personal profile data.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {([1, 2, 3] as Step[]).map(item => (
              <div
                className={`rounded-lg border p-3 ${step === item ? "border-pink-400/40 bg-pink-400/10" : "border-slate-800"}`}
                key={item}
              >
                <p className="text-xs text-slate-500">Step {item}</p>
                <p className="mt-1 text-sm font-medium">{stepLabels[item]}</p>
              </div>
            ))}
          </div>
        </Card>
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Step 1
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Start with a privacy boundary
                  </h2>
                  <p className="mt-3 leading-7 text-slate-400">
                    A production dating service would require age assurance,
                    consent, moderation, data minimization, retention controls,
                    authorization, and a supported profile service. None is
                    connected here.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-800 p-4">
                    <LockKeyhole className="h-5 w-5 text-cyan-200" />
                    <p className="mt-3 font-medium">Identity fields</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Unavailable; no name, age, location, gender, contact, or
                      identity document is collected.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 p-4">
                    <ImageOff className="h-5 w-5 text-cyan-200" />
                    <p className="mt-3 font-medium">Photos</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Unavailable; no upload, object URL, moderation, or storage
                      operation is enabled.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Step 2
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Choose local interests
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    These non-identifying demo preferences exist only in
                    component memory and are cleared when the page is left.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {preferences.map(item => (
                    <button
                      aria-pressed={selected.includes(item)}
                      className={`rounded-xl border p-4 text-left ${selected.includes(item) ? "border-pink-400/40 bg-pink-400/10" : "border-slate-800"}`}
                      key={item}
                      onClick={() => toggle(item)}
                      type="button"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item}</span>
                        {selected.includes(item) && (
                          <CheckCircle2 className="h-4 w-4 text-pink-200" />
                        )}
                      </div>
                      <span className="mt-1 block text-sm text-slate-400">
                        Local preference only
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Step 3
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Review local draft
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    The selected preferences are not a dating profile and cannot
                    be published or used for matching.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Selected preferences
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.length ? (
                      selected.map(item => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-slate-500">
                        No local preferences selected
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  onClick={() => blocked("Complete profile setup")}
                  variant="outline"
                >
                  <UserRoundCheck className="mr-2 h-4 w-4" /> Complete setup
                  unavailable
                </Button>
              </div>
            )}
            <div className="mt-8 flex justify-between gap-3">
              <Button disabled={step === 1} onClick={prev} variant="outline">
                Back
              </Button>
              <Button disabled={step === 3} onClick={next}>
                {step === 3 ? "Review" : "Continue"}
              </Button>
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Draft status
              </p>
              <h2 className="mt-2 text-xl font-semibold">Not saved</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Profile", "Unavailable"],
                    ["Photos", "Unavailable"],
                    ["Verification", "Unavailable"],
                    ["Discovery", "Unavailable"],
                    ["Matching", "Unavailable"],
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
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No verification badge, search ranking, match count, or safety
                  outcome is claimed. The service would need actual consent,
                  moderation, age assurance, and privacy controls.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Heart className="h-5 w-5 text-pink-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No profile, photo, preference, discovery, or communication
                  data leaves this local page.
                </p>
              </div>
            </Card>
          </aside>
        </div>
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
