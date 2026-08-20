import FeatureUnavailable from "@/components/FeatureUnavailable";

const CodeRepository = () => (
  <FeatureUnavailable
    title="Code repository unavailable"
    description="Repository browsing requires an approved source-control integration, explicit repository and branch authorization, secure token handling, access auditing, rate limits, webhooks or synchronization, and clear read/write boundaries. No repository, branch, commit, issue, pull request, deployment, or synchronization state is shown or asserted."
    capability="Governed source-code repository browsing and collaboration"
    nextStep="Connect the approved source-control provider with least-privilege access, token isolation, audit logging, synchronization, and explicit read/write controls before enabling this feature"
  />
);

export default CodeRepository;
