import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export default function APIDocs() {
  return (
    <FeatureUnavailable
      title="Public API documentation is not active"
      description="This route previously presented unverified endpoints, a production API hostname, bearer and API-key examples, token generation, agent and order operations, rate limits, GraphQL and webhook claims, and SDK links. It remains unavailable until the deployed API contract, authentication and authorization, input/output schemas, rate limiting, secrets handling, security review, versioning, monitoring, and external endpoint evidence are verified."
      capability="API reference, authentication, SDK, and integration documentation"
      nextStep="Review the launch readiness status"
    />
  );
}
