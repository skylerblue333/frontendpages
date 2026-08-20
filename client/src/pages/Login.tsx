import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Login() {
  const [previewVisible, setPreviewVisible] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black p-4 text-white" aria-labelledby="login-title">
      <div className="mx-auto max-w-2xl py-12">
        <h1 id="login-title" className="mb-3 text-3xl font-bold">Sign-in interface preview</h1>
        <p className="mb-8 text-slate-400">UI-only authentication preview. No credentials are collected, transmitted, stored, or verified.</p>
        <Card className="border-amber-400/30 bg-slate-900 p-8">
          <div className="space-y-6">
            <div role="status" className="rounded-lg border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
              A production sign-in flow requires an approved identity provider, exact redirect and callback validation, CSRF/state protection, secure cookies, session rotation, rate limits, account recovery, audit logging, and authorization tests.
            </div>
            <p className="text-slate-300">This preview lets the team verify layout and accessibility without claiming that a user logged in or that a session exists.</p>
            <Button type="button" onClick={() => setPreviewVisible(value => !value)} aria-expanded={previewVisible}>
              {previewVisible ? "Hide preview state" : "Show preview state"}
            </Button>
            {previewVisible && (
              <div role="alert" className="rounded-lg border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
                Preview only: authentication was not attempted and no account state changed.
              </div>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
