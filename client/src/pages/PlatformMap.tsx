import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleSlash2,
  Compass,
  ExternalLink,
  Search,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "wouter";

type Group = "Core" | "Finance" | "AI" | "Education" | "Community";
type RouteEntry = {
  name: string;
  path: string;
  group: Group;
  summary: string;
  route: string;
  availability: string;
};
const routes: RouteEntry[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    group: "Core",
    summary: "Core navigation route registered in the client catalog.",
    route: "Registered",
    availability: "Feature availability unavailable",
  },
  {
    name: "Crypto hub",
    path: "/crypto",
    group: "Finance",
    summary:
      "Finance route catalog entry requiring verified market, wallet, and transaction services.",
    route: "Registered",
    availability: "Feature availability unavailable",
  },
  {
    name: "HopeAI",
    path: "/hope-ai",
    group: "AI",
    summary:
      "AI route catalog entry requiring a connected model, policy, quota, and observability contract.",
    route: "Registered",
    availability: "Feature availability unavailable",
  },
  {
    name: "SkySchool",
    path: "/skyschool",
    group: "Education",
    summary:
      "Education route catalog entry requiring a connected curriculum, progress, and certification service.",
    route: "Registered",
    availability: "Feature availability unavailable",
  },
  {
    name: "Community",
    path: "/community",
    group: "Community",
    summary:
      "Community route catalog entry requiring connected moderation, content, and privacy controls.",
    route: "Registered",
    availability: "Feature availability unavailable",
  },
];
export default function PlatformMap() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<Group | "All">("All");
  const visible = useMemo(
    () =>
      routes.filter(
        item =>
          (group === "All" || item.group === group) &&
          `${item.name} ${item.path} ${item.summary}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [group, query]
  );
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        icon={Compass}
        title="Platform map"
        subtitle="Browse a typed local route catalog without claiming that route registration proves feature availability, health, readiness, entitlement, or production status."
        badge="Local catalog"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Availability service unavailable.</strong> This map reports
          local route catalog entries only. It does not query live health,
          feature readiness, user entitlements, usage, or production metrics.
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Route catalog
              </p>
              <h2 className="mt-1 text-2xl font-semibold">
                Find platform entries
              </h2>
            </div>
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                aria-label="Search route catalog"
                className="pl-9"
                onChange={event => setQuery(event.target.value)}
                placeholder="Search routes"
                value={query}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {(
              [
                "All",
                "Core",
                "Finance",
                "AI",
                "Education",
                "Community",
              ] as Array<Group | "All">
            ).map(item => (
              <Button
                aria-pressed={group === item}
                key={item}
                onClick={() => setGroup(item)}
                size="sm"
                variant={group === item ? "default" : "outline"}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {visible.map(item => (
              <Card
                className="border-slate-800 bg-slate-950/60 p-5"
                key={item.path}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.path}</p>
                  </div>
                  <Badge variant="outline">{item.group}</Badge>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {item.summary}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Route</p>
                    <p className="mt-1 text-sm">{item.route}</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 p-3">
                    <p className="text-xs text-slate-500">Availability</p>
                    <p className="mt-1 text-sm">{item.availability}</p>
                  </div>
                </div>
                <Link href={item.path}>
                  <Button className="mt-4" size="sm" variant="outline">
                    Open route <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </Card>
            ))}
            {visible.length === 0 && (
              <div className="rounded-xl border border-slate-800 p-8 text-center text-sm text-slate-400 md:col-span-2">
                No local catalog entries match this query.
              </div>
            )}
          </div>
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-200" />
            <h2 className="mt-3 font-semibold">Route registration</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              A catalog entry indicates a client route reference only.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <CircleSlash2 className="h-5 w-5 text-slate-500" />
            <h2 className="mt-3 font-semibold">Feature readiness</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No live count, health, rarity, entitlement, usage, or production
              outcome is inferred.
            </p>
          </Card>
          <Card className="border-slate-800 bg-slate-900/75 p-5">
            <ShieldAlert className="h-5 w-5 text-amber-200" />
            <h2 className="mt-3 font-semibold">High-risk modules</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Finance, AI, education, and community routes require their own
              verified service contracts.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
