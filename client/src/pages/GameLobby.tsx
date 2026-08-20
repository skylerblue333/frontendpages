import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Gamepad2,
  Globe2,
  Search,
  ShieldCheck,
  UsersRound,
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

type LobbyBoundary = { title: string; area: string; description: string };
const boundaries: readonly LobbyBoundary[] = [
  {
    title: "Game catalog, rooms, and session authorization",
    area: "Discovery",
    description:
      "No game catalog, room record, player identity, invite, capacity, region, session token, or authorization scope is loaded.",
  },
  {
    title: "Matchmaking, presence, and realtime delivery",
    area: "Realtime",
    description:
      "No matchmaking queue, presence state, latency signal, websocket, reconnect path, room event, or ready-state record is connected.",
  },
  {
    title: "Moderation, privacy, and player safety",
    area: "Safety",
    description:
      "No age or accessibility control, report, block, mute, moderation decision, privacy setting, abuse signal, or retention policy exists.",
  },
  {
    title: "Game launch, results, and recovery",
    area: "Operations",
    description:
      "No launch handshake, game result, disconnect recovery, error boundary, structured event, dispute record, or incident workflow is available.",
  },
];

export default function GameLobby() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Game lobby is unavailable locally. No game catalog, room, player identity, matchmaking queue, realtime connection, or game result was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No game catalog, room, player identity, matchmaking queue, realtime connection, or game result was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="game-lobby-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Gamepad2 className="size-3.5" aria-hidden="true" />
                  Multiplayer discovery readiness
                </Badge>
                <Badge variant="secondary">No lobby service</Badge>
              </div>
              <h1
                id="game-lobby-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Game lobby readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review game discovery, rooms, matchmaking, presence, moderation,
                launch, and recovery contracts without presenting fabricated
                player activity.
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
                Game lobby service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No game catalog, room persistence, player identity, matchmaking
                service, realtime transport, moderation system, or audit stream
                is connected. This is a planning boundary, not an active lobby.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Game lobby status"
        >
          <Card>
            <CardContent className="p-5">
              <Globe2 className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No game discovery</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No game catalog, room, invite, capacity, region, session token,
                or authorization scope is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No player queue</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No matchmaking, presence, latency, websocket, reconnect, room
                event, or ready-state can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No game launch</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No launch handshake, game result, disconnect recovery, report,
                or lobby mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Game-lobby readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads rooms,
              player identities, queues, realtime connections, moderation state,
              or game results.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search game lobby readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search lobby requirements"
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
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No lobby notes match “{query}”.
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
                A production lobby needs a versioned game catalog, authorized
                rooms, identity-scoped sessions, matchmaking and presence
                semantics, realtime delivery and reconnect behavior, safety and
                moderation controls, launch authorization, result integrity,
                dispute handling, and audit-safe recovery.
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
