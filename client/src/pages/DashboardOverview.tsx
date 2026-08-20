import FeatureUnavailable from "@/components/FeatureUnavailable";

const DashboardOverview = () => (
  <FeatureUnavailable
    title="Dashboard overview unavailable"
    description="A trustworthy dashboard overview requires authenticated and permission-aware data sources, defined KPI semantics, freshness and timestamp handling, reliable aggregation, loading and error recovery, and privacy controls. No balance, portfolio, activity, notification, performance, health, user statistic, revenue, or operational metric is shown or asserted."
    capability="Verified cross-module dashboard overview"
    nextStep="Connect approved dashboard data sources with metric governance, authorization, freshness, aggregation, privacy, and recovery controls before enabling the overview"
  />
);

export default DashboardOverview;
