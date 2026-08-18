import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameFiQuestBoard() {
  return (
    <FeatureUnavailable
      title="GameFi quests are not active"
      description="This route previously displayed hard-coded quests, completion progress, rankings, SKY444 rewards, XP, daily bonuses, and a local claim action that reported wallet delivery without an on-chain transaction. It remains unavailable until account and game identity, anti-cheat validation, quest-event provenance, wallet authorization, reward issuance, idempotency, reconciliation, taxation, and rollback are implemented and tested."
      capability="Game quests, token rewards, rankings, and payout claims"
      nextStep="Review the launch readiness status"
    />
  );
}
