import { useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  History,
  LockKeyhole,
  RefreshCw,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type TermsState = "Not configured" | "Review intent" | "Unavailable";
type TermsConcept = {
  id: string;
  title: string;
  state: TermsState;
  summary: string;
};

const concepts: readonly TermsConcept[] = [
  {
    id: "platform",
    title: "Platform terms review",
    state: "Review intent",
    summary:
      "A local agreement concept pending approved text, version identity, jurisdiction, notice delivery, user identity, and auditable acceptance.",
  },
  {
    id: "privacy",
    title: "Privacy notice review",
    state: "Unavailable",
    summary:
      "A local notice concept pending data inventory, lawful basis, retention, rights handling, localization, and consent or notice evidence.",
  },
  {
    id: "financial",
    title: "Financial-risk disclosure review",
    state: "Not configured",
    summary:
      "A local disclosure concept pending product scope, risk language, jurisdiction review, user notice, and controlled publication.",
  },
];

export default function TermsAcceptance() {
  const [selectedId, setSelectedId] = useState(concepts[0].id);
  const [status, setStatus] = useState(
    "Terms service unavailable locally. Showing review concepts only."
  );
  const selected = concepts.find(item => item.id === selectedId) ?? concepts[0];
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No agreement, consent, identity, notice, audit, publication, or withdrawal mutation was started.`
    );

  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={FileCheck2}
        title="Terms acceptance"
        subtitle="Review agreement and notice requirements without claiming that a person accepted, consented, withdrew, or became bound."
      />
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section
          aria-label="Terms service unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>Terms acceptance service unavailable.</strong> No approved
            document, version, jurisdiction, effective date, user identity,
            notice delivery, consent record, withdrawal record, or immutable
            audit source is connected. No agreement is accepted by this preview.
          </p>
          <Button
            onClick={() =>
              setStatus(
                "Terms concepts remain local. No acceptance state was changed."
              )
            }
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reset view
          </Button>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Terms-review preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review agreement concepts
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  These typed local fixtures do not represent approved legal
                  text, a current version, a delivered notice, a user’s consent,
                  a binding agreement, a withdrawal, or legal compliance.
                </p>
              </div>
              <ShieldAlert className="hidden h-7 w-7 text-cyan-200 sm:block" />
            </div>
            <div className="mt-6 space-y-3">
              {concepts.map(concept => (
                <button
                  key={concept.id}
                  type="button"
                  aria-pressed={selected.id === concept.id}
                  onClick={() => setSelectedId(concept.id)}
                  className={`w-full rounded-xl border p-5 text-left transition-colors ${selected.id === concept.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-700"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium">{concept.title}</p>
                    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-400">
                      {concept.state}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {concept.summary}
                  </p>
                </button>
              ))}
              <p
                aria-live="polite"
                className="rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
              >
                {status}
              </p>
            </div>
          </Card>

          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected agreement concept
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.title}</h2>
              <p className="mt-1 text-sm text-cyan-200">{selected.state}</p>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Document version", "Version identifier unavailable"],
                  ["Effective date", "Effective date unavailable"],
                  ["Jurisdiction", "Jurisdiction review unavailable"],
                  ["Notice delivery", "Delivery evidence unavailable"],
                  ["Identity", "User identity unavailable"],
                  ["Consent record", "Consent record unavailable"],
                  ["Withdrawal", "Withdrawal record unavailable"],
                  ["Audit history", "Immutable audit source unavailable"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-slate-800 p-3"
                  >
                    <dt className="text-xs text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Accept terms")}
                  variant="outline"
                >
                  Accept unavailable
                </Button>
                <Button
                  onClick={() => blocked("Withdraw consent")}
                  variant="outline"
                >
                  Withdraw unavailable
                </Button>
                <Button
                  onClick={() => blocked("Publish notice")}
                  variant="outline"
                >
                  Publish unavailable
                </Button>
              </div>
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production agreement workflow requires approved text,
                  version integrity, jurisdiction review, accessible notice
                  delivery, authenticated identity, explicit consent, withdrawal
                  handling, retention limits, auditability, and legal review
                  before binding or publishing anything.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Text required</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No approved document loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Binding blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No acceptance authority connected.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <UserRound
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Identity unavailable
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No user record loaded.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <History
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Audit unavailable</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No immutable consent history.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
