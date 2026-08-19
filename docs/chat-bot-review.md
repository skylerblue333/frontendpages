# ChatBot review

The former route used a shared unavailable boundary with a broad AI-chat description. It has been replaced with a stricter, strictly typed, local-only chatbot readiness workspace.

The new screen explicitly states that no model, provider, prompt, message, response, tool call, memory, or conversation state is loaded or generated. All model selection, conversation, message, and history actions are disabled. The route documents approved model/provider identity, version, region, cost, availability, fallback and secret isolation; system instructions, context limits, attachments, streaming, retries, tools, memory and persistence; input/output moderation, prompt-injection defenses, sensitive-data handling, retention, redaction and disclosures; account authorization, rate limits, abuse controls, error states, audit logs, provider recovery and redacted telemetry. Its capability search filters static local notes only and never calls a model, sends prompts, stores messages, streams output, or persists memory.

`prettier`, `tsc --noEmit`, and the production build completed successfully. Desktop evidence shows balanced AI-state/release cards and a capability map. Mobile evidence stacks the same content cleanly at 390×844 without clipping; model, safety, privacy, reliability, and unavailable-action disclosures remain readable.
