# Engineer review

The `/engineer` route presents AI code-generation, review, debugging, optimization, translation, and explanation modes. It currently reports fabricated review and optimization counts and can imply that processing produced a valid engineering result without a verified model, tool policy, source handling, or output validation contract.

The safe replacement is a strictly typed local AI-engineering readiness view. Preserve mode selection and local input drafting, but mark model execution, code output, review counts, optimization counts, translation, debugging, and persistence unavailable. No code should be sent, generated, executed, or claimed as production-ready.
