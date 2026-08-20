import FeatureUnavailable from "@/components/FeatureUnavailable";

const PlaylistManager = () => (
  <FeatureUnavailable
    title="Playlist manager unavailable"
    description="Playlist management requires authenticated media ownership, content metadata, playback and storage providers, creator-rights handling, privacy, moderation, ordering persistence, and reliable sync. No playlist, video, playback, engagement, or saved-state outcome is created here."
    capability="Video playlists, media organization, playback, and synchronization"
    nextStep="Connect governed media and playlist services with rights, storage, moderation, and audit controls before enabling playlists"
  />
);

export default PlaylistManager;
