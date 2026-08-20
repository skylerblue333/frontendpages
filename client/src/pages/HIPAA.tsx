import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileCheck2,
  LockKeyhole,
  Search,
  ServerOff,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Boundary = { title: string; area: string; description: string };
const boundaries: readonly Boundary[] = [
  {
    title: "Covered data and system inventory",
    area: "Scope",
    description:
      "No data classification, protected health information inventory, system boundary, owner, or processing purpose is documented here.",
  },
  {
    title: "Administrative safeguards",
    area: "Governance",
    description:
      "No risk assessment, workforce training, access review, incident plan, sanction policy, or business associate record is connected.",
  },
  {
    title: "Technical safeguards",
    area: "Security",
    description:
      "No identity, least privilege, encryption, key management, audit logging, integrity, backup, or recovery evidence is loaded.",
  },
  {
    title: "Physical and operational safeguards",
    area: "Operations",
    description:
      "No facility, device, media, disposal, change management, monitoring, vulnerability, or continuity evidence exists.",
  },
  {
    title: "Individual rights and disclosures",
    area: "Privacy",
    description:
      "No access, amendment, accounting, restriction, disclosure, consent, retention, export, or deletion workflow is configured.",
  },
  {
    title: "Validation and attestation",
    area: "Assurance",
    description:
      "No independent assessment, control test, remediation record, incident evidence, certification, or compliance conclusion can be claimed.",
  },
];

export default function HIPAA() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "HIPAA readiness is unavailable locally. No compliance evidence, certification, PHI record, or mutation was loaded or saved."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(
      ({ title, area, description }) =>
        !q || `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No compliance record, PHI, control result, certification, or audit event was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="hipaa-title"
    >
      <div data-ui-polish="batch-191" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileCheck2 className="size-3.5" aria-hidden="true" />{" "}
                  Compliance readiness
                </Badge>
                <Badge variant="secondary">No compliance service</Badge>
              </div>
              <h1
                id="hipaa-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                HIPAA readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the safeguards, privacy, evidence, and assurance
                boundaries required for a health-data compliance program without
                claiming certification, compliance, or protected health
                information handling.
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
                Compliance evidence is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No compliance program, PHI boundary, risk assessment, control
                catalog, audit evidence, business associate agreement,
                certification, or independent attestation is connected. This is
                a planning boundary, not a compliance conclusion.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No data scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No PHI inventory, system boundary, data owner, purpose, or
                processor is documented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <ShieldCheck
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No control evidence</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No administrative, technical, physical, or operational test
                result is available.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No certification claim</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No audit, attestation, certification, remediation, or compliance
                status is presented.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Compliance-readiness map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local boundary notes only. It never
              processes PHI, evaluates compliance, records evidence, or creates
              an attestation.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search HIPAA readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter compliance requirements"
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
                    Review unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No compliance notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before any assurance statement
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A real program needs legal and privacy review, defined scope,
                risk analysis, policies, workforce controls, technical and
                physical safeguards, incident response, vendor agreements,
                control testing, remediation, independent assessment, and
                documented evidence. This screen is not legal advice or a
                certification.
              </p>
            </div>
          </div>
        </section>
        <p
          className="rounded-xl border border-border/30 bg-card/30 px-4 py-3 text-sm text-muted-foreground"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2
            className="mr-2 inline size-4 text-emerald-400"
            aria-hidden="true"
          />
          {status}
        </p>
      </div>
    </main>
  );
}
