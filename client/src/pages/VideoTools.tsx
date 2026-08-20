import FeatureUnavailable from "@/components/FeatureUnavailable";

const VideoTools = () => (
  <FeatureUnavailable
    title="Video tools unavailable"
    description="Production video tools require governed source media, licensed assets, secure processing workers, deterministic rendering, resource limits, export storage, content safety, and durable job state. No edit, render, export, file, or publishing result is created here."
    capability="Video editing, rendering, export, and publishing tools"
    nextStep="Connect governed media storage, processing workers, export delivery, content safety, and observability services before enabling video tools"
  />
);

export default VideoTools;
