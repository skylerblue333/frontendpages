import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentsDashboard() {
  return (
    <FeatureUnavailable
      title="AI agents dashboard is not active"
      description="This route previously displayed a fabricated autonomous-agent catalog, active fleet counts, task volume, response time, uptime, trading and security capabilities, and build-agent actions. It remains unavailable until real agent services, authorization, sandboxing, telemetry, provider provenance, and rollback are implemented and verified."
      capability="AI agent catalog, fleet status, and orchestration entry point"
      nextStep="Review the launch readiness status"
    />
  );
}
