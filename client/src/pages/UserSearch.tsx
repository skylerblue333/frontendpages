import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  FileSearch,
  Filter,
  LockKeyhole,
  RefreshCw,
  Search,
  ShieldAlert,
  UserRound,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "User-search service unavailable locally. No directory query or profile results are loaded."
  );
  const review = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(
      query.trim()
        ? `Search intent reviewed locally for “${query.trim()}”. No directory query, identity lookup, or result ranking was run.`
        : "Enter a local search example. No directory query was run."
    );
  };
  const blocked = (action: string) =>
    setStatus(
      `${action} unavailable locally. No user search, profile lookup, pagination, privacy, or moderation mutation was started.`
    );
  return (
    <div data-ui-polish="batch-204" className="min-h-screen bg-background">
      <PageHeader
        icon={Search}
        title="User search"
        subtitle="Review people-search readiness without fabricating identities, results, relevance, indexing, pagination, privacy, moderation, or account outcomes."
      />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section
          aria-label="User search unavailable"
          className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100"
        >
          <p>
            <strong>User-search service unavailable.</strong> No authenticated
            search scope, user directory, index, privacy policy, moderation
            filter, relevance model, or rate-limit service is connected.
          </p>
          <Button
            onClick={() => blocked("Refresh search")}
            size="sm"
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh unavailable
          </Button>
        </section>
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Search preview
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Review a local query intent
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  This form demonstrates labeling and local status feedback
                  only. It does not send a query, reveal a person, rank a
                  result, infer identity, or expose private profile information.
                </p>
              </div>
              <Search
                className="hidden h-7 w-7 text-cyan-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <form onSubmit={review} className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-200">
                Example user search
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  maxLength={80}
                  placeholder="Search intent only"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none focus:border-cyan-300"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <Button
                  type="submit"
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  Review locally
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setStatus(
                      "Search preview reset locally. No directory query was run."
                    );
                  }}
                  variant="outline"
                >
                  Clear
                </Button>
              </div>
            </form>
            <p
              aria-live="polite"
              className="mt-5 rounded-lg border border-slate-800 p-3 text-sm text-slate-400"
            >
              {status}
            </p>
          </Card>
          <aside className="space-y-6">
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Search readiness gates
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Results stay withheld
              </h2>
              <dl className="mt-5 grid gap-2">
                {[
                  ["Query", "Local intent only"],
                  ["Directory", "Index unavailable"],
                  ["Identity", "Not resolved"],
                  ["Relevance", "Model unavailable"],
                  ["Pagination", "Not available"],
                  ["Privacy", "Policy unavailable"],
                  ["Moderation", "Filter unavailable"],
                  ["Rate limit", "Policy unavailable"],
                  ["Results", "No results loaded"],
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
            </Card>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole
                  className="h-5 w-5 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-400">
                  A production user search requires authenticated scope,
                  privacy-safe indexing, exact identity binding, relevance and
                  duplicate rules, pagination, abuse and rate controls,
                  blocked-user handling, moderation, auditability, and safe
                  redaction. Search must not reveal sensitive profile data or
                  imply a result is verified.
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 p-3">
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Input local</p>
                  <p className="mt-1 text-xs text-slate-500">No query sent.</p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <XCircle
                    className="h-5 w-5 text-amber-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Results blocked</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No identity lookup.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <FileSearch
                    className="h-5 w-5 text-violet-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">Index absent</p>
                  <p className="mt-1 text-xs text-slate-500">
                    No directory source.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 p-3">
                  <Filter
                    className="h-5 w-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm font-medium">
                    Privacy filter absent
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    No profile inference.
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </section>
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <ShieldAlert className="h-4 w-4 text-amber-300" aria-hidden="true" />
          <strong className="text-amber-100">
            No user result, identity, relevance rank, profile data, privacy
            state, moderation decision, or search outcome is claimed as real.
          </strong>
        </p>
      </main>
    </div>
  );
}
