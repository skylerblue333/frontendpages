const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/UserOnboarding.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst UserOnboarding = () => (\n  <FeatureUnavailable\n    title="User onboarding unavailable"\n    description="Production onboarding requires verified identity and session state, consent capture, profile persistence, privacy preferences, eligibility rules, safe recommendations, resumable progress, and audit history. No account, profile, consent, preference, completion, or recommendation result is created here."\n    capability="Account setup, onboarding, consent, and profile completion"\n    nextStep="Connect governed identity, profile, consent, privacy, recommendation, and audit services before enabling onboarding"\n  />\n);\n\nexport default UserOnboarding;\n`);
console.log(JSON.stringify({ changed: ['UserOnboarding.tsx'] }, null, 2));
