import FeatureUnavailable from "@/components/FeatureUnavailable";

const PushNotifications = () => (
  <FeatureUnavailable
    title="Push notifications unavailable"
    description="A trustworthy push-notification workflow requires explicit user consent, device-token registration, platform credentials held server-side, preference and quiet-hour controls, notification content validation, queueing, retry and deduplication, delivery receipts, revocation, privacy safeguards, and auditability. No device is registered, subscription is active, notification is sent, delivery is confirmed, read state is recorded, or preference change is successful."
    capability="Verified consent-aware push notification delivery"
    nextStep="Connect approved notification providers, device registration, consent, preference, queue, retry, receipt, and monitoring services with secret management before enabling push notifications"
  />
);

export default PushNotifications;
