const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
fs.writeFileSync(path.join(root, 'client/src/pages/LiveStreamSetup.tsx'), `import FeatureUnavailable from "@/components/FeatureUnavailable";\n\nconst LiveStreamSetup = () => (\n  <FeatureUnavailable\n    title="Live streaming unavailable"\n    description="Live-stream setup requires an approved media provider, ingest and playback endpoints, broadcaster identity, moderation, recording, consent, storage, bandwidth, monitoring, and rollback controls. No stream, viewer, broadcast, publication, or media outcome is created here."\n    capability="Live-stream configuration, publication, and playback"\n    nextStep="Connect a governed media provider before enabling stream operations"\n  />\n);\n\nexport default LiveStreamSetup;\n`);
console.log(JSON.stringify({ changed: ['LiveStreamSetup.tsx'] }, null, 2));
