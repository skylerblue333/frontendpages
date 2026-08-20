import FeatureUnavailable from "@/components/FeatureUnavailable";

const CookiePolicy = () => (
  <FeatureUnavailable
    title="Cookie policy controls unavailable"
    description="A trustworthy cookie policy requires an authoritative policy source, actual cookie and storage inventory, purposes and retention, consent categories, regional behavior, consent recording and withdrawal, vendor ownership, policy versioning, and validated enforcement. No cookie inventory, consent status, compliance, or regulatory claim is shown or asserted."
    capability="Auditable cookie disclosure and consent management"
    nextStep="Connect the approved privacy, consent, cookie-inventory, vendor, regional, and policy-publication controls before enabling this feature"
  />
);

export default CookiePolicy;
