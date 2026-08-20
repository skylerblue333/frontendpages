import { useMemo, useState } from "react";
import {
  CheckCircle2,
  FileKey2,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRoundCog,
  XCircle,
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
import { Input } from "@/components/ui/input";

type PrivacyBoundary = { title: string; area: string; description: string };
const boundaries: readonly PrivacyBoundary[] = [
  {
    title: "Identity, legal basis, and data inventory",
    area: "Governance",
    description:
      "No data-subject identity, processing purpose, legal basis, controller or processor scope, data inventory, retention rule, or consent record is loaded.",
  },
  {
    title: "Access, export, correction, and deletion",
    area: "Rights",
    description:
      "No verified request, identity-proofing flow, access bundle, export format, correction workflow, deletion policy, exception, or completion evidence is connected.",
  },
  {
    title: "Privacy, security, and processor controls",
    area: "Controls",
    description:
      "No privacy setting, access policy, encryption state, processor contract, transfer assessment, breach workflow, audit event, or incident evidence exists.",
  },
  {
    title: "Complaints, review, and accountability",
    area: "Assurance",
    description:
      "No supervisory contact, complaint record, response deadline, accountable owner, legal review, independent assessment, or compliance claim is available.",
  },
];

export default function GDPR() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "GDPR controls are unavailable locally. No personal data, consent, data-rights request, privacy setting, or compliance claim was processed."
  );
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return boundaries.filter(({ title, area, description }) =>
      `${title} ${area} ${description}`.toLowerCase().includes(q)
    );
  }, [query]);
  const unavailable = (action: string) =>
    setStatus(
      `${action} is unavailable locally. No personal data, consent, data-rights request, privacy setting, or compliance claim was processed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="gdpr-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <FileKey2 className="size-3.5" aria-hidden="true" />
                  Privacy readiness
                </Badge>
                <Badge variant="secondary">No privacy service</Badge>
              </div>
              <h1
                id="gdpr-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                GDPR readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review personal-data governance, data-subject rights, security
                controls, accountability, and evidence boundaries without
                claiming compliance or processing personal data.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>
        <section className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Privacy service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No data inventory, identity-proofing flow, rights-request
                system, consent store, processor register, legal review,
                incident workflow, or audit stream is connected. This is a
                planning boundary, not a compliance certification or legal
                determination.
              </p>
            </div>
          </div>
        </section>
        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="GDPR readiness status"
        >
          <Card>
            <CardContent className="p-5">
              <UserRoundCog
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No personal data loaded</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No data subject, consent, legal basis, data inventory, retention
                rule, or processing scope is presented.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No rights workflow</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No verified access, export, correction, deletion, restriction,
                objection, or portability request can run.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No compliance claim</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No certification, legal conclusion, audit result, security
                guarantee, or regulatory status exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Privacy-readiness map</CardTitle>
            <CardDescription>
              Search filters local boundary notes only and never inspects
              personal data, consent, requests, privacy settings, or compliance
              records.
            </CardDescription>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search GDPR readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search privacy requirements"
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map(({ title, area, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/70 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="outline">{area}</Badge>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="mt-4"
                    onClick={() => unavailable(`Manage ${title}`)}
                  >
                    Manage unavailable
                  </Button>
                </div>
              ))}
              {visible.length === 0 && (
                <div
                  className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground md:col-span-2"
                  role="status"
                >
                  No privacy notes match “{query}”.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <section className="rounded-2xl border border-border/70 bg-card/50 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 size-5 shrink-0 text-emerald-500"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold">
                Evidence required before activation
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                A production privacy surface needs a data inventory, documented
                purposes and legal bases, data-subject authentication, request
                SLAs, deletion and retention controls, processor governance,
                transfer safeguards, incident response, accountable owners,
                legal review, and independent evidence. This screen does not
                determine whether any legal requirement is satisfied.
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
