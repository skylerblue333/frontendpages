import FeatureUnavailable from "@/components/FeatureUnavailable";

const CustomDashboard = () => (
  <FeatureUnavailable
    title="Custom dashboards unavailable"
    description="Custom dashboards require governed data-source connections, widget definitions, permission-aware queries, saved layouts, refresh behavior, cache correctness, error and empty states, export controls, and privacy protections. No metric, chart, widget, data source, synchronization state, or personalization result is shown or asserted."
    capability="Permission-aware custom dashboards and saved workspaces"
    nextStep="Connect approved data sources and dashboard services with schema validation, access controls, refresh, caching, export, audit, and recovery behavior before enabling customization"
  />
);

export default CustomDashboard;
