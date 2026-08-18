import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameLobby() {
  return (
    <FeatureUnavailable
      title="Game lobby is not active"
      description="This route currently exposes an authenticated shell without verified game catalog, room persistence, matchmaking, player identity, realtime delivery, moderation, session authorization, or game-result handling. It remains unavailable until those contracts and operational controls are implemented and tested."
      capability="Multiplayer game discovery, rooms, and matchmaking"
      nextStep="Review the launch readiness status"
    />
  );
}
