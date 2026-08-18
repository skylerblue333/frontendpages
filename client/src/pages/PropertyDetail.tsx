import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PropertyDetail() {
  return (
    <FeatureUnavailable
      title="Property details are not active"
      description="This route currently exposes an authenticated shell without verified property or real-estate data. It remains unavailable until listing provenance, ownership and seller identity, valuation methodology, financing or tokenization rules, regional and legal controls, offers, payments, transfers, and privacy protections are implemented and tested."
      capability="Property listing detail, valuation, and transaction workflows"
      nextStep="Review the launch readiness status"
    />
  );
}
