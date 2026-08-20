import FeatureUnavailable from "@/components/FeatureUnavailable";

const UserOnboarding = () => (
  <FeatureUnavailable
    title="User onboarding unavailable"
    description="Production onboarding requires verified identity and session state, consent capture, profile persistence, privacy preferences, eligibility rules, safe recommendations, resumable progress, and audit history. No account, profile, consent, preference, completion, or recommendation result is created here."
    capability="Account setup, onboarding, consent, and profile completion"
    nextStep="Connect governed identity, profile, consent, privacy, recommendation, and audit services before enabling onboarding"
  />
);

export default UserOnboarding;
