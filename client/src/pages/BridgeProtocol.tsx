import FeatureUnavailable from "@/components/FeatureUnavailable";

const BridgeProtocol = () => (
  <FeatureUnavailable
    title="Bridge protocol"
    description="Cross-chain bridge operations are intentionally held at a truthful release boundary until verified networks, address validation, transaction signing, replay protection, status tracking, and rollback evidence are available."
    capability="Cross-chain transfers and bridge transactions"
    nextStep="Return to the launch hub"
  />
);

export default BridgeProtocol;
