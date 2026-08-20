const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/AgeGate.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst AgeGate = () => (\n  <FeatureUnavailable\n    title="Age-restricted service unavailable"\n    description="A sessionStorage self-attestation is not age verification. The prior gate also claimed legal compliance, performer documentation, content-custodian records, terms, and policy acceptance without evidence. No adult-content access is granted here."\n    capability="Age assurance, adult-content access, consent, and legal compliance"\n    nextStep="Obtain jurisdiction-specific legal review and connect an approved age-assurance, consent, moderation, records, and policy-acceptance service before enabling access"\n  />\n);\n\nexport default AgeGate;\n`);
console.log(JSON.stringify({ changed: ['AgeGate.tsx'] }, null, 2));
