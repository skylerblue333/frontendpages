import FeatureUnavailable from "@/components/FeatureUnavailable";

const LiveStreamSetup = () => (
  <FeatureUnavailable
    title="Live streaming unavailable"
    description="Live-stream setup requires an approved media provider, ingest and playback endpoints, broadcaster identity, moderation, recording, consent, storage, bandwidth, monitoring, and rollback controls. No stream, viewer, broadcast, publication, or media outcome is created here."
    capability="Live-stream configuration, publication, and playback"
    nextStep="Connect a governed media provider before enabling stream operations"
  />
);

export default LiveStreamSetup;
