import FeatureUnavailable from "@/components/FeatureUnavailable";

const Marketplace = () => (
  <FeatureUnavailable
    title="Marketplace wave preview"
    description="Listing creation and order creation are intentionally held at a truthful release boundary until authenticated seller identity, catalog, inventory, payment, order, fulfillment, refund, dispute, and audit services are connected."
    capability="Marketplace listing and order evidence"
    nextStep="Return to the launch hub"
  />
);

export default Marketplace;
