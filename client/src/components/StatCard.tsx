import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardColor = "primary" | "success" | "accent" | "warning" | "danger";

interface StatCardProps {
  label: string;
  value: ReactNode;
  icon?: LucideIcon | ReactNode;
  change?: number;
  changeLabel?: string;
  color?: StatCardColor;
  className?: string;
}

const colorStyles: Record<StatCardColor, string> = {
  primary: "bg-primary/10 text-primary ring-primary/15",
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/15",
  accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/15",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/15",
  danger: "bg-destructive/10 text-destructive ring-destructive/15",
};

export function StatCard({
  label,
  value,
  icon,
  change,
  changeLabel = "from previous period",
  color = "primary",
  className,
}: StatCardProps) {
  const Icon = typeof icon === "function" ? (icon as LucideIcon) : null;
  const iconNode = typeof icon === "function" ? null : (icon as ReactNode | undefined);
  const trendIcon = change == null ? <Minus className="size-3.5" /> : change >= 0 ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />;
  const trendColor = change == null ? "text-muted-foreground" : change >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400";

  return (
    <Card className={cn("overflow-hidden border-border/70 bg-card/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md", className)}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="mt-2 truncate text-2xl font-semibold tracking-tight text-foreground">{value}</p>
          </div>
          {icon ? (
            <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl ring-1", colorStyles[color])} aria-hidden="true">
              {Icon ? <Icon className="size-5" /> : iconNode}
            </div>
          ) : null}
        </div>
        {change !== undefined ? (
          <div className={cn("mt-4 flex items-center gap-1 text-xs font-medium", trendColor)}>
            {trendIcon}
            <span>{Math.abs(change).toFixed(1)}%</span>
            <span className="font-normal text-muted-foreground">{changeLabel}</span>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default StatCard;
