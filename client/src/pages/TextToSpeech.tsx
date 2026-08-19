import FeatureUnavailable from "@/components/FeatureUnavailable";

const TextToSpeech = () => (
  <FeatureUnavailable
    title="Text To Speech"
    description="Text To Speech is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Text To Speech on /text-to-speech"
    nextStep="Return to the launch hub"
  />
);

export default TextToSpeech;
