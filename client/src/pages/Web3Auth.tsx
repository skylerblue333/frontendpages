import FeatureUnavailable from "@/components/FeatureUnavailable";

const Web3Auth = () => (
  <FeatureUnavailable
    title="Web3 authentication unavailable"
    description="Safe wallet authentication requires an approved provider and chain policy, domain and origin binding, nonce and replay protection, wallet-address validation, signature verification, session lifecycle, phishing-resistant UX, consent, disconnect and revocation behavior, and secure audit logging. No wallet connection, signature, address, identity, session, authorization, or account-linking success is shown or claimed here."
    capability="Verified Web3 wallet authentication"
    nextStep="Connect approved wallet providers and server-side signature verification, then validate nonce, origin, session, revocation, and recovery controls before enabling authentication"
  />
);

export default Web3Auth;
