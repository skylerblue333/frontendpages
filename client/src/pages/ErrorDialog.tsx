import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ErrorDialog() {
  const [state, setState] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-black p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">ErrorDialog</h1>
        <p className="text-slate-400 mb-8">Local error-state preview; no request or recovery action is performed.</p>

        <Card className="bg-slate-900 border-slate-800 p-8">
          <div className="space-y-6">
            <p className="text-slate-300">Use this preview to verify error feedback and recovery affordances without claiming a real operation failed.</p>
            <Button onClick={() => setState(!state)} aria-expanded={state}>
              {state ? "Clear preview" : "Show error preview"}
            </Button>
            {state && (
              <div role="alert" className="rounded-lg border border-rose-400/30 bg-rose-400/10 p-4 text-sm text-rose-100">
                Local preview error: no production request was made. Retry behavior must be connected to a real operation before release.
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
