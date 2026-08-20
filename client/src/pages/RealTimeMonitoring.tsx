import FeatureUnavailable from "@/components/FeatureUnavailable";

const RealTimeMonitoring = () => (
  <FeatureUnavailable
    title="Real-time monitoring unavailable"
    description="No live metrics, telemetry source, endpoint inventory, probe, alert route, incident feed, or monitoring configuration is connected. The prior screen did not establish real-time availability, latency, throughput, uptime, or SLA evidence."
    capability="Real-time metrics, monitoring, alerts, and operational controls"
    nextStep="Connect an approved observability provider before showing live status"
  />
);

export default RealTimeMonitoring;
