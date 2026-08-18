import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export function VideoChat() {
  return (
    <FeatureUnavailable
      title="Video chat is not active"
      description="This route previously simulated a partner, connected calls, call duration, realtime translation, transcript entries, screen sharing, recording, and success notifications. It remains unavailable until verified identity and consent, WebRTC signaling, media permissions, translation providers, recording retention, moderation, and failure handling are implemented and tested."
      capability="Video chat, translation, transcripts, and screen sharing"
      nextStep="Review the launch readiness status"
    />
  );
}

export default VideoChat;
