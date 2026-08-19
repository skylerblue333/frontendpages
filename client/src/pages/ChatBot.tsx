import { useMemo, useState } from "react";
import {
  Bot,
  FileCheck2,
  KeyRound,
  LockKeyhole,
  MessageSquareText,
  Search,
  ShieldCheck,
  SlidersHorizontal,
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

type ChatCapability = { title: string; description: string; icon: typeof Bot };

const chatCapabilities: ChatCapability[] = [
  {
    title: "Model and provider contract",
    description:
      "No approved model, provider, capability, version, region, cost, availability, or fallback identity is connected.",
    icon: Bot,
  },
  {
    title: "Conversation and prompts",
    description:
      "Messages, system instructions, context limits, attachments, streaming, retries, and conversation persistence are not configured.",
    icon: MessageSquareText,
  },
  {
    title: "Safety and privacy",
    description:
      "Input/output moderation, prompt-injection defenses, sensitive-data handling, retention, redaction, and user disclosures are not verified.",
    icon: ShieldCheck,
  },
  {
    title: "Access and reliability",
    description:
      "Account authorization, rate limits, abuse controls, secret isolation, error states, audit logs, and provider recovery are unavailable.",
    icon: KeyRound,
  },
];

export default function ChatBot() {
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCapabilities = useMemo(
    () =>
      chatCapabilities.filter(({ title, description }) =>
        `${title} ${description}`.toLowerCase().includes(normalizedQuery)
      ),
    [normalizedQuery]
  );

  return (
    <main
      className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8"
      aria-labelledby="chat-bot-title"
    >
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="gap-2">
                  <LockKeyhole className="size-3.5" aria-hidden="true" />
                  AI boundary
                </Badge>
                <Badge variant="secondary">Not active</Badge>
              </div>
              <div>
                <h1
                  id="chat-bot-title"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Chatbot readiness
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
                  This route documents safe conversational AI operations without
                  pretending that a model, provider, conversation, response, or
                  memory state is live.
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled
              aria-disabled="true"
            >
              Start conversation unavailable
            </Button>
          </div>
        </header>

        <section
          className="grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          aria-label="Chatbot status"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                    Truthful AI state
                  </CardTitle>
                  <CardDescription className="mt-2">
                    No model, provider, prompt, message, response, tool call,
                    memory, or conversation state is loaded or generated.
                  </CardDescription>
                </div>
                <Bot className="size-5 text-amber-500" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
                <h2 className="font-medium">
                  No verified chatbot service is available
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A real contract must define model and provider identity,
                  prompt and context handling, safety controls, privacy,
                  authorization, rate limits, streaming, persistence, and
                  provider failure states before this route can accept a message
                  or display a response.
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2"
                aria-label="Unavailable chatbot actions"
              >
                {[
                  "Choose model",
                  "Start conversation",
                  "Send message",
                  "Clear history",
                ].map(label => (
                  <Button
                    key={label}
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled
                    aria-disabled="true"
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Release requirements</CardTitle>
              <CardDescription>
                These safeguards must be verified before chatbot controls are
                enabled.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Approved model/provider, capability, version, region, cost,
                availability, fallback, and secret isolation.
              </p>
              <p>
                System instructions, context limits, attachments, streaming,
                retries, tools, memory, and persistence semantics.
              </p>
              <p>
                Input/output moderation, prompt-injection defenses,
                sensitive-data handling, retention, redaction, and disclosures.
              </p>
              <p>
                Account authorization, rate limits, abuse controls, error
                states, audit logs, provider recovery, and redacted telemetry.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Chatbot capability map</CardTitle>
            <CardDescription>
              Search is local-only and does not call a model, send prompts,
              store messages, stream output, or persist memory.
            </CardDescription>
            <div className="relative max-w-md pt-2">
              <Search
                className="pointer-events-none absolute left-3 top-4 size-4 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search chatbot capability notes"
                placeholder="Search capability notes"
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent>
            {visibleCapabilities.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {visibleCapabilities.map(
                  ({ title, description, icon: Icon }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-border/70 p-4"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <Icon
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        {title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground"
                role="status"
              >
                No capability notes match “{searchQuery}”.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
