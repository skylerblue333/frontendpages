import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentPerformance() {
  return (
    <FeatureUnavailable
      title="Agent performance is not active"
      description="This route currently exposes an authenticated shell without verified agent telemetry or task outcomes. It remains unavailable until execution logs, model evaluation, latency and error metrics, cost attribution, access controls, and privacy-safe observability are implemented."
      capability="AI agent performance and operational telemetry"
      nextStep="Review the launch readiness status"
    />
  );
}
