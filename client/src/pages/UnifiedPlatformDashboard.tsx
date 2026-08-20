import { useState } from "react";
import {
  Activity,
  BarChart3,
  CircleSlash2,
  Download,
  Globe2,
  LockKeyhole,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

type Range = "7 days" | "30 days" | "90 days";
type Tab = "Activity" | "Languages" | "Performance";
const metrics = [
  "Users",
  "Sessions",
  "Translations",
  "Average rating",
] as const;
export default function UnifiedPlatformDashboard() {
  const [range, setRange] = useState<Range>("7 days");
  const [tab, setTab] = useState<Tab>("Activity");
  const [status, setStatus] = useState(
    "Analytics service unavailable. Showing local dashboard structure only."
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No analytics query, telemetry read, user count, translation metric, performance claim, export, or account operation was started.`
    );
  return (
    <div data-ui-polish="batch-205" className="min-h-screen bg-background">
      <PageHeader
        icon={Globe2}
        title="Platform dashboard"
        subtitle="Review local analytics structure without fabricated users, sessions, translations, ratings, language rankings, accuracy, uptime, or response-time claims."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Analytics service unavailable.</strong> No verified telemetry,
          language-exchange data, translation service, performance monitor, or
          reporting endpoint is connected.
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Local dashboard structure
            </p>
            <h2 className="mt-1 text-2xl font-semibold">
              Platform analytics readiness
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["7 days", "30 days", "90 days"] as Range[]).map(item => (
              <Button
                aria-pressed={range === item}
                key={item}
                onClick={() => setRange(item)}
                size="sm"
                variant={range === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
            <Button
              onClick={() => blocked("Export report")}
              size="sm"
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" /> Export unavailable
            </Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(label => (
            <Card className="border-slate-800 bg-slate-900/75 p-5" key={label}>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-2xl font-semibold">Unavailable</p>
              <Badge className="mt-3" variant="outline">
                Source unavailable
              </Badge>
            </Card>
          ))}
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-wrap gap-2">
            {(["Activity", "Languages", "Performance"] as Tab[]).map(item => (
              <Button
                aria-pressed={tab === item}
                key={item}
                onClick={() => setTab(item)}
                size="sm"
                variant={tab === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-dashed border-slate-700 p-12 text-center">
            {tab === "Performance" ? (
              <Activity className="mx-auto h-9 w-9 text-slate-500" />
            ) : tab === "Languages" ? (
              <Globe2 className="mx-auto h-9 w-9 text-slate-500" />
            ) : (
              <BarChart3 className="mx-auto h-9 w-9 text-slate-500" />
            )}
            <h2 className="mt-4 text-xl font-semibold">
              {tab} data unavailable
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
              No verified {tab.toLowerCase()} dataset is connected for the
              selected {range} range. This preview does not render fabricated
              charts, distributions, accuracy, health, or user activity.
            </p>
            <Button
              className="mt-5"
              onClick={() => blocked(`Load ${tab.toLowerCase()} data`)}
              variant="outline"
            >
              Load unavailable
            </Button>
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <Users className="h-5 w-5 text-cyan-200" />
            <h2 className="mt-3 font-semibold">No user metrics</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No users, active users, sessions, learners, ratings, or language
              rankings are claimed.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">No health claims</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No uptime, API response time, translation accuracy, availability,
              or operational status is represented.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">No export</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No report is generated, downloaded, stored, or transmitted from
              this local dashboard.
            </p>
          </Card>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-5">
          <div className="flex gap-3">
            <LockKeyhole className="h-5 w-5 text-cyan-200" />
            <p className="text-sm leading-6 text-slate-400">
              Production analytics require a documented event schema, privacy
              controls, aggregation rules, retention policy, access
              authorization, data quality checks, and observable query failures.
            </p>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
      </div>
    </div>
  );
}
