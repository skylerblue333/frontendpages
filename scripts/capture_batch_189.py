from __future__ import annotations
import json, re, subprocess, sys, time
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
ROUTES=['/f-a-q-page','/favorites','/feature-requests','/feature-tour','/feedback','/feedback-dialog','/feedback-form','/file-browser','/file-converter','/file-download','/file-preview','/file-upload-dialog','/file-upload-form','/file-upload-progress','/file-versioning','/filter-panel','/financial-reports','/flash-loans','/flight-search','/follow-list']
BASE=(sys.argv[1] if len(sys.argv)>1 else 'http://localhost:5173').rstrip('/')
OUT=ROOT/'docs/visual-review/batch-189'
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
print(json.dumps({'batch':189,'routes':len(ROUTES),'modes':['desktop','mobile']}))
