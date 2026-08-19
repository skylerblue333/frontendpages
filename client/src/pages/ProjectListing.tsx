import FeatureUnavailable from "@/components/FeatureUnavailable";

const ProjectListing = () => (
  <FeatureUnavailable
    title="Project Listing"
    description="Project Listing is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Project Listing on /project-listing"
    nextStep="Return to the launch hub"
  />
);

export default ProjectListing;
