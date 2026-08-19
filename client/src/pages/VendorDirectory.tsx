import FeatureUnavailable from "@/components/FeatureUnavailable";

const VendorDirectory = () => (
  <FeatureUnavailable
    title="Vendor Directory"
    description="Vendor Directory is intentionally held at a truthful release boundary until its real provider, authorization, persistence, monitoring, and acceptance evidence are complete."
    capability="Vendor Directory on /vendor-directory"
    nextStep="Return to the launch hub"
  />
);

export default VendorDirectory;
