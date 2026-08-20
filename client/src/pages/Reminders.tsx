import FeatureUnavailable from "@/components/FeatureUnavailable";

const Reminders = () => (
  <FeatureUnavailable
    title="Reminders unavailable"
    description="A dependable reminder service requires an authenticated owner, timezone and recurrence rules, durable persistence, delivery channels, consent, deduplication, retries, cancellation semantics, audit history, and monitoring. No reminder, schedule, notification, delivery, or completion state is shown or claimed here."
    capability="Verified reminder scheduling and notification delivery"
    nextStep="Connect the approved reminder, notification, persistence, consent, and recovery services before enabling schedules"
  />
);

export default Reminders;
