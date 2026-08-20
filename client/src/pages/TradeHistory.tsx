import FeatureUnavailable from "@/components/FeatureUnavailable";

const TradeHistory = () => (
  <FeatureUnavailable
    title="Trade history unavailable"
    description="A production trade history requires authenticated account and exchange connections, verified order and fill events, immutable ledger records, market and currency context, reconciliation, authorization, privacy, and clear failed or pending states. No order, fill, price, balance, position, profit, execution, or transaction record is fabricated here."
    capability="Exchange order history, fills, positions, and trading records"
    nextStep="Connect governed exchange or chain integrations, immutable ledger storage, reconciliation, authorization, and audit controls before enabling trade history"
  />
);

export default TradeHistory;
