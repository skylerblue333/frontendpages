import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PortfolioOptimization() {
  return (
    <FeatureUnavailable
      title="Portfolio optimization is not active"
      description="Optimization is unavailable until verified holdings, market data, risk methodology, user suitability controls, calculation provenance, authorization, and tested failure handling are implemented. This route does not provide investment advice or claim an optimized allocation."
      capability="Portfolio optimization and allocation analysis"
      nextStep="Review the launch readiness status"
    />
  );
}
