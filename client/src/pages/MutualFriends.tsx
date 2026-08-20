import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FileSearch,
  HeartHandshake,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRound,
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
    title: "Friendship and relationship provenance",
    area: "Relationships",
    description:
      "No account, friendship edge, direction, request, acceptance, source, timestamp, freshness, removal, or block state is connected.",
  },
  {
    title: "Consent, visibility, and identity",
    area: "Privacy",
    description:
      "No profile audience, friendship visibility, mutual-friend consent, hidden relationship, identity proof, retention, or deletion rule is verified.",
  },
  {
    title: "Requests, authorization, and abuse controls",
    area: "Safety",
    description:
      "No authenticated actor, target identity, request permission, rate limit, spam guard, block, report, harassment control, or escalation workflow exists.",
  },
  {
    title: "Discovery, ranking, and notifications",
    area: "Discovery",
    description:
      "No suggestion signal, ranking, explanation, notification, contact restriction, personalization consent, or social graph boundary is available.",
  },
  {
    title: "Reliable actions and accessibility",
    area: "UX",
    description:
      "No loading, empty, stale, error, retry, keyboard path, screen-reader label, add, accept, remove, hide, or audit behavior is tested.",
  },
];
export default function MutualFriends() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Mutual friends are unavailable locally. No account, friendship, request, profile, consent, visibility, notification, or social record was loaded or saved."
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
      `${action} is unavailable locally. No account, friendship, request, profile, consent, visibility, notification, block, or social-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="mutual-friends-title"
    >
      <div data-ui-polish="batch-196" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <HeartHandshake className="size-3.5" aria-hidden="true" />{" "}
                  Friendship-readiness workspace
                </Badge>
                <Badge variant="secondary">No friendship service</Badge>
              </div>
              <h1
                id="mutual-friends-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                MutualFriends readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review friendship provenance, consent, visibility, identity,
                requests, authorization, safety, discovery, notifications,
                accessibility, and recovery without implying that accounts,
                friendships, requests, or mutual friends exist.
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
                Mutual friends are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No friendship graph, account identity service, privacy and
                visibility controls, request endpoint, abuse-prevention layer,
                notification channel, or persistence layer is connected. This
                workspace cannot reveal, suggest, request, accept, remove, or
                claim a friendship.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <UsersRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No friendship records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No account, friendship edge, request, acceptance, source,
                timestamp, freshness, removal, or block state is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <UserRound
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No identity state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No viewer, target, profile, audience, consent, role, request
                permission, or mutual-friend state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No friendship actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No suggest, reveal, add, accept, decline, remove, block, report,
                notify, or social-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Friendship-governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              reads a profile, traverses a graph, reveals a mutual friend, sends
              a request, changes visibility, sends a notice, or saves social
              data.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search mutual friends readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter friendship requirements"
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
                  No friendship notes match “{query}”.
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
                Production friendship features require authoritative
                relationship provenance, consent and visibility controls,
                authenticated identity and request authorization, spam and abuse
                prevention, private discovery and transparent suggestions,
                notification controls, stale/error recovery, and auditable
                changes. No account, friendship, request, profile, consent,
                visibility, notification, or social record is claimed here.
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
