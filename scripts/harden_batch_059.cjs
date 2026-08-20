const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/OfferManagement.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst OfferManagement = () => (\n  <FeatureUnavailable\n    title="Offer management unavailable"\n    description="Offer workflows require authenticated parties, an item or service catalog, pricing and currency rules, eligibility, expiry, negotiation state, acceptance authorization, payment, cancellation, and audit evidence. No offer, discount, redemption, purchase, or transaction outcome is created here."\n    capability="Offers, discounts, negotiation, and commerce transactions"\n    nextStep="Connect governed catalog, pricing, identity, payment, and audit services before enabling offers"\n  />\n);\n\nexport default OfferManagement;\n`);
console.log(JSON.stringify({ changed: ['OfferManagement.tsx'] }, null, 2));
