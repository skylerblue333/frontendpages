import FeatureUnavailable from "@/components/FeatureUnavailable";

const AnalyticsProducts = () => (
  <FeatureUnavailable
    title="Analytics products unavailable"
    description="The displayed intelligence products, SKY pricing, subscriber counts, monthly revenue, creator attribution, market sentiment, audience targeting, community forecasts, token analytics, and commercial outcomes are not verified. No data lake, subscriber ledger, payment source, or on-chain provider is connected."
    capability="Commercial analytics products, subscriptions, revenue, and on-chain insights"
    nextStep="Connect governed data, billing, privacy, and blockchain evidence before publishing products"
  />
);

export default AnalyticsProducts;
