import FeatureUnavailable from "@/components/FeatureUnavailable";

const Security = () => (
  <FeatureUnavailable
    title="Security wave preview"
    description="MFA setup, session revocation, authentication state, recovery, and security outcomes are intentionally held at a truthful release boundary until verified identity-provider contracts, session controls, recovery flows, audit logs, and acceptance tests are connected."
    capability="Authentication and security-control evidence"
    nextStep="Return to the launch hub"
  />
);

export default Security;
