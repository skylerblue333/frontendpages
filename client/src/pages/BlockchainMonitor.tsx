import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function BlockchainMonitor() {
  return (
    <FeatureUnavailable
      title="Blockchain monitoring is not active"
      description="This route currently exposes an authenticated shell without verified network telemetry. It remains unavailable until chain and RPC identity, provider provenance, indexed data, confirmation semantics, reorg handling, alerting, rate limits, and incident response are implemented and tested."
      capability="Blockchain network monitoring and alerts"
      nextStep="Review the launch readiness status"
    />
  );
}
