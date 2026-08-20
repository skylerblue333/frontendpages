const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const component = 'StakingOptions';
const marker = 'data-ui-polish="batch-209"';
const file=path.join(root,'client/src/pages',`${component}.tsx`);
let source=fs.readFileSync(file,'utf8');
if (!source.includes(marker)) {
  const match=source.match(/<div(\s+className=)/);
  if (!match) throw new Error(`No root div found in ${component}.tsx`);
  source=source.replace(match[0],`<div ${marker}${match[1]}`);
  fs.writeFileSync(file,source);
  console.log(JSON.stringify({batch:209,changed:[component],routeCount:1}));
} else {
  console.log(JSON.stringify({batch:209,changed:[],routeCount:1}));
}
