import { useMemo, useState } from "react";
import {
  CameraOff,
  CheckCircle2,
  CircleSlash2,
  Globe2,
  KeyRound,
  LockKeyhole,
  MapPin,
  Save,
  ShieldAlert,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/PageHeader";

type ProfileDraft = {
  displayName: string;
  username: string;
  bio: string;
  location: string;
  website: string;
};
type FieldKey = keyof ProfileDraft;
const fields: Array<{
  key: FieldKey;
  label: string;
  placeholder: string;
  icon: typeof UserRound;
}> = [
  {
    key: "displayName",
    label: "Display name",
    placeholder: "Local display name",
    icon: UserRound,
  },
  {
    key: "username",
    label: "Username",
    placeholder: "local_username",
    icon: UserRound,
  },
  {
    key: "location",
    label: "Location",
    placeholder: "City or region",
    icon: MapPin,
  },
  {
    key: "website",
    label: "Website",
    placeholder: "https://example.com",
    icon: Globe2,
  },
];
export default function ProfileEdit() {
  const [draft, setDraft] = useState<ProfileDraft>({
    displayName: "",
    username: "",
    bio: "",
    location: "",
    website: "",
  });
  const [status, setStatus] = useState(
    "Profile service unavailable. This local draft is not saved or published."
  );
  const remaining = useMemo(() => 500 - draft.bio.length, [draft.bio.length]);
  const update = (key: FieldKey, value: string) =>
    setDraft(current => ({
      ...current,
      [key]:
        key === "username"
          ? value
              .toLowerCase()
              .replace(/[^a-z0-9_]/g, "")
              .slice(0, 32)
          : value,
    }));
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No profile, image, wallet, provider, storage, account, or publication operation was started.`
    );
  return (
    <div data-ui-polish="batch-199" className="min-h-screen bg-background">
      <PageHeader
        icon={UserRound}
        title="Edit profile"
        subtitle="Prepare a local profile draft without auto-saving personal data, uploading images, linking a wallet, or publishing account changes."
        badge="Local draft"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Profile service unavailable.</strong> This preview does not
          connect to a profile API, authenticated storage service, wallet
          provider, or account publication endpoint.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-center gap-3">
              <UserRound className="h-5 w-5 text-cyan-200" />
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Local profile draft
                </p>
                <h2 className="mt-1 text-2xl font-semibold">Profile details</h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Values remain in component memory only and are cleared when the
              page is left. No auto-save or background synchronization is
              active.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {fields.map(({ key, label, placeholder, icon: Icon }) => (
                <div className="space-y-2" key={key}>
                  <Label htmlFor={`profile-${key}`}>{label}</Label>
                  <div className="relative">
                    <Icon className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    <Input
                      id={`profile-${key}`}
                      className="pl-9"
                      maxLength={key === "website" ? 200 : 80}
                      onChange={event => update(key, event.target.value)}
                      placeholder={placeholder}
                      value={draft[key]}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="profile-bio">Bio</Label>
              <Textarea
                id="profile-bio"
                maxLength={500}
                onChange={event => update("bio", event.target.value)}
                placeholder="Local bio draft"
                rows={5}
                value={draft.bio}
              />
              <p className="text-right text-xs text-slate-500">
                {remaining} characters remaining
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button onClick={() => blocked("Save profile")}>
                <Save className="mr-2 h-4 w-4" /> Save unavailable
              </Button>
              <Button
                onClick={() =>
                  setDraft({
                    displayName: "",
                    username: "",
                    bio: "",
                    location: "",
                    website: "",
                  })
                }
                variant="outline"
              >
                Clear local draft
              </Button>
            </div>
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
                    ["Persistence", "Unavailable"],
                    ["Image upload", "Unavailable"],
                    ["Wallet link", "Unavailable"],
                    ["Publication", "Unavailable"],
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
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Upload profile image")}
                  variant="outline"
                >
                  <CameraOff className="mr-2 h-4 w-4" /> Image upload
                  unavailable
                </Button>
                <Button
                  onClick={() => blocked("Link wallet")}
                  variant="outline"
                >
                  <KeyRound className="mr-2 h-4 w-4" /> Wallet linking
                  unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  A real profile editor requires authenticated authorization,
                  data minimization, retention and deletion controls, validated
                  storage, and auditable account mutations.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet address, image, account identity, publication,
                  social link, or profile outcome is sent or claimed by this
                  draft.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No provider request, storage upload, auto-save, profile API,
                  or account mutation is available locally.
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
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Local-only
          draft; no outbound request was made.
        </div>
      </div>
    </div>
  );
}
