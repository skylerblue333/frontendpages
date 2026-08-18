import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function ChatHistory() {
  return (
    <FeatureUnavailable
      title="Chat history is not active"
      description="This route currently exposes an authenticated shell without verified conversation records. It remains unavailable until account-scoped persistence, search, deletion, retention, export, privacy redaction, authorization, and failure handling are implemented and tested."
      capability="Conversation history and retention controls"
      nextStep="Review the launch readiness status"
    />
  );
}
