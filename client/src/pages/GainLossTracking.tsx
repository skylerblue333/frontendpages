import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GainLossTracking() {
  return (
    <FeatureUnavailable
      title="Gain/loss tracking is not active"
      description="Gain and loss reporting is unavailable until verified account-scoped holdings, transaction history, cost-basis rules, market-price provenance, corporate actions, tax methodology, currency handling, privacy controls, and report reconciliation are implemented and tested."
      capability="Portfolio gain/loss, cost basis, and tax reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
