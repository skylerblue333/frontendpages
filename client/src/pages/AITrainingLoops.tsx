import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AITrainingLoops() {
  return (
    <FeatureUnavailable
      title="AI training loops are not active"
      description="This route previously displayed fabricated model accuracy, training samples, cycle counts, rewards for user data, and active collection/label/train/validate/deploy pipeline states. It remains unavailable until data governance, consent, provenance, evaluation methodology, model registry, reward accounting, privacy controls, and deployment evidence are verified."
      capability="AI training, evaluation, feedback economy, and model deployment"
      nextStep="Review the launch readiness status"
    />
  );
}
