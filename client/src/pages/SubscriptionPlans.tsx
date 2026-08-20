import { useMemo, useState } from "react";
import {
  Check,
  CircleDollarSign,
  CreditCard,
  FileWarning,
  LockKeyhole,
  Package,
  Plus,
  RefreshCw,
  Search,
  ShoppingCart as CartIcon,
  ShieldAlert,
  Tag,
  Trash2,
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
const products = [
  {
    id: 1,
    name: "Creator bundle concept",
    category: "Creator",
    detail:
      "Requires catalog ownership, item metadata, inventory, price, tax, delivery, returns, and payment evidence.",
  },
  {
    id: 2,
    name: "Learning resource concept",
    category: "Education",
    detail:
      "Requires course access, learner entitlement, price, tax, accessibility, refund, and delivery rules.",
  },
  {
    id: 3,
    name: "Marketplace item concept",
    category: "Marketplace",
    detail:
      "Requires seller authorization, stock, currency, fulfillment, fees, dispute, and customer support.",
  },
  {
    id: 4,
    name: "Test item concept",
    category: "Test-only",
    detail:
      "A test concept cannot prove a product, price, inventory, payment, order, or customer outcome.",
  },
];
export default function ShoppingCart() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [saved, setSaved] = useState(false);
  const [showGates, setShowGates] = useState(false);
  const filtered = useMemo(
    () =>
      products.filter(item =>
        `${item.name} ${item.category} ${item.detail}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );
  const product = products.find(item => item.id === selected) ?? products[0];
  const reset = () => {
    setQuery("");
    setSelected(1);
    setQuantity(1);
    setCartCount(0);
    setSaved(false);
    setShowGates(false);
  };
  return (
    <div
      data-ui-polish="batch-204"
      className="min-h-screen bg-[#070a16] text-white"
    >
      <ScreenHero
        icon={CartIcon}
        eyebrow="Subscription plans · Catalog readiness preview"
        title="Review plan concepts without inventing pricing or eligibility."
        description="Explore a local plan-catalog workspace with plan concepts, feature eligibility, currency and price intent, consent, entitlement, billing provider, payment authorization, renewal, cancellation, privacy, support, save/reset, and blocked select, subscribe, charge, and export actions. No plan, price, currency, eligibility, subscriber, charge, entitlement, renewal, refund, payout, revenue, or customer outcome is connected."
        badge="Evidence-bounded subscription-plans workspace"
      >
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setSaved(true)}
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
          >
            <Check className="mr-2 size-4" />
            {saved ? "Saved locally" : "Save cart locally"}
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
            {showGates ? "Close gates" : "Review plan gates"}
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 size-4" />
            Reset plan catalog
          </Button>
        </div>
      </ScreenHero>
      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <ScreenStatGrid
          items={[
            {
              label: "Items",
              value: `${cartCount} local`,
              hint: "No catalog source",
              icon: CartIcon,
              tone: "cyan",
            },
            {
              label: "Inventory",
              value: "Unavailable",
              hint: "No stock source",
              icon: Package,
              tone: "violet",
            },
            {
              label: "Subtotal",
              value: "Unavailable",
              hint: "No price source",
              icon: CircleDollarSign,
              tone: "amber",
            },
            {
              label: "Checkout",
              value: "Blocked",
              hint: "No payment source",
              icon: CreditCard,
              tone: "slate",
            },
          ]}
        />
        <ScreenPreviewBanner title="Subscription-plans evidence boundary">
          <strong>
            This is a local subscription-plans preview, not evidence that any
            product, inventory, price, tax, shipping rate, payment, order,
            fulfillment, refund, or customer outcome exists.
          </strong>{" "}
          Plan concepts, local selection, saved state, eligibility intent, and
          disabled billing actions are browser concepts. No plan, price,
          currency, eligibility, subscriber identity, consent, payment
          authorization, charge, entitlement, renewal, cancellation, refund,
          tax, payout, revenue, or financial claim is asserted.
        </ScreenPreviewBanner>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <label className="text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2">
                <Search className="size-4 text-slate-500" />
                Search product concepts
              </span>
              <input
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search creator, education, marketplace..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-normal text-white outline-none"
              />
            </label>
          </CardContent>
        </Card>
        <section className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                Product concepts
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {filtered.length} local item{filtered.length === 1 ? "" : "s"}
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
                        No product source
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
                    Selected item
                  </p>
                  <h2 className="mt-2 text-2xl font-black">{product.name}</h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-amber-300/20 text-amber-200"
                >
                  Preview
                </Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {product.detail}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Price", value: "Unavailable" },
                  { label: "Currency", value: "Unconfigured" },
                  { label: "Inventory", value: "Unavailable" },
                  { label: "Tax", value: "Unavailable" },
                  { label: "Shipping", value: "Unavailable" },
                  { label: "Seller", value: "Unverified" },
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
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 p-4">
                <span className="text-sm font-semibold">Quantity intent</span>
                <Button
                  onClick={() => setQuantity(value => Math.max(1, value - 1))}
                  size="icon"
                  variant="outline"
                  className="border-white/10 text-slate-300"
                >
                  −
                </Button>
                <span className="min-w-8 text-center font-black">
                  {quantity}
                </span>
                <Button
                  onClick={() => setQuantity(value => value + 1)}
                  size="icon"
                  variant="outline"
                  className="border-white/10 text-slate-300"
                >
                  <Plus className="size-4" />
                </Button>
                <Button
                  onClick={() => setCartCount(value => value + quantity)}
                  className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                >
                  <CartIcon className="mr-2 size-4" />
                  Add locally
                </Button>
                <Button
                  onClick={() => setCartCount(0)}
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  <Trash2 className="mr-2 size-4" />
                  Clear local cart
                </Button>
              </div>
              <div className="mt-6 rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <CartIcon className="mx-auto size-8 text-slate-600" />
                <p className="mt-3 font-semibold">
                  No plan-catalog evidence loaded
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect catalog, product ownership, inventory, currency,
                  price, tax, shipping, payment, order, fulfillment, returns,
                  refunds, privacy, and audit before checkout.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button disabled className="bg-slate-700 text-slate-400">
                  <CreditCard className="mr-2 size-4" />
                  Checkout unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Apply coupon unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Estimate tax unavailable
                </Button>
                <Button
                  disabled
                  variant="outline"
                  className="border-white/10 text-slate-500"
                >
                  Place order unavailable
                </Button>
              </div>
              {showGates && (
                <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/[0.06] p-4">
                  <p className="font-semibold text-amber-100">
                    No purchase or financial claim
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    A local cart does not prove a product, stock, price,
                    currency, tax, shipping, payment authorization, order,
                    fulfillment, refund, or customer outcome.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
        <Card className="border-white/10 bg-white/[0.04]">
          <CardContent className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Subscription-plans governance gates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              What a real plan catalog must prove
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Authenticated catalog, product, seller, buyer, tenant, inventory, price, currency, tax, shipping, coupon, payment, order, and entitlement contracts",
                "Stock reservation, concurrency, price freshness, taxes, fees, payment authorization, idempotency, fraud controls, checkout confirmation, and reconciliation",
                "Product, marketplace, creator, education, crypto, NFT, financial, payment, tax, shipping, refund, and customer-outcome claims require domain evidence",
                "Personal data, payment data, address, order, learner, seller, buyer, delivery, refund, and support claims require privacy and operational controls",
                "Add, remove, checkout, coupon, tax, order, refund, accessibility, confirmation, retry, and accountable approval require governed commerce operations",
                "A cart preview must not be presented as product availability, price, payment authorization, order placement, delivery, refund, or financial result without evidence",
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
              title: "Subscription-plans surface preserved",
              description:
                "Product search, categories, quantity, local cart, inventory, price, tax, shipping, coupons, checkout, order, save/reset, and gates remain interactive.",
              icon: CartIcon,
              status: "Local commerce",
            },
            {
              title: "No pricing theater",
              description:
                "Catalog, stock, price, payment, order, fulfillment, refund, delivery, and customer outcomes are not fabricated.",
              icon: FileWarning,
              status: "Guardrail",
            },
            {
              title: "Evidence before plan selection",
              description:
                "Real commerce requires governed catalog, inventory, pricing, taxes, payment, order, fulfillment, refunds, privacy, and reconciliation.",
              icon: LockKeyhole,
              status: "Blocked",
            },
          ]}
        />
      </main>
    </div>
  );
}
