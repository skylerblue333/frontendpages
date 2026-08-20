import FeatureUnavailable from "@/components/FeatureUnavailable";

const TravelPhotos = () => (
  <FeatureUnavailable
    title="Travel photo sharing unavailable"
    description="Production photo sharing requires secure uploads, verified ownership and permissions, EXIF and location privacy controls, malware scanning, moderation, storage lifecycle rules, deletion, sharing scopes, and durable media records. No photo, album, location, author, upload, or sharing result is created here."
    capability="Travel photo upload, albums, metadata, and sharing"
    nextStep="Connect governed object storage, media security, privacy controls, identity, moderation, and sharing services before enabling photo sharing"
  />
);

export default TravelPhotos;
