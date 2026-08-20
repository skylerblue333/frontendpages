const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = [
  ['BridgeTransactions', 'bridge-transactions'],
  ['BrowserExtension', 'browser-extension'],
  ['BudgetPlanner', 'budget-planner'],
  ['BugReporting', 'bug-reporting'],
  ['BulkOperations', 'bulk-operations'],
  ['BulkUpload', 'bulk-upload'],
  ['CCPA', 'c-c-p-a'],
  ['CDNManagement', 'c-d-n-management'],
  ['CacheManagement', 'cache-management'],
  ['Calculator', 'calculator'],
  ['Calendar', 'calendar'],
  ['CalendarView', 'calendar-view'],
  ['CampaignAnalytics', 'campaign-analytics'],
  ['CampaignBuilder', 'campaign-builder'],
  ['CampaignCreation', 'campaign-creation'],
  ['CarRental', 'car-rental'],
  ['CardGridView', 'card-grid-view'],
  ['CashFlowAnalysis', 'cash-flow-analysis'],
  ['CategoryManagement', 'category-management'],
  ['CertificateManager', 'certificate-manager'],
];
const marker = 'data-ui-polish="batch-182"';
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
console.log(JSON.stringify({ batch: 182, changed, routeCount: routes.length }));
