import FeatureUnavailable from "@/components/FeatureUnavailable";

const StockSearch = () => (
  <FeatureUnavailable
    title="Stock search unavailable"
    description="Production market research requires an authorized, current data provider, instrument identity, exchange and currency context, timestamps, licensing, symbol validation, error and stale-data handling, privacy, and clear limits against investment advice. No security, quote, price, volume, market status, holding, order, forecast, or recommendation is shown here."
    capability="Security search, market quotes, and stock research"
    nextStep="Connect governed market-data providers, licensing, timestamp and staleness controls, instrument validation, audit, and reviewed non-advisory disclosures before enabling stock search"
  />
);

export default StockSearch;
