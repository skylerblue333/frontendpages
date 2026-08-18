# VoiceCommandsRegistry review

## Scope

The `/voice-commands-registry` route currently presents a command catalog with route labels, live voice testing, custom command registration, history, and success messaging. It uses broad casts for command metadata and may imply that voice commands can navigate or execute platform actions.

## Risks identified

Voice commands can become high-impact action triggers. Registry entries require typed intent schemas, authentication, authorization, confirmation policy, privacy and microphone consent, replay protection, auditability, and safe failure handling. Custom registration and live testing must not dispatch commands, mutate accounts, or expose transcripts without an actual governed service.

## Safe upgrade boundary

Replace the screen with a strictly typed local command-intent catalog. Preserve registry search and category filtering, but label routes, execution, microphone input, custom registration, history, and dispatch unavailable. The interface must not execute navigation, transactions, account changes, notifications, or other commands.

## Validation plan

Run Prettier, TypeScript diagnostics, diff checks, and browser verification at `/voice-commands-registry`. Activate blocked tester, custom registration, and execution controls and verify no microphone, transcript, route, account, or action mutation starts.
