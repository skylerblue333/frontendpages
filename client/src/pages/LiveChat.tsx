import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function LiveChat() {
  return (
    <FeatureUnavailable
      title="Live support chat is not active"
      description="This route currently exposes an authenticated shell without verified support conversations or realtime delivery. It remains unavailable until support-agent identity, ticket persistence, routing and escalation, message retention, privacy redaction, and reconnect/error handling are implemented and tested."
      capability="Realtime support chat and escalation"
      nextStep="Review the launch readiness status"
    />
  );
}
