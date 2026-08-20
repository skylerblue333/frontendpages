import FeatureUnavailable from "@/components/FeatureUnavailable";

const PodcastStudio = () => (
  <FeatureUnavailable
    title="Podcast studio unavailable"
    description="A trustworthy podcast studio requires authorized media capture, editing and rendering services, durable project storage, file validation, upload and transcoding controls, rights and consent handling, publishing and distribution integrations, and recoverable job state. No recording, audio asset, edit, episode, publication, audience metric, or monetization result is shown or asserted."
    capability="Auditable podcast production and publishing workflow"
    nextStep="Connect approved media storage, capture, processing, rights, publishing, distribution, and monitoring services before enabling podcast production"
  />
);

export default PodcastStudio;
