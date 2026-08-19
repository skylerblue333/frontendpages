import FeatureUnavailable from "@/components/FeatureUnavailable";

const VideoCall = () => (
  <FeatureUnavailable
    title="Video Call"
    description="Video Call is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Video Call on /video-call"
    nextStep="Return to the launch hub"
  />
);

export default VideoCall;
