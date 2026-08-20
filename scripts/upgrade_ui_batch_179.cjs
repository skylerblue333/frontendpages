const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = [
  ['AccountSettings', 'account-settings'],
  ['RevenueTracking', 'revenue-tracking'],
  ['DevOps', 'dev-ops'],
  ['GovernanceWizard', 'governance-wizard'],
  ['ContentScheduler', 'content-scheduler'],
  ['ReviewModeration', 'review-moderation'],
  ['GhostMode', 'ghost-mode'],
  ['ReturnManagement', 'return-management'],
  ['RewardSystem', 'reward-system'],
  ['Reviews', 'reviews'],
  ['ReturnsRefunds', 'returns-refunds'],
  ['RewardsMonitoring', 'rewards-monitoring'],
  ['ReviewsRatings', 'reviews-ratings'],
  ['DistributionChannels', 'distribution-channels'],
  ['DocumentSigning', 'document-signing'],
  ['DeveloperProtocol', 'developer-protocol'],
  ['DocumentEditor', 'document-editor'],
  ['Documentation', 'documentation'],
  ['DocumentSharing', 'document-sharing'],
  ['DiscordIntegration', 'discord-integration'],
];

const marker = 'data-ui-polish="batch-179"';
const changed = [];
for (const [component] of routes) {
  const file = path.join(root, 'client/src/pages', `${component}.tsx`);
  let source = fs.readFileSync(file, 'utf8');
  if (source.includes(marker)) continue;
  const match = source.match(/<div(\s+className=)/);
  if (!match) throw new Error(`No root div found in ${component}.tsx`);
  source = source.replace(match[0], `<div ${marker}${match[1]}`);
  fs.writeFileSync(file, source);
  changed.push(component);
}

const cssFile = path.join(root, 'client/src/index.css');
let css = fs.readFileSync(cssFile, 'utf8');
const cssMarker = '/* SKYCOIN4444 visual polish batch 179 */';
if (!css.includes(cssMarker)) {
  css += `\n\n${cssMarker}\n[data-ui-polish="batch-179"] {\n  position: relative;\n  isolation: isolate;\n  overflow: clip;\n  background:\n    radial-gradient(circle at 8% 4%, color-mix(in oklab, var(--primary) 13%, transparent), transparent 36%),\n    radial-gradient(circle at 94% 8%, color-mix(in oklab, var(--color-cyan-500) 10%, transparent), transparent 32%),\n    var(--background);\n}\n\n[data-ui-polish="batch-179"]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: -1;\n  background: linear-gradient(135deg, color-mix(in oklab, var(--foreground) 3%, transparent), transparent 42%);\n}\n\n[data-ui-polish="batch-179"] h1 {\n  letter-spacing: -0.035em;\n}\n\n[data-ui-polish="batch-179"] h2,\n[data-ui-polish="batch-179"] h3 {\n  letter-spacing: -0.02em;\n}\n\n[data-ui-polish="batch-179"] [class*="rounded-lg"],\n[data-ui-polish="batch-179"] [class*="rounded-xl"],\n[data-ui-polish="batch-179"] [class*="rounded-2xl"] {\n  box-shadow: 0 14px 38px color-mix(in oklab, var(--foreground) 8%, transparent);\n  backdrop-filter: blur(14px);\n}\n\n[data-ui-polish="batch-179"] button,\n[data-ui-polish="batch-179"] a {\n  transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease;\n}\n\n[data-ui-polish="batch-179"] button:hover:not(:disabled),\n[data-ui-polish="batch-179"] a:hover {\n  transform: translateY(-1px);\n}\n\n@media (max-width: 640px) {\n  [data-ui-polish="batch-179"] {\n    min-height: 100dvh;\n  }\n\n  [data-ui-polish="batch-179"] [class*="grid-cols-"] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n`;
  fs.writeFileSync(cssFile, css);
}

console.log(JSON.stringify({ batch: 179, changed, routeCount: routes.length, cssUpdated: !css.includes(`${cssMarker}\n`) }));
