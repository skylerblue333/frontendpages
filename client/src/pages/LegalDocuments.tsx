import { useMemo, useState } from "react";
import {
  FileCheck2,
  FileWarning,
  FolderLock,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  Signature,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Document provenance and ownership",
    area: "Trust",
    description:
      "No policy, agreement, notice, jurisdiction, author, owner, source, effective date, or legal-review record is connected.",
  },
  {
    title: "Version and publication lifecycle",
    area: "Content",
    description:
      "No draft, approval, publication, supersession, localization, revision history, or effective-version record is loaded.",
  },
  {
    title: "Access and acceptance evidence",
    area: "Consent",
    description:
      "No authenticated user, audience, consent, acknowledgment, signature, acceptance timestamp, or revocation record is verified.",
  },
  {
    title: "Privacy and retention",
    area: "Governance",
    description:
      "No access role, least-privilege rule, retention schedule, deletion control, export, redaction, or sensitive-document boundary is configured.",
  },
  {
    title: "Audit and operational recovery",
    area: "Operations",
    description:
      "No immutable audit trail, notification, delivery receipt, legal hold, incident process, rollback, or recovery evidence exists.",
  },
];
export default function LegalDocuments() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "LegalDocuments is unavailable locally. No legal document, version, approval, acceptance, signature, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requirements.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No legal document, version, publication, acknowledgment, signature, acceptance, or governance mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="legal-documents-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileCheck2 className="size-3.5" aria-hidden="true" />{" "}
                  Legal-document readiness
                </Badge>
                <Badge variant="secondary">No legal-document service</Badge>
              </div>
              <h1
                id="legal-documents-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Legal Documents readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the provenance, approval, versioning, access, acceptance,
                privacy, and audit contracts required for trustworthy
                legal-document operations without implying that policies,
                agreements, signatures, or acceptance records exist.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ServerOff
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Legal-document service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No governed document repository, legal-review workflow, version
                registry, acceptance evidence store, signature provider, or
                persistence layer is connected. This is a readiness workspace,
                not a legal-document vault.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <FolderLock
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No document records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No policy, agreement, notice, owner, jurisdiction, source,
                effective date, or version record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Signature
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No acceptance evidence</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No user, audience, acknowledgment, signature, acceptance
                timestamp, or revocation record is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No legal actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No draft, approve, publish, supersede, sign, acknowledge,
                revoke, export, or governance mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Legal-document governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads legal text, publishes a version, records acceptance,
              requests a signature, changes access, or saves a governance
              mutation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Legal Documents readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter legal-document requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(item => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge variant="outline">{item.area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Review ${item.title}`)}
                  >
                    <FileWarning className="mr-2 size-4" aria-hidden="true" />
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No legal-document notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production legal-document system needs document provenance and
                counsel approval, version and effective-date controls, secure
                access, acceptance and revocation evidence, signatures where
                required, privacy and retention controls, immutable
                auditability, legal holds, notifications, and tested recovery.
                No legal text, signature, or acceptance state is claimed here.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <ShieldCheck
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
