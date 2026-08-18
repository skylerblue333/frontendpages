import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function Learning() {
  return (
    <FeatureUnavailable
      title="Learning center is not active"
      description="This route previously displayed hard-coded learning tracks, lesson counts, completion progress, and SKY444 rewards with a start control. It remains unavailable until verified curriculum content, learner authorization, progress persistence, assessment, certificate issuance, and reward accounting are implemented."
      capability="Structured learning paths, progress, and rewards"
      nextStep="Review the launch readiness status"
    />
  );
}
