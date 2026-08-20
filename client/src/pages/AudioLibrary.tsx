import FeatureUnavailable from "@/components/FeatureUnavailable";

const AudioLibrary = () => (
  <FeatureUnavailable
    title="Audio library unavailable"
    description="A production audio library requires governed media storage, upload validation, transcoding, playback delivery, ownership and licensing metadata, access controls, usage tracking, and deletion or retention workflows. No audio asset, playback state, license, storage result, or availability claim is created here."
    capability="Audio asset management, playback, licensing, and delivery"
    nextStep="Connect approved media storage, processing, CDN, identity, and licensing services before enabling audio workflows"
  />
);

export default AudioLibrary;
