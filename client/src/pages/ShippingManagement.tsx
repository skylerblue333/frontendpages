import { useMemo, useState } from "react";
import {
  Box,
  Check,
  ClipboardList,
  FileText,
  Globe2,
  LockKeyhole,
  MapPin,
  PackageCheck,
  RefreshCw,
  Search,
  Settings2,
  ShieldAlert,
  Truck,
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
const records = [
  {
    id: 1,
    name: "Marketplace order concept",
    state: "No order source",
    detail:
      "Requires order ownership, fulfillment state, inventory reservation, address validation, carrier, rate, label, tracking, and audit.",
  },
  {
    id: 2,
    name: "Creator shipment concept",
    state: "Preview",
    detail:
      "Requires seller authorization, package dimensions, customs, insurance, delivery estimate, returns, and dispute handling.",
  },
  {
    id: 3,
    name: "Education material concept",
    state: "Unconfigured",
    detail:
      "Requires learner address, consent, inventory, carrier contract, delivery confirmation, and privacy controls.",
  },
  {
    id: 4,
    name: "Test fulfillment concept",
    state: "Test-only",
    detail:
      "A test concept cannot prove a purchased label, tracking event, delivery, inventory, or customer outcome.",
  },
];
export default function ShippingManagement() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(1);
  const [carrier, setCarrier] = useState("Carrier not configured");
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const filtered = useMemo(
    () =>
      records.filter(item =>
        `${item.name} ${item.state} ${item.detail}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );
  const record = records.find(item => item.id === selected) ?? records[0];
  const reset = () => {
    setQuery("");
    setSelected(1);
    setCarrier("Carrier not configured");
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div className="min-h-screen bg-[#070a16] text-white">
      <ScreenHero
        icon={Truck}
        eyebrow="Shipping management · Fulfillment preview"
        title="Design fulfillment states without claiming a shipment exists."
        description="Explore a local shipping workspace with order concepts, carrier and package intent, address and rate states, tracking and label gates, search, save/reset, and blocked carrier actions. No order, inventory, address, carrier, rate, label, tracking, delivery, charge, or customer outcome is connected."
        badge="Evidence-bounded logistics workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save shipping view"}
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
            {showGates ? "Close gates" : "Review fulfillment gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset view
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Orders",
              value: `${records.length} local`,
              hint: "No order source",
              icon: ClipboardList,
              tone: "cyan",
            },
            {
              label: "Carrier",
              value: "Unconfigured",
              hint: "No provider",
              icon: Truck,
              tone: "violet",
            },
            {
              label: "Labels",
              value: "Unavailable",
              hint: "No rate source",
              icon: FileText,
              tone: "amber",
            },
            {
              label: "Delivery",
              value: "Unknown",
              hint: "No tracking source",
              icon: PackageCheck,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Fulfillment evidence boundary">
          <strong>
            This is a local shipping-management design preview, not evidence
            that an order, address, package, carrier, rate, label, tracking
            event, delivery, charge, or customer outcome exists.
          </strong>{" "}
          Order cards, search, carrier selectors, package fields, saved state,
          and disabled purchase/label/tracking actions are browser concepts. No
          order, inventory, personal address, carrier contract, shipping price,
          label purchase, tracking number, delivery confirmation, refund, or
          operational claim is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
              <label className="text-sm font-semibold text-slate-300">
                <span className="flex items-center gap-2">
                  <Search className="size-4 text-slate-500" />
                  Search fulfillment concepts
                </span>
                <input
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search orders, labels, carriers..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                />
              </label>
              <label className="text-sm font-semibold text-slate-300">
                Carrier intent
                <select
                  value={carrier}
                  onChange={event => setCarrier(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
                >
                  <option>Carrier not configured</option>
                  <option>Local carrier intent</option>
                  <option>Postal carrier intent</option>
                  <option>Express carrier intent</option>
                  <option>Test carrier intent</option>
                </select>
              </label>
            </div>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Fulfillment concepts
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {filtered.length} local record{filtered.length === 1 ? "" : "s"}
              </h2>
              <div className="mt-6 space-y-3">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item.id)}
                    className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? "border-cyan-300/40 bg-cyan-300/[0.06]" : "border-white/10"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
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
                    Selected fulfillment concept
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{record.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  {record.state}
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {record.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Order", value: "Unavailable" },
                  { label: "Address", value: "Not loaded" },
                  { label: "Package", value: "Not configured" },
                  { label: "Carrier", value: carrier },
                  { label: "Rate", value: "Unavailable" },
                  { label: "Tracking", value: "No feed" },
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
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Order ownership", icon: ClipboardList },
                  { label: "Address validation", icon: MapPin },
                  { label: "Carrier API", icon: Globe2 },
                  { label: "Package details", icon: Box },
                  { label: "Label purchase", icon: FileText },
                  { label: "Delivery proof", icon: PackageCheck },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 p-4"
                  >
                    <Icon className="size-5 text-cyan-300" />
                    <p className="mt-3 text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-amber-200">Unavailable</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <Truck className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No shipping evidence loaded
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect order ownership, inventory, address validation,
                  package dimensions, carrier credentials, rates, label
                  purchase, tracking, delivery confirmation, returns, refunds,
                  privacy, and audit before fulfillment.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  Get rate unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Buy label unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Track shipment unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Create return unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  <Settings2 className="mr-2 size-4" />
                  Carrier settings unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No shipment or delivery claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A fulfillment concept does not prove an order, address,
                    package, carrier, rate, label, tracking event, delivery,
                    charge, return, refund, or customer outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Fulfillment-governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real shipping surface must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated order, seller, buyer, tenant, inventory, address, package, carrier, rate, label, tracking, refund, and return contracts",
                "Carrier credentials, rate source, currency, taxes, customs, insurance, delivery estimate, service level, label purchase, and webhook provenance",
                "Personal address, payment, order, seller, learner, customer, logistics, delivery, refund, and user-impact claims require privacy and operational evidence",
                "Marketplace, creator, education, financial, wallet, crypto, NFT, AI, and security fulfillment claims require separate domain evidence",
                "Get rate, buy label, track, return, refund, export, accessibility, confirmation, retry, and accountable approval require governed logistics operations",
                "A shipping preview must not be presented as an order, label, tracking event, delivered shipment, refund, or customer outcome without evidence",
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
              title: "Shipping surface preserved",
              description:
                "Orders, carriers, addresses, packages, rates, labels, tracking, delivery, returns, refunds, settings, save/reset, and gates remain interactive.",
              icon: Truck,
              status: "Local fulfillment",
            },
            {
              title: "No logistics theater",
              description:
                "Orders, addresses, carriers, prices, labels, tracking, delivery, refunds, and customer outcomes are not fabricated.",
              icon: ShieldAlert,
              status: "Guardrail",
            },
            {
              title: "Evidence before shipment",
              description:
                "Real fulfillment requires governed order, inventory, privacy, carrier, payment, label, tracking, delivery, return, and audit contracts.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
