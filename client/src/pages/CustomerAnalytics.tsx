import FeatureUnavailable from "@/components/FeatureUnavailable";

const CustomerAnalytics = () => (
  <FeatureUnavailable
    title="Customer analytics unavailable"
    description="Customer analytics requires governed identity and event data, documented metric definitions, consent and privacy controls, aggregation safeguards, access restrictions, reproducible calculations, and validated reporting. No customer count, behavior pattern, segment, lifetime value, churn, revenue, satisfaction, or forecast is shown or asserted."
    capability="Privacy-aware customer behavior and lifecycle analytics"
    nextStep="Connect approved customer and event data services with consent, aggregation, metric governance, access, retention, and reporting controls before enabling analytics"
  />
);

export default CustomerAnalytics;
