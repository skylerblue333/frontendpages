import FeatureUnavailable from "@/components/FeatureUnavailable";

const Synthetics = () => (
  <FeatureUnavailable
    title="Synthetic assets"
    description="Synthetic asset prices, collateral, and settlement are intentionally held at a truthful release boundary until verified oracle, collateral, authorization, and settlement evidence are available."
    capability="Synthetic-asset issuance and settlement"
    nextStep="Return to the launch hub"
  />
);

export default Synthetics;
