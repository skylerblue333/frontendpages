import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GroupChat() {
  return (
    <FeatureUnavailable
      title="Group chat is not active"
      description="This route currently exposes an authenticated shell without verified groups or conversations. It remains unavailable until membership and room authorization, durable messages, realtime delivery, moderation, abuse handling, retention, and reconnect/error states are implemented and tested."
      capability="Group messaging and realtime community chat"
      nextStep="Review the launch readiness status"
    />
  );
}
