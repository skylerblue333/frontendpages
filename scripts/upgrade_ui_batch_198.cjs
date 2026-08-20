const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const routes = ['OrderTracking','OrderTypes','Pagination','PasswordInputForm','PasswordReset','PaymentConfirmation','PaymentInfra','PaymentMethods','PaymentSetup','PayoutManagement','PerformanceTuning','PermissionManagement','PersonaBuilder','PhoneVerification','PlatformMap','PlaylistManagement','PortfolioComparison','PortfolioOptimization','PortfolioOverview','PortfolioRebalance'];
const marker = 'data-ui-polish="batch-198"';
const changed=[];
for (const component of routes) {
  const file=path.join(root,'client/src/pages',`${component}.tsx`);
  let source=fs.readFileSync(file,'utf8');
  if (source.includes(marker)) continue;
  const match=source.match(/<div(\s+className=)/);
  if (!match) throw new Error(`No root div found in ${component}.tsx`);
  source=source.replace(match[0],`<div ${marker}${match[1]}`);
  fs.writeFileSync(file,source);
  changed.push(component);
}
console.log(JSON.stringify({batch:198,changed,routeCount:routes.length}));
