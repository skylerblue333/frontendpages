import FeatureUnavailable from "@/components/FeatureUnavailable";

const TranscriptionManager = () => (
  <FeatureUnavailable
    title="Transcription manager unavailable"
    description="Transcription requires an approved model or provider, secure media upload, language and speaker handling, consent, retention and deletion rules, processing state, accuracy evaluation, export controls, and error recovery. No audio, transcript, language, speaker, delivery, or storage outcome is generated here."
    capability="Audio transcription, speaker processing, language handling, and transcript delivery"
    nextStep="Connect a governed transcription service with consent, privacy, model provenance, retention, and audited processing before enabling uploads"
  />
);

export default TranscriptionManager;
