import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function LessonEditor() {
  return (
    <FeatureUnavailable
      title="Lesson editor is not active"
      description="This route currently exposes an authenticated shell without verified lesson authoring or delivery. It remains unavailable until instructor authorization, content versioning, media handling, accessibility, moderation, publication, learner access, and rollback are implemented and tested."
      capability="Education lesson authoring and publishing"
      nextStep="Review the launch readiness status"
    />
  );
}
