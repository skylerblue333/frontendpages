import { useMemo, useState } from "react";
import {
  Award,
  BookOpen,
  FileWarning,
  GraduationCap,
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

type Requirement = { title: string; area: string; description: string };
const requirements: readonly Requirement[] = [
  {
    title: "Curriculum and content provenance",
    area: "Content",
    description:
      "No course, module, lesson, instructor, syllabus, version, source, accessibility annotation, or curriculum approval record is connected.",
  },
  {
    title: "Learner identity and enrollment",
    area: "Access",
    description:
      "No authenticated learner, cohort, enrollment, entitlement, age or safeguarding signal, consent, or workspace record is loaded.",
  },
  {
    title: "Progress and assessment",
    area: "Learning",
    description:
      "No lesson completion, attempt, quiz, score, rubric, feedback, mastery, prerequisite, or progress persistence exists.",
  },
  {
    title: "Certificates and rewards",
    area: "Credentials",
    description:
      "No certificate issuer, credential verification, reward ledger, token balance, eligibility rule, or issuance audit is verified.",
  },
  {
    title: "Privacy and operations",
    area: "Governance",
    description:
      "No retention, export or deletion control, moderation, audit event, notification, sync job, recovery, or incident evidence exists.",
  },
];
export default function Learning() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState(
    "Learning is unavailable locally. No curriculum, learner, progress, assessment, certificate, reward, or mutation was loaded or saved."
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
      `${action} is unavailable locally. No course, enrollment, progress, assessment, certificate, reward, or education mutation was changed.`
    );
  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="learning-title"
    >
      <div data-ui-polish="batch-193" className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <GraduationCap className="size-3.5" aria-hidden="true" />{" "}
                  Curriculum-readiness workspace
                </Badge>
                <Badge variant="secondary">No learning service</Badge>
              </div>
              <h1
                id="learning-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Learning readiness
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Review the curriculum, learner, progress, assessment,
                credential, reward, privacy, and operations contracts required
                for trustworthy education without implying that lessons,
                progress, certificates, or rewards exist.
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
                Learning service is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No verified curriculum, learner identity, enrollment, progress
                store, assessment engine, credential issuer, reward ledger, or
                persistence layer is connected. This is a readiness workspace,
                not a populated learning center.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-5">
              <BookOpen
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No curriculum records</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No course, module, lesson, instructor, syllabus, learner,
                enrollment, or cohort record is loaded.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <Award className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h2 className="font-semibold">No outcomes or rewards</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No completion, quiz, score, certificate, credential, reward,
                token balance, or issuance state is verified.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No learning actions</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No enrollment, lesson start, progress save, assessment
                submission, certificate issue, or reward mutation exists.
              </p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Curriculum-governance map</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Search filters immutable local requirement notes only. It never
              loads a course, enrolls a learner, saves progress, grades an
              assessment, issues a certificate, or changes a reward ledger.
            </p>
            <div className="relative max-w-xl pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search Learning readiness notes"
                value={query}
                onChange={event => setQuery(event.target.value)}
                placeholder="Filter curriculum-readiness requirements"
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
                  No curriculum-readiness notes match “{query}”.
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
                A production learning system needs approved curriculum
                provenance, authenticated enrollment, accessible content,
                progress and assessment persistence, transparent grading,
                certificate verification, reward accounting, privacy and
                safeguarding controls, auditability, notifications, and tested
                recovery. No lesson, progress, certificate, credential, or
                reward state is claimed here.
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
