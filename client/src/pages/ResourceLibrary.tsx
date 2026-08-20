import FeatureUnavailable from "@/components/FeatureUnavailable";

const ResourceLibrary = () => (
  <FeatureUnavailable
    title="Resource library unavailable"
    description="A trustworthy resource library requires an approved catalog, content provenance, licensing and access rules, search/indexing, versioning, storage, download authorization, malware scanning, retention, and audit history. No course material, resource count, ownership, download, access grant, or completion state is shown or claimed here."
    capability="Verified learning-resource catalog and delivery"
    nextStep="Connect the approved education catalog, storage, authorization, scanning, versioning, and observability services before publishing materials"
  />
);

export default ResourceLibrary;
