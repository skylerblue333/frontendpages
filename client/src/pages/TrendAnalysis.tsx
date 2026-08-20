import FeatureUnavailable from "@/components/FeatureUnavailable";

const TrendAnalysis = () => (
  <FeatureUnavailable
    title="Trend analysis unavailable"
    description="Trustworthy trend analysis requires approved source data, provenance and freshness, query and cohort definitions, time windows, deduplication, seasonality and anomaly rules, privacy and consent controls, reproducible calculations, confidence limits, and monitoring. No trend direction, volume, reach, engagement, forecast, ranking, or recommendation is shown or claimed here."
    capability="Verified trend measurement and analysis"
    nextStep="Connect approved source and analytics services, then verify definitions, privacy, reproducibility, confidence, and recovery before publishing trends"
  />
);

export default TrendAnalysis;
