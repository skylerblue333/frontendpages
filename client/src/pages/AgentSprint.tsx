import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentSprint() {
  return (
    <FeatureUnavailable
      title="Agent sprints are not active"
      description="This route previously displayed fabricated agent tasks and completion states for market analysis, security scanning, staking optimization, social posting, durations, and outputs, with a local Run Sprint control. It remains unavailable until sandbox isolation, tool authorization, secrets handling, human approval, execution logs, rate limits, rollback, and independently verified task outcomes are implemented and tested."
      capability="Multi-agent task orchestration and execution"
      nextStep="Review the launch readiness status"
    />
  );
}
