import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameBlackjack() {
  return (
    <FeatureUnavailable
      title="Blackjack is not active"
      description="This route previously simulated card dealing, wagers, balances, wins, losses, pushes, and SKY444 payouts entirely in the browser. It remains unavailable until jurisdictional and legal review, age and responsible-gaming controls, custody and wallet authorization, server-side randomness and fairness evidence, anti-fraud controls, payment reconciliation, dispute handling, and auditable payout records are implemented and tested."
      capability="Blackjack wagering, game outcomes, and payout accounting"
      nextStep="Review the launch readiness status"
    />
  );
}
