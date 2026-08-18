import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function TrumpMining() {
  return (
    <FeatureUnavailable
      title="Token mining is not active"
      description="This route previously simulated mining intervals, hashes, blocks, token earnings, USD value, rig balances, boosts, leaderboards, and successful mining notifications using hard-coded rates and a mock token price. It is unavailable until verified chain/provider integration, accounting, authorization, and transaction evidence exist."
      capability="Token mining, rewards, boosts, and leaderboard operations"
      nextStep="Review the launch readiness status"
    />
  );
}
