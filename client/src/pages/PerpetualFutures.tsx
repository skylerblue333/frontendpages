import FeatureUnavailable from "@/components/FeatureUnavailable";

const PerpetualFutures = () => (
  <FeatureUnavailable
    title="Perpetual futures"
    description="Perpetual futures prices, leverage, margin, and liquidation states are intentionally held at a truthful release boundary until verified market, risk, custody, and settlement providers are available."
    capability="Leveraged perpetual-futures trading"
    nextStep="Return to the launch hub"
  />
);

export default PerpetualFutures;
