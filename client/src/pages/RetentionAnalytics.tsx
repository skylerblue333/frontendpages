import FeatureUnavailable from "@/components/FeatureUnavailable";

const RetentionAnalytics = () => (
  <FeatureUnavailable
    title="Retention analytics unavailable"
    description="Retention and churn analytics require governed event instrumentation, a documented cohort definition, consent and privacy controls, deduplication, timezone handling, retention policy, reproducible calculations, and validated reporting. No user count, retention rate, churn rate, cohort result, engagement trend, revenue impact, or forecast is presented."
    capability="Auditable retention, cohort, and churn reporting"
    nextStep="Connect approved analytics events and a governed reporting pipeline with privacy, access, calculation, and export controls before enabling this feature"
  />
);

export default RetentionAnalytics;
