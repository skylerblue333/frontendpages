import FeatureUnavailable from "@/components/FeatureUnavailable";

const PublishingSchedule = () => (
  <FeatureUnavailable
    title="Publishing schedule unavailable"
    description="A production content calendar requires authenticated content ownership, draft and approval state, channel credentials, scheduling and timezone rules, moderation, delivery confirmation, retry handling, analytics, and rollback. No content, audience, publication, or delivery outcome is created here."
    capability="Content scheduling, multi-channel publishing, and delivery operations"
    nextStep="Connect governed content and channel services before enabling scheduled publication"
  />
);

export default PublishingSchedule;
