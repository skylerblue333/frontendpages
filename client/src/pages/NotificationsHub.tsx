import FeatureUnavailable from "@/components/FeatureUnavailable";

const NotificationsHub = () => (
  <FeatureUnavailable
    title="Notifications hub"
    description="The notifications hub is intentionally held at a truthful release boundary until verified notification persistence, delivery, authorization, read-state handling, and monitoring are configured."
    capability="Cross-module notifications, trading alerts, marketplace alerts, and social activity"
    nextStep="Return to the launch hub"
  />
);

export default NotificationsHub;
