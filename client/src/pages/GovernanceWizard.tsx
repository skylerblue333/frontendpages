import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  LockKeyhole,
  ShieldCheck,
  Vote,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ProposalType = { id: string; label: string; description: string };
const proposalTypes: readonly ProposalType[] = [
  {
    id: "parameter",
    label: "Parameter change",
    description: "Fees, limits, thresholds, or other protocol parameters.",
  },
  {
    id: "treasury",
    label: "Treasury spend",
    description: "A request to allocate governed funds to an initiative.",
  },
  {
    id: "upgrade",
    label: "Protocol upgrade",
    description: "A proposed contract, client, or protocol change.",
  },
  {
    id: "community",
    label: "Community initiative",
    description: "A program, partnership, or ecosystem proposal.",
  },
  {
    id: "emergency",
    label: "Emergency action",
    description: "An urgent security or critical-fix proposal.",
  },
];
const durations = ["3", "7", "14", "30"] as const;
const initialOptions = ["Approve", "Reject", "Abstain"];

export default function GovernanceWizard() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState<string[]>(initialOptions);
  const [duration, setDuration] = useState<(typeof durations)[number]>("7");
  const [status, setStatus] = useState(
    "Governance service is unavailable locally. Nothing has been submitted or saved."
  );

  const selectedType = useMemo(
    () => proposalTypes.find(item => item.id === type),
    [type]
  );
  const steps = ["Type", "Details", "Options", "Review"] as const;

  const unavailable = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No proposal, stake, vote, wallet state, or governance record was changed.`
    );
  };

  const next = () => {
    if (step === 0 && !type) {
      setStatus(
        "Choose a local proposal concept before reviewing the next planning step."
      );
      return;
    }
    setStep(value => Math.min(value + 1, steps.length - 1));
  };

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="governance-wizard-title"
    >
      <div data-ui-polish="batch-179" className="mx-auto max-w-4xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2">
                  <Vote className="size-3.5" aria-hidden="true" /> Governance
                  planning
                </Badge>
                <Badge variant="secondary">No governance service</Badge>
              </div>
              <h1
                id="governance-wizard-title"
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Proposal readiness planner
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                Draft a local proposal concept and review the controls required
                before a governance workflow can safely accept a submission.
              </p>
            </div>
            <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          </div>
        </header>

        <section
          className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5"
          aria-label="Governance service status"
        >
          <div className="flex items-start gap-3">
            <LockKeyhole
              className="mt-0.5 size-5 shrink-0 text-amber-200"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-semibold text-amber-100">
                Submission is unavailable
              </h2>
              <p className="mt-1 text-sm leading-6 text-amber-100/75">
                No authenticated governance identity, stake verification,
                proposal validation, voting contract, wallet signer, or
                persistence layer is connected. This planner does not claim that
                a proposal is live.
              </p>
            </div>
          </div>
        </section>

        <section
          className="grid gap-4 sm:grid-cols-3"
          aria-label="Governance readiness status"
        >
          <Card>
            <CardContent className="p-5">
              <FileText
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">Local draft only</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fields remain in page memory and are never sent or persisted.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <LockKeyhole
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No stake scope</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No balance, stake, eligibility, delegation, or voting power is
                displayed.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <XCircle
                className="mb-3 size-5 text-primary"
                aria-hidden="true"
              />
              <h2 className="font-semibold">No active vote</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No proposal ID, vote period, quorum, result, or chain
                transaction exists.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Local planning steps</CardTitle>
            <div
              className="flex flex-wrap items-center gap-2 pt-2"
              aria-label="Proposal planning progress"
            >
              {steps.map((label, index) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold ${index < step ? "bg-primary text-primary-foreground" : index === step ? "border border-primary text-primary" : "bg-muted text-muted-foreground"}`}
                    aria-current={index === step ? "step" : undefined}
                  >
                    {index < step ? (
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span className="text-sm text-muted-foreground">{label}</span>
                  {index < steps.length - 1 && (
                    <span
                      className="mx-1 hidden h-px w-6 bg-border sm:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            {step === 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">
                  Choose a proposal concept
                </h2>
                {proposalTypes.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setType(item.id)}
                    className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-colors ${type === item.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}
                    aria-pressed={type === item.id}
                  >
                    <span
                      className={`mt-0.5 size-4 rounded-full border ${type === item.id ? "border-primary bg-primary" : "border-muted-foreground"}`}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-semibold">{item.label}</span>
                      <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  Describe the local concept
                </h2>
                <div>
                  <label
                    htmlFor="proposal-title"
                    className="mb-1 block text-sm font-medium"
                  >
                    Title
                  </label>
                  <Input
                    id="proposal-title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Short, clear proposal title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="proposal-description"
                    className="mb-1 block text-sm font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    id="proposal-description"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    placeholder="Rationale, scope, risks, and expected impact"
                    className="min-h-32 w-full resize-y rounded-lg border border-border bg-background p-3 text-sm outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <fieldset>
                  <legend className="mb-2 text-sm font-medium">
                    Illustrative voting duration
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {durations.map(value => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setDuration(value)}
                        className={`rounded-lg border px-4 py-2 text-sm ${duration === value ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"}`}
                        aria-pressed={duration === value}
                      >
                        {value} days
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    Illustrative voting options
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    These labels are local draft content, not a deployed ballot.
                  </p>
                </div>
                {options.map((option, index) => (
                  <div key={`${index}-${option}`} className="flex gap-2">
                    <label htmlFor={`option-${index}`} className="sr-only">
                      Voting option {index + 1}
                    </label>
                    <Input
                      id={`option-${index}`}
                      value={option}
                      onChange={event =>
                        setOptions(current =>
                          current.map((item, itemIndex) =>
                            itemIndex === index ? event.target.value : item
                          )
                        )
                      }
                    />
                    {options.length > 2 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        aria-label={`Remove voting option ${index + 1}`}
                        onClick={() =>
                          setOptions(current =>
                            current.filter(
                              (_, itemIndex) => itemIndex !== index
                            )
                          )
                        }
                      >
                        <XCircle className="size-4" aria-hidden="true" />
                      </Button>
                    )}
                  </div>
                ))}
                {options.length < 5 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setOptions(current => [
                        ...current,
                        `Option ${current.length + 1}`,
                      ])
                    }
                  >
                    Add local option
                  </Button>
                )}
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Review local draft</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Type", selectedType?.label ?? "Not selected"],
                    ["Title", title || "Not provided"],
                    ["Duration", `${duration} days (illustrative)`],
                    ["Options", options.join(", ")],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-1 font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">
                  No submission is available. A real workflow must verify
                  identity, stake and eligibility, proposal schema, signer
                  intent, network, quorum, voting period, audit trail, and
                  transaction status.
                </div>
                <Button
                  type="button"
                  onClick={() => unavailable("Submit proposal")}
                  disabled
                >
                  <Vote className="mr-2 size-4" aria-hidden="true" />
                  Submit unavailable
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep(value => Math.max(value - 1, 0))}
            disabled={step === 0}
          >
            <ChevronLeft className="mr-2 size-4" aria-hidden="true" />
            Back
          </Button>
          {step < steps.length - 1 && (
            <Button type="button" onClick={next}>
              Next
              <ChevronRight className="ml-2 size-4" aria-hidden="true" />
            </Button>
          )}
        </div>
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
