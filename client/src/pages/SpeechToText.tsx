import FeatureUnavailable from "@/components/FeatureUnavailable";

const SpeechToText = () => (
  <FeatureUnavailable
    title="Speech To Text"
    description="Speech To Text is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Speech To Text on /speech-to-text"
    nextStep="Return to the launch hub"
  />
);

export default SpeechToText;
