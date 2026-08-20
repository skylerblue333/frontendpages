import FeatureUnavailable from "@/components/FeatureUnavailable";

const TransactionExplorer = () => (
  <FeatureUnavailable
    title="Transaction explorer unavailable"
    description="Reliable transaction observation requires an approved chain and network, indexer or RPC provider, address and transaction validation, canonical status and confirmation rules, reorganization handling, provenance, privacy, rate limits, and resilient error recovery. No transaction hash, amount, balance, owner, transfer, confirmation, finality, or blockchain status is shown or claimed here."
    capability="Verified blockchain transaction observation"
    nextStep="Connect the approved network and indexed provider, then verify provenance, confirmation semantics, reorganization handling, privacy, and recovery before showing transactions"
  />
);

export default TransactionExplorer;
