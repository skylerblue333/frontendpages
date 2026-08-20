import FeatureUnavailable from "@/components/FeatureUnavailable";

const Status = () => (
  <FeatureUnavailable
    title="Service status unavailable"
    description="A trustworthy status page requires live, independently monitored service checks, incident and maintenance records, component ownership, timestamps, regional scope, dependency health, alerting, and an auditable public communication process. No uptime, availability, incident, maintenance, latency, deployment, recovery, or production-readiness claim is made here."
    capability="Live service health, incidents, maintenance, and availability reporting"
    nextStep="Connect governed health checks, monitors, dependency probes, incident management, alerting, ownership, and public status publication before enabling service status"
  />
);

export default Status;
