import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GamingForCharity() {
  return (
    <FeatureUnavailable
      title="Gaming for charity is not active"
      description="This route previously displayed hard-coded players, donations, charity totals, leaderboards, LIVE and verified badges, on-chain claims, and Play & Donate actions. It remains unavailable until game-event provenance, donor and beneficiary identity, charity due diligence, payment or token custody, donation allocation, anti-abuse controls, reconciliation, tax and legal review, and independently verifiable impact evidence are implemented and tested."
      capability="Play-to-donate games, charity campaigns, and impact reporting"
      nextStep="Review the launch readiness status"
    />
  );
}
