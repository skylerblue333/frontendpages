import FeatureUnavailable from "@/components/FeatureUnavailable";

const CommentThread = () => (
  <FeatureUnavailable
    title="Comment threads unavailable"
    description="Threaded discussions require authenticated posting, durable storage, ordering and edit history, notification delivery, abuse prevention, moderation, reporting, deletion, access control, and reliable synchronization. No comment, reply, author, timestamp, moderation decision, notification, or delivery result is shown or asserted."
    capability="Governed threaded comments and community discussions"
    nextStep="Connect the approved discussion, moderation, notification, and audit services with identity, privacy, abuse, retention, and recovery controls before enabling threads"
  />
);

export default CommentThread;
