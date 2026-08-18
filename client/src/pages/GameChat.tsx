import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameChat() {
  return (
    <FeatureUnavailable
      title="Game chat is not active"
      description="This route currently exposes an authenticated shell without verified game-scoped conversations or realtime delivery. It remains unavailable until player identity, room authorization, message persistence, moderation, abuse handling, retention, and reconnect/error states are implemented and tested."
      capability="In-game chat and realtime player communication"
      nextStep="Review the launch readiness status"
    />
  );
}
