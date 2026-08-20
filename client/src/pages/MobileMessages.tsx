import FeatureUnavailable from "@/components/FeatureUnavailable";

const MobileMessages = () => (
  <FeatureUnavailable
    title="Mobile messaging unavailable"
    description="Messaging requires authenticated participants, recipient discovery, durable conversation storage, delivery and read-state tracking, abuse controls, notifications, privacy and retention rules, and reliable sync. No message, recipient, delivery, read, or success outcome is created here."
    capability="Mobile messaging, conversations, delivery, and notifications"
    nextStep="Connect governed messaging and notification services with identity, moderation, privacy, and delivery evidence before enabling messages"
  />
);

export default MobileMessages;
