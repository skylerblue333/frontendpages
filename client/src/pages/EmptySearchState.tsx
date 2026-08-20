import { useState } from "react";
import {
  CheckCircle2,
  Filter,
  Search,
  ShieldCheck,
  Sparkles,
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

export default function EmptySearchState() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "No search provider is connected. This is a local empty-state preview; no results were queried or fabricated."
  );
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No search provider was queried and no result was fabricated.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="empty-search-title"
    >
      <div data-ui-polish="batch-187" className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Search className="size-3.5" aria-hidden="true" />
                  Search state
                </Badge>
                <Badge variant="secondary">No provider</Badge>
              </div>
              <h1
                id="empty-search-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Empty search state
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                A truthful, accessible empty state for when a connected search
                returns no matches—without inventing results, query data,
                loading status, or backend behavior.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Search provider is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No index, query service, permissions, filters, result count,
                relevance score, or pagination state is connected. The empty
                state below is a local preview only.
              </p>
            </div>
          </div>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Local empty-state preview</CardTitle>
            <CardDescription>
              Enter a query to review accessible feedback. It does not call a
              provider, persist a search, or create a result.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <label htmlFor="empty-search-query" className="text-sm font-medium">
              Search query
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Input
                id="empty-search-query"
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setStatus(
                    "Local query intent updated. No search provider was queried."
                  );
                }}
                placeholder="Try a local query"
              />
              <Button
                type="button"
                onClick={() => unavailable("Search request")}
              >
                <Search className="mr-2 size-4" aria-hidden="true" />
                Search unavailable
              </Button>
            </div>
            <div
              className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary/70">
                <Sparkles className="size-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-lg font-semibold">
                No results to display
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                {query.trim()
                  ? `No connected search results match “${query.trim()}”.`
                  : "Start with a query when a search provider becomes available."}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => unavailable("Filter search")}
                >
                  <Filter className="mr-2 size-4" aria-hidden="true" />
                  Filters unavailable
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setQuery("");
                    setStatus(
                      "Local query cleared. No search provider was queried."
                    );
                  }}
                >
                  Clear query
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => unavailable("Search retry")}
                >
                  Retry unavailable
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 p-5">
            <Search className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Truthful results</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              No result cards, counts, scores, or recommendations are
              fabricated.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <Filter className="mb-3 size-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Safe controls</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Filter, retry, and clear controls disclose their unavailable or
              local-only behavior.
            </p>
          </div>
          <div className="rounded-xl border border-border/70 p-5">
            <CheckCircle2
              className="mb-3 size-5 text-emerald-500"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Activation evidence</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Provider contracts, permissions, loading, error, pagination, and
              analytics remain required.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
