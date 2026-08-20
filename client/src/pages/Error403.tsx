import FeatureUnavailable from "@/components/FeatureUnavailable";

const Error403 = () => (
  <FeatureUnavailable
    title="Access denied"
    description="The requested resource is not available under the current verified session and authorization context. This route does not reveal whether a protected record exists, expose permission details, or claim that an authorization change succeeded."
    capability="Verified authorization for the requested resource"
    nextStep="Return to the launch hub, sign in with an approved account, or contact the workspace administrator"
  />
);

export default Error403;
