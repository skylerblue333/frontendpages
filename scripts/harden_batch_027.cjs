const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/DayTradeRoom.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst DayTradeRoom = () => (\n  <FeatureUnavailable\n    title="Trading workspace unavailable"\n    description="Live prices, AI trading signals, confidence scores, portfolio history, and trade execution require an approved market-data provider, risk controls, account authorization, order-routing, settlement, audit, and rollback evidence. This screen does not provide financial advice or execute trades."\n    capability="Market data, trading signals, and order execution"\n    nextStep="Connect approved financial infrastructure before enabling trading"\n  />\n);\n\nexport default DayTradeRoom;\n`);
console.log(JSON.stringify({ changed: ['DayTradeRoom.tsx'] }, null, 2));
