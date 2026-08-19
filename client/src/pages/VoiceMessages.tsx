import FeatureUnavailable from "@/components/FeatureUnavailable";

const VoiceMessages = () => (
  <FeatureUnavailable
    title="Voice Messages"
    description="Voice Messages is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Voice Messages on /voice-messages"
    nextStep="Return to the launch hub"
  />
);

export default VoiceMessages;
