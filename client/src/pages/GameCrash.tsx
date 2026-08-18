import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameCrash() {
  return (
    <FeatureUnavailable
      title="Crash game is not active"
      description="This route previously simulated bets, balances, player activity, random crash points, cashout winnings, recent rounds, and a provably-fair house edge entirely in the browser. It remains unavailable until jurisdictional and legal review, age and responsible-gaming controls, custody and wallet authorization, server-side randomness and fairness evidence, anti-fraud controls, payment reconciliation, dispute handling, and auditable payout records are implemented and tested."
      capability="Crash-game wagering, cashout, and payout accounting"
      nextStep="Review the launch readiness status"
    />
  );
}
