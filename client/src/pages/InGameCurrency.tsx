import FeatureUnavailable from "@/components/FeatureUnavailable";

const InGameCurrency = () => (
  <FeatureUnavailable
    title="In Game Currency"
    description="In Game Currency is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="In Game Currency on /in-game-currency"
    nextStep="Return to the launch hub"
  />
);

export default InGameCurrency;
