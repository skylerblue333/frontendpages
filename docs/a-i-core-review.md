# AICore review

The `/a-i-core` route is already bounded by the shared `FeatureUnavailable` component. It explicitly states that chat, content generation, market analysis, token balances, recent generations, and the AI Pro upgrade are unavailable without verified model-provider configuration, market-data provenance, usage accounting, privacy controls, authorization, billing, and tested failure handling. No model output, market price, token balance, generation history, upgrade, billing event, or usage record is fabricated.

The remaining task is visual verification at desktop and 390×844 mobile widths. Preserve the current implementation unless capture reveals a responsive or accessibility defect.
