import FeatureUnavailable from "@/components/FeatureUnavailable";

const UnifiedIdentity = () => (
  <FeatureUnavailable
    title="Unified identity"
    description="Profile verification, wallet connection, reputation, social graph, DID issuance, privacy relays, balances, connected apps, and permissions are intentionally held at a truthful release boundary until verified identity, wallet custody, authorization, provenance, and privacy services are connected."
    capability="Identity, reputation, wallet, DID, and connected-app evidence"
    nextStep="Return to the launch hub"
  />
);

export default UnifiedIdentity;
