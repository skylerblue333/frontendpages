import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AIMatchmaker() {
  return (
    <FeatureUnavailable
      title="AI Matchmaker is not active"
      description="This route previously displayed fabricated people, ages, compatibility scores, behavior predictions, confidence values, relationship suggestions, and like/message actions. It remains unavailable until consented profile data, age and safety controls, matching methodology, privacy protections, moderation, and account-scoped communication are implemented and tested."
      capability="AI matching, compatibility analysis, and relationship recommendations"
      nextStep="Review the launch readiness status"
    />
  );
}
