import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function MovieDetail() {
  return (
    <FeatureUnavailable
      title="Movie details are not active"
      description="This route currently exposes an authenticated shell without verified content or media services. It remains unavailable until licensed catalog provenance, availability, age and regional controls, ratings and reviews, recommendations, playback or purchase authorization, privacy, and provider failure handling are implemented and tested."
      capability="Movie catalog detail, recommendations, and playback or purchase"
      nextStep="Review the launch readiness status"
    />
  );
}
