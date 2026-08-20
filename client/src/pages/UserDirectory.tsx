import FeatureUnavailable from "@/components/FeatureUnavailable";

const UserDirectory = () => (
  <FeatureUnavailable
    title="User directory unavailable"
    description="A production user directory requires verified identity records, privacy and discoverability rules, authorization, tenant isolation, search controls, moderation, audit history, and safe account administration. No user, profile, search result, permission, or management action is exposed here."
    capability="User directory, account discovery, and administration"
    nextStep="Connect governed identity, directory, authorization, privacy, and audit services before enabling user discovery"
  />
);

export default UserDirectory;
