import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ProductDetail() {
  return (
    <FeatureUnavailable
      title="Product details are not active"
      description="This route currently exposes an authenticated shell without verified product or commerce data. It remains unavailable until catalog provenance, seller authorization, inventory, pricing and currency, reviews and ratings, checkout, payment, fulfillment, cancellation, refunds, and privacy controls are implemented and tested."
      capability="Product detail, reviews, and commerce checkout"
      nextStep="Review the launch readiness status"
    />
  );
}
