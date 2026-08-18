import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameSlots() {
  return (
    <FeatureUnavailable
      title="Slot game is not active"
      description="This route previously simulated spins, bets, balances, jackpots, win payouts, paytables, RTP, and auto-spin entirely in the browser. It remains unavailable until jurisdictional and legal review, age and responsible-gaming controls, custody and wallet authorization, server-side randomness and fairness evidence, anti-fraud controls, payment reconciliation, dispute handling, and auditable payout records are implemented and tested."
      capability="Slot wagering, jackpots, and payout accounting"
      nextStep="Review the launch readiness status"
    />
  );
}
