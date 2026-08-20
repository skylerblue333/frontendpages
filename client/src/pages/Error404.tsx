import FeatureUnavailable from "@/components/FeatureUnavailable";

const Error404 = () => (
  <FeatureUnavailable
    title="Page not found"
    description="The requested route could not be verified in the current application release. No account, wallet, market, education, AI, or community record is inferred from the missing path, and no fallback data is fabricated."
    capability="Verified route resolution"
    nextStep="Return to the launch hub or open the dashboard through a known route"
  />
);

export default Error404;
