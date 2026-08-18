import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MultiModelSelector() {
  return (
    <FeatureUnavailable
      title="Multi-model selection is not active"
      description="Model selection is unavailable until approved providers, model identity and versioning, capability metadata, routing policy, cost controls, privacy boundaries, rate limits, and tested provider failure handling are implemented."
      capability="Multi-model routing and selection"
      nextStep="Review the launch readiness status"
    />
  );
}
