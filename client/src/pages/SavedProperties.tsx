import { useMemo, useState } from "react";
import {
  Bell,
  Check,
  Filter,
  Heart,
  LockKeyhole,
  MapPin,
  RefreshCw,
  ShieldAlert,
  Share2,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ScreenFeatureGrid,
  ScreenHero,
  ScreenPreviewBanner,
  ScreenStatGrid,
} from "@/components/ScreenExperience";
const properties = [
  {
    id: 1,
    name: "Urban residence concept",
    category: "Residential",
    detail:
      "A local saved-listing concept requiring verified source, address privacy, availability, price provenance, freshness, and responsible sharing.",
    state: "No listing source",
  },
  {
    id: 2,
    name: "Coastal property concept",
    category: "Residential",
    detail:
      "A watchlist concept requiring jurisdiction, ownership, listing agent, condition, valuation source, and inspection evidence.",
    state: "Unverified",
  },
  {
    id: 3,
    name: "Commercial workspace concept",
    category: "Commercial",
    detail:
      "A commercial property concept requiring lease terms, zoning, occupancy, fees, taxes, financing, and professional review.",
    state: "Needs evidence",
  },
  {
    id: 4,
    name: "Land parcel concept",
    category: "Land",
    detail:
      "A land concept requiring title, boundaries, easements, zoning, environmental review, access, and legal due diligence.",
    state: "Blocked",
  },
];
export default function SavedProperties() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(1);
  const [notes, setNotes] = useState("Notes not configured");
  const [alerts, setAlerts] = useState("Alert intent not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const categories = [
    "All",
    ...Array.from(new Set(properties.map(item => item.category))),
  ];
  const filtered = useMemo(
    () =>
      properties.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.name} ${item.category} ${item.detail}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const property =
    properties.find(item => item.id === selected) ?? properties[0];
  const reset = () => {
    setQuery("");
    setCategory("All");
    setSelected(1);
    setNotes("Notes not configured");
    setAlerts("Alert intent not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div data-ui-polish="batch-202" className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Heart}
        eyebrow="Saved properties · Watchlist preview"
        title="Save the listing concept without implying ownership."
        description="Explore local residential, commercial, and land watchlist concepts with search, category filters, notes and alert intent, privacy and sharing gates, save/reset, and blocked listing actions. No property, address, owner, listing, price, availability, valuation, financing, or transaction is connected."
        badge="Property-watchlist workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save watchlist locally"}
          </Button>
          <Button
            onClick={() => setShowGates(value => !value)}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            {showGates ? (
              <X className="mr-2 size-4" />
            ) : (
              <ShieldAlert className="mr-2 size-4" />
            )}
            {showGates ? "Close gates" : "Review property gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset watchlist
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Saved concepts",
              value: `${properties.length} local`,
              hint: "No listing source",
              icon: Heart,
              tone: "cyan",
            },
            {
              label: "Locations",
              value: "Unavailable",
              hint: "No address source",
              icon: MapPin,
              tone: "violet",
            },
            {
              label: "Alerts",
              value: "Unconfigured",
              hint: "No listing source",
              icon: Bell,
              tone: "amber",
            },
            {
              label: "Transactions",
              value: "Blocked",
              hint: "No property evidence",
              icon: ShieldAlert,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Property-watchlist evidence boundary">
          <strong>
            This is a local saved-property preview, not evidence that a listing,
            address, owner, price, availability, valuation, or transaction
            exists.
          </strong>{" "}
          Property cards, filters, notes and alert intent, saved state,
          privacy/sharing gates, and disabled listing actions are browser
          concepts. No address, owner, property, listing, price, availability,
          valuation, financing, legal title, tax, or purchase outcome is
          asserted.
        </ScreenPreviewBanner>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="relative">
                <Filter className="absolute left-3 top-3 size-4 text-slate-500" />
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search local saved properties"
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-3 text-sm text-white outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map(entry => (
                  <Button
                    key={entry}
                    onClick={() => setCategory(entry)}
                    size="sm"
                    variant="outline"
                    className={
                      category === entry
                        ? "border-cyan-300/40 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/10 text-slate-400"
                    }
                  >
                    {entry}
                  </Button>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-300/20 text-amber-200"
                      >
                        {item.state}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-slate-500"
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                    Selected watchlist concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{property.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {property.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {property.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Category", value: property.category },
                  { label: "Notes", value: notes },
                  { label: "Alerts", value: alerts },
                  { label: "Address", value: "Unavailable" },
                  { label: "Price", value: "Not claimed" },
                  { label: "Privacy", value: "Required" },
                ].map(item => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 p-3"
                  >
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-amber-200">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <label className="text-sm text-slate-400">
                  Notes intent
                  <select
                    value={notes}
                    onChange={event => setNotes(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Notes not configured</option>
                    <option>Private notes intent</option>
                    <option>Inspection notes intent</option>
                    <option>Agent conversation intent</option>
                    <option>Due-diligence notes intent</option>
                  </select>
                </label>
                <label className="text-sm text-slate-400">
                  Alert intent
                  <select
                    value={alerts}
                    onChange={event => setAlerts(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm text-white outline-none"
                  >
                    <option>Alert intent not configured</option>
                    <option>Availability intent</option>
                    <option>Price-change intent</option>
                    <option>Document-update intent</option>
                    <option>Review-reminder intent</option>
                  </select>
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Heart className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No property evidence loaded
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Connect governed listing source, address privacy, ownership,
                  freshness, agent, price, availability, title, zoning,
                  inspection, financing, tax, and legal review before making a
                  property decision.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Open listing unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  <Bell className="mr-2 size-4" />
                  Create alert unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  <Share2 className="mr-2 size-4" />
                  Share unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Remove unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No property or transaction claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A watchlist concept does not prove an address, owner,
                    property, listing, price, availability, valuation, title,
                    financing, tax, legal status, or purchase outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Property-watchlist gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real saved-property system must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated user, listing source, address, jurisdiction, owner/agent, timestamp, freshness, privacy, and change history",
                "Price, availability, valuation, condition, property type, lease/sale terms, fees, taxes, currency, and source reconciliation",
                "Title, boundaries, easements, zoning, environmental, inspection, financing, insurance, legal, and professional review",
                "Alerts, notifications, deduplication, stale listing handling, sharing, access, deletion, retention, export, and support",
                "Real-estate, tax, legal, financial, investment, crypto, mortgage, and user-impact claims require domain review",
                "Open, save, remove, alert, share, compare, export, contact, and transaction actions require governed data and accountable approval",
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 p-3"
                >
                  <LockKeyhole className="size-4 text-slate-500" />
                  <span className="flex-1 text-sm text-slate-300">{item}</span>
                  <span className="text-xs text-amber-200">Required</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <ScreenFeatureGrid
          features={[
            {
              title: "Property surface preserved",
              description:
                "Residential, commercial, land watchlists, filters, locations, notes, alerts, sharing, open, remove, compare, export, save/reset, and gates remain interactive.",
              icon: Heart,
              status: "Local watchlist",
            },
            {
              title: "No listing theater",
              description:
                "Addresses, owners, listings, prices, availability, valuations, titles, financing, taxes, legal status, and transactions are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Due diligence before decision",
              description:
                "Real property watchlists require governed listing sources, privacy, freshness, title, zoning, inspection, financing, tax, legal, and professional review.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
