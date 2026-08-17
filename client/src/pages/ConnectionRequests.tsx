import { useMemo, useState } from "react";
import {
  Check,
  CircleSlash2,
  Clock3,
  LockKeyhole,
  Plus,
  Send,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type RequestRelationship = "All" | "Peer" | "Mentor" | "Collaborator";
type RequestState = "All" | "Pending" | "Review" | "Unavailable";

type ConnectionRequest = {
  id: string;
  title: string;
  relationship: Exclude<RequestRelationship, "All">;
  state: Exclude<RequestState, "All">;
  summary: string;
  requester: string;
  recipient: string;
  consent: string;
  created: string;
  notification: string;
};

const requests: ConnectionRequest[] = [
  {
    id: "peer-request",
    title: "Peer connection concept",
    relationship: "Peer",
    state: "Review",
    summary:
      "A local request structure for a peer connection with mutual consent and privacy controls.",
    requester: "Requester identity unavailable",
    recipient: "Recipient identity unavailable",
    consent: "Consent state unavailable",
    created: "Created timestamp unavailable",
    notification: "Notification state unavailable",
  },
  {
    id: "mentor-request",
    title: "Mentor connection concept",
    relationship: "Mentor",
    state: "Pending",
    summary:
      "A planned request structure for mentorship with safeguarding, scope, and communication boundaries.",
    requester: "Requester identity unavailable",
    recipient: "Recipient identity unavailable",
    consent: "Consent state unavailable",
    created: "Created timestamp unavailable",
    notification: "Notification state unavailable",
  },
  {
    id: "collaborator-request",
    title: "Collaborator connection concept",
    relationship: "Collaborator",
    state: "Unavailable",
    summary:
      "A local concept for project collaboration pending verified identity, authorization, and abuse controls.",
    requester: "Requester identity unavailable",
    recipient: "Recipient identity unavailable",
    consent: "Consent state unavailable",
    created: "Created timestamp unavailable",
    notification: "Notification state unavailable",
  },
];

const relationships: RequestRelationship[] = [
  "All",
  "Peer",
  "Mentor",
  "Collaborator",
];
const states: RequestState[] = ["All", "Review", "Pending", "Unavailable"];

export default function ConnectionRequests() {
  const [relationship, setRelationship] = useState<RequestRelationship>("All");
  const [state, setState] = useState<RequestState>("All");
  const [selectedId, setSelectedId] = useState(requests[0].id);
  const [status, setStatus] = useState(
    "Connection service unavailable. Showing local request concepts only."
  );

  const filtered = useMemo(
    () =>
      requests.filter(
        request =>
          (relationship === "All" || request.relationship === relationship) &&
          (state === "All" || request.state === state)
      ),
    [relationship, state]
  );
  const selected =
    filtered.find(request => request.id === selectedId) ??
    filtered[0] ??
    requests[0];

  const blocked = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No identity, consent, relationship, notification, or social-graph request was started.`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={UserRound}
        title="Connection requests"
        subtitle="Review local connection concepts without fabricated identities, consent, relationships, or notification states."
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <p>
            <strong>Connection service unavailable.</strong> No verified
            identity directory, consent service, notification channel, or social
            graph is connected.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Connection service remains unavailable. Local fixtures were reset."
              )
            }
            size="sm"
            variant="outline"
          >
            Reset requests
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Request preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review connection concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures show workflow structure only. They
                  do not represent real people, pending requests, mutual
                  relationships, or delivered notifications.
                </p>
              </div>
              <Send className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Connection relationship filter"
            >
              {relationships.map(item => (
                <Button
                  aria-pressed={relationship === item}
                  key={item}
                  onClick={() => setRelationship(item)}
                  size="sm"
                  variant={relationship === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div
              className="mt-3 flex flex-wrap gap-2"
              role="group"
              aria-label="Connection request state filter"
            >
              {states.map(item => (
                <Button
                  aria-pressed={state === item}
                  key={item}
                  onClick={() => setState(item)}
                  size="sm"
                  variant={state === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {filtered.map(request => (
                <button
                  aria-pressed={selected.id === request.id}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === request.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                  key={request.id}
                  onClick={() => setSelectedId(request.id)}
                  type="button"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{request.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {request.state}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-cyan-200">
                    {request.relationship}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {request.summary}
                  </p>
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400">
                  No local connection fixtures match these filters.
                </p>
              )}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected request
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">
                {selected.relationship} · {selected.state}
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  ["Requester", selected.requester],
                  ["Recipient", selected.recipient],
                  ["Consent", selected.consent],
                  ["Created", selected.created],
                  ["Notification", selected.notification],
                ].map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                No identity, message, mutual relationship, consent, timestamp,
                notification, or request outcome is available.
              </p>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Accept request")}
                  variant="outline"
                >
                  <Check className="mr-2 h-4 w-4" /> Accept unavailable
                </Button>
                <Button
                  onClick={() => blocked("Decline request")}
                  variant="outline"
                >
                  <X className="mr-2 h-4 w-4" /> Decline unavailable
                </Button>
                <Button
                  onClick={() => blocked("Create request")}
                  variant="outline"
                >
                  <Plus className="mr-2 h-4 w-4" /> Create unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Connection workflows require verified identities, mutual
                  consent, privacy controls, anti-abuse safeguards, and
                  authorized notifications.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-200" />
                <p className="text-sm leading-6 text-slate-400">
                  State transitions must be auditable, reversible where
                  appropriate, and isolated from fabricated social graph data.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Clock3 className="h-5 w-5 text-violet-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No request timestamp, expiration, delivery receipt, or
                  reminder operation is available.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
