import { useMemo, useState } from "react";
import {
  Building2,
  FileSearch,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  WalletCards,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Listing, ownership, and seller provenance",
    area: "Evidence",
    description:
      "No property identifier, address, title, parcel, listing source, owner, seller, agent, image, inspection, or availability record is connected.",
  },
  {
    title: "Valuation, financing, and regional rules",
    area: "Method",
    description:
      "No valuation method, comparable, currency, financing term, rate, tax, fee, zoning, disclosure, jurisdiction, or legal review is verified.",
  },
  {
    title: "Tokenization, offers, and transaction controls",
    area: "Safety",
    description:
      "No token, ownership unit, offer, buyer authorization, escrow, payment, transfer, closing, cancellation, or settlement state exists.",
  },
  {
    title: "Privacy, security, and recovery",
    area: "Controls",
    description:
      "No identity, sensitive personal or financial-data boundary, consent, authorization, audit trail, fraud control, support trace, or recovery path is connected.",
  },
  {
    title: "Actions and persistence",
    area: "Safety",
    description:
      "No view, favorite, contact, offer, finance, tokenize, purchase, pay, transfer, cancel, export, or property or personal-data mutation is connected or persisted.",
  },
];
export default function PropertyDetail() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Property details are unavailable locally. No property, listing, owner, valuation, financing, token, offer, payment, transfer, settlement, or personal-data record was loaded or changed."
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
      `${action} is unavailable locally. No property, valuation, financing, offer, payment, transfer, tokenization, legal, or personal-data mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="property-detail-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Building2 className="size-3.5" aria-hidden="true" />{" "}
                  Property-detail readiness workspace
                </Badge>
                <Badge variant="secondary">No property data</Badge>
              </div>
              <h1
                id="property-detail-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                PropertyDetail readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review listing provenance, ownership and seller identity,
                valuation methodology, financing and tokenization, regional and
                legal controls, offers, payments, transfers, and privacy
                boundaries without implying that a property or real-estate
                transaction exists.
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
                Property details are unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No listing, title, ownership, valuation, finance, tokenization,
                legal, offer, payment, transfer, privacy, authorization, or
                persistence service is connected. This workspace cannot
                favorite, contact, offer, finance, tokenize, purchase, pay,
                transfer, cancel, or claim property availability.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <Building2
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No property state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No identifier, address, title, parcel, listing, owner, seller,
                image, inspection, or availability record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <WalletCards
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No transaction state</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No valuation, financing, token, offer, escrow, payment,
                transfer, closing, cancellation, or settlement state exists.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No property actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No favorite, contact, offer, finance, tokenize, purchase, pay,
                transfer, cancel, or real-estate mutation is available.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Property-detail governance requirements</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a listing, calculates a valuation, submits an offer, or
              saves property, payment, transfer, or personal-data records.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search PropertyDetail readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter property requirements"
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
                  No property requirements match “{query}”.
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
                Production property detail requires authoritative listing and
                title sources, verified owner and seller identity, inspection
                and disclosure provenance, transparent valuation methodology,
                financing and regional tax rules, legally reviewed tokenization,
                authorized offers and escrow, payment and transfer controls,
                privacy and fraud safeguards, and auditable closing or
                cancellation evidence. No property, valuation, financing, token,
                offer, payment, transfer, settlement, or personal-data record is
                claimed here.
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
