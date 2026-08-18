import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function TokenGovernance() {
  return (
    <FeatureUnavailable
      title="Token governance is not active"
      description="This route previously displayed fabricated proposals, vote counts, passed and failed outcomes, voter totals, treasury balances and values, staking APY, platform fees, governance parameters, and vote/propose controls. It remains unavailable until verified contracts, chain identity, token ownership and voting power, proposal lifecycle, quorum, timelocks, treasury custody, execution, and audit evidence are implemented and tested."
      capability="On-chain token governance, treasury, and voting"
      nextStep="Review the launch readiness status"
    />
  );
}
