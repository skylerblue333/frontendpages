const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/VirtualTour.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst VirtualTour = () => (\n  <FeatureUnavailable\n    title="Virtual tours unavailable"\n    description="A production virtual-tour experience requires verified property or destination records, licensed media, spatial assets, secure delivery, accessibility support, privacy controls, and accurate location or availability metadata. No property, tour, asset, listing, booking, or navigation result is created here."\n    capability="Immersive virtual tours and spatial media"\n    nextStep="Connect governed property or destination data, licensed media storage, spatial delivery, identity, and privacy controls before enabling tours"\n  />\n);\n\nexport default VirtualTour;\n`);
console.log(JSON.stringify({ changed: ['VirtualTour.tsx'] }, null, 2));
