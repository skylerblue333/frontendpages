import FeatureUnavailable from "@/components/FeatureUnavailable";

const OracleNetwork = () => (
  <FeatureUnavailable
    title="Oracle network"
    description="Oracle feeds are intentionally held at a truthful release boundary until verified source provenance, freshness, quorum, signing, persistence, and monitoring evidence are available."
    capability="External oracle data feeds"
    nextStep="Return to the launch hub"
  />
);

export default OracleNetwork;
