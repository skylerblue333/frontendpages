import FeatureUnavailable from "@/components/FeatureUnavailable";

const BuildRoadmap = () => (
  <FeatureUnavailable
    title="Build roadmap"
    description="Roadmap status and completion claims are intentionally held at a truthful release boundary until each milestone has an owner, acceptance evidence, rollback plan, and verified deployment state."
    capability="Production roadmap and milestone acceptance"
    nextStep="Return to the launch hub"
  />
);

export default BuildRoadmap;
