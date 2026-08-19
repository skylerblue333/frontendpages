# TransactionHistory review

The `/transaction-history` route currently renders mock send, receive, stake, swap, and purchase records with token amounts, counterparties, dates, statuses, filters, and export behavior. These are financial claims that are not backed by a verified ledger, wallet, exchange, or transaction-indexing service.

The safe replacement is a strictly typed local transaction-readiness view. Preserve type/status/sort controls and ledger structure, but label all records, balances, counterparties, hashes, timestamps, statuses, and exports unavailable. No transaction success, failure, balance effect, or downloadable report should be claimed.
