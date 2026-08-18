import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ChainExplorer() {
  return (
    <FeatureUnavailable
      title="Chain explorer is not active"
      description="Explorer lookup is unavailable until approved chain and RPC providers, network identity, indexed blocks and transactions, address privacy controls, confirmation and reorg semantics, rate limits, and provider failure handling are implemented and tested."
      capability="Blockchain block, transaction, and address exploration"
      nextStep="Review the launch readiness status"
    />
  );
}
