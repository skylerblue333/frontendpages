import FeatureUnavailable from "@/components/FeatureUnavailable";

const Error500 = () => (
  <FeatureUnavailable
    title="Service error"
    description="The application could not complete the requested operation because an internal service failure was detected. Technical details, credentials, provider responses, and partial financial or user state are intentionally withheld; no transaction, save, message, AI response, or recovery is claimed as successful."
    capability="Verified request completion and error recovery"
    nextStep="Return to the launch hub, retry after service health is restored, and contact support with a redacted request timestamp if the issue persists"
  />
);

export default Error500;
