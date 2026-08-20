import FeatureUnavailable from "@/components/FeatureUnavailable";

const SupportMetrics = () => (
  <FeatureUnavailable
    title="Support metrics unavailable"
    description="Production support metrics require authoritative ticket and event data, defined KPI formulas, identity and tenant scope, time-window semantics, timezone handling, sampling and aggregation rules, privacy controls, and monitoring integrity. No ticket volume, SLA, response time, resolution, backlog, satisfaction, agent, uptime, or performance metric is generated here."
    capability="Support KPIs, service levels, response, resolution, and workload analytics"
    nextStep="Connect governed support telemetry, ticket storage, metric definitions, privacy, aggregation, and audit services before enabling support metrics"
  />
);

export default SupportMetrics;
