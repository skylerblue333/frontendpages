import FeatureUnavailable from "@/components/FeatureUnavailable";

const ConversionOptimization = () => (
  <FeatureUnavailable
    title="Conversion optimization unavailable"
    description="Conversion optimization requires governed event instrumentation, experiment assignment and exposure tracking, statistical design, guardrail metrics, consent and privacy controls, reproducible analysis, and safe rollout or rollback controls. No experiment, variant, lift, conversion, revenue impact, recommendation, or forecast is presented."
    capability="Auditable experimentation and conversion optimization"
    nextStep="Connect approved analytics and experimentation services with assignment, privacy, statistical, guardrail, rollout, rollback, and audit controls before enabling optimization"
  />
);

export default ConversionOptimization;
