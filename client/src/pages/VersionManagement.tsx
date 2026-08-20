import FeatureUnavailable from "@/components/FeatureUnavailable";

const VersionManagement = () => (
  <FeatureUnavailable
    title="Version management unavailable"
    description="Version management requires a real API registry, immutable artifacts, compatibility policy, deployment records, authorization, approval history, migration and rollback plans, and observable release state. No API version, deployment, approval, rollback, or production outcome is created here."
    capability="API versions, releases, deployment state, and rollback governance"
    nextStep="Connect governed artifact and deployment services with approvals, compatibility checks, observability, and rollback evidence before enabling releases"
  />
);

export default VersionManagement;
