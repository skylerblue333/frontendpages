import { Inbox } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  hint?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, hint, actionLabel, onAction, icon, className }: EmptyStateProps) {
  const supportingText = description ?? hint;
  return (
    <div className={cn("flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-muted/20 px-6 py-10 text-center", className)}>
      <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary" aria-hidden="true">
        {icon ?? <Inbox className="size-5" />}
      </div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {supportingText ? <p className="mt-1.5 max-w-md text-sm leading-6 text-muted-foreground">{supportingText}</p> : null}
      {actionLabel && onAction ? <Button className="mt-5" size="sm" onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  );
}

export default EmptyState;
