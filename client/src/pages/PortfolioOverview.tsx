import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PortfolioOverview() {
  return (
    <FeatureUnavailable
      title="Portfolio overview is not active"
      description="This route currently exposes an authenticated shell without verified portfolio holdings or market data. It remains unavailable until wallet or broker connectivity, price provenance, valuation calculations, account authorization, reconciliation, and tested stale-data/error handling are implemented."
      capability="Portfolio holdings, valuation, and performance overview"
      nextStep="Review the launch readiness status"
    />
  );
}
