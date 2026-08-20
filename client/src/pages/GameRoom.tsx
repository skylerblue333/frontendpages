import { useMemo, useState } from "react";
import {
  CheckCircle2,
  Gamepad2,
  LockKeyhole,
  Search,
  ShieldCheck,
  WifiOff,
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

type RoomBoundary = { title: string; area: string; description: string };
const boundaries: readonly RoomBoundary[] = [
  {
    title: "Room identity, membership, and authorization",
    area: "Access",
    description:
      "No room identifier, participant identity, invite, capacity, session token, permission, ready state, or authorization scope is loaded.",
  },
  {
    title: "Realtime state, actions, and persistence",
    area: "Transport",
    description:
      "No room state, participant presence, game action, event ordering, websocket, reconnect path, retry, or durable record is connected.",
  },
  {
    title: "Moderation, privacy, and player safety",
    area: "Safety",
    description:
      "No age or accessibility control, report, block, mute, moderation decision, privacy setting, abuse signal, or retention policy exists.",
  },
  {
    title: "Launch, results, disputes, and recovery",
    area: "Operations",
    description:
      "No launch handshake, game result, disconnect recovery, error boundary, dispute record, structured event, or incident workflow is available.",
  },
];

export default function GameRoom() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Game rooms are unavailable locally. No room, participant identity, realtime state, game action, session, or result was started."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No room, participant identity, realtime state, game action, session, or result was started.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="game-room-title"
    >
      <div data-ui-polish="batch-190" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Gamepad2 className="size-3.5" aria-hidden="true" />
                  Live-room readiness
                </Badge>
                <Badge variant="secondary">No room service</Badge>
              </div>
              <h1
                id="game-room-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Game room readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review room identity, participant access, realtime state,
                moderation, launch, results, and recovery contracts without
                presenting fabricated multiplayer activity.
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
                Game room service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No room persistence, participant identity, realtime transport,
                game action service, moderation system, or audit stream is
                connected. This is a planning boundary, not an active room.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Game room status"
        >
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No room session</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No room identifier, participant, invite, capacity, session
                token, permission, or ready state is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WifiOff
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No live state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No room state, presence, game action, event ordering, websocket,
                reconnect, retry, or durable record can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No room result</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No launch, game result, disconnect recovery, report, dispute, or
                room mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Game-room readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never loads rooms,
              participants, realtime state, moderation records, game actions, or
              results.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search game room readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search room requirements"
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
                  No room notes match “{query}”.
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
                A production room needs authorized participants, identity-scoped
                sessions, durable room state, realtime delivery and reconnect
                semantics, safe moderation, launch authorization, action
                integrity, result handling, dispute recovery, and audit-safe
                operations.
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
