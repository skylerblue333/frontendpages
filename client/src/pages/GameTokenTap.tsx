import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameTokenTap() {
  return (
    <FeatureUnavailable
      title="Token Tap Frenzy is not active"
      description="This route previously calculated SKY444 donations, XP, combo rewards, and Clean Water Initiative impact entirely in the browser. It remains unavailable until game identity, anti-cheat scoring, reward issuance, token accounting, charity custody, donor and beneficiary records, reconciliation, tax or legal review, and independently verifiable impact evidence are implemented and tested."
      capability="Token game rewards and charity-impact accounting"
      nextStep="Review the launch readiness status"
    />
  );
}
