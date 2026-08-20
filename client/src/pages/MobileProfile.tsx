import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Eye,
  FileSearch,
  KeyRound,
  LockKeyhole,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  UserRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Identity and profile provenance",
    area: "Identity",
    description:
      "No account, display name, avatar, biography, contact detail, verification state, profile source, or updated timestamp is connected.",
  },
  {
    title: "Visibility and sharing controls",
    area: "Privacy",
    description:
      "No audience, field-level visibility, blocked account, discoverability, sharing, mention, export, or deletion rule is available.",
  },
  {
    title: "Settings and consent",
    area: "Preferences",
    description:
      "No notification, language, theme, accessibility, telemetry, marketing, device, or privacy preference is loaded or persisted.",
  },
  {
    title: "Authentication and account security",
    area: "Security",
    description:
      "No session, sign-in method, MFA, recovery option, device list, active session, credential change, or security event is verified.",
  },
  {
    title: "Accessibility and mobile behavior",
    area: "UX",
    description:
      "No keyboard path, screen-reader label, focus restoration, touch target, reduced-motion rule, offline behavior, or form error state is tested.",
  },
];
export default function MobileProfile() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile profile is unavailable locally. No account, identity, preference, privacy, session, or profile record was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No account, identity, profile, preference, privacy, session, credential, or profile-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-profile-title"
    >
      <div data-ui-polish="batch-195" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <UserRound className="size-3.5" aria-hidden="true" />{" "}
                  Profile-readiness workspace
                </Badge>
                <Badge variant="secondary">No profile loaded</Badge>
              </div>
              <h1
                id="mobile-profile-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileProfile readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review identity provenance, visibility, preferences, consent,
                authentication, security, accessibility, and mobile behavior
                without implying that an account, profile, session, or personal
                data exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Mobile profile is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account service, profile source, privacy store,
                authentication boundary, preference persistence, device security
                service, or data layer is connected. This workspace cannot
                display, edit, save, or claim a personal profile.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UserRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No identity records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, name, avatar, biography, contact detail,
                verification, or profile timestamp is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Settings2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No preferences</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No notification, language, theme, accessibility, telemetry,
                marketing, device, or privacy setting exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No profile actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No edit, save, share, export, delete, sign-in, credential, or
                profile-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Profile-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads account data, changes visibility, updates a preference,
              edits a profile, or saves personal data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile profile readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter profile requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileSearch className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No profile notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Production profile management requires authoritative identity
                sources, field-level privacy and sharing controls, consent
                semantics, secure authentication and recovery, preference
                persistence, accessibility, offline and error behavior, data
                export/deletion, and auditable account changes. No account,
                identity, profile, preference, session, or personal record is
                claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
