import FeatureUnavailable from "@/components/FeatureUnavailable";

const Tournaments = () => (
  <FeatureUnavailable
    title="Tournaments unavailable"
    description="A production tournament system requires verified games and rules, authenticated participants, eligibility and age controls, brackets, match reporting, anti-cheat and moderation, dispute handling, prize custody, payout controls, and auditable results. No tournament, entrant, match, ranking, reward, winner, or payout result is created here."
    capability="Tournament registration, competition operations, rankings, and rewards"
    nextStep="Connect governed competition services, identity, eligibility, anti-cheat, moderation, dispute, prize, and payout controls before enabling tournaments"
  />
);

export default Tournaments;
