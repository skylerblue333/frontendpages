import FeatureUnavailable from "@/components/FeatureUnavailable";

const VideoUploader = () => (
  <FeatureUnavailable
    title="Video upload unavailable"
    description="Production video ingestion requires authenticated ownership, secure upload URLs, file-size and type validation, malware scanning, storage lifecycle controls, transcoding workers, moderation, copyright policy, retry handling, and durable processing state. No file is uploaded, stored, transcoded, published, or marked successful here."
    capability="Video upload, transcoding, moderation, and publishing"
    nextStep="Connect governed object storage, upload security, media processing, moderation, policy, and observability services before enabling uploads"
  />
);

export default VideoUploader;
