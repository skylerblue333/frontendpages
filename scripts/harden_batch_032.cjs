const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/RealTimeMonitoring.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst RealTimeMonitoring = () => (\n  <FeatureUnavailable\n    title="Real-time monitoring unavailable"\n    description="No live metrics, telemetry source, endpoint inventory, probe, alert route, incident feed, or monitoring configuration is connected. The prior screen did not establish real-time availability, latency, throughput, uptime, or SLA evidence."\n    capability="Real-time metrics, monitoring, alerts, and operational controls"\n    nextStep="Connect an approved observability provider before showing live status"\n  />\n);\n\nexport default RealTimeMonitoring;\n`);
console.log(JSON.stringify({ changed: ['RealTimeMonitoring.tsx'] }, null, 2));
