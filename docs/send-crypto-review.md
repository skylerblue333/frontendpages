# SendCrypto review

The `/send-crypto` route was upgraded into a local high-risk transaction governance preview without connecting wallets, RPC providers, balances, token metadata, fee estimation, private-key custody, signing, broadcast, confirmation, or transaction history. It preserves network and wallet intent, local recipient and positive-amount validation, fee intent, local draft/reset behavior, nonce/replay/signing gates, and disabled consequential actions.

| Area | Result |
|---|---|
| Data boundary | No wallet, balance, private key, seed phrase, recipient validity, token price, fee quote, chain state, signature, nonce, transaction hash, confirmation, token movement, or financial outcome is asserted. |
| Safety | Real activation requires authenticated wallet ownership, chain ID, recipient checksum, token contract and decimals, balance/allowance, nonce, custody controls, hardware/external signing, replay protection, idempotency, fee limits, user confirmation, RPC simulation, signature verification, broadcast, pending/failed/confirmed states, hash provenance, and audit. |
| Mutations | Save is available only as local draft state after local minimum validation. Reset is local-only. Sign, broadcast, fee estimation, and hash viewing remain disabled. |
| Validation | Prettier, strict TypeScript, production build, and desktop/mobile captures completed. The existing large-chunk advisory remains non-blocking. |

The route is not a wallet, custody service, signing flow, blockchain broadcaster, transfer confirmation, balance updater, or financial-result source.
