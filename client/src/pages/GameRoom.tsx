import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameRoom() {
  return (
    <FeatureUnavailable
      title="Game rooms are not active"
      description="This route currently exposes an authenticated shell without verified room persistence, participant identity, realtime state, game actions, moderation, session authorization, or result handling. It remains unavailable until those contracts and operational controls are implemented and tested."
      capability="Multiplayer game rooms and live sessions"
      nextStep="Review the launch readiness status"
    />
  );
}
