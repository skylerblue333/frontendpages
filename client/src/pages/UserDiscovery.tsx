import FeatureUnavailable from "@/components/FeatureUnavailable";

const UserDiscovery = () => (
  <FeatureUnavailable
    title="User Discovery"
    description="User Discovery is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="User Discovery on /user-discovery"
    nextStep="Return to the launch hub"
  />
);

export default UserDiscovery;
