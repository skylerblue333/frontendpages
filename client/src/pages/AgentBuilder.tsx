import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AgentBuilder() {
  return (
    <FeatureUnavailable
      title="Agent Builder is not active"
      description="Agent creation, testing, deployment, web search, and code execution are unavailable until model-provider configuration, sandbox isolation, tool authorization, secret handling, resource limits, prompt-injection defenses, persistence, audit logging, and rollback are implemented and tested."
      capability="AI agent authoring, tool execution, and deployment"
      nextStep="Review the launch readiness status"
    />
  );
}
