const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = [
  ['AlertConfiguration', 'alert-configuration'],
  ['AlertManagement', 'alert-management'],
  ['Analytics', 'analytics'],
  ['AnalyticsReports', 'analytics-reports'],
  ['AnomalyDetection', 'anomaly-detection'],
  ['AntiSurveillance', 'anti-surveillance'],
  ['ApprovalWorkflows', 'approval-workflows'],
  ['ArbitrageBot', 'arbitrage-bot'],
  ['ArchiveManagement', 'archive-management'],
  ['AssetTracking', 'asset-tracking'],
  ['AssignmentTracker', 'assignment-tracker'],
  ['AudienceSegmentation', 'audience-segmentation'],
  ['AudioEditing', 'audio-editing'],
  ['BatchGeneration', 'batch-generation'],
  ['Beta', 'beta'],
  ['BlockBrowser', 'block-browser'],
  ['BlogEditor', 'blog-editor'],
  ['BlogPublisher', 'blog-publisher'],
  ['BookPage', 'book-page'],
  ['BrandGuidelines', 'brand-guidelines'],
];
const marker = 'data-ui-polish="batch-181"';
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
console.log(JSON.stringify({ batch: 181, changed, routeCount: routes.length }));
