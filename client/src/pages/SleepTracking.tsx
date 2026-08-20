import FeatureUnavailable from "@/components/FeatureUnavailable";

const SleepTracking = () => (
  <FeatureUnavailable
    title="Sleep tracking unavailable"
    description="Sleep tracking requires an approved device or data-provider integration, explicit consent, secure health-data handling, reliable synchronization, data deletion controls, and validated interpretation boundaries. No sleep duration, stages, score, trend, recommendation, or health conclusion is shown."
    capability="Connected sleep data collection and analysis"
    nextStep="Connect a governed health-data provider with consent, privacy, retention, deletion, synchronization, and validation controls before enabling this feature"
  />
);

export default SleepTracking;
