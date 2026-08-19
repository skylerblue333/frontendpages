import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScreenPreviewBanner } from "@/components/ScreenExperience";
import {
  Bot,
  CheckCircle2,
  ChevronLeft,
  Circle,
  ImageOff,
  LockKeyhole,
  MessageCircle,
  MoreHorizontal,
  PhoneOff,
  Search,
  Send,
  ShieldAlert,
  SmilePlus,
  Sparkles,
  VideoOff,
  WalletCards,
  XCircle,
} from "lucide-react";

type ThreadKind = "sample" | "ai-preview";

type Thread = {
  id: string;
  name: string;
  initials: string;
  kind: ThreadKind;
  preview: string;
  time: string;
  unread: number;
};

type SampleMessage = {
  id: string;
  text: string;
  mine: boolean;
  time: string;
};

const THREADS: readonly Thread[] = [
  {
    id: "sample-a",
    name: "Sample conversation A",
    initials: "A",
    kind: "sample",
    preview: "Local sample message",
    time: "sample",
    unread: 0,
  },
  {
    id: "sample-b",
    name: "Sample conversation B",
    initials: "B",
    kind: "sample",
    preview: "Conversation preview only",
    time: "sample",
    unread: 0,
  },
  {
    id: "ai-preview",
    name: "AI provider preview",
    initials: "AI",
    kind: "ai-preview",
    preview: "Provider unavailable",
    time: "—",
    unread: 0,
  },
];

const SAMPLE_MESSAGES: Readonly<Record<string, readonly SampleMessage[]>> = {
  "sample-a": [
    {
      id: "a-1",
      text: "This is a local conversation sample for layout review.",
      mine: false,
      time: "sample",
    },
    {
      id: "a-2",
      text: "No message has been delivered to another person.",
      mine: true,
      time: "sample",
    },
  ],
  "sample-b": [
    {
      id: "b-1",
      text: "Conversation history is unavailable until a verified messaging provider is connected.",
      mine: false,
      time: "sample",
    },
  ],
  "ai-preview": [
    {
      id: "ai-1",
      text: "AI replies, signal analysis, summaries, and translations are unavailable in this preview.",
      mine: false,
      time: "unavailable",
    },
  ],
};

export default function DMInbox() {
  const [selectedId, setSelectedId] = useState("sample-a");
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");
  const [status, setStatus] = useState(
    "Messaging service unavailable locally. No message, notification, AI, or account mutation was started."
  );

  const selected =
    THREADS.find(thread => thread.id === selectedId) ?? THREADS[0];
  const messages = SAMPLE_MESSAGES[selected.id] ?? [];
  const filteredThreads = useMemo(
    () =>
      THREADS.filter(thread =>
        thread.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const announceUnavailable = (action: string) => {
    setStatus(
      `${action} is unavailable locally. No message, notification, AI, financial, media, or account mutation was started.`
    );
  };

  const selectThread = (id: string) => {
    setSelectedId(id);
    setMobileView("chat");
    setStatus(
      "Local conversation preview selected. No presence, read receipt, notification, or delivery state was changed."
    );
  };

  return (
    <main
      className="flex min-h-[calc(100vh-4rem)] flex-col bg-background"
      aria-labelledby="dm-inbox-title"
    >
      <ScreenPreviewBanner title="Messaging preview boundary">
        <strong>
          Local conversation samples are shown for layout review only.
        </strong>{" "}
        Messages, presence, encryption, Hope AI replies, token tips, calls,
        uploads, and delivery status are not connected to a verified provider or
        ledger.
      </ScreenPreviewBanner>
      <div className="flex min-h-[calc(100vh-8rem)] flex-1 overflow-hidden">
        <section
          className={`${mobileView === "chat" ? "hidden md:flex" : "flex"} w-full flex-col border-r border-border/30 bg-card/30 md:w-80`}
          aria-labelledby="thread-list-title"
        >
          <div className="border-b border-border/30 p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h1
                id="dm-inbox-title"
                className="flex items-center gap-2 text-lg font-bold"
              >
                <MessageCircle
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                Messages
              </h1>
              <Badge
                variant="outline"
                className="border-amber-400/30 text-amber-200"
              >
                Preview
              </Badge>
            </div>
            <h2 id="thread-list-title" className="sr-only">
              Local conversation samples
            </h2>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                aria-label="Search local conversation samples"
                className="h-9 border-border/30 bg-background/50 pl-9 text-sm"
                placeholder="Search local samples"
                value={search}
                onChange={event => setSearch(event.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 space-y-1 overflow-y-auto p-2">
            {filteredThreads.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">
                No local samples match this search.
              </p>
            ) : (
              filteredThreads.map(thread => (
                <button
                  key={thread.id}
                  type="button"
                  onClick={() => selectThread(thread.id)}
                  aria-pressed={selected.id === thread.id}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${selected.id === thread.id ? "border border-border/30 bg-secondary/60" : "hover:bg-secondary/30"}`}
                >
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {thread.kind === "ai-preview" ? (
                      <Bot className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      thread.initials
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm font-medium">
                        {thread.name}
                      </span>
                      <span className="shrink-0 text-[10px] text-muted-foreground">
                        {thread.time}
                      </span>
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {thread.preview}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </section>

        <section
          className={`${mobileView === "list" ? "hidden md:flex" : "flex"} min-w-0 flex-1 flex-col`}
          aria-labelledby="conversation-title"
        >
          <header className="flex items-center gap-3 border-b border-border/30 bg-card/30 px-4 py-3">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-8 w-8 md:hidden"
              onClick={() => setMobileView("list")}
              aria-label="Back to conversation samples"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
              {selected.kind === "ai-preview" ? (
                <Bot className="h-4 w-4" aria-hidden="true" />
              ) : (
                selected.initials
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h2
                id="conversation-title"
                className="truncate text-sm font-semibold"
              >
                {selected.name}
              </h2>
              <p className="text-[10px] text-muted-foreground">
                {selected.kind === "ai-preview"
                  ? "AI provider unavailable"
                  : "Local sample · presence unavailable"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => announceUnavailable("Voice calling")}
                aria-label="Voice calling unavailable"
              >
                <PhoneOff className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => announceUnavailable("Video calling")}
                aria-label="Video calling unavailable"
              >
                <VideoOff className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => announceUnavailable("Conversation options")}
                aria-label="Conversation options unavailable"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <div className="mx-auto mb-5 flex max-w-2xl items-center justify-center gap-2 rounded-lg border border-border/30 bg-card/30 px-3 py-2 text-center text-[10px] text-muted-foreground">
              <LockKeyhole className="h-3 w-3" aria-hidden="true" />
              Encryption and delivery are not verified in this preview.
            </div>
            <div className="mx-auto max-w-2xl space-y-3">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${message.mine ? "bg-primary text-primary-foreground" : "bg-secondary/60"}`}
                  >
                    <p>{message.text}</p>
                    <p className="mt-1 text-[10px] opacity-60">
                      {message.time} · preview only
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-border/30 bg-card/30 p-3">
            <div className="mx-auto flex max-w-2xl items-center gap-2">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => announceUnavailable("Image upload")}
                aria-label="Image upload unavailable"
              >
                <ImageOff className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => announceUnavailable("Emoji picker")}
                aria-label="Emoji picker unavailable"
              >
                <SmilePlus className="h-4 w-4" />
              </Button>
              <Input
                aria-label="Local message draft"
                className="h-9 flex-1 rounded-full border-border/30 bg-background/50 text-sm"
                placeholder="Write a local draft only"
                value={draft}
                onChange={event => setDraft(event.target.value)}
                onKeyDown={event => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    announceUnavailable("Message delivery");
                  }
                }}
              />
              <Button
                type="button"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => announceUnavailable("Message delivery")}
                disabled={!draft.trim()}
                aria-label="Send message unavailable"
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </div>
            <p className="mx-auto mt-2 max-w-2xl text-center text-[10px] text-muted-foreground">
              Drafts remain in component memory only. Nothing is sent or
              retained.
            </p>
          </div>
        </section>
      </div>
      <div className="border-t border-border/30 bg-background px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-start gap-3">
          <ShieldAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
            aria-hidden="true"
          />
          <p className="text-xs leading-5 text-muted-foreground">
            Real messaging requires authenticated participants, consent, secure
            transport, abuse reporting, retention and deletion controls,
            delivery receipts, verified AI boundaries, and a ledger-backed
            authorization flow for any financial action.
          </p>
        </div>
      </div>
      <p
        className="border-t border-border/30 bg-card/20 px-4 py-3 text-center text-sm text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
      <div className="sr-only" aria-live="polite">
        <CheckCircle2 /> No message provider is connected.
      </div>
    </main>
  );
}
