import FeatureUnavailable from "@/components/FeatureUnavailable";

const MarkdownRendering = () => (
  <FeatureUnavailable
    title="Markdown Rendering"
    description="Markdown Rendering is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Markdown Rendering on /markdown-rendering"
    nextStep="Return to the launch hub"
  />
);

export default MarkdownRendering;
