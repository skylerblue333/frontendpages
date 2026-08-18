import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ChatBot() {
  return (
    <FeatureUnavailable
      title="Chatbot is not active"
      description="This route currently exposes an authenticated shell without a verified conversation or model contract. It remains unavailable until provider configuration, message persistence, safety controls, authorization, rate limits, privacy handling, and tested loading/error states are implemented."
      capability="AI chatbot conversations"
      nextStep="Review the launch readiness status"
    />
  );
}
