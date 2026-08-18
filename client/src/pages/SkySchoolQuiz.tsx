import { FeatureUnavailable } from "@/components/FeatureUnavailable";

type SkySchoolQuizProps = {
  lessonId: string;
  onComplete?: (result: unknown) => void;
};

export default function SkySchoolQuiz(_props: SkySchoolQuizProps) {
  return (
    <FeatureUnavailable
      title="SkySchool quizzes are not active"
      description="This route previously graded hard-coded questions entirely in the browser, emitted pass/fail success states, invoked completion callbacks, and generated a certificate from client-side results. It remains unavailable until secure question delivery, server-side grading, attempt controls, assessment integrity, progress persistence, and credential issuance are implemented and tested."
      capability="Education quizzes, grading, completion, and certificates"
      nextStep="Review the launch readiness status"
    />
  );
}
