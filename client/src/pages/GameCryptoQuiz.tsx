import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function GameCryptoQuiz() {
  return (
    <FeatureUnavailable
      title="Crypto Quiz Blitz is not active"
      description="This route previously graded hard-coded questions in the browser and displayed XP, streaks, SKY444 donations, accuracy, and education-fund completion claims. It remains unavailable until secure question delivery, server-side grading, anti-cheating controls, account-scoped progress, and independently verifiable charity and reward accounting are implemented and tested."
      capability="Crypto education quiz, rewards, and charity accounting"
      nextStep="Review the launch readiness status"
    />
  );
}
