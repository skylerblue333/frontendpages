import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AiCore() {
  return (
    <FeatureUnavailable
      title="AI Core is not active"
      description="This route previously exposed chat, content generation, market analysis, learning-guide generation, token usage, and interaction logs through unverified provider workflows. It remains unavailable until model and provider identity, prompt and output safety, account authorization, privacy and retention, cost limits, persistence, rate limiting, error handling, and auditable telemetry are implemented and tested."
      capability="AI chat, generation, analysis, learning, and usage analytics"
      nextStep="Review the launch readiness status"
    />
  );
}
