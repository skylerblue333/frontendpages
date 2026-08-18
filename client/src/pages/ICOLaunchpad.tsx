import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ICOLaunchpad() {
  return (
    <FeatureUnavailable
      title="Token launchpad is not active"
      description="This route previously presented a live presale, raised funds, token price, supply, participants, tokenomics, vesting, smart-contract audit, accepted payment assets, and Connect Wallet & Buy actions. It remains unavailable until verified chain and contract identity, legal and jurisdictional review, compliant sale controls, wallet and payment custody boundaries, signed transaction status, vesting enforcement, audit provenance, sanctions and fraud controls, and reconciliation are implemented and independently accepted."
      capability="Token sale, tokenomics, vesting, and launchpad operations"
      nextStep="Review the launch readiness status"
    />
  );
}
