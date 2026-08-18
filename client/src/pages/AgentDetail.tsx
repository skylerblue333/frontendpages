import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentDetail() {
  return (
    <FeatureUnavailable
      title="Agent detail is not active"
      description="This route previously displayed fabricated active-agent states, task counts, uptime, market signals, notifications, and recent activity. It remains unavailable until agent identity, provider configuration, task authorization, execution logs, telemetry, and failure handling are connected and verified."
      capability="AI agent telemetry, configuration, and task execution"
      nextStep="Review the launch readiness status"
    />
  );
}
