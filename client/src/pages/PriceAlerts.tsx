import { useMemo, useState } from "react";
import {
  BellRing,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Instrument, market, and price provenance",
    area: "Data",
    description:
      "No account, instrument, symbol, venue, market, currency, price source, observation time, or quote freshness is connected.",
  },
  {
    title: "Threshold, unit, and trigger semantics",
    area: "Method",
    description:
      "No alert target, threshold, comparison operator, unit, timezone, trading session, hysteresis, duplicate guard, or trigger definition is verified.",
  },
  {
    title: "Delivery, consent, and authorization",
    area: "Controls",
    description:
      "No recipient, channel, consent, notification preference, role, rate limit, quiet hour, delivery provider, or authorization state exists.",
  },
  {
    title: "Privacy, reliability, and auditability",
    area: "Safety",
    description:
      "No sensitive financial-data boundary, stale-data rule, failed-delivery retry, correction, suppression, audit event, or support trace is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No connect, create, enable, disable, edit, test, delete, export, or alert or financial-data mutation is connected or persisted.",
  },
];
export default function PriceAlerts() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Price alerts are unavailable locally. No instrument, quote, price, threshold, recipient, channel, consent, trigger, delivery, or alert record was loaded or saved."
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
      `${action} is unavailable locally. No instrument, quote, price, threshold, recipient, delivery, privacy, or alert mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="price-alerts-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <BellRing className="size-3.5" aria-hidden="true" />{" "}
                  Price-alert readiness workspace
                </Badge>
                <Badge variant="secondary">No alert data</Badge>
              </div>
              <h1
                id="price-alerts-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PriceAlerts readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review instrument and market-data provenance, threshold and
                trigger semantics, delivery and consent, privacy, reliability,
                authorization, and alert-action boundaries without implying that
                prices, quotes, triggers, recipients, notifications, or
                financial records exist.
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
                Price alerts are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No market-data provider, quote stream, alert engine,
                notification service, consent manager, authorization control, or
                persistence layer is connected. This workspace cannot connect,
                create, enable, disable, edit, test, delete, export, or claim
                price-alert activity.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BellRing
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No alert data</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No instrument, symbol, market, venue, currency, price, quote,
                threshold, recipient, channel, or alert record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <SlidersHorizontal
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No trigger state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No observation time, freshness, comparison, unit, timezone,
                session, trigger, delivery, consent, or authorization state
                exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No alert actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No connect, create, enable, disable, edit, test, delete, export,
                or alert or financial-data mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Price-alert governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a quote, creates a trigger, sends a notification, or saves
              alert records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PriceAlerts readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter alert requirements"
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
                  No alert requirements match “{query}”.
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
                Production price alerts require authoritative instrument and
                quote provenance, timestamp and freshness controls, explicit
                threshold semantics, duplicate and hysteresis handling,
                recipient authorization, consent and privacy, delivery and
                retry, quiet hours, audit history, and clear financial-risk
                disclosures. No instrument, price, trigger, recipient, delivery,
                or alert record is claimed here.
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
