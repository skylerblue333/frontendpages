import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SchoolLesson() {
  return (
    <FeatureUnavailable
      title="Lesson delivery is not active"
      description="This route previously displayed hard-coded lessons, completion progress, XP rewards, downloadable resources, discussion records, saved notes, and a local Mark Complete success state. It remains unavailable until real content delivery, account-scoped progress, assessment, resource access, discussion persistence, moderation, and reward accounting are implemented."
      capability="Education lesson playback, progress, resources, and discussion"
      nextStep="Review the launch readiness status"
    />
  );
}
