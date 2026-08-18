import { FeatureUnavailable } from "@/components/FeatureUnavailable";

export function EmailVerification() {
  return (
    <FeatureUnavailable
      title="Email verification is not active"
      description="This route previously accepted any six-digit client-side code, stored an email_verified flag in local storage, displayed a fake resend success, and redirected after a simulated verification. It remains unavailable until server-side token issuance and hashing, expiry and replay protection, delivery-provider evidence, account binding, rate limiting, and audit-safe success/error handling are implemented and tested."
      capability="Email verification and account activation"
      nextStep="Review the launch readiness status"
    />
  );
}

export default EmailVerification;
