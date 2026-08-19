import FeatureUnavailable from "@/components/FeatureUnavailable";

const ImageEditor = () => (
  <FeatureUnavailable
    title="Image Editor"
    description="Image Editor is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Image Editor on /image-editor"
    nextStep="Return to the launch hub"
  />
);

export default ImageEditor;
