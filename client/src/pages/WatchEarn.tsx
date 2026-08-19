import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function WatchEarn() {
  return (
    <FeatureUnavailable
      title="Watch & Earn is not active"
      description="This route previously simulated video playback, creator views, likes, watch progress, XP, SKY444 accrual, streaks, quiz rewards, and completion toasts. It remains unavailable until verified content delivery, authenticated watch attribution, anti-fraud controls, a real reward ledger, payout rules, tax and compliance handling, creator settlement, and auditable withdrawal states are connected."
      capability="Watch-to-earn content, quizzes, rewards, streaks, and payouts"
      nextStep="Review the launch readiness status"
    />
  );
}
