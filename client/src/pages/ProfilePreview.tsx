import { useMemo, useState } from "react";
import {
  Eye,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  UsersRound,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Identity and preview source",
    area: "Evidence",
    description:
      "No profile owner, field source, image asset, display name, activity, source timestamp, or preview snapshot is connected.",
  },
  {
    title: "Audience, visibility, and consent",
    area: "Privacy",
    description:
      "No viewer role, audience, sharing scope, consent, sensitive-data classification, privacy rule, or access decision is verified.",
  },
  {
    title: "Rendering, responsive behavior, and moderation",
    area: "Quality",
    description:
      "No rendered field set, responsive variant, fallback, content moderation decision, report state, or accessibility review exists.",
  },
  {
    title: "Authorization, expiry, and audit",
    area: "Controls",
    description:
      "No preview token, session, expiration, ownership check, access event, revocation, support trace, or audit history is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No preview, share, copy link, publish, revoke, report, save, export, or profile, audience, or personal-data mutation is connected or persisted.",
  },
];
export default function ProfilePreview() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Profile Preview is unavailable locally. No identity, profile field, image, audience, viewer role, privacy rule, preview snapshot, share link, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No profile, audience, preview, sharing, privacy, moderation, authorization, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="profile-preview-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Eye className="size-3.5" aria-hidden="true" />{" "}
                  Profile-preview readiness workspace
                </Badge>
                <Badge variant="secondary">No preview state</Badge>
              </div>
              <h1
                id="profile-preview-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                ProfilePreview readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review profile identity and field sources, audience and
                visibility, privacy and consent, rendering and accessibility,
                moderation, authorization, expiry, and sharing boundaries
                without implying that a preview snapshot, viewer, share link, or
                profile record exists.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <Info
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Profile Preview is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No identity service, profile source, audience policy, privacy
                manager, renderer, moderation system, preview-token service,
                sharing control, or persistence layer is connected. This
                workspace cannot preview, share, copy a link, publish, revoke,
                report, save, export, or claim profile visibility.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Eye className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No preview state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No profile owner, field source, image, activity, audience,
                viewer, or preview snapshot is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No audience state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No viewer role, visibility, consent, sharing scope, privacy
                rule, or access decision exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No preview actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No preview, share, copy link, publish, revoke, report, save, or
                export mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Profile-preview governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads profile data, renders a viewer-specific snapshot, creates a
              share link, or saves preview records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search ProfilePreview readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter preview requirements"
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
                  No preview requirements match “{query}”.
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
                Production profile preview requires a verified owner and field
                source, viewer-specific audience and visibility rules, consent
                and sensitive-data handling, accessible responsive rendering,
                moderation, expiring authorized preview tokens, revocation,
                sharing safeguards, audit history, and clear user-facing
                confirmation. No profile, preview, audience, share link,
                moderation, authorization, or personal-data record is claimed
                here.
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
