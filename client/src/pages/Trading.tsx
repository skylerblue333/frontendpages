import FeatureUnavailable from "@/components/FeatureUnavailable";

const Trading = () => (
  <FeatureUnavailable
    title="Trading terminal"
    description="Live market prices, portfolio values, trading orders, and bot execution are intentionally held at a truthful release boundary until verified market-data, wallet, order, authorization, persistence, and monitoring providers are connected."
    capability="Crypto trading, market data, and automated strategies"
    nextStep="Return to the launch hub"
  />
);

export default Trading;
