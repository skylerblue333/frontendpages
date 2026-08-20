import FeatureUnavailable from "@/components/FeatureUnavailable";

const CohortAnalysis = () => (
  <FeatureUnavailable
    title="Cohort analysis unavailable"
    description="Cohort analysis requires governed event instrumentation, documented cohort and attribution rules, consent and privacy controls, deduplication, timezone handling, reproducible calculations, access controls, and validated exports. No cohort membership, user count, retention, engagement, revenue, conversion, or forecast is presented."
    capability="Auditable cohort segmentation and longitudinal analysis"
    nextStep="Connect approved analytics events and a governed reporting pipeline with privacy, calculation, access, export, and retention controls before enabling this feature"
  />
);

export default CohortAnalysis;
