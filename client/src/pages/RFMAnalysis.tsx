import FeatureUnavailable from "@/components/FeatureUnavailable";

const RFMAnalysis = () => (
  <FeatureUnavailable
    title="RFM analysis unavailable"
    description="A trustworthy recency-frequency-monetary analysis requires approved customer and transaction sources, privacy and consent controls, identity resolution, currency and time-window rules, data-quality checks, cohort definitions, aggregation logic, access controls, and reproducible calculations. No customer count, recency score, frequency score, monetary value, segment, churn, revenue, ranking, or recommendation is shown or asserted."
    capability="Verified customer segmentation and RFM analytics"
    nextStep="Connect approved consent-aware customer and transaction data, aggregation, governance, and reporting services with reproducible calculation definitions before enabling analysis"
  />
);

export default RFMAnalysis;
