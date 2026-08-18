import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function TradingTerminal() {
  return (
    <FeatureUnavailable
      title="Trading terminal is not active"
      description="This route previously displayed hard-coded live-market status, asset prices, percentage changes, volumes, chart data, recent trades, wallet balances, and a Buy action. It remains unavailable until authenticated market-data provenance, asset and network identity, account and custody boundaries, order validation, balance authorization, risk and suitability controls, transaction state, reconciliation, rate limits, and failure recovery are implemented and independently tested."
      capability="Market data, portfolio balances, and trading execution"
      nextStep="Review the launch readiness status"
    />
  );
}
