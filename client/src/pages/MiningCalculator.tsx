import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MiningCalculator() {
  return (
    <FeatureUnavailable
      title="Mining profitability calculator is not active"
      description="This route previously used hard-coded coin prices, block rewards, difficulty, hardware costs, and a simplified hashrate model to display daily profit, ROI, and breakeven projections. It is unavailable until market-data provenance, network difficulty, hardware assumptions, methodology, timestamping, and clear non-advisory disclosures are implemented."
      capability="Mining profitability and ROI estimation"
      nextStep="Review the launch readiness status"
    />
  );
}
