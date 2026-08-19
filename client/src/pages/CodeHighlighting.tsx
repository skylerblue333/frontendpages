import FeatureUnavailable from "@/components/FeatureUnavailable";

const CodeHighlighting = () => (
  <FeatureUnavailable
    title="Code Highlighting"
    description="Code Highlighting is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Code Highlighting on /code-highlighting"
    nextStep="Return to the launch hub"
  />
);

export default CodeHighlighting;
