import { ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  icon?: LucideIcon;
  backHref?: string;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ title, description, subtitle, icon: Icon, backHref, badge, badgeVariant = "secondary", actions, children, className }: PageHeaderProps) {
  const supportingText = description ?? subtitle;
  return (
    <header className={cn("mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between", className)}>
      <div className="flex min-w-0 items-start gap-3">
        {backHref ? (
          <Button variant="ghost" size="icon" className="mt-0.5 shrink-0" asChild aria-label="Go back">
            <Link href={backHref}><ArrowLeft className="size-4" /></Link>
          </Button>
        ) : null}
        {Icon ? <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></div> : null}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h1>
            {badge ? <Badge variant={badgeVariant}>{badge}</Badge> : null}
          </div>
          {supportingText ? <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted-foreground">{supportingText}</p> : null}
          {children ? <div className="mt-4">{children}</div> : null}
        </div>
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
    </header>
  );
}

export default PageHeader;
