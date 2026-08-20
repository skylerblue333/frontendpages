import { useState } from "react";
import {
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  MoreHorizontal,
  Settings,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MenuAction = {
  label: string;
  description: string;
  icon: typeof Copy;
  tone?: "default" | "danger";
};

const menuActions: readonly MenuAction[] = [
  {
    label: "Copy local reference",
    description:
      "Copies no production identifier; this demo action only updates local status.",
    icon: Copy,
  },
  {
    label: "Open unavailable",
    description:
      "No route, record, document, or external destination is connected.",
    icon: ExternalLink,
  },
  {
    label: "Settings unavailable",
    description:
      "No account, permission, preference, or integration setting is changed.",
    icon: Settings,
  },
  {
    label: "Delete unavailable",
    description:
      "No record, file, account, or content can be deleted from this pattern preview.",
    icon: Trash2,
    tone: "danger",
  },
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(
    "No menu action selected."
  );

  const handleAction = (action: MenuAction) => {
    setSelectedAction(
      `${action.label}: local preview only. No external or destructive operation was started.`
    );
    setOpen(false);
  };

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="dropdown-menu-title"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <MoreHorizontal className="size-3.5" aria-hidden="true" />
                  Interaction pattern
                </Badge>
                <Badge variant="secondary">Local preview</Badge>
              </div>
              <h1
                id="dropdown-menu-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Dropdown menu readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                A keyboard-accessible menu pattern for safe local actions. It
                demonstrates open, close, focus, selection, and status feedback
                without connecting navigation, account data, records, or
                destructive operations.
              </p>
            </div>
            <ShieldCheck
              className="size-8 shrink-0 text-primary"
              aria-hidden="true"
            />
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1fr_1.1fr]"
          aria-label="Dropdown menu preview and contract"
        >
          <Card>
            <CardHeader>
              <CardTitle>Menu preview</CardTitle>
              <CardDescription>
                Use the trigger to inspect the local-only menu behavior.
                Selecting an item closes the menu and updates status text only.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative inline-block">
                <Button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onClick={() => setOpen(current => !current)}
                >
                  {open ? "Close menu" : "Open menu"}
                  <ChevronDown
                    className={`ml-2 size-4 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </Button>
                {open && (
                  <div
                    role="menu"
                    aria-label="Local preview actions"
                    className="absolute left-0 top-full z-10 mt-2 w-72 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg"
                  >
                    {menuActions.map(action => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={action.label}
                          type="button"
                          role="menuitem"
                          onClick={() => handleAction(action)}
                          className="flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left text-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <Icon
                            className={`mt-0.5 size-4 shrink-0 ${action.tone === "danger" ? "text-destructive" : "text-primary"}`}
                            aria-hidden="true"
                          />
                          <span>
                            <span className="block font-medium">
                              {action.label}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                              {action.description}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p
                className="mt-5 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                <Check
                  className="mr-2 inline size-4 text-emerald-500"
                  aria-hidden="true"
                />
                {selectedAction}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interaction contract</CardTitle>
              <CardDescription>
                These guarantees keep a menu safe when it is embedded in a real
                product.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border/70 p-4">
                <p className="font-medium text-foreground">
                  Keyboard and focus
                </p>
                <p className="mt-1 leading-6">
                  The trigger exposes expanded state and menu intent; menu items
                  are native buttons with visible focus treatment and close
                  after selection.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 p-4">
                <p className="font-medium text-foreground">Truthful actions</p>
                <p className="mt-1 leading-6">
                  No item claims to open a route, copy a production reference,
                  change settings, or delete data. Each action updates only
                  local status.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 p-4">
                <p className="font-medium text-foreground">
                  Production integration boundary
                </p>
                <p className="mt-1 leading-6">
                  A real menu needs a defined action contract, authorization,
                  loading and failure feedback, analytics privacy,
                  destructive-action confirmation, and tests for keyboard
                  behavior.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          className="rounded-2xl border border-border/70 bg-card/50 p-6"
          aria-labelledby="menu-states-title"
        >
          <div className="flex items-start gap-3">
            <Settings
              className="mt-0.5 size-5 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 id="menu-states-title" className="font-semibold">
                States covered by this preview
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Closed, open, selected, and local status states are represented.
                Loading, authorization, routing, persistence, destructive
                confirmation, error recovery, and external integration states
                remain unavailable until a real contract exists.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
