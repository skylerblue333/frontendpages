# BulkOrdering review

The `/bulk-ordering` route already uses the shared `FeatureUnavailable` boundary. This is preferable to a mock commerce screen because bulk purchasing is high-risk: the route explicitly states that catalog, inventory, pricing, tax, authorization, payment, fulfillment, cancellation, and reconciliation contracts are not connected and that it does not submit orders or imply payment success.

No products, quantities, prices, taxes, inventory, payment methods, order IDs, fulfillment status, refunds, or successful purchases are fabricated. The remaining work for this route is desktop and mobile visual evidence plus inventory reconciliation.
