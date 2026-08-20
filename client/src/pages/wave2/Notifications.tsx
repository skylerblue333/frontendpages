import FeatureUnavailable from "@/components/FeatureUnavailable";

const Notifications = () => (
  <FeatureUnavailable
    title="Notifications wave preview"
    description="Notification counts, delivery state, read/delete mutations, and notification history are intentionally held at a truthful release boundary because the registered wave2 notifications namespace does not provide a verified contract for these operations."
    capability="Authenticated notification delivery and mutation evidence"
    nextStep="Return to the launch hub"
  />
);

export default Notifications;
