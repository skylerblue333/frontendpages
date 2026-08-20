import FeatureUnavailable from "@/components/FeatureUnavailable";

const CompetitiveRadar = () => (
  <FeatureUnavailable
    title="Competitive intelligence unavailable"
    description="The prior radar displayed unsupported competitor counts, market share, growth rates, user sentiment, rankings, trend charts, capability scores, threats, opportunities, and real-time monitoring. No verified market-data source, methodology, timestamp, licensing, or analyst review is connected, so no competitive conclusion is presented."
    capability="Competitive intelligence, market sensing, benchmarking, and recommendations"
    nextStep="Connect licensed market data and a documented analysis pipeline before publishing comparisons"
  />
);

export default CompetitiveRadar;
