import FeatureUnavailable from "@/components/FeatureUnavailable";

const Admin = () => (
  <FeatureUnavailable
    title="Admin wave preview"
    description="User bans, report resolution, moderation state, administrator authorization, and audit outcomes are intentionally held at a truthful release boundary until verified admin identity, role permissions, moderation records, appeals, and audit services are connected."
    capability="Administrative authorization and moderation evidence"
    nextStep="Return to the launch hub"
  />
);

export default Admin;
