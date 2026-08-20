import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Bell,
  FileSearch,
  Languages,
  LockKeyhole,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Preference categories and defaults",
    area: "Preferences",
    description:
      "No notification, language, theme, accessibility, privacy, marketing, content, device, or data-sharing preference is connected.",
  },
  {
    title: "Consent and privacy controls",
    area: "Privacy",
    description:
      "No consent purpose, revocation rule, data minimization, retention, export, deletion, sensitive-content choice, or privacy notice is verified.",
  },
  {
    title: "Device and offline behavior",
    area: "Device",
    description:
      "No operating-system capability, permission, network mode, battery behavior, local cache, sync queue, stale-data rule, or recovery state exists.",
  },
  {
    title: "Authentication and security",
    area: "Security",
    description:
      "No session, account, MFA, device trust, credential recovery, secret boundary, security event, or access audit is available.",
  },
  {
    title: "Accessibility and change feedback",
    area: "UX",
    description:
      "No keyboard path, screen-reader announcement, focus restoration, reduced-motion rule, validation message, success state, or failure retry is tested.",
  },
];
export default function MobileSettings() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mobile settings are unavailable locally. No account, preference, consent, device, privacy, session, or settings record was loaded or saved."
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
      `${action} is unavailable locally. No account, preference, consent, device, privacy, session, credential, or settings-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mobile-settings-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Settings2 className="size-3.5" aria-hidden="true" />{" "}
                  Settings-readiness workspace
                </Badge>
                <Badge variant="secondary">No settings loaded</Badge>
              </div>
              <h1
                id="mobile-settings-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MobileSettings readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review preference categories, consent, privacy, device behavior,
                authentication, accessibility, validation, and recovery without
                implying that an account, preference, device, or settings record
                exists.
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
                Mobile settings are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account service, preference store, consent manager, device
                capability layer, authentication boundary, accessibility
                preference source, or persistence layer is connected. This
                workspace cannot read, edit, apply, or claim a setting.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Settings2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No preference records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No notification, language, theme, accessibility, privacy,
                marketing, content, device, or sharing setting is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Smartphone
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No device state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No permission, operating-system capability, network, battery,
                cache, sync, or recovery state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No settings actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No edit, save, apply, reset, export, consent, sign-in, or
                settings-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Settings-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads account state, changes a preference, grants device
              permission, records consent, or saves settings data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mobile settings readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter settings requirements"
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
                  No settings notes match “{query}”.
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
                Production settings require explicit preference contracts and
                defaults, consent purposes and revocation, privacy and retention
                controls, device and offline handling, authentication and
                security boundaries, accessible feedback, validation, retry, and
                auditable changes. No account, preference, consent, device,
                session, or settings record is claimed here.
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
