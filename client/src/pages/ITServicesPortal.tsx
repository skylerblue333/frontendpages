import FeatureUnavailable from "@/components/FeatureUnavailable";

const ITServicesPortal = () => (
  <FeatureUnavailable
    title="IT services portal unavailable"
    description="Client identity, projects, support tickets, reports, invoices, spend, uptime, audit completion, patch status, and outbound support actions require an authenticated tenant, service-management provider, billing source, monitoring evidence, and accountable operations. No client or service outcome is represented here."
    capability="Managed IT services, support, reporting, billing, and uptime"
    nextStep="Connect an approved service-management and billing integration"
  />
);

export default ITServicesPortal;
