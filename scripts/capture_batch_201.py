from __future__ import annotations
import json, re, subprocess, sys, time
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
ROUTES=['/retirement-planner','/rewards-tracking','/risk-analysis','/risk-management','/roadmap','/roadmap-view','/role-based-access','/role-management','/s-d-k-download','/s-d-k-management','/s-e-o-optimizer','/s-k-y444-central-bank','/s-m-s-campaigns','/s-m-s-integration','/s-m-s-templates','/s-m-t-p-settings','/s-o-c2','/s-s-l-certificates','/s-s-o','/sales-analytics']
BASE=(sys.argv[1] if len(sys.argv)>1 else 'http://localhost:5173').rstrip('/')
OUT=ROOT/'docs/visual-review/batch-201'
for mode,width,height in (('desktop',1440,1000),('mobile',390,844)):
 folder=OUT/mode; folder.mkdir(parents=True,exist_ok=True)
 with (OUT/f'screenshot-results-{mode}.jsonl').open('w') as log:
  for i,route in enumerate(ROUTES,1):
   slug=re.sub(r'[^a-zA-Z0-9]+','-',route.strip('/')).strip('-') or 'home'; target=folder/f'{i:03d}-{slug}.png'; started=time.time()
   cmd=['chromium','--headless','--no-sandbox','--disable-gpu','--hide-scrollbars',f'--window-size={width},{height}','--run-all-compositor-stages-before-draw','--virtual-time-budget=5000',f'--screenshot={target}',BASE+route]
   try:
    p=subprocess.run(cmd,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=30)
    row={'index':i,'path':route,'mode':mode,'screenshot':str(target),'exit_code':p.returncode,'seconds':round(time.time()-started,2),'error':p.stderr[-500:] if p.returncode else ''}
   except subprocess.TimeoutExpired:
    row={'index':i,'path':route,'mode':mode,'screenshot':str(target),'exit_code':124,'seconds':round(time.time()-started,2),'error':'timeout'}
   log.write(json.dumps(row)+'\n'); log.flush(); print(json.dumps(row),flush=True)
print(json.dumps({'batch':201,'routes':len(ROUTES),'modes':['desktop','mobile']}))
