import FeatureUnavailable from "@/components/FeatureUnavailable";

const DayTradeRoom = () => (
  <FeatureUnavailable
    title="Trading workspace unavailable"
    description="Live prices, AI trading signals, confidence scores, portfolio history, and trade execution require an approved market-data provider, risk controls, account authorization, order-routing, settlement, audit, and rollback evidence. This screen does not provide financial advice or execute trades."
    capability="Market data, trading signals, and order execution"
    nextStep="Connect approved financial infrastructure before enabling trading"
  />
);

export default DayTradeRoom;
