import FeatureUnavailable from "@/components/FeatureUnavailable";

const SkillBadges = () => (
  <FeatureUnavailable
    title="Skill badges unavailable"
    description="Skill badges require a governed competency model, completed-learning records, assessment results, issuer authorization, anti-tamper verification, revocation, privacy controls, and an auditable credential registry. No badge, score, completion, certification, ranking, or reward is asserted here."
    capability="Verified learning achievements and portable credentials"
    nextStep="Connect the approved learning, assessment, issuer, verification, revocation, and credential-storage services before enabling badge issuance"
  />
);

export default SkillBadges;
