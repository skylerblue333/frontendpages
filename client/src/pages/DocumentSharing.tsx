import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FileKey2,
  Filter,
  Link2,
  MailPlus,
  Search,
  Settings,
  ShieldAlert,
  Users,
  UserX,
  Download,
  XCircle,
} from "lucide-react";

type Area = "all" | "access" | "delivery" | "governance";
type Requirement = {
  title: string;
  description: string;
  area: Exclude<Area, "all">;
  icon: typeof Users;
};
const REQUIREMENTS: readonly Requirement[] = [
  {
    title: "Collaborators and permissions",
    description:
      "Verified identities, roles, scopes, inherited permissions, and least-privilege access need an authoritative document and identity service.",
    area: "access",
    icon: Users,
  },
  {
    title: "Invitations and share links",
    description:
      "Invitations, link tokens, expiry, domain restrictions, acceptance, and revocation need secure delivery and persistence contracts.",
    area: "delivery",
    icon: MailPlus,
  },
  {
    title: "Downloads and exports",
    description:
      "Downloads, watermarks, export formats, malware scanning, and audit trails need controlled document storage and policy enforcement.",
    area: "delivery",
    icon: Download,
  },
  {
    title: "Access governance",
    description:
      "Review, revoke, retention, notifications, and audit events need durable records and accountable operators.",
    area: "governance",
    icon: FileKey2,
  },
];

export default function DocumentSharing() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState<Area>("all");
  const [status, setStatus] = useState(
    "Document sharing unavailable locally. No document, collaborator, permission, invitation, link, download, audit, notification, or persistence mutation was started."
  );
  const requirements = useMemo(
    () =>
      REQUIREMENTS.filter(item => {
        const matchesQuery =
          !query ||
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(query.toLowerCase());
        return matchesQuery && (area === "all" || item.area === area);
      }),
    [query, area]
  );
  const announceUnavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No document, collaborator, permission, invitation, link, download, audit, notification, or persistence mutation was started.`
    );
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="document-sharing-title"
    >
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <header className="space-y-3">
          <Badge variant="outline" className="border-cyan-400/30 text-cyan-200">
            SHARING READINESS PREVIEW
          </Badge>
          <h1
            id="document-sharing-title"
            className="flex items-center gap-2 text-3xl font-bold tracking-tight"
          >
            <Link2 className="h-7 w-7 text-cyan-300" aria-hidden="true" />
            Document sharing
          </h1>
          <p className="max-w-3xl text-muted-foreground">
            Review access and delivery requirements without inventing documents,
            collaborators, permissions, invitations, links, downloads, or audit
            records.
          </p>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Document sharing unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No document store, identity provider, permission ledger,
                invitation delivery, link service, download pipeline, audit
                trail, or notification service is connected. This page contains
                planning requirements only.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 p-5">
            <FileKey2
              className="mb-3 h-5 w-5 text-sky-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Access unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No document, owner, collaborator, role, scope, or permission is
              loaded.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <MailPlus
              className="mb-3 h-5 w-5 text-violet-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Invites unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No invitation, acceptance, expiry, or notification state exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <Download
              className="mb-3 h-5 w-5 text-amber-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Downloads unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No file, export, watermark, scan, or download authorization
              exists.
            </p>
          </Card>
          <Card className="border-border/40 bg-card/50 p-5">
            <UserX
              className="mb-3 h-5 w-5 text-emerald-300"
              aria-hidden="true"
            />
            <p className="text-lg font-semibold">Revocation unavailable</p>
            <p className="mt-2 text-sm text-muted-foreground">
              No access review, revoke event, retention policy, or audit record
              is authoritative.
            </p>
          </Card>
        </section>
        <section
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Sharing requirement filters"
        >
          <label htmlFor="sharing-search" className="sr-only">
            Search sharing requirements
          </label>
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="sharing-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search sharing requirements"
              className="w-full rounded-xl border border-border/40 bg-card/40 py-3 pl-10 pr-3 text-sm outline-none ring-primary/40 focus:ring-2"
            />
          </div>
          {(["all", "access", "delivery", "governance"] as const).map(value => (
            <Button
              key={value}
              type="button"
              variant={area === value ? "default" : "outline"}
              onClick={() => setArea(value)}
            >
              <Filter className="mr-2 h-4 w-4" aria-hidden="true" />
              {value === "all"
                ? "All"
                : value[0].toUpperCase() + value.slice(1)}
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => announceUnavailable("Sharing settings")}
          >
            <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
            Settings unavailable
          </Button>
        </section>
        <section aria-labelledby="sharing-requirements-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="sharing-requirements-title"
                className="text-xl font-semibold"
              >
                Sharing requirements
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Local filters only. Nothing is invited, granted, linked,
                downloaded, revoked, or persisted.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => announceUnavailable("Invitation creation")}
            >
              <MailPlus className="mr-2 h-4 w-4" aria-hidden="true" />
              Invite unavailable
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map(item => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/40 bg-card/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-secondary/60 p-3">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge
                          variant="outline"
                          className="border-muted-foreground/30 text-muted-foreground"
                        >
                          {item.area}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="mt-4"
                        onClick={() =>
                          announceUnavailable(`${item.title} workflow`)
                        }
                      >
                        Manage unavailable
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {requirements.length === 0 && (
              <Card className="border-border/40 bg-card/30 p-8 text-center md:col-span-2">
                <XCircle
                  className="mx-auto mb-3 h-7 w-7 text-muted-foreground"
                  aria-hidden="true"
                />
                <p className="font-semibold">No sharing requirements found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search is local and does not query document or collaborator
                  records.
                </p>
              </Card>
            )}
          </div>
        </section>
        <section className="grid gap-4 md:grid-cols-4">
          <Card className="border-border/40 bg-card/30 p-5">
            <Users className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Share unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No collaborator, role, scope, or access grant can be saved.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Sharing")}
            >
              Share unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Link2 className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Copy link unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No secure link token, expiry, restriction, or revocation state
              exists.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Share-link creation")}
            >
              Copy link unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <Download
              className="mb-3 h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <h2 className="font-semibold">Download unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No file, export, scan, watermark, or authorization can be
              delivered.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Download")}
            >
              Download unavailable
            </Button>
          </Card>
          <Card className="border-border/40 bg-card/30 p-5">
            <UserX className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-semibold">Revoke unavailable</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No access record, notification, retention event, or audit entry
              can be changed.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => announceUnavailable("Access revocation")}
            >
              Revoke unavailable
            </Button>
          </Card>
        </section>
        <section className="rounded-2xl border border-border/40 bg-card/30 p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">No access-control claim</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production sharing system needs authenticated identities,
                least-privilege permissions, secure invitation and link tokens,
                expiry, download controls, revocation, notifications, retention,
                and an auditable permission ledger.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </main>
  );
}
