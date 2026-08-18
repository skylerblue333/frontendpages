import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AIAssistant() {
  return (
    <FeatureUnavailable
      title="AI Assistant is not active"
      description="This route currently exposes an authenticated shell without a verified model invocation contract. It remains unavailable until provider configuration, prompt and output handling, authorization, usage limits, privacy controls, persistence, error states, and operational monitoring are implemented and tested."
      capability="AI assistant interaction"
      nextStep="Return to the launch hub"
    />
  );
}
