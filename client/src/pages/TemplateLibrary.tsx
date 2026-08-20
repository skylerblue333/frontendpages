import FeatureUnavailable from "@/components/FeatureUnavailable";

const TemplateLibrary = () => (
  <FeatureUnavailable
    title="Template library unavailable"
    description="A production template library requires governed content storage, ownership and licensing, versioning, preview and rendering safety, tenant isolation, approval workflow, delivery-provider compatibility, unsubscribe and consent controls, and auditable publication state. No template, author, version, approval, delivery, or marketplace result is created here."
    capability="Email-template creation, versioning, reuse, and delivery preparation"
    nextStep="Connect governed content and tenant storage, identity, licensing, rendering, approval, consent, and delivery services before enabling templates"
  />
);

export default TemplateLibrary;
