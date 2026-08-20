import FeatureUnavailable from "@/components/FeatureUnavailable";

const ExperimentFactory = () => (
  <FeatureUnavailable
    title="Experiment factory"
    description="Experiment populations, conversion results, confidence, recommendations, and deployment outcomes are intentionally held at a truthful release boundary until consented data, experiment assignment, statistical methodology, persistence, and rollout controls are verified."
    capability="A/B experimentation and rollout evidence"
    nextStep="Return to the launch hub"
  />
);

export default ExperimentFactory;
