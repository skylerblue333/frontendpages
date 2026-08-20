import FeatureUnavailable from "@/components/FeatureUnavailable";

const ThreadManagement = () => (
  <FeatureUnavailable
    title="Thread management unavailable"
    description="Thread management requires authenticated authorship, durable post and reply storage, moderation queues, abuse reporting, privacy controls, rate limits, edit and deletion policy, and auditable enforcement. No thread, author, reply, moderation, or saved-state outcome is created here."
    capability="Community threads, replies, moderation, and discussion workflows"
    nextStep="Connect governed community and moderation services with authorization, abuse controls, and audit evidence before enabling threads"
  />
);

export default ThreadManagement;
