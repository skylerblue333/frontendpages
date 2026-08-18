import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function DeFi() {
  return (
    <FeatureUnavailable
      title="DeFi Hub is not active"
      description="This route previously displayed hard-coded protocols, TVL, APY, volume, risk ratings, liquidity pools, lending, bridge support, and an earning action as if on-chain infrastructure were available. It remains unavailable until verified chain and contract identity, provider and price provenance, wallet authorization, transaction simulation and status, slippage and MEV controls, custody boundaries, monitoring, reconciliation, and failure recovery are implemented and tested."
      capability="Decentralized exchange, lending, yield, bridge, and liquidity operations"
      nextStep="Review the launch readiness status"
    />
  );
}
