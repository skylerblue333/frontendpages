import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentCoordination() {
  return (
    <FeatureUnavailable
      title="Agent coordination is not active"
      description="This route previously displayed fabricated agents, task counts, success rates, latency, CPU load, task states, topology, and deployment controls. It remains unavailable until real orchestration services, model/provider provenance, task persistence, authorization, resource limits, monitoring, and rollback are implemented and verified."
      capability="Multi-agent orchestration and AI fleet management"
      nextStep="Review the launch readiness status"
    />
  );
}
