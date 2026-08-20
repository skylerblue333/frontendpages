const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/PricingRules.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst PricingRules = () => (\n  <FeatureUnavailable\n    title="Pricing rules unavailable"\n    description="Dynamic pricing requires an authenticated product catalog, currency and tax policy, billing provider, rule governance, approvals, audit, customer disclosures, and rollback controls. No price, discount, rate, charge, or billing outcome is calculated here."\n    capability="Dynamic pricing, billing rules, discounts, and commercial controls"\n    nextStep="Connect governed catalog and billing infrastructure before enabling pricing rules"\n  />\n);\n\nexport default PricingRules;\n`);
console.log(JSON.stringify({ changed: ['PricingRules.tsx'] }, null, 2));
