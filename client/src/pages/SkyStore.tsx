import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SkyStore() {
  return (
    <FeatureUnavailable
      title="SkyStore is not active"
      description="This route previously displayed placeholder product imagery, hard-coded prices, stock, customer reviews, cart totals, and checkout actions. It remains unavailable until a verified catalog and inventory source, product media, authenticated cart persistence, tax and shipping rules, payment provider, order lifecycle, fulfillment ownership, refund handling, and customer-support evidence are connected."
      capability="Product catalog, cart, checkout, payment, and fulfillment"
      nextStep="Review the launch readiness status"
    />
  );
}
