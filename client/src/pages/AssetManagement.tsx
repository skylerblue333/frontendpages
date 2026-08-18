import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function AssetManagement() {
  return (
    <FeatureUnavailable
      title="Asset management is not active"
      description="This route currently exposes an authenticated shell without verified marketing-asset storage or workflows. It remains unavailable until account and tenant ownership, upload validation, malware scanning, storage and retention, versioning, access control, publishing, deletion, audit, and recovery are implemented and tested."
      capability="Marketing asset storage, versioning, and publishing"
      nextStep="Review the launch readiness status"
    />
  );
}
