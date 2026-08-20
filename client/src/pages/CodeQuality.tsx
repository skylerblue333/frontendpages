import FeatureUnavailable from "@/components/FeatureUnavailable";

const CodeQuality = () => (
  <FeatureUnavailable
    title="Code quality"
    description="Code-quality scores, findings, and remediation status are intentionally held at a truthful release boundary until verified repository analysis, persistence, authorization, and monitoring are connected."
    capability="Repository code-quality analysis and findings"
    nextStep="Return to the launch hub"
  />
);

export default CodeQuality;
