import { useMemo, useState } from "react";
import {
  CheckCircle2,
  CircleSlash2,
  Clock3,
  Command,
  LockKeyhole,
  MicOff,
  Plus,
  Search,
  ShieldAlert,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/PageHeader";

type Category = "All" | "Navigation" | "Account" | "Finance" | "AI";
type CommandIntent = {
  id: string;
  label: string;
  category: Exclude<Category, "All">;
  description: string;
  execution: string;
  route: string;
  confirmation: string;
};
const commands: CommandIntent[] = [
  {
    id: "open-dashboard",
    label: "Open dashboard",
    category: "Navigation",
    description:
      "Navigation intent concept; no route dispatch is enabled from this registry.",
    execution: "Execution unavailable",
    route: "Route unavailable",
    confirmation: "Confirmation policy unavailable",
  },
  {
    id: "review-wallet",
    label: "Review wallet",
    category: "Finance",
    description:
      "Sensitive finance intent concept pending wallet ownership, network, authorization, and confirmation controls.",
    execution: "Execution unavailable",
    route: "Route unavailable",
    confirmation: "Confirmation policy unavailable",
  },
  {
    id: "ask-hope",
    label: "Ask HopeAI",
    category: "AI",
    description:
      "AI intent concept pending model policy, transcript privacy, quota, tool authorization, and auditability.",
    execution: "Execution unavailable",
    route: "Route unavailable",
    confirmation: "Confirmation policy unavailable",
  },
  {
    id: "update-account",
    label: "Update account",
    category: "Account",
    description:
      "Account mutation intent concept pending authenticated authorization, explicit confirmation, and rollback handling.",
    execution: "Execution unavailable",
    route: "Route unavailable",
    confirmation: "Confirmation policy unavailable",
  },
];
export default function VoiceCommandsRegistry() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(commands[0]);
  const [status, setStatus] = useState(
    "Command service unavailable. Showing local intent concepts only."
  );
  const visible = useMemo(
    () =>
      commands.filter(
        item =>
          (category === "All" || item.category === category) &&
          `${item.label} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase())
      ),
    [category, query]
  );
  const blocked = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No microphone, transcript, command dispatch, route navigation, account, wallet, financial, AI, notification, or history operation was started.`
    );
  return (
    <div data-ui-polish="batch-205" className="min-h-screen bg-background">
      <PageHeader
        icon={Command}
        title="Voice command registry"
        subtitle="Review local command intents without fabricated microphone access, transcripts, routes, execution, account mutations, financial operations, or AI tool calls."
        badge="Local preview"
        badgeVariant="outline"
      />
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm text-amber-100">
          <strong>Command service unavailable.</strong> No microphone consent,
          speech recognizer, transcript store, intent router, authorization
          policy, execution endpoint, or command history service is connected.
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <Card className="border-slate-800 bg-slate-900/75 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Intent catalog
                </p>
                <h2 className="mt-1 text-2xl font-semibold">
                  Review command concepts
                </h2>
              </div>
              <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <Input
                  aria-label="Search commands"
                  className="pl-9"
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search commands"
                  value={query}
                />
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Local entries describe intent structure only. They do not indicate
              that a command can hear, understand, navigate, transact, mutate an
              account, invoke AI tools, or produce a durable history record.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(
                ["All", "Navigation", "Account", "Finance", "AI"] as Category[]
              ).map(item => (
                <Button
                  aria-pressed={category === item}
                  key={item}
                  onClick={() => setCategory(item)}
                  size="sm"
                  variant={category === item ? "default" : "outline"}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {visible.map(item => (
                <button
                  className={`rounded-xl border p-5 text-left ${selected.id === item.id ? "border-cyan-400/35 bg-cyan-400/10" : "border-slate-800 bg-slate-950/60"}`}
                  key={item.id}
                  onClick={() => setSelected(item)}
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.category}
                      </p>
                    </div>
                    <Badge variant="outline">Unavailable</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </button>
              ))}
              {visible.length === 0 && (
                <div className="rounded-xl border border-slate-800 p-8 text-center text-sm text-slate-400 md:col-span-2">
                  No local intents match this query.
                </div>
              )}
            </div>
          </Card>
          <aside>
            <Card className="border-slate-800 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Selected intent
              </p>
              <h2 className="mt-2 text-xl font-semibold">{selected.label}</h2>
              <div className="mt-5 grid gap-2">
                {(
                  [
                    ["Execution", selected.execution],
                    ["Route", selected.route],
                    ["Confirmation", selected.confirmation],
                    ["Audit", "Audit record unavailable"],
                  ] as Array<[string, string]>
                ).map(([label, value]) => (
                  <div
                    className="rounded-lg border border-slate-800 p-3"
                    key={label}
                  >
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2">
                <Button
                  onClick={() => blocked("Test command")}
                  variant="outline"
                >
                  <MicOff className="mr-2 h-4 w-4" /> Live test unavailable
                </Button>
                <Button
                  onClick={() => blocked("Execute command")}
                  variant="outline"
                >
                  <Terminal className="mr-2 h-4 w-4" /> Execute unavailable
                </Button>
              </div>
            </Card>
            <Card className="mt-6 border-slate-800 bg-slate-900/75 p-6">
              <div className="flex gap-3">
                <LockKeyhole className="h-5 w-5 text-cyan-200" />
                <p className="text-sm leading-6 text-slate-400">
                  Voice commands require explicit microphone consent, transcript
                  minimization, intent validation, authenticated authorization,
                  confirmation for impact, and auditable execution.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <ShieldAlert className="h-5 w-5 text-amber-200" />
                <p className="text-sm leading-6 text-slate-400">
                  No wallet, account, navigation, AI tool, notification,
                  financial, or transaction command is dispatched by this
                  preview.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <CircleSlash2 className="h-5 w-5 text-slate-500" />
                <p className="text-sm leading-6 text-slate-400">
                  No transcript, microphone input, command history, custom
                  command, or success outcome is fabricated.
                </p>
              </div>
            </Card>
          </aside>
        </div>
        <Card className="border-slate-800 bg-slate-900/75 p-6">
          <div className="flex items-start gap-3">
            <Plus className="mt-0.5 h-5 w-5 text-cyan-200" />
            <div>
              <h2 className="font-semibold">Custom commands</h2>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Custom registration is unavailable until intent schemas,
                permissions, review, versioning, and execution safeguards are
                connected.
              </p>
              <Button
                className="mt-4"
                onClick={() => blocked("Register custom command")}
                variant="outline"
              >
                Register unavailable
              </Button>
            </div>
          </div>
        </Card>
        <p
          aria-live="polite"
          className="rounded-lg border border-slate-800 p-4 text-sm text-slate-400"
        >
          {status}
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Local intent
          catalog; no microphone or command dispatch occurred.
        </div>
      </div>
    </div>
  );
}
