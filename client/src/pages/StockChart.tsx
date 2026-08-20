import FeatureUnavailable from "@/components/FeatureUnavailable";

const StockChart = () => (
  <FeatureUnavailable
    title="Stock charts unavailable"
    description="Production price charts require authorized and licensed market data, validated instrument identity, exchange and currency context, timestamp and timezone semantics, stale or missing-data handling, reproducible aggregation, and clear limits against investment advice. No candle, price, volume, indicator, trend, forecast, portfolio, order, or market conclusion is rendered here."
    capability="Security price charts, market history, and technical analysis"
    nextStep="Connect governed market-data providers, licensing, timestamp and staleness controls, chart validation, audit, and reviewed non-advisory disclosures before enabling stock charts"
  />
);

export default StockChart;
