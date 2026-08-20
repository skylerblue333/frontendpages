import FeatureUnavailable from "@/components/FeatureUnavailable";

const MembershipTiers = () => (
  <FeatureUnavailable
    title="Membership tiers unavailable"
    description="Group membership levels require an authenticated group, entitlement policy, pricing and billing provider, access-control service, moderation, refunds, tax handling, and audit evidence. No tier, subscriber, benefit, payment, or access outcome is created or represented here."
    capability="Membership plans, subscriptions, entitlements, and group access"
    nextStep="Connect governed membership and billing infrastructure before enabling tiers"
  />
);

export default MembershipTiers;
