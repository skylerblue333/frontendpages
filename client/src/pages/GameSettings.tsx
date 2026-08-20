import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Gamepad2,
  LockKeyhole,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
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

type SettingsBoundary = { title: string; area: string; description: string };
const boundaries: readonly SettingsBoundary[] = [
  {
    title: "Game preferences and profile scope",
    area: "Preferences",
    description:
      "No account identity, selected game, difficulty, controls, audio, graphics, accessibility preference, or saved profile scope is loaded.",
  },
  {
    title: "Privacy, safety, and communication controls",
    area: "Safety",
    description:
      "No privacy setting, presence visibility, chat preference, block or mute state, age control, consent record, or moderation policy is connected.",
  },
  {
    title: "Wallet, rewards, and financial safeguards",
    area: "Financial",
    description:
      "No wallet authorization, reward preference, transaction limit, custody setting, payout control, tax scope, or financial permission is available.",
  },
  {
    title: "Persistence, versioning, and recovery",
    area: "Operations",
    description:
      "No saved preference version, sync status, device scope, conflict resolution, reset history, audit event, or recovery path exists.",
  },
];

export default function GameSettings() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Game settings are unavailable locally. No preference, privacy control, wallet permission, game option, or settings mutation was saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No preference, privacy control, wallet permission, game option, or settings mutation was saved.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="game-settings-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Settings2 className="size-3.5" aria-hidden="true" />
                  Settings readiness
                </Badge>
                <Badge variant="secondary">No settings service</Badge>
              </div>
              <h1
                id="game-settings-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Game settings readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review preferences, privacy, safety, wallet permissions,
                persistence, and recovery boundaries without implying that any
                setting is saved or active.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Settings service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No account-scoped preferences, privacy controls, game
                configuration, wallet permissions, synchronization, or audit
                stream is connected. This is a planning boundary, not an active
                settings surface.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Game settings status"
        >
          <Card>
            <CardContent className="p-5">
              <Gamepad2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No game options</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No selected game, controls, difficulty, audio, graphics,
                accessibility preference, or saved profile is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No privacy controls</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No presence, chat, consent, block, mute, age, moderation,
                wallet, or permission setting can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No saved state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No preference version, sync status, reset history, conflict
                resolution, or settings mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Game-settings readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads account
              preferences, privacy settings, wallet permissions, or saved
              configuration.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search game settings readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search settings requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    <SlidersHorizontal
                      className="mr-2 size-4"
                      aria-hidden="true"
                    />
                    Manage unavailable
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
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production settings surface needs authenticated scope,
                explicit preference schemas, privacy and safety defaults,
                accessible controls, wallet permission boundaries, versioned
                persistence, sync and conflict behavior, reset semantics,
                audit-safe changes, and tested recovery.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
