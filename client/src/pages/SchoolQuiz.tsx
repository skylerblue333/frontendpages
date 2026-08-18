import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function SchoolQuiz() {
  return (
    <FeatureUnavailable
      title="School quizzes are not active"
      description="This route previously delivered hard-coded questions, graded answers in the browser, and displayed pass/fail, accuracy, XP, and continuation states without durable learner records. It remains unavailable until secure question delivery, server-side grading, attempt limits, assessment integrity, account-scoped progress, accessibility, and certificate or reward linkage are implemented and tested."
      capability="Education quizzes, assessment, and learner progression"
      nextStep="Review the launch readiness status"
    />
  );
}
