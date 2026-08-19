import FeatureUnavailable from "@/components/FeatureUnavailable";

const ContentUpload = () => (
  <FeatureUnavailable
    title="Content Upload"
    description="Content Upload is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Content Upload on /content-upload"
    nextStep="Return to the launch hub"
  />
);

export default ContentUpload;
