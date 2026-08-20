import FeatureUnavailable from "@/components/FeatureUnavailable";

const ConnectionRequests = () => (
  <FeatureUnavailable
    title="Connection requests unavailable"
    description="Connection requests require verified identities, consent, relationship storage, privacy controls, abuse prevention, notification delivery, and auditable accept or decline actions. No person, request, approval, relationship, or notification is created here."
    capability="Social connection requests and relationship management"
    nextStep="Connect governed identity, relationship, notification, privacy, and moderation services before enabling requests"
  />
);

export default ConnectionRequests;
