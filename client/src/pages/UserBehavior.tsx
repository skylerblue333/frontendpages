import FeatureUnavailable from "@/components/FeatureUnavailable";

const UserBehavior = () => (
  <FeatureUnavailable
    title="User behavior analytics unavailable"
    description="Behavior analytics require explicit consent, lawful-purpose controls, privacy-safe event collection, identity and tenant isolation, retention limits, aggregation, access controls, and auditable data processing. No user journey, event, segment, profile, prediction, or behavioral insight is collected or generated here."
    capability="Privacy-aware user behavior and journey analytics"
    nextStep="Connect governed consent, telemetry, privacy, aggregation, authorization, and audit services before enabling behavior analytics"
  />
);

export default UserBehavior;
