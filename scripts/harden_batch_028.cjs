const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/ITServicesPortal.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst ITServicesPortal = () => (\n  <FeatureUnavailable\n    title="IT services portal unavailable"\n    description="Client identity, projects, support tickets, reports, invoices, spend, uptime, audit completion, patch status, and outbound support actions require an authenticated tenant, service-management provider, billing source, monitoring evidence, and accountable operations. No client or service outcome is represented here."\n    capability="Managed IT services, support, reporting, billing, and uptime"\n    nextStep="Connect an approved service-management and billing integration"\n  />\n);\n\nexport default ITServicesPortal;\n`);
console.log(JSON.stringify({ changed: ['ITServicesPortal.tsx'] }, null, 2));
