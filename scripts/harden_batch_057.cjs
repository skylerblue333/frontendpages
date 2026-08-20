const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/VenueManagement.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst VenueManagement = () => (\n  <FeatureUnavailable\n    title="Venue management unavailable"\n    description="Venue management requires verified location ownership, availability and capacity records, booking rules, pricing, payment handling, cancellation policy, safety requirements, and durable audit trails. No venue, reservation, availability, payment, or event outcome is created here."\n    capability="Venues, availability, reservations, and event operations"\n    nextStep="Connect governed venue and booking services with payment, safety, cancellation, and audit controls before enabling reservations"\n  />\n);\n\nexport default VenueManagement;\n`);
console.log(JSON.stringify({ changed: ['VenueManagement.tsx'] }, null, 2));
