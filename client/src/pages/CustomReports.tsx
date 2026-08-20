import FeatureUnavailable from "@/components/FeatureUnavailable";

const CustomReports = () => (
  <FeatureUnavailable
    title="Custom reports unavailable"
    description="Custom reports require governed data sources, schema and metric definitions, permission-aware queries, reproducible calculations, saved report versions, refresh and cache behavior, export controls, privacy protections, and validation. No report, metric, chart, financial value, trend, forecast, export, or data freshness claim is shown or asserted."
    capability="Permission-aware custom report construction and export"
    nextStep="Connect approved reporting services with metric governance, schema validation, access controls, refresh, caching, export, audit, and recovery behavior before enabling reports"
  />
);

export default CustomReports;
