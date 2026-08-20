import FeatureUnavailable from "@/components/FeatureUnavailable";

const CommunityGuidelines = () => (
  <FeatureUnavailable
    title="Community guidelines unavailable"
    description="Community guidelines require an approved policy source, versioned publication, acknowledgement tracking, reporting and appeal workflows, moderation ownership, enforcement tooling, privacy controls, and an auditable change history. No rule, enforcement decision, report outcome, acknowledgement, or moderation coverage is shown or asserted."
    capability="Published community standards with accountable moderation"
    nextStep="Connect the approved policy, reporting, moderation, appeals, notification, and audit services with ownership and retention controls before enabling this feature"
  />
);

export default CommunityGuidelines;
