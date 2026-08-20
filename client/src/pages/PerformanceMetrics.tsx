import FeatureUnavailable from "@/components/FeatureUnavailable";

const PerformanceMetrics = () => (
  <FeatureUnavailable
    title="Performance metrics unavailable"
    description="Operational performance metrics require instrumented services, synchronized telemetry, defined measurement windows, sampling and aggregation rules, access controls, retention, alert thresholds, and independently verified monitoring. No latency, uptime, throughput, error rate, capacity, request count, service health, or performance result is shown or asserted."
    capability="Verified application observability and performance monitoring"
    nextStep="Connect approved telemetry, tracing, metrics, alerting, retention, and dashboard services with ownership and incident-response controls before enabling metrics"
  />
);

export default PerformanceMetrics;
