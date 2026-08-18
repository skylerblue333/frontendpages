import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function PortfolioTracking() {
  return (
    <FeatureUnavailable
      title="Portfolio tracking is not active"
      description="Tracking is unavailable until account-scoped holdings, authoritative prices, performance history, alerts, tax lots, and reconciliation are connected. This route does not display simulated returns or execute a rebalance."
      capability="Portfolio tracking, performance, and alerts"
      nextStep="Review the launch readiness status"
    />
  );
}
