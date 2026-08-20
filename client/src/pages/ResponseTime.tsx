import FeatureUnavailable from "@/components/FeatureUnavailable";

const ResponseTime = () => (
  <FeatureUnavailable
    title="Response-time monitoring unavailable"
    description="Trustworthy latency reporting requires approved telemetry sources, endpoint and region scope, clock and sampling rules, percentile definitions, trace correlation, privacy controls, retention, alert thresholds, and incident recovery. No response time, throughput, uptime, SLO, availability, or performance-health claim is shown or asserted here."
    capability="Verified response-time measurement and observability"
    nextStep="Connect approved telemetry and monitoring services, then validate sampling, redaction, alerts, dashboards, and recovery before publishing metrics"
  />
);

export default ResponseTime;
