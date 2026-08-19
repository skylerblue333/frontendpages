# AssetAllocation review

The `/asset-allocation` route is currently a shared `FeatureUnavailable` boundary rather than a working portfolio workflow. It correctly discloses that the backend contract, authorization, persistence, loading and error states, tests, and operational evidence are incomplete. No portfolio, holding, asset weight, balance, target, price, performance result, rebalance action, transaction, tax result, or investment outcome is fabricated.

This route should remain unavailable until account-scoped financial data, validated market sources, portfolio calculations, authorization, persistence, transaction controls, risk disclosures, and acceptance evidence exist. The remaining task is visual verification at desktop and 390×844 mobile widths.
