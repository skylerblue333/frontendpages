import FeatureUnavailable from "@/components/FeatureUnavailable";

const EthereumPoolSelector = () => (
  <FeatureUnavailable
    title="Ethereum Pool Selector"
    description="Ethereum Pool Selector is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Ethereum Pool Selector on /ethereum-pool-selector"
    nextStep="Return to the launch hub"
  />
);

export default EthereumPoolSelector;
