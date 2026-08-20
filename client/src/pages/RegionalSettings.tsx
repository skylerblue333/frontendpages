import FeatureUnavailable from "@/components/FeatureUnavailable";

const RegionalSettings = () => (
  <FeatureUnavailable
    title="Regional settings unavailable"
    description="Locale, language, timezone, currency, number formatting, tax or legal presentation, consent, and persistence must be resolved through an approved account settings contract and verified regional policy. No region, timezone, currency, localization, or compliance preference is shown or saved here."
    capability="Verified regional preferences and localized presentation"
    nextStep="Connect the account settings service, supported-region policy, formatting rules, privacy controls, and migration-safe persistence before enabling changes"
  />
);

export default RegionalSettings;
