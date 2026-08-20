const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/MobileShop.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst MobileShop = () => (\n  <FeatureUnavailable\n    title="Mobile marketplace unavailable"\n    description="A production marketplace requires authenticated catalog ownership, inventory, pricing, tax and shipping policy, seller authorization, payment processing, order state, refunds, fulfillment, fraud controls, and audit evidence. No product, price, purchase, order, or delivery outcome is created here."\n    capability="Mobile marketplace, checkout, orders, and fulfillment"\n    nextStep="Connect governed catalog, seller, payment, and fulfillment services before enabling commerce"\n  />\n);\n\nexport default MobileShop;\n`);
console.log(JSON.stringify({ changed: ['MobileShop.tsx'] }, null, 2));
