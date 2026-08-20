const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/SkillBadges.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst SkillBadges = () => (\n  <FeatureUnavailable\n    title="Skill badges unavailable"\n    description="Skill badges require a governed competency model, completed-learning records, assessment results, issuer authorization, anti-tamper verification, revocation, privacy controls, and an auditable credential registry. No badge, score, completion, certification, ranking, or reward is asserted here."\n    capability="Verified learning achievements and portable credentials"\n    nextStep="Connect the approved learning, assessment, issuer, verification, revocation, and credential-storage services before enabling badge issuance"\n  />\n);\n\nexport default SkillBadges;\n`);
console.log(JSON.stringify({ changed: ['SkillBadges.tsx'] }, null, 2));
