# MemorySystem review

The `/memory-system` route currently renders hard-coded personal memories, confidence scores, preference model percentages, context continuity, memory depth, graph-node counts, compression behavior, and a `Memory stored` success toast. These are sensitive personal-data and AI-memory claims requiring consent, provenance, retention, deletion, access controls, model contracts, and privacy guarantees.

The safe replacement is a strictly typed local memory-readiness view. Preserve the concept of entering a draft memory, but label all stored memories, confidence, preference inference, continuity, graph, model, retention, and persistence states unavailable. No personal data should be retained, transmitted, or represented as stored.
