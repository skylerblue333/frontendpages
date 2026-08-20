const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/WatchList.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst WatchList = () => (\n  <FeatureUnavailable\n    title="Watch list unavailable"\n    description="A production watch list requires a verified media catalog, authenticated ownership, durable list storage, availability and licensing metadata, search, privacy controls, and notification rules. No title, availability, rating, watch state, alert, or personal list entry is created here."\n    capability="Media discovery, watch lists, and availability tracking"\n    nextStep="Connect governed catalog, identity, list storage, licensing, search, and notification services before enabling watch lists"\n  />\n);\n\nexport default WatchList;\n`);
console.log(JSON.stringify({ changed: ['WatchList.tsx'] }, null, 2));
